import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Articles collection - 原创文章
const articles = defineCollection({
  loader: glob({ 
    pattern: '**/*.{md,mdx}', 
    base: './src/content/articles'
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    authors: z.array(z.string()).optional(),
    editors: z.array(z.string()).optional(),
    reviewers: z.array(z.string()).optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  })
});

// Monthly collection - 平台工程每月洞察
const monthly = defineCollection({
  loader: glob({ 
    pattern: '**/*.{md,mdx}', 
    base: './src/content/monthly'
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    editors: z.array(z.string()).optional(),
    reviewers: z.array(z.string()).optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  })
});

// Translations collection - 翻译文章
const translations = defineCollection({
  loader: glob({ 
    pattern: '**/*.{md,mdx}', 
    base: './src/content/translations'
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    originalUrl: z.string().url().optional(),
    authors: z.array(z.string()).optional(),
    translators: z.array(z.string()).optional(),
    editors: z.array(z.string()).optional(),
    reviewers: z.array(z.string()).optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  })
});

// Events collection - 活动
const events = defineCollection({
  loader: glob({ 
    pattern: '**/*.{md,mdx}', 
    base: './src/content/events' 
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
    eventDate: z.coerce.date().optional(),
    location: z.string().optional(),
    isOnline: z.boolean().default(false),
    registrationUrl: z.string().url().optional(),
    organizers: z.array(z.string()).optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  })
});

// Glossary collection - 术语表
const glossary = defineCollection({
  loader: glob({ 
    pattern: '**/*.{md,mdx}', 
    base: './src/content/glossary' 
  }),
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    abbreviation: z.string().optional(),
    description: z.string().optional(),
    category: z.enum([
      'core-concept',      // 核心概念
      'platform-product',  // 平台产品
      'team-role',         // 团队角色
      'methodology',       // 方法论
      'user-experience',   // 用户体验
      'technical-practice' // 技术实践
    ]).optional(),
    relatedTerms: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  })
});

// Pages collection - 独立页面
const pages = defineCollection({
  loader: glob({ 
    pattern: '**/*.{md,mdx}', 
    base: './src/content/pages' 
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  })
});

export const collections = {
  articles,
  monthly,
  translations,
  events,
  glossary,
  pages,
};
