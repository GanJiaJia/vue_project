<template>
  <!--充值明细-->
  <div class="r-detailed-content">
    <back title="充值明细" go-back="true"></back>
    <div class="r-detailed">
      <dl>
        <dt>
          <ul>
            <li>充值金额</li>
            <li>订单编号</li>
            <li>创建时间</li>
            <li>支付时间</li>
            <li>支付方式</li>
          </ul>
        </dt>
        <dd class="r-detailed1">
          <ul>
            <li><p>￥500</p></li>
            <li><span>20170405DALZALDALL</span></li>
            <li><span>2017-04-07</span><span>15:22:22</span></li>
            <li><span>2017-04-07</span><span>15:22:22</span></li>
            <li><span>微信支付</span></li>
          </ul>
        </dd>
        <dd class="r-detailed2">
          <img src="../../images/icon_success.png" alt="">
          <span>支付成功</span>
        </dd>
      </dl>
      <dl>
        <dt>
          <ul>
            <li>充值金额</li>
            <li>订单编号</li>
            <li>创建时间</li>
            <li>支付时间</li>
            <li>支付方式</li>
          </ul>
        </dt>
        <dd class="r-detailed1">
          <ul>
            <li><p>￥500</p></li>
            <li><span>20170405DALZALDALL</span></li>
            <li><span>2017-04-07</span><span>15:22:22</span></li>
            <li><span>2017-04-07</span><span>15:22:22</span></li>
            <li><span>微信支付</span></li>
          </ul>
        </dd>
        <dd class="r-detailed2">
          <img src="../../images/icon_fail.png" alt="">
          <span>支付失败</span>
        </dd>
      </dl>
    </div>
  </div>

</template>


<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import NData from '@/components/tab/n-data'
  export default {
    components: {
      Back,
      NData
    },
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .r-detailed-content{
    width :7.5rem;
    height: 13.34rem;
    display block
    background #ffffff
    overflow auto
  }
  .r-detailed{
    width 7.5rem
    height 13.34rem
    display block
    position relative
    top 0.88rem
    background #ffffff
  }
  .r-detailed dl{
    width 6.9rem
    display block
    height 1.6rem
    margin-left 0.3rem
    margin-top 0.2rem
    border-radius 8px
    border 1px solid #dbdbdb
  }
  .r-detailed dl dt{
    display block
    float left
    height 1.6rem
    border-radius 8px
  }
  .r-detailed dl dt ul{
    height 1.4rem
    margin-left 0.72rem
    margin-top 0.1rem
    margin-right 0.2rem
  }
  .r-detailed dl dt ul li{
    text-align left
    line-height 0.28rem
    font-size 0.16rem
    color #676767
  }
  .r-detailed dl dd.r-detailed1{
    display block
    float left
    height 1.4rem
    width 3rem
    margin-top 0.1rem
  }
  .r-detailed dl dd.r-detailed1 ul{
    display block
    float left
    height 1.4rem
    width 3rem
  }
  .r-detailed dl dd.r-detailed1 ul li{
    line-height 0.28rem
    display inline-block
    text-align left
    font-size 0.16rem
    color #676767
    float left
    width 3rem
  }
  .r-detailed dl dd.r-detailed1 ul li p{
    color #000000
    font-size 0.2rem
    text-align left
  }
  .r-detailed dl dd.r-detailed1 ul li span{
    text-align left
    font-size 0.16rem
    color #000000
    margin-right  0.1rem
    float left
    line-height 0.28rem
    display block
  }
  .r-detailed dl dd.r-detailed2{
    display block
    float right
    height 1.6rem
    width 1.6rem
  }
  .r-detailed dl dd.r-detailed2 img{
    display block
    float right
    height 0.5rem
    width 0.5rem
    margin-top: 0.32rem
    margin-right 0.8rem
    position relative
    margin-bottom 0.1rem
  }
  .r-detailed dl dd.r-detailed2 span{
    display block
    float right
    font-size 0.16rem
    color  #000000
    position relative
    line-height 0.36rem
    right 0.73rem
  }
</style>










































































