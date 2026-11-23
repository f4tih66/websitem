import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  // src/content/blog/ altındaki tüm .md ve .mdx dosyaları.
  // Çok dillilik için ileride: src/content/blog/en/yazi.md gibi alt klasörler kullanılabilir.
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().max(120),
    description: z.string().max(240),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    // Çok dillilik için hazır alan; şimdilik varsayılan Türkçe.
    lang: z.enum(['tr', 'en']).default('tr'),
    // İsteğe bağlı Open Graph görseli (public/ altındaki yol, örn. /og/yazi.png)
    ogImage: z.string().optional(),
  }),
});

export const collections = { blog };
