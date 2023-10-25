import type { Speaker, SpeakerQuery } from '../types';
import { defineStore } from 'pinia'
import { normalizer } from '@/libs/normalizer'

export const useSpeakersStore = defineStore('speakersStore', {
  state: () => ({
    speakers: [] as Speaker[],
    filter: '',
    loaded: false
  }),

  getters: {
    count: (state) => state.speakers.length,

    filteredSpeakers: (state) : Speaker[] => {
      if (state.filter === '')
        return state.speakers;

      const normalizedFilter = normalizer(state.filter)
      return state.speakers.filter(speaker => {
        return normalizer(speaker.name).includes(normalizedFilter)
      })
    },

    countFiltered(): number | undefined {
      return this.filteredSpeakers.length
    }
  },

  actions: {
    async refresh() {
      const data = await fetch('/speakers.json')
      const json = await data.json() as SpeakerQuery
      this.speakers = json.pageProps.speakers
      this.loaded = true
    },
  }
})
