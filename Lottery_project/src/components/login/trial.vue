<template>
  <div class="login_content" @touchmove.prevent>

    <img class="bg_images" src="../../images/bg@2x.png" alt="背景图片">
    <div class="back1-content">
      <a class="back1-btn" onclick="history.go(-1)" >
        <img class="back1-icon" src="../../images/Return-@2x.png">
      </a>
    </div>
    <div class="trial">
      <form action="">
        <dl class="trial1">
          <dt>
            <img class="trial-user" src="../../images/username@2x.png" alt="">
          </dt>
          <dd>
            <input type="text" class="login-input" v-model="username" maxlength="32" value="" readonly>
          </dd>
        </dl>
        <dl  class="trial1">
          <dt>
            <img class="trial-password" src="../../images/password@2x.png" alt="">
          </dt>
          <dd>
            <input type="password" class="login-input"  maxlength="32" placeholder="请输入密码" v-model="pw">
          </dd>
        </dl>
        <dl class="trial1">
          <dt>
            <img class="trial-password" src="../../images/password@2x.png" alt="">
          </dt>
          <dd>
            <input type="password" class="login-input"  maxlength="32" placeholder="请确认密码" v-model="pwa">
          </dd>
        </dl>
        <dl class="trial2">
          <input type="button" class="play1" value="立即试玩" @click="quickPlay">
        </dl>
      </form>
      <dl class="trial3">
        <dt class="trial-left">
          <span></span>
        </dt>
        <dd class="trial-middle">
          <router-link tag="div" to="/login">
            <input type="button" value="已有账号,直接登录">
          </router-link>
        </dd>
        <dd class="trial-right">
          <span></span>
        </dd>
      </dl>
      <dl class="trial4">
        <dt>1、每个试玩账号初始金额5000元</dt>
        <dt>2、每个IP每天做多可以创建20个试玩帐号</dt>
        <dt>3、每个账号从注册开始有效期为7天,超过有效期系统自动收回</dt>
        <dt>4、试玩帐号不允许充值、提现操作</dt>
      </dl>
    </div>

  </div>

</template>


