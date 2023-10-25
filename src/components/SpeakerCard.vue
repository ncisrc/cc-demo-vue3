<script setup lang="ts">

import type { Speaker } from '@/types'
defineProps<{
  speaker: Speaker
}>()
</script>

<template>
  <div>
    {{ speaker.name }}
  </div>
</template>