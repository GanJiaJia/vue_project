<template>
  <div class="betting-content" >
    <div class="betting-head">
      <ul>
        <li class="betting-head1">
          <a  onclick="history.go(-1)" >
            <img src="../../images/Return-@2x.png" alt="">
          </a>
        </li>
        <li class="betting-head2 title" @click="isShow=!isShow">
          <span>{{order_name}}</span>
          <i v-show="!isShow" class="triangle-down"></i>
          <i v-show="isShow" class="triangle-up"></i>
        </li>
        <li class="betting-head3">
          <span @click="onRefresh(false)"><Icon type="refresh" style="font-size: 0.4rem;float: right;padding: 0.25rem 0 0.25rem 0.58rem" ></Icon></span>
        </li>
      </ul>
    </div>
    <!--下拉显示-->
    <transition name="fade">

      <div v-show="isShow" class="header-is-active" @click ="isShow = false">

        <div class="header-modal-content">
          <ul>
            <li v-for="(items, key) in order_name_list" :class="{red: items.val==order_id}" @click="chkOrd(items.val,items.name)">{{items.name}}</li>
          </ul>
        </div>
      </div>
    </transition>

    <div class="betting" :style="{'-webkit-overflow-scrolling': scrollMode}">
      <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData" >
        <!--@click="gotoBetting(lotteryList,key)"-->
      <!--<mt-loadmore :top-mothod="loadTop" :bottom-method="loadMore" :bottom-all-loaded="allLoaded" ref="loadmore" :auto-fill="false" @top-status-change="handleTopChange">-->
        <dl class="betting-list" v-for="(lotteryList,key) in lotteryList"  @click="gotoBetting(lotteryList,key)">
          <dt class="betting-list-img">
            <!--福彩3d-->
            <img v-if="lotteryList.sub_orders[0].lot_type=='福彩3D'||lotteryList.lot_type=='福彩3D'" src="../../images/icon/3d.png" alt="">
            <!--北京28-->
            <img v-if="lotteryList.sub_orders[0].lot_type=='北京28'||lotteryList.lot_type=='北京28'" src="../../images/icon/jing_28.png" alt="">
            <!--大乐透-->
            <img v-if="lotteryList.sub_orders[0].lot_type=='大乐透'||lotteryList.lot_type=='大乐透'" src="../../images/icon/daletou.png" alt="">
            <!--双色球-->
            <img v-if="lotteryList.sub_orders[0].lot_type=='双色球'||lotteryList.lot_type=='双色球'" src="../../images/icon/shuangseqiu.png" alt="">
            <!--排列3-->
            <img v-if="lotteryList.sub_orders[0].lot_type=='排列3'||lotteryList.lot_type=='排列3'" src="../../images/icon/pailei3.png" alt="">
            <!--排列5-->
            <img v-if="lotteryList.sub_orders[0].lot_type=='排列5'||lotteryList.lot_type=='排列5'" src="../../images/icon/pailei5.png" alt="">
            <!--山东11选5-->
            <img v-if="lotteryList.sub_orders[0].lot_type=='山东11选5'||lotteryList.lot_type=='山东11选5'" src="../../images/icon/shandong.png" alt="">
            <!--江苏快三-->
            <img v-if="lotteryList.sub_orders[0].lot_type=='江苏快三'||lotteryList.lot_type=='江苏快三'" src="../../images/icon/su_kuaisan.png" alt="">
            <!--三分PK拾-->
            <img v-if="lotteryList.sub_orders[0].lot_type=='三分PK拾'||lotteryList.lot_type=='三分PK拾'" src="../../images/icon/san_pk.png" alt="">
            <!--安徽快三-->
            <img v-if="lotteryList.sub_orders[0].lot_type=='安徽快三'||lotteryList.lot_type=='安徽快三'" src="../../images/icon/wan_kuaisan.png" alt="">
            <!--广东11选5-->
            <img v-if="lotteryList.sub_orders[0].lot_type=='广东11选5'||lotteryList.lot_type=='广东11选5'" src="../../images/icon/guangdong.png" alt="">
            <!--上海11选5-->
            <img v-if="lotteryList.sub_orders[0].lot_type=='上海11选5'||lotteryList.lot_type=='上海11选5'" src="../../images/icon/shanghai.png" alt="">
            <!--上海时时乐-->
            <img v-if="lotteryList.sub_orders[0].lot_type=='上海时时乐'||lotteryList.lot_type=='上海时时乐'" src="../../images/icon/shishile.png" alt="">
            <!--三分时时彩-->
            <img v-if="lotteryList.sub_orders[0].lot_type=='三分时时彩'||lotteryList.lot_type=='三分时时彩'" src="../../images/icon/sanfeishishicai.png" alt="">
            <!--江西11选5-->
            <img v-if="lotteryList.sub_orders[0].lot_type=='江西11选5'||lotteryList.lot_type=='江西11选5'" src="../../images/icon/jiangxi.png" alt="">
            <!--重庆时时彩-->
            <img v-if="lotteryList.sub_orders[0].lot_type=='重庆时时彩'||lotteryList.lot_type=='重庆时时彩'" src="../../images/icon/chongqinshishicai.png" alt="">
            <!--北京PK拾-->
            <img v-if="lotteryList.sub_orders[0].lot_type=='北京PK拾'||lotteryList.lot_type=='北京PK拾'" src="../../images/icon/jing_pk.png" alt="">
            <!--天津时时彩-->
            <img v-if="lotteryList.sub_orders[0].lot_type=='天津时时彩'||lotteryList.lot_type=='天津时时彩'" src="../../images/icon/tianjinshishicai1.png" alt="">
            <!--PC蛋蛋-->
            <img v-if="lotteryList.sub_orders[0].lot_type=='PC蛋蛋'||lotteryList.lot_type=='PC蛋蛋'" src="../../images/icon/pc_dandan.png" alt="">
            <!--新疆时时彩-->
            <img v-if="lotteryList.sub_orders[0].lot_type=='新疆时时彩'||lotteryList.lot_type=='新疆时时彩'" src="../../images/icon/xin_shishicai.png" alt="">
            <!--幸运28-->
            <img v-if="lotteryList.sub_orders[0].lot_type=='幸运28'||lotteryList.lot_type=='幸运28'" src="../../images/icon/xing_28.png" alt="">
            <!--六合彩-->
            <img v-if="lotteryList.sub_orders[0].lot_type=='六合彩'||lotteryList.lot_type=='六合彩'" src="../../images/icon/liuhecai.png" alt="">
            <!--广西快三-->
            <img v-if="lotteryList.sub_orders[0].lot_type=='广西快三'||lotteryList.lot_type=='广西快三'" src="../../images/icon/gui_kuaisan.png" alt="">
          </dt>
          <dd class="betting-list-title">
            <dl>
              <dt>{{lotteryList.sub_orders[0].lot_type||lotteryList.lot_type}} <span v-if="order_id==3" style="color: #999;padding-left: .3rem"> 追号</span></dt>
              <dd><span>{{lotteryList.bet_time}}</span> </dd>
            </dl>
          </dd>
          <dd class="betting-list-state">
            <dl>
              <dt>{{lotteryList.total_money}}元</dt>
              <dd>
                <span style="color:#35b5fe;" v-if="order_id==3">{{lotteryList.finished_issues}}/{{lotteryList.cancel_issues}}/{{lotteryList.total_issues}}</span>
              </dd>
              <dd v-if="order_id!=3" :class="{blue:lotteryList.is_winning_all==2,red:lotteryList.is_winning_all==1}">{{lotteryList.is_winning_all | transWinningStatus}}</dd>
              <dd v-if="order_id==3">{{lotteryList.total_executed | transExecuted}}</dd>
            </dl>
          </dd>
        </dl>
      </v-scroll>
      <!--</mt-loadmore>-->
    </div>
  </div>

