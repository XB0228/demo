<template>
  <div class="intro-loader" :class="{ 'is-exiting': exiting }" aria-hidden="true">
    <div class="intro-inner">
      <img src="/assets/logo-dark-transparent.png" alt="" />
      <span class="intro-line"></span>
      <span class="intro-label">Think Wide, Advance Beyond.</span>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, ref } from 'vue'

const exiting = ref(false)
const timer = window.setTimeout(() => {
  exiting.value = true
}, 1350)

onBeforeUnmount(() => window.clearTimeout(timer))
</script>
