<template>
  <v-container>
    <v-row justify="center">
      <v-card class="card" width="30%">
        <v-card-title class="card-title"
          ><v-icon>mdi-login</v-icon> LOGIN</v-card-title
        >
        <v-container class="form-container">
          <v-row justify="center">
            <v-text-field
              label="Correo"
              variant="outlined"
              width="50%"
              v-model="email"
              class="input"
            ></v-text-field
          ></v-row>
          <v-row justify="center"
            ><v-text-field
              label="Contraseña"
              variant="outlined"
              width="50%"
              v-model="password"
              class="input"
              type="password"
            ></v-text-field
          ></v-row>
          <v-row justify="center" class="button-row">
            <v-btn variant="outlined" @click="login()" color="#71A497">
              Ingresar
            </v-btn>
          </v-row>
        </v-container>
      </v-card>
    </v-row>
  </v-container>
</template>

<style>
.card {
  margin-top: 10rem;
  background-color: #e8f1e5 !important;
}

.card-title {
  margin-top: 0.5rem;
  color: #2d436e !important;
}
.form-container {
  margin-top: 1rem;
  padding-left: 2rem !important;
  padding-right: 2rem !important;
}

.input {
  color: #2d436e !important;
}

.button-row {
  margin-top: 1rem;
  margin-bottom: 0.2rem;
}
</style>

<script>
import router from "@/router";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  created() {},
  computed: {
    ...mapGetters("UserStore", ["getUser", "getStatus"]),
  },
  methods: {
    ...mapActions("UserStore", ["userLogin"]),
    async login() {
      try {
        const body = { email: this.email, pass: this.password };
        await this.userLogin(body);
        if (this.getStatus) {
          router.push("/stream");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
