<template>
  <div class="verification_content">
    <back title="手机验证" go-back="true"></back>
    <div class="verification">
      <dl>
        <dt  class="phones">手机号码</dt>
        <dd class="verification1">
          <input type="text" placeholder="请输入手机号码" maxlength="11" v-model="phone">
        </dd>
      </dl>
      <dl>
        <dt  class="code">验证码</dt>
        <dd class="verification1">
          <input type="text" placeholder="请输入验证码" maxlength="22" v-model="verification">
        </dd>
        <dd class="obtain">
          <input type="button" v-model="getVerifitxt"  @click="getVerificat($event)" >
        </dd>
      </dl>
      <dl  class="verification3">
        <input type="button" value="完成" @click="okVerificated">
      </dl>
    </div>

  </div>

</template>


<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import {alertip, requestOpt, isPhone} from 'api/recommend'
  import {mapState} from 'vuex'

  export default {
    components: {
      Back
    },
    data() {
      return {
        phone: '',
        verification: '',
        getVerifitxt: '获取验证码'
      }
    },
    computed: mapState({user: state => state.user}),
    created() {
      /*if (!this.user.token) {
        this.$router.push('/login')
      }*/
    },

    methods: {
      getVerificat(e) { // 获取验证码
        if (isPhone(this.phone)) {
          let t = 60;
          let timer = setInterval( () => {
            if (t===0) {
              clearInterval(timer);
              return;
            }
            t--;
            t = t<=0 ? 0 : t;
            this.getVerifitxt = t===0 ? '获取验证码': t + '秒后重新获取'
            t===0 ? e.target.disabled = false : e.target.disabled = true;
            e.target.className = t===0 ? '': 'resBtn';
          },1000)
          requestOpt.reqGetuser('phone_code?phone='+this.phone, this.user.token, res => {
            alertip(res.data.msg)
            if (res.data.msg === '验证码发送次数超出系统限制！') {
//              e.target.disabled = true;
              clearInterval(timer)
              this.getVerifitxt =  '获取验证码'
              e.target.className = ''
            } else {
              e.target.disabled = false;
            }
          }, err => {
            alertip(err)
          });
        }
      },
      okVerificated() { // 完成操作
        if (isPhone(this.phone)) {
          if (!this.verification) {
            alertip('验证码不能为空');
            return false;
          };
          requestOpt.reqPostuser('phone', this.user.token, { // 完成操作
            phone: this.phone,
            code: this.verification
          }, res => {
            alertip(res.data.msg)
            /*if (res.data.status === 1) {
              alertip('验证码校验成功')
            } else {
              alertip('验证码校验失败')
            };*/
          }, err => {
            alertip(err)
          })
        }
      }
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .verification_content{
    width :7.5rem;
    // height: 13.34rem;
    height: 100%;
    display block
    overflow auto
    background #eeeeee
  }
  .verification{
    width 7.1rem
    height 8rem
    display block
    margin 0.98rem auto
  }
  .verification dl{
    width 7.1rem
    height 0.68rem
    display block
    background #ffffff
    line-height 0.68rem
    margin-top 0.1rem
  }
  .verification dl  dt{
    width auto
    height 0.68rem
    display inline-block
    color #000000
    font-size 0.2rem
    margin-left 0.1rem
    float left
    margin-right 0.2rem;
  }
  .verification dl  dd.verification1{
    position: relative;
    top: -1px;
    width 4rem
    height 0.68rem
    display inline-block
    color #000000
    font-size 0.2rem
    float left
  }
  .verification dl  dd.obtain{
    width 1.9rem
    height 0.68rem
    display inline-block
    float right
    margin-right 0.1rem
  }
  .verification1 input[type=text]{
    width 4rem
    height 0.68rem
    line-height 0.68rem
    color #000000
    font-size 0.2rem
    border none
    outline none
  }
  .obtain input[type=button]{
    width 100%
    height 0.56rem
    padding 0 .1rem
    color #ffffff
    background #35b5fe
    display block
    border:none
    outline:none
    margin-right 0.1rem
    margin-top 0.06rem
    border-radius 0.04rem
    font-size 0.20rem
  }
  .obtain input.resBtn {
    background : #555;
  }


  .verification dl.verification3{
    line-height 0.68rem
    margin-top 0.4rem
  }
  .verification dl.verification3 input{
    width 7.1rem
    height 0.68rem
    color #ffffff
    background #ff3a3a
    display block
    border:none
    outline:none
    border-radius 0.04rem
    font-size 0.32rem
  }
</style>










































































