# 最终落地页 URL 使用指南

##  什么是 Landing Page URL?

**Landing Page URL (最终落地页)** 是指不带追踪参数的干净产品页面 URL,用于在 Google Ads 中作为"最终到达网址"显示。

### **与联盟链接的区别:**

| 类型 | 示例 | 用途 |
|------|------|------|
| **最终落地页** | `https://www.amazon.com/dp/B08N5WRWNW` | Google Ads 最终到达网址,用户看到的干净 URL |
| **完整联盟链接** | `https://www.amazon.com/dp/B08N5WRWNW?tag=yourtag-20&ref=xxx` | 实际跳转的目标,包含 affiliate ID 和追踪参数 |

---

##  为什么需要分离这两个 URL?

### **模仿 LinkHaiTao 的做法:**

LinkHaiTao 在 Google Ads 中的配置:

**追踪模板:**
```
{lpurl}?mod=lhdeal&track=XXX&new={urlencode}
```

**最终到达网址:**
```
https://www.adidas.ae/
```
(注意:这里是干净的域名,不是带 mmc、ranMID 等参数的联盟链接!)

**优势:**
- ✅ URL 简洁美观,提升用户信任度
- ✅ 隐藏复杂的联盟追踪参数
- ✅ 便于批量管理多个产品
- ✅ 可以随时更换联盟平台而不影响广告

---

## 🚀 如何在您的系统中使用

### **步骤 1: 在 Supabase 中添加字段**

首先需要在数据库中执行 SQL 脚本添加 `landing_page_url` 字段:

1. 访问 Supabase Dashboard: https://supabase.com/dashboard/project/hsorcpkiwqlreqwbrtbj/sql
2. 点击 "New query"
3. 复制并粘贴 `scripts/add-landing-page-column.sql` 的内容
4. 点击 "RUN" 执行

或者直接在 SQL Editor 中运行:

```sql
ALTER TABLE affiliate_links 
ADD COLUMN IF NOT EXISTS landing_page_url TEXT;

COMMENT ON COLUMN affiliate_links.landing_page_url IS 'Clean landing page URL shown to users (without affiliate tracking parameters)';

UPDATE affiliate_links 
SET landing_page_url = destination_url 
WHERE landing_page_url IS NULL;

CREATE INDEX IF NOT EXISTS idx_affiliate_links_landing_page ON affiliate_links(landing_page_url);
```

### **步骤 2: 在管理后台添加链接**

访问: https://www.uuht.shop/admin/links

点击 "Add New Link",填写表单:

| 字段 | 示例值 | 说明 |
|------|--------|------|
| **短链接后缀** | `air-fryer` | 短链接的 slug |
| **标题** | `Best Air Fryer 2026` | 显示名称 |
| **最终落地页 URL** ⭐ | `https://www.amazon.com/dp/B08N5WRWNW` | **不带参数的干净 URL** |
| **完整联盟链接** | `https://www.amazon.com/dp/B08N5WRWNW?tag=yourtag-20&ref=xxx` | **带 affiliate ID 的完整链接** |
| **商家** | `Amazon` | 商家名称 |
| **分类** | `Kitchen Appliances` | 产品分类 |

### **步骤 3: 在 Google Ads 中配置**

#### **方式 A: 使用追踪模板 (推荐)**

**追踪模板:**
```
{lpurl}?utm_source=google&utm_campaign={campaignid}&gclid={gclid}
```

**最终到达网址:**
```
https://www.uuht.shop/go/air-fryer
```

**实际效果:**
```
用户点击广告
→ https://www.uuht.shop/go/air-fryer?utm_source=google&...
→ 系统记录点击
→ 跳转到: https://www.amazon.com/dp/B08N5WRWNW?tag=yourtag-20&ref=xxx&utm_source=google&...
```

#### **方式 B: 直接使用最终落地页 (完全模仿 LinkHaiTao)**

如果您想完全模仿 LinkHaiTao 的模式,可以这样配置:

**追踪模板:**
```
{lpurl}?affiliate_id=YOUR_ID&source=google_ads&campaign={campaignid}
```

**最终到达网址:**
```
https://www.uuht.shop/go/air-fryer
```

**或者更高级的用法 - 使用 landing_page_url:**

**追踪模板:**
```
{lpurl}?mod=tracking&track_id={creative}&new={urlencode}
```

**最终到达网址:**
```
https://www.amazon.com/dp/B08N5WRWNW
```
(这里直接使用干净的落地页 URL!)

---

##  数据流程对比

