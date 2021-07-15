import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: "/", redirect: "/orders" },
  {
    path: "/",
    component: () => import("../views/Dashboard.vue"),
    children: [
      {
        path: "orders",
        name: "orders",
        component: () => import("../pages/Orders.vue"),
      },
      {
        path: "dashboard",
        component: () => import("../pages/CommingSoon.vue"),
      },
      {
        path: "messages",
        component: () => import("../pages/CommingSoon.vue"),
      },
      {
        path: "gigs",
        component: () => import("../pages/CommingSoon.vue"),
      },
      {
        path: "analytics",
        component: () => import("../pages/CommingSoon.vue"),
      },
      {
        path: "earnings",
        component: () => import("../pages/CommingSoon.vue"),
      },
      {
        path: "*",
        component: () => import("../pages/Error404.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
