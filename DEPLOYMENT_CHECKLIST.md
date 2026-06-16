# 部署检查清单 - 10Best Reviews

在将网站部署到生产环境之前，请完成以下检查项：

## 🔴 必须完成（Critical）

### 1. Affiliate 链接配置
- [ ] 打开 `/src/components/BrandReviews.tsx`
- [ ] 将所有 `affiliateLink: "#"` 替换为真实的推广链接
- [ ] 测试每个链接是否能正确跳转到目标网站
- [ ] 确认链接中包含您的 affiliate ID/tag

**示例：**
```typescript
// 修改前
affiliateLink: "#"

// 修改后（Amazon）
affiliateLink: "https://www.amazon.com/dp/B08N5WRWNW?tag=your-tag-20"

// 修改后（其他平台）
affiliateLink: "https://shareasale.com/r.cfm?b=123456&u=789012&m=34567"
```

### 2. lhverifycode 验证
- [x] 已添加到 `/src/app/layout.tsx` 的 `<head>` 中 ✅
- [ ] 在 LinkHaitao 后台验证代码是否生效
- [ ] 确认显示"验证成功"

当前代码：
```html
<meta name="lhverifycode" content="32dc01246faccb7f5b3cad5016dd5033" />
```

### 3. 联系信息更新
- [ ] 编辑 `/src/app/contact/page.tsx`
  - [ ] 更新邮箱地址（当前：contact@10bestreviews.com）
  - [ ] 更新工作时间（如需要）
  
- [ ] 编辑 `/src/app/privacy-policy/page.tsx`
  - [ ] 更新联系邮箱（当前：privacy@10bestreviews.com）
  - [ ] 更新公司地址（当前：New York, NY 10001）

- [ ] 编辑 `/src/app/terms-of-service/page.tsx`
  - [ ] 更新法律联系邮箱（当前：legal@10bestreviews.com）
  - [ ] 更新公司地址

- [ ] 编辑 `/src/app/affiliate-disclosure/page.tsx`
  - [ ] 更新 affiliate 联系邮箱（当前：affiliates@10bestreviews.com）

### 4. SEO Meta 标签
- [ ] 编辑 `/src/app/layout.tsx`
- [ ] 更新 `metadata` 对象：

```typescript
export const metadata: Metadata = {
  title: "您的网站标题 | 10Best Reviews",
  description: "您的网站描述...",
};
```

### 5. 产品图片
- [ ] 准备15张产品图片（建议尺寸：800x600px 或 1200x800px）
- [ ] 创建目录：`/public/images/`
- [ ] 上传图片并重命名为有意义的名称：
  - `air-fryer.jpg`
  - `robot-vacuum.jpg`
  - `massage-gun.jpg`
  - 等等...
  
- [ ] 更新 `/src/components/BrandReviews.tsx` 中的图片引用
- [ ] 更新 `/src/app/blog/page.tsx` 中的图片引用
- [ ] 更新 `/src/app/products/[id]/page.tsx` 中的图片引用

**使用 Next.js Image 组件（推荐）：**
```typescript
import Image from 'next/image';

<Image 
  src="/images/air-fryer.jpg" 
  alt="Best Air Fryer 2026"
  width={800}
  height={600}
  className="w-full h-56 object-cover"
/>
```

---

## 🟡 强烈建议（High Priority）

### 6. Google Analytics 集成
- [ ] 注册 Google Analytics 4 (GA4) 账号
- [ ] 获取 Measurement ID（格式：G-XXXXXXXXXX）
- [ ] 创建文件 `/src/components/GoogleAnalytics.tsx`：

```typescript
'use client';

import Script from 'next/script';

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `,
        }}
      />
    </>
  );
}
```

- [ ] 在 `/src/app/layout.tsx` 中引入：

```typescript
import GoogleAnalytics from '@/components/GoogleAnalytics';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="lhverifycode" content="32dc01246faccb7f5b3cad5016dd5033" />
      </head>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
```

### 7. 邮件订阅集成
- [ ] 选择邮件服务提供商：
  - [ ] Mailchimp（免费至2000联系人）
  - [ ] ConvertKit（适合创作者）
  - [ ] Brevo（原Sendinblue，性价比高）

- [ ] 注册账号并获取表单嵌入代码
- [ ] 更新以下文件中的表单 action URL：
  - [ ] `/src/components/Footer.tsx`（页脚订阅）
  - [ ] `/src/app/blog/page.tsx`（博客页订阅）
  - [ ] `/src/app/contact/page.tsx`（联系表单）

**Mailchimp 示例：**
```html
<form 
  action="https://yourname.us1.list-manage.com/subscribe/post?u=XXXXX&id=YYYYY" 
  method="post" 
  target="_blank"
