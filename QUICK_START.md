# 🚀 5分钟快速开始 - 联盟链接追踪系统

## 只需3步，立即开始使用！

---

## 第1步: 设置 Supabase（2分钟）

### 1.1 创建项目
1. 访问 👉 **[supabase.com](https://supabase.com)**
2. 点击 "Start your project" → 用 GitHub 登录
3. 点击 "New Project"
4. 填写：
   - Name: `uuht-tracking`
   - Password: （随便设一个，保存好）
   - Region: US East
5. 点击 "Create" → 等待1-2分钟

### 1.2 获取密钥
1. 进入项目 → 左侧点击 **Settings** (⚙️) → **API**
2. 复制这两个值：
   ```
   Project URL: https://xxxxx.supabase.co
   anon public: eyJhbGciOiJIUzI1NiIs...
   ```

### 1.3 配置 Vercel
1. 访问 👉 **[vercel.com/dashboard](https://vercel.com/dashboard)**
2. 选择 `uuht` 项目 → **Settings** → **Environment Variables**
3. 添加两个变量：
   ```
   Name: NEXT_PUBLIC_SUPABASE_URL
   Value: （粘贴上面的 Project URL）
   
   Name: NEXT_PUBLIC_SUPABASE_ANON_KEY  
   Value: （粘贴上面的 anon public key）
   ```
4. 点击 **Save**

### 1.4 运行 SQL
1. 回到 Supabase → 左侧点击 **SQL Editor** (📄)
2. 打开文件：`scripts/setup-supabase.sql`（在项目里）
3. **全选复制** → 粘贴到 SQL Editor
4. 点击 **RUN** ✅

**完成！** 数据库已设置好。

---

## 第2步: 等待 Vercel 部署（1分钟）

Vercel 会自动检测新代码并部署。

访问 👉 **[vercel.com/.../uuht/deployments](https://vercel.com/haohaohg1368-hash/uuht/deployments)**

看到最新部署状态为 **"Ready"**（绿色✅）即可。

---

## 第3步: 开始使用（2分钟）

### 3.1 访问管理后台
```
https://uuht.shop/admin/links
```

### 3.2 创建第一个链接
1. 点击 **"+ 添加新链接"**
2. 填写：
   ```
   短链接后缀: test
   标题: Test Link
   目标链接: https://www.google.com
   商家: Test
   ```
3. 点击 **"创建"**

### 3.3 测试跳转
访问：
```
https://uuht.shop/go/test
```
应该跳转到 Google！

### 3.4 查看统计
访问：
```
https://uuht.shop/admin/stats
```
能看到点击数据！

---

## 🎉 完成！

现在您可以：
- ✅ 创建短链接
- ✅ 追踪点击
- ✅ 查看数据

**开始添加真实的 Amazon 联盟链接吧！**

---

## 📱 需要帮助？

遇到问题？查看：
- 📖 [完整设置指南](SETUP_GUIDE.md)
-  [系统使用说明](AFFILIATE_TRACKING_SYSTEM.md)

或联系我！
