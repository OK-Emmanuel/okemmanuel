import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { client } from "@/sanity/client";
import { ALL_POSTS_QUERY, FEATURED_POSTS_QUERY } from "@/sanity/queries";
import { urlForImage } from "@/sanity/image";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import ColorThumbnail from "@/components/thinking/ColorThumbnail";

type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: any;
  publishedAt: string;
  category: { title: string; slug: string };
};

export default async function ThinkingPreview() {
  const [featuredPosts, recentPosts] = await Promise.all([
    client.fetch<Post[]>(FEATURED_POSTS_QUERY, {}, { next: { revalidate: 60 } }).catch(() => []),
    client.fetch<Post[]>(ALL_POSTS_QUERY, {}, { next: { revalidate: 60 } }).catch(() => []),
  ]);

  const posts = featuredPosts.length > 0 ? featuredPosts : recentPosts.slice(0, 3);

  return (
    <section className="relative border-y border-line bg-surface py-24 md:py-32">
      <div className="section-shell">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Thinking</p>
              <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
                Notes on building, leadership and the systems behind meaningful work.
              </h2>
            </div>

            <Link
              href="/thinking"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
            >
              Explore all thoughts
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </Reveal>

        {posts.length === 0 ? (
          <Reveal className="mt-10 max-w-2xl text-lg leading-relaxed text-muted">
            I&apos;m collecting and refining the ideas I want to share publicly. The thinking library is being filled with practical notes on product, leadership and building with intention.
          </Reveal>
        ) : (
          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <RevealItem key={post._id}>
                <Link
                  href={`/thinking/${post.category?.slug}/${post.slug}`}
                  className="group block h-full overflow-hidden rounded-2xl border border-line bg-background transition-colors hover:border-gold/40 hover:bg-surface-raised"
                >
                  <div className="relative aspect-[4/3] overflow-hidden border-b border-line bg-surface-raised">
                    {post.coverImage ? (
                      <Image
                        src={urlForImage(post.coverImage).url()}
                        alt={post.title}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <ColorThumbnail
                        title={post.title}
                        category={post.category?.title}
                        className="!rounded-none !border-0"
                        showTitle={false}
                      />
                    )}
                  </div>

                  <div className="flex h-full flex-col p-6">
                    <div className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                      <span className="text-gold">{post.category?.title ?? "Thought"}</span>
                      <span aria-hidden="true">•</span>
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    <h3 className="mt-4 font-serif text-2xl leading-tight text-foreground transition-colors group-hover:text-gold-soft">
                      {post.title}
                    </h3>

                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                      {post.excerpt}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors group-hover:text-gold">
                      Read the note
                      <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                    </span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        )}
      </div>
    </section>
  );
}
