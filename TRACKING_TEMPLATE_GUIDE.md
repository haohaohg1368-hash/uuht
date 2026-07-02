# Google Ads 追踪模板使用指南

##  功能说明

您的联盟链接追踪系统现已支持 **Google Ads 追踪模板**功能,与 LinkHaiTao 相同的 `{lpurl}` 模式。

### 什么是追踪模板?

追踪模板允许您在 Google Ads 中动态构建带参数的联盟链接,无需为每个产品创建单独的短链接。

---

## 🚀 快速开始

### 步骤 1: 访问追踪模板生成器

打开管理后台的追踪模板页面:
```
https://www.uuht.shop/admin/tracking-template
```

### 步骤 2: 选择短链接

从下拉菜单中选择您要推广的产品短链接,例如:
- `air-fryer` → `https://www.uuht.shop/go/air-fryer`
- `robot-vacuum` → `https://www.uuht.shop/go/robot-vacuum`

### 步骤 3: 选择或自定义参数

**选项 A: 使用快速模板**
- 点击 "Google Ads 基础追踪"、"联盟计划追踪" 或 "完整电商追踪"
- 系统会自动填充常用参数

**选项 B: 自定义参数**
- 手动添加参数名和值
- 支持 Google Ads 动态参数 (见下方参考)

### 步骤 4: 生成并复制模板

1. 点击 **"生成追踪模板"** 按钮
2. 复制生成的 **追踪模板** (Tracking Template)
3. 复制 **最终到达网址** (Final URL)

### 步骤 5: 在 Google Ads 中配置

#### 方法一: 广告系列级别设置

