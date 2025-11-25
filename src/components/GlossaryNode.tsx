/**
 * 术语节点组件
 * 使用 shadcn/ui Card 组件展示术语信息
 */

import { memo } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';
import { Card } from '@/components/ui/card';
import type { GlossaryNodeData } from '@/types/knowledge-map';
import { CATEGORY_COLORS } from '@/types/knowledge-map';

function GlossaryNode({ data }: NodeProps<GlossaryNodeData>) {
  const categoryConfig = data.category 
    ? CATEGORY_COLORS[data.category]
    : {
        color: 'rgb(100, 116, 139)',    // slate-500
        bgColor: 'rgb(248, 250, 252)',  // slate-50
        borderColor: 'rgb(203, 213, 225)' // slate-300
      };

  return (
    <div className="glossary-node">
      <Handle
        type="target"
        position={Position.Top}
        style={{
          background: categoryConfig.color,
          width: 8,
          height: 8,
          border: 'none',
          opacity: 0, // 隐藏连接点
        }}
      />
      
      <Card
        className="w-[260px] h-[160px] cursor-pointer transition-all hover:shadow-lg hover:scale-105"
        style={{
          backgroundColor: categoryConfig.bgColor,
          borderColor: categoryConfig.borderColor,
          borderWidth: '2px',
        }}
      >
        <div className="p-4 h-full flex flex-col">
          {/* 标题区域 */}
          <div className="mb-2">
            <h3 
              className="text-base font-semibold leading-tight mb-1"
              style={{ color: categoryConfig.color }}
            >
              {data.title}
            </h3>
            {data.titleEn && (
              <p className="text-xs text-gray-600 leading-tight">
                {data.titleEn}
              </p>
            )}
          </div>
          
          {/* 描述区域 */}
          <div className="flex-1 overflow-hidden">
            {data.description && (
              <p className="text-xs text-gray-700 line-clamp-3 leading-relaxed">
                {data.description}
              </p>
            )}
          </div>
          
          {/* 底部信息 */}
          <div className="mt-2 flex items-center justify-between">
            {data.abbreviation && (
              <span 
                className="text-xs font-medium px-2 py-0.5 rounded"
                style={{ 
                  backgroundColor: categoryConfig.color,
                  color: 'white'
                }}
              >
                {data.abbreviation}
              </span>
            )}
            {data.category && (
              <span className="text-xs text-gray-500">
                {CATEGORY_COLORS[data.category].label}
              </span>
            )}
          </div>
        </div>
      </Card>

      <Handle
        type="source"
        position={Position.Bottom}
        style={{
          background: categoryConfig.color,
          width: 8,
          height: 8,
          border: 'none',
          opacity: 0, // 隐藏连接点
        }}
      />
    </div>
  );
}

export default memo(GlossaryNode);
