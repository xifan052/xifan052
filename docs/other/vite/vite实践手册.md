# Vite

## 一、Vite 是什么

[Vite](https://vitejs.cn/) 是 Vue 的作者尤雨溪开发的 Web 开发构建工具，它是一个基于浏览器原生 ES 模块导入的开发服务器，在开发环境下，利用浏览器去解析 import，在服务器端按需编译返回，完全跳过了打包这个概念，服务器随启随用。同时不仅对 Vue 文件提供了支持，还支持热更新，而且热更新的速度不会随着模块增多而变慢。在生产环境下使用 Rollup 打包。

Vite 具有以下特点：

- 快速的冷启动
- 即时热模块更新（HMR，Hot Module Replacement）
- 真正按需编译

## 二、搭建第一个 Vite 项目

### 1. 全局安装 vite

```bash
  npm install -g create-vite-app
```

### 2. 创建模板项目

```bash

  # 使用 NPM:
  npm init @vitejs/app project-name
  # 使用 Yarn:
  yarn create @vitejs/app project-name
```

### 3. 配置项目别名

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    open: true, // 自动打开项目
  },
  resolve: {
    alias: {
      // 如果报错__dirname找不到，需要安装node,执行yarn add @types/node --save-dev
      '@': path.resolve(__dirname, 'src'), // 配置项目别名
    },
  },
})
```

### 4. 添加 css 预处理器

安装完之后正常使用就可以了

```bash
npm i less less-loader --save-dev
```

### 5. 安装 vuex

```bash
  npm i vuex
  # 如果安装之后发现版本小于4.x，可执行
  npm i vuex@next
  # 安装最新版本
```

引入并配置 vuex

```js
// src/store/index.js
import { createStore } from 'vuex'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
})
```

src 下创建 store 文件夹，配置 vuex

```js
// src/store/index.js
import { createStore } from 'vuex'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
})
```

在 main.ts 中引入

```js
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

const app = createApp(App)
app.use(store)
app.mount('#app')
```

### 6. 安装 vue-router

```bash
  npm i vue-router
  # 如果安装之后发现版本小于4.x，可执行
  npm i vue-router@next
  # 安装最新版本
```

src 下创建 router 文件夹,定义路由

```js
// src/router/index.js
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
```

在 main.ts 中引入

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
```

使用 router

```js
import { useRouter } from 'vue-router'

const router = useRouter()
router.push({ path: '/' })
```

## 三、遇到的问题

### 1. 打开项目时包裹文件夹引发的问题

出现使用路径别名、template 下有多个根标签报错
产生问题的就是这种结构 👇👇👇

![ ](/xifan052/assets/vite/path-err.jpg)

然后嘛，重新右键项目文件夹用 vscode 打开就可以了

### 2. build 时 elementPlus 报错

修改 build 命令 为`vue-tsc --noEmit --skipLibCheck && vite build`([传送门](https://github.com/element-plus/element-plus/issues/1886))

### 3. build 之后静态资源 404

`vite.config.js`添加设置`base: './',`([传送门](https://blog.csdn.net/qq_17497931/article/details/109510796))

### 4. vite+ts 配置别名之后，引入文件提示找不到对应文件

需要在 tsconfig.json 里也配置别名([传送门](https://www.cnblogs.com/zhuxingqing/p/14878694.html))

```js
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "lib": ["esnext", "dom"],
    "baseUrl": "./",
    "paths":{
      "@": ["src"],
      "@/*": ["src/*"],
    }
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"]
}
```
