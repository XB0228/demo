import { mockArticles, mockCategories, mockSiteConfig } from './mockData'

/**
 * 前端 mock 数据访问层。
 *
 * 本仓库不包含后端服务，原 `/api/*` 请求全部由本地 mock 数据替代。
 * 保留与真实接口一致的异步调用方式，页面无需感知数据来源；
 * 后续接入后台时，只需把这里的实现替换为 fetch 请求。
 */

const MOCK_DELAY = 180

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const clone = (value) => JSON.parse(JSON.stringify(value))

async function resolveWith(value, delay = MOCK_DELAY) {
  await wait(delay)
  return clone(value)
}

export function fetchPublishedArticles(categoryId) {
  if (!categoryId) return resolveWith(mockArticles)
  const articles = mockArticles.filter(
    (article) => String(article.categoryId) === String(categoryId)
  )
  return resolveWith(articles)
}

export async function fetchArticle(id) {
  await wait(MOCK_DELAY)
  const article = mockArticles.find((item) => String(item.id) === String(id))
  if (!article) throw new Error('文章不存在')
  return clone(article)
}

export function fetchCategories() {
  return resolveWith(mockCategories)
}

export function fetchSiteConfig() {
  return resolveWith(mockSiteConfig)
}

/**
 * 提交「联系我们」咨询留言。
 * 演示环境不写入后台，短暂延迟后直接返回模拟的成功结果。
 */
export async function submitContact(data) {
  await wait(600)
  return {
    id: `mock-contact-${Date.now()}`,
    ...data,
    submittedAt: new Date().toISOString()
  }
}

/**
 * 访问统计上报。
 * 演示环境没有统计后台，这里保持为空实现，避免产生外部请求。
 */
export function trackVisit() {}
