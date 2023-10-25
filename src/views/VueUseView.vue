<script setup lang="ts">
import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet"

import { ref } from 'vue'
import { useGeolocation } from '@vueuse/core'

const { coords } = useGeolocation();
const mapLatLon    = ref([48.8534, 2.3488])
const markerLatLon = ref<number[] | null>(null)
const mapZoom      = ref(6)

function whereAmI() {
  const newPosition = [coords.value.latitude, coords.value.longitude]
  markerLatLon.value = newPosition
  mapLatLon.value    = newPosition

  // Leaflet patch
  setTimeout(() => { mapZoom.value = 10 }, 250);
}
</script>

<template>
  <button @click="whereAmI()">Where am I ?</button>
  <span v-if="markerLatLon" class="ml-4">
    You seems to be at [{{ markerLatLon[0] }},{{ markerLatLon[1] }}]
  </span>

  <div class="map">
    <LMap v-model:zoom="mapZoom" v-model:center="mapLatLon" :use-global-leaflet="false">
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></LTileLayer>
      <LMarker :lat-lng="markerLatLon" v-if="markerLatLon"></LMarker>
    </LMap>
  </div>
</template>

<style lang="scss" scoped>
.map {
  @apply w-full h-96 rounded shadow-xl overflow-hidden my-2;
}
</style>