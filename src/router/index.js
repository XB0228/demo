import {
  createRouter,
  createWebHistory
} from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import AboutView from '@/views/AboutView.vue'
import NewsView from '@/views/NewsView.vue'
import CareersView from '@/views/CareersView.vue'
import ContactView from '@/views/ContactView.vue'
import ArticleVisionView from '@/views/ArticleVisionView.vue'
import ArticleDetailView from '@/views/ArticleDetailView.vue'
import { trackVisit } from '@/lib/api'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'WIDEVANCE · 让港口运营，更早看见下一步',
      activeNav: null,
      englishHref: '../英文版官网/widevance官网原型-en.html'
    }
  },
  {
    path: '/product',
    name: 'product',
    component: ProductView,
    meta: {
      title: '产品 · WIDEVANCE',
      activeNav: '/product',
      englishHref: 'widevance-product-en.html'
    }
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView,
    meta: {
      title: '新闻 · WIDEVANCE',
      activeNav: '/news',
      englishHref: '../英文版官网/widevance-news-en.html'
    }
  },
  {
    path: '/news/vision-mission',
    name: 'article-vision',
    component: ArticleVisionView,
    meta: {
      title: '今天，WIDEVANCE正式确定了愿景与使命 · WIDEVANCE',
      activeNav: '/news',
      englishHref: '../英文版官网/widevance-article-vision-en.html'
    }
  },
  {
    path: '/news/article/:id',
    name: 'article-detail',
    component: ArticleDetailView,
    meta: {
      title: '新闻 · WIDEVANCE',
      activeNav: '/news'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      title: '团队 · WIDEVANCE',
      activeNav: '/about',
      englishHref: 'widevance-about-en.html'
    }
  },
  {
    path: '/careers',
    name: 'careers',
    component: CareersView,
    meta: {
      title: '招聘 · WIDEVANCE',
      activeNav: '/careers',
      englishHref: 'widevance-careers-en.html'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {
      title: '联系 WIDEVANCE · 维度万思',
      activeNav: null,
      englishHref: 'widevance-contact-en.html'
    }
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 88, behavior: 'smooth' }
    }
    return { top: 0, left: 0 }
  }
})

router.afterEach((to) => {
  if (to.meta?.title) document.title = to.meta.title
  // 访问统计上报
  trackVisit(to.path)
})

export default router
