<template>
  <header class="site-header" :class="{ 'is-scrolled': isScrolled }">
    <div class="container nav-shell">
      <RouterLink class="brand brand-lockup" to="/" aria-label="WIDEVANCE 首页">
        <img
          src="/assets/logo-light-transparent-trim.png"
          alt="WIDEVANCE 维度万思"
        />
      </RouterLink>

      <div class="nav-right">
        <nav class="primary-nav" aria-label="主导航">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            :class="{ active: activeNav === link.to }"
            :aria-current="activeNav === link.to ? 'page' : undefined"
            >{{ link.label }}</RouterLink
          >
        </nav>

        <div class="nav-actions">
          <div class="language-menu" :class="{ 'is-open': languageOpen }">
            <button
              class="language-trigger"
              type="button"
              aria-label="选择语言"
              :aria-expanded="String(languageOpen)"
              @click.stop="languageOpen = !languageOpen"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="8.5"></circle>
                <path
                  d="M3.5 12h17M12 3.5c2.2 2.35 3.3 5.18 3.3 8.5S14.2 18.15 12 20.5C9.8 18.15 8.7 15.32 8.7 12S9.8 5.85 12 3.5Z"
                ></path>
              </svg>
            </button>
            <div class="language-options">
              <span class="language-current">中文</span>
              <a :href="englishHref" lang="en">English</a>
            </div>
          </div>

          <t-button class="button button-primary" theme="primary" @click="goContact"
            >联系我们</t-button
          >
        </div>
      </div>

      <button
        class="menu-toggle"
        type="button"
        :aria-label="menuOpen ? '关闭菜单' : '打开菜单'"
        :aria-expanded="String(menuOpen)"
        aria-controls="mobile-nav"
        @click="menuOpen = !menuOpen"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          aria-hidden="true"
        >
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>
    </div>

    <nav id="mobile-nav" class="mobile-nav" aria-label="移动端导航">
      <RouterLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        :class="{ active: activeNav === link.to }"
        :aria-current="activeNav === link.to ? 'page' : undefined"
        @click="closeMenu"
        >{{ link.label }}</RouterLink
      >
      <a class="language-switch" :href="englishHref" lang="en">EN</a>
      <t-button class="button button-primary" theme="primary" @click="goContact"
        >联系我们</t-button
      >
    </nav>
  </header>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { navLinks } from '@/data/site'

const route = useRoute()
const router = useRouter()

const isScrolled = ref(false)
const menuOpen = ref(false)
const languageOpen = ref(false)

const activeNav = computed(() => route.meta?.activeNav ?? null)
const englishHref = computed(() => route.meta?.englishHref ?? '#')

const onScroll = () => {
  isScrolled.value = window.scrollY > 72
}

const closeLanguage = () => {
  languageOpen.value = false
}

const closeMenu = () => {
  menuOpen.value = false
}

const goContact = () => {
  menuOpen.value = false
  languageOpen.value = false
  router.push('/contact')
}

watch(menuOpen, (open) => {
  document.body.classList.toggle('menu-open', open)
})

watch(
  () => route.fullPath,
  () => {
    closeMenu()
    closeLanguage()
  }
)

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', closeLanguage)
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLanguage()
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('click', closeLanguage)
  document.body.classList.remove('menu-open')
})
</script>
