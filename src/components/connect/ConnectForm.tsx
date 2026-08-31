"use client";

import ConnectFormContent from "./ConnectFormContent";

export default function ConnectForm() {
  return (
    <section id="form" className="relative py-16 md:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl rounded-2xl border border-line bg-surface p-8 md:p-10">
          <ConnectFormContent />
        </div>
      </div>
    </section>
  );
}
