import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import axios from "axios";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
axios.defaults.baseURL= "http://localhost:8081/api";
Vue.prototype.$axios = axios
Vue.use(ElementUI);

Vue.config.productionTip = false;

// 钩子函数 to: 目标路由对象， from：自身路由对象，

router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth){
    if(store.state.user.username){
      next()
    }else{
      next({
        path: "/login",
        query: {
          // 保存目标路由对象的路径
          redirect: to.fullPath
        }
      })
    }
  }else{
    next()
  }
  
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
