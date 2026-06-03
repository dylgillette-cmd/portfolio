import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().optional().default(false),
    // Optional: when you're responding to a specific article, fill these in.
    sourceTitle: z.string().optional(),
    sourceUrl: z.string().url().optional(),
    sourcePublication: z.string().optional(),
  }),
});

export const collections = { posts };
