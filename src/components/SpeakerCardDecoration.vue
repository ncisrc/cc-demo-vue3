<script setup lang="ts">
const randomBgId = Math.floor(Math.random() * 12)
const randomStyle = `background:url('/animated_svg/bg_${randomBgId}.svg')`
</script>

<template>
  <div :style="randomStyle">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
div {
  @apply rounded p-4  bg-center  bg-cover
}
</style>
