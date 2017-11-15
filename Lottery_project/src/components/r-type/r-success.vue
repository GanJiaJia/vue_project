<!--module-->
<template>
  <div class="r-success">
    <back title="充值成功"></back>
    <div class="r-success-con">
      <div class="r-success-item">
        <div class="r-success-item-l">
          <img src="../../images/icon_success.png" alt="">
        </div>
        <div class="r-success-item-r">
          充值成功，您的充值申请已经提交成功
          <p>充值金额{{$route.params.cash}}元</p>
        </div>
      </div>
      <div class="r-success-item-2">
        <div class="r-success-item-l">
          <img src="../../images/money_account.png" alt="">
        </div>
        <div class="r-success-item-r">
          <div>
            充值到账
            <p>充值成功后，您的余额将在30分钟内更新，请稍后查看</p>
          </div>
        </div>
      </div>
    </div>
    <div class="r-ok-opt">
      <input type="button" value="完成" @click="$router.push('/m-center')">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Back from '@/components/back/back'

  export default {
    components: {
      Back
    }
  }
</script>

<style scoped lang="stylus">
  .r-success{
    overflow: hidden;
    color: #000;
    font-size: .28rem;
    .r-ok-opt {
      margin 0 .3rem
      input {
        width 100%
        padding .15rem 0
        background #ff3a3b
        color #fff
        border-radius .08rem
      }
    }
  }
  .r-success-con {
    margin-top .88rem
    background #fff
    padding .15rem
    .r-success-item {
      position relative
      .r-success-item-l {
        position absolute
        left 0.1rem
        img {
          width .65rem
          height .65rem
        }
      }
      .r-success-item-r {
        margin-left .4rem
        margin-top .5rem
        height 1.25rem
        border-left 2px solid #08a208
        text-indent 0.55rem
        p {
          color #999999
          font-size .24rem
          line-height 1.5
        }
      }
    }

    .r-success-item-2 {
      position relative
      margin-bottom .4rem
      .r-success-item-l {
        position absolute
        left 0.1rem
        bottom -0.1rem
        img {
          width .65rem
          height .65rem
        }
      }
      .r-success-item-r {
        div {
          position absolute
          bottom -.1rem
        }
        margin-left .4rem
        height 1.25rem
        border-left 2px solid gray
        text-indent 0.55rem
        p {
          color #999999
          font-size .24rem
          line-height 1.5
        }
      }
    }
  }
</style>
