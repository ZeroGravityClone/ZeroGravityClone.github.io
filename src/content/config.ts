import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    techStack: z.array(z.string()),
    githubBackend: z.string().url().optional(),
    githubFrontend: z.string().url().optional(),
    role: z.string()
  }),
});

export const collections = {
  projects: projectsCollection,
};