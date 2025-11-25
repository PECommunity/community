/**
 * 术语表数据转换为知识图谱
 * 从 Astro Content Collections 生成 React Flow 图数据
 */

import type { CollectionEntry } from 'astro:content';
import type { GlossaryNode, GlossaryEdge } from '@/types/knowledge-map';

/**
 * 将术语表条目转换为图节点和边
 */
export function convertGlossaryToGraph(
  glossaryEntries: CollectionEntry<'glossary'>[]
): { nodes: GlossaryNode[]; edges: GlossaryEdge[] } {
  const nodes: GlossaryNode[] = [];
  const edges: GlossaryEdge[] = [];
  
  // 创建 id 到 slug 的映射（用于查找关系）
  const titleToSlugMap = new Map<string, string>();
  
  // 第一遍：创建所有节点
  glossaryEntries.forEach((entry) => {
    const { data, id } = entry;
    
    // 跳过草稿
    if (data.draft) return;
    
    // 提取 slug（去掉 .mdx 或 .md 扩展名）
    const slug = id.replace(/\.(mdx?|md)$/, '');
    
    // 建立标题到 slug 的映射
    titleToSlugMap.set(data.title, slug);
    if (data.titleEn) {
      titleToSlugMap.set(data.titleEn, slug);
    }
    
    // 创建节点
    nodes.push({
      id: slug,
      type: 'glossaryNode',
      position: { x: 0, y: 0 }, // 位置将由布局算法计算
      data: {
        id: slug,
        title: data.title,
        titleEn: data.titleEn,
        abbreviation: data.abbreviation,
        description: data.description,
        category: data.category,
        slug,
        relatedTerms: data.relatedTerms || [],
      },
    });
  });
  
  // 第二遍：创建边（基于 relatedTerms）
  glossaryEntries.forEach((entry) => {
    const { data, id } = entry;
    
    if (data.draft) return;
    
    const sourceSlug = id.replace(/\.(mdx?|md)$/, '');
    const relatedTerms = data.relatedTerms || [];
    
    relatedTerms.forEach((relatedTerm: string) => {
      // 尝试找到目标术语的 slug
      const targetSlug = titleToSlugMap.get(relatedTerm);
      
      if (targetSlug && targetSlug !== sourceSlug) {
        // 创建边
        edges.push({
          id: `${sourceSlug}-${targetSlug}`,
          source: sourceSlug,
          target: targetSlug,
          type: 'smoothstep',
          animated: false,
          style: {
            stroke: '#94a3b8', // slate-400
            strokeWidth: 2,
          },
        });
      }
    });
  });
  
  return { nodes, edges };
}

/**
 * 按分类过滤节点
 */
export function filterNodesByCategory(
  nodes: GlossaryNode[],
  edges: GlossaryEdge[],
  categories: string[]
): { nodes: GlossaryNode[]; edges: GlossaryEdge[] } {
  if (categories.length === 0) {
    return { nodes, edges };
  }
  
  // 过滤节点
  const filteredNodes = nodes.filter((node) => {
    return node.data.category && categories.includes(node.data.category);
  });
  
  // 获取过滤后的节点 id 集合
  const nodeIds = new Set(filteredNodes.map((node) => node.id));
  
  // 过滤边（只保留两端都在过滤后节点中的边）
  const filteredEdges = edges.filter((edge) => {
    return nodeIds.has(edge.source) && nodeIds.has(edge.target);
  });
  
  return {
    nodes: filteredNodes,
    edges: filteredEdges,
  };
}

/**
 * 搜索节点
 */
export function searchNodes(
  nodes: GlossaryNode[],
  query: string
): GlossaryNode[] {
  if (!query.trim()) {
    return nodes;
  }
  
  const lowerQuery = query.toLowerCase();
  
  return nodes.filter((node) => {
    const { title, titleEn, abbreviation, description } = node.data;
    
    return (
      title.toLowerCase().includes(lowerQuery) ||
      (titleEn && titleEn.toLowerCase().includes(lowerQuery)) ||
      (abbreviation && abbreviation.toLowerCase().includes(lowerQuery)) ||
      (description && description.toLowerCase().includes(lowerQuery))
    );
  });
}
