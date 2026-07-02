-- ============================================
-- UUHT Affiliate Link Tracking System
-- Supabase Database Setup Script
-- ============================================
-- 
-- 使用说明：
-- 1. 登录 https://supabase.com
-- 2. 创建新项目（或选择现有项目）
-- 3. 进入 SQL Editor
-- 4. 复制粘贴下面的所有SQL代码
-- 5. 点击 "RUN" 执行
--
-- ============================================

-- 启用 UUID 扩展（如果尚未启用）
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- 1. 创建联盟链接表
-- ============================================
CREATE TABLE IF NOT EXISTS affiliate_links (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL, -- 短链接后缀，如 "air-fryer"
  title TEXT NOT NULL, -- 显示名称
  destination_url TEXT NOT NULL, -- 真实联盟链接
  merchant TEXT, -- 商家名称
  category TEXT, -- 分类
  clicks INT DEFAULT 0, -- 点击数
  last_clicked_at TIMESTAMP, -- 最后点击时间
  is_active BOOLEAN DEFAULT true, -- 是否激活
  notes TEXT, -- 备注
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

COMMENT ON TABLE affiliate_links IS 'Stores affiliate tracking links';
COMMENT ON COLUMN affiliate_links.slug IS 'Short link suffix (e.g., air-fryer)';
COMMENT ON COLUMN affiliate_links.destination_url IS 'Full affiliate URL to redirect to';

-- ============================================
-- 2. 创建点击记录表
-- ============================================
CREATE TABLE IF NOT EXISTS link_clicks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  link_id UUID REFERENCES affiliate_links(id) ON DELETE CASCADE,
  click_id TEXT, -- 唯一点击ID（用于转化追踪）
  ip_address INET,
  user_agent TEXT,
  referrer TEXT, -- 来源页面
  country TEXT, -- 国家（可选，需要IP地理位置服务）
  device_type TEXT, -- desktop/mobile/tablet
  clicked_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

COMMENT ON TABLE link_clicks IS 'Records all link clicks for analytics';
COMMENT ON COLUMN link_clicks.click_id IS 'Unique ID for conversion tracking';

-- ============================================
-- 3. 创建索引优化查询性能
-- ============================================
CREATE INDEX IF NOT EXISTS idx_affiliate_links_slug ON affiliate_links(slug);
CREATE INDEX IF NOT EXISTS idx_affiliate_links_active ON affiliate_links(is_active);
CREATE INDEX IF NOT EXISTS idx_affiliate_links_category ON affiliate_links(category);
CREATE INDEX IF NOT EXISTS idx_link_clicks_link_id ON link_clicks(link_id);
CREATE INDEX IF NOT EXISTS idx_link_clicks_clicked_at ON link_clicks(clicked_at DESC);
CREATE INDEX IF NOT EXISTS idx_link_clicks_click_id ON link_clicks(click_id);

-- ============================================
-- 4. 创建自动更新时间戳函数
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- 为 affiliate_links 表添加触发器
DROP TRIGGER IF EXISTS update_affiliate_links_updated_at ON affiliate_links;
CREATE TRIGGER update_affiliate_links_updated_at
BEFORE UPDATE ON affiliate_links
FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- 5. 启用行级安全（RLS）- 保护数据
-- ============================================
ALTER TABLE affiliate_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE link_clicks ENABLE ROW LEVEL SECURITY;

-- 创建策略：允许所有人读取（公开访问短链接）
CREATE POLICY "Allow public read access to active links"
ON affiliate_links FOR SELECT
USING (is_active = true);

-- 创建策略：允许插入点击记录（公开）
CREATE POLICY "Allow public insert clicks"
ON link_clicks FOR INSERT
WITH CHECK (true);

-- 注意：在实际生产中，您应该：
-- 1. 创建 authenticated role
-- 2. 只允许认证用户管理链接
-- 3. 使用 Supabase Auth 进行身份验证

-- ============================================
-- 6. 插入示例数据（可选）
-- ============================================
INSERT INTO affiliate_links (slug, title, destination_url, merchant, category, notes)
VALUES 
  ('air-fryer', 'Best Air Fryer 2026', 'https://www.amazon.com/dp/B08N5WRWNW?tag=yourtag-20', 'Amazon', 'Kitchen Appliances', 'Top rated air fryer'),
  ('robot-vacuum', 'Robot Vacuum for Pet Hair', 'https://www.amazon.com/dp/B09KLQXX8V?tag=yourtag-20', 'Amazon', 'Home Cleaning', 'Best for pet owners')
ON CONFLICT (slug) DO NOTHING;

-- ============================================
-- 7. 验证安装
-- ============================================
-- 运行以下查询验证表是否创建成功：
-- SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';

-- 查看示例链接：
-- SELECT * FROM affiliate_links LIMIT 5;

-- ============================================
-- 安装完成！
-- ============================================
-- 
-- 下一步：
-- 1. 获取 Supabase API 密钥
-- 2. 在项目根目录创建 .env.local 文件
-- 3. 添加环境变量
-- 4. 部署到 Vercel
--
-- ============================================
