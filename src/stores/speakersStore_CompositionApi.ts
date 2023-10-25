import type { Speaker, SpeakerQuery } from '../types';
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { normalizer } from '../libs/normalizer'

export const useSpeakersStore = defineStore('speakersStore', () => {
  // State
  const speakers = ref<Speaker[]>([])
  const filter = ref('')
  const loaded = ref(false)

  // Getters
  const count = computed(() => speakers.value.length)

  const filteredSpeakers = computed(() : Speaker[] => {
      if (filter.value === '') return speakers.value;
      const normalizedFilter = normalizer(filter.value)
      return speakers.value.filter(speaker => normalizer(speaker.name).includes(normalizedFilter))
  })

  const countFiltered = computed(() => filteredSpeakers.value.length)

  // Actions
  async function refresh() {
    const data = await fetch('/speakers.json')
    const json = await data.json() as SpeakerQuery
    speakers.value = json.pageProps.speakers
    loaded.value = true
  }

  // Return
  return {
    speakers, filter, loaded,
    count, filteredSpeakers, countFiltered,
    refresh
  }
})
