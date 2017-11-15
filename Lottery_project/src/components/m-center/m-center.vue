<template>
  <div class="center">
    <!--头部-->
    <div class="center-head">
      <ul>
        <li class="center-head1"></li>
        <li class="center-head2">用户中心</li>
      <router-link tag="div" class="tab-item" to="/activites">
        <li class="center-head3">
          <img class="center-head-icon" src="../../images/center-icon.png">
        </li>
      </router-link>
      </ul>
    </div>
    <!--登录页面-->
    <div class="center-content">
      <div class="center-login">
        <!--<router-link tag="div" class="tab-item" to="/personals">-->
          <dl @click="to">
            <dt class="my-log-iocn">
              <img  :src="user.userinfo.avatar" alt="" v-if="user.userinfo.avatar">
              <img  src="../../images/personal1.png" alt="" v-else>
            </dt>
            <dd class="center-login1">登录/注册</dd>
            <dd class="center-login2">
              <dl>
                <dt class="users-name" id="users-name">{{user.userinfo.username}}</dt>
                <dd class="users-money"><img src="../../images/money.png" alt=""><span>{{user.userinfo.balance}}</span></dd>
                <!--<dd class="refresh"><img src="../../images/shuaxin.png" alt="" @click="refreshToken"></dd>-->
              </dl>
            </dd>
          </dl>
        <!--</router-link>-->
      </div>
      <div class="center-refresh" @click="refreshToken">
        <img src="../../images/shuaxin.png" alt="">
      </div>
      <!--充值提现-->
      <div class="center-recharge">
        <ul>
          <!--<router-link tag="div" class="tab-item" to="/recharge-type">-->
          <div @click="toRecharge">
            <li class="center-recharge1">
              <img class="recharge-icon" src="../../images/Recharge@2x.png">
              充值
            </li>
          </div>
          <!--</router-link>-->
          <!--<router-link tag="div" class="tab-item" to="/b-card">-->
          <div @click="toWithdraw">
            <li class="center-recharge2">
              <img class="recharge-icon" src="../../images/Withdrawals@2x.png">
              提现
            </li>
          </div>
          <!--</router-link>-->
        </ul>
      </div>
      <!--信息明细-->
      <div class="center-list-content">
        <router-link tag="div" class="tab-item" to="/betting">
        <dl>
          <dt class="center-list-icon1"><img src="../../images/Record@2x.png" alt="投注记录"></dt>
          <dd class="center-list1">投注记录</dd>
          <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      </router-link>
        <router-link tag="div" class="tab-item" to="/winning">
          <dl>
            <dt class="center-list-icon1"><img src="../../images/Winning@2x.png" alt="中奖记录"></dt>
            <dd class="center-list1">中奖记录</dd>
            <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
          </dl>
        </router-link>
        <router-link tag="div" class="tab-item" to="/a-account/0">
          <dl>
            <dt class="center-list-icon1"><img src="../../images/account@2x.png" alt="账户明细"></dt>
            <dd class="center-list1">账户明细</dd>
            <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
          </dl>
        </router-link>
        <router-link tag="div" class="tab-item" to="/recharge">
          <dl>
            <dt class="center-list-icon1"><img src="../../images/recharge_Record@2x.png" alt="充值记录"></dt>
            <dd class="center-list1">充值记录</dd>
            <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
          </dl>
        </router-link>
        <router-link tag="div" class="tab-item" to="/withdrawals">
          <dl>
            <dt class="center-list-icon1"><img src="../../images/drawing@2x.png" alt="提款记录"></dt>
            <dd class="center-list1">提款记录</dd>
            <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
          </dl>
        </router-link>
        <router-link tag="div" class="tab-item" to="/personals">
          <dl>
            <dt class="center-list-icon1"><img src="../../images/Personal_information@2x.png" alt="个人信息"></dt>
            <dd class="center-list1">个人信息</dd>
            <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
          </dl>
        </router-link>
        <!--<router-link tag="div" class="tab-item" to="/agent-mid">-->
        <div @click="toAgent">
          <dl>
            <dt class="center-list-icon1"><img src="../../images/Record@2x.png" alt="代理中心"></dt>
            <dd class="center-list1">代理中心</dd>
            <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
          </dl>
        </div>
        <!--</router-link>-->
        <router-link tag="div" class="tab-item" to="/more">
          <dl>
            <dt class="center-list-icon1"><img src="../../images/set@2x.png" alt="更多设置"></dt>
            <dd class="center-list1">更多设置</dd>
            <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
          </dl>
        </router-link>
      </div>
    </div>
    <tab></tab>
  </div>
