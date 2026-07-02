# 管理后台密码保护设置指南

##  已完成的工作

✅ 已为所有管理后台页面添加密码保护功能  
✅ 使用 localStorage 记住登录状态  
✅ 右上角显示"退出登录"按钮  

---

## 🔐 默认密码

**当前默认密码:** `uuht2026admin`

### **如何修改密码?**

打开文件: `src/components/AdminAuth.tsx`

找到第 11 行:
```typescript
const ADMIN_PASSWORD = 'uuht2026admin';
```

修改为您自己的强密码,例如:
```typescript
const ADMIN_PASSWORD = 'MySecureP@ssw0rd!2026';
```

**密码建议:**
- ✅ 至少 12 个字符
- ✅ 包含大小写字母、数字、特殊字符
- ✅ 不要使用常见单词或个人信息
- ✅ 定期更换密码

---

## 🚀 使用方法

### **首次访问管理后台:**

1. 访问: https://www.uuht.shop/admin/links
2. 看到登录页面,输入密码
3. 点击"登录"
4. 进入管理界面

### **后续访问:**

- 系统会自动记住登录状态 (使用 localStorage)
- 直接显示管理界面,无需再次输入密码
- 点击右上角"退出登录"可清除登录状态

### **清除登录状态:**

**方法 1:** 点击页面右上角的"退出登录"按钮

**方法 2:** 手动清除浏览器数据
- Chrome/Edge: F12 → Application → Local Storage → 删除 `admin_authenticated`
- Safari: 偏好设置 → 隐私 → 管理网站数据

**方法 3:** 使用无痕模式访问

---

## 📋 受保护的页面

以下页面需要密码才能访问:

| 页面 | 网址 |
|------|------|
| 链接管理 | https://www.uuht.shop/admin/links |
| 数据统计 | https://www.uuht.shop/admin/stats |
| 追踪模板生成器 | https://www.uuht.shop/admin/tracking-template |

---

## ⚠️ 安全提示

### **当前实现的安全性:**

**优点:**
- ✅ 防止普通用户误操作
- ✅ 简单易用,无需注册登录
- ✅ 登录状态本地保存,体验流畅

**局限性:**
- ❌ 密码硬编码在代码中 (可通过查看源代码看到)
-  无加密传输 (HTTP 下密码明文传输)
- ❌ 无暴力破解保护
- ❌ 无多用户支持

**建议:**
1. **仅通过 HTTPS 访问** (Vercel 默认启用)
2. **不要公开分享管理后台链接**
3. **使用强密码并定期更换**
4. **未来升级到 Supabase Auth** (见下方)

---

## 🎯 未来升级: Supabase Auth (推荐)

当您需要更专业的安全保护时,可以升级到 Supabase Auth:

### **优势:**
- ✅ 专业级身份验证
- ✅ 支持邮箱+密码登录
- ✅ 支持 Google/GitHub 第三方登录
- ✅ 支持多用户和角色权限
- ✅ 密码加密存储
- ✅ 会话管理
- ✅ 忘记密码找回

### **实现步骤:**

**1. 启用 Supabase Auth**
```sql
-- 在 Supabase Dashboard 中启用 Email Auth
-- 设置: Authentication → Providers → Email → Enable
```

**2. 创建管理员账号**
```sql
-- 在 Supabase Dashboard 中创建用户
-- 或让用户自行注册
```

**3. 修改 AdminAuth 组件**
```typescript
// 使用 supabase.auth.signInWithPassword()
// 替代当前的密码比对逻辑
```

**4. 添加行级安全策略 (RLS)**
```sql
-- 只允许认证用户访问管理数据
CREATE POLICY "Authenticated users can manage links"
ON affiliate_links FOR ALL
USING (auth.role() = 'authenticated');
```

### **参考文档:**
- [Supabase Auth 文档](https://supabase.com/docs/guides/auth)
- [Next.js + Supabase Auth 教程](https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs)

---

##  常见问题

### **Q1: 忘记密码怎么办?**

**A:** 直接修改代码中的 `ADMIN_PASSWORD` 常量,然后重新部署即可。

### **Q2: 多人协作怎么办?**

**A:** 
- **短期方案:** 共享同一个密码 (不推荐)
- **长期方案:** 升级到 Supabase Auth,创建多个管理员账号

### **Q3: 如何限制特定 IP 访问?**

**A:** 可以在 Vercel 中配置防火墙规则,或使用 Cloudflare 等 CDN 服务。

### **Q4: 登录状态能保持多久?**

**A:** 目前使用 localStorage,会永久保存直到手动清除。可以改为 sessionStorage (关闭浏览器后失效)。

---

## 🎉 总结

您现在已经拥有了一个简单实用的密码保护系统!

**下一步:**
1. 修改默认密码为强密码
2. 提交代码并推送到 GitHub
3. 等待 Vercel 部署完成
4. 测试登录功能
5. 开始安全管理您的联盟链接!

祝您使用愉快! 🚀
