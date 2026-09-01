import { defineField, defineType } from "sanity";

export const event = defineType({
  name: "event",
  title: "Event / Speaking",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "eventType",
      title: "Event Type",
      type: "string",
      options: {
        list: [
          { title: "Speaking Engagement", value: "Speaking" },
          { title: "Organized Event", value: "Organized" },
          { title: "Feature / Media", value: "Media" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "eventDate",
      title: "Event Date",
      type: "date",
    }),
    defineField({
      name: "location",
      title: "Location / Venue",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "associatedLink",
      title: "Link (URL)",
      type: "url",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "eventType",
      media: "coverImage",
    },
  },
});
