import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'


import App from './App.vue'
import router from './router'

const app = createApp(App)

import localeEn from './locales/en.json'
import localeFr from './locales/fr.json'
const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'en',
  messages: {
    fr: localeFr,
    en: localeEn
  }
})

app.use(createPinia())
app.use(router)
app.use(i18n);

app.mount('#app')

