<script setup lang="ts">
import SpeakerCardDecoration from '@/components/SpeakerCardDecoration.vue';
import SpeakerCard from '@/components/SpeakerCard.vue';

import { useSpeakersStore } from '@/stores/speakersStore';
const speakersStore = useSpeakersStore();
</script>

<template>

  <span v-show="speakersStore.count == 0">
    Nobody here...
    <button @click="speakersStore.refresh()">Refresh</button>
  </span>

  <div v-show="speakersStore.count >0">
    Hello Speakers ! ({{ speakersStore.countFiltered }} / {{ speakersStore.count }})<br />
    <SpeakerCardDecoration v-for="speaker in speakersStore.speakers" :key="speaker.name">
      <SpeakerCard :speaker="speaker"></SpeakerCard>
    </SpeakerCardDecoration>

  </div>
</template>