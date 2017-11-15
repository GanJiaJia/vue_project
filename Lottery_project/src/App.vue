<template>
  <div id="app">
    <!--<transition>-->
      <!--<keep-alive>-->
        <!--<router-view></router-view>-->
      <!--</keep-alive>-->
    <!--</transition>-->

    <transition name="slide-in" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="slide-in" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>


<script type="text/ecmascript-6">
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 750*100 + 'px'

  import {getAppInfo,GetData} from 'api/publicInterface'
  import {mapActions} from 'vuex'
  import {APP_INFO} from './store/user'
  import {requestOpt, alertip} from 'api/recommend'

  export default {
    data() {
      return {
        dataList: [],
        timer: null,
      }
    },
    mounted() {
      getAppInfo(res => {
        this.APP_INFO(res.data.data.config)
      })
      this.getData()
      this.timer = setInterval(() => {
        this.getData();
      },1000)

    },
    methods: {
      ...mapActions(['APP_INFO']),
      getData() {// 所有彩票列表集合
        requestOpt.reqnoGet('betting_list_v1?page=1&frequency=-1&is_hot=-1',res => {
          this.dataList = res.data.data.list
          let hotRes = [];// 热门
          let hignReq = [];// 高频
          let lowReq = [];// 低频
          let All = []; // 全部
          for(let i=0,len=this.dataList.length;i<len;i++) {
            if (this.dataList[i].is_hot === 1) {
              hotRes.push(this.dataList[i])
            }
            if (this.dataList[i].frequency === 0) {
              hignReq.push(this.dataList[i])
            }
            if (this.dataList[i].frequency === 1) {
              lowReq.push(this.dataList[i])
            }
          };
          window.hotRes = hotRes
          window.hignReq = hignReq
          window.lowReq = lowReq
          window.All = this.dataList
//          console.log(window.lowReq )
        })
      },
      //  分类  热门彩票
      getHotLot() {
        let arr = this.getData()
        let res = []
        for(let i=0,len=arr.length;i<len;i++) {
          if (arr[i].is_hot === 1) {
            res.push(arr[i].is_hot)
          }
        };
        return res
      }
    }

  }
</script>

<style>

  .slide-out-enter-active,
  .slide-out-leave-active,
  .slide-in-enter-active,
  .slide-in-leave-active {
    will-change: transform;
    transition: all 10ms;
    position: absolute;
  }
  .slide-out-enter {
    opacity: 0;
    transform: translateX(-100%);

  }
  .slide-out-leave-active {
    opacity: 0;
    transform: translateX(100%);

  }
  .slide-in-enter {
    opacity: 0;
    transform: translateX(100%);

  }
  .slide-in-leave-active {
    opacity: 0;
    transform: translateX(-100%);
  }
  #app {
    height: 100%;
    overflow: auto;
  }
</style>
