const routes = [
  {
    path: '/',
    component: () => import('layouts/layout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/index.vue')
      }
    ]
  },
  {
    path: '/novo',
    component: () => import('layouts/layout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/novo.vue')
      }
    ]
  },
  {
    path: '*',
    component: () => import('pages/404.vue')
  }
]

export default routes
