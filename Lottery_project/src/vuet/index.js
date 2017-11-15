import Vue from 'vue'
import Vuet from 'vuet'

Vue.use(Vuet)

const { fetch } = window

export  default new Vuet({
  data() {
    return {}
  },
  modules: {
    cnode: { // 定义模块名称
      list: { // 这里可以随便起个名称
        data () { // 定义这个数据的基本字段
          return {
            list: []
          }
        },
        routeWatch: 'query', // route插件的配置，如果有多个条件的话，可以设置一个数组
        fetch () { // 配置请求的方法，必须return一个Promise
          const search = this.app.$route.fullPath.split('?')[1] || ''
          return fetch(`https://cnodejs.org/api/v1/topics?${search}`)
            .then(response => response.json())
            .then((res) => {
              return { list: res.data }
            })
        }
      },
      detail: { // 这里是详情，和列表页面同理
        data () {
          return {
            id: '',
            author_id: '',
            tab: '',
            content: '',
            title: '',
            last_reply_at: '',
            good: false,
            top: false,
            reply_count: 0,
            visit_count: 0,
            create_at: '',
            author: {
              loginname: '',
              avatar_url: ''
            },
            replies: [],
            is_collect: false
          }
        },
        routeWatch: 'params.id',
        fetch () {
          return fetch(`https://cnodejs.org/api/v1/topic/${this.app.$route.params.id}`)
            .then(response => response.json())
            .then((res) => {
              return res.data
            })
        }
      }
    }
  }
})
