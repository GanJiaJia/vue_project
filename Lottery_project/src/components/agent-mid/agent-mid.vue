<!--代理中心-->
<template>
  <div class="agent-mid-content">
    <back title="代理中心" go-back="true"></back>
    <div class="user-info">
      <dl>
        <dt>
          <img v-if="user.userinfo.avatar" :src="user.userinfo.avatar" alt="">
          <img v-else src="../../images/personal1.png" alt="用户头像" />
        </dt>
        <dd>
          <div>
            <span>用户名：</span>
            <span>{{user.userinfo.username}}</span>
          </div>
          <div>
            <span>账户余额：</span>
            <span>{{user.userinfo.balance}}</span>
          </div>
          <div>
            <span>彩票返点：</span>
            <span>{{user.userinfo.return_ratio}}</span>
          </div>
        </dd>
      </dl>
    </div>
    <!--列表-->
    <div class="agent-list">
      <router-link tab="div" class="tab-item" to="/agent-ins">
        <dl>
            <dt>{{user.userinfo.is_trail?'成为代理':'代理说明'}}</dt>
            <dd><img src="../../images/my_more.png" alt="右箭头"/></dd>
        </dl>
      </router-link>
    </div>
     <!-- v-if="user.userinfo.is_trail" -->
    <div class="agent-list">
      <router-link tab="div" class="tab-item" to="/lower-account">
        <dl>
            <dt>下级开户</dt>
            <dd><img src="../../images/my_more.png" alt="右箭头"/></dd>
        </dl>
      </router-link>
    </div>
    <!-- v-if="user.userinfo.is_trail" -->
    <div class="agent-list" >
      <router-link tab="div" class="tab-item" to="/user-manage">
        <dl>
            <dt>用户管理</dt>
            <dd><img src="../../images/my_more.png" alt="右箭头"/></dd>
        </dl>
      </router-link>
    </div>
    <!-- v-if="user.userinfo.is_trail" -->
    <div class="agent-list" >
      <router-link tab="div" class="tab-item" to="/agent-commission">
        <dl>
            <dt>代理佣金</dt>
            <dd><img src="../../images/my_more.png" alt="右箭头"/></dd>
        </dl>
      </router-link>
    </div>
     <!-- v-if="user.userinfo.is_trail" -->
    <div class="agent-list" >
      <router-link tab="div" class="tab-item" to="/personal-reports">
        <dl>
            <dt>代理报表</dt>
            <dd><img src="../../images/my_more.png" alt="右箭头"/></dd>
        </dl>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import {mapState} from 'vuex'

  export default {
    components: {
      Back
    },
    data() {
      return {
        // username: this.user.userinfo.username,
        // balance: this.user.userinfo.balance,
        // avate:  this.user.userinfo.avatar,
        // return_ratio:this.user.userinfo.return_ratio,
        // is_trail: window.userMsg?window.userMsg.userinfo?window.userMsg.userinfo.is_trial?false:true:false:false,
        username: '',
        balance: '',
        avate:  '',
        return_ratio:'',
        is_trail: '',
      }
    },
    computed: mapState({user: state => state.user}),
    created() {
      /*if (!window.userMsg||!window.userMsg.token) {
        this.$router.push('/login')
      }*/
    },
    methods:{

      startFn(){
        let user = JSON.parse(sessionStorage.getItem('user'));
        this.username = user.userinfo.username;
        this.balance = user.userinfo.balance;
        this.return_ratio = user.userinfo.return_ratio;
        this.avate = user.userinfo.avate;
        this.is_trail = user.userinfo.is_trail;
      }
    },
    mounted(){
      this.startFn();
   }
  }
</script>

<style scoped lang="stylus">
 .agent-mid-content {
   width: 7.5rem;
   height: 13.34rem;
   overflow: hidden;
   background-color: #eee;
   color: #000;
   font-size: .3rem;
 }
 /*用户信息*/
 .user-info {
   display flex
   justify-content center
   align-items center
   position relative
   top .88rem
   padding .3rem 0
   margin-bottom .2rem
   background #fff
   dl {
     display flex
     align-items center
     dt {
       float left
       width 1.06rem
       height 1.06rem
       margin-right .15rem
       img {
         width 100%
         height 100%
       }
     }
     dd {
       float left
       div {
         margin-bottom .1rem
         &:last-child {
           margin-bottom 0
         }
       }
     }
   }
 }

 /*列表*/
 posloca {
   position relative
   top .88rem
 }
 .agent-list {
   @extend posloca
   background-color #fff
   padding 0.2rem
   border-bottom 1px solid #ddd
   dl {
     display flex
     justify-content space-between
     align-items center
     color #000
     dd {
       height .4rem
       img {
         height .32rem
         padding 2px
       }
     }
   }
 }
</style>
