import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(window.__POWERED_BY_QIANKUN__ ? '/mana' : '/'),
  routes: [
    {
      path: "/",
      name: "首页",
      component: () => import("../views/Home.vue"),
      redirect: "/aside",
      children: [
        {
          path: "aside",
          name: "侧栏",
          component: () => import("../views/home/Aside.vue"),
          children: [
            {
              path: "app-one",
              component: () => import("../views/app/AppOne.vue"),
            },
            {
              path: "app-two",
              component: () => import("../views/app/AppTwo.vue"),
            },
          ],
        },
      ],
    },
  ],
});

export default router;
