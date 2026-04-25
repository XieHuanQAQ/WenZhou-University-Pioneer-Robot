# WZU Pioneer Robotics Team Website

这是一个为机器人战队准备的纯静态官网模板，适合直接部署到 GitHub Pages。

## 结构

- `index.html`：首页
- `news.html`：新闻页
- `history.html`：历史页
- `partners.html`：合作伙伴页
- `join.html`：招新页
- `about.html`：关于我们页
- `hall-of-fame.html`：名人堂页
- `styles.css`：视觉样式与响应式布局
- `script.js`：移动端菜单、滚动显现、数字动画
- `assets/logo-mark.svg`：默认占位 logo
- `.github/workflows/deploy.yml`：GitHub Pages 自动部署

## 本地预览

如果本机装了 Python，可以在项目目录运行：

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 需要优先替换的内容

1. `index.html` 里的战队名称、介绍、比赛方向、联系方式
2. 时间线中的年份与成绩
3. 招新方式、报名链接、社交媒体链接
4. 首页主视觉区域替换为你们自己的机器人或战队合照
5. `assets/logo-mark.svg` 现在是根据你们现有 logo 气质制作的简化占位版，后续可以直接替换成正式 logo

## 部署到 GitHub Pages

1. 创建 GitHub 仓库并把这些文件推上去
2. 默认分支建议使用 `main`
3. 在 GitHub 仓库设置中启用 `Pages`
4. 如果使用本项目自带工作流，进入 `Settings -> Pages`，将 `Build and deployment` 设置为 `GitHub Actions`
5. 推送后等待 Actions 跑完，站点就会自动发布

## 后续建议

- 把战队照片压缩后放进 `assets/`
- 如果要加新闻列表，可以继续拆成 `news/` 或 `posts/` 目录
- 如果以后内容变多，可以再升级到 Astro / Eleventy，但你们目前这个阶段用纯静态站最省钱也最稳
