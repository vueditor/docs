import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Vueditor",
  description: "All editors based on Vue.js, other options",
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vueditor' }
    ],
    footer: {
      message: 'Released under the Apache-2.0 License.',
      copyright: 'Copyright © 2024-present Liting'
    },
    search: {
      provider: 'local'
    }
  },
  locales: {
    root: {
      label:'English',
      lang:'en-US'
    },
    zh: {
      label:'简体中文',
      lang:'zh-CN'
    }
  }
})
