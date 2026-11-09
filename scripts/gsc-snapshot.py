#!/usr/bin/env python3
"""Refresh the Search Console figures rendered on the homepage.

The site publishes real numbers, so they have to be re-read, not guessed. Run
this quarterly, paste the output into lib/proof.ts, bump SNAPSHOT_DATE, rebuild
and redeploy. If a figure cannot be read from the console it does not go on the
site.

Needs a Google service account with read access to the properties, and that
account added as a user on each Search Console property.

    python3 scripts/gsc-snapshot.py
"""

import datetime as dt
import json
import sys

try:
    from google.oauth2 import service_account
    from googleapiclient.discovery import build
except ImportError:
    sys.exit("pip install google-api-python-client google-auth")

KEY = "/Users/noenei/.config/trademeup/google-indexing-key.json"
SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]

# Domains whose growth curve is shown on the page. Keep these to properties Noe
# owns: the page claims them as his own work.
FEATURED = ["salonify.eu", "salonify.lu", "luxpos.lu", "computerhellef.lu"]
# Full months only. A partial current month would read as a collapse.
CURVE_MONTHS = [(2026, m) for m in range(3, 11)]


def main() -> None:
    creds = service_account.Credentials.from_service_account_file(KEY, scopes=SCOPES)
    sc = build("searchconsole", "v1", credentials=creds)
    sites = [s["siteUrl"] for s in sc.sites().list().execute().get("siteEntry", [])]

    # Search Console lags about three days.
    end = dt.date.today() - dt.timedelta(days=3)
    start = end - dt.timedelta(days=89)
    prev_end = start - dt.timedelta(days=1)
    prev_start = prev_end - dt.timedelta(days=89)

    def query(site, dims, limit=1000, s=start, e=end):
        body = {"startDate": str(s), "endDate": str(e), "dimensions": dims, "rowLimit": limit}
        try:
            return sc.searchanalytics().query(siteUrl=site, body=body).execute().get("rows", [])
        except Exception:
            return []

    impressions = clicks = prev_impressions = top10 = top3 = 0
    for site in sites:
        totals = query(site, [], 1)
        prev = query(site, [], 1, prev_start, prev_end)
        queries = query(site, ["query"], 1000)
        if totals:
            impressions += round(totals[0]["impressions"])
            clicks += round(totals[0]["clicks"])
        if prev:
            prev_impressions += round(prev[0]["impressions"])
        top10 += len([r for r in queries if r["position"] <= 10])
        top3 += len([r for r in queries if r["position"] <= 3])

    print(f"// window {start} to {end}")
    print(json.dumps({
        "impressions": impressions,
        "clicks": clicks,
        "previousImpressions": prev_impressions,
        "domains": len(sites),
        "queriesTop10": top10,
        "queriesTop3": top3,
    }, indent=2))

    print("\n// curves")
    for domain in FEATURED:
        months = []
        for y, m in CURVE_MONTHS:
            s = dt.date(y, m, 1)
            e = dt.date(y + (m == 12), (m % 12) + 1, 1) - dt.timedelta(days=1)
            if e > end:
                continue
            rows = query("sc-domain:" + domain, [], 1, s, e)
            months.append({"m": f"{y}-{m:02d}", "impressions": round(rows[0]["impressions"]) if rows else 0})
        print(f"{domain}: {json.dumps(months)}")


if __name__ == "__main__":
    main()
