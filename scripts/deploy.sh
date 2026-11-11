#!/usr/bin/env bash
#
# Deploy omgnoe.com. Run ON the server, from /opt/omgnoe-com.
#
# Exists because a hand-rolled one-liner took the site down: it piped the build
# through grep and then restarted on `&&`, so a FAILED build still satisfied the
# pipeline and systemd was restarted onto a broken .next. Three locales went 502.
#
# Rules here:
#   1. Never restart unless the build genuinely exited 0.
#   2. Retry the build once. The one real flake is next/font/google failing to
#      reach fonts.googleapis.com at build time, which is transient and fatal.
#   3. Health-check after the restart and shout if it is not serving.
#
set -euo pipefail

cd /opt/omgnoe-com
PORT="${PORT:-3401}"

echo "── pull ───────────────────────────────────────────"
git pull --ff-only origin main

echo "── deps ───────────────────────────────────────────"
pnpm install --frozen-lockfile

echo "── build ──────────────────────────────────────────"
if ! nice -n 19 pnpm build; then
  # The observed failure is Turbopack's font import map, not the network:
  #   "next/font/google queries have exactly one entry"
  # The server reaches fonts.googleapis.com fine (200 in ~50ms). It is a stale
  # .next/cache, and clearing it fixes it every time. So the retry clears first.
  echo "build failed, clearing .next/cache and retrying once"
  rm -rf .next/cache
  if ! nice -n 19 pnpm build; then
    echo "BUILD FAILED TWICE. Service left untouched and still serving the old build."
    exit 1
  fi
fi

echo "── restart ────────────────────────────────────────"
systemctl restart omgnoe

for i in $(seq 1 20); do
  code=$(curl -s -o /dev/null -w '%{http_code}' "http://127.0.0.1:${PORT}/" || true)
  if [ "$code" = "200" ]; then
    echo "serving 200 after ${i}s"
    exit 0
  fi
  sleep 1
done

echo "UNHEALTHY after restart (last code: ${code:-none}). Check: journalctl -u omgnoe -n 50"
exit 1
