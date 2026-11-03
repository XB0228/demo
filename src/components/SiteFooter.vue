<template>
  <footer class="site-footer site-footer--shared">
    <div class="container footer-top">
      <div class="footer-brand">
        <RouterLink to="/" aria-label="WIDEVANCE 首页">
          <img src="/assets/logo-dark-transparent-trim.png" alt="WIDEVANCE 维度万思" />
        </RouterLink>
        <p>Think Wide, Advance Beyond.</p>
      </div>
      <div class="footer-links">
        <div v-for="group in footerGroups" :key="group.title">
          <h3>{{ group.title }}</h3>
          <RouterLink v-for="link in group.links" :key="link.label" :to="link.to"
            >{{ link.label }}</RouterLink
          >
        </div>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>{{ copyright }}</span>
      <div class="footer-filings">
        <a
          v-if="policeIcp"
          class="filing-link filing-link--police"
          :href="policeIcpHref"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img class="filing-icon" src="/assets/police-beian.png" alt="公安备案图标" />
          <span>{{ policeIcp }}</span>
        </a>
        <a
          v-if="icp"
          class="filing-link"
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noreferrer noopener"
          >{{ icp }}</a
        >
        <span v-if="!icp && !policeIcp">备案号：待备案</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { footerGroups } from '@/data/site'
import { useSiteConfig } from '@/composables/useSiteConfig'

const config = useSiteConfig()
const copyright = computed(
  () => config.value.footerCopyright || '© 2026 WIDEVANCE. 版权所有。'
)
const icp = computed(() => (config.value.icp || '').trim())
const policeIcp = computed(() => (config.value.policeIcp || '').trim())
// 公安备案号中提取数字编号，用于跳转到全国互联网安全管理服务平台
const policeIcpHref = computed(() => {
  const code = policeIcp.value.replace(/\D/g, '')
  return code
    ? `https://beian.mps.gov.cn/#/query/webSearch?code=${code}`
    : 'https://beian.mps.gov.cn/'
})
</script>
