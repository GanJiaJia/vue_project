<template>
  <div class="lottery-content">
    <div class="lottery-head">
      <ul>
        <li class="lottery-head1"></li>
        <li class="lottery-head2">购彩大厅</li>
        <li class="lottery-head3" @click="tabFe=!tabFe;$store.commit('CLEAVE_INTERVAL',tabFe)">
          <img v-if="tabFe" class="" src="../../images/vertical.png">
          <img v-else class="" src="../../images/transverse.png">
        </li>
      </ul>
    </div>
    <!--tab 采种-->
    <div class="lottery-all">
      <ul>
        <li :class="{active:tabActive==item.code}" v-for="(item,i) in tabs" @click="tabsel(item.code,item.val)">{{item.name}}</li>
      </ul>
    </div>
    <!--彩种list-->
    <div class="lottery" v-if="tabFe">
      <router-link tag="div" class="tab-item" to="/record">
        <dl class="lottery-list" v-for="(lottyList, i) in results">
          <dt class="lottery-images"><img :src="lottyList.pic" alt=""></dt>
          <dd class="lottery-show">
            <dl>
              <dt class="lottery-top">
                <span class="l"> {{lottyList.name}}</span>
                <span class="r">第{{lottyList.issue_number}}期</span>
              </dt>
              <dd class="lottery-middle">
                <div v-if="lottyList.name=='双色球'" class="ssq">
                  <p v-if="lottyList.curr_draw_res">{{lottyList.curr_draw_res}}</p>
                  <div class="wait-open" v-else-if="lottyList.curr_draw_res==''&&lottyList.number1===''">等待开奖</div>
                  <p v-else>
                    <span v-if="lottyList.number1">{{lottyList.number1}}</span>
                    <span v-if="lottyList.number2">{{lottyList.number2}}</span>
                    <span v-if="lottyList.number3">{{lottyList.number3}}</span>
                    <span v-if="lottyList.number4">{{lottyList.number4}}</span>
                    <span v-if="lottyList.number5">{{lottyList.number5}}</span>
                    <span v-if="lottyList.number6">{{lottyList.number6}}</span>
                    <span v-if="lottyList.number7">{{lottyList.number7}}</span>
                    <span v-if="lottyList.number8">{{lottyList.number8}}</span>
                    <span v-if="lottyList.number9">{{lottyList.number9}}</span>
                    <span v-if="lottyList.number10">{{lottyList.number10}}</span>
                    <span v-if="lottyList.number11">{{lottyList.number11}}</span>
                    <span v-if="lottyList.number12">{{lottyList.number12}}</span>
                  </p>
                </div>
                <div v-else-if="lottyList.name=='大乐透'" class="dalt">
                  <p v-if="lottyList.curr_draw_res">{{lottyList.curr_draw_res}}</p>
                  <div class="wait-open" v-else-if="lottyList.curr_draw_res==''&&lottyList.number1===''">等待开奖</div>
                  <p v-else>
                    <span v-if="lottyList.number1">{{lottyList.number1}}</span>
                    <span v-if="lottyList.number2">{{lottyList.number2}}</span>
                    <span v-if="lottyList.number3">{{lottyList.number3}}</span>
                    <span v-if="lottyList.number4">{{lottyList.number4}}</span>
                    <span v-if="lottyList.number5">{{lottyList.number5}}</span>
                    <span v-if="lottyList.number6" class="spacial">{{lottyList.number6}}</span>
                    <span v-if="lottyList.number7" class="spacial">{{lottyList.number7}}</span>
                    <span v-if="lottyList.number8">{{lottyList.number8}}</span>
                    <span v-if="lottyList.number9">{{lottyList.number9}}</span>
                    <span v-if="lottyList.number10">{{lottyList.number10}}</span>
                    <span v-if="lottyList.number11">{{lottyList.number11}}</span>
                    <span v-if="lottyList.number12">{{lottyList.number12}}</span>
                  </p>
                </div>
                <div v-else-if="lottyList.name=='北京28'||lottyList.name=='幸运28'" class="bj28">
                  <p v-if="lottyList.curr_draw_res">{{lottyList.curr_draw_res}}</p>
                  <div class="wait-open" v-else-if="lottyList.curr_draw_res==''&&lottyList.number1===''">等待开奖</div>
                  <p v-else>
                    <span v-if="lottyList.number1">{{lottyList.number1}}</span>
                    <span>+</span>
                    <span v-if="lottyList.number2">{{lottyList.number2}}</span>
                    <span>+</span>
                    <span v-if="lottyList.number3">{{lottyList.number3}}</span>
                    <span>=</span>
                    <span v-if="lottyList.number4">{{lottyList.number4}}</span>
                  </p>
                </div>
                <div v-else>
                  <p v-if="lottyList.curr_draw_res">{{lottyList.curr_draw_res}}</p>
                  <div class="wait-open" v-else-if="lottyList.curr_draw_res==''&&lottyList.number1===''">等待开奖</div>
                  <p v-else>
                    <span v-if="lottyList.number1">{{lottyList.number1}}</span>
                    <span v-if="lottyList.number2">{{lottyList.number2}}</span>
                    <span v-if="lottyList.number3">{{lottyList.number3}}</span>
                    <span v-if="lottyList.number4">{{lottyList.number4}}</span>
                    <span v-if="lottyList.number5">{{lottyList.number5}}</span>
                    <span v-if="lottyList.number6">{{lottyList.number6}}</span>
                    <span v-if="lottyList.number7">{{lottyList.number7}}</span>
                    <span v-if="lottyList.number8">{{lottyList.number8}}</span>
                    <span v-if="lottyList.number9">{{lottyList.number9}}</span>
                    <span v-if="lottyList.number10">{{lottyList.number10}}</span>
                    <span v-if="lottyList.number11">{{lottyList.number11}}</span>
                    <span v-if="lottyList.number12">{{lottyList.number12}}</span>
                  </p>
                </div>
              </dd>
              <dd class="lottery-bottom">
                <span class="l">距离第{{lottyList.curr_issue_number}}期截止还有</span>
                <span class="r">{{lottyList.curr_count_down | transCountTime}}</span>
              </dd>
            </dl>
          </dd>
          <dd class="lottery-images2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      </router-link>
    </div>

    <!--quick-->
    <div v-else class="vertical">
      <dl class="vertical-list" v-for="(lottyList,index) in results"
          @click.prevent="toPlan(index,lottyList.name,lottyList.code,lottyList.lot_type_id,lottyList.pic)">
        <dt class="vertical-images">
          <img :src="lottyList.pic">
        </dt>
        <dd class="vertical-title">
          {{lottyList.name}}
        </dd>
        <dd class="vertical-hours">
          {{lottyList.curr_count_down | transCountTime}}
        </dd>
        <!--index plan-->
        <div class="vertical-plan-con" v-if="currLottery==index">
          <div class="vertical-plan-t" @click="closeQick">
            <Icon type="close" color="#fff" size="8"  />
          </div>
          <div class="vertical-plan-b">
            <div @click="toPlanA(index,lottyList.name,lottyList.code,lottyList.lot_type_id,lottyList.pic)">{{lottyList.name}}A盘</div>
            <div @click="toPlanB(index,lottyList.name,lottyList.code,lottyList.lot_type_id,lottyList.pic)">{{lottyList.name}}B盘</div>
          </div>
        </div>
      </dl>

    </div>

    <tab></tab>
  </div>
