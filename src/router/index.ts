import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/chapters",
    name: "chapters",
    component: () => import("../views/Chapters.vue"),
  },
  {
    path: "/sections",
    name: "sections",
    component: () => import("../views/Sections.vue"),
  },
  {
    path: "/section",
    name: "section",
    component: () => import("../views/Section.vue"),
  },
  {
    path: "/terms",
    name: "terms",
    component: () => import("../views/Terms.vue"),
  },
  {
    path: "/questions",
    name: "questions",
    component: () => import("../views/Questions.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
