import Image from "next/image";
import Reveal from "../motion/Reveal";
import ScrollBrighten from "../motion/ScrollBrighten";

export default function AboutBio() {
  return (
    <section className="relative py-4 md:py-8">
      <div className="section-shell grid gap-10 md:grid-cols-[1fr_2fr] md:items-center">
        <Reveal>
          <Image
            src="/olawuni-emmanuel-kayode-headshot.png"
            alt="Portrait of O.K. Emmanuel"
            width={400}
            height={400}
            className="w-full"
          />
        </Reveal>
        <div>
          <ScrollBrighten as="p" className="text-lg leading-relaxed text-muted md:text-xl">
            I&apos;m a software engineer, technology strategist and
            entrepreneur focused on building useful technology and helping
            people make better decisions around it. Over the years, I&apos;ve
            worked across software engineering, product development,
            technology education, leadership and entrepreneurship. That
            multidisciplinary experience allows me to approach problems from
            both sides: understanding the technology deeply while keeping
            sight of the people, business and outcomes behind it.
          </ScrollBrighten>
        </div>
      </div>
    </section>
  );
}
