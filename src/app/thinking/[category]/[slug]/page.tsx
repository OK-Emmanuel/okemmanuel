import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText, type PortableTextComponents } from "next-sanity";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import HomeCta from "@/components/HomeCta";
import Reveal from "@/components/motion/Reveal";
import { client } from "@/sanity/client";
import { POST_BY_SLUG_QUERY } from "@/sanity/queries";
import { urlForImage } from "@/sanity/image";

type PostDoc = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: Parameters<typeof urlForImage>[0];
  body: Parameters<typeof PortableText>[0]["value"];
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug).catch(() => null);
  return {
    title: post ? `${post.title} — O.K. Emmanuel` : "Post — O.K. Emmanuel",
    description: post?.excerpt,
  };
}

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 font-serif text-2xl text-foreground md:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 font-serif text-xl text-foreground md:text-2xl">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mt-5 leading-relaxed text-muted md:text-lg">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-2 border-gold/50 pl-6 font-serif italic text-foreground">
        {children}
      </blockquote>
    ),
  },
  types: {
    image: ({ value }) => (
      <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-line">
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
  const { slug } = await params;
  const post = await getPost(slug).catch(() => null);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow={post.category.title}
          title={post.title}
          subtitle={post.excerpt}
          variant="grid"
        />
        <section className="relative py-4 md:py-8">
          <div className="section-shell max-w-3xl">
            <Reveal>
              {post.coverImage && (
                <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-2xl border border-line">
                  <Image
                    src={urlForImage(post.coverImage).width(1600).url()}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
              <p className="text-xs uppercase tracking-wider text-muted">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <div className="mt-2">
                <PortableText
                  value={post.body}
                  components={portableTextComponents}
                />
              </div>
              {post.tags && post.tags.length > 0 && (
                <div className="mt-10 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 text-xs uppercase tracking-wider text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Reveal>
          </div>
        </section>
        <HomeCta />
      </main>
      <Footer />
    </>
  );
}
