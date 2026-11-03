<template>
  <main class="news-view">
    <section class="hero-detail">
      <div class="container">
        <span class="eyebrow">NEWS / INSIGHT</span>
        <h1>记录港口行业正在发生的变化</h1>
        <p class="lede">
          行业资讯、行业观察、产品动态与活动内容，汇集在 WIDEVANCE 的内容中心。
        </p>
      </div>
    </section>

    <section class="news-highlight" aria-labelledby="news-highlight-title">
      <div class="container">
        <h2 id="news-highlight-title" class="sr-only">重点新闻</h2>
        <div class="news-highlight-window" aria-label="重点新闻自动轮播">
          <div class="news-highlight-track" tabindex="0">
            <component
              :is="card.to ? 'RouterLink' : 'a'"
              v-for="(card, index) in highlights"
              :key="card.title"
              class="news-highlight-card"
              :class="cardClass(index)"
              :aria-hidden="String(activeIndex !== index)"
              :tabindex="activeIndex === index ? 0 : -1"
              v-bind="card.to ? { to: card.to } : { href: card.href, target: '_blank', rel: 'noopener noreferrer' }"
            >
              <img :src="card.image" :alt="card.alt" />
              <span>
                <span class="meta"
                  ><span class="meta-category">{{ card.category }}</span
                  ><span class="meta-date">{{ card.date }}</span></span
                >
                <strong>{{ card.title }}</strong>
              </span>
            </component>
          </div>
        </div>
        <div
          v-if="highlights.length > 1"
          class="news-carousel-dots"
          role="tablist"
          aria-label="选择重点新闻"
        >
          <button
            v-for="(card, index) in highlights"
            :key="`dot-${card.title}`"
            type="button"
            class="news-carousel-dot"
            :class="{ 'is-active': activeIndex === index }"
            role="tab"
            :aria-selected="String(activeIndex === index)"
            :aria-label="`显示第 ${index + 1} 条重点新闻`"
            @click="selectSlide(index)"
          ></button>
        </div>
      </div>
    </section>

    <section class="detail-main">
      <div class="container">
        <div
          class="news-filter"
          role="tablist"
          aria-label="新闻分类"
          style="margin-top: 8px"
        >
          <button
            v-for="item in filters"
            :key="item.value"
            class="news-filter-item"
            :class="{ active: currentFilter === item.value }"
            type="button"
            :data-filter="item.value"
            role="tab"
            :aria-selected="String(currentFilter === item.value)"
            @click="setFilter(item.value)"
          >
            {{ item.label }}
          </button>
        </div>
        <div class="news-list">
          <component
            :is="row.to ? 'RouterLink' : 'a'"
            v-for="row in newsList"
            :key="row.title"
            class="news-row"
            :data-category="row.category"
            :hidden="!matchesFilter(row)"
            v-bind="
              row.to
                ? { to: row.to }
                : { href: row.href, target: '_blank', rel: 'noopener noreferrer' }
            "
          >
            <img class="news-card-image" :src="row.image" :alt="row.alt" />
            <div class="news-card-body">
              <span class="meta"
                ><span class="meta-category">{{ row.categoryLabel }}</span
                ><span class="meta-date">{{ row.date }}</span></span
              >
              <h3>{{ row.title }}</h3>
              <p>{{ row.summary }}</p>
              <span class="read"
                >{{ row.action }} <span class="arrow" aria-hidden="true">↗</span></span
              >
            </div>
          </component>
        </div>
      </div>
    </section>

    <section class="band subscribe-band">
      <div class="container subscribe-layout">
        <div>
          <span class="eyebrow">STAY IN THE LOOP</span>
          <h2>订阅产品研发与行业新闻</h2>
          <p>通过邮件获取 WIDEVANCE 的产品进展与港航行业观察。</p>
        </div>
        <RouterLink class="button subscribe-cta" to="/contact?source=subscription#contact-form"
          >订阅资讯</RouterLink
        >
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { fetchPublishedArticles, fetchCategories } from '@/lib/api'

