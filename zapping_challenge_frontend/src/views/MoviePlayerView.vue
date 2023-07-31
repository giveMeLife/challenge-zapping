<template>
  <movie-player :options="videoOptions" :key="i" />
  <v-container class="form-container">
    <v-row justify="center">
      <v-card class="input-card" flat height="25rem" width="40rem">
        <v-text-field
          label="Link video"
          v-model="src"
          class="input"
          variant="underlined"
        ></v-text-field>
        <v-row justify="center">
          <v-btn color="#71A497" v-model="src" @click="changeVideo">
            Reproducir
          </v-btn>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<style>
.input {
  color: #71a497 !important;
}
.input-card {
  background-color: transparent;
}

.form-container {
  margin-top: 1rem;
  padding-left: 2rem !important;
  padding-right: 2rem !important;
}
</style>

<script setup>
import MoviePlayer from "@/components/MoviePlayer.vue";
</script>
<script>
export default {
  data() {
    return {
      src: "",
      videoOptions: {
        autoplay: true,
        controls: true,
        sources: [
          {
            src: "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",
            type: "application/x-mpegURL",
          },
        ],
      },
      i: 0,
    };
  },
  created() {},
  methods: {
    changeVideo() {
      this.videoOptions.sources[0].src = this.src;
      this.i += 1;
    },
  },
};
</script>
