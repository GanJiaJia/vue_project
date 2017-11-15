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
          <span class="playing-span2">五星-五星直选复式</span>
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
            <dt>五星</dt>
            <dd></dd>
          </dl>
          <ul>
            <router-link tag="div" to="/playing">
              <li class="red">五星</li>
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
            <dt>五星直选复式</dt>
            <dd class="w540"></dd>
          </dl>
          <ul>
            <router-link tag="div" to="/four">
              <li class="red">五星直选复式</li>
            </router-link>
          </ul>
        </div>

      </div>
    </transition>


<!--摇一摇-->

    <!--<dl>-->
      <!--<dt><img src="../../images/phone@2x.png" alt=""></dt>-->
      <!--<dd>摇一摇随机选</dd>-->
    <!--</dl>-->

    <!--玩法-->
    <div class="playing">
      <!--其数-->
      <div class="playing-fixed">
        <div class="playing-fixed1">
          <dl class="fixed-q">
            <dt>20170827053期</dt>
            <dd>距离20170827053期截止</dd>
          </dl>
          <dl class="fixed-t">
            <dt><span>02</span><span>05</span><span>12</span><span>32</span><span>11</span></dt>
            <dd>00:21:55</dd>
          </dl>
        </div>
        <div class="playing-fixed2">
          <router-link tag="div" to="/trend">
            <div class="playing-fixed2-title">
              <table>
                <tr class="start-contents1-title">
                  <td class="title-width">其数</td>
                  <td class="title-width">开奖结果</td>
                  <td>万位</td>
                  <td>千位</td>
                  <td>百位</td>
                  <td>十位</td>
                  <td>个位</td>
                  <td>前三</td>
                  <td>后三</td>
                </tr>
              </table>
            </div>
            <div class="playing-fixed2-body">
              <table>
                <tr>
                  <td  class="title-width">97561</td>
                  <td class="title-colors-red title-width">63522</td>
                  <td>大双</td>
                  <td>小单</td>
                  <td>大单</td>
                  <td>小双</td>
                  <td>小双</td>
                  <td>组六</td>
                  <td>组三</td>
                </tr>
                <tr>
                  <td  class="title-width">67261</td>
                  <td class="title-colors-red title-width">63522</td>
                  <td>大双</td>
                  <td>小单</td>
                  <td>大单</td>
                  <td>小双</td>
                  <td>小双</td>
                  <td>组六</td>
                  <td>组三</td>
                </tr>
                <tr>
                <td  class="title-width">17261</td>
                <td class="title-colors-red title-width">63522</td>
                <td>大双</td>
                <td>小单</td>
                <td>大单</td>
                <td>小双</td>
                <td>小双</td>
                <td>组六</td>
                <td>组三</td>
              </tr>
                <tr>
                  <td  class="title-width">17261</td>
                  <td class="title-colors-red title-width">63522</td>
                  <td>大双</td>
                  <td>小单</td>
                  <td>大单</td>
                  <td>小双</td>
                  <td>小双</td>
                  <td>组六</td>
                  <td>组三</td>
                </tr>
                <tr>
                  <td  class="title-width">17261</td>
                  <td class="title-colors-red title-width">63522</td>
                  <td>大双</td>
                  <td>小单</td>
                  <td>大单</td>
                  <td>小双</td>
                  <td>小双</td>
                  <td>组六</td>
                  <td>组三</td>
                </tr>
                <tr>
                  <td  class="title-width">67561</td>
                  <td class="title-colors-red title-width">63522</td>
                  <td>大双</td>
                  <td>小单</td>
                  <td>大单</td>
                  <td>小双</td>
                  <td>小双</td>
                  <td>组六</td>
                  <td>组三</td>
                </tr>
                <tr>
                  <td  class="title-width">17261</td>
                  <td class="title-colors-red title-width">63522</td>
                  <td>大双</td>
                  <td>小单</td>
                  <td>大单</td>
                  <td>小双</td>
                  <td>小双</td>
                  <td>组六</td>
                  <td>组三</td>
                </tr>
                <tr>
                  <td  class="title-width">17261</td>
                  <td class="title-colors-red title-width">63522</td>
                  <td>大双</td>
                  <td>小单</td>
                  <td>大单</td>
                  <td>小双</td>
                  <td>小双</td>
                  <td>组六</td>
                  <td>组三</td>
                </tr>
                <tr>
                  <td  class="title-width">97261</td>
                  <td class="title-colors-red title-width">63522</td>
                  <td>大双</td>
                  <td>小单</td>
                  <td>大单</td>
                  <td>小双</td>
                  <td>小双</td>
                  <td>组六</td>
                  <td>组三</td>
                </tr>
                <tr>
                  <td  class="title-width">97261</td>
                  <td class="title-colors-red title-width">63522</td>
                  <td>大双</td>
                  <td>小单</td>
                  <td>大单</td>
                  <td>小双</td>
                  <td>小双</td>
                  <td>组六</td>
                  <td>组三</td>
                </tr>
              </table>
            </div>
          </router-link>
        </div>
      </div>

    </div>
    <bit></bit>
    <Tplay></Tplay>
  </div>
</template>


<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import NData from '@/components/tab/n-data'
  import Tplay from '@/components/trend/toplay'
  import Bit from '@/components/trend/bit'
  export default {
    components: {
      Back,
      NData,
      Tplay,
      Bit
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
  .header-modal  dl dd.w540{
       width 5.4rem
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
  height 5.73rem
  display block
  position fixed
  top: 0.88rem
  z-index 2
  background red
  overflow hidden
}
.playing-fixed1{
  width 7.5rem
  height 1.1rem
  background #f2f2f2
  display block
}
  .playing-fixed1 dl{
    width 6.9rem
    height 0.5rem
    display block
    margin auto
    line-height 0.5rem
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
    font-size 0.28rem
    color #000000
  }
  .playing-fixed1 dl.fixed-q dd{
    font-size 0.28rem
    color #000000
  }
  .playing-fixed1 dl.fixed-t dt{
    font-size 0.28rem
    color #fa3c3c
  }
  .playing-fixed1 dl.fixed-t dt span{
    font-size 0.28rem
    color #fa3c3c
    margin-right 0.1rem
  }
  .playing-fixed1 dl.fixed-t dd{
    font-size 0.28rem
    color #fa3c3c
  }


  .playing-fixed2{
    width 7.5rem
    height 4.63rem
    background #f2f2f2
    display block
    border-bottom 1px solid #eeeeee
    float left
    overflow hidden
    position relative
    border-top 1px solid #e1e1e1
  }
  .playing-fixed2 .playing-fixed2-title{
    width 7.5rem
    height 0.42rem
    border-bottom 1px solid #eee
    background #f8f8f8
    position fixed
    top:2rem
    z-index 999
    display block
  }
  .playing-fixed2 .playing-fixed2-body{
    width 7.5rem
    height auto
    display block
    margin-top 0.42rem
    overflow hidden
  }
  .playing-fixed2 table tr{
    width 7.5rem
    height 0.42rem
    display block
    line-height 0.42rem
    background #f8f8f8
  }
  .playing-fixed2 table tr td{
    font-size 0.2rem
    color #000000
    width 0.66rem
    text-align center
    margin 0
    padding 0
    border none
    display block
    float left
  }
  .playing-fixed2 table tr td.title-width{
    width 1.38rem
  }
  .playing-fixed2 table tr td.title-colors-red{
    color #fa3c3c
    letter-spacing:1px;
  }




</style>










































































