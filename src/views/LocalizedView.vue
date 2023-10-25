<script setup lang="ts">
import { ref } from "vue"
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const name = ref('World')
const counter = ref(0)
</script>
<template>
  <!-- Choix de la langue-->
  <select v-model="locale">
    <option value="fr">{{  $t('french') }}</option>
    <option value="en">{{  $t('english') }}</option>
  </select>

  <h1>{{ $t('helloWorld') }}</h1>
  <span>{{ $t('pageInformation') }}</span>

  <p>
    Your name : <input type="text" v-model="name" /><br />
    {{ $t('helloName', { name }) }}
  </p>

  <p>
    <button @click="counter++">
      {{ $t('nbClicks', counter) }}
    </button>
  </p>

</template>