

// layout
import Footer from "@/layout/footer/index.vue";
import Header from "@/layout/header/index.vue";
import common from '@/router/modules'

//#endregion

const routes = [
  // {
  //   path: "/",
  //   name: "main",
  //   meta: {
  //     title: "Redirect demo",
  //     hideHeader: true,
  //   },
  //   component: () => import("@/views/index/index.vue"),
  // },
  {
    path: "/test",
    name: "test",
    meta: {
      hideHeader: true,
    },
    component: () => import("@/views/test/index.vue"),
  },
  {
    path: "/",
    name: "headerMain",
    redirect: "/home",
    component: Header,
    children: [...common],
  },
  {
    path: "/redirect",
    name: "redirect",
    meta: {
      title: "Redirect demo",
      hideHeader: true,
      isOpen: true,
    },
    component: () => {},
  },
];

export default routes;
