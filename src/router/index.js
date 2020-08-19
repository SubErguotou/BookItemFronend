import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../components/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/index"
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: "Home",
    component: Home,
    // 重定向到子页面
    redirect: '/indexbody',
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import('../views/Appindex.vue'),
        redirect: '/indexbody',
        // meta: {
        //   // 标记是否需要session才能进入的页面
        //   requireAuth: true
        // },
        children: [
          {
            path: "/indexbody",
            name: "IndexBody",
            component: () => import("../components/appindex/Body.vue")
          }
        ]
      },
      {
        path: '/note',
        name: 'Note',
        component: ()=>import('../views/Note.vue')
      },
      {
        path: '/library',
        name: "Library",
        component: ()=>import("../views/Library.vue")
      }

    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
