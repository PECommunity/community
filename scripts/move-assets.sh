#!/bin/bash

# 移动 content 目录中的 assets 到 public 目录
# 并更新 Markdown 文件中的引用路径

echo "🚀 开始移动 assets 文件..."

# 创建目标目录
mkdir -p public/articles/translation/backstage-doc/assets

# 查找所有 assets 目录并移动
find src/content/articles/translation/backstage-doc -type d -name "assets" | while read -r dir; do
    # 获取相对路径
    rel_path=${dir#src/content/articles/translation/backstage-doc/}
    target_dir="public/articles/translation/backstage-doc/$rel_path"
    
    echo "📁 移动: $dir -> $target_dir"
    
    # 创建目标目录
    mkdir -p "$(dirname "$target_dir")"
    
    # 复制文件（保留原文件）
    cp -r "$dir" "$(dirname "$target_dir")/"
done

echo "✅ Assets 文件移动完成！"
echo ""
echo "⚠️  接下来需要更新 Markdown 文件中的图片引用路径："
echo "   将 '../assets/' 替换为 '/articles/translation/backstage-doc/assets/'"
echo ""
echo "💡 提示：你可以手动编辑，或运行以下命令批量替换："
echo "   find src/content/articles/translation/backstage-doc -name '*.md' -exec sed -i '' 's|../assets/|/articles/translation/backstage-doc/assets/|g' {} +"