</template>


<script type="text/ecmascript-6">
  import MHeader from '@/components/m-header/m-header'
  import Tab from '@/components/tab/tab'
  import {alertip, requestOpt, mt_loading_open, mt_loading_close} from 'api/recommend'

  import {mapState, mapActions} from 'vuex'

  export default {
    components: {
      MHeader,
      Tab
    },
    data() {
      return {
        /*username: this.user.userinfo.username,
        balance: this.user.userinfo.balance,
        avate:  this.user.userinfo.avatar,
        is_trail: this.user.userinfo.is_trial?false:true*/
      }
    },
    created() {
      mt_loading_open();
      setTimeout(() => {
        mt_loading_close()
      },300)
    },
    beforeRouteLeave(to, from, next) {
      if (to.path === '/recharge-type') {
        to.meta.keepAlive = false;
      } else if (to.path === '/betting') {
        to.meta.keepAlive = false;
      }
      next()
    },
    computed: mapState({user: state => state.user}),
    methods: {
      refreshToken() { // 刷新令牌
        requestOpt.reqPutNouser('token', this.user.token, res => {
          if (res.data.token) {
            this.user.token = res.data.token;
            console.log(res.data.token)
            alertip('刷新成功')
          } else {
            alertip(res.data.msg)
            setTimeout(() => {
              this.$router.push('/login')
            }, 300)
          }

        }, err => {
          alertip(err)
        })
      },
      to() {
        this.$router.push('/personals')
      },
      toRecharge() {
        if (!this.user.userinfo.is_trial) {
          this.$router.push('/recharge-type')
//          this.$route.meta.keepAlive = false;
        } else {
          alertip('试玩账号不能进行充值操作！')
        }
      },
      toWithdraw() {
        if (!this.user.userinfo.is_trial) {
          if (this.user.userinfo.bankcard || this.user.of_card) {
            this.$router.push('/b-withdraw')
          } else {
            this.$router.push('/b-card')
          }
        } else {
          alertip('试玩账号不能进行提现操作！')
        }
      },
      toAgent() {
        if (!this.user.userinfo.is_trial) {
          this.$router.push('/agent-mid')
        } else {
          alertip('试玩用户不能查看代理中心！')
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .center{
    width: 7.5rem;
    // height: 13.34rem;
    height: 100%;
    display: block;
    background: #ffffff;
  }
  .center-head{
    width: 7.5rem;
    height: 0.88rem;
    display: block;
    margin: auto;
    background :#ff3a3b;
  }
  .center-head ul{
    width: 6.9rem;
    height: 0.88rem;
    display: block;
    margin: auto;
    line-height: 0.88rem;
  }
  .center-head ul li{
    float: left;
    height: 0.88rem;
    display: block;
  }
  .center-head1{
    width: 1.5rem
  }
  .center-head2{
    width :3.8rem;
    text-align: center;
    font-size : 0.32rem;
    font-weight :normal;
    color: #ffffff;
  }
  .center-head3{
    width: 1.5rem;
    text-align: right;
  }
  .center-head-icon{
    display: inline-block;
    width: 0.46rem;
    height: 0.42rem;
    position: relative;
    top: 0.1rem;
  }
  /*登录用户*/
  .center-content{
    width: 7.5rem;
    background: #eeeeee;
    height: 12rem;
    display: block;
  }
.center-login{
  position: relative;
  width: 7.5rem;
  height: 1.3rem;
  background: #ffffff;
  display: block;
  margin-bottom: 0.2rem;
}
  .center-login dl{
     width: 6.9rem;
     height: 1.3rem;
     display: block;
     margin: auto;
   }
  .center-login dl dt{
      width: 1.1rem;
      height: 1.3rem;
      display: block;
      margin: auto;
      float: left;
    }
  .center-login dl dd.center-login1{
    width: 5.8rem;
    height: 1.3rem;
    margin: auto;
    float: left;
    font-size: 0.32rem;
    color: #333333;
    line-height: 1.3rem;
    text-align: left;
    display: none;
  }
  .center-login dl dd.center-login2{
    width: 5.8rem;
    height: 1.3rem;
    display: block;
    margin: auto;
    float: left;
    font-size: 0.32rem;
    color: #333333;
    line-height: 1.3rem;
    text-align: left;
  }
  .center-login2 dl{
    width: 5.8rem;
    height: 1.3rem;
    display: block;
  }
  .center-login2 dl dt{
    width: 5.8rem;
    height: 0.65rem;
    display: block;
    line-height: 0.75rem;
    color: #222222;
  }
  .center-login2 dl dd{
    width: 2.9rem;
    height: 0.65rem;
    display: block;
    line-height: 0.65rem;
    color: #222222;
  }
  .center-login2 dl dd.users-money{
    float: left;
  }
  .center-login2 dl dd.refresh{
    float: right;
    text-align: right;
  }
  .users-money img{
    width: 0.36rem;
    height: 0.35rem;
    display: inline-block;
    position: relative;
    top:0.05rem;
  }
  .users-money span{
    color: #fc823c;
    font-size: 0.32rem;
    margin-left: 0.1rem;
  }
  .refresh img{
    position: absolute;
    right: .3rem;
    bottom: .3rem;
    z-index: 999;
    width: 0.35rem;
    height: 0.3rem;
    display: inline-block;

  }
  .center-refresh {
    position: absolute;
    top: 1.5rem;
    right: .3rem;
    width: .65rem;
    height: .65rem;
    img {
      position absolute
      bottom 0
      top 0
      left 0
      right 0
      margin auto
      width: .35rem;
      height: .3rem;
    }
  }






  .my-log-iocn img{
    width: 0.92rem;
    height: 0.92rem;
    margin-top: 0.19rem;
    border-radius: 50%;
  }

  /*充值提现*/
.center-recharge{
  width: 7.5rem;
  height: 0.8rem;
  display: block;
  line-height: 0.8rem;
  background: #ffffff;
  margin-bottom: 0.4rem;
}
  .center-recharge ul{
    width: 6.9rem;
    height: 0.8rem;
    display: block;
    margin: auto;
  }
  .center-recharge ul li{
    width: 3.45rem;
    height: 0.8rem;
    display: block;
    line-height: 0.8rem;
    float: left;
    text-align: center;
  }
  .center-recharge ul li{
    font-size: 0.32rem;
  }
  .center-recharge ul li.center-recharge1 {
    color: #fc823c;
  }
  .center-recharge ul li.center-recharge2{
    color: #35b5fe;
  }
  .center-recharge ul li img{
    width: 0.38rem;
    height: 0.38rem;
    display: inline-block;
    clear: both;
    position: relative;
    top: 0.07rem;
  }
  .center-list-content{
    width: 7.5rem;
    height: auto;
    display: block;
  }
 /* .center-list-content dl*/
  .center-list-content dl{
    width: 7.5rem;
    height: 0.8rem;
    display: block;
    border-bottom: 1px solid #eeeeee;
    background: #ffffff;
    line-height: 0.8rem;
  }
  .center-list-content dl dt{
    height: 0.8rem;
    width: 0.8rem;
    display: block;
    float: left;
  }

  .center-list-icon1  img{
    height: 0.36rem;
    width: 0.36rem;
    display: inline-block;
    float: left;
    margin-left: 0.3rem;
    margin-top: 0.22rem;
  }
  .center-list1{
    font-size: 0.28rem;
    font-weight: bold;
    color: #323232;
    width: 5.9rem;
    float: left;
  }
  .center-list2{
    width: 0.8rem;
    float: right;
    display: inline-block;
    text-align: right;
    line-height: 0.8rem;
  }
  .center-list2 img{
    width: 0.18rem;
    height: 0.3rem;
    float: right;
    display: inline-block;
    margin-top: 0.25rem;
    margin-right: 0.3rem;
  }

</style>
