import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Experiences from "../views/Experiences.vue";
import EnglishVersion from "../views/EnglishVersion.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/english-version",
    name: "English Version",
    component: EnglishVersion,
  },
  {
    path: "/resume",
    name: "Experiences",
    component: Experiences,
  },
];

const router = createRouter({
  history: createWebHistory("/cv_mercier_stephane/"),
  routes,
});

export default router;
