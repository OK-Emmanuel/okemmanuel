import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/client";
import { RELATED_POSTS_QUERY } from "@/sanity/queries";
import { urlForImage } from "@/sanity/image";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";

type RelatedPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: any;
  publishedAt: string;
  category: { title: string; slug: string };
};

export default async function RelatedThoughts({ categorySlug, currentPostId }: { categorySlug: string, currentPostId: string }) {
  const related = await client.fetch<RelatedPost[]>(
    RELATED_POSTS_QUERY,
    { categorySlug, currentPostId },
    { next: { revalidate: 60 } }
  ).catch(() => []);

  if (!related || related.length === 0) return null;

  return (
    <section className="relative border-t border-line py-16 md:py-24 bg-surface">
      <div className="section-shell">
        <Reveal>
          <h2 className="font-serif text-2xl text-foreground md:text-3xl">Related Thoughts</h2>
        </Reveal>
        <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((post) => (
            <RevealItem key={post._id} className="group relative flex flex-col justify-between rounded-2xl border border-line bg-surface-raised p-6">
              <div>
                {post.coverImage && (
                  <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-xl border border-line bg-surface">
                    <Image
                      src={urlForImage(post.coverImage).width(600).url()}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted mb-3">
                  <span className="text-gold">{post.category.title}</span>
                  <span>&bull;</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
                </div>
                <h3 className="font-serif text-lg leading-tight text-foreground group-hover:text-gold-soft">
                  {post.title}
                </h3>
              </div>
              <Link href={`/thinking/${post.category.slug}/${post.slug}`} className="absolute inset-0 z-10">
                <span className="sr-only">Read {post.title}</span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
