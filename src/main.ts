import { createApp } from 'vue'
import App from './App.vue'
import route from './router/router'
import { store } from './store/index'
import 'element-plus/lib/theme-chalk/index.css'
import './assets/css/icon.css'
// 自定义指令(全局注册)
import { focus } from "/@/directives/focus"
// 配置国际化
import installI18n from './plugins/createI18n'

const app = createApp(App);
app.directive('focus', focus);

// 开启vue devtools


installI18n(app);


app
.use(route)
.use(store)
.mount('#app')
