<!--我的追号-->
<template>
  <div class="chase-layout">
    <back title="方案详情"></back>
    <!--投注内容-->
    <div class="chase-content">
      <!--彩票种类-->
      <div class="chase-title">
        <dl>
          <dt>
            <!--<img src="../../images/sanfen@2x.png" alt="">-->
            <!--福彩3d-->
            <img v-if="param.sub_orders[0].lot_type=='福彩3D'||param.lot_type=='福彩3D'" src="../../images/icon/3d.png" alt="">
            <!--北京28-->
            <img v-if="param.sub_orders[0].lot_type=='北京28'||param.lot_type=='北京28'" src="../../images/icon/jing_28.png" alt="">
            <!--大乐透-->
            <img v-if="param.sub_orders[0].lot_type=='大乐透'||param.lot_type=='大乐透'" src="../../images/icon/daletou.png" alt="">
            <!--双色球-->
            <img v-if="param.sub_orders[0].lot_type=='双色球'||param.lot_type=='双色球'" src="../../images/icon/shuangseqiu.png" alt="">
            <!--排列3-->
            <img v-if="param.sub_orders[0].lot_type=='排列3'||param.lot_type=='排列3'" src="../../images/icon/pailei3.png" alt="">
            <!--排列5-->
            <img v-if="param.sub_orders[0].lot_type=='排列5'||param.lot_type=='排列5'" src="../../images/icon/pailei5.png" alt="">
            <!--山东11选5-->
            <img v-if="param.sub_orders[0].lot_type=='山东11选5'||param.lot_type=='山东11选5'" src="../../images/icon/shandong.png" alt="">
            <!--江苏快三-->
            <img v-if="param.sub_orders[0].lot_type=='江苏快三'||param.lot_type=='江苏快三'" src="../../images/icon/su_kuaisan.png" alt="">
            <!--三分PK拾-->
            <img v-if="param.sub_orders[0].lot_type=='三分PK拾'||param.lot_type=='三分PK拾'" src="../../images/icon/san_pk.png" alt="">
            <!--安徽快三-->
            <img v-if="param.sub_orders[0].lot_type=='安徽快三'||param.lot_type=='安徽快三'" src="../../images/icon/wan_kuaisan.png" alt="">
            <!--广东11选5-->
            <img v-if="param.sub_orders[0].lot_type=='广东11选5'||param.lot_type=='广东11选5'" src="../../images/icon/guangdong.png" alt="">
            <!--上海11选5-->
            <img v-if="param.sub_orders[0].lot_type=='上海11选5'||param.lot_type=='上海11选5'" src="../../images/icon/shanghai.png" alt="">
            <!--上海时时乐-->
            <img v-if="param.sub_orders[0].lot_type=='上海时时乐'||param.lot_type=='上海时时乐'" src="../../images/icon/shishile.png" alt="">
            <!--三分时时彩-->
            <img v-if="param.sub_orders[0].lot_type=='三分时时彩'||param.lot_type=='三分时时彩'" src="../../images/icon/sanfeishishicai.png" alt="">
            <!--江西11选5-->
            <img v-if="param.sub_orders[0].lot_type=='江西11选5'||param.lot_type=='江西11选5'" src="../../images/icon/jiangxi.png" alt="">
            <!--重庆时时彩-->
            <img v-if="param.sub_orders[0].lot_type=='重庆时时彩'||param.lot_type=='重庆时时彩'" src="../../images/icon/chongqinshishicai.png" alt="">
            <!--北京PK拾-->
            <img v-if="param.sub_orders[0].lot_type=='北京PK拾'||param.lot_type=='北京PK拾'" src="../../images/icon/jing_pk.png" alt="">
            <!--天津时时彩-->
            <img v-if="param.sub_orders[0].lot_type=='天津时时彩'||param.lot_type=='天津时时彩'" src="../../images/icon/tianjinshishicai1.png" alt="">
            <!--PC蛋蛋-->
            <img v-if="param.sub_orders[0].lot_type=='PC蛋蛋'||param.lot_type=='PC蛋蛋'" src="../../images/icon/pc_dandan.png" alt="">
            <!--新疆时时彩-->
            <img v-if="param.sub_orders[0].lot_type=='新疆时时彩'||param.lot_type=='新疆时时彩'" src="../../images/icon/xin_shishicai.png" alt="">
            <!--幸运28-->
            <img v-if="param.sub_orders[0].lot_type=='幸运28'||param.lot_type=='幸运28'" src="../../images/icon/xing_28.png" alt="">
            <!--六合彩-->
            <img v-if="param.sub_orders[0].lot_type=='六合彩'||param.lot_type=='六合彩'" src="../../images/icon/liuhecai.png" alt="">
            <!--广西快三-->
            <img v-if="param.sub_orders[0].lot_type=='广西快三'||param.lot_type=='广西快三'" src="../../images/icon/gui_kuaisan.png" alt="">


          </dt>
          <dd class="chase-list">
            <span> {{param.sub_orders[0].lot_type||param.lot_type}}</span>
          </dd>
          <dd class="chase-number">
            <!--编号：<span>89758111111111333</span>-->
          </dd>
        </dl>
      </div>
      <!--//  追号内容  玩法-->
      <div class="chase">
        <table class="chase-play">
          <tr class="chase-play1">
            <th>追号内容</th>
            <th>玩法</th>
            <th>注数</th>
          </tr>
          <tr class="chase-play1">
            <td>{{param.numbers_1}}</td>
            <td>{{param.parent_play_type}}-{{param.play_type}}</td>
            <td>{{param.bet_nums}}</td>
          </tr>
        </table>
        <table class="chase-tap">
          <tr class="chase-tap1" v-for="(items, i) of param.sub_orders">
            <td class="t">{{items.issue_number}}</td>
            <td class="tap1 t">{{param.bet_count}}倍</td>
            <td class="tap2 t">{{items.is_executed | transExecut}}</td>
            <td class="tap3 t">{{items.status | transWinning}}</td>
            <td class="tap4 t"><a class="viewa" @click="$router.push('/betting-chase/'+$route.params.ord+'/'+$route.params.info)">查看方案</a></td>
            <td class="tap5 t"></td>
          </tr>
          <tr class="chase-tap3">
            <td colspan="6">共<span>{{param.total_issues}}</span>期<span>{{param.total_money}}</span>元;&nbsp;{{param.total_executed | transExecuted}}<span>{{param.finished_issues}}</span>期<span>{{param.finished_money}}</span>元;&nbsp;已取消<span>{{param.cancel_issues}}</span>期<span>{{param.cancel_money}}</span>元</td>
          </tr>
        </table>
      </div>

      <!--下单时间-->
      <div class="chase-time">
        <dl>
          <dt>下单时间：</dt>
          <dd><span>{{param.bet_time}}</span></dd>
        </dl>
        <dl>
          <dt>订单编号：</dt>
          <dd><span>{{$route.params.ord}}</span></dd>
        </dl>
        <dl>
          <dt class="hong">温馨提示：</dt>
          <dd class="war"><span>{{$route.params.info}}</span></dd>
        </dl>
      </div>

      <!--继续购彩-->
      <div class="chase-bottom">
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
  import {mapState} from 'vuex'
  import { mt_loading_open, mt_loading_close} from 'api/recommend'

  export default {
    components: {
      Back
    },
    data() {
      return {
        ord_id: this.$route.params.ord
      }
    },
    computed: {
      ...mapState(['user'])
    },
    created() {
      mt_loading_open()
      setTimeout(() => {
        mt_loading_close();
      },300)
      this.param = this.user.order_list
      console.log(this.param)
    },
    methods: {
      viewProgram() {
      }
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .chase-content{
    margin-top 0.88rem
  }
  .chase-title{
    border-bottom 1px solid #ccc
    height 0.8rem
    background #ffffff
    margin-bottom 0.36rem
  }
  .chase-title dl{
    padding 0 .3rem
    height 0.8rem
  }
  .chase-title dl dt{
    width 0.52rem
    height 0.8rem
    display block
    float left
  }
  .chase-title dl dt img{
    width 0.46rem
    height 0.46rem
    display block
    float left
    margin-top 0.17rem
    border-radius 45px
  }
  .chase-title dl dd.chase-list{
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

//  追号内容  玩法
  .chase{
    width 100%
    height auto
    padding 0 .3rem
    a.viewa {
      padding-bottom .008rem
      color #35b5fe
      text-decoration none
      border-bottom  1px solid #35b5fe
    }
  }
  .chase-play {
    margin-bottom 0.5rem
    width 100%

  }
  .chase-play tr.chase-play1{
    height 0.48rem
    border 1px solid #ccc
    th,td {
      width 37%
      font-size 0.2rem
      color #323232
      height 0.48rem
      border 1px solid #ccc
      text-align center
      vertical-align middle
      &:first-child {
        max-width 2rem
        word-wrap break-word
      }

    }

  }

//  查看此期
  .chase-tap{
    width 100%
    border 1px solid #ccc
  }

  .chase-tap tr td{
    width 30%
    height 0.48rem
    border 1px solid #ccc
    line-height 0.48rem
    text-align center
    color #000000
    font-size 0.18rem
    box-sizing border-box
    &.tap1 {
      width 10%
    }
    &.tap2 {
      width 12%
    }
    &.tap3 {
      width 12%
    }
    &.tap4 {
      width 18%
    }
    &.tap5 {
      width 18%
    }
  }
  .chase-tap3 span {
    color #ff3a3b
  }


//  下单时间
  .chase-time{
    /*width 7.5rem
    display block
    height auto*/
    margin-top 0.6rem
    margin-bottom 1.8rem
  }
  .chase-time dl{
    width 6.9rem
    display block
    height 0.32rem
    margin auto
    line-height 0.32rem

  }
  .chase-time dl dt{
    display block
    height 0.32rem
    float left
    color #323232
    font-size 0.18rem
  }
  .chase-time dl dt.hong{
    color #fa3c3c
  }
  .chase-time dl dd{
    display block
    height 0.32rem
    float left
    color #323232
    font-size 0.18rem
    margin-left 0.1rem
    text-align left
    line-height 0.32rem
  }
  .chase-time dl dd.war{
    width 5.4rem
  }
  .chase-time dl dd span{
    color #323232
    font-size 0.18rem
    margin-right  0.1rem
  }

//  继续购彩
  .chase-bottom{
    width 7.5rem
    height 1.2rem
    display block
    position fixed
    bottom 0
    z-index 999
  }
  .chase-bottom dl{
    width 6.9rem
    height 0.6rem
    margin auto
    display block
    background #fa3c3c
    border-radius 4px
  }
  .chase-bottom input{
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













































































































