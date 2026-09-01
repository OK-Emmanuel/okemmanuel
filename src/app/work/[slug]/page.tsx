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
import { PROJECT_BY_SLUG_QUERY } from "@/sanity/queries";
import { urlForImage } from "@/sanity/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

async function getProject(slug: string) {
  return client.fetch(PROJECT_BY_SLUG_QUERY, { slug }, { next: { revalidate: 60 } });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug).catch(() => null);
  return {
    title: project ? `${project.title} — Work — O.K. Emmanuel` : "Work — O.K. Emmanuel",
    description: project?.summary,
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
      <div className="relative mt-12 mb-12 aspect-video w-full overflow-hidden rounded-2xl border border-line bg-surface-raised">
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

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug).catch(() => null);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Nav />
      <main className="flex-1 bg-surface">
        <article>
          {/* Header */}
          <section className="relative border-b border-line pt-32 pb-12 md:pt-40 md:pb-16">
            <div className="section-shell">
              <Reveal>
                <Link 
                  href="/work" 
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted transition-colors hover:text-gold mb-8"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Work
                </Link>
                <div className="max-w-4xl">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-wider text-muted mb-4">
                    <span className="text-gold">{project.projectType}</span>
                    {project.clientOrOrganization && (
                      <>
                        <span>&bull;</span>
                        <span>{project.clientOrOrganization}</span>
                      </>
                    )}
                  </div>
                  <h1 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
                    {project.title}
                  </h1>
                  {project.summary && (
                    <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted md:text-2xl font-serif italic">
                      {project.summary}
                    </p>
                  )}
                </div>
              </Reveal>
            </div>
          </section>

          {/* Project Details Grid */}
          <section className="relative py-12 md:py-24 bg-background">
            <div className="section-shell">
              <div className="grid gap-16 lg:grid-cols-[280px_1fr]">
                
                {/* Sidebar Metadata */}
                <aside className="lg:border-r border-line lg:pr-12">
                  <Reveal delay={0.1} className="sticky top-32 flex flex-col gap-10 border-b border-line pb-12 lg:border-none lg:pb-0">
                    
                    {project.role && (
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-3">Role</h4>
                        <p className="font-serif text-lg text-foreground">
                          {project.role}
                        </p>
                      </div>
                    )}

                    {project.timeline && (
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-3">Timeline</h4>
                        <p className="font-serif text-lg text-foreground">
                          {project.timeline}
                        </p>
                      </div>
                    )}

                    {project.liveLink && (
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-3">Live Link</h4>
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-serif text-lg text-foreground hover:text-gold transition-colors"
                        >
                          Visit Project <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    )}
                  </Reveal>
                </aside>

                {/* Main Content */}
                <div className="min-w-0 max-w-3xl w-full">
                  <Reveal delay={0.2}>
                    {project.coverImage && (
                      <div className="relative mb-16 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line bg-surface-raised">
                        <Image
                          src={urlForImage(project.coverImage).width(1600).url()}
                          alt={project.title}
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    )}
                    
                    <div className="flex flex-col gap-16">
                      {project.context && (
                        <div>
                          <h3 className="font-serif text-2xl text-foreground mb-6">The Context</h3>
                          <div className="prose-editorial">
                            <PortableText value={project.context} components={portableTextComponents} />
                          </div>
                        </div>
                      )}

                      {project.outcomes && (
                        <div className="rounded-2xl bg-surface-raised p-8 md:p-12 border border-line">
                          <h3 className="font-serif text-2xl text-gold mb-6">Outcomes &amp; Impact</h3>
                          <div className="prose-editorial">
                            <PortableText value={project.outcomes} components={portableTextComponents} />
                          </div>
                        </div>
                      )}

                      {project.fullStory && (
                        <div>
                          <h3 className="font-serif text-2xl text-foreground mb-6">The Full Story</h3>
                          <div className="prose-editorial">
                            <PortableText value={project.fullStory} components={portableTextComponents} />
                          </div>
                        </div>
                      )}
                    </div>
                  </Reveal>
                </div>

              </div>
            </div>
          </section>
          
          {/* Gallery (if any) */}
          {project.gallery && project.gallery.length > 0 && (
            <section className="relative py-16 md:py-24 bg-surface border-t border-line">
              <div className="section-shell">
                <Reveal>
                  <h2 className="font-serif text-3xl text-foreground mb-12">Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.gallery.map((img: any, index: number) => (
                      <div key={index} className="relative aspect-video rounded-xl overflow-hidden border border-line">
                        <Image
                          src={urlForImage(img).width(800).url()}
                          alt={`Gallery image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </section>
          )}

        </article>
        <HomeCta />
      </main>
      <Footer />
    </>
  );
}