</template>


<script type="text/ecmascript-6">
  import Transverse from '@/components/lottery/transverse'
  import Vertical from '@/components/lottery/vertical'
  import Tab from '@/components/tab/tab'
  import {getRecommend, getDiscList, requestOpt, alertip, mt_loading_open,mt_loading_close} from 'api/recommend'
  import {formatDate} from '../../api/mdata'
  import VScroll from "@/components/public/pull-refresh"

  export default {
    components: {
      Transverse,
      Vertical,
      Tab,
      VScroll
    },
    data() {
      return {
        results:window.All || [],
        timer: null,
        tabs: [{
          name: '全部彩种',val: -1, code: 'all'
        }, {
          name: '高频彩',val: 0, code: 'high'
        }, {
          name: '低频彩',val: 1, code: 'low'
        }],
        tabTxt: '全部彩种',
        tabActive: 'all',
        tabFe: true, // 彩票图标快捷切换
        currLottery: -1,
        allHide: false,
        frequency: -1,
      }
    },
    beforeRouteLeave(to, from, next) {
      clearInterval(this.timer)
      next()
    },
    computed: {

    },

    methods: {
      getLottery() {
        requestOpt.reqnoGet('betting_list_v1?page=1&is_hot=-1&frequency='+this.frequency, (res) => {
          if (res.data.status===1) {
            this.results = res.data.data.list;
          } else {
            alertip(res.data.msg)
          }

//          console.log(this.results)
        }, (err) => {
          alertip(err)
        });
      },
//       tabsel(name,val) {
//         this.results = []
//         this.tabActive = name
//         this.frequency = val
//         clearInterval(this.timer)
// //        console.log(name)
//         this.timer = setInterval(() => {
// //          this.getLottery();
//           if (name === 'all') {
//             this.results = window.All;
//           } else if (name === 'high'){
//             this.results = window.hignReq;
//           } else if (name === 'low' ){
//             this.results = window.lowReq;
//           }
//         },1000)
//         mt_loading_open()
//         setTimeout(function () {
//           mt_loading_close()
//         },300)
//       },
      toPlan(i,name,code,id,pic) {

        if (name=='重庆时时彩'
          ||name=='北京PK拾'
          ||name=='三分时时彩'
          ||name=='三分PK拾'
          ||name=='幸运28'
          ||name=='北京28'
          ||name=='新疆时时彩'
          ||name=='天津时时彩') {
          this.currLottery = i;
        } else {
          this.$router.push('/gameplay/'+code+'/'+id+'/1')
          this.$store.commit('OF_AVATE',pic)
        }

      },
      closeQick() {
        event.stopPropagation();
        event.preventDefault()
        this.currLottery = -1;
      },
      toPlanA(i,name,code,id,pic) {
        console.log('a')
        this.$router.push('/gameplay/'+code+'/'+id+'/1')
        this.$store.commit('OF_AVATE',pic)
      },
      toPlanB(i,name,code,id,pic) {
        console.log('B')
        this.$router.push('/gameplay/'+code+'/'+id+'/2')
        this.$store.commit('OF_AVATE',pic)
      }
    },
    created() {
//      this.getLottery();
    },
    mounted(){
      mt_loading_open()
      setTimeout(function () {
        mt_loading_close()
      },300)
      this.tabFe = this.$store.state.user.clearInter
//       this.timer = setInterval(() => {
// //        this.getLottery();
//         this.results = window.All;
//       },1000)
    },
    //    时间过滤
    filters: {
      formatDate(time) {
        let date = new Date(time);
        return formatDate(date, 'hh:mm:ss');
      }
    }
  }
