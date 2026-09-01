import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project / Work",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "projectType",
      title: "Project Type",
      type: "string",
      options: {
        list: [
          { title: "Technical Project", value: "Technical" },
          { title: "Venture", value: "Venture" },
          { title: "Case Study", value: "Case Study" },
          { title: "Program / Fellowship", value: "Program" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "clientOrOrganization",
      title: "Client or Organization",
      type: "string",
      description: "Who was this built for, or under what organization?",
    }),
    defineField({
      name: "role",
      title: "Your Role",
      type: "string",
    }),
    defineField({
      name: "timeline",
      title: "Timeline",
      type: "string",
      description: "e.g., '2022 - 2023', 'Summer 2024'",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "summary",
      title: "Brief Summary",
      type: "text",
      rows: 3,
      description: "Short excerpt for the index cards.",
    }),
    defineField({
      name: "context",
      title: "Context / The Problem",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "outcomes",
      title: "Outcomes / Impact",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "fullStory",
      title: "The Full Story",
      type: "array",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
      ],
    }),
    defineField({
      name: "gallery",
      title: "Gallery / Screenshots",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "liveLink",
      title: "Live URL",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "projectType",
      media: "coverImage",
    },
  },
});
