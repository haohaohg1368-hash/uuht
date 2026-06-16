# 🚀 推送到 GitHub 并部署到 Vercel

## ✅ 已完成
- [x] Git 仓库已初始化
- [x] 所有文件已提交（30个文件，5220行代码）

## 📋 下一步操作（3步完成）

### 步骤 1：在 GitHub 上创建仓库

**方式 A：通过浏览器（最简单）**

1. 访问：https://github.com/new
2. Repository name: `uuht`
3. Description: `UUHT - Affiliate Marketing Website for Product Reviews`
4. 选择 **Public**（公开仓库，Vercel 免费套餐需要）
5. **不要**勾选 "Add a README file"
6. 点击 **"Create repository"**

**方式 B：通过 GitHub CLI（如果已安装）**

```bash
gh repo create uuht --public --description "UUHT - Affiliate Marketing Website"
```

---

### 步骤 2：推送代码到 GitHub

复制以下命令并在终端中执行：

```bash
cd /Users/jase/cTrader/10best-reviews

# 添加远程仓库（替换 YOUR_USERNAME 为您的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/uuht.git

# 推送代码
git push -u origin main
```

**示例：**
```bash
git remote add origin https://github.com/johnsmith/uuht.git
git push -u origin main
```

---

### 步骤 3：在 Vercel 上部署

#### 方式 A：一键导入（推荐）

1. **访问**：https://vercel.com/new
2. **点击** "Import Git Repository"
3. **连接** GitHub（如果首次使用）
4. **搜索并选择** `uuht` 仓库
5. **点击** "Import"
6. **保持默认设置**，点击 "Deploy"
7. **等待 2-3 分钟** ⏱️

部署完成后，您会看到：
- ✅ Production URL: `https://uuht.vercel.app`
- ✅ 实时预览链接

#### 方式 B：使用 Vercel CLI

如果您想使用命令行：

```bash
# 安装 Vercel CLI
npm install -g vercel

# 登录
vercel login

# 部署
cd /Users/jase/cTrader/10best-reviews
vercel
```

---

## 🎯 部署后检查清单

访问您的 Vercel URL 后，验证以下内容：

- [ ] 首页正常显示，Logo 为 "UU HT"
- [ ] Hero 区域显示完整
- [ ] 6+ 产品卡片可见
- [ ] 导航栏链接可点击（About, Contact, Blog）
- [ ] Footer 页脚显示正确
- [ ] 移动端响应式正常（用手机浏览器测试）
- [ ] `<meta name="lhverifycode">` 在页面源代码中

查看源代码方法：
- Chrome/Safari: 右键 → "View Page Source"
- 搜索 "lhverifycode" 确认存在

---

## 🔗 快速链接

- **GitHub 新建仓库**: https://github.com/new
- **Vercel 新项目**: https://vercel.com/new
- **Vercel Dashboard**: https://vercel.com/dashboard

---

## 💡 提示

1. **自动部署**：每次 push 到 GitHub 的 `main` 分支，Vercel 会自动重新部署
2. **预览链接**：每个 commit 都会生成独立的预览 URL
3. **自定义域名**：部署后可在 Vercel Dashboard 中添加自定义域名
4. **环境变量**：如需添加数据库等，在 Vercel Dashboard → Settings → Environment Variables 中配置

---

## ❓ 遇到问题？

### Q: 推送时要求输入 GitHub 密码？

**A:** GitHub 不再支持密码认证，需要使用 Personal Access Token (PAT)：

1. 访问：https://github.com/settings/tokens
2. 点击 "Generate new token (classic)"
3. 选择 scopes: `repo`
4. 生成 token 并复制
5. 推送时使用 token 代替密码

或使用 SSH：
```bash
# 生成 SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# 添加到 GitHub
cat ~/.ssh/id_ed25519.pub
# 复制到 https://github.com/settings/keys

# 修改远程仓库为 SSH
git remote set-url origin git@github.com:YOUR_USERNAME/uuht.git
```

### Q: Vercel 部署失败？

**A:** 检查以下几点：
1. 确保仓库是 **Public**（公开）
2. 检查 `package.json` 中的脚本是否正确
3. 查看 Vercel 部署日志中的错误信息
4. 确保 Node.js 版本兼容（Next.js 14 需要 Node 18+）

---

## 🎉 完成后

部署成功后，您将获得：
- ✅ 在线网站 URL（如 `https://uuht.vercel.app`）
- ✅ 全球 CDN 加速
- ✅ 自动 HTTPS
- ✅ 免费的 SSL 证书

**接下来：**
1. 替换产品卡片中的 affiliate 链接
2. 添加真实的产品图片
3. 设置 Google Analytics
4. 开始推广赚钱！💰

---

*祝您部署顺利！如有问题，随时查看 VERCEL_DEPLOYMENT.md 获取详细帮助。*
