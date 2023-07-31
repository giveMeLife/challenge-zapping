<template>
  <div>
    <media-player :options="videoOptions" :key="i" />
  </div>
</template>

<script setup>
import MediaPlayer from "@/components/MediaPlayer.vue";
</script>
<script>
export default {
  data() {
    return {
      videoOptions: {
        autoplay: true,
        controls: false,
        sources: [
          {
            src: "http://streaming:10000/movie_segment.m3u8",
            type: "application/x-mpegURL",
          },
        ],
      },
      i: 0,
    };
  },
  created() {
    setInterval(() => {
      this.i = this.i + 1;
    }, 10000);
  },
};
</script>
