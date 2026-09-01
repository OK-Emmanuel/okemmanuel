import Link from "next/link";
import Image from "next/image";
import Reveal, { RevealGroup, RevealItem } from "../motion/Reveal";
import { client } from "@/sanity/client";
import { CATEGORIES_QUERY, ALL_POSTS_QUERY } from "@/sanity/queries";
import { urlForImage } from "@/sanity/image";

type CategoryWithCount = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  postCount: number;
};

type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: any;
  publishedAt: string;
  category: { title: string; slug: string };
};

export default async function ThinkingLibrary() {
  const [categories, posts] = await Promise.all([
    client.fetch<CategoryWithCount[]>(CATEGORIES_QUERY, {}, { next: { revalidate: 60 } }).catch(() => []),
    client.fetch<Post[]>(ALL_POSTS_QUERY, {}, { next: { revalidate: 60 } }).catch(() => []),
  ]);

  return (
    <section className="relative py-12 md:py-24">
      <div className="section-shell">
        <div className="mb-16 flex flex-wrap items-center gap-3 border-b border-line pb-8">
          <Link
            href="/thinking"
            className="rounded-full bg-foreground px-5 py-2 text-xs font-bold uppercase tracking-wider text-background transition-colors hover:bg-gold hover:text-[#08080a]"
          >
            All Thoughts
          </Link>
          {categories.filter(c => c.postCount > 0).map((cat) => (
            <Link
              key={cat._id}
              href={`/thinking/${cat.slug}`}
              className="rounded-full border border-line bg-surface px-5 py-2 text-xs font-medium uppercase tracking-wider text-muted transition-colors hover:border-gold/50 hover:text-foreground"
            >
              {cat.title}
            </Link>
          ))}
        </div>

        {posts.length === 0 ? (
           <Reveal delay={0.1}>
             <p className="max-w-2xl font-serif text-xl italic text-gold-soft">
               I publish content that reveals how I think, not merely what I
               know. The first essays and frameworks are on their way.
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
                     <Link href={`/thinking/${post.category?.slug}/${post.slug}`} className="absolute inset-0 z-10">
                       <span className="sr-only">Read {post.title}</span>
                     </Link>
                     <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-muted">
                       {post.category && <span className="text-gold">{post.category.title}</span>}
                       {post.category && <span>&bull;</span>}
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
                   {categories.map((cat) => (
                     <li key={cat._id}>
                       <Link href={`/thinking/${cat.slug}`} className="group flex items-center justify-between text-sm py-1">
                         <span className="text-muted transition-colors group-hover:text-foreground">{cat.title}</span>
                         <span className="text-xs text-muted bg-surface-raised px-2.5 py-1 rounded-full border border-line">{cat.postCount}</span>
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
  );
}
