import Vue from 'vue'
import App from './App.vue'



// 导入axios

import axios from 'axios'
Vue.prototype.$axios = axios;

// 导入字体
import '../static/font-icon/style.css';


// 导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 导入基础样式
import '../static/css/base.css'

// 导入路由
import VueRouter from 'vue-router';
Vue.use(VueRouter)

// 定义路由

// 导入子组件
import findMusic from './component/findMusic/findMusic.vue';
import myMusic from './component/myMusic/myMusic.vue';
import friend from './component/friend/friend.vue';
import account from './component/account/account.vue';
import personalFM from './component/findMusic/personalFM.vue';
import everyDaySong from './component/findMusic/everyDaySong.vue';
import login from './component/login/login.vue';
import phoneLogin from './component/login/phoneLogin.vue';

const router = new VueRouter({

  routes: [{
      path: '/',
      redirect: '/login'
    },

    {
      path: '/findMusic',
      component: findMusic
    },
    {
      path: '/myMusic',
      component: myMusic
    },
    {
      path: '/friend',
      component: friend
    },
    {
      path: '/account',
      component: account
    },
    {
      path : '/personalFM',
      component :personalFM
    },
    {
      path: '/everyDaySong',
      component :everyDaySong
    },
    {
       path: '/login',
       component : login
    },
    {
      path: '/phoneLogin',
      component : phoneLogin
    }
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})