# 联盟链接追踪系统 - 使用指南

## 📋 系统概述

这是一个自建的联盟链接追踪和管理系统，帮助您：
- ✅ 创建美观的短链接（如 `uuht.shop/go/air-fryer`）
- ✅ 追踪每次点击
- ✅ 自动跳转到真实联盟链接
- ✅ 查看数据统计和分析

**成本：** $0/月（使用 Vercel + Supabase 免费层）

---

## 🚀 快速开始

### 步骤1: 设置 Supabase 数据库

1. **访问 [Supabase](https://supabase.com) 并创建项目**
   - 使用 GitHub 账号登录
   - 创建新项目（选择免费层）

2. **获取 API 密钥**
   - 进入 Settings → API
   - 复制 `Project URL` 和 `anon public key`

3. **创建环境变量文件**
   
   在项目根目录创建 `.env.local`：
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **执行 SQL 脚本**
   
   在 Supabase Dashboard → SQL Editor 中运行以下SQL：

   ```sql
   -- 启用 UUID 扩展
   CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

   -- 联盟链接表
   CREATE TABLE affiliate_links (
     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
     slug TEXT UNIQUE NOT NULL,
     title TEXT NOT NULL,
     destination_url TEXT NOT NULL,
     merchant TEXT,
     category TEXT,
     clicks INT DEFAULT 0,
     last_clicked_at TIMESTAMP,
     is_active BOOLEAN DEFAULT true,
     notes TEXT,
     created_at TIMESTAMP DEFAULT NOW(),
     updated_at TIMESTAMP DEFAULT NOW()
   );

   -- 点击记录表
   CREATE TABLE link_clicks (
     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
     link_id UUID REFERENCES affiliate_links(id) ON DELETE CASCADE,
     click_id TEXT,
     ip_address INET,
     user_agent TEXT,
     referrer TEXT,
     country TEXT,
     device_type TEXT,
     clicked_at TIMESTAMP DEFAULT NOW()
   );

   -- 创建索引
   CREATE INDEX idx_affiliate_links_slug ON affiliate_links(slug);
   CREATE INDEX idx_affiliate_links_active ON affiliate_links(is_active);
   CREATE INDEX idx_link_clicks_link_id ON link_clicks(link_id);
   CREATE INDEX idx_link_clicks_clicked_at ON link_clicks(clicked_at);

   -- 自动更新时间戳
   CREATE OR REPLACE FUNCTION update_updated_at_column()
   RETURNS TRIGGER AS $$
   BEGIN
     NEW.updated_at = NOW();
     RETURN NEW;
   END;
   $$ language 'plpgsql';

   CREATE TRIGGER update_affiliate_links_updated_at
   BEFORE UPDATE ON affiliate_links
   FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
   ```

### 步骤2: 安装依赖

```bash
cd /Users/jase/cTrader/10best-reviews
npm install @supabase/supabase-js
```

### 步骤3: 部署到 Vercel

```bash
git add -A
git commit -m "Add affiliate link tracking system"
git push
```

Vercel 会自动检测并部署。

---

## 📖 使用方法

### 1. 添加新链接

访问：`https://uuht.shop/admin/links`

1. 点击 **"+ 添加新链接"** 按钮
2. 填写表单：
   - **短链接后缀**：例如 `air-fryer`（最终链接：`uuht.shop/go/air-fryer`）
   - **标题**：例如 "Best Air Fryer 2026"
   - **目标链接**：您的 Amazon/ShareASale 联盟链接
   - **商家**：例如 "Amazon"
   - **分类**：例如 "Kitchen Appliances"
3. 点击 **"创建"**

### 2. 使用短链接

将生成的短链接用于：
- Google Ads 广告
- 博客文章
- 社交媒体
- 邮件营销

**示例：**
```
原始联盟链接：
https://www.amazon.com/dp/B08N5WRWNW?tag=youraffiliateid-20

短链接：
https://uuht.shop/go/air-fryer
```

用户点击短链接后：
1. 系统记录点击
2. 自动重定向到 Amazon
3. 您可以在后台查看统计数据

### 3. 查看统计数据

访问：`https://uuht.shop/admin/stats`

您可以看到：
- **总链接数**：创建的链接总数
- **总点击数**：所有链接的累计点击
- **今日点击**：今天的点击数
- **Top 5 热门链接**：表现最好的链接
- **最近7天趋势**：点击量变化图表

---

## 🔧 API 端点

### 获取所有链接
```
GET /api/links
```

### 创建新链接
```
POST /api/links
Body: {
  "slug": "air-fryer",
  "title": "Best Air Fryer",
  "destination_url": "https://...",
  "merchant": "Amazon",
  "category": "Kitchen"
}
```

### 更新链接
```
PATCH /api/links
Body: {
  "id": "uuid",
  "title": "Updated Title"
}
```

### 删除链接
```
DELETE /api/links?id=uuid
```

### 获取统计数据
```
GET /api/stats
```

---

## 💡 最佳实践

### 1. 命名规范
```
✅ 好: /go/air-fryer, /go/robot-vacuum-pet-hair
❌ 差: /go/product1, /go/abc123
```

### 2. 分类管理
为每个链接设置分类，便于筛选和分析：
- Kitchen Appliances
- Home Cleaning
- Fitness & Wellness
- Bedroom Essentials
- etc.

### 3. 定期清理
- 每月检查 inactive 链接
- 删除过期或无效的链接
- 更新失效的联盟链接

### 4. A/B 测试
为同一产品创建多个链接，测试哪个表现更好：
```
/go/air-fryer-amazon
/go/air-fryer-walmart
/go/air-fryer-bestbuy
```

---

## 🎯 与 Google Ads 集成

### 在广告中使用短链接

1. **创建 Google Ads 广告**
   - 最终到达网址：`https://uuht.shop/go/air-fryer`

2. **优势**
   - ✅ 链接更美观专业
   - ✅ 可以更换目标链接而不影响广告
   - ✅ 追踪点击数据
   - ✅ 统一管理所有推广链接

3. **注意事项**
   - 确保落地页（UUHT 网站）有相关内容
   - 遵守 Google Ads 政策
   - 使用 UTM 参数追踪来源

---

## 📊 数据分析

### 关键指标

1. **点击率 (CTR)**
   - 公式：点击数 / 展示数
   - 目标：> 2%

2. **转化率**
   - 公式：转化数 / 点击数
   - 需要与联盟网络数据对比

3. **ROI**
   - 公式：(佣金收入 - 广告成本) / 广告成本
   - 目标：> 100%

### 导出报告

目前数据存储在 Supabase，您可以：
1. 直接在 Supabase Dashboard 查看
2. 使用 Supabase API 导出数据
3. 连接到 Google Data Studio 做可视化

---

## ⚠️ 常见问题

### Q: 链接跳转慢怎么办？
A: Vercel Edge Network 会自动缓存，通常 < 100ms

### Q: 如何追踪转化？
A: 需要在联盟网络后台查看，本系统只追踪点击

### Q: 可以批量导入链接吗？
A: 目前不支持，后续版本会添加 CSV 导入功能

### Q: 数据安全吗？
A: 是的，使用 Supabase RLS（行级安全）保护数据

---

## 🚀 未来升级计划

- [ ] CSV 批量导入/导出
- [ ] UTM 参数自动生成
- [ ] QR 码生成
- [ ] 链接过期自动提醒
- [ ] A/B 测试框架
- [ ] 转化追踪 Webhook
- [ ] 移动端 App

---

##  技术支持

如有问题，请：
1. 检查 Supabase 日志
2. 查看 Vercel Function Logs
3. 联系开发者

---

**祝您推广顺利！💰**
