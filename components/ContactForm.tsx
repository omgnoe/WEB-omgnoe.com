"use client";

import { useState, type FormEvent } from "react";
import type { Locale } from "@/lib/i18n";
import { dict } from "@/lib/ui";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = dict(locale).form;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setError(typeof json.error === "string" ? json.error : t.failed);
      }
    } catch {
      setStatus("error");
      setError(t.failed);
    }
  }

  if (status === "sent") {
    return (
      <div className="grid h-full min-h-72 place-items-center rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
        <div>
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent text-white">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
              <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <p className="font-display mt-5 text-xl font-bold text-white">{t.sentTitle}</p>
<p className="mt-2 text-sm text-white/60">{t.sentBody}</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-left sm:p-6">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-white/60">{t.name}</span>
          <input
            name="name"
            required
            maxLength={120}
            autoComplete="name"
            className="cf-input"
            placeholder={t.namePlaceholder}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-white/60">{t.email}</span>
          <input
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            className="cf-input"
            placeholder={t.emailPlaceholder}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-white/60">{t.phone}</span>
          <input
            name="phone"
            type="tel"
            maxLength={40}
            autoComplete="tel"
            className="cf-input"
            placeholder={t.phonePlaceholder}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-white/60">{t.company}</span>
          <input name="company" maxLength={120} autoComplete="organization" className="cf-input" placeholder={t.companyPlaceholder} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-white/60">{t.need}</span>
          <select name="service" className="cf-input" defaultValue={t.services[0]}>
            {t.services.map((s) => (
              <option key={s} value={s} className="text-ink">
                {s}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-white/60">{t.budget}</span>
          <select name="budget" className="cf-input" defaultValue={t.budgets[0]}>
            {t.budgets.map((s) => (
              <option key={s} value={s} className="text-ink">
                {s}
              </option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-medium text-white/60">{t.timeline}</span>
          <select name="timeline" className="cf-input" defaultValue={t.timelines[0]}>
            {t.timelines.map((s) => (
              <option key={s} value={s} className="text-ink">
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-3 block">
        <span className="mb-1.5 block text-xs font-medium text-white/60">{t.project}</span>
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={4000}
          rows={4}
          className="cf-input resize-y"
          placeholder={t.projectPlaceholder}
        />
      </label>

      {/* Honeypot, invisible to humans */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] top-auto h-px w-px opacity-0"
      />

      {error && <p className="mt-3 text-sm text-red-300">{error}</p>}

      <button type="submit" disabled={status === "sending"} className="btn btn-accent mt-4 w-full disabled:opacity-60">
        {status === "sending" ? t.sending : t.submit}
      </button>
<p className="mt-3 text-center text-[0.7rem] text-white/40">{t.privacy}</p>
    </form>
  );
}
