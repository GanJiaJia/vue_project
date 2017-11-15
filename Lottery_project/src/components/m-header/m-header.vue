<template>
  <div id="m-header">
    <ul>
      <li class="user-n">
        <router-link  class="header-item1" to="/login" v-if="status">
          <span class="tab-link">登录/注册</span>
        </router-link>
        <router-link  class="header-item1" to="/personals" v-else>
          <span class="tab-link"><Icon type="person" size="16"/> {{user.userinfo.username}}</span>
        </router-link>
      </li>
      <li class="title">
        <span class="header-item2">彩票</span>
      </li>
      <li class="register">
        <router-link tag="div" class="header-item3" to="/tolottery">
          <span class="tab-link">开奖</span>
        </router-link>
        <!--<router-link tag="div" class="header-item3" to="/recharge-type">-->
          <span class="tab-link" @click="toRecharge">充值</span>
        <!--</router-link>-->
      </li>
    </ul>


  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import {USER_SIGNIN} from '../../store/user'

  export default {
    data() {
      return {
        status: true
      }
    },
    computed: {
      ...mapState(['user'])
    },
    mounted() {
      if (this.user.token) {
        this.status = false;
      }
    },
    methods: {
      toRecharge() {
        this.$router.push('/recharge-type');
        this.$route.meta.keepAlive = false;
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  #m-header{
    width :7.5rem;
    height :0.88rem;
    background : #ff3a3b;
    font-size :0.32rem;
    display :block;
    position fixed
    z-index 9999
  }
  #m-header ul li{
    float left;
    height 0.88rem;
    text-align center
    line-height :0.88rem;
  }
  .user-n{
    width 1.5rem
    position relative
    left 0.1rem
  }
  .title{
    width 4.5rem
  }
  .register{
    width 1.5rem
    position relative
    right  0.1rem
  }
  .register span{
    display block
    width 0.75rem
    height 0.88rem
    float left
  }

  .icon-user{
    display block
    width  0.32rem
    height 0.32rem
    background  gold
    float left
  }
  #m-header ul li span{
    color #ffffff;
    font-size 0.24rem
  }
  #m-header ul li.title span{
    color #ffffff;
    font-size 0.32rem
  }
</style>
