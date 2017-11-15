<!--待付款-->
<template>
  <div class="payment-content">
    <back title="待付款"></back>
    <!--投注内容-->
    <div class="payment">
      <!--投注头部分类-->
      <div class="payment-head">
        <img src="../../images/sanfen.png" alt="">
        <span class="payment-titles">三分时时彩</span>
        <span class="payment-states">待支付</span>
      </div>
      <!--投注的内容详情-->
      <div class="payment-layout">
        <dl class="payment-layout1">
          <dt class="payment-layout2">投注内容</dt>
          <dd class="payment-layout3">
            <h4><span>1倍</span><span>57注</span></h4>
            <ul>
              <li>
                <span>五星-直选复式</span>
                <span>32注</span>
                <span class="b">3,<b>8</b></span>
                <span class="b">3,<b>8</b></span>
                <span class="b">3,<b>8</b></span>
                <span class="b">3,<b>8</b></span>
                <span class="b">3,<b>8</b></span>
              </li>
              <li>
                <span>五星-直选复式</span>
                <span>32注</span>
                <span class="b">3,8</span>
                <span class="b">3,8</span>
                <span class="b">3,<b>8</b></span>
                <span class="b">3,<b>8</b></span>
                <span class="b">3,8</span>
              </li>
              <li>
                <span>五星-直选复式</span>
                <span>32注</span>
                <span class="b">3,8</span>
                <span class="b">3,8</span>
                <span class="b">3,8</span>
                <span class="b">3,8</span>
              </li>
              <li>
                <span>五星-直选复式</span>
                <span>32注</span>
                <span class="b">3,8</span>
                <span class="b">3,8</span>
              </li>
              <li>
                <span>五星-直选复式</span>
                <span>32注</span>
                <span class="b">3,8</span>
              </li>
              <li>
                <span>五星-直选复式</span>
                <span>32注</span>
                <span class="b">3,8</span>
                <span class="b">3,8</span>
                <span class="b">3,8</span>
                <span class="b">3,8</span>
              </li>
              <li>
                <span>五星-直选复式</span>
                <span>32注</span>
                <span class="b">3,8</span>
                <span class="b">3,8</span>
              </li>
              <li>
                <span>五星-直选复式</span>
                <span>32注</span>
                <span class="b">3,8</span>
              </li>
            </ul>
            <!--投注结算-->
            <div class="payment-account">
              <dl>
                <dt>
                  <p>订单编号：<span>252525252525</span></p>
                  <p>创建时间：<span>2017-05-15</span></p>
                </dt>
                <dd>
                  <div class="payment-money">订单总价 <span>￥104.00</span></div>
                  <div>
                    <div class="payment-void">取消订单</div>
                    <div class="payment-pay">付款</div>
                  </div>
                </dd>
              </dl>
            </div>
          </dd>
        </dl>
      </div>
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
  .payment-content{
    width :7.5rem;
    height: 13.34rem;
    display block
    overflow hidden
    background #ffffff
  }
  .payment{
    width 7.5rem
    background #ffffff
    margin-top 1.36rem
    border-top 1px solid #eeeeee
    border-bottom  1px solid #eeeeee
    display block
    height auto
  }
  .payment-head{
    width 7.5rem
    height 0.48rem
    display block
  }
  .payment-head img{
    width 0.36rem
    height 0.36rem
    display block
    float left
    border-radius 45px
    margin-top 0.06rem
    margin-left 0.3rem
  }
  .payment-titles{
    font-size 0.2rem
    color #000000
    float left
    margin-left 0.11rem
    font-weight bold
    line-height 0.48rem
  }
  .payment-states{
    font-size 0.2rem
    color #ff3a3b
    float right
    margin-right 0.3rem
    line-height 0.48rem
  }



//  投注内容
  .payment-layout{
    width 7.5rem
    height auto
    display block
    margin-top 0.2rem
    overflow auto

  }
  .payment-layout dl.payment-layout1{
    width 7.5rem
    display block
    height auto
  }
  .payment-layout dl.payment-layout1 dt.payment-layout2{
      display block
      float left
      margin-left 0.3rem
      font-size 0.2rem
      color #323232

     }
  .payment-layout dl.payment-layout1 dd.payment-layout3{
    height auto
    display block
    width 5.7rem
    float left
    margin-left 0.2rem
  }
  .payment-layout dl.payment-layout1 dd.payment-layout3 h4{
    float left
    display block
    width 5.7rem
    font-size 0.2rem
    height 0.2rem
    margin-bottom 0.1rem
  }
  .payment-layout dl.payment-layout1 dd.payment-layout3 h4 span{
    float left
    font-size 0.2rem
    color #323232
    margin-right 0.2rem
  }
//  买的彩票玩法
  .payment-layout dl dd ul li{
    width 100%
    height 0.32rem
    margin-top 0.02rem
    display block
    float left
  }
  .payment-layout dl dd ul li span{
    font-size 0.16rem
    color #323232
    text-align left
    margin-right 0.14rem
    float left
    line-height 0.32rem
  }
  .payment-layout dl dd ul li span.b{
    font-weight bold
  }
  .payment-layout dl dd ul li span b{
    color #ff3a3b
  }

//结算
  .payment-account{
    width 100%
    height 1.2rem
    display block
    margin-top 0.34rem
    float left
  }
  .payment-account dl{
    height 1.2rem
    display block
    margin auto
  }
  .payment-account dt{
    width 2.5rem
    height 1rem
    display block
    margin auto
    float left
  }
  .payment-account dt p{
    font-size 0.16rem
    color #000000
    display block
    width 2.5rem
    height 0.34rem
    text-align left
    line-height 0.34rem
  }
  .payment-account dt p span{
    font-size 0.14rem
    color #000000
  }
  .payment-account dd{
    width 2.1rem
    height 1.2rem
    display block
    margin auto
    float right
  }

  .payment-money{
    width 2rem
    height 0.46rem
    display block
    font-size 0.16rem
    color #323232
    text-align center
    line-height 0.46rem
  }
  .payment-money span{
    font-size 0.16rem
    color #ff3a3b
    margin-left 0.1rem
    font-weight bold
  }
  .payment-void{
    width 0.9rem
    height 0.32rem
    border 1px solid #000000
    font-size 0.16rem
    line-height 0.34rem
    border-radius 4px
    color #000000
    float left
    text-align center
  }

  .payment-pay{
    width 0.9rem
    height 0.32rem
    border 1px solid #ff3a3b
    font-size 0.16rem
    line-height 0.34rem
    border-radius 4px
    float right
    color #ff3a3b
    text-align center
  }

</style>













































































































