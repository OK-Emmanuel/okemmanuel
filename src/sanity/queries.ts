import { groq } from "next-sanity";

export const CATEGORIES_QUERY = groq`
  *[_type == "category"] | order(order asc, title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    "postCount": count(*[_type == "post" && references(^._id)])
  }
`;

export const CATEGORY_BY_SLUG_QUERY = groq`
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description
  }
`;

export const POSTS_BY_CATEGORY_QUERY = groq`
  *[_type == "post" && category->slug.current == $categorySlug] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    tags,
    publishedAt,
    featured,
    "category": category->{title, "slug": slug.current}
  }
`;

export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    body,
    tags,
    publishedAt,
    "category": category->{title, "slug": slug.current}
  }
`;

export const FEATURED_POSTS_QUERY = groq`
  *[_type == "post" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    publishedAt,
    "category": category->{title, "slug": slug.current}
  }
`;

export const ALL_POSTS_QUERY = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    tags,
    publishedAt,
    featured,
    "category": category->{title, "slug": slug.current}
  }
`;

export const RELATED_POSTS_QUERY = groq`
  *[_type == "post" && category->slug.current == $categorySlug && _id != $currentPostId] | order(publishedAt desc) [0...3] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage,
    publishedAt,
    "category": category->{title, "slug": slug.current}
  }
`;

export const PROJECTS_QUERY = groq`
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    projectType,
    clientOrOrganization,
    role,
    timeline,
    coverImage,
    summary,
    liveLink
  }
`;

export const PROJECT_BY_SLUG_QUERY = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    projectType,
    clientOrOrganization,
    role,
    timeline,
    coverImage,
    summary,
    context,
    outcomes,
    fullStory,
    gallery,
    liveLink
  }
`;

export const EVENTS_QUERY = groq`
  *[_type == "event"] | order(eventDate desc) {
    _id,
    title,
    eventType,
    eventDate,
    location,
    description,
    associatedLink,
    coverImage
  }
`;

export const GALLERY_QUERY = groq`
  *[_type == "galleryImage"] | order(_createdAt desc) {
    _id,
    title,
    image,
    category,
    featured
  }
`;
