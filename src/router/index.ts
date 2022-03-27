import { createRouter, createWebHashHistory } from 'vue-router';
import routes from "./routes";

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach(
  async (
    to,
    from,
    next
  ) => {
    // @ts-ignore
    document.title = to.meta.title || '通易框架'; 
    // 获取token
    const token = localStorage.getItem('token')?localStorage.getItem('token'):'123'
    if (token) {
      if (to.path === "/login") {
        next({ path: "/" });
      } else {
        next();
      }
    } else {
      if (to.meta.isOpen) {// 开放页面，无需验证        
        next();
      } else {
        next(`/login?redirect=${to.path}`);
      }
    }
  }
);

export default router
