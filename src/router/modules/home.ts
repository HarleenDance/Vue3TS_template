



import { RouteRecordRaw } from 'vue-router'
import MidRouterView from "@/components/MidRouterView.vue";


const routes: Array<RouteRecordRaw> = [
    {
    path: "/",
    name: "main",
    meta: {
      title: "首页",
      hideHeader: false,
    },
    component: () => import("@/views/index/index.vue"),
  },
]

export default routes
