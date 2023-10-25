<script setup lang="ts">
import { ref } from 'vue'

// 1st Example
const counter = ref(0)

// 2nd Example
const text = ref('Hello World')
</script>

<template>
  <h1>Home Component</h1>

  <hr />

  <p>
    Very simple reactivity example:<br />
    <button @click="counter++">Counter = {{ counter }}</button>
    <button class="mx-4" @click="counter=0">RAZ</button>
  </p>

  <hr />

  <p>
    Another very simple example:<br />
    <input v-model="text" />
  </p>
  <div class="bg-emerald-600 p-2 my-4 rounded">Your text : <b>{{ text }}</b></div>
</template>
