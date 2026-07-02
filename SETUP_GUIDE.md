# UUHT 联盟链接追踪系统 - 快速设置指南

## 🎯 目标

在 **5分钟内** 完成系统设置，开始使用自己的联盟链接追踪系统！

---

## 📋 前置要求

- ✅ UUHT 项目已在 Vercel 部署
- ✅ GitHub 账号
- ⏳ Supabase 账号（免费，[立即注册](https://supabase.com)）

---

## 🚀 5分钟快速设置

### 步骤1: 创建 Supabase 项目（2分钟）

1. **访问 [Supabase.com](https://supabase.com)**
   - 点击 "Start your project"
   - 使用 GitHub 账号登录

2. **创建新项目**
   - 点击 "New Project"
   - 填写项目信息：
     - Name: `uuht-affiliate-tracking`
     - Database Password: （生成一个强密码并保存）
     - Region: 选择离您最近的（推荐 US East）
   - 点击 "Create new project"

3. **等待项目初始化**（约1-2分钟）

---

### 步骤2: 获取 API 密钥（1分钟）

1. **进入项目 Dashboard**
   - 点击刚创建的项目

2. **获取 API 密钥**
   - 左侧菜单点击 **Settings** (齿轮图标)
   - 点击 **API**
   - 复制以下两个值：
     ```
     Project URL: https://xxxxx.supabase.co
     anon public key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
     ```

---

### 步骤3: 配置环境变量（1分钟）

**方法A: 通过 Vercel Dashboard（推荐）**

1. 访问 [Vercel Dashboard](https://vercel.com/dashboard)
2. 选择 `uuht` 项目
3. 点击 **Settings** → **Environment Variables**
4. 添加以下变量：
   ```
   NEXT_PUBLIC_SUPABASE_URL = https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY = your-anon-key-here
   ```
5. 点击 **Save**

**方法B: 本地创建 .env.local 文件**

在项目根目录创建 `.env.local` 文件：

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

> 💡 **提示：** 可以复制 `.env.local.example` 然后修改

---

### 步骤4: 设置数据库（1分钟）

1. **回到 Supabase Dashboard**
   - 点击左侧菜单 **SQL Editor** (文档图标)

2. **运行 SQL 脚本**
   - 打开文件：`scripts/setup-supabase.sql`
   - 复制全部内容
   - 粘贴到 SQL Editor
   - 点击 **RUN** (或按 Cmd/Ctrl + Enter)

3. **验证安装**
   - 应该看到 "Success. No rows returned"
   - 点击左侧 **Table Editor** 确认表已创建：
     - ✅ affiliate_links
     - ✅ link_clicks

---

### 步骤5: 部署代码（自动）

我已经帮您准备好了所有代码！只需推送即可：

```bash
cd /Users/jase/cTrader/10best-reviews

# 方法1: 使用自动化脚本（推荐）
chmod +x scripts/deploy.sh
./scripts/deploy.sh

# 方法2: 手动执行
git add -A
git commit -m "Add affiliate link tracking system"
git push
```

**Vercel 会自动检测并开始部署**（约1-2分钟）

---

## ✅ 验证安装

### 1. 检查 Vercel 部署状态

访问：https://vercel.com/haohaohg1368-hash/uuht/deployments

确认最新部署状态为 **"Ready"**（绿色对勾）

### 2. 测试管理后台

访问以下页面：

**链接管理：**
```
https://uuht.shop/admin/links
```
应该能看到管理界面（可能显示"暂无链接"）

**数据统计：**
```
https://uuht.shop/admin/stats
```
应该能看到统计看板

### 3. 创建第一个测试链接

1. 访问 `/admin/links`
2. 点击 **"+ 添加新链接"**
3. 填写测试数据：
   ```
   短链接后缀: test-link
   标题: Test Link
   目标链接: https://www.google.com
   商家: Test
   分类: Test Category
   ```
4. 点击 **"创建"**

### 4. 测试短链接跳转

访问：
```
https://uuht.shop/go/test-link
```

应该自动跳转到 Google.com

### 5. 查看点击统计

回到 `/admin/stats`，应该能看到：
- 总链接数：1
- 总点击数：1（刚才的测试点击）

---

## 🎉 恭喜！设置完成！

现在您可以：
- ✅ 创建美观的短链接
- ✅ 追踪每次点击
- ✅ 查看数据统计
- ✅ 管理所有联盟链接

---

## 📖 使用教程

### 添加真实的联盟链接

1. **获取 Amazon 联盟链接**
   - 登录 [Amazon Associates](https://affiliate-program.amazon.com/)
   - 搜索产品
   - 点击 "Get Link" → "Text"
   - 复制生成的链接（类似：`https://www.amazon.com/dp/xxx?tag=yourtag-20`）

2. **在系统中创建链接**
   - 访问 `/admin/links`
   - 点击 **"+ 添加新链接"**
   - 填写：
     ```
     短链接后缀: air-fryer-best-seller
     标题: Best Air Fryer 2026 - Top Rated
     目标链接: （粘贴 Amazon 联盟链接）
     商家: Amazon
     分类: Kitchen Appliances
     ```
   - 点击 **"创建"**

3. **使用短链接**
   - 复制链接：`https://uuht.shop/go/air-fryer-best-seller`
   - 用于 Google Ads、博客文章等

---

## 🔧 常见问题

### Q: 部署后访问 /admin/links 显示错误？
**A:** 检查以下几点：
1. Supabase 数据库是否正确设置（运行了 SQL 脚本）
2. 环境变量是否正确配置（URL 和 Key）
3. Vercel 部署是否成功（无错误）

### Q: 短链接跳转失败？
**A:** 
1. 检查链接是否存在且 is_active = true
2. 查看 Vercel Function Logs 是否有错误
3. 确认 slug 拼写正确

### Q: 如何批量导入链接？
**A:** 目前暂不支持，后续版本会添加 CSV 导入功能

### Q: 数据安全吗？
**A:** 
- ✅ 使用 Supabase RLS 保护
- ✅ 只有公开读取权限（点击追踪）
- ️ 建议后续添加身份验证保护管理后台

---

## 🚀 下一步优化

### 1. 添加身份验证（保护管理后台）
```bash
# 使用 Clerk 或 NextAuth.js
npm install @clerk/nextjs
```

### 2. 集成 Google Analytics
在管理后台添加 GA 数据

### 3. 添加邮件报告
每周自动发送统计报告

### 4. UTM 参数生成器
自动生成带 UTM 的追踪链接

---

## 📞 需要帮助？

如果遇到问题：

1. **检查日志**
   - Vercel: https://vercel.com/.../functions
   - Supabase: https://supabase.com/.../logs

2. **查看文档**
   - AFFILIATE_TRACKING_SYSTEM.md

3. **联系我**
   - 描述具体问题
   - 提供错误截图
   - 分享相关日志

---

## 💡 专业提示

1. **命名规范**
   - 使用描述性 slug：`/go/air-fryer-ninja-2026`
   - 避免：`/go/product1`

2. **分类管理**
   - 保持一致的分类名称
   - 便于筛选和分析

3. **定期清理**
   - 每月检查失效链接
   - 更新过期的联盟链接

4. **A/B 测试**
   - 为同一产品创建多个链接
   - 测试不同文案/平台的效果

---

**祝您推广顺利，收益满满！💰**
