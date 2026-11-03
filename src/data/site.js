/**
 * 全站导航与页脚数据（与原站各页面保持一致）
 */

// typography.js 会把“关于我们”改写为“团队”、移除“联系团队”，此处直接使用最终呈现结果
export const navLinks = [
  { label: '产品', to: '/product' },
  { label: '新闻', to: '/news' },
  { label: '团队', to: '/about' },
  { label: '招聘', to: '/careers' }
]

export const footerGroups = [
  {
    title: '浏览',
    links: [
      { label: '产品', to: '/product' },
      { label: '新闻', to: '/news' },
      { label: '关于我们', to: '/about' }
    ]
  },
  {
    title: '公司',
    links: [
      { label: '招聘', to: '/careers' },
      { label: '联系团队', to: '/contact' },
      { label: '加入行业对话', to: '/contact?source=industry#contact-form' }
    ]
  },
  {
    title: '后续',
    links: [
      { label: '产品动态', to: '/product' },
      { label: '新闻更新', to: '/news' },
      { label: '团队成长', to: '/careers' }
    ]
  }
]
