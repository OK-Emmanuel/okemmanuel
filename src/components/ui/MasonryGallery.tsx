"use client";

import Image from "next/image";
import Reveal, { RevealGroup, RevealItem } from "../motion/Reveal";
import { urlForImage } from "@/sanity/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type GalleryImage = {
  _id: string;
  title: string;
  image: any;
  category?: string;
  featured?: boolean;
};

export default function MasonryGallery({ images }: { images: GalleryImage[] }) {
  const [filter, setFilter] = useState<string>("All");

  if (!images || images.length === 0) return null;

  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(images.map((img) => img.category).filter(Boolean)))];

  const filteredImages = filter === "All" ? images : images.filter((img) => img.category === filter);

  // Simple column distribution for masonry effect
  const columns = {
    col1: [] as GalleryImage[],
    col2: [] as GalleryImage[],
    col3: [] as GalleryImage[],
  };

  filteredImages.forEach((img, i) => {
    if (i % 3 === 0) columns.col1.push(img);
    else if (i % 3 === 1) columns.col2.push(img);
    else columns.col3.push(img);
  });

  return (
    <section className="relative py-16 md:py-32">
      <div className="section-shell">
        <Reveal>
          <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
            Visual Proof.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted md:text-xl">
            A curated look into speaking engagements, events, mentorship sessions, and collaborations.
          </p>
        </Reveal>

        {categories.length > 1 && (
          <Reveal delay={0.1} className="mt-12 flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as string)}
                className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  filter === cat
                    ? "bg-foreground text-background"
                    : "border border-line bg-surface text-muted hover:border-gold/50 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </Reveal>
        )}

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[columns.col1, columns.col2, columns.col3].map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-6">
              <AnimatePresence>
                {col.map((img) => (
                  <motion.div
                    key={img._id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="group relative overflow-hidden rounded-2xl border border-line bg-surface-raised"
                  >
                    <Image
                      src={urlForImage(img.image).width(800).url()}
                      alt={img.title}
                      width={800}
                      height={img.featured ? 800 : 600}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6">
                      {img.category && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gold mb-2">
                          {img.category}
                        </span>
                      )}
                      <p className="font-serif text-lg leading-tight text-white translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        {img.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
