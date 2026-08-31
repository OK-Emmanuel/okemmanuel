import Link from "next/link";
import HoverCard from "../motion/HoverCard";
import Reveal, { RevealGroup, RevealItem } from "../motion/Reveal";
import { client } from "@/sanity/client";
import { CATEGORIES_QUERY } from "@/sanity/queries";

type CategoryWithCount = {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  postCount: number;
};

const FALLBACK_CATEGORIES: Omit<CategoryWithCount, "_id" | "postCount">[] = [
  { title: "Essays", slug: "essays", description: "Long-form thinking." },
  { title: "Frameworks", slug: "frameworks", description: "Original models." },
  { title: "Theories", slug: "theories", description: "Ideas I'm developing." },
  { title: "Notes", slug: "notes", description: "Short observations." },
  { title: "Book Reflections", slug: "book-reflections", description: "Lessons and synthesis from books." },
  { title: "Leadership", slug: "leadership", description: "People, influence, responsibility and development." },
  { title: "Technology", slug: "technology", description: "AI, software, digital systems and the future." },
  { title: "Strategy", slug: "strategy", description: "Business, leverage, execution and positioning." },
  { title: "Society", slug: "society", description: "Innovation, development, institutions and civilization." },
];

async function getCategories(): Promise<CategoryWithCount[]> {
  try {
    const categories = await client.fetch<CategoryWithCount[]>(
      CATEGORIES_QUERY,
      {},
      { next: { revalidate: 60 } },
    );
    if (categories?.length) return categories;
  } catch {
    // Sanity not configured yet — fall back to static list below.
  }
  return FALLBACK_CATEGORIES.map((category) => ({
    ...category,
    _id: category.slug,
    postCount: 0,
  }));
}

export default async function ThinkingLibrary() {
  const categories = await getCategories();

  return (
    <section className="relative py-4 md:py-8">
      <div className="section-shell">
        <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <RevealItem key={category._id}>
              <Link href={`/thinking/${category.slug}`} className="block h-full">
                <HoverCard className="flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-8">
                  <div>
                    <h3 className="font-serif text-xl text-foreground">
                      {category.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted">
                      {category.description}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex w-fit rounded-full border border-line px-4 py-1.5 text-xs uppercase tracking-wider text-muted">
                    {category.postCount > 0
                      ? `${category.postCount} ${category.postCount === 1 ? "post" : "posts"}`
                      : "Coming soon"}
                  </span>
                </HoverCard>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <p className="mt-16 max-w-2xl font-serif text-xl italic text-gold-soft">
            I publish content that reveals how I think, not merely what I
            know. The first essays and frameworks are on their way.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
