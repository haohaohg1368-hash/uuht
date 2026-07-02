# Supabase 数据库设置指南

## 🎯 目标
在 Supabase 中创建联盟链接追踪系统所需的数据库表。

## 📋 执行步骤

### 1. 访问 Supabase Dashboard
打开浏览器访问：
```
https://supabase.com/dashboard/project/hsorcpkiwqlreqwbrtbj
```

### 2. 进入 SQL Editor
- 在左侧菜单找到并点击 **"SQL Editor"** (图标像代码 `</>`)
- 或者点击右上角的 **"+ New query"** 按钮

### 3. 复制 SQL 脚本内容

**方式一：使用文件**
- 打开项目中的文件：`scripts/setup-supabase.sql`
- 全选内容 (Ctrl+A / Cmd+A)
- 复制 (Ctrl+C / Cmd+C)

**方式二：直接复制以下内容**

```sql
-- ============================================
-- UUHT Affiliate Link Tracking System
-- Supabase Database Setup Script
-- ============================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS affiliate_links (
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
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS link_clicks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  link_id UUID REFERENCES affiliate_links(id) ON DELETE CASCADE,
  click_id TEXT,
  ip_address INET,
  user_agent TEXT,
  referrer TEXT,
  country TEXT,
  device_type TEXT,
  clicked_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_affiliate_links_slug ON affiliate_links(slug);
CREATE INDEX IF NOT EXISTS idx_affiliate_links_active ON affiliate_links(is_active);
CREATE INDEX IF NOT EXISTS idx_affiliate_links_category ON affiliate_links(category);
CREATE INDEX IF NOT EXISTS idx_link_clicks_link_id ON link_clicks(link_id);
CREATE INDEX IF NOT EXISTS idx_link_clicks_clicked_at ON link_clicks(clicked_at DESC);
CREATE INDEX IF NOT EXISTS idx_link_clicks_click_id ON link_clicks(click_id);

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_affiliate_links_updated_at ON affiliate_links;
CREATE TRIGGER update_affiliate_links_updated_at
BEFORE UPDATE ON affiliate_links
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

ALTER TABLE affiliate_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE link_clicks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to active links"
ON affiliate_links FOR SELECT
USING (is_active = true);

CREATE POLICY "Allow public insert clicks"
ON link_clicks FOR INSERT
WITH CHECK (true);

INSERT INTO affiliate_links (slug, title, destination_url, merchant, category, notes)
VALUES 
  ('air-fryer', 'Best Air Fryer 2026', 'https://www.amazon.com/dp/B08N5WRWNW?tag=yourtag-20', 'Amazon', 'Kitchen Appliances', 'Top rated air fryer'),
  ('robot-vacuum', 'Robot Vacuum for Pet Hair', 'https://www.amazon.com/dp/B09KLQXX8V?tag=yourtag-20', 'Amazon', 'Home Cleaning', 'Best for pet owners')
ON CONFLICT (slug) DO NOTHING;
```

### 4. 粘贴并执行
- 将复制的 SQL 代码粘贴到 SQL Editor 中
- 点击右下角的 **"RUN"** 按钮（或按 Ctrl+Enter / Cmd+Enter）
- 等待执行完成

### 5. 确认成功
- 看到底部显示 **"Success. No rows returned"** 或类似成功消息
- 如果有错误，请检查是否有红色错误提示

### 6. 验证表已创建
- 点击左侧菜单的 **"Table Editor"**
- 确认看到两个新表：
  - ✅ `affiliate_links` - 存储联盟链接
  - ✅ `link_clicks` - 记录点击数据

## ✅ 完成标志

当您看到以下内容时，表示数据库设置成功：
1. SQL 执行返回 "Success"
2. Table Editor 中看到 `affiliate_links` 和 `link_clicks` 两个表
3. `affiliate_links` 表中有 2 条示例数据

## 🚀 下一步

数据库设置完成后：
1. 确保 Vercel 环境变量已配置（见上一步骤）
2. 等待 Vercel 自动重新部署完成
3. 访问 https://uuht.shop/admin/links 开始使用系统

## ❓ 常见问题

**Q: 执行时报错怎么办？**
A: 检查错误信息，通常是权限问题。确保您有该项目的编辑权限。

**Q: 表已经存在怎么办？**
A: SQL 脚本使用了 `IF NOT EXISTS`，可以安全地重复执行。

**Q: 如何删除重建？**
A: 在 Table Editor 中右键表名选择 "Delete table"，然后重新运行脚本。
