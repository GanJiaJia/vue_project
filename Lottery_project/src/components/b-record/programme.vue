<!--全部订单-->
<template>
  <div class="programme-layout">
    <back title="方案详情"></back>
    <!--投注内容-->
    <div class="programme-content">
      <!--彩票种类-->
      <div class="programme-title">
        <dl>
          <dt>
            <img src="../../images/sanfen@2x.png" alt="">
          </dt>
          <dd class="programme-title1">
            三分时时彩
          </dd>
          <dd class="programme-title2">
            编号：<span>89758111111111333</span>
          </dd>
        </dl>
      </div>
      <!--订单金额-->
      <div class="programme-money">
        <ul>
          <li class="programme-money1">
            <p>104.00元</p>
            <span>订单金额</span>
          </li>
          <li class="programme-money2">
            <p>待派奖</p>
            <span>订单状态</span>
          </li>
          <li class="programme-money3">
            <p class="hong">100000.00元</p>
            <span>中奖金额</span>
          </li>
        </ul>
      </div>
    <!--开奖号码-->
      <div class="programme-code">
        <dl>
          <dt>开奖号码</dt>
          <dd>
            <span>2</span>
            <span>4</span>
            <span>3</span>
            <span>1</span>
            <span>3</span>
            <span>1</span>
          </dd>
        </dl>
        <dl>
          <dt>投注内容</dt>
          <dd>1倍</dd>
          <dd>57注</dd>
        </dl>
        <dl>
          <dt>投注内容</dt>
          <dd>1倍</dd>
          <dd>57注</dd>
        </dl>
      </div>
      <!--注数-->
      <div class="programme-number">
        <dl>
          <dt>五星-直选复式</dt>
          <dd>32注</dd>
          <dd>
            <span>0,8</span>
            <span>3,6</span>
            <span>4,1</span>
            <span>5,2</span>
            <span>5,5</span>
            <span>5,0</span>
          </dd>
        </dl>
        <dl>
          <dt>五星-直选复式</dt>
          <dd>32注</dd>
          <dd>
            <span>0,8</span>
            <span>3,6</span>
            <span>4,1</span>
            <span>5,2</span>
            <span>5,5</span>
            <span>5,0</span>
          </dd>
        </dl>
        <dl>
          <dt>定位胆-直选复式</dt>
          <dd>32注</dd>
          <dd>
            <span>0,8,15,15,1,1</span>
          </dd>
        </dl>
      </div>
      <!--中奖详情-->
      <div class="programme-details">
        <h4>中奖详情</h4>
        <table>
          <tr class="programme-details1">
            <th>税前奖金</th>
            <td>税后奖金</td>
          </tr>
          <tr>
            <th>￥100,000</th>
            <td class="hong">￥80,000</td>
          </tr>
        </table>
      </div>

      <!--下单时间-->
      <div class="programme-time">
        <dl>
          <dt>下单时间：</dt>
          <dd><span>2017-05-05</span><span>10:15:14</span></dd>
        </dl>
        <dl>
          <dt>订单编号：</dt>
          <dd><span>20170505DDDZZKK</span><span>131413141314</span></dd>
        </dl>
        <dl>
          <dt class="hong">温馨提示：</dt>
          <dd class="war"><span>如果中奖，万元以上中奖金额的用户会由专人电话通知，万元一下的金额直接打入用户账户</span></dd>
        </dl>
      </div>

      <!--继续购彩-->
      <div class="programme-bottom">
        <router-link tag="div" class="tab-item" to="/lottery">
          <dl>
            <input type="button" value="继续够彩">
          </dl>
        </router-link>
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
  .programme-layout{
    width :7.5rem;
    height: 13.34rem;
    display block
    overflow auto
    background #ffffff
  }
  .programme-content{
    width :7.5rem;
    height: auto;
    display block
    margin-top 0.88rem
  }
  .programme-title{
    width 7.5rem
    height 0.8rem
    background #ffffff
    display block
    margin-bottom 0.2rem
  }
  .programme-title dl{
    width 6.9rem
    height 0.8rem
    display block
    margin auto
  }
  .programme-title dl dt{
    width 0.52rem
    height 0.8rem
    display block
    float left
  }
  .programme-title dl dt img{
    width 0.46rem
    height 0.46rem
    display block
    float left
    margin-top 0.17rem
    border-radius 45px
  }
  .programme-title dl dd.programme-title1{
    width 2rem
    height 0.8rem
    display block
    float left
    margin-left 0.2rem
    font-size 0.24rem
    color #323232
    text-align left
    line-height 0.8rem
  }
  .programme-title dl dd.programme-title2{
    width 4rem
    height 0.8rem
    display block
    font-size 0.24rem
    color #323232
    text-align right
    line-height 0.8rem
    float right
  }
  .programme-title dl dd.programme-title2 span{
    font-size 0.24rem
    color #323232
  }
