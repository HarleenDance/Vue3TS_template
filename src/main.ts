import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';

// 初始化样式
import "@/assets/css/reset.css";
// 设置html根字体大小
import "@/assets/css/font_html.css";


//插件
import {setupVant} from '@/plugins'

const app = createApp(App);
setupVant(app)

app.use(router);

app.mount('#app');
