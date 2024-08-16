# Vite で SSG するサンプル

## 環境構築

### Create Vite App

```bash
$ npm create vite-extra@latest
```

ref: https://github.com/bluwy/create-vite-extra

### tsx インストール

```bash
$ npm install --save-dev tsx
```

### prerender.ts 追加

▼ 参考: prerender.js
https://github.com/vitejs/vite-plugin-react/blob/main/playground/ssr-react/prerender.js

package.json に以下を追加

```json
"scripts": {
  "generate": "vite build --ssrManifest .vite/ssr-manifest.json --outDir dist/static && npm run build:server && tsx prerender"
}
```

## 参考

- https://ja.vitejs.dev/guide/ssr.html
- https://github.com/vitejs/vite-plugin-react
- https://github.com/vitejs/vite-plugin-react-swc

### SSR 用のライブラリ

[react]: https://img.shields.io/badge/-React-4ab2cf
[vue2]: https://img.shields.io/badge/-Vue%202-42b883
[vue3]: https://img.shields.io/badge/-Vue%203-42b883
[svelte]: https://img.shields.io/badge/-Svelte-db552a

- [Vike](https://github.com/vikejs/vike) - Like Nuxt/Next.js but as a do-one-thing-do-it-well plugin. ![react] ![vue3] ![vue2] ![svelte]
- [ssr](https://github.com/zhangyuang/ssr) - A Server Side Rendering framework combined with Webpack/Vite. ![react] ![vue3] ![vue2]
- [vavite](https://github.com/cyco130/vavite) - A tool for developing and building server-side applications with live reloading capabilities.
- [vue-ssr](https://github.com/bistroo/vue-ssr) - Minimalistic wrapper to develop and run SSR powered Vue apps. ![vue3]
- [vite-ssr-boost](https://github.com/Lomray-Software/vite-ssr-boost) - Server side rendering library for create awesome app based on `react-router`. ![react]
- [SSRx](https://github.com/marbemac/ssrx) - A thin layer on top of Vite to build modern SSR apps with a delightful DX.
- [Vinxi](https://github.com/nksaraf/vinxi) - The Full Stack JavaScript SDK. Allows adding SSR to a Vite app.

ref: https://github.com/vitejs/awesome-vite#ssr