<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import {alertip, requestOpt} from 'api/recommend'
  export default {
    components: {
      Back
    },
    data() {
      return {
        username: 'Trial202224',
        pw: '',
        pwa: ''
      }
    },
    created() {
      this.getDemoUser();
    },
    methods: {
      createDemoUser() { // 创建试玩用户
        requestOpt.reqPostNouser('trial_user',{
          username: this.username,
          password: this.pw,
          password_confirm: this.pwa
        }, res => {
          if (res.data.status === 1) {
            this.userData = res.data.data
            this.$router.push('/login')
            alertip(res.data.msg)
          } else {
            alertip(res.data.msg)
          }
        }, err => {
          alertip(err)
        })
      },
      getDemoUser() { // 获取玩家用户列表
        requestOpt.reqnoGet('trial_username', res => {
          if (res.data.status === 1) {
            this.username = res.data.data.username
          } else {
            alertip(res.data.msg)
          }
        }, err => {
          alertip(err)
        })
      },
      quickPlay() { // 立即试玩
        requestOpt.reqPostNouser('session', {
          username: this.username,
          password: this.pw,
          ver: '',
          imei: '',
          imsi: '',
          idfa: '',
          uuid: '',
          sim: '',
          udid: '',
          mac: '',
          sys_ver: '',
          android_id : '',
          model: '',
          screen_size: '',
          screen_resolution: '',
          root: '',
          channel_code: '',
          push_id: ''
        }, res => {
          if (res.data.status === 1) {
            window.userMsg = res.data.data;
            console.log(window.userMsg)
            this.$router.push('/m-center')
          }else {
            alertip(res.data.msg)
          }
        }, err => {
          alertip(err)
        })
      }
    },

  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  .login_content{
    width :7.5rem;
    height: 13.34rem;
    display block
    overflow hidden
  }
  .bg_images{
    width 7.5rem
    height 13.34rem
    z-index -9999
    float left
  }
  .back1-content{
    width 6.9rem
    margin auto
    height :0.88rem;
  }
  .back1-btn{
    width 0.88rem
    height 0.88rem
    display block
    z-index 2
  }
  .back1-btn i{
    width 0.88rem
    height 0.88rem
    display block
    z-index 3
  }

  .trial{
    width 6.9rem
    height 10rem
    display block
    z-index 1
    position absolute
    top: 2.28rem
    left 0.3rem
  }
  .trial dl{
    width 6.9rem
    height 0.8rem
    display block
    margin-bottom 0.4rem
    background none
  }
  .trial1 dl dt{
    float left
    width 0.72rem
    height 0.8rem

  }
  .trial1 dl dd{
    float right
    width 6.18rem
    height 0.8rem
  }
  input.login-input{
    width 6.18rem
    height 0.8rem
    font-size 0.2rem
    text-indent 0.1rem
    display block
    color #fff
    border:none
    outline:none
    background none
    float right
  }
  .trial-user{
    width 0.72rem
    height 0.8rem
    display block
    text-align center
    float left
  }
  .trial-password{
    width 0.72rem
    height 0.8rem
    display block
    text-align center
    float left
  }
  img.trial-user{
    width 0.32rem
    height 0.33rem
    display block
    margin-top 0.2rem
    margin-left 0.235rem
  }
  img.trial-password{
    width 0.32rem
    height 0.33rem
    display block
    margin-top 0.2rem
    margin-left 0.235rem
  }

  .trial dl.trial1{
    margin-bottom 0.2rem
    background : #c390a3
  }
  //  立即试玩
  input.play1{
    width  6.9rem
    height 0.8rem
    display block
    font-size 0.32rem
    color #ffffff
    font-weight normal
    float left
    border none
    outline none
    background none
  }
  .trial dl.trial2{
    width  6.9rem
    height 0.8rem
    display block
    line-height 0.8rem
    background #35b5fe
    font-size 0.32rem
    color #ffffff
    font-weight normal
    border-radius 4px
    float left
    margin-top 0.4rem
  }
  .trial dl.trial3{
    width 6.9rem
    height 0.8rem
    display block
    margin-top  1.2rem
  }
  dl.trial3 dt{
    width 1.5rem
    float left
    height 0.8rem
    display block

  }
  dl.trial3 dt span{
    width 1.5rem
    float left
    height 1px
    display block
    background #ffffff
    position relative
    top: 0.4rem
  }
  dl.trial3 dd.trial-middle{
    width 3.9rem
    float left
    height 0.8rem
    display block


  }
  dl.trial3 dd.trial-middle input{

    width 3.9rem
    float left
    height 0.8rem
    font-size 0.32rem
    color #ffffff
    font-weight normal
    text-align center
    line-height 0.8
    border none
    outline none
    background none
  }
  dl.trial3 dd.trial-right{
    width 1.5rem
    float right
    height 0.8rem
    display block
  }
  dl.trial3 dd.trial-right span{
    width 1.5rem
    float left
    height 1px
    display block
    background #ffffff
    position relative
    top: 0.4rem
  }
  .trial dl.trial4{
    width 6.9rem
    display block

  }
  .trial dl.trial4 dt{
    width 6.9rem
    display block
    float left
    font-size 0.18rem
    color #ffffff
    font-weight normal
    text-align left
    overflow hidden
    line-height 0.34rem
  }
  img.back1-icon{
    width 0.22rem
    height 0.3rem
    display block
    z-index 999
    float left
    position fixed
    top:0.22rem
  }
  //  设置输入框的颜色
  ::-webkit-input-placeholder {

    color: #fff;

  }
  :-moz-placeholder {/* Firefox 18- */

    color: #fff;
  }

  ::-moz-placeholder{/* Firefox 19+ */

    color: #fff;

  }

  :-ms-input-placeholder {

    color: #fff;

  }
  .login input:focus{color:#fff}





</style>










































































