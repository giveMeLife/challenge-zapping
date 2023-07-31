// Composables
import { createRouter, createWebHistory } from "vue-router";
import UserStore from "@/store/modules/UserStore";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/AppLayout.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/HomeView.vue"),
      },
      {
        path: "/login",
        name: "Login",
        component: () => import("@/views/LoginView.vue"),
      },
      {
        path: "/createaccount",
        name: "CreateAccount",
        component: () => import("@/views/CreateAccountView.vue"),
      },
      {
        path: "/stream",
        name: "Stream",
        component: () => import("@/views/MediaPlayerView.vue"),
        meta: { requireAuth: true },
      },
      {
        path: "/movieplayer",
        name: "MoviePlayer",
        component: () => import("@/views/MoviePlayerView.vue"),
        meta: { requireAuth: true },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const rutaProtegida = to.matched.some((record) => record.meta.requireAuth);
  if (rutaProtegida && UserStore.state.token === "") {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;
