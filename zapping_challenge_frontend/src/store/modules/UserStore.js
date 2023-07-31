import UserService from "@/service/UserService";
import decode from "jwt-decode";

const UserStore = {
  namespaced: true,
  state: {
    token: "",
    user: "",
  },
  getters: {
    getToken: (state) => state.token,
    getUser: (state) => state.user,
    getStatus: (state) => !!state.token,
  },
  actions: {
    userLogin: async ({ commit }, body) => {
      try {
        const response = await UserService.userLogin(body);
        commit("SET_USER", response);
      } catch (error) {
        commit("SET_USER", { token: "" });
        console.log(error);
      }
    },

    createAccount: async ({ commit }, body) => {
      try {
        const response = await UserService.createAccount(body);
        return response;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
  mutations: {
    SET_USER(state, body) {
      state.token = body.token;
      state.user = decode(body.token);
    },
  },
};

export default UserStore;
