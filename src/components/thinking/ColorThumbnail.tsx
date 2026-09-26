type ColorThumbnailProps = {
  title: string;
  category?: string;
  className?: string;
  showTitle?: boolean;
};

const PALETTES = [
  "from-[#4F46E5] via-[#7C3AED] to-[#A855F7]",
  "from-[#0F766E] via-[#14B8A6] to-[#22D3EE]",
  "from-[#C2410C] via-[#F97316] to-[#F59E0B]",
  "from-[#1D4ED8] via-[#3B82F6] to-[#60A5FA]",
  "from-[#7C2D12] via-[#DC2626] to-[#FB7185]",
  "from-[#14532D] via-[#22C55E] to-[#86EFAC]",
];

function getInitials(value: string) {
  return value
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("") || "T";
}

function getPalette(title: string) {
  const hash = title.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return PALETTES[hash % PALETTES.length];
}

export default function ColorThumbnail({
  title,
  category,
  className = "",
  showTitle = true,
}: ColorThumbnailProps) {
  const palette = getPalette(title);
  const initials = getInitials(title);

  return (
    <div
      className={`relative isolate h-full w-full overflow-hidden rounded-2xl border border-line bg-surface-raised ${className}`}
      aria-label={`Thumbnail for ${title}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${palette}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.22),transparent_42%)]" />
      <div className="absolute inset-0 bg-linear-to-t from-background/55 via-background/10 to-transparent" />

      <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm">
        <span className="font-serif text-sm text-white/90">{initials}</span>
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        {category && (
          <span className="inline-flex rounded-full border border-white/20 bg-background/10 px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
            {category}
          </span>
        )}

        {showTitle && (
          <p className="mt-3 max-w-[15rem] font-serif text-xl leading-tight text-white drop-shadow-[0_2px_12px_rgba(15,23,42,0.4)]">
            {title}
          </p>
        )}
      </div>
    </div>
  );
}
