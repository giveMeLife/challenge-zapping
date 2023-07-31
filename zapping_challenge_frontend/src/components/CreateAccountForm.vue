<template>
  <v-container>
    <v-row justify="center">
      <v-card class="card" width="30%">
        <v-card-title class="card-title"
          ><v-icon>mdi-account-plus</v-icon> Crear cuenta</v-card-title
        >
        <v-container class="form-container">
          <v-row justify="center">
            <v-text-field
              label="Nombre"
              variant="outlined"
              width="50%"
              v-model="name"
              class="input"
            ></v-text-field
          ></v-row>
          <v-row justify="center"
            ><v-text-field
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
            <v-btn
              variant="outlined"
              @click="createNewAccount()"
              color="#71A497"
            >
              Ingresar
            </v-btn>
          </v-row>
        </v-container>
      </v-card>
    </v-row>
    <v-dialog v-model="dialogOk" width="auto">
      <v-card class="dialog">
        <v-card-text class="dialog-text">
          Cuenta creada con éxito! :D
        </v-card-text>
        <v-card-actions>
          <v-btn color="#71A497" block @click="goToLogin()"
            >Iniciar sesión</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogError" width="auto">
      <v-card class="dialog">
        <v-card-text class="dialog-text">
          Ha ocurrido un error! D:
        </v-card-text>
        <v-card-actions>
          <v-btn color="#71A497" block @click="dialogError = false"
            >Cerrar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<style>
.dialog {
  background-color: #e8f1e5;
}
.dialog-text {
  color: #2d436e;
}
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
  margin-bottom: 1rem;
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
      name: "",
      dialogOk: false,
      dialogError: false,
    };
  },
  created() {},
  computed: {
    ...mapGetters("UserStore", ["getUser", "getStatus"]),
  },
  methods: {
    ...mapActions("UserStore", ["userLogin", "createAccount"]),
    async createNewAccount() {
      if (this.email === "" || this.password === "" || this.email === "") {
        this.dialogError = true;
      } else {
        try {
          console.log(this.password);
          const body = {
            email: this.email,
            pass: this.password,
            nombre: this.name,
            role: "USER",
          };
          console.log(body);
          const response = await this.createAccount(body);
          if (response) {
            this.dialogOk = true;
          }
        } catch (error) {
          console.log(error);
          this.dialogError = true;
        }
      }
    },
    goToLogin() {
      router.push("/login");
    },
  },
};
</script>
