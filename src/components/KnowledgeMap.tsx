/**
 * 知识地图主组件
 * 使用 React Flow 渲染交互式知识图谱
 */

import { useCallback, useState } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  type NodeTypes,
} from 'reactflow';
import 'reactflow/dist/style.css';

import GlossaryNode from './GlossaryNode';
import CategoryLabel from './CategoryLabel';
import type { GlossaryNode as GlossaryNodeType, GlossaryEdge } from '@/types/knowledge-map';
import { Button } from './ui/button';
import { calculateCategoryLayout } from '@/lib/knowledge-map-layout';

interface KnowledgeMapProps {
  initialNodes: GlossaryNodeType[];
  initialEdges: GlossaryEdge[];
  allNodes?: GlossaryNodeType[]; // 所有节点数据，用于查找关联
  initialZoom?: number; // 初始缩放级别，默认 0.7
}

// 注册自定义节点类型
const nodeTypes: NodeTypes = {
  glossaryNode: GlossaryNode,
  categoryLabel: CategoryLabel,
};

export default function KnowledgeMap({ 
  initialNodes, 
  initialEdges, 
  allNodes = [],
  initialZoom = 0.7 
}: KnowledgeMapProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [isRelatedView, setIsRelatedView] = useState(false);

  // 处理节点点击 - 在关联视图中跳转详情，否则显示关联术语
  const onNodeClick = useCallback((_event: React.MouseEvent, node: GlossaryNodeType) => {
    // 如果在关联视图中，点击直接跳转详情页
    if (isRelatedView) {
      window.location.href = `/glossary/${node.data.slug}`;
      return;
    }
    // 否则显示关联术语
    handleViewRelated(node);
  }, [isRelatedView]);



  // 查看关联术语
  const handleViewRelated = useCallback((node: GlossaryNodeType) => {
    if (!allNodes.length) {
      // 如果没有全部节点数据，直接跳转详情页
      window.location.href = `/glossary/${node.data.slug}`;
      return;
    }
    
    const nodeId = node.id;
    const relatedNodeIds = new Set([nodeId]); // 包含自己
    
    // 从原始数据中找到所有相关的节点
    const selectedNodeData = allNodes.find(n => n.id === nodeId);
    if (selectedNodeData?.data.relatedTerms) {
      // relatedTerms 存储的是术语标题，需要映射到节点 ID
      allNodes.forEach(n => {
        if (selectedNodeData.data.relatedTerms?.includes(n.data.title)) {
          relatedNodeIds.add(n.id);
        }
      });
    }
    
    // 同时检查反向关系（其他节点关联到当前节点）
    allNodes.forEach(n => {
      if (n.data.relatedTerms?.includes(selectedNodeData?.data.title || '')) {
        relatedNodeIds.add(n.id);
      }
    });
    
    // 过滤出相关节点
    const relatedNodes = allNodes.filter(n => relatedNodeIds.has(n.id));
    
    if (relatedNodes.length > 1) {
      // 有关联节点，显示关联视图
      const { nodes: layoutedNodes } = calculateCategoryLayout(relatedNodes, []);
      setNodes(layoutedNodes);
      setEdges([]);
      setIsRelatedView(true);
    } else {
      // 没有关联节点，直接跳转详情页
      window.location.href = `/glossary/${node.data.slug}`;
    }
  }, [allNodes, setNodes, setEdges]);

  // 返回全部视图
  const handleBackToAll = useCallback(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
    setIsRelatedView(false);
  }, [initialNodes, initialEdges, setNodes, setEdges]);

  // MiniMap 节点颜色配置
  const nodeColor = useCallback((node: GlossaryNodeType) => {
    if (node.data.category) {
      const colors = {
        'core-concept': '#6366f1',
        'platform-product': '#3b82f6',
        'team-role': '#10b981',
        'methodology': '#a855f7',
        'user-experience': '#ec4899',
        'technical-practice': '#ea580c',
      };
      return colors[node.data.category] || '#64748b';
    }
    return '#64748b';
  }, []);

  return (
    <div className="w-full h-full relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{
          padding: 0.2, // 视口边距
          minZoom: Math.max(0.3, initialZoom - 0.2), // 最小缩放
          maxZoom: Math.min(1.2, initialZoom + 0.3), // 最大缩放
        }}
        minZoom={0.1}
        maxZoom={1.5}
        defaultEdgeOptions={{
          type: 'smoothstep',
          animated: false,
          style: { stroke: '#475569', strokeWidth: 2 }, // slate-600 for dark theme
        }}
      >
        {/* 背景网格 - 深色主题 */}
        <Background 
          variant={BackgroundVariant.Dots}
          gap={16}
          size={1}
          color="#334155" // slate-700
        />
        
        {/* 小地图 */}
        <MiniMap
          nodeColor={nodeColor}
          nodeStrokeWidth={3}
          zoomable
          pannable
          style={{
            backgroundColor: 'rgba(15, 23, 42, 0.8)', // slate-900 with opacity
          }}
        />
        
        {/* 控制按钮 */}
        <Controls showInteractive={false} />
      </ReactFlow>

      {/* 返回全部按钮 */}
      {isRelatedView && (
        <div className="absolute top-6 left-6 z-10">
          <Button
            onClick={handleBackToAll}
            className="bg-slate-800 text-slate-100 border-2 border-slate-600 hover:bg-slate-700 shadow-lg"
          >
            ← 返回全部
          </Button>
        </div>
      )}

    </div>
  );
}
