import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Buttons from "../views/Buttons.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/buttons",
    name: "Buttons",
    component: Buttons,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/grid",
    name: "grid",
    component: () => import(/*WebpackChunkName: "about" */ "@/views/Grid.vue"),
  },
  {
    path: "/to-do",
    name: "to-do",
    component: () => import(/*WebpackChunkName: "to-do" */ "@/views/ToDo.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
