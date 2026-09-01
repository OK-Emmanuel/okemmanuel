"use client";

import { useEffect, useState } from "react";

export default function PostReads({ slug }: { slug: string }) {
  const [totalReads, setTotalReads] = useState(0);

  useEffect(() => {
    const recordRead = async () => {
      try {
        const res = await fetch(`/api/reads`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug }),
        });

        if (res.ok) {
          const data = await res.json();
          setTotalReads(data.totalReads);
        }
      } catch (error) {
        console.error("Failed to record read", error);
      }
    };

    recordRead();
  }, [slug]);

  return (
    <div>
      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-3">Total Reads</h4>
      <p className="font-serif text-lg text-foreground">
        {totalReads.toLocaleString()}
      </p>
    </div>
  );
}
