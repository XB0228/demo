import { ref } from 'vue'
import { fetchSiteConfig } from '@/lib/api'

/**
 * 全站共享的站点配置（来自后台“站点配置”）。
 * 前端提供默认值兜底：接口不可用时官网文案不丢失。
 */
const defaults = {
  siteName: 'WIDEVANCE',
  siteSlogan: '让港口运营，更早看见下一步',
  contactEmail: 'contact@widevance.com',
  icp: '粤ICP备2026145161号',
  policeIcp: '粤公网安备44030002017746号',
  footerCopyright: '© 2026 WIDEVANCE. 版权所有。'
}

const config = ref({ ...defaults })

let promise = null

export function useSiteConfig() {
  return config
}

export function loadSiteConfig(force = false) {
  if (!force && promise) return promise
  promise = fetchSiteConfig()
    .then((data) => {
      // 后台留空的字段回落到前端默认值（如备案号），避免页脚信息丢失
      const merged = { ...defaults }
      Object.entries(data || {}).forEach(([key, value]) => {
        if (value !== null && value !== undefined && String(value).trim() !== '') {
          merged[key] = value
        }
      })
      config.value = merged
    })
    .catch(() => {
      /* 保留默认值 */
    })
  return promise
}

// 模块首次导入时即加载（fire-and-forget）
loadSiteConfig()
