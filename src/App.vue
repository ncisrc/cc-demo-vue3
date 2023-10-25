<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="logo">
      <img src="./assets/logo.svg" alt="Vue 3 Logo" />
      Vue 3 Demo
    </div>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/speakers">Slots</RouterLink> |
      <RouterLink to="/vueuse">VueUse</RouterLink> |
      <RouterLink to="/locales">Localization</RouterLink> |
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>
<style lang="scss">
header {
  @apply h-8 p-4 w-full flex;
  div { @apply p-2 }
  nav { @apply flex-1 text-right }
  img { @apply inline-block h-8 mr-2 }
}
main {
  @apply mt-4 p-4;
}
</style>
