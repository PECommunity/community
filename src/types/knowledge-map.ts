/**
 * 知识地图类型定义
 * 用于 React Flow 的节点和边类型
 */

import type { Node, Edge } from 'reactflow';

// 术语分类
export type GlossaryCategory = 
  | 'core-concept'       // 核心概念
  | 'platform-product'   // 平台产品
  | 'team-role'          // 团队角色
  | 'methodology'        // 方法论
  | 'user-experience'    // 用户体验
  | 'technical-practice' // 技术实践
  ;

// 术语节点数据
export interface GlossaryNodeData {
  id: string;
  title: string;
  titleEn?: string;
  abbreviation?: string;
  description?: string;
  category?: GlossaryCategory;
  slug: string;
  relatedTerms?: string[]; // 关联术语列表
}

// 分类标签节点数据
export interface CategoryLabelData {
  category: GlossaryCategory;
  label: string;
}

// React Flow 节点类型
export type GlossaryNode = Node<GlossaryNodeData>;

// React Flow 边类型
export type GlossaryEdge = Edge;

// 分类配置
export interface CategoryConfig {
  label: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

// 分类颜色映射 - 深色主题优化配色
export const CATEGORY_COLORS: Record<GlossaryCategory, CategoryConfig> = {
  'core-concept': {
    label: '核心概念',
    color: 'rgb(129, 140, 248)',      // indigo-400
    bgColor: 'rgba(99, 102, 241, 0.15)', // indigo with opacity
    borderColor: 'rgb(129, 140, 248)'    // indigo-400
  },
  'platform-product': {
    label: '平台产品',
    color: 'rgb(96, 165, 250)',       // blue-400
    bgColor: 'rgba(59, 130, 246, 0.15)', // blue with opacity
    borderColor: 'rgb(96, 165, 250)'     // blue-400
  },
  'team-role': {
    label: '团队角色',
    color: 'rgb(52, 211, 153)',       // emerald-400
    bgColor: 'rgba(16, 185, 129, 0.15)', // emerald with opacity
    borderColor: 'rgb(52, 211, 153)'     // emerald-400
  },
  'methodology': {
    label: '方法论',
    color: 'rgb(192, 132, 252)',      // purple-400
    bgColor: 'rgba(168, 85, 247, 0.15)', // purple with opacity
    borderColor: 'rgb(192, 132, 252)'    // purple-400
  },
  'user-experience': {
    label: '用户体验',
    color: 'rgb(244, 114, 182)',      // pink-400
    bgColor: 'rgba(236, 72, 153, 0.15)', // pink with opacity
    borderColor: 'rgb(244, 114, 182)'    // pink-400
  },
  'technical-practice': {
    label: '技术实践',
    color: 'rgb(251, 146, 60)',       // orange-400
    bgColor: 'rgba(234, 88, 12, 0.15)',  // orange with opacity
    borderColor: 'rgb(251, 146, 60)'     // orange-400
  }
};
