# Vercel 部署指南 - UUHT

## 🚀 快速部署到 Vercel

### 方法一：通过 Vercel CLI（推荐，最快）

#### 步骤 1：安装 Vercel CLI

```bash
npm install -g vercel
```

#### 步骤 2：登录 Vercel

```bash
vercel login
```

这会打开浏览器让您登录 Vercel 账号。如果没有账号，可以先注册。

#### 步骤 3：部署项目

```bash
cd /Users/jase/cTrader/10best-reviews
vercel
```

首次部署时，Vercel 会询问一些问题：
- **Set up and deploy?** → Yes
- **Which scope?** → 选择您的账号
- **Link to existing project?** → No（如果是首次部署）
- **What's your project's name?** → uuht（或您喜欢的名称）
- **In which directory is your code located?** → ./
- **Want to override the settings?** → No

然后等待部署完成（约1-2分钟）。

#### 步骤 4：获取部署 URL

部署完成后，Vercel 会显示一个预览 URL，例如：
```
https://uuht-xxx.vercel.app
```

您可以在浏览器中访问这个 URL 查看您的网站！

#### 步骤 5：生产环境部署

如果预览没问题，运行以下命令部署到生产环境：

```bash
vercel --prod
```

---

### 方法二：通过 GitHub 集成（自动化部署）

#### 步骤 1：推送代码到 GitHub

```bash
cd /Users/jase/cTrader/10best-reviews

git init
git add .
git commit -m "Initial commit: UUHT affiliate marketing website"

# 在 GitHub 上创建新仓库后
git remote add origin https://github.com/yourusername/uuht.git
git push -u origin main
```

#### 步骤 2：在 Vercel 上导入项目

1. 访问 [https://vercel.com](https://vercel.com)
2. 点击 **"Add New Project"**
3. 选择 **"Import Git Repository"**
4. 连接您的 GitHub 账号（如果尚未连接）
5. 选择 `uuht` 仓库
6. 点击 **"Import"**

#### 步骤 3：配置项目

Vercel 会自动检测这是 Next.js 项目，通常不需要额外配置。

如果需要自定义：
- **Framework Preset**: Next.js
- **Root Directory**: ./
- **Build Command**: npm run build
- **Output Directory**: .next

点击 **"Deploy"**

#### 步骤 4：等待部署完成

Vercel 会自动构建和部署您的项目（约2-3分钟）。

部署完成后，您会获得：
- **Production URL**: `https://uuht.vercel.app`
- **Preview URLs**: 每次 push 到 GitHub 都会自动生成新的预览链接

---

## ✅ 部署后检查清单

### 1. 验证网站功能

访问您的 Vercel URL，检查：
- [ ] 首页正常加载
- [ ] Header 导航栏显示正确（UU HT Logo）
- [ ] Hero 区域显示完整
- [ ] 产品卡片可以点击查看
- [ ] About/Contact/Blog 页面可访问
- [ ] Footer 页脚显示正确
- [ ] 移动端响应式正常

### 2. 测试 Affiliate 链接

- [ ] 点击产品卡片的 "Read Full Review" 按钮
- [ ] 确认跳转到正确的产品详情页
- [ ] 检查 Affiliate CTA 按钮是否工作

### 3. SEO 验证

- [ ] 查看页面源代码，确认 `<meta name="lhverifycode">` 存在
- [ ] 使用 [Google Search Console](https://search.google.com/search-console) 提交站点

### 4. 性能测试

- [ ] 使用 [Google PageSpeed Insights](https://pagespeed.web.dev/) 测试性能
- [ ] 目标：Performance 评分 > 80

---

## 🔧 常见问题排查

### Q1: 部署失败，显示 "Build Error"

**可能原因：**
- Node 版本不兼容
- 依赖冲突
- 代码语法错误

**解决方案：**
```bash
# 本地测试构建
npm run build

# 如果有错误，修复后重新部署
vercel --prod
```

### Q2: 图片不显示

**原因：** Vercel 需要正确配置图片域名

**解决方案：**
编辑 `next.config.mjs`：

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['your-domain.com', 'images.unsplash.com'], // 添加您的图片域名
  },
};

export default nextConfig;
```

### Q3: 环境变量未生效

**解决方案：**
1. 在 Vercel Dashboard 中进入项目设置
2. 点击 **"Environment Variables"**
3. 添加您的环境变量（如数据库连接字符串等）
4. 重新部署

### Q4: 自定义域名配置

**步骤：**
1. 在 Vercel Dashboard 中进入项目
2. 点击 **"Settings"** → **"Domains"**
3. 输入您的域名（如 `www.uuht.com`）
4. 按照提示配置 DNS：
   - **A Record**（根域名）：指向 Vercel IP
   - **CNAME**（www）：指向 `cname.vercel-dns.com`
5. 等待 DNS 传播（最多48小时）

---

## 📊 Vercel 优势

### ✅ 为什么选择 Vercel？

1. **零配置部署** - 自动检测 Next.js 项目
2. **全球 CDN** - 快速加载速度
3. **自动 HTTPS** - SSL 证书自动配置
4. **Git 集成** - 每次 push 自动部署
5. **预览链接** - 每个 PR 都有独立预览
6. **免费套餐** - 个人项目完全免费
7. **分析工具** - 内置性能和流量分析
8. **边缘函数** - 支持 Serverless Functions

### 💰 定价

**Hobby Plan（免费）：**
- ✅ 无限个人项目
- ✅ 100GB 带宽/月
- ✅ 自动 SSL 证书
- ✅ 全球 CDN
- ✅ Git 集成

**Pro Plan（$20/月）：**
- 团队项目
- 1TB 带宽/月
- 高级分析
- 优先支持

---

## 🎯 下一步优化

### 1. 添加 Google Analytics

在 Vercel 中添加环境变量：

```bash
# 在 Vercel Dashboard → Settings → Environment Variables
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 2. 设置自定义域名

推荐域名注册商：
- Namecheap
- Cloudflare Registrar
- GoDaddy

### 3. 启用 Vercel Analytics

在 Vercel Dashboard 中启用内置分析功能，追踪：
- 页面浏览量
- 访客来源
- 加载速度

### 4. 配置重定向

如果需要将旧域名重定向到新域名，在 `vercel.json` 中添加：

```json
{
  "redirects": [
    {
      "source": "/old-page",
      "destination": "/new-page",
      "permanent": true
    }
  ]
}
```

---

## 📞 获取帮助

- **Vercel 文档**: https://vercel.com/docs
- **Next.js on Vercel**: https://vercel.com/docs/frameworks/nextjs
- **Vercel Discord**: https://discord.gg/vercel
- **社区论坛**: https://github.com/vercel/vercel/discussions

---

## 🎉 部署成功！

恭喜！您的 UUHT 网站现在已经在线上了！

**您的网站 URL：** `https://uuht.vercel.app`（示例）

接下来：
1. 替换 affiliate 链接为真实 URL
2. 添加产品图片
3. 设置 Google Analytics
4. 连接自定义域名
5. 开始推广赚钱！💰

---

*最后更新：2026年6月*
