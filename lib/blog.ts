import { format } from 'date-fns';

/**
 * 博客文章的作者接口
 */
export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

/**
 * 博客文章接口
 */
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: Author;
  tags: string[];
  readTime: number; // 阅读时间（分钟）
  coverImage?: string;
}

/**
 * 博客作者数据
 */
export const authors: Record<string, Author> = {
  yordyi: {
    id: 'yordyi',
    name: '郭帅豪',
    // 暂用占位图，后续可替换为真实头像
    avatar: '',
    bio: '全栈开发者，热衷于探索前端新技术和最佳实践。',
  },
};

/**
 * 博客文章数据
 */
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Next.js 15 新特性深度解析',
    slug: 'nextjs-15-new-features',
    excerpt: 'Next.js 15 带来了革命性的变化，包括Turbopack、React Server Components和改进的图像优化。本文深入探讨这些新特性如何提升开发体验和应用性能。',
    content: `
# Next.js 15 新特性深度解析

Next.js 15 是一次重大更新，带来了许多激动人心的新特性和性能改进。本文将深入探讨这些变化，以及它们如何改变我们构建 Web 应用的方式。

## Turbopack: 超快的开发体验

Turbopack 是 Next.js 15 中最引人注目的特性之一。作为 Webpack 的继任者，它由 Rust 编写，提供了显著的性能提升：

- **本地开发速度提升 700x**：相比 Webpack，Turbopack 在本地开发时的速度提升令人难以置信。
- **增量编译**：只重新编译更改的文件，而不是整个应用。
- **内存缓存**：智能缓存机制减少了不必要的重复工作。

实际使用中，这意味着即使在大型项目中，热重载也能在毫秒级完成，大大提高了开发效率。

## React Server Components 的全面集成

Next.js 15 全面拥抱了 React Server Components (RSC)，这一革命性技术改变了我们构建 React 应用的方式：

- **默认服务器渲染**：组件默认在服务器上渲染，减少了发送到客户端的 JavaScript 数量。
- **自动代码分割**：客户端组件被自动拆分，只有必要的 JavaScript 才会被发送到浏览器。
- **流式渲染**：页面可以分块流式传输，提高了首次内容绘制的速度。

这种方法解决了传统 SPA 应用的许多问题，包括初始加载性能、SEO 和网络带宽消耗。

## 改进的图像优化

Next.js 15 的图像组件得到了显著改进：

- **新的图像格式支持**：自动支持 AVIF 和 WebP 等现代格式。
- **优化策略**：更智能的图像优化策略，根据设备和网络条件自动选择最佳格式和大小。
- **懒加载增强**：改进的懒加载算法，减少了布局偏移和提高了加载性能。

## 中间件增强

中间件功能得到了增强，提供了更多的灵活性：

- **边缘运行时**：中间件现在可以在边缘网络上运行，减少了延迟。
- **请求操作**：更强大的请求修改和重定向能力。
- **上下文共享**：中间件和页面之间可以共享上下文，简化了身份验证等常见场景。

## 新的路由系统

App Router 成为了 Next.js 15 的默认路由系统，带来了更直观的文件系统路由和更好的性能：

- **嵌套路由和布局**：通过文件系统自然地表达嵌套路由和共享布局。
- **并行路由**：同时加载多个路由，提高了复杂页面的加载性能。
- **拦截路由**：在不中断当前上下文的情况下显示内容，如模态框。

## 结论

Next.js 15 代表了 Web 开发的重大进步。通过 Turbopack、React Server Components 和其他创新，它提供了前所未有的开发体验和应用性能。对于新项目，采用 Next.js 15 是一个明智的选择；对于现有项目，升级将带来显著的性能和开发体验改进。

随着 Web 开发的不断发展，Next.js 继续引领潮流，为开发者提供构建现代、高性能 Web 应用的最佳工具。
    `,
    date: '2024-06-20',
    author: authors.yordyi,
    tags: ['Next.js', '前端开发', 'React', 'Turbopack', '性能优化'],
    readTime: 8,
    // 占位封面图，后续可替换为真实图片
    coverImage: 'https://via.placeholder.com/800x450?text=Next.js+15',
  },
  {
    id: '2',
    title: '构建现代化博客的最佳实践',
    slug: 'modern-blog-best-practices',
    excerpt: '现代博客不仅仅是内容展示平台，更是用户体验和性能的集合体。本文分享构建高性能、用户友好且SEO优化的现代博客系统的最佳实践。',
    content: `
# 构建现代化博客的最佳实践

在当今数字时代，拥有一个高性能、用户友好且 SEO 优化的博客对于内容创作者至关重要。本文将分享构建现代化博客的最佳实践，帮助你打造一个脱颖而出的内容平台。

## 技术栈选择

选择合适的技术栈是构建现代博客的第一步：

### 前端框架

- **Next.js**：提供服务器端渲染和静态站点生成，兼顾 SEO 和性能。
- **Gatsby**：专为内容网站优化，提供强大的数据层和插件生态系统。
- **Astro**：新兴的内容驱动框架，支持多框架组件和极致的性能优化。

对于大多数博客项目，Next.js 是一个平衡的选择，它提供了足够的灵活性和出色的性能特性。

### 内容管理

现代博客应该考虑以下内容管理方案：

- **MDX**：Markdown + JSX，允许在内容中嵌入交互式组件。
- **无头 CMS**：如 Contentful、Sanity 或 Strapi，提供友好的编辑界面和 API。
- **本地文件系统**：简单项目可以使用基于文件的方法，结合 Git 工作流。

## 性能优化策略

博客性能直接影响用户体验和 SEO 排名：

### 图像优化

- **自动格式转换**：根据浏览器支持提供 WebP 或 AVIF 格式。
- **响应式图像**：根据设备提供适当大小的图像。
- **懒加载**：仅在需要时加载图像，减少初始页面负载。

### JavaScript 优化

- **代码分割**：仅加载当前页面所需的 JavaScript。
- **延迟加载**：非关键脚本延迟加载。
- **预加载关键资源**：预测用户行为，提前加载可能需要的资源。

### CSS 优化

- **关键 CSS 内联**：将关键样式内联到 HTML 中，减少渲染阻塞。
- **CSS 模块或 Tailwind**：避免全局样式冲突，只包含使用的样式。

## SEO 最佳实践

现代博客必须考虑搜索引擎优化：

### 技术 SEO

- **语义 HTML**：正确使用标题标签（h1-h6）和结构化数据。
- **元数据优化**：为每个页面提供独特的标题和描述。
- **结构化数据**：实现 Schema.org 标记，增强搜索结果展示。

### 内容 SEO

- **关键词研究**：了解目标受众搜索的内容。
- **内容深度**：提供全面、有价值的内容，而不是浅显的文章。
- **内部链接**：建立合理的内部链接结构，帮助搜索引擎理解内容关系。

## 用户体验设计

优秀的博客不仅仅是技术上的成功，还需要出色的用户体验：

### 响应式设计

- **移动优先**：从移动设备开始设计，然后扩展到更大的屏幕。
- **适应性布局**：使用 CSS Grid 和 Flexbox 创建灵活的布局。
- **触摸友好**：考虑触摸交互，确保按钮和链接有足够的点击区域。

### 可访问性

- **语义 HTML**：正确使用 ARIA 属性和语义标签。
- **键盘导航**：确保所有功能可通过键盘访问。
- **颜色对比度**：确保文本与背景有足够的对比度。

### 阅读体验

- **排版**：选择易读的字体，设置适当的行高和字间距。
- **暗模式**：提供暗色主题选项，减少夜间阅读的眼睛疲劳。
- **阅读进度指示器**：帮助读者了解他们在文章中的位置。

## 分析与持续改进

建立博客后，持续监控和改进至关重要：

- **Web Vitals 监控**：跟踪核心 Web 指标，如 LCP、FID 和 CLS。
- **用户行为分析**：了解用户如何与内容交互，哪些页面表现最好。
- **A/B 测试**：测试不同的设计和功能，找出最有效的方案。

## 结论

构建现代化博客是技术和创意的结合。通过选择合适的技术栈、优化性能、实施 SEO 最佳实践和关注用户体验，你可以创建一个既吸引读者又受到搜索引擎青睐的博客平台。

记住，最好的博客是那些不断发展和适应的博客。定期更新你的技术栈，关注新的 Web 标准，并根据用户反馈调整你的设计和功能。通过这种方式，你的博客将保持现代化和相关性，无论 Web 技术如何发展。
    `,
    date: '2024-06-15',
    author: authors.yordyi,
    tags: ['博客设计', '前端开发', 'SEO', '性能优化', '用户体验'],
    readTime: 10,
    // 占位封面图
    coverImage: 'https://via.placeholder.com/800x450?text=Modern+Blog',
  },
];

/**
 * 获取所有博客文章
 * @returns 所有博客文章数组，按日期降序排序
 */
export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * 根据slug获取特定博客文章
 * @param slug 文章的slug
 * @returns 匹配的博客文章，如果未找到则返回undefined
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

/**
 * 获取所有标签及其文章数量
 * @returns 标签及其文章数量的映射
 */
export function getAllTags(): Record<string, number> {
  const tags: Record<string, number> = {};
  
  blogPosts.forEach(post => {
    post.tags.forEach(tag => {
      if (tags[tag]) {
        tags[tag]++;
      } else {
        tags[tag] = 1;
      }
    });
  });
  
  return tags;
}

/**
 * 根据标签获取文章
 * @param tag 标签名称
 * @returns 包含该标签的文章数组
 */
export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts
    .filter(post => post.tags.includes(tag))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * 格式化日期
 * @param dateString 日期字符串 (YYYY-MM-DD)
 * @returns 格式化后的日期字符串
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
