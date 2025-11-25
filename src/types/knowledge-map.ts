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

// 分类颜色映射
export const CATEGORY_COLORS: Record<GlossaryCategory, CategoryConfig> = {
  'core-concept': {
    label: '核心概念',
    color: 'rgb(99, 102, 241)',      // indigo-500
    bgColor: 'rgb(238, 242, 255)',   // indigo-50
    borderColor: 'rgb(165, 180, 252)' // indigo-300
  },
  'platform-product': {
    label: '平台产品',
    color: 'rgb(59, 130, 246)',      // blue-500
    bgColor: 'rgb(239, 246, 255)',   // blue-50
    borderColor: 'rgb(147, 197, 253)' // blue-300
  },
  'team-role': {
    label: '团队角色',
    color: 'rgb(16, 185, 129)',      // emerald-500
    bgColor: 'rgb(236, 253, 245)',   // emerald-50
    borderColor: 'rgb(110, 231, 183)' // emerald-300
  },
  'methodology': {
    label: '方法论',
    color: 'rgb(168, 85, 247)',      // purple-500
    bgColor: 'rgb(250, 245, 255)',   // purple-50
    borderColor: 'rgb(216, 180, 254)' // purple-300
  },
  'user-experience': {
    label: '用户体验',
    color: 'rgb(236, 72, 153)',      // pink-500
    bgColor: 'rgb(253, 242, 248)',   // pink-50
    borderColor: 'rgb(249, 168, 212)' // pink-300
  },
  'technical-practice': {
    label: '技术实践',
    color: 'rgb(234, 88, 12)',       // orange-500
    bgColor: 'rgb(255, 247, 237)',   // orange-50
    borderColor: 'rgb(253, 186, 116)' // orange-300
  }
};
