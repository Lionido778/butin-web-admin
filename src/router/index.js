import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/LoginIndex.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../layout/LayoutIndex.vue'),
    redirect: '/users',
    children: [
      {
        path: 'users',
        name: 'users',
        component: () => import('@/views/users/UsersIndex.vue')
      },
      {
        path: 'categories',
        name: 'categories',
        component: () => import('@/views/categories/CategoriesIndex.vue')
      },
      {
        path: 'goods',
        name: 'goods',
        component: () => import('@/views/goods/GoodsIndex.vue')
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('@/views/orders/OrdersIndex.vue')
      },
      {
        path: 'params',
        name: 'params',
        component: () => import('@/views/params/ParamsIndex.vue')
      },
      {
        path: 'reports',
        name: 'reports',
        component: () => import('@/views/reports/ReportsIndex.vue')
      },
      {
        path: 'rights',
        name: 'rights',
        component: () => import('@/views/rights/RightsIndex.vue')
      },
      {
        path: 'roles',
        name: 'roles',
        component: () => import('@/views/roles/RolesIndex.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