const highlights = [
  {
    category: '公司动态',
    date: '2026.09.10',
    title: '让码头，进入智能体时代',
    image: '/assets/agentic-tos-poster-zh.png',
    alt: 'Agentic TOS 海报',
    href: '/assets/agentic-tos-poster-zh.png'
  },
  {
    category: '公司动态',
    date: '2026.09.17',
    title: '今天，WIDEVANCE 正式确定了愿景与使命',
    image: '/assets/news-agentic-tos.jpg',
    alt: '集装箱码头的智能协同网络',
    to: '/news/vision-mission'
  }
]

const filters = [
  { value: 'all', label: '全部' },
  { value: 'company-news', label: '公司动态' },
  { value: 'news-info', label: '新闻资讯' },
  { value: 'industry-insight', label: '行业洞察' },
  { value: 'product-update', label: '产品动态' }
]

const fallbackNewsList = [
  {
    category: 'company-news',
    categoryLabel: '公司动态',
    date: '2026.09.17',
    title: '今天，WIDEVANCE正式确定了愿景与使命',
    summary:
      'WIDEVANCE 发布愿景与使命：以 Agentic TOS 推动海事运营走向更智能、更敏捷、更具韧性的未来。',
    action: '阅读文章',
    image: '/assets/news-agentic-tos.jpg',
    alt: '港口智能协同网络',
    to: '/news/vision-mission'
  },
  {
    category: 'company-news',
    categoryLabel: '公司动态',
    date: '2026.09.10',
    title: '让码头，进入智能体时代',
    summary: 'WIDEVANCE Agentic TOS 海报：以智能体重新想象码头运营的下一步。',
    action: '查看海报',
    image: '/assets/agentic-tos-poster-zh.png',
    alt: 'Agentic TOS 海报',
    href: '/assets/agentic-tos-poster-zh.png'
  }
]

const newsList = ref([...fallbackNewsList])

async function loadArticles() {
  try {
    const [articles, categories] = await Promise.all([
      fetchPublishedArticles(),
      fetchCategories().catch(() => [])
    ])
    const categoryMap = Object.fromEntries(categories.map((c) => [c.id, c]))
    newsList.value = articles.map((a) => {
      const category = a.categoryId != null ? categoryMap[a.categoryId] : null
      return {
        id: a.id,
        category: category ? category.code : 'news-info',
        categoryLabel: a.categoryName || (category ? category.name : '新闻资讯'),
        date: (a.publishedAt || '').slice(0, 10).replace(/-/g, '.'),
        title: a.title,
        summary: a.summary || '',
        action: '阅读文章',
        image: a.coverUrl || '/assets/news-agentic-tos.jpg',
        alt: a.title,
        to: `/news/article/${a.id}`
      }
    })
  } catch {
    newsList.value = [...fallbackNewsList]
  }
}

const currentFilter = ref('all')

const matchesFilter = (row) =>
  currentFilter.value === 'all' || row.category === currentFilter.value

const setFilter = (value) => {
  currentFilter.value = value
}

onMounted(loadArticles)

/* ---------- 重点新闻轮播 ---------- */
const activeIndex = ref(0)
const direction = ref('next')
let timerId = null
let reducedMotion = false

const cardClass = computed(() => (index) => {
  if (highlights.length < 2) return { 'is-active': true }
  if (index === activeIndex.value) return { 'is-active': true }
  const offset = (index - activeIndex.value + highlights.length) % highlights.length
  if (highlights.length === 2) {
    return direction.value === 'previous' ? { 'is-previous': true } : { 'is-next': true }
  }
  if (offset === 1) return { 'is-next': true }
  if (offset === highlights.length - 1) return { 'is-previous': true }
  return { 'is-hidden': true }
})

const stop = () => {
  if (timerId) window.clearInterval(timerId)
  timerId = null
}

const start = () => {
  stop()
  if (!reducedMotion && highlights.length > 1) {
    timerId = window.setInterval(() => setSlide(activeIndex.value + 1, 'next'), 3000)
  }
}

const setSlide = (nextIndex, nextDirection = 'next') => {
  const total = highlights.length
  if (!total) return
  const target = (nextIndex + total) % total
  direction.value = nextDirection === 'previous' ? 'previous' : 'next'
  activeIndex.value = target
}

const selectSlide = (index) => {
  if (index === activeIndex.value) setSlide(index + 1, 'next')
  else setSlide(index, index > activeIndex.value ? 'next' : 'previous')
  start()
}

const onVisibilityChange = () => {
  if (document.hidden) stop()
  else start()
}

