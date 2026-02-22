import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
    layout: z.enum(['post', 'article']).default('post'),
    authorBio: z.string().optional(),
  }),
});

export const collections = { blog };
