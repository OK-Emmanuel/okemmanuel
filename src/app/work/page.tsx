import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import WhyMe from "@/components/WhyMe";
import Offers from "@/components/Offers";
import HomeCta from "@/components/HomeCta";
import Footer from "@/components/Footer";
import Reveal, { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { client } from "@/sanity/client";
import { PROJECTS_QUERY, EVENTS_QUERY } from "@/sanity/queries";
import { urlForImage } from "@/sanity/image";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Work — O.K. Emmanuel",
  description:
    "Technology, strategy, advisory and speaking — the work I do, the case studies behind it, and how to engage me.",
};

export default async function WorkPage() {
  const [projects, events] = await Promise.all([
    client.fetch(PROJECTS_QUERY, {}, { next: { revalidate: 60 } }).catch(() => []),
    client.fetch(EVENTS_QUERY, {}, { next: { revalidate: 60 } }).catch(() => []),
  ]);

  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow="Work"
          title="What I currently build, lead and advise on."
          variant="grid"
        />
        <WhyMe />

        {/* Dynamic Projects & Case Studies */}
        <section className="relative py-28 md:py-36 bg-surface">
          <div className="section-shell">
            <Reveal>
              <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl mb-4">
                Projects, Ventures &amp; Case Studies
              </h2>
              <p className="max-w-2xl text-lg text-muted mb-16">
                A selection of technical projects, business ventures, and deep-dive case studies covering strategy and execution.
              </p>
            </Reveal>

            {projects.length === 0 ? (
              <p className="text-muted italic">No projects added yet.</p>
            ) : (
              <RevealGroup className="grid gap-8 lg:grid-cols-2">
                {projects.map((project: any) => (
                  <RevealItem key={project._id} className="group flex flex-col rounded-2xl border border-line bg-surface-raised overflow-hidden hover:border-gold/30 transition-colors">
                    <Link href={`/work/${project.slug}`} className="relative aspect-video w-full overflow-hidden border-b border-line bg-surface">
                      {project.coverImage ? (
                        <Image
                          src={urlForImage(project.coverImage).width(800).url()}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center font-serif text-2xl text-muted/30">
                          {project.title}
                        </div>
                      )}
                      <div className="absolute top-4 right-4 rounded-full bg-surface-raised/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold border border-line">
                        {project.projectType}
                      </div>
                    </Link>
                    <div className="p-8 flex flex-col flex-1">
                      <h3 className="font-serif text-2xl text-foreground group-hover:text-gold-soft transition-colors">
                        <Link href={`/work/${project.slug}`}>
                          {project.title}
                        </Link>
                      </h3>
                      <p className="mt-3 text-sm text-muted line-clamp-3">
                        {project.summary}
                      </p>
                      <div className="mt-auto pt-6 flex items-center justify-between">
                        <Link href={`/work/${project.slug}`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground hover:text-gold transition-colors">
                          View Project <ArrowUpRight className="h-4 w-4" />
                        </Link>
                        {project.liveLink && (
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-accent-blue transition-colors">
                            Live Link
                          </a>
                        )}
                      </div>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            )}
          </div>
        </section>

        <Offers />

        {/* Dynamic Speaking & Events */}
        <section className="relative py-28 md:py-36 bg-background border-y border-line">
          <div className="section-shell">
            <Reveal>
              <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl mb-4">
                Speaking &amp; Events
              </h2>
              <p className="max-w-2xl text-lg text-muted mb-16">
                Conferences, workshops, and gatherings where I teach, speak, or facilitate.
              </p>
            </Reveal>

            {events.length === 0 ? (
              <p className="text-muted italic">No events added yet.</p>
            ) : (
              <RevealGroup className="flex flex-col gap-6">
                {events.map((event: any) => (
                  <RevealItem key={event._id} className="group relative flex flex-col md:flex-row gap-6 rounded-2xl border border-line bg-surface-raised p-6 md:p-8 hover:border-gold/50 transition-colors">
                    <div className="md:w-1/4 shrink-0 border-b border-line pb-4 md:border-b-0 md:border-r md:pr-6 md:pb-0">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-accent-blue mb-3 bg-accent-blue/10 px-2 py-1 rounded">
                        {event.eventType}
                      </span>
                      {event.eventDate && (
                        <div className="flex items-center gap-2 text-sm text-muted">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(event.eventDate).toLocaleDateString("en-US", { month: 'long', year: 'numeric', day: 'numeric'})}</span>
                        </div>
                      )}
                      {event.location && (
                        <div className="flex items-center gap-2 text-sm text-muted mt-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      )}
                    </div>
                    <div className="md:w-3/4 flex flex-col justify-center">
                      <h3 className="font-serif text-2xl text-foreground">
                        {event.title}
                      </h3>
                      {event.description && (
                        <p className="mt-3 text-muted leading-relaxed max-w-3xl">
                          {event.description}
                        </p>
                      )}
                      {event.associatedLink && (
                        <a href={event.associatedLink} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold hover:text-gold-soft transition-colors w-fit">
                          Learn More <ArrowUpRight className="h-4 w-4" />
                        </a>
                      )}
                    </div>
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
