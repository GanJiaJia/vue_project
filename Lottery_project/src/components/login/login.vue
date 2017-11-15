<template>
  <div class="login_content" @touchmove.prevent>

    <img class="bg_images" src="../../images/bg@2x.png" alt="背景图片">
    <div class="back1-content">
      <a class="back1-btn" onclick="history.go(-1)" >
        <img class="back1-icon" src="../../images/Return-@2x.png">
      </a>
    </div>
    <div class="login">
      <form action="">
        <dl class="ad-1">
          <dt>
            <img class="admin-icon" src="../../images/username@2x.png" alt="">
          </dt>
          <dd>
            <input type="text" class="admin login-input" maxlength="32" placeholder="请输入账号" v-model="username">
          </dd>
        </dl>
        <dl class="pa-1">
          <dt>
            <img class="password-icon" src="../../images/password@2x.png" alt="">
          </dt>
          <dd>
            <input type="password" class="password login-input"  maxlength="32" placeholder="请输入密码" v-model="pw">
          </dd>
        </dl>
        <dl class="lg-1">
          <input type="button" class="log-btn" value="登录" @click="usrlogin">
        </dl>
        <dl class="pl-1">
          <router-link tag="div"  to="/trial">
            <input type="button" class="play-btn" value="免费试玩">
          </router-link>
        </dl>
        <dl class="waring-title">
          <dt>
            <router-link tag="div" to="/forget">
              <span>忘记密码</span>
            </router-link>
          </dt>
          <dd>
            <router-link tag="div" to="/register">
              <a>还没有账号？立即注册</a>
            </router-link>
          </dd>
        </dl>
      </form>
    </div>
    <!--第三方登录-->
    <div class="other-login">
      <dl class="other-login1">
        <dt class="other-login1-left">
          <span></span>
        </dt>
        <dd class="other-login1-middle">
          第三方登录
        </dd>
        <dd class="other-login1-right">
          <span></span>
        </dd>
      </dl>
      <div class="other-login2">
        <ul>
          <li>
            <img src="../../images/qq.png" alt="" @click="getQQ">
          </li>
          <li>
            <img src="../../images/WeChat.png" alt="" @click="getVct">
          </li>
          <li>
            <img src="../../images/xinlang.png" alt="" @click="getVb">
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>


