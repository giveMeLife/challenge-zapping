<template>
  <v-app-bar flat class="app-bar">
    <template v-slot:prepend>
      <div><v-icon size="60" color="#A3D2BE">mdi-video-wireless</v-icon></div>
    </template>
    <v-app-bar-title>
      <div class="title-text">VideoAPP</div>
    </v-app-bar-title>
    <v-spacer></v-spacer>

    <v-btn icon @click="changePage('/')">
      <v-icon color="#F2F5F7">mdi-home</v-icon>
    </v-btn>
    <v-btn v-if="getStatus" icon @click="changePage('/movieplayer')">
      <v-icon color="#F2F5F7">mdi-filmstrip</v-icon>
    </v-btn>
    <v-btn v-if="getStatus" icon @click="changePage('/stream')">
      <v-icon color="#F2F5F7">mdi-video-box</v-icon>
    </v-btn>
    <v-btn v-if="!getStatus" icon @click="changePage('/createaccount')">
      <v-icon color="#F2F5F7">mdi-account-plus</v-icon>
    </v-btn>
    <v-btn v-if="!getStatus" icon @click="changePage('/login')">
      <v-icon color="#F2F5F7">mdi-login</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<style>
.app-bar {
  background-color: transparent !important;
  padding: 1rem;
  padding-left: 2rem;
  padding-right: 2rem !important;
}

.image {
  width: 3rem;
}
.title-text {
  color: #f2f5f7;
  margin-top: 1rem;
}
</style>
<script>
import router from "@/router";

import logo from "@/assets/logo_video.png";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      logovideo: logo,
    };
  },
  created() {},
  computed: {
    ...mapGetters("UserStore", ["getUser", "getStatus"]),
  },
  methods: {
    changePage(path) {
      router.push(path);
    },
  },
};
</script>
