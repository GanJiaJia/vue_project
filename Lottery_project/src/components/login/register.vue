<template>
  <div class="register_content" @touchmove.prevent>

    <img class="bg_images" src="../../images/bg@2x.png" alt="背景图片">
    <div class="back1-content">
      <a class="back1-btn" onclick="history.go(-1)" >
        <img class="back1-icon" src="../../images/Return-@2x.png">
      </a>
    </div>
    <div class="register">
      <form action="">
        <dl class="register1">
          <dt>
            <img class="trial-user" src="../../images/username@2x.png" alt="">
          </dt>
          <dd>
            <input type="text" class="login-input"  maxlength="30" minlength="6" placeholder="请输入账号" v-model="username">
          </dd>
        </dl>
        <dl class="register1">
          <dt>
            <img class="trial-password" src="../../images/password@2x.png" alt="">
          </dt>
          <dd>
            <input type="password" class="login-input"  minlength="8" placeholder="请输入密码" v-model="pw">
          </dd>
        </dl>
        <dl class="register1">
          <dt>
            <img class="trial-password" src="../../images/password@2x.png" alt="">
          </dt>
          <dd>
            <input type="password" class="login-input"  minlength="8" placeholder="请再次输入密码" v-model="pwagain" >
          </dd>
        </dl>
        <dl class="register1">
          <dt>
            <img class="trial-password" src="../../images/password@2x.png" alt="">
          </dt>
          <dd>
            <input type="text" class="login-input"  minlength="8" maxlength="8" placeholder="邀请码（选填）"  v-model="yzm">
          </dd>
        </dl>
        <dl class="register2">
          <dt>
            <input type="checkbox" id="checkbox_a1" class="chk_1" checked/>
            <label for="checkbox_a1"></label>
          </dt>
          <dd>
            <router-link tag="div"  to="/agreement">
              <input type="button" value="我已阅读并同意《彩票》相关条例">
            </router-link>
          </dd>
        </dl>
        <dl class="register3">
          <input type="button" class="log-btn" value="注册" @click="handleRegist">
        </dl>

      </form>

      <dl class="register5">
        <router-link tag="div"  to="/trial">
          <input type="button" class="play-btn" value="免费试玩">
        </router-link>
      </dl>
      <dl class="register4">
        <dt class="register-left">
          <span></span>
        </dt>
        <dd class="register-middle">
          <router-link tag="div" to="/login">
            <input type="button" value="已有账号,直接登录">
          </router-link>
        </dd>
        <dd class="register-right">
          <span></span>
        </dd>
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
        username: '',
        pw: '',
        pwagain: '',
        yzm: ''
      }
    },
    methods: {
      handleRegist() {
        requestOpt.reqPostNouser('user', {
          username: this.username,
          password: this.pw,
          password_confirm: this.pwagain,
          inv_code: this.yzm
        }, res => {
          if (res.data.status === 1) {
            this.$router.replace('/login');
          } else {
            alertip(res.data.msg)
          }
        }, err => {
          alertip(err)
        })
      }
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .register_content{
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

  .register{
    width 6.9rem
    height 10rem
    display block
    z-index 1
    position absolute
    top: 2.28rem
    left 0.3rem
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


  //  设置dl样式
  .register dl.register1{
    margin-bottom 0.2rem
    background : #c390a3
  }
  .register dl{
    width 6.9rem
    height 0.8rem
    display block
    margin-bottom 0.4rem
  }
  .register dl dt{
    float left
    width 0.72rem
    height 0.8rem

  }
  .register dd{
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



  .register dl.register2 dd input{
    width 5.9rem
    float left
    height 0.8rem
    font-size 0.18rem
    color #ffffff
    font-weight normal
    text-align left
    line-height 0.8
    border none
    outline none
    background none
  }

  //注册
  input.log-btn{
    width  6.9rem
    height 0.8rem
    display block
    font-size 0.32rem
    color #ffffff
    font-weight normal
    border none
    background none
    outline none
  }

  .register dl.register2{
    margin-bottom 0.2rem
  }

  //  免费试玩
  .login dl.pa-1{
    margin-bottom 0.2rem
    background : #666666
    border-radius 4px
  }
  input.play-btn{
    width  6.9rem
    height 0.8rem
    display block
    line-height 0.8rem
    font-size 0.32rem
    color #ffffff
    font-weight normal
    border-radius 4px
    border 1px solid #ffffff
    box-sizing: border-box;
    background: rgba(0,0,0,0);
  }
  .trial dl.register4{
    width 6.9rem
    height 0.8rem
    display block
    margin-top  1.2rem
  }
  dl.register4 dt{
    width 1.5rem
    float left
    height 0.8rem
    display block

  }
  dl.register4 dt span{
    width 1.5rem
    float left
    height 1px
    display block
    background #ffffff
    position relative
    top: 0.4rem
  }
  dl.register4 dd.register-middle{
    width 3.9rem
    float left
    height 0.8rem
    display block


  }
  dl.register4 dd.register-middle input{

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
  dl.register4 dd.register-right{
    width 1.5rem
    float right
    height 0.8rem
    display block
  }
  dl.register4 dd.register-right span{
    width 1.5rem
    float left
    height 1px
    display block
    background #ffffff
    position relative
    top: 0.4rem
  }


  .chk_1 {
    display: none;
  }

  .chk_1 + label {
    border: 1px solid #ffffff;
    width 0.22rem
    height 0.22rem
    display: inline-block;
    position: relative;
    outline:none
    float left
    text-align center
    margin 0.28rem 0.24rem
    /*-webkit-appearance: none;*/
    vertical-align: middle;
    box-sizing: border-box;
    (-prefix-)user-select none;
    -webkit-appearance:none;
    appearance:none;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    text-indent: 0;
    background: transparent;
    resize:none;
    line-height: normal;
  }

  .chk_1:checked + label {
    border: 1px solid #ffffff;
  }

  .chk_1:checked + label:after {
    content: '\2714'; //勾选符号
    position: relative;
    top: -0.11rem;
    left: -0.06;
    color: #35b5fe;
    width: 100%;
    height 100%
    text-align: center;
    font-size: 0.24em;
    vertical-align: text-top;
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


  dl.register3{
    width  6.9rem
    height 0.8rem
    display block
    line-height 0.8rem
    background #35b5fe
    font-size 0.32rem
    color #ffffff
    font-weight normal
    border-radius 4px
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










































































