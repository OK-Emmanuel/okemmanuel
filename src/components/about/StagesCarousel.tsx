"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type StageCarouselItem = {
  title: string;
  description: string;
  image?: string;
  color?: string;
};

type StagesCarouselProps = {
  items: StageCarouselItem[];
  autoPlayInterval?: number;
};

export default function StagesCarousel({
  items,
  autoPlayInterval = 5000,
}: StagesCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlay) return;

    autoPlayTimerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlay, items.length, autoPlayInterval]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), autoPlayInterval);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), autoPlayInterval);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndXRef.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    const diff = touchStartXRef.current - touchEndXRef.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const currentItem = items[activeIndex];
  const bgColor = currentItem.color || "from-slate-900 to-slate-800";

  return (
    <section className={`relative min-h-screen overflow-hidden bg-linear-to-br ${bgColor}`}>
      {/* Background transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${activeIndex}`}
          className="absolute inset-0 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      <div className="relative z-10 flex h-screen items-center px-4 md:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            {/* Left content section */}
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <span className="text-sm font-semibold uppercase tracking-wider text-amber-500">
                  {activeIndex + 1} of {items.length}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${activeIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="font-serif text-4xl md:text-5xl text-white">
                    {currentItem.title}
                  </h2>
                  <p className="mt-6 max-w-lg leading-relaxed text-gray-300">
                    {currentItem.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation arrows */}
              <div className="mt-12 flex gap-4">
                <button
                  onClick={handlePrev}
                  className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all hover:bg-white/10"
                  aria-label="Previous slide"
                >
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all hover:bg-white/10"
                  aria-label="Next slide"
                >
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right carousel section */}
            <div
              className="relative flex items-center justify-center"
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative w-full aspect-square max-w-sm">
                {/* Carousel items */}
                <AnimatePresence mode="wait">
                  {items.map((item, index) => {
                    const isActive = index === activeIndex;
                    const offset = (index - activeIndex + items.length) % items.length;
                    const isVisible = offset <= 2;

                    if (!isVisible) return null;

                    return (
                      <motion.div
                        key={`item-${index}`}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 0.8, y: 40 }}
                        animate={{
                          opacity: isActive ? 1 : 0.4,
                          scale: isActive ? 1 : 0.85,
                          y: isActive ? 0 : 40,
                          zIndex: isActive ? 10 : 5 - offset,
                        }}
                        exit={{ opacity: 0, scale: 0.8, y: 40 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div
                          className={`relative h-full w-full rounded-2xl border transition-all ${
                            isActive
                              ? "border-amber-500/50 bg-linear-to-br from-white/10 to-white/5"
                              : "border-white/10 bg-white/5"
                          } overflow-hidden backdrop-blur-sm`}
                        >
                          {/* Placeholder image background */}
                          {item.image ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={item.image}
                              alt={item.title}
                              className="absolute inset-0 h-full w-full object-cover"
                            />
                          ) : (
                            <div className="absolute inset-0 bg-linear-to-br from-amber-500/20 to-amber-900/20" />
                          )}

                          {/* Content overlay */}
                          <div className="relative flex h-full flex-col justify-end bg-linear-to-t from-black/80 via-transparent to-transparent p-6">
                            <h3 className="font-serif text-2xl text-white">
                              {item.title}
                            </h3>
                            {isActive && (
                              <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="mt-3 text-sm leading-relaxed text-gray-300"
                              >
                                {item.description}
                              </motion.p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="mt-12 flex justify-center gap-2 md:justify-start md:gap-3">
            {items.map((_, index) => (
              <motion.button
                key={`dot-${index}`}
                onClick={() => {
                  setActiveIndex(index);
                  setIsAutoPlay(false);
                  setTimeout(() => setIsAutoPlay(true), autoPlayInterval);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "bg-amber-500 w-8"
                    : "bg-white/30 w-2 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
