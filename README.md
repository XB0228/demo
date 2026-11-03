# WIDEVANCE 官网

WIDEVANCE（维度万思）官方网站前端项目，使用 Vue 3 + Vite + vue-router + TDesign 构建，由原静态站重构而来。站点包含首页、产品、新闻、团队、招聘与联系等页面。仓库只包含前端，新闻、分类、站点配置与联系表单均使用本地 mock 数据，运行不依赖后台服务。

## 技术栈

- Vue 3（Composition API、`<script setup>`）
- Vite 8
- vue-router 5（HTML5 History 模式）
- TDesign Vue Next 组件库
- marked（文章 Markdown 渲染）
- 原生 CSS，按模块拆分全局样式

## 页面与功能

| 路径 | 页面 | 说明 |
| --- | --- | --- |
| `/` | 首页 | 品牌 Hero、Agentic TOS 产品理念、新闻动态 |
| `/product` | 产品 | 船舶计划、堆场、闸口、理货、数据驾驶舱、多 Agent 协同等能力 |
| `/news` | 新闻 | 新闻列表、分类筛选与重点新闻 |
| `/news/vision-mission` | 愿景文章 | 愿景与使命专题内容 |
| `/news/article/:id` | 文章详情 | mock 文章详情，Markdown 渲染 |
| `/about` | 团队 | 品牌理念、愿景与使命、团队成员 |
| `/careers` | 招聘 | 开放岗位 |
| `/contact` | 联系 | 联系方式与咨询表单 |

全站支持响应式布局、导航与页脚、语言切换入口、备案信息展示，以及滚动与入场动画。访问统计保留为空实现，不会向外部发送请求。

## 目录结构

```text
.
├── index.html                # 入口 HTML
├── package.json
├── vite.config.js            # 开发端口与构建配置
├── public/assets/            # 站点静态图片
├── src/
│   ├── main.js               # 应用入口与样式加载
│   ├── App.vue               # 全站布局（Header / RouterView / Footer）
│   ├── router/index.js       # 路由、页面标题与访问统计
│   ├── views/                # 页面组件（首页、产品、新闻、团队、招聘、联系等）
│   ├── components/           # Header、Footer、IntroLoader
│   ├── composables/          # 站点配置、滚动与入场动画
│   ├── data/site.js          # 导航与页脚链接
│   ├── lib/api.js            # 数据访问层（读取 mock 数据）
│   ├── lib/mockData.js       # 新闻、分类、站点配置等 mock 数据
│   └── styles/               # base / layout / detail / tdesign / typography
├── assets/                   # 设计、新闻等配图
└── dist-test/                # 已提交的构建产物，仅作参考
```

## 环境要求

- Node.js `^20.19.0` 或 `>=22.12.0`（Vite 8 要求）
- npm

## 本地开发

```bash
npm install
npm run dev
```

默认访问 <http://localhost:5173>。`vite.config.js` 已开启 `host: true`，可通过局域网访问。

本项目为纯前端演示，启动开发服务器即可完整浏览所有页面，无需同时启动后台服务。

## Mock 数据

数据访问层见 `src/lib/api.js`，它保留异步调用方式，内部读取 `src/lib/mockData.js`：

| 方法 | 数据来源 | 说明 |
| --- | --- | --- |
| `fetchPublishedArticles(categoryId)` | `mockArticles` | 文章列表，可按分类过滤 |
| `fetchArticle(id)` | `mockArticles` | 文章详情，未找到时抛出错误 |
| `fetchCategories()` | `mockCategories` | 新闻分类 |
| `fetchSiteConfig()` | `mockSiteConfig` | 站点配置 |
| `submitContact(data)` | 本地模拟 | 延迟后返回提交成功 |
| `trackVisit()` | 空实现 | 不发送访问统计请求 |

mock 数据随前端打包，不产生 `/api/*` 网络请求。后续接入真实后台时，把 `src/lib/api.js` 中的实现替换为接口请求，并在 `vite.config.js` 中补充接口代理即可，页面组件无需改动。

## 站点配置

站点名称、Slogan、联系邮箱、备案号等来自 `src/lib/mockData.js` 的 `mockSiteConfig`；`src/composables/useSiteConfig.js` 仍提供默认值兜底，数据为空时页面可正常展示。

## 构建与部署

```bash
npm run build    # 输出到 dist/
npm run preview  # 本地预览构建结果
```

站点部署在域名根路径（`base: '/'`）。由于使用 History 路由，需要在 Web 服务器上把未匹配的路径回退到 `index.html`，例如 Nginx：

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## 许可证

本仓库暂未添加开源许可证。
