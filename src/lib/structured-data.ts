// Structured Data (Schema.org JSON-LD) for SEO

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://okemmanuel.tech/#person",
  name: "Olawuni Emmanuel Kayode",
  alternateName: ["O.K. Emmanuel", "Engineer Emmanuel", "OK Emmanuel", "Olawuni Emmanuel", "Olawuni Emmanuel K."],
  url: "https://okemmanuel.tech",
  image: "https://okemmanuel.tech/og-image.jpg",
  jobTitle: "Technology & Product Strategist",
  description: "Technology & Product Strategist helping founders, growing organizations and institutions design, build and improve digital products, AI-powered workflows and technology infrastructure.",
  sameAs: [
    "https://linkedin.com/in/olawuni-emmanuel-kayode",
    "https://twitter.com/theokemmanuel",
    "https://instagram.com/theokemmanuel",
    "https://github.com/okemmanuel",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  alumniOf: {
    "@type": "Organization",
    name: "ALX Africa",
  },
  knowsAbout: [
    "Technology Strategy",
    "Product Strategy",
    "MVP Architecture",
    "AI Operations & Automation",
    "Digital Authority Systems",
    "Executive Authority Platforms",
    "Software Engineering",
    "Product Development",
    "Systems Architecture",
    "React",
    "Next.js",
    "Node.js",
    "Django",
    "Python",
    "Laravel",
  ],
  workLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "Nigeria",
    },
  },
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://okemmanuel.tech/#organization",
  name: "Techifice",
  url: "https://techifice.com",
  founder: {
    "@type": "Person",
    name: "Olawuni Emmanuel Kayode",
    url: "https://okemmanuel.tech",
  },
  description: "Product Development & Technology firm building digital products and technology systems for organizations.",
  areaServed: ["Nigeria", "Africa", "International"],
  serviceType: [
    "Product Strategy & MVP Architecture",
    "AI Operations & Automation",
    "Digital Authority Systems",
    "Executive Authority Platforms",
    "Software Engineering",
    "Custom Digital Systems",
  ],
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://okemmanuel.tech/#website",
  url: "https://okemmanuel.tech",
  name: "O.K. Emmanuel - Technology & Product Strategist",
  description: "I help founders, growing organizations and institutions design, build and improve digital products, AI-powered workflows and technology infrastructure.",
  publisher: {
    "@id": "https://okemmanuel.tech/#person",
  },
  inLanguage: "en-US",
}

export const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://okemmanuel.tech/#profilepage",
  mainEntity: {
    "@id": "https://okemmanuel.tech/#person",
  },
  url: "https://okemmanuel.tech",
  name: "O.K. Emmanuel - Technology & Product Strategist",
  description: "Personal website and commercial portfolio of Olawuni Emmanuel Kayode (O.K. Emmanuel)",
}

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

export const articleSchema = (article: {
  title: string
  description: string
  url: string
  image: string
  datePublished: string
  dateModified?: string
  author?: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: article.title,
  description: article.description,
  url: article.url,
  image: article.image,
  datePublished: article.datePublished,
  dateModified: article.dateModified || article.datePublished,
  author: {
    "@type": "Person",
    "@id": "https://okemmanuel.tech/#person",
    name: article.author || "Olawuni Emmanuel Kayode",
  },
  publisher: {
    "@type": "Person",
    "@id": "https://okemmanuel.tech/#person",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": article.url,
  },
})
