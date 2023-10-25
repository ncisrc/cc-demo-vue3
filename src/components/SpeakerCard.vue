<script setup lang="ts">
import { ref } from 'vue'
import type { Speaker } from '@/types'

defineProps<{ speaker: Speaker }>()

const showBio = ref(false)
</script>

<template>
  <div class="card">

    <div class="name"
      @mouseenter="showBio = true"
      @mouseleave="showBio = false">
      {{ speaker.name }}
    </div>

    <div class="bio"
      v-show="showBio"
      @mouseenter="showBio = true"
      @mouseleave="showBio = false"
      v-html="speaker.descriptionHtml" />

  </div>
</template>

<style lang="scss" scoped>
.card {
  @apply w-full p-2 rounded shadow-xl grow bg-black bg-opacity-30;
  .name { @apply text-xl cursor-pointer }
  .bio { @apply absolute text-sm max-w-md overflow-auto text-emerald-300 bg-black bg-opacity-80 p-4 rounded }
}
</style>