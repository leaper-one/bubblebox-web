import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HomePage.vue'),
    meta: {
      title: '泡泡树洞'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/SignInPage.vue'),
    meta: {
      title: '泡泡树洞-登录'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/SignUpPage.vue'),
    meta: {
      title: '泡泡树洞-注册'
    }
  },
  {
    path: '/admin',
    name: 'admin',
    redirect: '/admin/obs',
    component: () => import('../Layout/LayoutPage.vue'),
    children: [
      {
        path: '/admin/obs',
        name: 'obs',
        component: () => import('../views/ObsPage.vue'),
        beforeEnter: () => {
          // TODO: 获取登录信息
          const isAuth = false
          if (isAuth) {
            return true
          } else {
            return { name: 'login' }
          }
        },
        meta: {
          title: '泡泡树洞-OBS插件管理'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
