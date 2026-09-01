import { type SchemaTypeDefinition } from "sanity";
import { category } from "./category";
import { post } from "./post";
import { project } from "./project";
import { event } from "./event";
import { galleryImage } from "./galleryImage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, post, project, event, galleryImage],
};
