import { createStore } from "vuex";

import UserStore from "./modules/UserStore";

const store = createStore({
  /* options */
});

store.registerModule("UserStore", UserStore);

export default store;
