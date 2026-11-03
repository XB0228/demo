import { onBeforeUnmount, onMounted } from 'vue'

/**
 * 进入视口时给 .reveal / .section-head 增加 .is-visible（离开视口时移除，与原站一致）
 */
export function useReveal(scopeRef, selector = '.reveal, .section-head') {
  let observer = null

  onMounted(() => {
    const root = scopeRef?.value
    if (!root) return
    const items = Array.from(root.querySelectorAll(selector))

    if (typeof IntersectionObserver === 'undefined') {
      items.forEach((item) => item.classList.add('is-visible'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting)
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    )
    items.forEach((item) => observer.observe(item))
  })

  onBeforeUnmount(() => observer?.disconnect())
}

/**
 * 为 [data-scroll-float] 元素写入 --scroll-float 位移变量
 */
export function useScrollFloat(scopeRef) {
  let frame = null
  let items = []

  const update = () => {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight
    items.forEach((item) => {
      const rect = item.getBoundingClientRect()
      if (rect.bottom < -80 || rect.top > viewportHeight + 80) return
      const centerOffset =
        (viewportHeight / 2 - (rect.top + rect.height / 2)) / viewportHeight
      item.style.setProperty('--scroll-float', (centerOffset * 42).toFixed(2) + 'px')
    })
    frame = null
  }

  const request = () => {
    if (frame === null) frame = window.requestAnimationFrame(update)
  }

  onMounted(() => {
    const root = scopeRef?.value
    if (!root) return
    items = Array.from(root.querySelectorAll('[data-scroll-float]'))
    window.addEventListener('scroll', request, { passive: true })
    window.addEventListener('resize', request)
    request()
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', request)
    window.removeEventListener('resize', request)
    if (frame !== null) window.cancelAnimationFrame(frame)
    frame = null
  })
}
