<template>
  <div class="forget_content" @touchmove.prevent>
    <back title="忘记密码"></back>
    <div class="forget">
      <form action="#">
        <dl>
          <dt>用户名</dt>
          <dd>
            <input type="text" placeholder="请输入用户名">
          </dd>
        </dl>
        <dl>
          <dt>设置密码</dt>
          <dd>
            <input type="text" placeholder="请输入新的密码">
          </dd>
        </dl>
        <dl>
          <dt>确认密码</dt>
          <dd>
            <input type="text" placeholder="请再次输入新的密码">
          </dd>
        </dl>
        <dl>
          <dt>手机号码</dt>
          <dd>
            <input type="text" placeholder="请输入绑定的手机号">
          </dd>
        </dl>
        <dl>
          <dt>验证码</dt>
          <dd>
            <input type="text" placeholder="请输入验证码">
          </dd>
          <dd class="get-code">
            <input type="button" value="获取验证码"  onclick="sendCode(this)" />
          </dd>
        </dl>
        <dl class="forget_succeed">
          <input type="button" class="succeed" id="succeed" value="完成"  onclick="sendCode(this)">
        </dl>
      </form>
    </div>

  </div>

</template>


<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  export default {
    components: {
      Back
    },
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .forget_content{
    width :7.5rem;
    height: 13.34rem;
    display block
    overflow hidden
    background #eeeeee
  }
  .forget{
    width 6.9rem
    height 8rem
    display block
    margin auto
    background #eeeeee
    margin-top 1rem
  }
  .forget dl{
    width 6.9rem
    height 0.68rem
    margin-top 0.12rem
    background #ffffff
    line-height 0.68rem
  }
  .forget dl dt{
    font-size 0.2rem
    color #000000
    float left
    margin-left 0.1rem
  }
  .forget dl dd{
    font-size 0.14rem
    color #000000
    float left
    margin-left 0.12rem
  }
  .forget dl dd input{
    fborder:none
    outline:none
    width 4rem
    height 0.68rem
  }
  .forget dl dd.get-code{
    float right
    display block
    background #35b5fe
    border-radius 4px
    width 1.2rem
    height 0.42rem
    text-align center
    margin-top 0.13rem
    margin-right 0.1rem
  }
  .forget dl dd.get-code input{
    color #ffffff
    background none
    display block
    border:none
    outline:none
    width 1.2rem
    height 0.42rem
    font-size 0.2rem
    line-height 0.42rem

    float right
  }
  .succeed{
    display block
    width 6.9rem
    text-align center
    font-size 0.32rem
    color #ffffff
    background none
    border:none
    outline:none
    margin-top 0.11rem
    height: 0.68rem;
    line-height: 0.68rem;
    font-weight: normal;

  }
  dl.forget_succeed{
    display block
    width 6.9rem
    text-align center
    font-size 0.32rem
    color #ffffff
    background #ff3a3a
    border:none
    outline:none
    margin-top 0.11rem
    height: 0.68rem;
    line-height: 0.68rem;
    font-weight: normal;
    border-radius: 4px;
  }
  .forget dl dd input {
    caret-color:red;
  }
</style>










































































