<template>
  <SiteHeader />
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
  <SiteFooter />
</template>

<script setup>
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>
