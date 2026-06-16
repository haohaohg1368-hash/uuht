#!/usr/bin/env python3
"""
UUHT - Unsplash 产品图片下载器
从 Unsplash API 下载高质量免费商用产品图片
"""

import os
import requests
from pathlib import Path

# 创建图片目录
IMAGES_DIR = Path("public/images")
IMAGES_DIR.mkdir(parents=True, exist_ok=True)

# 产品图片配置
PRODUCTS = {
    "air-fryer": {
        "query": "air fryer kitchen appliance",
        "description": "空气炸锅"
    },
    "robot-vacuum": {
        "query": "robot vacuum cleaner smart home",
        "description": "扫地机器人"
    },
    "massage-gun": {
        "query": "massage gun fitness recovery",
        "description": "筋膜枪"
    },
    "bedding": {
        "query": "luxury bedding bed sheets bedroom",
        "description": "床品套件"
    },
    "air-purifier": {
        "query": "air purifier clean air home",
        "description": "空气净化器"
    },
    "running-shoes": {
        "query": "running shoes sneakers athletic",
        "description": "跑步鞋"
    },
    "security-camera": {
        "query": "security camera smart home surveillance",
        "description": "安防摄像头"
    },
    "jewelry": {
        "query": "jewelry necklace earrings fashion",
        "description": "珠宝配饰"
    },
    "coffee-maker": {
        "query": "coffee maker espresso machine brewing",
        "description": "咖啡机"
    },
    "yoga-mat": {
        "query": "yoga mat fitness exercise",
        "description": "瑜伽垫"
    },
    "cookware": {
        "query": "cookware pots pans kitchen",
        "description": "炊具套装"
    },
    "sneakers": {
        "query": "sneakers casual shoes lifestyle",
        "description": "运动鞋"
    },
    "floor-cleaner": {
        "query": "floor cleaning mop steam cleaner",
        "description": "地板清洁器"
    },
    "watch": {
        "query": "watch wristwatch timepiece luxury",
        "description": "手表"
    },
    "kitchen-gadgets": {
        "query": "kitchen tools cooking utensils gadgets",
        "description": "厨房小工具"
    }
}

def download_image(filename, query):
    """从 Picsum Photos 下载图片（Unsplash 的替代方案，无需 API key）"""
    
    # 使用 Picsum Photos（基于 Unsplash 图片）
    url = f"https://picsum.photos/seed/{filename}/800/600.jpg"
    output_path = IMAGES_DIR / f"{filename}.jpg"
    
    print(f"️  下载: {filename} ({query})")
    
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        
        with open(output_path, 'wb') as f:
            f.write(response.content)
        
        print(f"   ✅ 成功: {filename}.jpg")
        return True
        
    except Exception as e:
        print(f"   ❌ 失败: {str(e)}")
        return False

def main():
    print(" UUHT 产品图片下载器")
    print("=" * 50)
    print(f" 图片目录: {IMAGES_DIR.absolute()}")
    print()
    
    downloaded = 0
    total = len(PRODUCTS)
    
    print(f"开始下载 {total} 张产品图片...\n")
    
    for filename, config in PRODUCTS.items():
        if download_image(filename, config['query']):
            downloaded += 1
        print()
    
    print("=" * 50)
    print(f"✅ 下载完成！")
    print(f"   成功: {downloaded} / {total}")
    print(f"   目录: {IMAGES_DIR.absolute()}")
    print()
    
    # 列出下载的文件
    print("📋 已下载的文件：")
    for img_file in sorted(IMAGES_DIR.glob("*.jpg")):
        size = img_file.stat().st_size
        print(f"   {img_file.name} ({size:,} bytes)")
    
    print()
    print("💡 提示：")
    print("   1. 这些是占位图片，建议替换为真实产品图片")
    print("   2. 访问 https://unsplash.com 搜索产品名称下载更专业的图片")
    print("   3. 或使用 Adobe Stock、Shutterstock 等付费图库")
    print()
    
    if downloaded > 0:
        print("🎯 下一步：")
        print("   1. 查看图片: open public/images")
        print("   2. 更新代码以使用真实图片")
        print("   3. 提交到 Git: git add public/images && git commit -m 'Add product images' && git push")
        print()

if __name__ == "__main__":
    main()
