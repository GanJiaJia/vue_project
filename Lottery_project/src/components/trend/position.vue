<!--默认五星玩法-->
<!--五星玩法-->
<template>


  <div class="playing-content">
    <div class="playing-head">
      <ul>
        <li class="playing-head1">
          <a  onclick="history.go(-1)" >
            <img src="../../images/Return-@2x.png" alt="">
          </a>
        </li>
        <li class="playing-head2" @click="hideDailog">
          <span class="playing-span1">玩法</span>
          <span class="playing-span2">定位胆-定位胆</span>
          <i class="playing-down"></i>
        </li>
        <li class="playing-head3" @click='open'>
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
        <div class="header-modal">
          <dl class="header-modal1">
            <dt>定位胆</dt>
            <dd class="w620"></dd>
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
              <li class="red">定位胆</li>
            </router-link>
            <router-link tag="div" to="/size">
              <li>大小单双</li>
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
            <dt>定位胆</dt>
            <dd class="w620"></dd>
          </dl>
          <ul>
            <router-link tag="div" to="/position">
              <li class="red">定位胆</li>
            </router-link>
          </ul>
        </div>

      </div>
    </transition>






    <!--玩法-->
    <div class="playing">
      <!--其数-->
      <div class="playing-fixed">
        <div class="playing-fixed1">
          <dl class="fixed-q">
            <dt>612161期</dt>
            <dd>距离612162期截止</dd>
          </dl>
          <dl class="fixed-t">
            <dt><span>02</span><span>05</span><span>12</span><span>32</span><span>11</span></dt>
            <dd>00：21：55</dd>
          </dl>
        </div>
        <div class="playing-fixed2">
          <dl>
            <dt><img src="../../images/phone@2x.png" alt=""></dt>
            <dd>摇一摇随机选</dd>
          </dl>
        </div>
      </div>

      <!--位数-->
      <div class="playing-title">
        <dl>
          <dt>万位</dt>
          <dd>
            <ul>
              <li>0</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>千位</dt>
          <dd>
            <ul>
              <li>0</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>百位</dt>
          <dd>
            <ul>
              <li>0</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>十位</dt>
          <dd>
            <ul>
              <li>0</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
            </ul>
          </dd>
        </dl>
        <dl>
          <dt>个位</dt>
          <dd>
            <ul>
              <li>0</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>

    <!--投注结算-->
    <div class="playing-account">
      <dl>
        <dt>
          <div class="playing-account-left">
            <img src="../../images/del@3x.png" alt="">
            <span>清空</span>
          </div>
          <div class="playing-account-right">
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
  .playing-content{
    width :7.5rem;
    height: 13.34rem;
    display block
    overflow auto
    background #eeeeee
  }
  .playing-head{
    width: 7.5rem;
    height: 0.88rem;
    display: block;
    margin: auto;
    background :#ff3a3b;
    position: fixed;
    top:0;
    z-index: 99;
  }
  .playing-head ul{
    width: 6.9rem;
    height: 0.88rem;
    display: block;
    margin: auto;
    line-height: 0.88rem;
  }
  .playing-head ul li{
    height: 0.88rem;
    display: block;
  }
  .playing-head1{
    width: 1rem
    float left
  }
  .playing-head1 a{
    width: 1rem
    height 0.88rem
    display block
  }
  .playing-head1 img{
    width 0.22rem
    height 0.3rem
    display block
    text-align left
    position relative
    top: 0.29rem
  }

  .playing-head2{
    width :4.9rem;
    text-align: left;
    font-weight :normal;
    color: #ffffff;
    float :left
  }
  .playing-head2 span.playing-span1{
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
  .playing-head2 span.playing-span2{
    width 4.3rem
    height 0.88rem
    text-align: center;
    font-size : 0.32rem;
    font-weight :normal;
    color: #ffffff;
    float :left
    display block
  }
  .playing-head3{
    width: 1rem;
    float right
  }
  .playing-head3 img{
    width: 0.36rem;
    height 0.3rem
    display block
    float right
    margin-top 0.29rem
  }
  .playing-head3 ul{
    width: 1.8rem;
    height 2.1rem
    display block
    background #ffffff
    z-index 9999
    position relative
    float right
    top 0.3rem
  }
  .playing-head3 ul li{
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
  .playing-down {
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
  .header-modal{
    width 7.5rem
    height 4.7rem
    background #ffffff
    display block
  }
  //玩法种类
  .header-modal dl{
    width 7.5rem
    height 0.6rem
    display block
    background #ffffff
    float left
    position relative
    top: 0.1rem
  }
  .header-modal dl.header-modal1{
    position relative
    top: 0.3rem
    display block
    margin-bottom 0.2rem
    height 0.66rem
  }
  .header-modal  dl dt{
    float left
    margin-left 0.3rem
    display block
    font-size 0.24rem
    line-height 0.6rem
    color #000000
  }
  .header-modal  dl dd{
    width 6.38rem
    height 1px
    display block
    background #cccccc
    float right
    margin-top 0.29rem
  }
  .header-modal  dl dd.w620{
    width 6.2rem
  }

  .header-modal ul{
    width 7.5rem
    height auto
    display block
  }
  .header-modal ul li{
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
  .header-modal ul li.red{
    background  #ffffff;
    color #ff3a3b;
    border 1px solid #ff3a3b;
  }




  // 玩法
  .playing{
    width 7.5rem
    height 13.34rem
    display block
    margin-top 0.88rem
    background #ffffff
  }
  //头部其数
  .playing-fixed{
    width 7.5rem
    height 1.48rem
    display block
    position fixed
    top: 0.88rem
    z-index 2
    background #ffffff
  }
  .playing-fixed1{
    width 7.5rem
    height 0.88rem
    background #eeeeee
    display block
  }
  .playing-fixed1 dl{
    width 6.9rem
    height 0.44rem
    display block
    margin auto
    line-height 0.44rem
  }
  .playing-fixed1 dl dt{
    float left
    text-align left
  }
  .playing-fixed1 dl dd{
    float right
    text-align right
  }
  .playing-fixed1 dl.fixed-q dt{
    font-size 0.22rem
    color #000000
  }
  .playing-fixed1 dl.fixed-q dd{
    font-size 0.22rem
    color #000000
  }
  .playing-fixed1 dl.fixed-t dt{
    font-size 0.2rem
    color #fa3c3c
  }
  .playing-fixed1 dl.fixed-t dt span{
    font-size 0.22rem
    color #fa3c3c
    margin-right 0.1rem
  }
  .playing-fixed1 dl.fixed-t dd{
    font-size 0.22rem
    color #fa3c3c
  }


  .playing-fixed2{
    width 7.5rem
    height 0.6rem
    background #ffffff
    display block
    border-bottom 1px solid #eeeeee
    float left
  }
  .playing-fixed2 dl{
    width 6.9rem
    height 0.6rem
    line-height 0.6rem
    display block
    background #ffffff
    float left
    margin-left 0.3rem
  }
  .playing-fixed2 dl dt{
    float left
    width 0.46rem
    height 0.6rem
    display block
    margin-left 0.1rem
  }
  .playing-fixed2 dl dt img{
    float left
    width 0.345rem
    height 0.36rem
    margin-top 0.12rem
  }
  .playing-fixed2 dl dd{
    float left
    width 3rem
    height 0.6rem
    display block
    font-size 0.2rem
    color #323232
  }

  //玩法位数
  .playing-title{
    width 7.5rem
    display block
    height auto
    background #ffffff
    margin-top 2.36rem
  }
  .playing-title dl{
    width 7.5rem
    display block
    height 2.5rem
    border-bottom 1px solid #eeeeee
  }
  .playing-title dl dt{
    width 0.52rem
    display block
    height 1.02rem
    font-size 0.24rem
    color #ffffff
    background #ff3a3b;
    position relative
    float left
    top:0.74rem
    text-align center
    margin: 0 auto;
    writing-mode: vertical-lr;/*从左向右 从右向左是 writing-mode: vertical-rl;*/
    writing-mode: tb-lr;/*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/
    line-height 0.52rem
  }
  .playing-title dl dd{
    width 6.5rem
    float right
    margin-right 0.3rem
    line-height 1.25rem
  }
  .playing-title dl dd li{
    width 0.64rem
    height 0.64rem
    float left
    border-radius 45px
    border 1px solid #cccccc
    font-size 0.28rem
    color #ff3a3a
    line-height 0.64rem
    text-align center
    margin-top 0.36rem
    margin-left 0.6rem
    background #eeeeee
  }

  //投注结算
  .playing-account{
    width 7.5rem
    display block
    height 0.76rem
    position fixed
    bottom 0

  }
  .playing-account dl{
    width 7.5rem
    display block
    height 0.76rem
    background #ffffff
  }
  .playing-account dt{
    border-top 1px solid #eeeeee
    width 5.76rem
    display block
    height 0.76rem
    float left
    background #ffffff
  }
  .playing-account dt .playing-account-left{
    width 2.5rem
    display block
    height 0.76rem
    float left
    margin-left 0.3rem
    line-height 0.76rem

  }
  .playing-account dt .playing-account-left img{
    width 0.3rem
    display block
    height 0.33rem
    float left
    position relative
    top:0.215rem
  }
  .playing-account dt .playing-account-left span{
    text-align left
    font-size 0.2rem
    color #323232
    float left
    margin-left 0.1rem
  }
  .playing-account dt .playing-account-right{
    width 2.5rem
    display block
    height 0.76rem
    float right
    margin-right 0.2rem
    color #323232
    font-size 0.2rem
    text-align right
    line-height 0.76rem
  }
  .playing-account dt .playing-account-right span{
    color #fcb23c
  }
  .playing-account dd{
    width 1.74rem
    display block
    height 0.76rem
    float right
    background #ff3a3b;
  }
  .playing-account dd input{
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










































































