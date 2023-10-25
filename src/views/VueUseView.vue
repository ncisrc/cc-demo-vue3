<script setup lang="ts">
import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet"

import { ref } from 'vue'
import { useGeolocation } from '@vueuse/core'

const { coords } = useGeolocation();
const mapLatLon    = ref([48.8534, 2.3488])
const markerLatLon = ref<[number, number] | null>(null)
const mapZoom      = ref(6)

function whereAmI() {
  mapLatLon.value    = [coords.value.latitude, coords.value.longitude]
  markerLatLon.value = [coords.value.latitude, coords.value.longitude]
  mapZoom.value = 10;
}
</script>

<template>
  <button @click="whereAmI()">Where am I ?</button>
  <span v-if="markerLatLon">You are found at [{{ markerLatLon[0] }},{{ markerLatLon[1] }}]</span>

  <div style="height:600px; width:800px">
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