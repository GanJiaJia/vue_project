<!--默认五星玩法-->
<!--五星玩法-->
<template>


  <div class="size-content">
    <div class="size-head">
      <ul>
        <li class="size-head1">
          <a  onclick="history.go(-1)" >
            <img src="../../images/Return-@2x.png" alt="">
          </a>
        </li>
        <li class="size-head2" @click="hideDailog">
          <span class="size-span1">玩法</span>
          <span class="size-span2">大小单双-前二大小单双</span>
          <i class="size-down"></i>
        </li>
        <li class="size-head3" @click='open'>
          <img src="../../images/11PxCook.png" alt="">
          <ul v-show="showha">
            <router-link tag="div" to="/explain">
              <li>玩法说明</li>
            </router-link>
            <router-link tag="div" to="/betting">
              <li class="paying-t">投注记录</li>
            </router-link>
            <router-link tag="div" to="/trend">
              <li class="paying-t">走势图</li>
            </router-link>
          </ul>
        </li>
      </ul>
    </div>
    <!--下拉显示-->
    <transition name="fade">

      <div v-show="isShow" class="header-is-active" @click="hideDailog">
        <div class="size-modal">
          <dl class="size-modal1">
            <dt>大小单双</dt>
            <dd class="w590"></dd>
          </dl>
          <ul>
            <router-link tag="div" to="/playing">
              <li>五星</li>
            </router-link>
            <router-link tag="div" to="/four">
              <li>四星</li>
            </router-link>
            <router-link tag="div" to="/three">
              <li>三星</li>
            </router-link>
            <router-link tag="div" to="/position">
              <li>定位胆</li>
            </router-link>
            <router-link tag="div" to="/size">
              <li class="red">大小单双</li>
            </router-link>
            <router-link tag="div" to="/optional2">
              <li>任选二</li>
            </router-link>
            <router-link tag="div" to="/optional3">
              <li>任选三</li>
            </router-link>
            <router-link tag="div" to="/optional4">
              <li>任选四</li>
            </router-link>
          </ul>
          <dl>
            <dt>前二大小单双</dt>
            <dd class="w540"></dd>
          </dl>
          <ul>
            <router-link tag="div" to="/size">
              <li class="red">前二大小单双</li>
            </router-link>
            <router-link tag="div" to="/size">
              <li>后二大小单双</li>
            </router-link>
            <router-link tag="div" to="/size">
              <li>前三大小单双</li>
            </router-link>
            <router-link tag="div" to="/size">
              <li>后三大小单双</li>
            </router-link>
          </ul>
        </div>

      </div>
    </transition>






    <!--玩法-->
    <div class="size">
      <!--其数-->
      <div class="size-fixed">
        <div class="size-fixed1">
          <dl class="fixed-q">
            <dt>612161期</dt>
            <dd>距离612162期截止</dd>
          </dl>
          <dl class="fixed-t">
            <dt><span>02</span><span>05</span><span>12</span><span>32</span><span>11</span></dt>
            <dd>00：21：55</dd>
          </dl>
        </div>
        <div class="size-fixed2">
          <dl>
            <dt><img src="../../images/phone@2x.png" alt=""></dt>
            <dd>摇一摇随机选</dd>
          </dl>
        </div>
      </div>

      <!--位数-->
      <div class="size-title">
        <dl>
          <dt>万位</dt>
          <dd>
            <ul>
              <li>大</li>
              <li>小</li>
              <li>单</li>
              <li>双</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>千位</dt>
          <dd>
            <ul>
              <li>大</li>
              <li>小</li>
              <li>单</li>
              <li>双</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>百位</dt>
          <dd>
            <ul>
              <li>大</li>
              <li>小</li>
              <li>单</li>
              <li>双</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>十位</dt>
          <dd>
            <ul>
              <li>大</li>
              <li>小</li>
              <li>单</li>
              <li>双</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>个位</dt>
          <dd>
            <ul>
              <li>大</li>
              <li>小</li>
              <li>单</li>
              <li>双</li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>

    <!--投注结算-->
    <div class="size-account">
      <dl>
        <dt>
          <div class="size-account-left">
            <img src="../../images/del@3x.png" alt="">
            <span>清空</span>
          </div>
          <div class="size-account-right">
            <span>5</span>注<span>10</span>元
          </div>
        </dt>
        <dd>
          <input type="button" value="立即投注">
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
    data() {
      return {
        isShow: false,
        showha:false
      }
    },
    props: {
      title: {
        type:String
      }},
    computed: {

    },
    methods: {
      open(){
        this.showha=!this.showha
      },
      hideDailog(i) {
        this.isShow = !this.isShow;
      }
    }

  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .size-content{
    width :7.5rem;
    height: 13.34rem;
    display block
    overflow auto
    background #eeeeee
  }
  .size-head{
    width: 7.5rem;
    height: 0.88rem;
    display: block;
    margin: auto;
    background :#ff3a3b;
    position: fixed;
    top:0;
    z-index: 99;
  }
  .size-head ul{
    width: 6.9rem;
    height: 0.88rem;
    display: block;
    margin: auto;
    line-height: 0.88rem;
  }
  .size-head ul li{
    height: 0.88rem;
    display: block;
  }
  .size-head1{
    width: 1rem
    float left
  }
  .size-head1 a{
    width: 1rem
    height 0.88rem
    display block
  }
  .size-head1 img{
    width 0.22rem
    height 0.3rem
    display block
    text-align left
    position relative
    top: 0.29rem
  }

  .size-head2{
    width :4.9rem;
    text-align: left;
    font-weight :normal;
    color: #ffffff;
    float :left
  }
  .size-head2 span.size-span1{
    width 0.24rem
    height 0.88rem
    text-align: center;
    font-size : 0.16rem;
    font-weight :normal;
    color: #ffffff;
    float :left
    display block
    writing-mode: vertical-lr;/*从左向右 从右向左是 writing-mode: vertical-rl;*/
    writing-mode: tb-lr;/*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/
    line-height 0.24rem
  }
  .size-head2 span.size-span2{
    width 4.3rem
    height 0.88rem
    text-align: center;
    font-size : 0.32rem;
    font-weight :normal;
    color: #ffffff;
    float :left
    display block
  }
  .size-head3{
    width: 1rem;
    float right
  }
  .size-head3 img{
    width: 0.36rem;
    height 0.3rem
    display block
    float right
    margin-top 0.29rem
  }
  .size-head3 ul{
    width: 1.8rem;
    height 2.1rem
    display block
    background #ffffff
    z-index 9999
    position relative
    float right
    top 0.3rem
  }
  .size-head3 ul li{
    width: 2rem;
    height 0.7rem
    display inline-block
    background #ffffff
    z-index 9999
    font-size 0.32rem
    color #fa3c3c
    line-height 0.7rem
    text-align center
    vertical-align middle
    float right
    border-top 1px solid #eeeeee
  }

  //小三角
  .size-down {
    float left
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 8px solid #ffffff;
    display inline-block
    position relative
    top:0.4rem
  }









  //  待开奖
  .header-is-active{
    width 7.5rem
    height 13.34rem
    position fixed
    z-index 99
    top 0.88rem

  }
  .size-modal{
    width 7.5rem
    height 5.36rem
    background #ffffff
    display block
  }
  //玩法种类
  .size-modal dl{
    width 7.5rem
    height 0.6rem
    display block
    background #ffffff
    float left
    position relative
    top: 0.1rem
  }
  .size-modal dl.size-modal1{
    position relative
    top: 0.3rem
    display block
    margin-bottom 0.2rem
    height 0.66rem
  }
  .size-modal  dl dt{
    float left
    margin-left 0.3rem
    display block
    font-size 0.24rem
    line-height 0.6rem
    color #000000
  }
  .size-modal  dl dd{
    width 6.38rem
    height 1px
    display block
    background #cccccc
    float right
    margin-top 0.29rem
  }
  .size-modal  dl dd.w540{
    width 5.4rem
  }
  .size-modal  dl dd.w590{
    width 5.9rem
  }
  .size-modal ul{
    width 7.5rem
    height auto
    display block
  }
  .size-modal ul li{
    width 2.3rem
    height 0.6rem
    float left
    display block
    margin-left 0.12rem
    margin-top 0.12rem
    background  #eeeeee
    font-size 0.24rem
    color #222222
    text-align center
    line-height 0.6rem
    border 1px solid #ffffff
    border-radius 4px
  }
  .size-modal ul li.red{
    background  #ffffff;
    color #ff3a3b;
    border 1px solid #ff3a3b;
  }


  // 玩法
  .size{
    width 7.5rem
    height 13.34rem
    display block
    margin-top 0.88rem
    background #ffffff
  }
  //头部其数
  .size-fixed{
    width 7.5rem
    height 1.48rem
    display block
    position fixed
    top: 0.88rem
    z-index 2
    background #ffffff
  }
  .size-fixed1{
    width 7.5rem
    height 0.88rem
    background #eeeeee
    display block
  }
  .size-fixed1 dl{
    width 6.9rem
    height 0.44rem
    display block
    margin auto
    line-height 0.44rem
  }
  .size-fixed1 dl dt{
    float left
    text-align left
  }
  .size-fixed1 dl dd{
    float right
    text-align right
  }
  .size-fixed1 dl.fixed-q dt{
    font-size 0.22rem
    color #000000
  }
  .size-fixed1 dl.fixed-q dd{
    font-size 0.22rem
    color #000000
  }
  .size-fixed1 dl.fixed-t dt{
    font-size 0.2rem
    color #fa3c3c
  }
  .size-fixed1 dl.fixed-t dt span{
    font-size 0.22rem
    color #fa3c3c
    margin-right 0.1rem
  }
  .size-fixed1 dl.fixed-t dd{
    font-size 0.22rem
    color #fa3c3c
  }


  .size-fixed2{
    width 7.5rem
    height 0.6rem
    background #ffffff
    display block
    border-bottom 1px solid #eeeeee
    float left
  }
  .size-fixed2 dl{
    width 6.9rem
    height 0.6rem
    line-height 0.6rem
    display block
    background #ffffff
    float left
    margin-left 0.3rem
  }
  .size-fixed2 dl dt{
    float left
    width 0.46rem
    height 0.6rem
    display block
    margin-left 0.1rem
  }
  .size-fixed2 dl dt img{
    float left
    width 0.345rem
    height 0.36rem
    margin-top 0.12rem
  }
  .size-fixed2 dl dd{
    float left
    width 3rem
    height 0.6rem
    display block
    font-size 0.2rem
    color #323232
  }

  //玩法位数
  .size-title{
    width 7.5rem
    display block
    height auto
    background #ffffff
    margin-top 2.36rem
  }
  .size-title dl{
    width 7.5rem
    display block
    height 1.25rem
    border-bottom 1px solid #eeeeee
  }
  .size-title dl dt{
    width 0.52rem
    display block
    height 1.02rem
    font-size 0.24rem
    color #ffffff
    background #ff3a3b;
    position relative
    float left
    top:0.115rem
    text-align center
    margin: 0 auto;
    writing-mode: vertical-lr;/*从左向右 从右向左是 writing-mode: vertical-rl;*/
    writing-mode: tb-lr;/*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/
    line-height 0.52rem
  }
  .size-title dl dd{
    width 6.5rem
    float right
    margin-right 0.3rem
    line-height 1.25rem
  }
  .size-title dl dd li{
    width 0.64rem
    height 0.64rem
    float left
    border-radius 45px
    border 1px solid #cccccc
    font-size 0.28rem
    color #ff3a3a
    line-height 0.64rem
    text-align center
    margin-top 0.3rem
    margin-left 0.6rem
    background #eeeeee
  }

  //投注结算
  .size-account{
    width 7.5rem
    display block
    height 0.76rem
    position fixed
    bottom 0

  }
  .size-account dl{
    width 7.5rem
    display block
    height 0.76rem
    background #ffffff
  }
  size-account dt{
    border-top 1px solid #eeeeee
    width 5.76rem
    display block
    height 0.76rem
    float left
    background #ffffff
  }
  .size-account dt .size-account-left{
    width 2.5rem
    display block
    height 0.76rem
    float left
    margin-left 0.3rem
    line-height 0.76rem

  }
  .size-account dt .size-account-left img{
    width 0.3rem
    display block
    height 0.33rem
    float left
    position relative
    top:0.215rem
  }
  .size-account dt .size-account-left span{
    text-align left
    font-size 0.2rem
    color #323232
    float left
    margin-left 0.1rem
  }
  .size-account dt .size-account-right{
    width 2.7rem
    display block
    height 0.76rem
    float left
    margin-right 0.2rem
    color #323232
    font-size 0.2rem
    text-align right
    line-height 0.76rem
  }
  .size-account dt .size-account-right span{
    color #fcb23c
  }
  .size-account dd{
    width 1.74rem
    display block
    height 0.76rem
    float right
    background #ff3a3b;
  }
  .size-account dd input{
    width 1.74rem
    height 0.76rem
    float right
    font-size 0.24rem
    color #ffffff
    background none
    outline none
    border:none
  }





</style>










































































