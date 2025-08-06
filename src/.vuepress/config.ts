import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from 'vuepress/utils'

const __dirname = import.meta.dirname || getDirname(import.meta.url)


export default defineUserConfig({
  base: "gh-pages",

  lang: "en-US",
  title: "Docs Demo",
  description: "A docs demo for vuepress-theme-hope",

  theme,
  // Enable it with pwa
  // shouldPrefetch: false,

  plugins: [
    registerComponentsPlugin({
      // 配置项
      components: {
        DataTable: path.resolve(__dirname, './components/DataTable.vue'),
      },
    }),
  ],
});
