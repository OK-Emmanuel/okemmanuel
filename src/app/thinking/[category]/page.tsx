import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import HomeCta from "@/components/HomeCta";
import HoverCard from "@/components/motion/HoverCard";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { client } from "@/sanity/client";
import { CATEGORY_BY_SLUG_QUERY, POSTS_BY_CATEGORY_QUERY } from "@/sanity/queries";
import { urlForImage } from "@/sanity/image";

type CategoryDoc = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
};

type PostSummary = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: Parameters<typeof urlForImage>[0];
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
  const [category, posts] = await Promise.all([
    getCategory(slug).catch(() => null),
    getPosts(slug).catch(() => []),
  ]);

  if (!category) {
    notFound();
  }

  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow="Thinking"
          title={category.title}
          subtitle={category.description}
          variant="grid"
        />
        <section className="relative py-4 md:py-8">
          <div className="section-shell">
            {posts.length === 0 ? (
              <p className="max-w-xl font-serif text-xl italic text-gold-soft">
                Nothing published in this category yet — the first pieces are
                on their way.
              </p>
            ) : (
              <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <RevealItem key={post._id}>
                    <Link
                      href={`/thinking/${category.slug}/${post.slug}`}
                      className="block h-full"
                    >
                      <HoverCard className="flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-8">
                        <div>
                          <h3 className="font-serif text-xl text-foreground">
                            {post.title}
                          </h3>
                          <p className="mt-3 leading-relaxed text-muted">
                            {post.excerpt}
                          </p>
                        </div>
                        <span className="mt-6 text-xs uppercase tracking-wider text-muted">
                          {new Date(post.publishedAt).toLocaleDateString(
                            "en-US",
                            { year: "numeric", month: "long", day: "numeric" },
                          )}
                        </span>
                      </HoverCard>
                    </Link>
                  </RevealItem>
                ))}
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
