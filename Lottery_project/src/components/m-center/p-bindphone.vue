<!--module-->
<template>
  <div class="p-bindphone-content">
    <back title="绑定的手机号"></back>
    <div class="p-bindphone">
      <div class="p-bindphone-item">
        <div>
          绑定的手机号 &nbsp;&nbsp;
          <span>{{$store.state.user.userinfo.phone | transPhoneFormate}}</span>
        </div>
        <input type="button" value="解绑" @click="offBind">
      </div>
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
    methods: {
      offBind() {
        alertip('敬请期待')
      }
    }
  }
</script>

<style scoped lang="stylus">
  .p-bindphone-content {
    color: #000;
    font-size: .3rem;
    .p-bindphone {
      margin-top .88rem
      .p-bindphone-item {
        display flex
        justify-content space-between
        align-items center
        margin  .98rem .3rem
        padding .2rem
        background #fff
        span {
          color #999
        }
        input[type=button] {
          padding .1rem .2rem
          border 0
          background #24b0ff
          color #fff
          border-radius .08rem
        }
      }
    }
  }
</style>
