import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Index.vue'),
      },
      {
        path: '/room',
        component: () => import('../views/Room.vue'),
      },
      {
        path: '/order',
        component: () => import('../views/Order.vue'),
      },
      {
        path: '/finish',
        component: () => import('../views/Finish.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
