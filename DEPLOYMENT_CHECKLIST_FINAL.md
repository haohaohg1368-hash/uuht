# 🚀 UUHT 联盟链接追踪系统 - 最终部署检查清单

## ✅ 完成以下所有步骤后,系统将完全可用

---

### 第一步: Vercel 环境变量配置 ⚙️

- [ ] 访问 Vercel 项目设置: https://vercel.com/haohaohg1368-hash/uuht/settings/environment-variables
- [ ] 添加环境变量 `NEXT_PUBLIC_SUPABASE_URL`
  - Value: `https://hsorcpkiwqlreqwbrtbj.supabase.co`
  - Environment: Production ✅
- [ ] 添加环境变量 `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - Value: `sb_publishable_zhH_3WB4kP_QJ0jDk6l7OA_ZxExXLZv`
  - Environment: Production ✅
- [ ] 等待 Vercel 自动重新部署完成 (状态显示 "Ready")

**预计时间**: 2-3 分钟

---

### 第二步: Supabase 数据库设置 🗄️

- [ ] 访问 Supabase 项目: https://supabase.com/dashboard/project/hsorcpkiwqlreqwbrtbj
- [ ] 点击左侧菜单 "SQL Editor"
- [ ] 复制 `scripts/setup-supabase.sql` 文件内容
- [ ] 粘贴到 SQL Editor
- [ ] 点击 "RUN" 执行
- [ ] 看到 "Success" 提示
- [ ] 点击 "Table Editor" 确认两个表已创建:
  - [ ] `affiliate_links`
  - [ ] `link_clicks`

**预计时间**: 1-2 分钟

---

### 第三步: 验证系统功能 ✅

运行验证脚本或手动测试:

```bash
cd /Users/jase/cTrader/10best-reviews
./scripts/verify-deployment.sh
```

或手动访问以下链接:

- [ ] 主页: https://uuht.shop (应正常显示)
- [ ] 管理后台: https://uuht.shop/admin/links (应显示链接管理界面)
- [ ] 数据看板: https://uuht.shop/admin/stats (应显示统计信息)
- [ ] 测试短链接: https://uuht.shop/go/air-fryer (应跳转到 Amazon)

---

### 第四步: 开始使用 🎯

- [ ] 访问管理后台: https://uuht.shop/admin/links
- [ ] 点击 "Add New Link" 添加您的第一个真实联盟链接
- [ ] 填写表单:
  - Slug: 短链接后缀 (如 `my-product`)
  - Title: 显示名称
  - Destination URL: 完整的联盟链接
  - Merchant: 商家名称
  - Category: 分类
- [ ] 保存后获得短链接: `https://uuht.shop/go/my-product`
- [ ] 在 Google Ads 中使用此短链接进行推广
- [ ] 在数据看板查看点击统计

---

## 📊 系统架构概览

```
用户点击短链接
    ↓
https://uuht.shop/go/product-name
    ↓
Next.js API (/go/[slug])
    ↓
查询 Supabase 获取真实链接
    ↓
记录点击数据到 link_clicks 表
    ↓
302 重定向到真实联盟链接
    ↓
用户到达商家网站 (Amazon 等)
    ↓
产生购买 → 您获得佣金
```

---

## 🔧 常用命令

```bash
# 本地开发
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm run start

# 运行部署验证
./scripts/verify-deployment.sh

# 推送到 GitHub (触发 Vercel 自动部署)
git add .
git commit -m "更新内容"
git push
```

---

## 📁 重要文件位置

| 文件 | 用途 |
|------|------|
| `scripts/setup-supabase.sql` | Supabase 数据库初始化脚本 |
| `scripts/verify-deployment.sh` | 部署验证脚本 |
| `SUPABASE_SETUP_INSTRUCTIONS.md` | Supabase 详细设置指南 |
| `src/app/admin/links/page.tsx` | 链接管理后台页面 |
| `src/app/admin/stats/page.tsx` | 数据统计看板页面 |
| `src/app/api/links/route.ts` | 链接管理 API |
| `src/app/go/[slug]/route.ts` | 短链接跳转 API |

---

## ❓ 故障排查

### 问题 1: Vercel 部署失败
**解决方案**:
1. 检查 Vercel Dashboard 的 Deployments 标签页
2. 查看 Build Logs 找出错误
3. 确认环境变量已正确配置

### 问题 2: 访问管理后台显示 404
**解决方案**:
1. 确认 Vercel 部署已完成
2. 清除浏览器缓存
3. 尝试无痕模式访问

### 问题 3: 短链接不跳转
**解决方案**:
1. 确认 Supabase SQL 脚本已成功执行
2. 检查 Table Editor 中是否有示例数据
3. 查看 Vercel Function Logs 查找错误

### 问题 4: 无法添加新链接
**解决方案**:
1. 检查浏览器控制台是否有错误
2. 确认 Supabase 连接正常
3. 检查 Vercel Function Logs

---

## 🎉 恭喜!

完成以上所有步骤后,您的联盟链接追踪系统将完全就绪!

**立即开始**:
1. 访问 https://uuht.shop/admin/links
2. 添加您的第一个联盟链接
3. 在 Google Ads 中投放
4. 在数据看板监控效果

祝您推广成功! 💪
