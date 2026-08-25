"use client";

import { useState, type FormEvent } from "react";
import AmbientBackground from "./AmbientBackground";

type Status = "idle" | "submitting" | "success" | "error";

export default function FinalCta() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    // TODO: wire up to a real backend (e.g. Formspree, Resend, or a Next.js API route).
    await new Promise((resolve) => setTimeout(resolve, 900));

    setStatus("success");
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line py-28 md:py-36"
    >
      <AmbientBackground variant="orbit" />

      <div className="section-shell relative grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
            Have a technology problem worth solving?
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted">
            Tell me what you&apos;re building, what isn&apos;t working, or
            where you believe technology could create leverage.
          </p>
          <p className="mt-8 text-sm text-muted/80">
            For consulting, product development, AI automation and strategic
            technology engagements.
          </p>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-8 md:p-10">
          {status === "success" ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
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
                What are you building or trying to solve?
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="resize-none rounded-lg border border-line bg-surface-raised px-4 py-3 text-foreground outline-none transition-colors focus:border-gold/60"
                  placeholder="Tell me a bit about the problem..."
                />
              </label>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-[#08080a] transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
              >
                {status === "submitting"
                  ? "Sending…"
                  : "Start a Conversation →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
