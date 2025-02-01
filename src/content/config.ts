import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    cover: z.object({
      src: z.string(),
      width: z.number(),
      height: z.number(),
      format: z.enum(['png', 'jpg', 'jpeg', 'tiff', 'webp', 'gif', 'svg', 'avif'])
    }).optional()
  })
});

export const collections = {
  blog
}; 