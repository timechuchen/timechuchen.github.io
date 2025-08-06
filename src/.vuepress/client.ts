import { defineClientConfig } from '@vuepress/client';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'; // 引入 Element Plus 的 CSS 样式

export default defineClientConfig({
    enhance({ app }) {
        app.use(ElementPlus); // 全局注册 Element Plus
    },
});
