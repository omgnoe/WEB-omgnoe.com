"use client";

import { useState, type FormEvent } from "react";

const SERVICES = [
  "Website",
  "Online shop",
  "iOS / Android app",
  "Web platform / SaaS",
  "App publishing",
  "IT help & support",
  "Cybersecurity",
  "Hosting & IT management",
  "Something else",
];

const BUDGETS = [
  "Not sure yet",
  "Under 2.500 EUR",
  "2.500 to 10.000 EUR",
  "10.000 to 25.000 EUR",
  "25.000 EUR or more",
];

const TIMELINES = [
  "As soon as possible",
  "Within 1 to 3 months",
  "In 3 months or later",
  "Flexible",
];

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
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
        setError(typeof json.error === "string" ? json.error : "Sending failed. Please email me directly.");
      }
    } catch {
      setStatus("error");
      setError("Sending failed. Please email me directly.");
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
          <p className="font-display mt-5 text-xl font-bold text-white">Message sent.</p>
          <p className="mt-2 text-sm text-white/60">
            Thanks! I read every inquiry personally and usually reply within a day.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-left sm:p-6">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-white/60">Name *</span>
          <input
            name="name"
            required
            maxLength={120}
            autoComplete="name"
            className="cf-input"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-white/60">Email *</span>
          <input
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            className="cf-input"
            placeholder="you@company.com"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-white/60">Phone</span>
          <input
            name="phone"
            type="tel"
            maxLength={40}
            autoComplete="tel"
            className="cf-input"
            placeholder="+352 ... (optional)"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-white/60">Company</span>
          <input name="company" maxLength={120} autoComplete="organization" className="cf-input" placeholder="Optional" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-white/60">I need</span>
          <select name="service" className="cf-input" defaultValue={SERVICES[0]}>
            {SERVICES.map((s) => (
              <option key={s} value={s} className="text-ink">
                {s}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-white/60">Budget</span>
          <select name="budget" className="cf-input" defaultValue={BUDGETS[0]}>
            {BUDGETS.map((s) => (
              <option key={s} value={s} className="text-ink">
                {s}
              </option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-medium text-white/60">Timeline</span>
          <select name="timeline" className="cf-input" defaultValue={TIMELINES[0]}>
            {TIMELINES.map((s) => (
              <option key={s} value={s} className="text-ink">
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-3 block">
        <span className="mb-1.5 block text-xs font-medium text-white/60">Project *</span>
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={4000}
          rows={4}
          className="cf-input resize-y"
          placeholder="What do you want to build or fix? Goals, current situation, links. The more detail, the better my answer."
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
        {status === "sending" ? "Sending…" : "Send inquiry"}
      </button>
      <p className="mt-3 text-center text-[0.7rem] text-white/40">
        No newsletter, no spam. Your message goes straight to me.
      </p>
    </form>
  );
}
