import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/login/index.vue'
import Home from '../views/home/Home.vue'

const router = createRouter({
    history: createWebHashHistory(),
    
    // routes对应的值为一个泛型数组（具体可点击进入内部进行查看）
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/login',
            component: Login,
            name: 'Login',
            meta: {
                Login: true
            }
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            meta: {
                Login: false
            },
            children: [
                {
                    path: '',
                    redirect: '/home/dashboard'
                },
                {
                    path: 'dashboard',
                    name: 'Dashboard',
                    component: () => import('../views/home/Dashboard.vue'),
                    meta: {
                        title: '系统首页'
                    }
                },
                {
                    path: 'field',
                    name: 'Field',
                    component:() => import('../views/home/Field.vue'),
                    meta: {
                        title: '字段悬浮'
                    }
                },
                {
                    path: 'goods',
                    name: 'Goods',
                    component: () => import('../views/home/Goods.vue')
                },
                {
                    path: 'exercise',
                    name: 'Exercise',
                    component: () => import('../views/home/Exercise.vue')
                },
                {
                    path: 'icon',
                    name: 'Icon',
                    component: () => import('../views/home/Icons.vue'),
                    meta: {
                        title: '自定义图标'
                    }
                },   
                {
                    path: 'i18n',
                    name: 'I18n',
                    component: () => import('../views/home/I18n.vue'),
                    meta: {
                        title: '国际化功能'
                    }
                },
                {
                    // 测试路由
                    path: 'test',
                    name: 'Test',
                    component: () => import('../views/home/Test.vue'),
                    meta: {
                        title: '测试'
                    }
                },
            ]
        }
    ]
})

// 路由导航守卫
// 当你的目的是非登录路由且当前没有 token的话不允许放行
router.beforeEach((to, from, next) => {
   if(!to.meta.Login && !localStorage.getItem('token')) {
        next('/login')
   }
   else next();    
})

export default router;