</script>

<style scoped lang="stylus">
  .lottery-content{
    width: 7.5rem;
    height: 13.34rem;
    display: block;
    background: #eeeeee;
  }
  .lottery-head{
    width: 7.5rem;
    height: 0.88rem;
    display: block;
    margin: auto;
    background :#ff3a3b;
    position: fixed;
    top:0;
    z-index: 99;
  }
  .lottery-head ul{
    width: 6.9rem;
    height: 0.88rem;
    display: block;
    margin: auto;
    line-height: 0.88rem;
  }
  .lottery-head ul li{
    float: left;
    height: 0.88rem;
    display: block;
  }
  .lottery-head1{
    width: 2rem
  }
  .lottery-head2{
    width :2.9rem;
    text-align: center;
    font-size : 0.32rem;
    font-weight :normal;
    color: #ffffff;
  }
  .lottery-head3{
    width: 2rem;
    text-align: right;
  }
  .lottery-head3 img{
    display: inline-block;
    width: 0.46rem;
    height: 0.39rem;
    position: relative;
    float: right;
    top: 0.245rem;
  }
  /*采种分类*/
  .lottery-all{
    width: 7.5rem;
    height: 0.68rem;
    background: #222222;
    display: block;
    position: fixed;
    top:0.88rem;
    z-index: 99;
  }
  .lottery-all ul{
    width: 6.9rem;
    display: block;
    margin: auto;
    line-height: 0.68rem;
    height: 0.68rem;
  }
  .lottery-all ul li{
    float: left;
    width: 33.33%;
    font-size: 0.24rem;
    text-align: center;
  }
  .lottery-all ul li.active {
    color: #ff3a3b;
  }
  li.all{
    width: 2rem;
    color: #ff3a3b;
  }
  li.high{
    width: 2.9rem;
    color: #ffffff;
  }
  li.low{
    width: 2rem;
    color: #ffffff;
  }

  /*l彩票种类详情*/
  .lottery{
    width: 7.5rem;
    height: auto;
    background: #eeeeee;
    display: block;
    margin-top: 1.56rem;
    margin-bottom: 0.98rem;
  }
  .lottery dl.lottery-list{
    width: 7.5rem;
    height: 1.24rem;
    background: #ffffff;
    display: block;
    border-bottom: 1px solid #eeeeee;
  }

  /*彩票图片*/
  .lottery dl.lottery-list dt.lottery-images{
    width: 0.76rem;
    height: 0.76rem;
    background: #ffffff;
    display: block;
    margin-left: 0.3rem ;
    float: left;
    margin-top: 0.24rem;
  }
  .lottery-images img{
    width: 0.76rem;
    height: 0.76rem;
    display: block;
    float: left;
    border: none;
    border-radius: 45px;
  }

  /*中间数据*/
  .lottery dl.lottery-list dd.lottery-show{
    width: 5.68rem;
    height: 1.24rem;
    float:left;
    display: block;
    margin-left: 0.2rem;
    margin-right: 0.08rem;
  }
  .lottery-show dl{
    width: 5.68rem;
    height: 1.24rem;
    display: block;
  }
  .lottery-show dt.lottery-top{
    width: 5.68rem;
    height: 0.44rem;
    display: block;
    line-height: 0.44rem;
  }
  .lottery-show dd.lottery-middle{
    width: 5.68rem;
    height: 0.4rem;
    display: block;
    background: #ffffff;
    line-height: 0.4rem;
  }
  .lottery-show dd.lottery-middle .ssq p span:last-child{
    background: #35b5fe;
  }
  .lottery-show dd.lottery-middle .dalt p span.spacial{
    background: #35b5fe;
  }
  .lottery-show dd.lottery-bottom{
    width: 5.68rem;
    height: 0.4rem;
    display: block;
    line-height: 0.4rem;
  }
  /*种类其数*/
  .lottery-show dt.lottery-top span.l{
    font-size: 0.24rem;
    display: block;
    float: left;
    color: #323232;
    font-weight: bold;
  }
  .lottery-show dt.lottery-top span.r{
    font-size: 0.14rem;
    display: block;
    float: right;
    color: #ff3a3b;
    font-weight: normal;
  }
  .lottery-show dd.lottery-middle p.color-b{
    font-size: 0.14rem;
    display: block;
    text-align: left;
    color: #35b5fe;
    font-weight: normal;
  }
  .lottery-show dd.lottery-middle p.color-h{
    font-size: 0.14rem;
    display: block;
    text-align: left;
    color: #ff3a3b;
    font-weight: normal;
  }

  /*中奖中奖的彩票的号码*/

  .lottery-show dd.lottery-middle{
    font-size: 0.14rem;
    float: left;
    color: #fc823c;
  }
  .lottery-show dd.lottery-middle span{
    width: 0.36rem;
    height: 0.36rem;
    display: block;
    line-height: 0.36rem;
    font-size: 0.22rem;
    color: #ffffff;
    text-align: center;
    background: #fc3d3d;
    float: left;
    margin-right: 0.1rem;
    border-radius: 45px;
    border: none;
  }
  .lottery-show dd.lottery-middle img{
    width: 0.42rem;
    height: 0.42rem;
    display: block;
    line-height: 0.42rem;
    text-align: center;
    float: left;
    margin-right: 0.1rem;
    border: none;
  }

  /*距离开奖时间*/
  .lottery-show dd.lottery-bottom span.l{
    font-size: 0.14rem;
    display: block;
    float: left;
    color: #323232;
    font-weight: normal;
  }
  .lottery-show dd.lottery-bottom span.r{
    font-size: 0.14rem;
    display: block;
    float: right;
    color: #323232;
    font-weight: normal;
  }

  /*箭头*/
  .lottery dl.lottery-list dd.lottery-images2{
    width: 0.18rem;
    height: 0.3rem;
    float: right;
    display: inline-block;
    margin-right: 0.3rem;
  }
  .lottery dl.lottery-list dd.lottery-images2 img{
    width: 0.18rem;
    height: 0.3rem;
    float: right;
    display: inline-block;
    margin-top: 0.47rem;
  }