1. 登录 [Google Ads](https://ads.google.com/)
2. 进入您的广告系列
3. 点击左侧 **"设置"** → **"广告系列网址选项"**
4. 在 **"跟踪模板"** 字段中粘贴追踪模板
5. 保存

#### 方法二: 广告组级别设置

1. 进入广告组
2. 点击 **"设置"** → **"广告组网址选项"**
3. 粘贴追踪模板
4. 保存

#### 方法三: 单个广告级别设置

1. 编辑具体广告
2. 找到 **"最终到达网址"** 字段
3. 输入: `https://www.uuht.shop/go/your-slug`
4. 展开 **"高级选项"**
5. 在 **"跟踪模板"** 中粘贴模板
6. 保存

---

## 💡 实际示例

### 示例 1: Amazon 产品推广

**追踪模板:**
```
{lpurl}?utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&affiliate_id=YOUR_ID
```

**最终到达网址:**
```
https://www.uuht.shop/go/air-fryer
```

**实际效果:**
```
用户点击广告 
→ https://www.uuht.shop/go/air-fryer?utm_source=google&...
→ 系统记录点击和参数
→ 跳转到: https://www.amazon.com/dp/B08N5WRWNW?tag=yourtag-20&utm_source=google&...
```

### 示例 2: 多产品批量推广

**追踪模板:**
```
{lpurl}?source=google_ads&campaign={campaignid}&adgroup={adgroupid}
```

**不同广告的最终到达网址:**
- 广告 1: `https://www.uuht.shop/go/air-fryer`
- 广告 2: `https://www.uuht.shop/go/robot-vacuum`
- 广告 3: `https://www.uuht.shop/go/laptop-stand`

所有广告共享同一个追踪模板,但跳转到不同的产品页面!

---

## 📚 Google Ads 动态参数参考

| 参数 | 说明 | 示例值 |
|------|------|--------|
| `{campaignid}` | 广告系列 ID | `123456789` |
| `{adgroupid}` | 广告组 ID | `987654321` |
| `{keyword}` | 触发广告的关键词 | `best air fryer` |
| `{matchtype}` | 匹配类型 | `e` (exact), `p` (phrase), `b` (broad) |
| `{creative}` | 广告创意 ID | `123456` |
| `{device}` | 设备类型 | `m` (mobile), `c` (desktop), `t` (tablet) |
| `{gclid}` | Google Click ID | `CjwKCAiA...` |
| `{lpurl}` | 落地页网址 (自动替换) | `https://www.uuht.shop/go/xxx` |
| `{ifmobile:...}` | 仅移动端显示 | `{ifmobile:&mobile=true}` |
| `{ifsearch:...}` | 仅搜索广告显示 | `{ifsearch:&source=search}` |

---

## 🔧 技术实现

### 短链接跳转逻辑

当用户点击带有参数的短链接时:

1. **接收请求**: `/go/air-fryer?utm_source=google&campaign=123`
2. **查询数据库**: 获取 `air-fryer` 对应的真实联盟链接
3. **记录点击**: 将所有参数保存到 `link_clicks` 表
4. **构建最终 URL**: 将参数附加到目标链接
5. **302 重定向**: 跳转到带参数的完整联盟链接

### 数据记录

系统会记录以下信息:
- ✅ 点击时间
- ✅ IP 地址
- ✅ 用户代理 (浏览器/设备)
- ✅ 来源页面
- ✅ 设备类型 (desktop/mobile/tablet)
- ✅ **URL 参数** (以 JSON 格式存储在 `country` 字段)

---

## 🎨 与 LinkHaiTao 对比

### LinkHaiTao 的做法:
```
追踪模板: {lpurl}?mmc=adiAffiliate_XXX&ranMID=50702&...
最终网址: https://www.adidas.ae/en
实际跳转: https://www.adidas.ae/en?mmc=...&ranMID=...
```

### 您的系统:
```
追踪模板: {lpurl}?utm_source=google&campaign={campaignid}
最终网址: https://www.uuht.shop/go/air-fryer
实际跳转: https://www.uuht.shop/go/air-fryer?utm_source=google&...
         → 记录数据 → 跳转到 Amazon
```

**优势:**
- ✅ 完全掌控数据和追踪逻辑
- ✅ 无需依赖第三方平台
- ✅ 可以自定义任意参数
- ✅ 实时查看点击统计

---

## ❓ 常见问题

### Q1: 为什么要用 {lpurl} 而不是直接写完整 URL?

**A:** 使用 `{lpurl}` 的好处是:
- 可以轻松切换推广的产品页面
- 同一追踪模板可用于多个广告
- 便于 A/B 测试不同落地页

### Q2: 参数会被传递到最终商家网站吗?

**A:** 是的!所有参数都会:
1. 被您的系统记录
2. 附加到最终的联盟链接
3. 传递给商家网站 (如 Amazon)

### Q3: 如何查看记录的参数数据?

**A:** 目前参数以 JSON 格式存储在数据库的 `link_clicks.country` 字段中。您可以通过 Supabase Table Editor 查看原始数据。

未来可以添加专门的参数分析页面。

### Q4: 如果参数太多会影响性能吗?

**A:** 不会。URL 参数通常很小 (< 1KB),对性能影响微乎其微。

### Q5: 可以在多个广告系列中使用同一个追踪模板吗?

**A:** 当然可以!这正是追踪模板的优势所在。只需在不同广告系列中粘贴相同的模板即可。

---

## 🎯 最佳实践

### 1. 命名规范
- 使用清晰的参数名: `utm_source`, `utm_campaign`, `affiliate_id`
- 保持一致性: 所有广告系列使用相同的参数结构

### 2. 追踪层级
- **广告系列级**: 设置通用参数 (如 affiliate_id)
- **广告组级**: 添加产品类别参数
- **广告级**: 使用动态参数 ({campaignid}, {keyword})

### 3. 数据利用
- 定期导出点击数据
- 分析哪些关键词/广告组表现最好
- 优化低效的广告投放

### 4. 测试验证
- 上线前先测试链接是否正常跳转
- 确认参数被正确记录
- 检查最终商家网站是否收到参数

---

## 📞 需要帮助?

如果您在使用过程中遇到问题:

1. 检查 Vercel 部署状态: https://vercel.com/haohaohg1368-hash/uuht/deployments
2. 查看 Supabase 数据库: https://supabase.com/dashboard/project/hsorcpkiwqlreqwbrtbj/editor
3. 查看浏览器控制台是否有错误
4. 联系我获取支持

---

## 🎉 恭喜!

您现在已经掌握了与 LinkHaiTao 相同级别的追踪模板技术!

**下一步:**
1. 访问追踪模板生成器: https://www.uuht.shop/admin/tracking-template
2. 生成您的第一个追踪模板
3. 在 Google Ads 中配置
4. 开始投放广告并监控数据

祝您推广成功! 💰🚀
