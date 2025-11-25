# AGENTS.md

这是平台工程社区·中国（PECommunity）的网站项目，为 AI 编码助手提供项目上下文和指导。

## 项目概述

这是一个基于 Astro + React + TypeScript 构建的静态网站项目，用于展示平台工程社区的内容，包括：
- 原创文章（articles）
- 每月洞察（monthly）
- 翻译文章（translations）
- 活动信息（events）
- 术语表（glossary）
- 独立页面（pages）

技术栈：
- **框架**: Astro 5.x（静态站点生成）
- **UI**: React 19.x + Tailwind CSS 4.x
- **组件库**: Radix UI + shadcn/ui
- **语言**: TypeScript (strict mode)
- **内容**: MDX（Markdown + JSX）
- **包管理**: pnpm

## 开发环境设置

### 安装依赖
```bash
pnpm install
```

### 常用命令
- **启动开发服务器**: `pnpm dev`（默认运行在 http://localhost:4321）
- **构建生产版本**: `pnpm build`
- **预览构建结果**: `pnpm preview`
- **运行 Astro CLI**: `pnpm astro`

### TypeScript 检查

运行 TypeScript 类型检查：
```bash
pnpm astro check
```

## 项目结构

```
src/
├── components/        # React 组件
│   ├── ui/           # UI 组件库（shadcn/ui）
│   ├── Member.tsx    # 成员组件
│   ├── SiteNav.tsx   # 导航组件
│   └── Typography.tsx
├── content/          # MDX 内容文件
│   ├── articles/     # 原创文章
│   ├── monthly/      # 每月洞察
│   ├── translations/ # 翻译文章
│   ├── events/       # 活动信息
│   ├── glossary/     # 术语表
│   └── pages/        # 独立页面
├── layouts/          # 页面布局
├── pages/            # 路由页面（Astro 文件路由）
├── config/           # 配置文件
├── lib/              # 工具函数
└── styles/           # 全局样式

public/               # 静态资源
scripts/              # 脚本工具
```

## 内容创建指南

### 内容集合（Content Collections）

项目使用 Astro 的 Content Collections 来管理内容，配置文件为 `content.config.ts`。

#### 1. 原创文章（articles）
位置：`src/content/articles/`

必需字段：
- `title`: 文章标题
- `description`: 文章描述（可选）
- `pubDate`: 发布日期（可选）
- `author`: 作者（默认为 'PECommunity'）
- `tags`: 标签数组（默认为空）
- `draft`: 是否为草稿（默认 false）

#### 2. 每月洞察（monthly）
位置：`src/content/monthly/`
字段与 articles 相同

#### 3. 翻译文章（translations）
位置：`src/content/translations/`

额外字段：
- `originalUrl`: 原文链接（可选）
- `originalAuthor`: 原作者（可选）
- `translator`: 译者（可选）

**重要**: 翻译文章必须获得书面许可，并按许可约定控制传播范围。

#### 4. 活动信息（events）
位置：`src/content/events/`

特有字段：
- `eventDate`: 活动日期（可选）
- `location`: 活动地点（可选）
- `isOnline`: 是否线上活动（默认 false）
- `registrationUrl`: 报名链接（可选）

#### 5. 术语表（glossary）
位置：`src/content/glossary/`

字段：
- `title`: 术语名称
- `description`: 术语描述（可选）
- `tags`: 标签数组
- `draft`: 是否为草稿

#### 6. 独立页面（pages）
位置：`src/content/pages/`

字段：
- `title`: 页面标题
- `description`: 页面描述（可选）

### 内容文件命名规范

- 使用英文小写字母和连字符，如：`platform-engineering.mdx`
- 每月洞察使用格式：`YYYY-MM.mdx`，如：`2024-01.mdx`
- 图片资源放在对应的 `images_*/` 目录

### Frontmatter 示例

```mdx
---
title: "平台工程简介"
description: "介绍平台工程的基本概念"
pubDate: 2024-01-15
author: "张三"
tags: ["平台工程", "DevOps"]
draft: false
---

内容正文...
```

## 代码风格

### TypeScript
- 使用 **strict mode**（通过 `astro/tsconfigs/strict` 继承）
- 使用路径别名：`@/*` 映射到 `./src/*`
- JSX 使用 React JSX 转换

### React 组件
- 使用函数式组件
- 优先使用 TypeScript 类型定义
- 组件文件使用 PascalCase：`MyComponent.tsx`

### 样式
- 使用 **Tailwind CSS 4.x** 进行样式编写
- 使用 `clsx` 和 `tailwind-merge` 处理动态类名
- 全局样式在 `src/styles/global.css`

### 代码组织
- UI 组件放在 `src/components/ui/`
- 业务组件放在 `src/components/`
- 工具函数放在 `src/lib/`
- 配置文件放在 `src/config/`

## 测试和验证

### 开发时验证
1. 启动开发服务器：`npm run dev`
2. 在浏览器中访问 http://localhost:4321
3. 检查页面是否正常显示，无控制台错误

### 构建前验证
1. 运行类型检查：`pnpm astro check`
2. 构建项目：`pnpm build`
3. 预览构建结果：`pnpm preview`
4. 确保无构建错误和警告

### 内容验证
- 检查 frontmatter 字段是否符合 schema 定义
- 确保图片路径正确
- 验证外部链接可访问
- 检查中文排版规范

## 贡献流程

1. **认领任务**: 浏览 [GitHub Issues](https://github.com/PECommunity/community/issues) 并认领
2. **创建内容**: 在对应的 `src/content/` 目录下创建或修改文件
3. **本地测试**: 运行 `pnpm dev` 进行本地预览
4. **类型检查**: 运行 `pnpm astro check` 确保无类型错误
5. **提交 PR**: 创建 Pull Request，标题清晰描述变更内容

### PR 标题格式建议
- `feat: 添加新文章《xxx》`
- `fix: 修复xxx页面的显示问题`
- `docs: 更新术语表xxx`
- `style: 优化xxx组件样式`
- `refactor: 重构xxx功能`

## 知识产权和行为准则

### 知识产权
- 尊重原创，采用原始作者署名
- 翻译作品必须获得书面许可
- 按许可约定控制传播范围
- 不得使用未经授权的图片、代码或其他素材

## 常见问题

### 如何添加新的内容类型？
1. 在 `content.config.ts` 中定义新的 collection
2. 在 `src/content/` 创建对应目录
3. 在 `src/pages/` 添加对应的路由页面

### 如何使用 shadcn/ui 组件？
项目已配置 shadcn/ui（见 `components.json`）

请使用 shadcn MCP 服务器查询对应的组件和安装命令。

### 图片资源放在哪里？

- 公共静态资源：`public/` 目录
- 内容相关图片：`src/content/*/images_*/` 目录
- 成员头像：`public/members/` 目录
