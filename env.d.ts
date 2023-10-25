/// <reference types="vite/client" />

declare module '@vue-leaflet/vue-leaflet' {
  import type { DefineComponent } from 'vue';
  export const LMap: DefineComponent;
  export const LIcon: DefineComponent;
  export const LTileLayer: DefineComponent;
  export const LMarker: DefineComponent;
}