//订单的金额
.programme-money{
  width 7.5rem
  display block
  height 0.74rem
  border-bottom 1px solid #eeeeee
}
  .programme-money ul{
    width 6.9rem
    display block
    height 0.74rem
    margin auto
  }
  .programme-money ul li{
    width 2.3rem
    display block
    height 0.54rem
    margin auto
    margin-top 0.1rem
    float left
    text-align center
  }
  .programme-money ul li.programme-money1{
    width 2.28rem
  }
  .programme-money ul li.programme-money2{
    width 2.3rem
    border-left 1px solid #eeeeee
    border-right  1px solid #eeeeee
  }
  .programme-money ul li.programme-money3{
    width 2.28rem
  }
  .programme-money ul li p{
    font-size 0.24rem
    color #323232
    line-height 0.32rem
  }
  .programme-money ul li p.hong{
    color #fa3c3c
  }
  .programme-money ul li span{
    font-size 0.2rem
    color #323232
    float left
    text-align center
    display block
    width 2.28rem
    line-height 0.22rem
  }

//开奖号码
.programme-code{
  width 6.9rem
  height auto
  display block
  margin auto
}
  .programme-code dl{
    width 6.9rem
    height 0.48rem
    display block
    margin auto
    border-bottom 1px solid #eeeeee
    line-height 0.48rem
  }
  .programme-code dl dt {
    float left
    color #323232
    font-size 0.2rem
  }
  .programme-code dl dd{
    float left
    color #323232
    font-size 0.2rem
    margin-left 0.2rem
  }
  .programme-code dl dd span{
    float left
    color #fc3232
    font-size 0.2rem
    margin-right  0.1rem
  }
//  中奖注数
  .programme-number{
    width 6.9rem
    height auto
    display block
    margin auto
    border-bottom 1px solid #eeeeee
    padding 0.1rem 0
  }
  .programme-number dl{
    width 6.9rem
    height 0.42rem
    display block
    line-height 0.42rem
  }
  .programme-number dl dt{
    float left
    font-size 0.16rem
    color #323232
  }
  .programme-number dl dd{
    font-size 0.18rem
    color #000000
    float left
    margin-left 0.2rem
  }
  .programme-number dl dd span{
    margin-right 0.1rem
  }


//    中奖详情
.programme-details{
  width 6.9rem
  height auto
  display block
  margin auto
}
  .programme-details h4{
    width 6.9rem
    display block
    line-height 0.48rem
    font-size 0.2rem
    color #000000
  }
  .programme-details table tr{
    width 6.88rem
    display block
    line-height 0.48rem
    font-size 0.2rem
    color #000000
    border-left 1px solid #eeeeee
    border-right 1px solid #eeeeee
    border-bottom 1px solid #eeeeee
    float left
  }
  .programme-details table tr th{
    width 3.43rem
    display block
    line-height 0.48rem
    font-size 0.2rem
    color #000000
    text-align center
    float left
  }
  .programme-details table tr td{
    width 3.43rem
    display block
    line-height 0.48rem
    font-size 0.2rem
    color #000000
    text-align center
    float right
    border-left 1px solid #eeeeee
  }
  .programme-details table tr.programme-details1 th{
    border-top 1px solid #eeeeee
  }
  .programme-details table tr.programme-details1 td{
    border-top 1px solid #eeeeee
  }
  .programme-details table tr td.hong{
    color #fa3c3c
  }


  //  下单时间
  .programme-time{
    width 7.5rem
    display block
    height auto
    margin-top 0.6rem
  }
  .programme-time dl{
    width 6.9rem
    display block
    height 0.32rem
    margin auto
    line-height 0.32rem

  }
  .programme-time dl dt{
    display block
    height 0.32rem
    float left
    color #323232
    font-size 0.18rem
  }
  .programme-time dl dt.hong{
    color #fa3c3c
  }
  .programme-time dl dd{
    display block
    height 0.32rem
    float left
    color #323232
    font-size 0.18rem
    margin-left 0.1rem
    text-align left
    line-height 0.32rem
  }
  .programme-time dl dd.war{
    width 5.4rem
  }
  .programme-time dl dd span{
    color #323232
    font-size 0.18rem
    margin-right  0.1rem
  }






















  //  继续购彩
  .programme-bottom{
    width 7.5rem
    height 1.2rem
    display block
    position fixed
    bottom 0
    z-index 999
  }
  .programme-bottom dl{
    width 6.9rem
    height 0.6rem
    margin auto
    display block
    background #fa3c3c
    border-radius 4px
  }
  .programme-bottom input{
    width 6.9rem
    height 0.6rem
    margin auto
    display block
    background:none;
    outline:none;
    border:0;
    font-size 0.24rem
    color #fefefe
    text-align center
    line-height 0.6rem
  }
</style>













































































