>
  <!-- 表单字段 -->
</form>
```

### 8. Favicon 和 Logo
- [ ] 设计或生成 favicon（建议使用 10Best Reviews 的 "10" logo）
- [ ] 创建以下尺寸：
  - 16x16px
  - 32x32px
  - 180x180px（Apple Touch Icon）
  
- [ ] 放入 `/public/` 目录
- [ ] 在 `/src/app/layout.tsx` 中添加：

```typescript
export const metadata: Metadata = {
  title: "10Best Reviews",
  description: "...",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};
```

### 9. Robots.txt
- [ ] 创建文件 `/public/robots.txt`：

```txt
User-agent: *
Allow: /

Sitemap: https://www.yourdomain.com/sitemap.xml
```

### 10. Sitemap.xml
- [ ] 安装 sitemap 生成包：

```bash
npm install next-sitemap
```

- [ ] 创建 `next-sitemap.config.js`：

```javascript
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.yourdomain.com',
  generateRobotsTxt: true,
  exclude: ['/products/*'], // 如果有动态路由需要特殊处理
};
```

- [ ] 在 `package.json` 中添加脚本：

```json
{
  "scripts": {
    "postbuild": "next-sitemap"
  }
}
```

---

## 🟢 可选优化（Nice to Have）

### 11. 社交媒体整合
- [ ] 创建品牌社交账号：
  - [ ] Pinterest（强烈推荐，适合生活方式产品）
  - [ ] Instagram
  - [ ] Facebook Page
  - [ ] Twitter/X

- [ ] 在 `/src/components/Footer.tsx` 中更新社交链接
- [ ] 添加分享按钮到产品详情页

### 12. 性能优化
- [ ] 启用图片懒加载（Next.js Image 默认支持）
- [ ] 压缩图片（使用 TinyPNG 或 Squoosh）
- [ ] 启用 Gzip/Brotli 压缩（Vercel/Bolt 默认启用）
- [ ] 使用 CDN（Vercel Edge Network 已包含）

### 13. A/B 测试设置
- [ ] 考虑使用 Vercel Edge Config 进行简单的 A/B 测试
- [ ] 测试不同的 CTA 文案
- [ ] 测试不同的产品排序方式

### 14. 评论系统集成
- [ ] 选择评论系统：
  - [ ] Disqus（免费，易用）
  - [ ] Commento（隐私友好）
  - [ ] Giscus（基于 GitHub Discussions）

- [ ] 集成到产品详情页

### 15. Cookie Consent Banner
- [ ] 如果需要 GDPR 合规，添加 Cookie 同意横幅
- [ ] 推荐使用：
  - [ ] Cookiebot
  - [ ] OneTrust
  - [ ] Osano

---

## 🚀 部署步骤

### Bolt.new 部署

1. **推送代码到 GitHub**
   ```bash
   cd /Users/jase/cTrader/10best-reviews
   
   git init
   git add .
   git commit -m "Initial commit: 10Best Reviews MVP - Ready for production"
   
   # 创建新仓库后
   git remote add origin https://github.com/yourusername/10best-reviews.git
   git push -u origin main
   ```

2. **在 Bolt.new 上部署**
   - [ ] 访问 https://bolt.new
   - [ ] 点击 "Import from GitHub"
   - [ ] 授权访问您的 GitHub 账号
   - [ ] 选择 `10best-reviews` 仓库
   - [ ] 等待自动构建（约2-3分钟）
   - [ ] 获取部署 URL（例如：https://abc123.bolt.host）

3. **连接自定义域名**
   - [ ] 购买域名（如果还没有）：
     - Namecheap
     - GoDaddy
     - Cloudflare Registrar
     
   - [ ] 在 Bolt 控制面板中：
     - [ ] 进入 "Settings" → "Domains"
     - [ ] 点击 "Add Domain"
     - [ ] 输入您的域名（例如：www.10bestreviews.com）
     
   - [ ] 配置 DNS（在域名注册商处）：
     - **A 记录**（根域名）：
       ```
       Type: A
       Name: @
       Value: [Bolt 提供的 IP 地址]
       TTL: Auto
       ```
     
     - **CNAME 记录**（www 子域名）：
       ```
       Type: CNAME
       Name: www
       Value: [Bolt 提供的 CNAME 值]
       TTL: Auto
       ```
   
   - [ ] 等待 DNS 传播（通常2-24小时，最长48小时）
   - [ ] 在 Bolt 中启用 SSL 证书（自动）

4. **验证部署**
   - [ ] 访问您的域名
   - [ ] 测试所有页面是否正常加载
   - [ ] 测试所有 affiliate 链接
   - [ ] 测试联系表单
   - [ ] 在手机上测试响应式设计
   - [ ] 使用 Google PageSpeed Insights 测试性能

---

## ✅ 最终检查清单

部署完成后，运行以下测试：

### 功能测试
- [ ] 首页加载正常
- [ ] 所有导航链接工作正常
- [ ] 15个产品卡片都能点击
- [ ] 产品详情页动态路由工作
- [ ] About/Contact/Blog 页面正常
- [ ] 法律条款页面可访问
- [ ] 邮件订阅表单可以提交
- [ ] 联系表单可以提交

### 兼容性测试
- [ ] Chrome 浏览器
- [ ] Firefox 浏览器
- [ ] Safari 浏览器
- [ ] Edge 浏览器
- [ ] iPhone/iPad（iOS Safari）
- [ ] Android 手机（Chrome）

### SEO 测试
- [ ] 使用 Google Search Console 提交站点
- [ ] 提交 sitemap.xml
- [ ] 检查 robots.txt 是否正确
- [ ] 测试结构化数据（https://search.google.com/structured-data/testing-tool）
- [ ] 验证 lhverifycode 在 LinkHaitao 后台显示成功

### 性能测试
- [ ] Google PageSpeed Insights 评分 > 80
- [ ] Lighthouse 性能评分 > 80
- [ ] 首屏加载时间 < 2秒
- [ ] 完全加载时间 < 3秒

### 安全测试
- [ ] HTTPS 正常工作
- [ ] 没有混合内容警告
- [ ] 表单有基本的防垃圾邮件措施

---

## 📊 上线后监控

### 第1周
- [ ] 每天检查 Google Analytics 数据
- [ ] 监控 affiliate 链接点击率
- [ ] 收集用户反馈
- [ ] 修复发现的 bug

### 第1个月
- [ ] 分析流量来源
- [ ] 识别高转化产品
- [ ] 优化低表现页面
- [ ] 发布新的评测内容（至少4篇）

### 持续优化
- [ ] 每周发布2-3篇新内容
- [ ] 每月审查和优化 SEO
- [ ] 每季度更新过时信息
- [ ] 持续建设反向链接

---

## 🎯 成功指标

设定以下 KPI 来衡量进展：

| 指标 | 目标（3个月） | 当前 |
|-----|--------------|------|
| 月独立访客 | 5,000+ | 0 |
| 页面浏览量 | 15,000+ | 0 |
| 平均停留时间 | > 2分钟 | - |
| 跳出率 | < 60% | - |
| Affiliate 点击率 | > 3% | - |
| 转化率 | > 2% | - |
| 月收入 | $100+ | $0 |

---

##  遇到问题？

### 常见部署问题

**Q: Bolt 部署失败，显示 "Build Error"**
- 检查 `package.json` 是否正确
- 确保 Node 版本兼容（需要 18+）
- 查看 Bolt 日志中的具体错误信息
- 尝试在本地运行 `npm run build` 看是否有错误

**Q: 域名解析后无法访问**
- 检查 DNS 记录是否正确
- 使用 https://dnschecker.org/ 验证全球 DNS 传播
- 清除本地 DNS 缓存
- 等待最多48小时

**Q: Affiliate 链接不追踪佣金**
- 确认链接中包含正确的 affiliate ID/tag
- 测试链接是否能正确跳转
- 联系 affiliate 网络客服
- 检查是否有 cookie 阻止扩展

**Q: 图片不显示**
- 检查图片路径是否正确
- 确认图片已上传到 `/public/images/`
- 检查文件名大小写是否匹配
- 清除浏览器缓存

---

## 📞 获取帮助

- **项目文档**: 查看 README.md 和 QUICKSTART.md
- **Next.js 支持**: https://nextjs.org/docs
- **Bolt.new 支持**: https://bolt.new/docs
- **Tailwind CSS**: https://tailwindcss.com/docs

---

**祝您部署顺利！如有问题，随时参考本文档。** 🚀

*最后更新：2026年6月16日*
