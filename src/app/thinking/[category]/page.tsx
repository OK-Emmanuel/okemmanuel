import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HomeCta from "@/components/HomeCta";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { client } from "@/sanity/client";
import { CATEGORY_BY_SLUG_QUERY, POSTS_BY_CATEGORY_QUERY, CATEGORIES_QUERY } from "@/sanity/queries";
import { urlForImage } from "@/sanity/image";

type CategoryDoc = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  postCount?: number;
};

type PostSummary = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: any;
  tags?: string[];
  publishedAt: string;
};

async function getCategory(slug: string) {
  return client.fetch<CategoryDoc | null>(
    CATEGORY_BY_SLUG_QUERY,
    { slug },
    { next: { revalidate: 60 } },
  );
}

async function getPosts(slug: string) {
  return client.fetch<PostSummary[]>(
    POSTS_BY_CATEGORY_QUERY,
    { categorySlug: slug },
    { next: { revalidate: 60 } },
  );
}

async function getAllCategories() {
  return client.fetch<CategoryDoc[]>(CATEGORIES_QUERY, {}, { next: { revalidate: 60 } }).catch(() => []);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = await getCategory(slug).catch(() => null);
  const title = category?.title ?? "Category";
  return {
    title: `${title} — Thinking — O.K. Emmanuel`,
    description: category?.description,
  };
}

export default async function ThinkingCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const [category, posts, allCategories] = await Promise.all([
    getCategory(slug).catch(() => null),
    getPosts(slug).catch(() => []),
    getAllCategories()
  ]);

  if (!category) {
    notFound();
  }

  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="relative border-b border-line bg-surface pt-32 pb-16 md:pt-48 md:pb-24">
          <div className="section-shell">
            <h1 className="max-w-4xl font-serif text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              {category.title}
            </h1>
            {category.description && (
              <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
                {category.description}
              </p>
            )}
          </div>
        </section>
        
        <section className="relative py-12 md:py-24">
          <div className="section-shell">
            <div className="mb-16 flex flex-wrap items-center gap-3 border-b border-line pb-8">
              <Link
                href="/thinking"
                className="rounded-full border border-line bg-surface px-5 py-2 text-xs font-medium uppercase tracking-wider text-muted transition-colors hover:border-gold/50 hover:text-foreground"
              >
                All Thoughts
              </Link>
              {allCategories.filter(c => (c.postCount ?? 0) > 0 || c.slug === category.slug).map((cat) => (
                <Link
                  key={cat._id}
                  href={`/thinking/${cat.slug}`}
                  className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                    cat.slug === category.slug
                      ? "bg-foreground text-background"
                      : "border border-line bg-surface font-medium text-muted hover:border-gold/50 hover:text-foreground"
                  }`}
                >
                  {cat.title}
                </Link>
              ))}
            </div>

            {posts.length === 0 ? (
              <Reveal delay={0.1}>
                <p className="max-w-2xl font-serif text-xl italic text-gold-soft">
                  Nothing published in this category yet — the first pieces are
                  on their way.
                </p>
              </Reveal>
            ) : (
              <RevealGroup className="grid gap-12 lg:grid-cols-[1fr_320px]">
                <div className="flex flex-col gap-16">
                  {posts.map((post) => (
                    <RevealItem key={post._id} className="group relative flex flex-col gap-6 sm:flex-row sm:items-start">
                      {post.coverImage && (
                        <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl border border-line bg-surface-raised sm:w-64">
                          <Image
                            src={urlForImage(post.coverImage).url()}
                            alt={post.title}
                            fill
                            sizes="(min-width: 640px) 256px, 100vw"
                            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <Link href={`/thinking/${category.slug}/${post.slug}`} className="absolute inset-0 z-10">
                          <span className="sr-only">Read {post.title}</span>
                        </Link>
                        <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-muted">
                          <span className="text-gold">{category.title}</span>
                          <span>&bull;</span>
                          <span>
                            {new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                          </span>
                        </div>
                        <h3 className="mt-4 font-serif text-2xl leading-tight text-foreground transition-colors group-hover:text-gold-soft md:text-3xl">
                          {post.title}
                        </h3>
                        <p className="mt-4 text-muted leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors group-hover:text-gold">
                          Read piece <span aria-hidden>→</span>
                        </span>
                      </div>
                    </RevealItem>
                  ))}
                </div>
                
                <div className="hidden lg:block border-l border-line pl-12">
                  <div className="sticky top-32">
                    <h3 className="font-serif text-xl text-foreground mb-6">Topics &amp; Categories</h3>
                    <ul className="flex flex-col gap-4">
                      {allCategories.map((cat) => (
                        <li key={cat._id}>
                          <Link href={`/thinking/${cat.slug}`} className="group flex items-center justify-between text-sm py-1">
                            <span className={`transition-colors ${cat.slug === category.slug ? "text-gold font-medium" : "text-muted group-hover:text-foreground"}`}>
                              {cat.title}
                            </span>
                            <span className="text-xs text-muted bg-surface-raised px-2.5 py-1 rounded-full border border-line">{cat.postCount ?? 0}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealGroup>
            )}
          </div>
        </section>
        <HomeCta />
      </main>
      <Footer />
    </>
  );
}
