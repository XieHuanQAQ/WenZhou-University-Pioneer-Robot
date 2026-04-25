# 温州大学开拓者机器人战队官网

这是温州大学开拓者机器人战队的官方静态网站，用于展示战队介绍、新闻动态、历届发展、招新信息、合作伙伴和团队传承。

## 项目结构

- `index.html`：首页
- `about.html`：关于我们
- `news.html`：新闻动态
- `history.html`：历届发展
- `join.html`：加入我们
- `partners.html`：合作伙伴
- `hall-of-fame.html`：名人堂
- `styles.css`：全站样式
- `script.js`：移动端菜单、滚动显现和数字动画
- `assets/`：logo 与图片资源
- `.github/workflows/deploy.yml`：GitHub Pages 自动部署工作流

## 本地预览

在项目目录运行：

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 部署方式

本项目使用 `GitHub Pages + GitHub Actions` 部署。

1. 将代码推送到 GitHub 仓库默认分支 `main`
2. 在仓库 `Settings -> Pages` 中将 `Build and deployment` 设置为 `GitHub Actions`
3. 推送后等待 Actions 工作流运行完成，站点会自动发布

## 待替换素材

- `assets/team-photo.jpg`
- `assets/robot-main.jpg`
- `assets/workshop.jpg`
- `assets/recruitment.jpg`
- `assets/competition.jpg`

## 维护建议

- 优先替换各页面中的联系方式、报名链接和真实成员信息
- 新闻动态建议按时间倒序持续更新
- 历届发展和名人堂建议随着战队资料完善逐步补充
- 保持纯静态结构，方便 GitHub Pages 长期托管与维护
