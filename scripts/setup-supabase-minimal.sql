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
