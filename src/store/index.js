import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        // 查看session里是否有key为user的session信息        JSON.parse：把json字符串转换为对象
        user: {
          username: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username
        }
      },
      mutations: {
        login (state, user) {
          state.user = user
          window.localStorage.setItem('user', JSON.stringify(user))
        }
      }
})