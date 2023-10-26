<script setup lang="ts">
import { ref } from "vue"
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const name = ref('World')
const counter = ref(0)
</script>
<template>
  <!-- Choix de la langue-->
  <div class="text-right mb-4">
    {{ $t('language') }} :
    <select v-model="locale">
      <option value="fr">{{  $t('french') }}</option>
      <option value="en">{{  $t('english') }}</option>
      <option value="ua">{{  $t('ukrainian') }}</option>
    </select>
  </div>


  <h1>{{ $t('helloWorld') }}</h1>


  <span>{{ $t('pageInformation') }}</span>

  <hr />
  <p>
    {{ $t('your_name') }} : <input type="text" v-model="name" /><br />
  </p>
  <div class="bg-emerald-600 p-2 my-4 rounded">
    {{ $t('helloName', { name }) }}
  </div>

  <hr />
  <p>
    <button @click="counter++">
      {{ $t('nbClicks', counter) }}
    </button>
    <button class="mx-4" @click="counter=0">RAZ</button>
  </p>

</template>