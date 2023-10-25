import type { Speaker, SpeakerQuery } from '../types';
import { defineStore } from 'pinia'

export const useSpeakersStore = defineStore('speakersStore', {
  state: () => ({
    speakers: [] as Speaker[],
    filter: '',
  }),

  getters: {
    count: (state) => state.speakers.length,

    countFiltered: (getters) => getters.filteredSpeakers.length,

    filteredSpeakers: (state) => {
      if (state.filter === '')
        return state.speakers;

      const normalizedFilter = state.filter.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

      return state.speakers.filter(speaker => {
        const normalizedName = speaker.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return normalizedName.includes(normalizedFilter)
      })
    }
  },

  actions: {
    async refresh() {
      const data = await fetch('/speakers.json')
      const json = await data.json() as SpeakerQuery;
      this.speakers = json.pageProps.speakers
    },
  }
})
