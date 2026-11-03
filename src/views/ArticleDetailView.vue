<template>
  <main class="article">
    <article class="container">
      <RouterLink class="back" to="/news">← 返回新闻</RouterLink>

      <div v-if="loading" class="state">加载中…</div>
      <div v-else-if="error" class="state">文章加载失败，请稍后重试。</div>
      <template v-else>
        <div class="meta">{{ metaText }}</div>
        <h1>{{ article.title }}</h1>
        <img v-if="article.coverUrl" class="cover" :src="article.coverUrl" :alt="article.title" />
        <div class="prose markdown-body" v-html="renderedContent"></div>
      </template>
    </article>
  </main>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import { fetchArticle } from '@/lib/api'

const route = useRoute()

const article = ref({})
const loading = ref(true)
const error = ref(false)

const renderedContent = computed(() => {
  try {
    return marked.parse(article.value.contentMd || '')
  } catch {
    return ''
  }
})

const metaText = computed(() => {
  const parts = []
  if (article.value.categoryName) parts.push(article.value.categoryName)
  const date = article.value.publishedAt
  if (date) parts.push(String(date).slice(0, 10).replace(/-/g, '.'))
  return parts.join(' · ')
})

async function load(id) {
  loading.value = true
  error.value = false
  try {
    article.value = await fetchArticle(id)
    if (article.value.title) {
      document.title = `${article.value.title} · WIDEVANCE`
    }
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
}

onMounted(() => load(route.params.id))
watch(() => route.params.id, (id) => id && load(id))
</script>

<style scoped>
.container {
  width: min(900px, calc(100% - 48px));
  margin: 0 auto;
}

.article {
  padding: 88px 0 110px;
}

.meta {
  color: #007ea6;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.article h1 {
  max-width: 900px;
  margin: 18px 0 28px;
  font-size: clamp(32px, 3.2vw, 48px);
  line-height: 1.18;
  letter-spacing: -0.055em;
}

.cover {
  width: 100%;
  margin: 0 0 44px;
  border-radius: 16px;
  aspect-ratio: 16/8;
  object-fit: cover;
}

.prose {
  max-width: 720px;
  font-size: 18px;
  line-height: 1.9;
  color: #29455d;
}

.back {
  display: inline-flex;
  margin-bottom: 28px;
  color: #007ea6;
  font-weight: 750;
}

.state {
  padding: 60px 0;
  color: #86909c;
  text-align: center;
}

/* 让 Markdown 渲染结果与官网排版协调 */
.markdown-body :deep(h2) {
  margin: 42px 0 12px;
  color: #08131f;
  font-size: 28px;
  line-height: 1.2;
}

.markdown-body :deep(h3) {
  margin: 32px 0 10px;
  color: #08131f;
  font-size: 22px;
}

.markdown-body :deep(p) {
  margin: 0 0 16px;
}

.markdown-body :deep(img) {
  max-width: 100%;
  border-radius: 12px;
}

.markdown-body :deep(code) {
  background: #f2f4f7;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9em;
}

.markdown-body :deep(pre) {
  background: #0f1b2d;
  color: #e6edf3;
  padding: 16px;
  border-radius: 10px;
  overflow: auto;
}

.markdown-body :deep(pre code) {
  background: transparent;
  color: inherit;
  padding: 0;
}
</style>
