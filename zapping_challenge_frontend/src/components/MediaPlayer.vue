<template>
  <v-container>
    <v-row justify="center">
      <v-card class="card" width="40rem" height="40rem">
        <v-card-title class="card-title"> Reproductor de vídeo</v-card-title>
        <v-row justify="center" class="video-row">
          <video ref="videoPlayer" width="600" class="video-js"></video>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<style>
.card {
  margin-top: 10rem;
}

.video-row {
  margin-top: 3rem;
}

/* .vjs_video_3 {
  width: 10rem !important;
  height: 10rem !important;
} */
</style>

<script>
import { mapGetters, mapActions } from "vuex";
import videojs from "video.js";

export default {
  name: "VideoPlayer",
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      email: "",
      player: null,
      videokey: 0,
    };
  },
  created() {},
  computed: {
    ...mapGetters("UserStore", ["getUser", "getStatus"]),
  },
  methods: {
    ...mapActions("UserStore", ["userLogin"]),
    updateVideo() {
      this.videokey++;
    },
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.player.log("onPlayerReady", this);
    });
  },
  beforeUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>
