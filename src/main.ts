import { createApp } from 'vue'
import App from './App.vue'
import route from './router/router'
import { store } from './store/index'
import 'element-plus/lib/theme-chalk/index.css'
import './assets/css/icon.css'
// 自定义指令(全局注册)
import { focus } from "/@/directives/focus"

const app = createApp(App);
app.directive('focus', focus);

app
.use(route)
.use(store)
.mount('#app')
