<template>
  <v-app class="app">
    <app-bar />

    <app-views />
  </v-app>
</template>

<style>
.app {
}
</style>

<script setup>
import AppBar from "./AppBar.vue";
import AppViews from "./AppViews.vue";
</script>
