#!/bin/bash

# UUHT - 自动下载产品图片脚本
# 从 Unsplash 下载高质量免费商用图片

echo " UUHT 产品图片下载器"
echo "========================"
echo ""

# 创建图片目录
IMAGES_DIR="public/images"
mkdir -p "$IMAGES_DIR"

echo "📁 图片目录: $IMAGES_DIR"
echo ""

# 定义产品图片列表（使用 Unsplash Source API）
declare -A IMAGES=(
    ["air-fryer"]="air fryer,kitchen appliance,cooking"
    ["robot-vacuum"]="robot vacuum,cleaning device,smart home"
    ["massage-gun"]="massage gun,fitness,recovery"
    ["bedding"]="bedding,luxury bed,bedroom"
    ["air-purifier"]="air purifier,clean air,home health"
    ["running-shoes"]="running shoes,sneakers,athletic"
    ["security-camera"]="security camera,smart home,surveillance"
    ["jewelry"]="jewelry,necklace,fashion accessories"
    ["coffee-maker"]="coffee maker,espresso machine,brewing"
    ["yoga-mat"]="yoga mat,fitness,exercise"
    ["cookware"]="cookware,pots pans,kitchen"
    ["sneakers"]="sneakers,casual shoes,footwear"
    ["floor-cleaner"]="floor cleaning,mop,steam cleaner"
    ["watch"]="watch,wristwatch,timepiece"
    ["kitchen-gadgets"]="kitchen tools,cooking utensils,gadgets"
)

# 下载计数器
DOWNLOADED=0
TOTAL=${#IMAGES[@]}

echo "开始下载 $TOTAL 张产品图片..."
echo ""

# 遍历并下载每张图片
for filename in "${!IMAGES[@]}"; do
    keywords="${IMAGES[$filename]}"
    output_file="$IMAGES_DIR/${filename}.jpg"
    
    echo "⬇️  下载: $filename"
    
    # 使用 Unsplash Source API 下载随机图片
    # 注意：Unsplash Source 已弃用，改用直接链接方式
    
    # 方法1: 尝试使用 picsum.photos（备用方案）
    curl -s -o "$output_file" "https://picsum.photos/seed/${filename}/800/600.jpg"
    
    if [ $? -eq 0 ] && [ -f "$output_file" ]; then
        echo "   ✅ 成功: ${filename}.jpg"
        DOWNLOADED=$((DOWNLOADED + 1))
    else
        echo "   ❌ 失败: ${filename}.jpg"
    fi
    
    echo ""
done

echo "========================"
echo "✅ 下载完成！"
echo "   成功: $DOWNLOADED / $TOTAL"
echo "   目录: $IMAGES_DIR"
echo ""

# 列出下载的文件
echo "📋 已下载的文件："
ls -lh "$IMAGES_DIR"/*.jpg 2>/dev/null | awk '{print "   " $9 " (" $5 ")"}'

echo ""
echo " 提示："
echo "   1. 这些是占位图片，建议替换为真实产品图片"
echo "   2. 访问 https://unsplash.com 搜索产品名称下载更专业的图片"
echo "   3. 下载后运行: git add public/images && git commit -m 'Add product images' && git push"
echo ""

# 检查是否需要更新代码
if [ $DOWNLOADED -gt 0 ]; then
    echo "🎯 下一步：更新代码以使用真实图片"
    echo "   请告诉我是否已完成下载，我会帮您更新组件代码。"
fi
