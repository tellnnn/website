import { file, glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const publications = defineCollection({
  loader: glob({ base: "src/data/publications/", pattern: "*.json" }),
  schema: z.array(
    z.object({
      id: z.string(),
      author: z.string(),
      year: z.string(),
      title: z.string(),
      container: z.string(),
      doi: z.string(),
      abstract: z.string(),
      isOpenAccess: z.boolean(),
      isPeerReviewed: z.boolean(),
      related: z.string().nullable()
    })
  )
})

const presentations = defineCollection({
  loader: file("src/data/presentations.json"),
  schema: z.object({
    id: z.string(),
    author: z.string(),
    year: z.string(),
    title: z.string(),
    conference: z.string(),
    place: z.string().nullable(),
    abstract: z.string().nullable(),
    type: z.enum(["talk", "poster"]),
    description: z.string(),
    isAwarded: z.boolean(),
    lang: z.enum(["en", "jp"])
  })
})

const grantsAwards = defineCollection({
  loader: glob({ base: "src/data/grants-awards", pattern: "*.json" }),
  schema: z.array(
    z.object({
      year: z.string(),
      title: z.string(),
      description: z.string().nullable()
    })
  )
})

export const collections = { publications, presentations, grantsAwards };
