#!/bin/bash

# UUHT - 超级简单的图片下载脚本
# 一键下载所有15张产品图片

echo ""
echo "========================================"
echo "  UUHT 产品图片自动下载器"
echo "========================================"
echo ""

# 创建图片目录
IMAGES_DIR="public/images"
mkdir -p "$IMAGES_DIR"

echo "📁 图片将保存到: $IMAGES_DIR"
echo ""
echo "开始下载 15 张产品图片..."
echo ""

# 定义图片列表（使用 Picsum Photos - 基于 Unsplash 的高质量图片）
declare -a IMAGES=(
    "air-fryer:appliance,kitchen,cooking"
    "robot-vacuum:robot,cleaning,smart"
    "massage-gun:fitness,massage,recovery"
    "bedding:bed,luxury,bedroom"
    "air-purifier:purifier,clean,air"
    "running-shoes:shoes,running,sport"
    "security-camera:camera,security,home"
    "jewelry:jewelry,necklace,fashion"
    "coffee-maker:coffee,machine,brewing"
    "yoga-mat:yoga,fitness,exercise"
    "cookware:pots,kitchen,cooking"
    "sneakers:shoes,casual,footwear"
    "floor-cleaner:cleaning,mop,floor"
    "watch:watch,timepiece,luxury"
    "kitchen-gadgets:kitchen,tools,utensils"
)

DOWNLOADED=0
TOTAL=${#IMAGES[@]}

for item in "${IMAGES[@]}"; do
    filename="${item%%:*}"
    keywords="${item##*:}"
    
    echo "⬇️  下载 #$((DOWNLOADED + 1)): $filename"
    
    # 使用 Picsum Photos 下载（高质量，免费）
    curl -s -o "$IMAGES_DIR/${filename}.jpg" "https://picsum.photos/seed/${filename}/800/600.jpg"
    
    if [ -f "$IMAGES_DIR/${filename}.jpg" ]; then
        size=$(du -h "$IMAGES_DIR/${filename}.jpg" | cut -f1)
        echo "   ✅ 成功 (${size})"
        DOWNLOADED=$((DOWNLOADED + 1))
    else
        echo "   ❌ 失败"
    fi
    echo ""
done

echo "========================================"
echo "✅ 下载完成！"
echo "   成功: $DOWNLOADED / $TOTAL"
echo "   位置: $IMAGES_DIR"
echo "========================================"
echo ""

# 列出所有下载的文件
echo "📋 已下载的文件："
ls -lh "$IMAGES_DIR"/*.jpg 2>/dev/null | awk '{print "   ✓ " $9 " (" $5 ")"}'

echo ""
echo " 提示："
echo "   • 这些是占位图片，可以稍后替换为真实产品图片"
echo "   • 如需更专业的图片，请访问 https://unsplash.com"
echo "   • 搜索产品名称，下载后重命名并替换对应文件"
echo ""

if [ $DOWNLOADED -eq $TOTAL ]; then
    echo "🎉 所有图片下载成功！"
    echo ""
    echo "下一步："
    echo "   1. 查看图片: open $IMAGES_DIR"
    echo "   2. 告诉我 '图片已下载'，我会更新代码使用这些图片"
    echo "   3. 或者直接说 '帮我美化产品展示'"
    echo ""
fi
