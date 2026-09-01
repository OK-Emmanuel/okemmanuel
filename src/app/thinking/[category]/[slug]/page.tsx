import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "next-sanity";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HomeCta from "@/components/HomeCta";
import Reveal from "@/components/motion/Reveal";
import { client } from "@/sanity/client";
import { POST_BY_SLUG_QUERY } from "@/sanity/queries";
import { urlForImage } from "@/sanity/image";
import RelatedThoughts from "@/components/thinking/RelatedThoughts";
import ShareButtons from "@/components/thinking/ShareButtons";
import PostReads from "@/components/thinking/PostReads";
import PostReactions from "@/components/thinking/PostReactions";
import { ArrowLeft } from "lucide-react";

type PostDoc = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: Parameters<typeof urlForImage>[0];
  body: any[];
  tags?: string[];
  publishedAt: string;
  category: { title: string; slug: string };
};

async function getPost(slug: string) {
  return client.fetch<PostDoc | null>(
    POST_BY_SLUG_QUERY,
    { slug },
    { next: { revalidate: 60 } },
  );
}

function estimateReadingTime(blocks: any[]) {
  if (!blocks) return 1;
  const text = blocks
    .filter((block) => block._type === "block" && block.children)
    .map((block) => block.children.map((child: any) => child.text).join(""))
    .join(" ");
  const wordCount = text.split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / 200));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug).catch(() => null);
  return {
    title: post ? `${post.title} — Olawuni Emmanuel Kayode` : "Post — Olawuni Emmanuel Kayode",
    description: post?.excerpt,
  };
}

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-12 font-serif text-3xl leading-tight text-foreground md:text-4xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 font-serif text-2xl leading-snug text-foreground md:text-3xl">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mt-6 leading-relaxed text-muted md:text-lg">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-8 border-l-4 border-gold/50 pl-6 font-serif text-xl italic leading-relaxed text-foreground md:text-2xl">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-6 list-disc pl-6 space-y-3 text-muted md:text-lg">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-6 list-decimal pl-6 space-y-3 text-muted md:text-lg">{children}</ol>
    ),
  },
  types: {
    image: ({ value }) => (
      <div className="relative mt-12 mb-12 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line bg-surface-raised">
        <Image
          src={urlForImage(value).width(1200).url()}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    ),
  },
};

export default async function ThinkingPostPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const post = await getPost(slug).catch(() => null);

  if (!post) {
    notFound();
  }

  const readingTime = estimateReadingTime(post.body);

  return (
    <>
      <Nav />
      <main className="flex-1 bg-surface">
        <article>
          <section className="relative border-b border-line pt-32 pb-12 md:pt-40 md:pb-16">
            <div className="section-shell">
              <Reveal>
                <Link 
                  href={`/thinking/${category}`} 
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted transition-colors hover:text-gold mb-8"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to {post.category.title}
                </Link>
                <div className="max-w-4xl">
                  <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-muted mb-4">
                    <span className="text-gold">{post.category.title}</span>
                  </div>
                  <h1 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
                    {post.title}
                  </h1>
                  {post.excerpt && (
                    <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted md:text-2xl font-serif italic">
                      {post.excerpt}
                    </p>
                  )}
                </div>
              </Reveal>
            </div>
          </section>

          <section className="relative py-12 md:py-24 bg-background">
            <div className="section-shell">
              <div className="grid gap-16 lg:grid-cols-[1fr_280px]">
                
                {/* Main Content */}
                <div className="min-w-0 max-w-3xl w-full">
                  <Reveal delay={0.1}>
                    {post.coverImage && (
                      <div className="relative mb-16 aspect-[21/9] w-full overflow-hidden rounded-2xl border border-line bg-surface-raised">
                        <Image
                          src={urlForImage(post.coverImage).width(1600).url()}
                          alt={post.title}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    )}
                    
                    <div className="prose-editorial">
                      <PortableText
                        value={post.body}
                        components={portableTextComponents}
                      />
                    </div>
                  </Reveal>
                </div>

                {/* Sidebar Metadata */}
                <aside className="border-t border-line pt-12 lg:border-t-0 lg:border-l lg:pl-12 lg:pt-0">
                  <Reveal delay={0.2} className="sticky top-32 flex flex-col gap-10">
                    
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-3">Published</h4>
                      <p className="font-serif text-lg text-foreground">
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-3">Reading Time</h4>
                      <p className="font-serif text-lg text-foreground">
                        {readingTime} minute read
                      </p>
                    </div>

                    <PostReads slug={post.slug} />

                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-3">Author</h4>
                      <p className="font-serif text-lg text-foreground">
                        O.K. Emmanuel
                      </p>
                    </div>

                    {post.tags && post.tags.length > 0 && (
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-3">Topics</h4>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-line bg-surface-raised px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-gold/50 hover:text-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-3">Reactions</h4>
                      <PostReactions slug={post.slug} />
                    </div>

                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-3">Share</h4>
                      <ShareButtons title={post.title} />
                    </div>

                  </Reveal>
                </aside>

              </div>
            </div>
          </section>
        </article>

        <RelatedThoughts categorySlug={category} currentPostId={post._id} />
        <HomeCta />
      </main>
      <Footer />
    </>
  );
}
