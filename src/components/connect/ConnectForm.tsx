"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const REASONS = [
  "Work with me",
  "Invite me to speak",
  "Collaborate",
  "Learn from me / mentorship",
  "Support an initiative",
  "A strategic conversation",
];

export default function ConnectForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    // TODO: wire up to a real backend (e.g. Formspree, Resend, or a Next.js API route).
    await new Promise((resolve) => setTimeout(resolve, 900));

    setStatus("success");
  }

  return (
    <section id="form" className="relative py-16 md:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl rounded-2xl border border-line bg-surface p-8 md:p-10">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <p className="font-serif text-2xl text-gold-soft">
                Message received.
              </p>
              <p className="mt-3 max-w-sm text-muted">
                Thank you for reaching out — I&apos;ll get back to you
                shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-muted">
                  Name
                  <input
                    required
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="rounded-lg border border-line bg-surface-raised px-4 py-3 text-foreground outline-none transition-colors focus:border-gold/60"
                    placeholder="Your name"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-muted">
                  Email
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="rounded-lg border border-line bg-surface-raised px-4 py-3 text-foreground outline-none transition-colors focus:border-gold/60"
                    placeholder="you@company.com"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2 text-sm text-muted">
                This is about
                <select
                  required
                  name="reason"
                  defaultValue=""
                  className="rounded-lg border border-line bg-surface-raised px-4 py-3 text-foreground outline-none transition-colors focus:border-gold/60"
                >
                  <option value="" disabled>
                    Select a reason
                  </option>
                  {REASONS.map((reason) => (
                    <option key={reason} value={reason}>
                      {reason}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-2 text-sm text-muted">
                Organization (optional)
                <input
                  name="organization"
                  type="text"
                  autoComplete="organization"
                  className="rounded-lg border border-line bg-surface-raised px-4 py-3 text-foreground outline-none transition-colors focus:border-gold/60"
                  placeholder="Company or brand"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm text-muted">
                Tell me more
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="resize-none rounded-lg border border-line bg-surface-raised px-4 py-3 text-foreground outline-none transition-colors focus:border-gold/60"
                  placeholder="What's on your mind?"
                />
              </label>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-[#08080a] transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
              >
                {status === "submitting" ? "Sending…" : "Send Message →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
