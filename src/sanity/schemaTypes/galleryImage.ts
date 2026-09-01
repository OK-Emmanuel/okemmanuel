import { defineField, defineType } from "sanity";

export const galleryImage = defineType({
  name: "galleryImage",
  title: "Gallery Image",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title / Context",
      type: "string",
      description: "Brief context, e.g., 'Speaking at GROW Network'",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Speaking", value: "Speaking" },
          { title: "Mentorship", value: "Mentorship" },
          { title: "Collaborations", value: "Collaborations" },
          { title: "Notable People", value: "Notable People" },
          { title: "Other", value: "Other" },
        ],
      },
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Should this appear prominently in masonry grids?",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image",
    },
  },
});
