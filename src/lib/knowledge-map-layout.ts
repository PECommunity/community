/**
 * 知识地图布局算法
 * 使用分类分层布局，按 category 分组显示
 */

import type { Node, Edge } from 'reactflow';
import type { GlossaryNodeData, GlossaryCategory } from '@/types/knowledge-map';
import { CATEGORY_COLORS } from '@/types/knowledge-map';

// 布局配置
const LAYOUT_CONFIG = {
  rowGap: 60,               // 层级间距（分类之间）减少40%
  colGap: 20,               // 同层节点间距
  nodesPerRow: 7,           // 每行显示的节点数（增加到7张）
  marginX: 40,              // 外边距 x
  marginY: 40,              // 外边距 y
  categoryLabelHeight: 40,  // 分类标题高度
};

// 节点尺寸
const NODE_SIZE = {
  width: 280,
  height: 180,              // 增加高度以显示更多描述
};

// 分类顺序
const CATEGORY_ORDER: (GlossaryCategory | 'uncategorized')[] = [
  'core-concept',
  'platform-product',
  'team-role',
  'methodology',
  'user-experience',
  'technical-practice',
  'uncategorized'
];

/**
 * 使用分类分层布局
 */
export function calculateCategoryLayout(
  nodes: Node<GlossaryNodeData>[],
  edges: Edge[]
): { nodes: Node[]; edges: Edge[] } {
  // 按分类分组
  const categories = new Map<string, Node<GlossaryNodeData>[]>();
  
  // 初始化所有分类
  CATEGORY_ORDER.forEach(cat => {
    categories.set(cat, []);
  });
  
  // 将节点按分类分组
  nodes.forEach((node) => {
    const category = node.data.category || 'uncategorized';
    categories.get(category)!.push(node);
  });

  // 计算每个分类的位置
  let currentY = LAYOUT_CONFIG.marginY;
  const layoutedNodes: Node[] = [];

  CATEGORY_ORDER.forEach((category) => {
    const categoryNodes = categories.get(category)!;
    if (categoryNodes.length === 0) return; // 跳过空分类
    
    // 添加分类标题节点
    if (category !== 'uncategorized') {
      const categoryConfig = CATEGORY_COLORS[category as GlossaryCategory];
      layoutedNodes.push({
        id: `category-${category}`,
        type: 'categoryLabel',
        position: {
          x: LAYOUT_CONFIG.marginX,
          y: currentY,
        },
        data: {
          category: category as GlossaryCategory,
          label: categoryConfig.label,
        },
        draggable: false,
        selectable: false,
      } as Node);
    }
    
    // 预留分类标题空间
    currentY += LAYOUT_CONFIG.categoryLabelHeight;
    
    const nodesPerRow = LAYOUT_CONFIG.nodesPerRow;
    const colGap = NODE_SIZE.width + LAYOUT_CONFIG.colGap;
    const rowGap = NODE_SIZE.height + 30; // 同分类内的行间距

    categoryNodes.forEach((node, index) => {
      const row = Math.floor(index / nodesPerRow);
      const col = index % nodesPerRow;

      layoutedNodes.push({
        ...node,
        position: {
          x: col * colGap + LAYOUT_CONFIG.marginX,
          y: currentY + row * rowGap,
        },
      });
    });

    const rows = Math.ceil(categoryNodes.length / nodesPerRow);
    currentY += rows * rowGap + LAYOUT_CONFIG.rowGap; // 加上分类间距
  });

  // 返回时不包含边
  return {
    nodes: layoutedNodes,
    edges: [], // 不显示连接线
  };
}

// 保留原函数名作为主导出
export const calculateHierarchicalLayout = calculateCategoryLayout;