### **传统方式 (只有 destination_url):**

```
Google Ads 配置:
- 最终到达网址: https://www.uuht.shop/go/air-fryer
- 追踪模板: {lpurl}?utm_source=google

用户点击:
→ /go/air-fryer?utm_source=google
→ 查询数据库获取 destination_url
→ 跳转到: https://www.amazon.com/dp/B08N5WRWNW?tag=yourtag-20&utm_source=google
```

### **新方式 (支持 landing_page_url):**

```
Google Ads 配置:
- 最终到达网址: https://www.amazon.com/dp/B08N5WRWNW (干净的 landing_page_url)
- 追踪模板: {lpurl}?affiliate_id=YOUR_ID&source=google

用户点击:
→ https://www.amazon.com/dp/B08N5WRWNW?affiliate_id=YOUR_ID&source=google
→ 通过某种机制映射到对应的短链接
→ 记录点击
→ 跳转到完整的联盟链接
```

---

## 🎨 最佳实践

### **1. 命名规范**

- **landing_page_url**: 使用产品页面的基础 URL,不包含任何追踪参数
  ```
  ✅ https://www.amazon.com/dp/B08N5WRWNW
   https://www.amazon.com/dp/B08N5WRWNW?tag=xxx&ref=yyy
  ```

- **destination_url**: 包含所有必要的联盟追踪参数
  ```
  ✅ https://www.amazon.com/dp/B08N5WRWNW?tag=yourtag-20&ascsubtag=campaign123
  ```

### **2. 批量导入**

如果您有多个产品,可以这样组织数据:

| slug | title | landing_page_url | destination_url |
|------|-------|------------------|-----------------|
| air-fryer | Best Air Fryer | https://www.amazon.com/dp/B08N5WRWNW | https://www.amazon.com/dp/B08N5WRWNW?tag=yourtag-20 |
| robot-vacuum | Robot Vacuum | https://www.amazon.com/dp/B09KLQXX8V | https://www.amazon.com/dp/B09KLQXX8V?tag=yourtag-20 |
| laptop-stand | Laptop Stand | https://www.amazon.com/dp/B07XYZ1234 | https://www.amazon.com/dp/B07XYZ1234?tag=yourtag-20 |

### **3. A/B 测试**

使用 landing_page_url 可以轻松测试不同的产品页面:

```
广告组 1:
- 最终到达网址: https://www.amazon.com/dp/B08N5WRWNW (产品详情页)
- 追踪模板: {lpurl}?variant=A

广告组 2:
- 最终到达网址: https://www.amazon.com/s?k=air+fryer (搜索结果页)
- 追踪模板: {lpurl}?variant=B
```

---

## ❓ 常见问题

### **Q1: landing_page_url 是必须的吗?**

**A:** 不是必须的。如果不填写,系统会自动从 `destination_url` 中提取基础 URL (去掉问号后的参数部分)。

### **Q2: 如果我只填 destination_url 会怎样?**

**A:** 系统会将 `destination_url` 作为默认值,并在 Google Ads 中使用 `/go/slug` 作为最终到达网址。这仍然是有效的,只是 URL 会显示为您的域名而不是商家的域名。

### **Q3: 如何更新现有链接的 landing_page_url?**

**A:** 在管理后台点击"编辑"按钮,在"最终落地页 URL"字段中输入干净的 URL,然后保存即可。

### **Q4: landing_page_url 会影响跳转吗?**

**A:** 不会。实际的跳转仍然使用 `destination_url`。`landing_page_url` 主要用于:
- Google Ads 配置参考
- 数据分析
- 未来可能的高级功能 (如直接跳转到落地页)

---

##  相关文档

- [Google Ads 追踪模板使用指南](TRACKING_TEMPLATE_GUIDE.md)
- [快速开始指南](TRACKING_TEMPLATE_QUICK_START.html)
- [部署检查清单](DEPLOYMENT_CHECKLIST_FINAL.md)

---

## 🎉 总结

通过添加 `landing_page_url` 字段,您的系统现在可以:

✅ **完全模仿 LinkHaiTao 的工作流程**  
✅ **支持干净的最终落地页 URL**  
✅ **灵活配置 Google Ads 追踪模板**  
✅ **更好地管理和分析数据**  

**下一步:**
1. 在 Supabase 中运行 SQL 脚本添加字段
2. 在管理后台更新或添加链接时填写 landing_page_url
3. 在 Google Ads 中使用干净的 URL 作为最终到达网址
4. 开始投放广告并监控效果!

祝您推广成功! 💰🚀
