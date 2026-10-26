import { defineCollection, reference } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/** Bilingual text: Arabic is required, English falls back to Arabic when missing. */
const bi = z.object({ ar: z.string(), en: z.string().optional() });

const links = z
  .object({
    linkedin: z.string().url().optional(),
    github: z.string().url().optional(),
    website: z.string().url().optional(),
    x: z.string().url().optional(),
    facebook: z.string().url().optional(),
    instagram: z.string().url().optional(),
  })
  .default({});

const people = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/people' }),
  schema: ({ image }) =>
    z.object({
      name: bi,
      roles: z.array(z.enum(['founder', 'trainer', 'volunteer'])).min(1),
      team: z.enum(['logistics', 'media', 'relations']).optional(),
      /** Team coordinator (shown first in the team with a badge). */
      lead: z.boolean().default(false),
      title: bi.optional(),
      bio: bi.optional(),
      photo: image().optional(),
      links,
      joined: z.number().int().optional(),
      active: z.boolean().default(true),
      order: z.number().default(100),
      placeholder: z.boolean().default(false),
    }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/events' }),
  schema: ({ image }) =>
    z.object({
      title: bi,
      type: z.enum(['workshop', 'camp', 'meetup', 'hackathon', 'webinar']),
      start: z.coerce.date(),
      end: z.coerce.date().optional(),
      timezone: z.string().default('Asia/Damascus'),
      location: z
        .object({
          city: bi.optional(),
          venue: bi.optional(),
          online: z.boolean().default(false),
          url: z.string().url().optional(),
        })
        .default({ online: false }),
      cover: image().optional(),
      summary: bi,
      body: bi.optional(),
      speakers: z.array(reference('people')).default([]),
      registrationUrl: z.string().url().optional(),
      recordingUrl: z.string().url().optional(),
      program: reference('programs').optional(),
      album: reference('albums').optional(),
      tags: z.array(z.string()).default([]),
      /** Leave empty to compute from the dates at build time; set `cancelled` explicitly. */
      status: z.enum(['upcoming', 'past', 'cancelled']).optional(),
      featured: z.boolean().default(false),
      placeholder: z.boolean().default(false),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: bi,
      summary: bi,
      body: bi.optional(),
      members: z.array(reference('people')).default([]),
      externalMembers: z.array(bi).default([]),
      program: reference('programs').optional(),
      cohort: bi.optional(),
      year: z.number().int(),
      tech: z.array(z.string()).default([]),
      links: z
        .object({
          repo: z.string().url().optional(),
          demo: z.string().url().optional(),
          video: z.string().url().optional(),
          slides: z.string().url().optional(),
        })
        .default({}),
      cover: image().optional(),
      gallery: z.array(image()).default([]),
      award: bi.optional(),
      featured: z.boolean().default(false),
      placeholder: z.boolean().default(false),
    }),
});

const albums = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/albums' }),
  schema: ({ image }) =>
    z.object({
      title: bi,
      event: reference('events').optional(),
      date: z.coerce.date(),
      cover: image().optional(),
      photos: z.array(z.object({ src: image(), alt: bi, credit: z.string().optional() })).default([]),
      visibility: z.enum(['public', 'unlisted']).default('public'),
    }),
});

const programs = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/programs' }),
  schema: z.object({
    title: bi,
    summary: bi,
    body: bi.optional(),
    /** Site path of the program's page, when it has a hand-written page. */
    path: z.string().optional(),
    cohorts: z
      .array(
        z.object({
          name: bi,
          start: z.coerce.date().optional(),
          end: z.coerce.date().optional(),
          trainers: z.array(reference('people')).default([]),
          projects: z.array(reference('projects')).default([]),
        }),
      )
      .default([]),
    placeholder: z.boolean().default(false),
  }),
});

const partners = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/partners' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      logo: image().optional(),
      url: z.string().url().optional(),
      type: z.enum(['academic', 'company', 'community']),
    }),
});

export const collections = { people, events, projects, albums, programs, partners };