</template>


<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import NData from '@/components/tab/n-data'
  import VScroll from "@/components/public/pull-refresh"
  import {alertip, requestOpt, mt_loading_open, mt_loading_close} from 'api/recommend'
  import {mapState, mapActions} from 'vuex'
  import {ORDER_LIST,ORDER_POS_KEY,DEL_FLAG} from '../../store/user'
  import {Loadmore} from 'mint-ui'

  export default {
    components: {
      Loadmore,
      Back,
      NData,
      VScroll
    },
    data() {
      return {
        topStatus: '',
        scrollMode: 'touch',
        loadflag: 'fresh',
        isShow: false,
        allLoaded: false,
        page: 1,
        order_id: 0,
        order_name: '全部订单',
        order_name_list: [
          {name: '全部订单', val: 0},
          {name: '待开奖', val: 1},
          {name: '已中奖', val: 2},
          {name: '我的追号', val: 3},
          {name: '我的撤单', val: 4},
          {name: '未中奖', val: 5},
          {name: '作废', val: 6},
        ],
        lot_type_id: '8',
        lotteryList: [],
        lotteryKey: [],
        scrollData: {
          noFlag: false //暂无更多数据显示
        },
        nodata: false,
        flag: true,
        key: 0,
        pos: 0,
        delflg: false,
      }
    },
    computed: mapState({user: state => state.user}),
    beforeRouteLeave(to, from, next) {
      from.meta.keepAlive = true;
      next()
    },
    methods: {
      ...mapActions(['ORDER_LIST','ORDER_POS_KEY','DEL_FLAG']),
      onRefresh(done) {
        this.page = 1;
//        this.flag = false
        this.ORDER_POS_KEY(0)
        this.bet_records('fresh');
        if(done) {
          done();
        }
      },
      onInfinite(done) {
        this.page += 1;
        if (this.nodata) {
          this.scrollData.noFlag = true
          return ;
        }
        this.bet_records('load');
        done();
      },
      handleTopChange: function (status) {
        this.topStatus = status;
      },
      loadTop() {
        this.page = 1;
        this.bet_records('fresh');
        this.$refs.loadmore.onTopLoaded()
      },
      loadMore() {
        this.page += 1;
        this.bet_records('load');
//        this.allLoaded = true;
//        this.$refs.loadmore.onBottomLoaded()
      },
      chkOrd(id,name) {
        this.scrollData.noFlag = false;
        this.order_id = id;
        this.order_name = name;
        this.page = 1;
        this.lotteryList = [];
        this.bet_records('fresh');
      },
      bet_records(loadflag) { // 投注记录
        mt_loading_open();
        let url = 'bet_records?page='+ this.page+'&type='+this.order_id;
        requestOpt.reqGet(url, this.user.token, (res) => {
          if(res.data.status === 1) {
            this.scrollData.noFlag = res.data.data.paging_arr.total_pages <= this.page  ? true : false;
            this.nodata = res.data.data.paging_arr.total_pages <= this.page  ? true : false;
            this.lucky_info = res.data.data.lucky_info

            if (loadflag === 'fresh') {
              this.lotteryList = Object.values(res.data.data.list);
              this.lotteryKey = Object.keys(res.data.data.list);
            } else {
              this.lotteryList = Object.values(Object.assign(this.lotteryList,res.data.data.list))
              this.lotteryKey  = this.lotteryKey.concat(Object.keys(res.data.data.list))
            }
          } else {
            alertip(res.data.msg);
          }
          mt_loading_close()
        }, (err) => {
          alertip(err)
        });
        setTimeout(() => {
          mt_loading_close()
        },60000);
      },
      gotoBetting(obj, key) {
        this.key = key;
        this.ORDER_LIST(obj)
        this.ORDER_POS_KEY(this.pos)
        this.DEL_FLAG(false)
        if (this.order_id == 3) {
          this.$router.push({path: '/chase/'+this.lotteryKey[key]+'/'+this.lucky_info})
        } else {
          this.$router.push({path: '/betting-detail/'+this.lotteryKey[key]})
        }
//        this.$router.push({path: '/betting-detail/'+JSON.stringify(obj)+'/'+this.lotteryKey[key]})
//        evBus.$emit('haha',obj,key)
      },
      onScroll () {
        this.pos = this.$el.querySelector('.yo-scroll').scrollTop
      }
    },
    created() {

    },
    activated() {
      if (this.user.del_flag) {
        this.lotteryList.splice(this.key, 1);
        setTimeout(() => {
          this.user.del_flag = false;
        })
      }
      /*console.log(this.lotteryList)
      evBus.$on('orderdel',function () {
        console.log(this.lotteryList)
        console.log(this.key)

        evBus.$off('orderdel')
      })*/
      let ord_el = this.$el.querySelector('.yo-scroll')
      ord_el.scrollTo(0,this.pos)

    },
    mounted() {
      this.bet_records(this.loadflag);
      let ord_el = this.$el.querySelector('.yo-scroll')
      ord_el.addEventListener('scroll', this.onScroll)

  /*    this.$on('haha', obj => {
        console.log('HHAH')
      })*/
    }

  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .betting-content{
    height 100%
    overflow hidden
    /*width :7.5rem;
    height: 13.34rem;
    display block
    overflow auto
    background #eeeeee*/
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

  .triangle-up {
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 8px solid #ffffff;
    display inline-block
  }





//  下拉内容
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
    /*width 7.5rem*/
    display block
    /*background #d93f30*/
    height 100%
    margin-top 0.88rem
    overflow hidden
  }
  .betting dl.betting-list{
    /*width 7.5rem*/
    display block
    background #ffffff
    height 1.24rem
    border-bottom 1px solid #eeeeee
  }
  .betting dl.betting-list .betting-list-img{
    /*width 0.74em*/
    display block
    height 1.24rem
    margin-left 0.3rem
    float left
    line-height 1.24rem
  }
  .betting dl.betting-list .betting-list-img img{
    /*width 0.74em*/
    display inline-block
    height 0.74rem
    float left
    margin-top 0.25rem
    border-radius 45px
  }
  .betting dl.betting-list .betting-list-title{
    /*width 2.9rem*/
    display block
    height 1.24rem
    margin-left 0.2rem
    float left
  }
  .betting dl.betting-list .betting-list-title dl{
    width 2.9rem
    display block
    height 1.24rem
    float left
  }
  .betting dl.betting-list .betting-list-title dl dt{
    /*width 2.9rem*/
    display block
    height 0.62rem
    // float left
    font-size 0.3rem
    color #000
    font-weight none
    line-height 0.62rem
    text-align left
  }
  .betting dl.betting-list .betting-list-title dl dd{
    /*width 2.9em*/
    display block
    height 0.62rem
    float left
  }
  .betting dl.betting-list .betting-list-title dl dd span{
    font-size 0.25rem
    color #000
    float left
    line-height 0.62rem
    margin-right 0.1rem
    text-align left
  }
  .betting dl.betting-list .betting-list-state{
    width 2.9rem
    display block
    height 1.24rem
    margin-right  0.3rem
    float right
    text-align right
  }
  .betting dl.betting-list .betting-list-state dl{
    width 2.9rem
    display block
    height 1.24rem
    float right
  }
  .betting dl.betting-list .betting-list-state dl dt{
    width 2.9rem
    display block
    height 0.35rem
    float right
    font-size 0.25rem
    color #000
    /*font-weight bold*/
    line-height 0.44rem
  }
  .betting dl.betting-list .betting-list-state dl dd{
    width 2.9rem
    display block
    height 0.35rem
    float right
    font-size 0.25rem
    color #999
    line-height 0.4rem
  }
  .betting dl.betting-list .betting-list-state dl dd.blue{
    color #35b5fe
  }
  .betting dl.betting-list .betting-list-state dl dd.red{
    color #f00
  }
</style>










































































