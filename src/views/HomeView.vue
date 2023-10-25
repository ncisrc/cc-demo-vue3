<script setup lang="ts">
import { ref } from 'vue'

// 1st Example
const counter = ref(0)

// 2nd Example
const text = ref('Hello World')
</script>

<template>
  <p>
    Very Simple example :
    <button @click="counter++">Counter = {{ counter }}</button>
  </p>

  <p>
    Another very simple example : text is '{{ text }}' <br />
    <input v-model="text" />
  </p>
</template>