/*quick*/
  .vertical{
    overflow: auto;
    margin-top: 1.56rem;
    margin-bottom: 0.98rem;
  }
  .vertical dl.vertical-list{
    display: block;
    float: left;
    position: relative;
    width: 2.48rem;
    /*height: 2.76rem;*/
    height: 2.48rem;
    margin: .01rem;
    overflow: hidden;
    background: #ffffff;
  }
  .vertical dl.vertical-list dt.vertical-images{
    width: 2.48rem;
    height: 1.6rem;
    display: block;
  }
  .vertical-images img{
    width: 1.25rem;
    height: 1.25rem;
    display: block;
    margin: auto;
    position: relative;
    top:0.175rem;
    border: none;
    border-radius: 45px;
  }
  .vertical dl.vertical-list dd.vertical-title{
    width: 2.48rem;
    height: 0.48rem;
    display: block;
    line-height: 0.48rem;
    text-align: center;
    font-size: 0.24rem;
    color: #222222;
    font-weight: bold;
  }
  .vertical dl.vertical-list dd.vertical-hours{
    width: 2.48rem;
    height: 0.48rem;
    display: block;
    line-height: 0.48rem;
    text-align: center;
    font-size: 0.24rem;
    color: #ff3a3b;
    font-weight: bold;
  }

  .vertical-plan-con {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5)
    font-size: .24rem;
    transition: top 1s;
    animation: topBottom 1s;
    &.entey {
      top 0
      transition: top 1.5s;
      animation: topBottom 1.5s;
    }
    &.leave {
      top -2.48rem
      transition: top 1.5s;
      animation: topBottomLeave 1.5s;
    }
    .vertical-plan-t {
      position absolute
      top 0
      right 0
      z-index 2
      width 35%
      &:after {
        content ''
        clear both
        display block
      }
      i {
        float right
        padding 5px 7px
        margin .1rem
        border 1px solid #fff
        border-radius 50%
      }
    }
    .vertical-plan-b {
      position absolute
      bottom 0
      width 100%
      text-align center
      div {
        padding .15rem
        background #ff3a3b
        &:last-child {
          border-top 1px solid #fff
        }
      }
    }
  }
  .vertical-plan-con.entey {
    top 0
    transition: top 1.5s;
    animation: topBottom 1.5s;
  }
  .vertical-plan-con.leave {
    top -2.48rem
    transition: top 1.5s;
    animation: topBottomLeave 1.5s;
  }

  @keyframes topBottom {
    0% {
      top: -2.48rem;
    }
    100% {
      top: 0;
    }
  }

  @keyframes topBottomLeave {
    0% {
      top: 0;
    }
    100% {
      top: -2.48rem;
    }
  }

</style>


