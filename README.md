# WIDEVANCE 官网

WIDEVANCE（维度万思）官方网站前端项目，使用 Vue 3 + Vite + vue-router + TDesign 构建，由原静态站重构而来。站点包含首页、产品、新闻、团队、招聘与联系等页面，新闻与站点配置等内容通过后台接口获取。

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
| `/news/article/:id` | 文章详情 | 后台文章详情，Markdown 渲染 |
| `/about` | 团队 | 品牌理念、愿景与使命、团队成员 |
| `/careers` | 招聘 | 开放岗位 |
| `/contact` | 联系 | 联系方式与咨询表单 |

全站支持响应式布局、导航与页脚、语言切换入口、备案信息展示、访问统计上报，以及滚动与入场动画。

## 目录结构

```text
.
├── index.html                # 入口 HTML
├── package.json
├── vite.config.js            # 开发端口、接口代理与构建配置
├── public/assets/            # 站点静态图片
├── src/
│   ├── main.js               # 应用入口与样式加载
│   ├── App.vue               # 全站布局（Header / RouterView / Footer）
│   ├── router/index.js       # 路由、页面标题与访问统计
│   ├── views/                # 页面组件（首页、产品、新闻、团队、招聘、联系等）
│   ├── components/           # Header、Footer、IntroLoader
│   ├── composables/          # 站点配置、滚动与入场动画
│   ├── data/site.js          # 导航与页脚链接
│   ├── lib/api.js            # 后台接口封装
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

开发服务器会把以下请求代理到本地后台服务 `http://localhost:9001`：

- `/api/*`
- `/uploads/*`

本仓库只包含前端，完整功能需要同时启动对应的后台服务。未启动后台时，新闻列表和站点配置会使用内置兜底数据，联系表单提交会失败。

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

## 后台接口

接口封装见 `src/lib/api.js`，返回格式约定为 `{ code, message, data }`，`code === 0` 表示成功：

| 方法 | 路径 | 说明 |
| --- | --- | --- |
| GET | `/api/public/articles` | 已发布文章列表，可传 `categoryId` |
| GET | `/api/public/articles/:id` | 文章详情 |
| GET | `/api/public/categories` | 新闻分类 |
| GET | `/api/public/site-config` | 站点配置 |
| POST | `/api/public/contact` | 提交联系表单 |
| POST | `/api/visits/track` | 访问统计上报 |

可通过环境变量 `VITE_API_BASE` 指定接口前缀，默认使用同源地址。

## 站点配置

站点名称、Slogan、联系邮箱、备案号等由后台「站点配置」下发；`src/composables/useSiteConfig.js` 中提供了默认值兜底，接口不可用时页面仍可正常展示。

## 许可证

本仓库暂未添加开源许可证。
