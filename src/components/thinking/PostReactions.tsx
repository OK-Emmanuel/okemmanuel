"use client";

import { Heart, Zap, ThumbsDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function PostReactions({ slug }: { slug: string }) {
  const [reactions, setReactions] = useState({ love: 0, clap: 0, dislike: 0 });
  const [userReaction, setUserReaction] = useState<"love" | "clap" | "dislike" | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storageKey = `reaction-${slug}`;
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      setUserReaction(stored as any);
    }

    const fetchReactions = async () => {
      try {
        const res = await fetch(`/api/reactions?slug=${slug}`);
        if (res.ok) {
          const data = await res.json();
          setReactions(data);
        }
      } catch (error) {
        console.error("Failed to fetch reactions", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReactions();
  }, [slug]);

  const handleReaction = async (type: "love" | "clap" | "dislike") => {
    const storageKey = `reaction-${slug}`;
    const previousReaction = userReaction;

    setUserReaction(userReaction === type ? null : type);

    try {
      const res = await fetch(`/api/reactions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, reaction: userReaction === type ? null : type, previousReaction }),
      });

      if (res.ok) {
        const data = await res.json();
        setReactions(data);
        if (userReaction === type) {
          localStorage.removeItem(storageKey);
        } else {
          localStorage.setItem(storageKey, type);
        }
      }
    } catch (error) {
      console.error("Failed to update reaction", error);
      setUserReaction(previousReaction);
    }
  };

  if (isLoading) return null;

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleReaction("love")}
        className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-colors ${
          userReaction === "love"
            ? "border-red-500/50 bg-red-500/10 text-red-500"
            : "border-line bg-surface-raised text-muted hover:border-red-500/30 hover:text-red-500"
        }`}
        aria-label="Love"
      >
        <Heart className="h-4 w-4" fill={userReaction === "love" ? "currentColor" : "none"} />
        <span className="text-xs">{reactions.love}</span>
      </button>

      <button
        onClick={() => handleReaction("clap")}
        className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-colors ${
          userReaction === "clap"
            ? "border-amber-500/50 bg-amber-500/10 text-amber-500"
            : "border-line bg-surface-raised text-muted hover:border-amber-500/30 hover:text-amber-500"
        }`}
        aria-label="Awesome"
      >
        <Zap className="h-4 w-4" fill={userReaction === "clap" ? "currentColor" : "none"} />
        <span className="text-xs">{reactions.clap}</span>
      </button>

      <button
        onClick={() => handleReaction("dislike")}
        className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-colors ${
          userReaction === "dislike"
            ? "border-slate-500/50 bg-slate-500/10 text-slate-500"
            : "border-line bg-surface-raised text-muted hover:border-slate-500/30 hover:text-slate-500"
        }`}
        aria-label="Dislike"
      >
        <ThumbsDown className="h-4 w-4" fill={userReaction === "dislike" ? "currentColor" : "none"} />
        <span className="text-xs">{reactions.dislike}</span>
      </button>
    </div>
  );
}
