-- 添加 landing_page_url 字段到 affiliate_links 表
-- 用于存储简化后的最终落地页 URL (不带联盟追踪参数)

ALTER TABLE affiliate_links 
ADD COLUMN IF NOT EXISTS landing_page_url TEXT;

COMMENT ON COLUMN affiliate_links.landing_page_url IS 'Clean landing page URL shown to users (without affiliate tracking parameters)';

-- 为现有数据设置默认值 (使用 destination_url 作为 landing_page_url)
UPDATE affiliate_links 
SET landing_page_url = destination_url 
WHERE landing_page_url IS NULL;

-- 创建索引优化查询
CREATE INDEX IF NOT EXISTS idx_affiliate_links_landing_page ON affiliate_links(landing_page_url);
