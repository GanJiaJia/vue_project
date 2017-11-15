<!--代理说明-->
<template>
  <div class="agent-ins-content">
    <back title="代理说明" go-back="true"></back>
    <!--<div style="width: 100%;height: 100%;display: block">-->
      <!--<img src="http://120.76.211.1:8093/proxy_instruction" alt="" style="width: 100%;height: 100%;display: block">-->
    <!--</div>-->
    <div v-html="proxy_ins" style="margin-top: .88rem">

    </div>
    <div class="agent-ins" v-if="false">
      <div class="agent-ins-icon">
        <img src="" alt="什么是代理" />
      </div>
      <!--说明信息-->
      <div class="ins-important">
        如果你是资深代理，可以跳过这个页面不看，如果你是初级代理，或者不是代理，想了解代理的正常工作，请耐心看完。
      </div>
      <div class="ins-detail">
        <div class="ins-detail-text">
          <h4>如何成为代理？</h4>
          <p>如果您想要成为代理，您可以联系我们在线客服。</P>
        </div>
      </div>
      <div class="ins-detail">
        <div class="ins-detail-text">
          <h4>如何赚取返点？</h4>
          <p>赚取返点=（自身返点 - 下级返点）÷ 2000，如自身返点1950，下级返点1940，你将能获得下级投注金额0.5%的返点，如下级投注1000元，你将会获5元。点击下级开户，可查看自身返点，也可为下级设置返点。</P>
        </div>
      </div>
      <div class="ins-detail">
        <div class="ins-detail-text">
          <h4>如何为下级开户？</h4>
          <p>点击下级开户，先为您的下级设置返点，设置成功后会生成一条邀请码发送给您的下级注册，注册后他就是您的下级，点击会员管理，就能查看他注册的账号；如果您为下级设置的是代理类型的账号，那么您的下级就能继续发展下级，如果设置的是玩家类型，那么您的下级只能投注，不能再发展下级，也看不到代理中心。</P>
        </div>
      </div>
      <div class="ins-detail">
        <div class="ins-detail-text">
          <h4>温馨提示</h4>
          <p>返点不同赔率也不同，点击返点赔率表，可查看返点赔率；返点越低，赔率就越低，建议为下级设置的返点不要过低；可在代理报表、投注明细、交易明细查看代理的发展情况；建议开设的下级也是代理类型，无论发展了几级，您都能获得返点。</P>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import Back from '@/components/back/back'
  import {alertip, requestOpt, mt_loading_open, mt_loading_close} from 'api/recommend'
  import {mapState} from 'vuex'

  export default {
    components: {
      Back
    },
    data() {
      return {
        proxy_ins: '',
      }
    },
    created() {
      this.getProxyInstruction();
      mt_loading_open()
    },
    computed: mapState({user: state => state.user}),
    methods: {
      getProxyInstruction() {
        axios.get('http://120.76.211.1:8093/proxy_instruction').then(
          res => {
            if (res) {
              this.proxy_ins = res.data
            } else {
              alertip(res.data.msg)
            }
            mt_loading_close()
        }).catch(
          err => {
            alertip(err)
          }
        )
      }
    }
  }
</script>

<style scoped lang="stylus">
 .agent-ins-content {
   /*width: 7.5rem;
   height: 13.34rem;
   overflow: hidden;
   background: #eee;
   color: #000;
   font-size: .3rem;*/
 }

  posloca {
    position relative
    top .88rem
  }
 .agent-ins {
   @extend posloca
   .agent-ins-icon {
     width 100%
     height 2.6rem
     img {
       width 100%
       height 100%
     }
   }
   .ins-important {
     padding .3rem .2rem
     color #ff3a3b
     font-size .38rem
   }
   .ins-detail {
     padding 0 .2rem
     h4 {
       padding-bottom 0.3rem
     }
     p {
       padding 0 0.3rem 0.3rem 0.3rem
       line-height .35rem
       font-size .2rem
       color #555
     }
   }
 }
</style>
