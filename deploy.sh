#!/bin/bash

# UUHT - 自动部署到 GitHub 和 Vercel 的辅助脚本
# 使用方法: chmod +x deploy.sh && ./deploy.sh

echo "🚀 UUHT 部署助手"
echo "=================="
echo ""

# 检查是否在正确的目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误: 请在项目根目录运行此脚本"
    exit 1
fi

echo "✅ 当前目录: $(pwd)"
echo ""

# 步骤 1: 提示用户创建 GitHub 仓库
echo "📋 步骤 1: 在 GitHub 上创建仓库"
echo "--------------------------------"
echo "请访问: https://github.com/new"
echo "Repository name: uuht"
echo "Description: UUHT - Affiliate Marketing Website"
echo "选择: Public (公开)"
echo ""
read -p "按回车键继续（创建完仓库后）..." 

# 步骤 2: 获取 GitHub 用户名
echo ""
echo " 步骤 2: 配置远程仓库"
echo "------------------------"
read -p "请输入您的 GitHub 用户名: " GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ 错误: 用户名不能为空"
    exit 1
fi

REMOTE_URL="https://github.com/${GITHUB_USERNAME}/uuht.git"
echo "远程仓库 URL: $REMOTE_URL"
echo ""

# 添加远程仓库
git remote add origin $REMOTE_URL 2>/dev/null
if [ $? -ne 0 ]; then
    echo "⚠️  远程仓库已存在，正在更新..."
    git remote set-url origin $REMOTE_URL
fi

echo "✅ 远程仓库配置完成"
echo ""

# 步骤 3: 推送代码
echo "📋 步骤 3: 推送代码到 GitHub"
echo "----------------------------"
read -p "是否立即推送代码？(y/n): " PUSH_CONFIRM

if [ "$PUSH_CONFIRM" = "y" ] || [ "$PUSH_CONFIRM" = "Y" ]; then
    echo "正在推送..."
    git push -u origin main
    
    if [ $? -eq 0 ]; then
        echo "✅ 代码推送成功！"
        echo ""
        echo " GitHub 仓库地址: https://github.com/${GITHUB_USERNAME}/uuht"
    else
        echo "❌ 推送失败"
        echo ""
        echo "可能的原因："
        echo "1. 需要设置 Personal Access Token (PAT)"
        echo "   访问: https://github.com/settings/tokens"
        echo "2. 或者使用 SSH key"
        echo "   运行: ssh-keygen -t ed25519"
        echo ""
        exit 1
    fi
else
    echo "⏭️  跳过推送"
    echo "您可以稍后手动运行: git push -u origin main"
fi

echo ""
echo "=================="
echo "📋 下一步：部署到 Vercel"
echo "=================="
echo ""
echo "方式 1: 通过网页（推荐）"
echo "  1. 访问: https://vercel.com/new"
echo "  2. 点击 'Import Git Repository'"
echo "  3. 选择 'uuht' 仓库"
echo "  4. 点击 'Deploy'"
echo "  5. 等待 2-3 分钟"
echo ""
echo "方式 2: 使用 Vercel CLI"
echo "  运行以下命令："
echo "  npm install -g vercel"
echo "  vercel login"
echo "  vercel"
echo ""
echo "=================="
echo "✨ 部署完成后，您将获得："
echo "  - 在线网站 URL (如 https://uuht.vercel.app)"
echo "  - 全球 CDN 加速"
echo "  - 自动 HTTPS"
echo "  - 免费 SSL 证书"
echo "=================="
echo ""
echo "📖 详细文档请查看:"
echo "  - VERCEL_DEPLOYMENT.md"
echo "  - PUSH_TO_GITHUB.md"
echo ""
echo "祝您好运！"
