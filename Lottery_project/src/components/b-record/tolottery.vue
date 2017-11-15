<template>
  <div class="betting-content">
    <div class="betting-head">
      <ul>
        <li class="betting-head1">
          <a  onclick="history.go(-1)" >
            <img src="../../images/Return-@2x.png" alt="">
          </a>
        </li>
        <li class="betting-head2 title" @click="hideDailog">
          <span>待开奖</span>
          <i class="triangle-down"></i>
        </li>
        <li class="betting-head3">
        </li>
      </ul>
    </div>
    <!--下拉显示-->
    <!--下拉显示-->
    <transition name="fade">

      <div v-show="isShow" class="header-is-active" @click="hideDailog">

        <div class="header-modal-content">
          <ul>
            <router-link tag="div" class="tab-item" to="/betting">
              <li>全部订单</li>
            </router-link>
            <router-link tag="div" class="tab-item" to="/tolottery">
              <li class="red">待开奖</li>
            </router-link>
            <router-link tag="div" class="tab-item" to="/haswinning">
              <li>已中奖</li>
            </router-link>
            <router-link tag="div" class="tab-item" to="/chasenumber">
              <li>我的追号</li>
            </router-link>
            <router-link tag="div" class="tab-item" to="/cancelorder">
              <li>我的撤单</li>
            </router-link>
            <router-link tag="div" class="tab-item" to="/notwinning">
              <li>未中奖</li>
            </router-link>
            <router-link tag="div" class="tab-item" to="/tovoid">
              <li>作废</li>
            </router-link>
          </ul>
        </div>
      </div>
    </transition>

    <!--带开奖-->
    <div class="betting">
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
      <dl class="betting-list">
        <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
        <dd class="betting-list-title">
          <dl>
            <dt>三分时时彩</dt>
            <dd><span>2017-05-05</span><span>17:50:25</span></dd>
          </dl>
        </dd>
        <dd class="tolottery-list-state">
          <dl>
            <dt>18.0元</dt>
            <dd>待开奖</dd>
          </dl>
        </dd>
      </dl>
    </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/programme">
        <dl class="betting-list">
          <dt class="betting-list-img"><img src="../../images/sanfen@2x.png" alt=""></dt>
          <dd class="betting-list-title">
            <dl>
              <dt>三分时时彩</dt>
              <dd><span>2017-05-05</span><span>17:50:25</span></dd>
            </dl>
          </dd>
          <dd class="tolottery-list-state">
            <dl>
              <dt>18.0元</dt>
              <dd>待开奖</dd>
            </dl>
          </dd>
        </dl>
      </router-link>
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
      }
    },
    props: {
      title: {
        type:String
      }},
    computed: {

    },
    methods: {
      hideDailog(i) {
        this.isShow = !this.isShow;
      }
    }

  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .betting-content{
    width :7.5rem;
    height: 13.34rem;
    display block
    overflow auto
    background #eeeeee
  }
  .betting-head{
    width: 7.5rem;
    height: 0.88rem;
    display: block;
    margin: auto;
    background :#ff3a3b;
    position: fixed;
    top:0;
    z-index: 99;
  }
  .betting-head ul{
    width: 6.9rem;
    height: 0.88rem;
    display: block;
    margin: auto;
    line-height: 0.88rem;
  }
  .betting-head ul li{
    height: 0.88rem;
    display: block;
  }
  .betting-head1{
    width: 2rem
    float left
  }
  .betting-head1 a{
    width: 2rem
    height 0.88rem
    display block
  }
  .betting-head1 img{
    width 0.22rem
    height 0.3rem
    display block
    text-align left
    position relative
    top: 0.29rem
  }

  .betting-head2{
    width :2.9rem;
    text-align: center;
    font-size : 0.32rem;
    font-weight :normal;
    color: #ffffff;
    float :left
  }
  .betting-head3{
    width: 2rem;
    float right
  }
  //小三角
  .triangle-down {
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 8px solid #ffffff;
    display inline-block
  }





  //  待开奖
  .header-is-active{
    width 7.5rem
    height 13.34rem
    position fixed
    z-index 999
    top 0.88rem
  }
  .header-modal-content{
    width 7.5rem
    height 2.4rem
    background #ffffff
    display block
  }

  .header-modal-content ul li{
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
    border-radius 0.04rem
  }
  .header-modal-content ul li.red{
    background  #ffffff;
    color #ff3a3b;
    border 1px solid #ff3a3b;
  }


  // 所有订单
  .betting{
    width 7.5rem
    display block
    background #d93f30
    height 100%
    margin-top 0.88rem
    overflow auto
  }
  .betting dl.betting-list{
    width 7.5rem
    display block
    background #ffffff
    height 1.24rem
    border-bottom 1px solid #eeeeee
  }
  .betting dl.betting-list .betting-list-img{
    width 0.74em
    display block
    height 1.24rem
    margin-left 0.3rem
    float left
    line-height 1.24rem
  }
  .betting dl.betting-list .betting-list-img img{
    width 0.74em
    display inline-block
    height 0.74rem
    float left
    margin-top 0.25rem
    border-radius 45px
  }
  .betting dl.betting-list .betting-list-title{
    width 2.9em
    display block
    height 1.24rem
    margin-left 0.2rem
    float left
  }
  .betting dl.betting-list .betting-list-title dl{
    width 2.9em
    display block
    height 1.24rem
    float left
  }
  .betting dl.betting-list .betting-list-title dl dt{
    width 2.9rem
    display block
    height 0.62rem
    float left
    font-size 0.24rem
    color #323232
    font-weight bold
    line-height 0.62rem
    text-align left
  }
  .betting dl.betting-list .betting-list-title dl dd{
    width 2.9em
    display block
    height 0.62rem
    float left
  }
  .betting dl.betting-list .betting-list-title dl dd span{
    font-size 0.14rem
    color #676767
    float left
    line-height 0.62rem
    margin-right 0.1rem
    text-align left
  }
  .betting dl.betting-list .tolottery-list-state{
    width 2.9rem
    display block
    height 1.24rem
    margin-right  0.3rem
    float right
    text-align right
  }
  .betting dl.betting-list .tolottery-list-state dl{
    width 2.9rem
    display block
    height 1.24rem
    float right
  }
  .betting dl.betting-list .tolottery-list-state dl dt{
    width 2.9rem
    display block
    height 0.62rem
    float right
    font-size 0.2rem
    color #323232
    font-weight bold
    line-height 0.62rem
  }
  .betting dl.betting-list .tolottery-list-state dl dd{
    width 2.9rem
    display block
    height 0.62rem
    float right
    font-size 0.2rem
    color #fc823c
    line-height 0.62rem
  }








</style>










































