<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import {alertip, requestOpt} from 'api/recommend'
  import {api_ver} from 'api/config'

  import {mapActions} from  'vuex'
  import {USER_SIGNIN, OF_CARD_NAME, OF_CARD_NUMMBER, OF_AVATE} from '../../store/user'

  export default {
    components: {
      Back
    },
    data() {
      return {
        username: '',
        pw: '',
        apiver: api_ver
      }
    },

    methods: {
      ...mapActions([USER_SIGNIN,OF_CARD_NAME, OF_CARD_NUMMBER, OF_AVATE]),
      usrlogin() {
        requestOpt.reqPostNouser('session', {
          username: this.username,
          password: this.pw,
          ver: this.apiver,
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
//            alertip(res.data.msg)
//            console.log(res.data.msg)
//            window.userMsg = res.data.data;
//            console.log(window.userMsg)
//            this.USER_SIGNIN(this.username)
            this.USER_SIGNIN(res.data.data);
            console.log(res.data.data.userinfo.bankcard)
            this.OF_CARD_NUMMBER(res.data.data.userinfo.bankcard)
            this.OF_CARD_NAME(res.data.data.userinfo.bankcard_user)
            this.OF_AVATE(res.data.data.userinfo.avatar)

            this.$router.replace({path:'/m-center'})
          }else {
//            console.log(res.data.msg)
            alertip(res.data.msg)
          }
        }, err => {
//          console.log(err)
          alertip(err)
        })
      },
      //      第三方登陆
      getQQ(){
        console.log('QQ登陆')
      },
      getVct(){
        console.log('微信登陆')
      },
      getVb(){
        console.log('微博登陆')
      }
    }
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
  .login{
    width 6.9rem
    display block
    z-index 1
    position absolute
    top: 2.28rem
    left 0.3rem
  }
  //登录的界面
  .login dl{
    width  6.9rem
    height 0.8rem
    display block
    margin-bottom 0.4rem
  }

  .login dl dt{
    float left
    width 0.72rem
    height 0.8rem
  }
  .login dl dd{
    float right
    width 6.18rem
    height 0.8rem
  }
  input.login-input{
    width 6.18rem
    height 0.8rem
    font-size 0.24rem
    text-indent 0.1rem
    display block
    color #ffffff
    border:none
    outline:none
    background: rgba(0,0,0,0);
    -webkit-user-modify: read-write-plaintext-only;
  }
  .admin-icon{
    width 0.72rem
    height 0.8rem
    display block
    text-align center
    float left
  }
  img.admin-icon{
    width 0.32rem
    height 0.33rem
    display block
    margin-top 0.2rem
    margin-left 0.235rem
  }
  .password-icon{
    width 0.72rem
    height 0.8rem
    display block
    text-align center
    float left
  }
  img.password-icon{
    width 0.32rem
    height 0.33rem
    display block
    margin-top 0.2rem
    margin-left 0.235rem
  }
  input.log-btn{
    width  6.9rem
    height 0.8rem
    display block
    line-height 0.8rem
    background: rgba(0,0,0,0);
    border none
    outline none
    font-size 0.32rem
    color #ffffff
    font-weight normal
  }
  .login dl.lg-1{
    position relative
    top: 0.1rem
    margin-top 0.4rem
    width  6.9rem
    height 0.8rem
    display block
    line-height 0.8rem
    background #35b5fe
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
    -webkit-appearance: none;
    -moz-appearance:    none;
    appearance:         none;
    border 1px solid #ffffff
    box-sizing: border-box;
    background: rgba(0,0,0,0);
  }

  .login dl.waring-title{
    line-height 0.6rem
  }
  dl.waring-title dt{
    loat left
    width 3.45rem
    height 0.6rem
  }
  dl.waring-title dd{
    loat right
    width 3.45rem
    height 0.6rem
    text-align right
  }
  .waring-title dt span{
    font-size 0.2rem
    color #ffffff
    font-weight normal
  }
  .waring-title  dd a{
    font-size 0.2rem
    color #ffffff
    font-weight normal
    text-decoration underline
  }


  .login dl.ad-1{
    margin-bottom 0.2rem
    background #c390a3
    border none
  }
  .login dl.pl-1{
    margin-bottom 0
  }
  .login dl.pa-1{
    margin-bottom 0.2rem
    background #c390a3
    border none
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


  //  第三方登录

  .other-login{
    width 6.9rem
    height 2rem
    display block
    margin-left 0.3rem
    z-index 99
    position fixed
    top: 8.3rem
  }

  .other-login dl.other-login1{
    width 6.9rem
    height 0.8rem
    display block
  }
  dl.other-login1 dt{
    width 1.5rem
    float left
    height 0.8rem
    display block

  }
  dl.other-login1 dt span{
    width 1.5rem
    float left
    height 1px
    display block
    background #ffffff
    position relative
    top: 0.4rem
  }
  dl.other-login1 dd.other-login1-middle{
    width 3.9rem
    float left
    height 0.8rem
    display block
  }
  dl.other-login1 dd.other-login1-middle{
    width 3.9rem
    float left
    height 0.8rem
    font-size 0.24rem
    color #ffffff
    font-weight normal
    text-align center
    line-height 0.8rem
  }
  dl.other-login1 dd.other-login1-right{
    width 1.5rem
    float right
    height 0.8rem
    display block
  }
  dl.other-login1 dd.other-login1-right span{
    width 1.5rem
    float left
    height 1px
    display block
    background #ffffff
    position relative
    top: 0.4rem
  }

  .other-login .other-login2{
    width 4rem
    height 0.76rem
    display block
    margin-left 1.85rem
  }

  .other-login .other-login2 ul li{
    width 0.76rem
    height 0.76rem
    display block
    margin-right 0.47rem
    background none
    float left
  }
  .other-login2 ul li img{
    width 0.76rem
    height 0.76rem
    display block
    float left
    border-radius 45px
  }
</style>










































































