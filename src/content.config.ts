// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content"

// 2. Import loader(s)
import { glob } from "astro/loaders"

// 3. Import Zod
import { z } from "astro/zod"

// 4. Define a `loader` and `schema` for each collection
const projects = defineCollection({
	loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		description: z.string(),
		image: z.string().optional(),
		externalLink: z.string().optional(),
		externalText: z.string().optional(),
		pubDate: z.coerce.date(),
	}),
})

// 5. Export a single `collections` object to register your collection(s)
export const collections = { projects }
