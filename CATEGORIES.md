# 栏目信息汇总

本文档汇总了平台工程社区网站所有内容栏目的定位、字段说明和使用指南。

## 目录

- [原创文章 (Articles)](#原创文章-articles)
- [每月洞察 (Monthly)](#每月洞察-monthly)
- [翻译文章 (Translations)](#翻译文章-translations)
- [活动 (Events)](#活动-events)
- [术语表 (Glossary)](#术语表-glossary)
- [独立页面 (Pages)](#独立页面-pages)

---

## 原创文章 (Articles)

### 栏目定位
发布平台工程社区原创的技术文章、实践分享、案例研究等深度内容。

### 目录位置
`src/content/articles/`

### 访问路径
- 列表页：`/articles`
- 详情页：`/articles/[文件名]`

### Frontmatter 字段

#### 必需字段

| 字段名 | 类型 | 说明 |
|--------|------|------|
| `title` | string | 文章标题 |

#### 可选字段

| 字段名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `description` | string | - | 文章摘要描述，用于 SEO 和列表页展示 |
| `pubDate` | date | - | 发布日期，支持 ISO 8601 格式 |
| `updatedDate` | date | - | 更新日期 |
| `authors` | string[] | - | 作者列表，支持多位作者 |
| `editors` | string[] | - | 编辑列表 |
| `reviewers` | string[] | - | 审校人员列表 |
| `tags` | string[] | `[]` | 文章标签 |
| `draft` | boolean | `false` | 是否为草稿，`true` 时不会在生产环境显示 |

### 示例

```mdx
---
title: "平台工程实践指南"
description: "深入探讨平台工程在现代软件开发中的应用与实践"
pubDate: 2024-01-15
authors: ["张三", "李四"]
editors: ["王五"]
reviewers: ["赵六"]
tags: ["平台工程", "DevOps", "最佳实践"]
draft: false
---

文章内容...
```

---

## 每月洞察 (Monthly)

### 栏目定位
每月定期发布的平台工程行业动态、技术趋势、社区活动等汇总内容。

### 目录位置
`src/content/monthly/`

### 访问路径
- 列表页：`/monthly`
- 详情页：`/monthly/[文件名]`

### 文件命名规范
使用 `YYYY-MM.mdx` 格式，例如：`2024-06.mdx`

### Frontmatter 字段

#### 必需字段

| 字段名 | 类型 | 说明 |
|--------|------|------|
| `title` | string | 月刊标题，建议格式：`平台工程动态 Monthly News YYYY-MM` |

#### 可选字段

| 字段名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `description` | string | - | 本期内容摘要 |
| `pubDate` | date | - | 发布日期 |
| `updatedDate` | date | - | 更新日期 |
| `editors` | string[] | - | 编辑列表 |
| `reviewers` | string[] | - | 审校人员列表 |
| `tags` | string[] | `[]` | 标签，建议包含 `月刊`、`平台工程` 等 |
| `draft` | boolean | `false` | 是否为草稿 |

### 示例

```mdx
---
title: 平台工程动态 Monthly News 2024-06
description: 开发者关系指南新书预告、KEBAP Stack、CNCF 平台工程提案、Backstage i18n 支持等行业动态
pubDate: 2024-06-01
editors: ["社区编辑团队"]
tags: ['月刊', '平台工程', 'CNCF', 'Backstage']
draft: false
---

## 行业与社区动态

内容...
```

### 特殊说明
- 每月洞察不包含作者字段，因为通常由社区编辑团队共同整理
- 内容应直接从二级标题开始，不要包含与 `title` 重复的一级标题

---

## 翻译文章 (Translations)

### 栏目定位
翻译优质的国外平台工程相关技术文章、博客、文档等内容。

### 目录位置
`src/content/translations/`

### 访问路径
- 列表页：`/translations`
- 详情页：`/translations/[文件名]`

### Frontmatter 字段

#### 必需字段

| 字段名 | 类型 | 说明 |
|--------|------|------|
| `title` | string | 文章标题（中文翻译） |

#### 可选字段

| 字段名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `description` | string | - | 文章摘要描述 |
| `pubDate` | date | - | 翻译发布日期 |
| `updatedDate` | date | - | 更新日期 |
| `originalUrl` | string (URL) | - | 原文链接，必须是有效的 URL 格式 |
| `authors` | string[] | - | 原作者列表 |
| `translators` | string[] | - | 译者列表 |
| `editors` | string[] | - | 编辑列表 |
| `reviewers` | string[] | - | 审校人员列表 |
| `tags` | string[] | `[]` | 文章标签 |
| `draft` | boolean | `false` | 是否为草稿 |

### 示例

```mdx
---
title: "Backstage 架构概览"
description: "深入了解 Backstage 的核心架构和设计理念"
pubDate: 2024-03-20
originalUrl: "https://backstage.io/docs/overview/architecture-overview"
authors: ["Spotify Engineering Team"]
translators: ["张三", "李四"]
editors: ["王五"]
reviewers: ["赵六"]
tags: ["Backstage", "架构", "开发者门户"]
draft: false
---

文章内容...
```

### 特殊说明
- **版权要求**：翻译文章必须获得原作者的书面许可
- **许可控制**：按许可约定控制传播范围
- **原文链接**：建议在 `originalUrl` 字段提供原文链接，便于读者参考

---

## 活动 (Events)

### 栏目定位
记录和发布平台工程相关的线上线下活动、会议、Meetup 等信息。

### 目录位置
`src/content/events/`

### 访问路径
- 列表页：`/events`
- 详情页：`/events/[文件路径]`

### 目录组织
```
events/
├── conferences/     # 会议
│   └── platformcon-2024.mdx
├── meetups/         # 线下聚会
│   └── pug-meetup-2023-shanghai.md
└── webinars/        # 在线研讨会
```

### Frontmatter 字段

#### 必需字段

| 字段名 | 类型 | 说明 |
|--------|------|------|
| `title` | string | 活动名称 |

#### 可选字段

| 字段名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `description` | string | - | 活动描述 |
| `pubDate` | date | - | 信息发布日期 |
| `eventDate` | date | - | 活动举办日期 |
| `location` | string | - | 活动地点 |
| `isOnline` | boolean | `false` | 是否为线上活动 |
| `registrationUrl` | string (URL) | - | 活动报名链接 |
| `organizers` | string[] | - | 主办方列表 |
| `tags` | string[] | `[]` | 活动标签 |
| `draft` | boolean | `false` | 是否为草稿 |

### 示例

```mdx
---
title: "PlatformCon 2024"
description: "全球最大的平台工程线上会议"
pubDate: 2024-05-01
eventDate: 2024-06-10
location: "在线"
isOnline: true
registrationUrl: "https://platformcon.com/register"
organizers: ["Platform Engineering Community", "CNCF"]
tags: ["会议", "平台工程", "在线活动"]
draft: false
---

活动详情...
```

### 特殊说明
- 活动信息不包含作者字段，使用 `organizers`（主办方）字段
- `isOnline` 为 `true` 时，页面会显示"在线活动"标记
- `eventDate` 用于标识活动举办时间，`pubDate` 用于信息发布时间

---

## 术语表 (Glossary)

### 栏目定位
收录和解释平台工程领域的专业术语、概念、缩写等。

### 目录位置
`src/content/glossary/`

### 访问路径
- 列表页：`/glossary`
- 详情页：`/glossary/[术语]`

### 文件命名规范
使用英文小写加连字符，例如：
- `platform-engineering.mdx`
- `internal-developer-platform.mdx`
- `golden-path.mdx`

### Frontmatter 字段

#### 必需字段

| 字段名 | 类型 | 说明 |
|--------|------|------|
| `title` | string | 术语名称（中英文） |

#### 可选字段

| 字段名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `description` | string | - | 术语简短描述 |
| `tags` | string[] | `[]` | 相关标签 |
| `draft` | boolean | `false` | 是否为草稿 |

### 示例

```mdx
---
title: "平台工程 (Platform Engineering)"
description: "一种通过构建内部开发者平台来改善开发者体验和生产力的实践方法"
tags: ["核心概念", "平台工程"]
draft: false
---

## 定义

平台工程是...

## 核心原则

1. ...
2. ...

## 相关术语

- [内部开发者平台](/glossary/internal-developer-platform)
- [黄金路径](/glossary/golden-path)
```

### 特殊说明
- 术语表条目应该简明扼要，重点解释概念和定义
- 建议包含相关术语的交叉引用链接
- 可以使用多语言标题，格式：`中文名称 (English Name)`

---

## 独立页面 (Pages)

### 栏目定位
网站的独立功能页面，如"关于我们"、"行为准则"等。

### 目录位置
`src/content/pages/`

### 访问路径
详情页：`/[文件名]`

### Frontmatter 字段

#### 必需字段

| 字段名 | 类型 | 说明 |
|--------|------|------|
| `title` | string | 页面标题 |

#### 可选字段

| 字段名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `description` | string | - | 页面描述 |

### 示例

```mdx
---
title: "关于我们"
description: "了解平台工程社区的使命、愿景和团队"
---

## 我们的使命

...

## 团队成员

...
```

### 特殊说明
- 独立页面通常用于网站的元信息和管理内容
- 字段最简单，只包含标题和描述
- 直接映射到网站根路径，如 `/about`、`/coc`

---

## 通用字段说明

### 日期格式

所有日期字段支持以下格式：
- ISO 8601: `2024-01-15`
- 完整时间戳: `2024-01-15T10:30:00Z`

日期会在构建时自动转换为 JavaScript Date 对象。

### 数组字段

所有数组字段使用 YAML 数组语法：

```yaml
# 方式 1：行内数组
tags: ["平台工程", "DevOps"]

# 方式 2：多行数组
authors:
  - 张三
  - 李四
```

### 布尔字段

布尔字段使用 `true` 或 `false`（小写）：

```yaml
draft: false
isOnline: true
```

### URL 字段

URL 字段必须是完整的有效 URL：

```yaml
originalUrl: "https://example.com/article"
registrationUrl: "https://example.com/register"
```

---

## 内容创作规范

### Markdown/MDX 支持

所有内容文件支持：
- 标准 Markdown 语法
- MDX（Markdown + JSX）语法
- GFM (GitHub Flavored Markdown) 扩展

### 图片资源

建议将图片放在对应栏目的 `images_*/` 目录：

```
articles/
├── my-article.mdx
└── images_2024/
    └── diagram.png
```

在文章中引用：

```markdown
![图片说明](./images_2024/diagram.png)
```

### 代码块

支持语法高亮：

````markdown
```typescript
const greeting = "Hello, Platform Engineering!";
```
````

### 内部链接

使用相对或绝对路径：

```markdown
参考 [平台工程术语](/glossary/platform-engineering)
```

---

## 贡献流程

1. **选择栏目**：根据内容类型选择合适的栏目
2. **创建文件**：在对应目录创建 `.md` 或 `.mdx` 文件
3. **填写 Frontmatter**：按照本文档的字段说明填写元数据
4. **编写内容**：使用 Markdown/MDX 语法编写内容
5. **本地预览**：运行 `pnpm dev` 在浏览器中预览
6. **类型检查**：运行 `pnpm astro check` 验证 Frontmatter
7. **提交 PR**：创建 Pull Request 等待审核

---

## 常见问题

### Q: 如何处理草稿？

A: 设置 `draft: true`，文章不会在生产环境显示，但在开发环境可以预览。

### Q: 必须填写所有可选字段吗？

A: 不必须。只需填写必需字段，可选字段根据实际需要填写。

### Q: 如何添加多位作者/译者？

A: 使用数组格式：`authors: ["作者1", "作者2", "作者3"]`

### Q: 日期字段填写错误会怎样？

A: 构建时会报错。确保日期格式正确，如 `2024-01-15`。

### Q: 翻译文章需要什么许可？

A: **必须**获得原作者的书面许可，并按许可约定控制传播范围。

---

## 更新记录

- 2024-11-25: 创建文档，包含所有 6 个栏目的完整说明
