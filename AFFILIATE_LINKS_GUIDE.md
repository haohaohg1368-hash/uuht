# Affiliate Links 配置指南

本文档详细说明如何配置和管理您的联盟营销链接。

## 📋 快速开始

### 步骤 1：找到需要修改的文件

主要文件位置：`/src/components/BrandReviews.tsx`

在这个文件中，您会看到类似这样的代码：

```typescript
const products = [
  {
    id: 1,
    title: "Best Air Fryers 2026",
    category: "Kitchen Appliances",
    description: "Top-rated air fryers for healthy cooking...",
    price: "$89-$299",
    rating: 4.8,
    reviews: 2847,
    affiliateLink: "#",  // ← 这里需要替换
    seoContent: { ... }
  },
  // ... 其他14个产品
];
```

### 步骤 2：获取您的 Affiliate 链接

#### Amazon Associates（亚马逊联盟）

1. 登录 [Amazon Associates](https://affiliate-program.amazon.com/)
2. 搜索您要推广的产品
3. 点击 "Get Link" → "Text"
4. 复制生成的链接

**示例：**
```
https://www.amazon.com/dp/B08N5WRWNW?tag=your-tag-20&linkCode=ogi&th=1&psc=1
```

#### ShareASale

1. 登录 [ShareASale](https://www.shareasale.com/)
2. 进入 "Get Links" → "Merchant Search"
3. 选择商家，生成链接

**示例：**
```
https://shareasale.com/r.cfm?b=123456&u=789012&m=34567&urllink=product-page-url
```

#### CJ Affiliate（Commission Junction）

1. 登录 [CJ Affiliate](https://www.cj.com/)
2. 选择 advertiser
3. 生成 deep link

**示例：**
```
https://www.tkqlhce.com/click-123456-789012?url=https%3A%2F%2Fwww.retailer.com%2Fproduct
```

### 步骤 3：替换链接

在 `BrandReviews.tsx` 中，将每个产品的 `affiliateLink` 从 `"#"` 替换为您的真实链接：

```typescript
// ❌ 修改前
affiliateLink: "#"

// ✅ 修改后（Amazon 示例）
affiliateLink: "https://www.amazon.com/dp/B08N5WRWNW?tag=mytag-20"

// ✅ 修改后（ShareASale 示例）
affiliateLink: "https://shareasale.com/r.cfm?b=123456&u=789012&m=34567"
```

---

## 🎯 按产品分类的推荐 Affiliate 网络

### 1. Kitchen Appliances（厨房电器）

**推荐网络：**
- Amazon Associates（最全面）
- Walmart Affiliate Program
- Target Partners
- Best Buy Affiliate

**热门产品示例：**
- Air Fryers: Ninja, Cosori, Instant Pot
- Coffee Makers: Keurig, Nespresso, Breville
- Blenders: Vitamix, Ninja, Blendtec

### 2. Home Cleaning（家居清洁）

**推荐网络：**
- Amazon Associates
- Dyson Affiliate Program
- iRobot Affiliate（Roomba）
- SharkClean Affiliate

**热门产品：**
- Robot Vacuums: Roomba, Roborock, Eufy
- Steam Mops: Bissell, Shark, PurSteam
- Air Purifiers: Levoit, Coway, Dyson

### 3. Fitness & Wellness（健身与健康）

**推荐网络：**
- Amazon Associates
- Dick's Sporting Goods Affiliate
- REI Co-op Affiliate
- Brand-specific programs（Therabody, Hyperice）

**热门产品：**
- Massage Guns: Theragun, Hypervolt, Bob and Brad
- Yoga Mats: Lululemon, Manduka, Gaiam
- Running Shoes: Nike, Adidas, Brooks, ASICS

### 4. Fashion & Accessories（时尚配饰）

**推荐网络：**
- Amazon Fashion
- ShopStyle Collective
- RewardStyle/LTK
- Nordstrom Affiliate
- ASOS Affiliate

**热门品类：**
- Jewelry: Mejuri, Gorjana, BaubleBar
- Watches: MVMT, Daniel Wellington, Fossil
- Sneakers: Allbirds, Veja, Rothy's

### 5. Smart Home（智能家居）

**推荐网络：**
- Amazon Associates
- Best Buy Affiliate
- Samsung Affiliate
- Ring/Amazon Affiliate

**热门产品：**
- Security Cameras: Ring, Nest, Arlo
- Smart Speakers: Amazon Echo, Google Nest
- Smart Locks: August, Yale, Schlage

---

## 💡 最佳实践

### 1. 使用链接缩短和追踪

**工具推荐：**
- **Pretty Links**（WordPress 插件）
- **Bitly**（免费短链接）
- **Rebrandly**（品牌化短链接）
- **ThirstyAffiliates**（专业 affiliate 链接管理）

**好处：**
- 更美观的 URL
- 点击追踪和分析
- 易于更新（只需改一处）
- 防止链接劫持

**示例：**
```
原始链接：
https://www.amazon.com/dp/B08N5WRWNW?tag=mytag-20&ref=sr_1_1...

缩短后：
https://10bestreviews.com/go/air-fryer-ninja
```

### 2. 添加 UTM 参数进行追踪

即使 affiliate 链接已有追踪参数，您也可以添加 UTM 参数来监控网站流量：

```
https://www.amazon.com/dp/B08N5WRWNW?tag=mytag-20&utm_source=10bestreviews&utm_medium=website&utm_campaign=air-fryer-review
```

**UTM 参数说明：**
- `utm_source`: 流量来源（10bestreviews）
- `utm_medium`: 媒介（website, email, social）
- `utm_campaign`: 活动名称（产品名称或类别）
- `utm_content`: 内容区分（可选，用于 A/B 测试）

### 3. 定期检查和更新链接

**每月检查清单：**
- [ ] 测试所有 affiliate 链接是否有效
- [ ] 检查是否有断链（404错误）
- [ ] 确认产品价格和可用性
- [ ] 更新过时的产品信息
- [ ] 分析哪些链接转化率最高

**自动化工具：**
- **Broken Link Checker**（在线工具）
- **Screaming Frog SEO Spider**（桌面软件）
- **Google Search Console**（监控外部链接）

### 4. 遵守各平台的 Affiliate 协议

**Amazon Associates 重要规则：**
- ⚠️ 必须明确披露 affiliate 关系 ✅（已在 Affiliate Disclosure 页面完成）
- ⚠️ 不能在电子邮件中使用 affiliate 链接
- ⚠️ 不能离线使用链接（印刷品、PDF等）
- ⚠️ 不能缩短或隐藏 Amazon 域名（必须显示 amazon.com）
- ⚠️ 每180天至少产生3次销售，否则账户关闭

**FTC 合规要求：**
- ✅ 清晰且显著地披露 affiliate 关系
- ✅ 在链接附近放置披露声明
- ✅ 使用简单明了的语言（如"affiliate link"）
- ✅ 不要使用模糊术语（如"sponsored" alone）

---

## 📊 追踪和分析

### Google Analytics 设置

#### 1. 设置事件追踪

在 `/src/components/BrandReviews.tsx` 中添加 GA 事件：

```typescript
import { gtag } from '@/lib/gtag'; // 假设您已设置 GA

const handleAffiliateClick = (productId: number, productName: string) => {
  gtag('event', 'affiliate_click', {
    product_id: productId,
    product_name: productName,
    category: 'affiliate',
  });
};

// 在链接上使用
<a 
  href={product.affiliateLink}
  onClick={() => handleAffiliateClick(product.id, product.title)}
  target="_blank"
  rel="noopener noreferrer nofollow"
>
  Check Price →
</a>
```

#### 2. 创建自定义报告

在 Google Analytics 中：
1. 进入 "Reports" → "Engagement" → "Events"
2. 筛选 `affiliate_click` 事件
3. 查看哪些产品获得最多点击
4. 分析用户行为和转化路径

### Affiliate 网络后台分析

定期检查各 affiliate 网络的报告：

**关键指标：**
- **Clicks**: 链接点击次数
- **Conversions**: 转化次数（购买）
- **Conversion Rate**: 转化率（Conversions / Clicks）
- **Revenue**: 总收入
- **EPC (Earnings Per Click)**: 每次点击收入
- **AOV (Average Order Value)**: 平均订单价值

**优化策略：**
- 高点击 + 低转化 = 产品页面需要优化
- 低点击 + 高转化 = 增加该产品的曝光
- 高 EPC = 重点推广此类产品

---

## 🔧 高级配置

### 1. 动态 Affiliate 链接（未来 Supabase 集成）

当您集成 Supabase 数据库后，可以这样管理链接：

```sql
-- 创建 affiliate_links 表
CREATE TABLE affiliate_links (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id),
  retailer VARCHAR(50), -- 'amazon', 'walmart', etc.
  url TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

然后在代码中动态获取：

```typescript
// 从 Supabase 获取 affiliate 链接
const { data: affiliateLinks } = await supabase
  .from('affiliate_links')
  .select('*')
  .eq('product_id', productId)
  .eq('is_active', true);
```

### 2. A/B 测试不同零售商

为同一产品提供多个购买选项：

```typescript
{
  id: 1,
  title: "Best Air Fryers 2026",
  affiliateLinks: [
    { retailer: "Amazon", url: "https://amzn.to/xxx", commission: "4%" },
    { retailer: "Walmart", url: "https://wmt.co/yyy", commission: "3%" },
    { retailer: "Target", url: "https://tgt.biz/zzz", commission: "5%" },
  ]
}
```

### 3. Geo-targeting（地理定位）

根据用户位置显示不同的 affiliate 链接：

```typescript
// 使用 IP 地理位置服务
const userCountry = await getUserCountry(); // 'US', 'UK', 'CA', etc.

const affiliateLink = userCountry === 'UK' 
  ? "https://amazon.co.uk/dp/xxx?tag=uk-tag-21"
  : "https://amazon.com/dp/xxx?tag=us-tag-20";
```

**推荐服务：**
- IPinfo.io
- MaxMind GeoIP
- Cloudflare Workers（边缘计算）

---

## 📝 完整示例

以下是 `BrandReviews.tsx` 中一个完整的产品配置示例：

```typescript
{
  id: 1,
  title: "Best Air Fryers 2026: Top 10 Models Tested & Reviewed",
  category: "Kitchen Appliances",
  description: "Discover the best air fryers for healthy cooking. We tested 50+ models to find the top performers in capacity, features, and value. From budget-friendly options under $50 to premium models with smart features.",
  price: "$89-$299",
  rating: 4.8,
  reviews: 2847,
  
  // ✅ 真实的 Amazon affiliate 链接
  affiliateLink: "https://www.amazon.com/s?k=air+fryer&tag=mytag-20&ref=pd_sl_xxxxx_e",
  
  seoContent: {
    intro: "Air fryers have revolutionized home cooking...",
    keyFeatures: [
      "Rapid air circulation technology for even cooking",
      "Digital controls with preset programs",
      "Easy-to-clean non-stick baskets",
      "Energy-efficient operation",
      "Compact designs for small kitchens"
    ],
    bestFor: "Health-conscious families looking to reduce oil consumption without sacrificing taste",
    pros: [
      "Uses 70-80% less oil than traditional frying",
      "Faster cooking times",
      "Easier cleanup",
      "Versatile cooking options"
    ],
    cons: [
      "Learning curve for timing",
      "Limited capacity in smaller models",
      "Can be noisy during operation"
    ]
  }
}
```

---

##  常见问题

### Q1: Affiliate 链接应该用新标签页打开吗？

**A:** 是的，始终使用 `target="_blank"` 和 `rel="noopener noreferrer nofollow"`：

```html
<a 
  href="https://amazon.com/xxx?tag=mytag-20"
  target="_blank"
  rel="noopener noreferrer nofollow"
>
  Buy Now
</a>
```

**原因：**
- 保持用户在您的网站上
- 安全性（防止新页面访问原页面）
- SEO（nofollow 告诉搜索引擎这是付费链接）

### Q2: 我需要 disclosed affiliate 关系吗？

**A:** 是的，这是法律要求（FTC 规定）。✅ 您已经在以下位置添加了披露：
- `/src/app/affiliate-disclosure/page.tsx` - 完整披露页面
- `/src/components/Footer.tsx` - 页脚链接
- 产品详情页的 CTA 下方有小字说明

### Q3: 如果 affiliate 链接失效怎么办？

**A:** 
1. 立即替换为有效链接
2. 如果是产品下架，考虑移除该评测或替换为类似产品
3. 设置自动监控（使用 Broken Link Checker 等工具）

### Q4: 可以在一个页面上放多个 affiliate 链接吗？

**A:** 可以，但要注意：
- 不要过度（避免看起来像垃圾邮件）
- 确保每个链接都有价值
- 优先推荐最相关的产品
- 考虑用户体验

### Q5: 如何最大化 affiliate 收入？

**A:** 
1. **选择高佣金产品**（电子产品、奢侈品佣金更高）
2. **优化转化率**（真实评测、对比表格、高质量图片）
3. **增加流量**（SEO、社交媒体、邮件营销）
4. **建立信任**（诚实、透明、专业）
5. **持续发布新内容**（每周2-3篇评测）

---

## 📞 获取帮助

如果您在配置 affiliate 链接时遇到问题：

- **Amazon Associates 支持**: https://affiliate-program.amazon.com/help
- **ShareASale 支持**: https://www.shareasale.com/info/contact
- **CJ Affiliate 支持**: https://www.cj.com/support
- **FTC 指南**: https://www.ftc.gov/tips-advice/business-center/advertising-and-marketing

---

**祝您 affiliate 营销成功！** 💰

*最后更新：2026年6月16日*
