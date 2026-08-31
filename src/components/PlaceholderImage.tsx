import Image from "next/image";

type PlaceholderImageProps = {
  alt: string;
  label?: string;
  className?: string;
  priority?: boolean;
};

/** Uses /template.png as a stand-in for real photography until it's supplied; alt/label describe the intended image. */
export default function PlaceholderImage({
  alt,
  label,
  className = "",
  priority = false,
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-line bg-surface-raised ${className}`}
    >
      <Image
        src="/template.png"
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="object-cover object-top opacity-40 grayscale"
      />
      <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/20 to-transparent" />
      {label && (
        <span className="absolute bottom-4 left-4 rounded-full border border-line bg-background/70 px-3 py-1.5 text-[0.65rem] uppercase tracking-wider text-muted backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  );
}
