# Quick Start Guide - 10Best Reviews

##  快速开始（5分钟部署）

### 方法一：使用 Bolt.new（推荐，最简单）

1. **访问 Bolt.new**
   - 打开 [https://bolt.new](https://bolt.new)

2. **导入项目**
   - 点击 "Import from GitHub"
   - 选择或创建您的 GitHub 仓库
   - 将本项目代码推送到该仓库

3. **自动部署**
   - Bolt 会自动检测 Next.js 项目
   - 等待构建完成（约2-3分钟）
   - 获得您的在线网站 URL

4. **连接自定义域名**（可选）
   - 在 Bolt 控制面板中添加您的域名
   - 按照 DNS 配置说明更新域名解析

---

### 方法二：本地开发后部署

#### 步骤 1：安装 Node.js

如果您的系统还没有 Node.js：

**macOS:**
```bash
# 使用 Homebrew（推荐）
brew install node

# 或从官网下载
# 访问 https://nodejs.org/ 下载 LTS 版本
```

**Windows:**
- 访问 https://nodejs.org/
- 下载并安装 LTS 版本

**Linux:**
```bash
# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

验证安装：
```bash
node --version  # 应显示 v18.x.x 或更高
npm --version   # 应显示 9.x.x 或更高
```

#### 步骤 2：安装依赖

```bash
cd /Users/jase/cTrader/10best-reviews
npm install
```

这将安装所有必要的包（Next.js, React, Tailwind CSS等），大约需要1-2分钟。

#### 步骤 3：启动开发服务器

```bash
npm run dev
```

服务器将在 http://localhost:3000 启动

#### 步骤 4：在浏览器中查看

打开浏览器访问：**http://localhost:3000**

您应该看到完整的网站首页，包括：
- ✅ Header 导航栏
- ✅ Hero 区域
- ✅ 15个产品评测卡片
- ✅ Footer 页脚

---

## 📝 下一步操作清单

### 立即可做（优先级高）

1. **替换 Affiliate 链接**
   - 打开 `/src/components/BrandReviews.tsx`
   - 找到 `affiliateLink: "#"` 
   - 替换为您的真实推广链接
   
   示例：
   ```typescript
   affiliateLink: "https://amzn.to/your-affiliate-id?tag=your-tag-20"
   ```

2. **添加产品图片**
   - 准备产品图片（建议尺寸：800x600px）
   - 放入 `/public/images/` 文件夹
   - 更新组件中的图片路径

3. **更新联系信息**
   - 编辑 `/src/app/contact/page.tsx`
   - 修改邮箱地址和联系方式
   - 更新法律页面中的公司信息

4. **配置 SEO**
   - 编辑 `/src/app/layout.tsx`
   - 更新 `metadata` 对象中的标题和描述
   - 确保 `<meta name="lhverifycode">` 已正确添加 ✅

### 中期优化（1-2周内）

5. **设置 Supabase 数据库**
   ```sql
   -- 创建 products 表
   CREATE TABLE products (
     id SERIAL PRIMARY KEY,
     title VARCHAR(255),
     category VARCHAR(100),
     description TEXT,
     price_range VARCHAR(50),
     rating DECIMAL(2,1),
     reviews_count INTEGER,
     affiliate_link TEXT,
     created_at TIMESTAMP DEFAULT NOW()
   );
   ```

6. **集成 Google Analytics**
   - 注册 Google Analytics 账号
   - 获取跟踪 ID
   - 添加到 `/src/app/layout.tsx`

7. **设置邮件订阅**
   - 注册 Mailchimp 或 ConvertKit
   - 替换表单 action URL
   - 测试订阅功能

### 长期规划（1个月内）

8. **内容扩展**
   - 每周发布2-3篇新评测
   - 建立内容日历
   - 优化现有内容的 SEO

9. **社交媒体整合**
   - 创建品牌社交账号
   - 添加分享按钮
   - 定期发布推广内容

10. **性能优化**
    - 启用图片懒加载
    - 实现 CDN
    - 压缩资源文件

---

## 🔧 常见问题排查

### 问题：npm install 失败

**解决方案：**
```bash
# 清除 npm 缓存
npm cache clean --force

# 删除 node_modules 和 package-lock.json
rm -rf node_modules package-lock.json

# 重新安装
npm install
```

### 问题：端口 3000 已被占用

**解决方案：**
```bash
# 查找占用端口的进程
lsof -i :3000

# 杀死进程（替换 PID）
kill -9 <PID>

# 或使用其他端口
npm run dev -- -p 3001
```

### 问题：样式没有加载

**解决方案：**
1. 确保 Tailwind CSS 已正确安装
2. 检查 `tailwind.config.ts` 配置
3. 重启开发服务器

### 问题：Bolt 部署失败

**常见原因：**
- 缺少 `.bolt/config.json` ✅（已包含）
- Node 版本不兼容（需要 18+）
- 依赖冲突

**解决方案：**
- 检查 Bolt 日志错误信息
- 确保 `package.json` 正确
- 尝试重新推送代码

---

## 📊 网站结构总览

```
首页 (/)
├── Header（导航栏）
│   ├── Logo
│   ├── About Us → /about
│   ├── Contact Us → /contact
│   └── Blog → /blog
├── Hero（英雄区）
│   ├── 主标题
│   ├── 副标题
│   ├── CTA 按钮
│   └── 信任指标
├── BrandReviews（产品网格）
│   └── 15个产品卡片
│       ├── 产品图片
│       ├── 标题
│       ├── 描述
│       ├── 评分
│       ├── 价格
│       └── "Read Full Review" 按钮 → /products/[id]
└── Footer（页脚）
    ├── 品牌信息
    ├── 快速链接
    ├── 分类列表
    ├── 邮件订阅
    └── 法律条款
        ├── Privacy Policy → /privacy-policy
        ├── Terms of Service → /terms-of-service
        └── Affiliate Disclosure → /affiliate-disclosure
```

---

##  盈利提示

### 如何最大化联盟收入？

1. **高佣金产品优先**
   - 电子产品：4-8%
   - 家居用品：3-10%
   - 时尚配饰：5-15%

2. **优化转化率**
   - 使用真实的用户评价
   - 添加对比表格
   - 突出显示优惠和折扣

3. **SEO 流量策略**
   - 针对长尾关键词优化
   - 例如："best air fryer under $100 2026"
   - 创建比较文章："Air Fryer A vs B"

4. **邮件营销**
   - 收集访客邮箱
   - 发送每周最佳优惠
   - 季节性促销提醒

5. **多平台推广**
   - Pinterest（适合生活方式产品）
   - Facebook Groups
   - Reddit 相关板块

---

## 🎯 成功指标追踪

设置以下 KPI 来衡量进展：

- **月访问量**：目标 10,000+（3个月内）
- **点击率（CTR）**：目标 3-5%
- **转化率**：目标 2-4%
- **平均订单价值**：$50-100
- **月收入**：根据流量和转化率变化

---

## 📞 需要帮助？

如果您在部署或使用过程中遇到问题：

1. 检查 [README.md](README.md) 详细文档
2. 查看 Next.js 官方文档：https://nextjs.org/docs
3. 联系支持：contact@10bestreviews.com

---

**祝您部署顺利！🎉**

*本指南最后更新：2026年6月*
