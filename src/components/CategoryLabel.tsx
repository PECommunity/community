/**
 * 分类标签组件
 * 在知识地图中显示分类标题
 */

import { memo } from 'react';
import type { NodeProps } from 'reactflow';
import { CATEGORY_COLORS, type CategoryLabelData } from '@/types/knowledge-map';

function CategoryLabel({ data }: NodeProps<CategoryLabelData>) {
  const categoryConfig = CATEGORY_COLORS[data.category];
  
  return (
    <div className="category-label pointer-events-none">
      <div 
        className="px-4 py-2 rounded-lg inline-block font-semibold text-sm"
        style={{
          backgroundColor: categoryConfig.bgColor,
          color: categoryConfig.color,
          borderLeft: `4px solid ${categoryConfig.color}`,
        }}
      >
        {categoryConfig.label}
      </div>
    </div>
  );
}

export default memo(CategoryLabel);
