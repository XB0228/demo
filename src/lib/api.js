const API_BASE = import.meta.env.VITE_API_BASE || ''

async function request(url, options = {}) {
  const res = await fetch(API_BASE + url, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options
  })
  if (!res.ok) {
    throw new Error(`请求失败(${res.status})`)
  }
  const body = await res.json()
  if (body && body.code !== 0) {
    throw new Error(body.message || '请求失败')
  }
  return body.data
}

export function fetchPublishedArticles(categoryId) {
  const query = categoryId ? `?categoryId=${encodeURIComponent(categoryId)}` : ''
  return request(`/api/public/articles${query}`)
}

export function fetchArticle(id) {
  return request(`/api/public/articles/${encodeURIComponent(id)}`)
}

export function fetchCategories() {
  return request('/api/public/categories')
}

export function fetchSiteConfig() {
  return request('/api/public/site-config')
}

/**
 * 提交「联系我们」咨询留言
 */
export function submitContact(data) {
  return request('/api/public/contact', {
    method: 'POST',
    body: JSON.stringify(data)
  })
}

/**
 * 访问统计上报（fire-and-forget，静默失败，不影响页面体验）
 */
export function trackVisit(pagePath, referer) {
  try {
    fetch(API_BASE + '/api/visits/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        pagePath,
        referer: referer || document.referrer || ''
      })
    }).catch(() => {})
  } catch {
    /* ignore */
  }
}
