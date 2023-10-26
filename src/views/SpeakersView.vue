<script setup lang="ts">
import SpeakerCardDecoration from '@/components/SpeakerCardDecoration.vue';
import SpeakerCard from '@/components/SpeakerCard.vue';

import { useSpeakersStore } from '@/stores/speakersStore_CompositionApi';
const speakersStore = useSpeakersStore();
</script>

<template>
  <h1>Slot & Pinia</h1>

  <hr />

  <div v-show="!speakersStore.loaded">
    <button @click="speakersStore.refresh()"> Load Speakers </button>
  </div>

  <div v-show="speakersStore.loaded">
    <div class="top">
      <div>
        <b>CaenCamp Speakers</b>
        (
          <!-- {{ speakersStore.countFiltered }} /  -->
          {{ speakersStore.count }}
        )
      </div>
      <div>
        <input type="text" v-model="speakersStore.filter" placeholder="Filter by name" />
      </div>
    </div>

    <div class="speakers">
      <SpeakerCardDecoration v-for="speaker in speakersStore.filteredSpeakers" :key="speaker.name">
        <SpeakerCard :speaker="speaker" />
      </SpeakerCardDecoration>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.top {
  @apply bg-emerald-600 p-2 my-4 rounded flex;
  div { @apply flex-1 }
}
.speakers {
  @apply grid grid-flow-row auto-rows-max place-content-center grid-cols-2 gap-4;
}
</style>