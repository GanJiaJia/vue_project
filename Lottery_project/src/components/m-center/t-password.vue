<template>
  <div class="t-password-content">
    <back title="修改密码" go-back="true"></back>
    <div class="t-password">
      <dl>
        <dt>原始密码</dt>
        <dd class="verification1">
          <input type="text" placeholder="请输入旧的密码" maxlength="24" v-model="old">
        </dd>
      </dl>
      <dl>
        <dt>新密码</dt>
        <dd class="verification1">
          <input type="text" placeholder="请输入要修改的新密码" maxlength="24" v-model="new_pw">
        </dd>
      </dl>
      <dl>
        <dt>新密码</dt>
        <dd class="verification1">
          <input type="text" placeholder="请确认新的密码" maxlength="24" v-model="new_">
        </dd>
      </dl>
      <dl  class="verification3">
        <input type="button" value="确认" @click="updatePW">
      </dl>
    </div>

  </div>

</template>


<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import {alertip, requestOpt} from 'api/recommend'
  import {mapState} from 'vuex'

  export default {
    components: {
      Back
    },
    data() {
      return {
        old: '',
        new_pw: '',
        new_: ''
      }
    },
    computed: mapState({user: state => state.user}),
    created() {
      /*if (!this.user.token) {
        this.$router.push('/login')
      }*/
    },
    methods: {
      updatePW() {
        requestOpt.reqPutAuthUser('password', this.user.token, {
          old_pass: this.old,
          new_pass: this.new_pw,
          new_pass_confirm: this.new_
        }, res => {
          alertip(res.data.msg)
        }, err => {
          alertip(err)
        })
      }
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .t-password-content{
    width :7.5rem;
    // height: 13.34rem;
    height: 100%;
    display block
    overflow auto
    background #eeeeee
  }
  .t-password{
    width 7.1rem
    height 8rem
    display block
    margin auto
    margin-top 0.98rem
  }
  .t-password dl{
    width 7.1rem
    height 0.68rem
    display block
    background #ffffff
    line-height 0.68rem
    margin-top 0.1rem
  }
  .t-password dl  dt{
    width 1.01rem
    height 0.68rem
    display inline-block
    color #000000
    font-size 0.2rem
    margin-left 0.1rem
    float left
    margin-right 0.2rem;
  }
  .t-password dl  dd.verification1{
    width 5rem
    height 0.68rem
    display inline-block
    color #000000
    font-size 0.2rem
    float left
  }
  .verification1 input[type=text]{
    position relative
    top -1px
    width 5rem
    height 0.68rem
    line-height 0.68rem
    color #000000
    font-size 0.2rem
    border none
    outline none
  }
  .t-password dl.verification3{
    line-height 0.68rem
    margin-top 0.4rem
  }
  .t-password dl.verification3 input{
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










































