onMounted(() => {
  reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  setSlide(0)
  start()
  document.addEventListener('visibilitychange', onVisibilityChange)
})

onBeforeUnmount(() => {
  stop()
  document.removeEventListener('visibilitychange', onVisibilityChange)
})
</script>

<style scoped>
@media (max-width: 820px) {
  .container {
    width: min(var(--max), calc(100% - 40px));
  }
}

.news-list {
  display: grid;
  gap: 0;
  border-top: 1px solid var(--line);
}

.news-row[hidden] {
  display: none;
}

.news-row {
  display: grid;
  grid-template-columns: 150px minmax(0, 1fr) 120px 24px;
  align-items: center;
  gap: 24px;
  padding: 25px 0;
  border-bottom: 1px solid var(--line);
  transition:
    padding 0.25s ease,
    background 0.25s ease;
}

.news-row:hover {
  padding-left: 18px;
  padding-right: 18px;
  background: var(--brand-soft);
}

.news-row .meta {
  margin: 0;
}

.news-row h3 {
  margin: 0;
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: -0.025em;
}

.news-row p {
  margin: 4px 0 0;
  color: var(--muted);
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.news-row .read {
  color: #007ea6;
  font-size: 13px;
  font-weight: 750;
  white-space: nowrap;
}

.news-row .arrow {
  color: #007ea6;
  font-size: 22px;
  text-align: right;
}

.news-filter {
  display: flex;
  gap: 8px;
  margin: 0 0 28px;
}

.news-filter button {
  appearance: none;
  padding: 8px 14px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: transparent;
  color: var(--muted);
  font: inherit;
  font-size: 13px;
  cursor: pointer;
}

.news-filter button:hover {
  border-color: var(--brand);
  color: #007ea6;
}

.news-filter button.active {
  border-color: var(--brand);
  background: var(--brand-soft);
  color: #007ea6;
  font-weight: 750;
}

@media (max-width: 820px) {
  .news-row {
    grid-template-columns: 110px minmax(0, 1fr) 22px;
    gap: 14px;
  }
  .news-row .read {
    display: none;
  }
  .news-row h3 {
    font-size: 19px;
  }
  .news-row p {
    font-size: 13px;
  }
}

@media (max-width: 560px) {
  .news-row {
    grid-template-columns: 1fr 22px;
    gap: 8px;
    padding: 18px 0;
  }
  .news-row .meta {
    grid-column: 1/-1;
  }
  .news-row p {
    white-space: normal;
  }
  .news-filter {
    overflow: auto;
    white-space: nowrap;
  }
  .news-filter button {
    flex: 0 0 auto;
  }
}

.subscribe-band {
  min-height: 0 !important;
  margin: 0 !important;
  padding: 28px 0 24px !important;
}

.subscribe-band .subscribe-layout {
  min-height: 0 !important;
}

.subscribe-layout {
  display: grid;
  grid-template-columns: 1fr minmax(320px, 0.82fr);
  align-items: center;
  gap: 56px;
}

.subscribe-layout h2 {
  margin: 10px 0 8px;
  font-size: clamp(30px, 3.2vw, 42px);
  line-height: 1.15;
}

.subscribe-layout p {
  margin: 0;
}

.subscribe-form {
  display: flex;
  gap: 10px;
  align-items: stretch;
}

.subscribe-form input {
  min-width: 0;
  flex: 1;
  height: 52px;
  padding: 0 16px;
  border: 1px solid rgba(8, 19, 31, 0.2);
  border-radius: 10px;
  color: #08131f;
  background: rgba(255, 255, 255, 0.82);
  font: inherit;
}

.subscribe-form button {
  min-width: 104px;
  border: 0;
  border-radius: 10px;
  padding: 0 20px;
  color: #fff;
  background: #08131f;
  font: inherit;
  font-weight: 750;
  cursor: pointer;
}

.subscribe-note {
  grid-column: 2;
  min-height: 20px;
  color: #12445b;
  font-size: 13px !important;
}

@media (max-width: 760px) {
  .subscribe-layout {
    grid-template-columns: 1fr;
    gap: 22px;
  }
  .subscribe-note {
    grid-column: 1;
  }
}

.subscribe-cta {
  justify-self: end;
  min-width: 148px;
  background: #08131f !important;
  color: #fff !important;
}
</style>
