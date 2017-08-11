import Vue from 'vue'
import App from './App.vue'

// 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 导入resource
import  VueResource from 'vue-resource';

Vue.use(VueResource);

// 导入mui
import '../statics/mui/css/mui.min.css'
import '../statics/mui/css/icons-extra.css'

// 导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 导入vue-preview

import VuePreview from 'vue-preview'
Vue.use(VuePreview);

// 导入子组件

import category from './component/category/category.vue';
import home from './component/home/home.vue';
import mine from './component/mine/mine.vue';
import shopcart from './component/shopcart/shopcart.vue';
import newsList from './component/news/newsList.vue';
import newsListDetail from './component/news/newsListDetail.vue';
import  photoList from './component/photoList/photoList.vue';
import  photoDetail from './component/photoList/photoInfo.vue';
import goodsList from './component/goodsList/goodsList.vue';
import goodsInfo from './component/goodsList/goodsInfo.vue';
import pictureAndText from './component/goodsList/pictureAndText.vue';
import goodscommont from './component/goodsList/goodsComment.vue';
// 导入自定义css
import '../statics/css/site.css';

// 导入moment 

import moment from 'moment'

// 定义一个全局日期转换过滤器

Vue.filter('dateFm',(input,Format)=>{

    const lastFomat = Format || 'YYYY-MM-DD HH:mm:ss'
    return moment(input).format(lastFomat);
})

// 定义路由
const router = new VueRouter({

  routes : [
    { path : '/' , redirect : '/home' },
    { path : '/home' , component : home },
    { path : '/message' , component : category },
    { path : '/settings' , component : mine },
    { path : '/shopcart' , component : shopcart },
    {path : '/news/newsList',component : newsList},
   {path:'/news/newsListDetail/:newsId',component:newsListDetail},
   {path : '/photo/photoList',component : photoList},
   {path : '/photo/photoinfo/:infoId',component : photoDetail},
   {path : '/goods/goodsList',component:goodsList},
   {path : '/goods/goodsinfo/:infoId',component:goodsInfo},
   {path : '/goods/pictureAndText',name : "pictureAndText",component:pictureAndText},
   {path : '/goods/goodscommont',component:goodscommont}
  ]
  
})
new Vue({
  el: '#app',
  router :router,
  render: h => h(App),
  data:{

    newBus: new Vue()
  }
})
