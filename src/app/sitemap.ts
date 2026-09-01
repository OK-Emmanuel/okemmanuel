import { MetadataRoute } from 'next'
import { client } from '@/sanity/client'
import { PROJECTS_QUERY, ALL_POSTS_QUERY, CATEGORIES_QUERY } from '@/sanity/queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://okemmanuel.tech' // Update when deploying
  const currentDate = new Date()

  // Base routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/thinking`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vision`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/initiatives`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/connect`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]

  try {
    // Fetch dynamic routes
    const [projects, posts, categories] = await Promise.all([
      client.fetch(PROJECTS_QUERY, {}, { next: { revalidate: 3600 } }).catch(() => []),
      client.fetch(ALL_POSTS_QUERY, {}, { next: { revalidate: 3600 } }).catch(() => []),
      client.fetch(CATEGORIES_QUERY, {}, { next: { revalidate: 3600 } }).catch(() => [])
    ])

    // Add projects to sitemap
    projects.forEach((project: any) => {
      routes.push({
        url: `${baseUrl}/work/${project.slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    })

    // Add blog categories to sitemap
    categories.forEach((cat: any) => {
      routes.push({
        url: `${baseUrl}/thinking/${cat.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    })

    // Add blog posts to sitemap
    posts.forEach((post: any) => {
      if (post.category?.slug) {
        routes.push({
          url: `${baseUrl}/thinking/${post.category.slug}/${post.slug}`,
          lastModified: new Date(post.publishedAt || currentDate),
          changeFrequency: 'monthly',
          priority: 0.6,
        })
      }
    })
  } catch (error) {
    console.error("Error generating dynamic sitemap routes:", error)
  }

  return routes
}
