<template>
  <div class="home">
    <m-header></m-header>

    <div class="home-content">

      <!--轮播图-->
      <div class="recommend">
        <div class="swiper-box">
          <swiper :options="swiperOption">
            <swiper-slide v-for='(item , i ) in imgPic.imgUrls' :key='i'>
              <a :href="item.href">
                <img :src="item.pic" class="banner-item" :alt="item.name">
              </a>
            </swiper-slide>
            <div v-if='imgPic' class="swiper-pagination" slot="pagination"></div>
          </swiper>
          <!--</swiper>-->
        </div>
      </div>
      <!--通知-->
      <div class="announcement-content">
        <div class="announcement">
          <div class="im">
            <img src="../../images/notice@2x.png" alt="">
          </div>
          <div class="marquee"><marquee scrollamount="2">
            <!--彩票125平台正式投入运营，新用户注册可领500元彩金大礼包！-->
            <span v-for="item in notice">{{item.content}}</span>
          </marquee>
          </div>
        </div>
      </div>
      <!--分类，快速进入-->
      <div class="classification-content">
        <div class="classification">
          <dl>
            <router-link tag="div"  to="/m-center">
              <dt>
                <img src="../../images/Save_home@2x.png" alt="存/取款">
              </dt>
              <dd>存/取款</dd>
            </router-link>
          </dl>
          <dl @click="toTrial">
            <!--<router-link tag="div"  to="/trial">-->
              <dt>
                <img src="../../images/free.png" alt="免费试玩">
              </dt>
              <dd>免费试玩</dd>
            <!--</router-link>-->
          </dl>
          <dl>
            <router-link tag="div"  to="/betting">
              <dt>
                <img src="../../images/Record_home@2x.png" alt="投注记录">
              </dt>
              <dd>投注记录</dd>
            </router-link>
          </dl>
          <dl>
            <router-link tag="div"  to="/activities">
              <dt>
                <img src="../../images/Discount_home@2x.png" alt="优惠活动">
              </dt>
              <dd>优惠活动</dd>
            </router-link>
          </dl>
          <dl>
            <!--<router-link tag="div"  to="/trial">-->
            <!---->
            <!--</router-link>-->
            <dt>
              <img src="../../images/service_home@2x.png" alt="在线客服" onclick="console.log('在线客服')">
            </dt>
            <dd>在线客服</dd>
          </dl>
        </div>
      </div>
      <!--热门彩种-->
      <div class="hot-colors-content">
        <div class="hot-colors-title">
          <dl>
            <dt><span></span></dt>
            <dd>热门彩种</dd>
          </dl>
        </div>
        <div class="hot-colors-classification">
          <!--<router-link tag="div" to="/playing">-->
          <!--<dd class="djs">{{lotterys.memo | transTimeMinute}}</dd>-->
          <div class="hot-lattery-con">

          </div>
          <div class="hot-lattery-container">
            <!--<dl v-for="(lotterys, key) in lotteryAll" @click="toLatteryPlan(key)">
              <dt><img :src="lotterys.pic" alt="重庆时时彩"></dt>
              <dd>{{lotterys.name}}</dd>
              <dd class="djs">{{lotterys.curr_count_down | transCountTime}}</dd>
            </dl>-->
            <div v-if="lotteryAll.length>0">
              <dl @click="toLatteryPlan(0,lotteryAll[0].name,lotteryAll[0].code,lotteryAll[0].lot_type_id,lotteryAll[0].pic)">
                <dt><img :src="lotteryAll[0].pic" alt="lotteryAll[0].name"></dt>
                <dd>{{lotteryAll[0].name}}</dd>
                <dd class="djs">{{lotteryAll[0].curr_count_down | transCountTime}}</dd>
              </dl>
              <dl @click="toLatteryPlan(1,lotteryAll[1].name,lotteryAll[1].code,lotteryAll[1].lot_type_id,lotteryAll[1].pic)">
                <dt><img :src="lotteryAll[1].pic" alt="lotteryAll[1].name"></dt>
                <dd>{{lotteryAll[1].name}}</dd>
                <dd class="djs">{{lotteryAll[1].curr_count_down | transCountTime}}</dd>
              </dl>
              <div class="lottery-plans" v-if="planshow==0&&flagArr[0]">
                <div
                  @click="toPlanA(0,lotteryAll[0].name,lotteryAll[0].code,lotteryAll[0].lot_type_id,lotteryAll[0].pic)">{{lotteryAll[0].name}}A盘</div>
                <div
                  @click="toPlanB(0,lotteryAll[0].name,lotteryAll[0].code,lotteryAll[0].lot_type_id,lotteryAll[0].pic)">{{lotteryAll[0].name}}B盘</div>
              </div>
              <div class="lottery-plans" v-if="planshow==1&&flagArr[1]">
                <div @click="toPlanA(1,lotteryAll[1].name,lotteryAll[1].code,lotteryAll[1].lot_type_id,lotteryAll[1].pic)">{{lotteryAll[1].name}}A盘</div>
                <div @click="toPlanB(1,lotteryAll[1].name,lotteryAll[1].code,lotteryAll[1].lot_type_id,lotteryAll[1].pic)">{{lotteryAll[1].name}}B盘</div>
              </div>
            </div>
            <div v-if="lotteryAll.length>0">
              <dl @click="toLatteryPlan(2,lotteryAll[2].name,lotteryAll[2].code,lotteryAll[2].lot_type_id,lotteryAll[2].pic)">
                <dt><img :src="lotteryAll[2].pic" alt="lotteryAll[2].name"></dt>
                <dd>{{lotteryAll[2].name}}</dd>
                <dd class="djs">{{lotteryAll[2].curr_count_down | transCountTime}}</dd>
              </dl>
              <dl @click="toLatteryPlan(3,lotteryAll[3].name,lotteryAll[3].code,lotteryAll[3].lot_type_id,lotteryAll[3].pic)">
                <dt><img :src="lotteryAll[3].pic" alt="lotteryAll[3].name"></dt>
                <dd>{{lotteryAll[3].name}}</dd>
                <dd class="djs">{{lotteryAll[3].curr_count_down | transCountTime}}</dd>
              </dl>
              <div class="lottery-plans" v-if="planshow==2&&flagArr[2]">
                <div @click="toPlanA(2,lotteryAll[2].name,lotteryAll[2].code,lotteryAll[2].lot_type_id,lotteryAll[2].pic)">{{lotteryAll[2].name}}A盘</div>
                <div @click="toPlanB(2,lotteryAll[2].name,lotteryAll[2].code,lotteryAll[2].lot_type_id,lotteryAll[2].pic)">{{lotteryAll[2].name}}B盘</div>
              </div>
              <div class="lottery-plans" v-if="planshow==3&&flagArr[3]">
                <div @click="toPlanA(3,lotteryAll[3].name,lotteryAll[3].code,lotteryAll[3].lot_type_id,lotteryAll[3].pic)">{{lotteryAll[3].name}}A盘</div>
                <div @click="toPlanB(3,lotteryAll[3].name,lotteryAll[3].code,lotteryAll[3].lot_type_id,lotteryAll[3].pic)">{{lotteryAll[3].name}}B盘</div>
              </div>
            </div>
            <div v-if="lotteryAll.length>0">
              <dl @click="toLatteryPlan(4,lotteryAll[4].name,lotteryAll[4].code,lotteryAll[4].lot_type_id,lotteryAll[4].pic)">
                <dt><img :src="lotteryAll[4].pic" alt="lotteryAll[4].name"></dt>
                <dd>{{lotteryAll[4].name}}</dd>
                <dd class="djs">{{lotteryAll[4].curr_count_down | transCountTime}}</dd>
              </dl>
              <dl @click="toLatteryPlan(5,lotteryAll[5].name,lotteryAll[5].code,lotteryAll[5].lot_type_id,lotteryAll[5].pic)">
                <dt><img :src="lotteryAll[5].pic" alt="lotteryAll[5].name"></dt>
                <dd>{{lotteryAll[5].name}}</dd>
                <dd class="djs">{{lotteryAll[5].curr_count_down | transCountTime}}</dd>
              </dl>
              <div class="lottery-plans" v-if="planshow==4&&flagArr[4]">
                <div @click="toPlanA(4,lotteryAll[4].name,lotteryAll[4].code,lotteryAll[4].lot_type_id,lotteryAll[4].pic)">{{lotteryAll[4].name}}A盘</div>
                <div @click="toPlanB(4,lotteryAll[4].name,lotteryAll[4].code,lotteryAll[4].lot_type_id,lotteryAll[4].pic)">{{lotteryAll[4].name}}B盘</div>
              </div>
              <div class="lottery-plans" v-if="planshow==5&&flagArr[5]">
                <div @click="toPlanA(5,lotteryAll[5].name,lotteryAll[5].code,lotteryAll[5].lot_type_id,lotteryAll[5].pic)">{{lotteryAll[5].name}}A盘</div>
                <div @click="toPlanB(5,lotteryAll[5].name,lotteryAll[5].code,lotteryAll[5].lot_type_id,lotteryAll[5].pic)">{{lotteryAll[5].name}}B盘</div>
              </div>
            </div>
          </div>

          <div v-if="lotteryAll.length>0&&lotteryAll[6]">
            <dl @click="toLatteryPlan(6,lotteryAll[6].name,lotteryAll[6].code,lotteryAll[6].lot_type_id,lotteryAll[6].pic)">
              <dt><img :src="lotteryAll[6].pic" alt="lotteryAll[6].name"></dt>
              <dd>{{lotteryAll[6].name}}</dd>
              <dd class="djs">{{lotteryAll[6].curr_count_down | transCountTime}}</dd>
            </dl>
          </div>
          <router-link tag="div" to="/lottery1" >
            <dl class="classification-right">
              <dt><img src="../../images/icon/more.png" alt="更多"></dt>
              <dd class="classification-more">更多</dd>
            </dl>
          </router-link>


        </div>
      </div>
      <!--最新中奖榜单-->
      <div class="winners-list-content">
        <div class="winners-list-title">
          <dl>
            <dt><span></span></dt>
            <dd>最新中奖榜</dd>
          </dl>
        </div>
        <router-link tag="div" to="/list">
          <div class="winners-list-message" id="winners-list-message">
            <div class="winners1" id="winners1" >
              <dl v-for="article in articles">
                <dt class="user-id">{{article.phone}}</dt>
                <dd class="user-prize">喜中{{article.winning_money}}元</dd>
                <dd class="prize-classification">购买{{article.lot_name}}</dd>
              </dl>
            </div>
          </div>
        </router-link>

      </div>

    </div>
    <tab></tab>
  </div>
</template>


<script type="text/ecmascript-6">
  import MHeader from '@/components/m-header/m-header'
  import Scroll from '@/components/home/scroll'
  import Tab from '@/components/tab/tab'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import {getRecommend, getDiscList, requestOpt, alertip, mt_confirm} from 'api/recommend'
  import {imgConfig} from 'api/config'
  export default {
    components: {
      MHeader,
      Scroll,
      Tab,
    },
    data() {
      return {
        phone : 'string',
        winning_money : "decimal",
        user_id : "int",
        create_time : "string",
        lot_name : "string",
        articles: [],
        planshow: -1,
        flagArr: [false,false,false,false,false,false,false],
        planTextA: '',
        planTextB: '',
        // 轮播图
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          autoplay: 4000,
          autoplayDisableOnInteraction: false,
          loop: true
        },
        imgPic:imgConfig,
        /*msgs: {
          data:[
            {
              id:1,
              pic:'http:\\/\\/120.76.211.1:8092\\/uploads\\/2017\\/04\\/18\\/2017041814205880772.png',
              href:'#',
              url :""
            },
            {
              id:2,
              pic:'http:\\/\\/120.76.211.1:8092\\/uploads\\/2017\\/04\\/18\\/2017041814234362608.png',
              href:'#',
              url :""

            }
          ]
        },*/
        hotmsgs: {},
        dialog: false,
        lotterys: [],
        lotteryAll: window.hotRes || [],//hot
        timer: null,
        notice: [],
//        getColor: this.GLOBAL.getRandColor,
      }
    },
    computed: {

    },
    watch: {
      lotteryAll: {
        handler(val,old) {
//          console.log(val)
        },
        deep: true
      }
    },
    beforeRouteLeave(to, from, next) {
      clearInterval(this.timer)
      next()
    },
    mounted(){
      this.getNotice();
      this.getWinningList();
//      console.log(this.getColor)
     /* this.getlotteryList();
      this.timer = setInterval(() => {
        this.getlotteryList();
      },1000)*/
      // this.timer = setInterval(() => {
      //   this.lotteryAll=window.hotRes;
      // },1000)

      // 设置竖向滚动
      let winners = document.getElementById('winners-list-message');
      let winners1 = document.getElementById('winners1');
      let speed = 50;//时间间隔
      function scrollUp(){
        winners.scrollTop++;
        console.log(winners.scrollTop)
        if(winners.scrollTop >= winners1.scrollHeight){
          winners.scrollTop = 0;
          clearInterval(myScroll)
        }
      }
//      const myScroll = setInterval(scrollUp,speed);//初始化
//      let scrollControl = {
//        //滚动距离
//        marginTop : 0,
//        //每秒刷新次数
//        fps : 60,
//        //速度
//        speed : 1,
//        //定时器名称
//        setIntervalName : null,
//        init : function () {
//          scrollControl.setInterval();
//
//        },
//        setInterval : function () {
//          //获取元素
//          let borderEl = document.querySelector(".winners-list-message");
//          let scrollContentEl = document.querySelector(".winners1");
//          //获取高度
//          let borderH = borderEl.clientHeight;
//          let scrollContentH = scrollContentEl.clientHeight;
//          console.log(borderH)
//          console.log(scrollContentH)
//          //滚动距离
//          let scrolldis = scrollContentH - borderH ;
//          scrollControl.setIntervalName = setInterval(function () {
//            //清除执行完的函数，提高运行效率
//            if(scrollControl.setIntervalName != null){
//              clearInterval(scrollControl.setIntervalName);
//            }
//            //判断是否滚动到底部，重置marginTop
//            if(scrollControl.marginTop >= scrolldis){
//              scrollControl.resetMarginTop();
//            }
//            scrollContentEl.style.marginTop = "-" +  scrollControl.marginTop + "px";
//            scrollControl.marginTop++;
//
//          },scrollControl.fps)
//        },
//        resetMarginTop : function () {
//          scrollControl.marginTop = 0;
//        } ,
//        stopScroll : function () {
//
//        }
//      }
//      scrollControl.init();

    },
    methods: {
      toPlanA(i,name,code,id,pic) {
        this.$router.push('/gameplay/'+code+'/'+id+'/1')
        this.$store.commit('OF_AVATE',pic)
      },
      toPlanB(i,name,code,id,pic) {
        this.$router.push('/gameplay/'+code+'/'+id+'/2')
        this.$store.commit('OF_AVATE',pic)
      },
      toTrial() {
        mt_confirm('是否退出当前账号？', res => {
          if (res) {
            this.$router.push('trial')
            this.$store.commit('USER_SIGNOUT')
          }
        }, '退出')
      },
      getWinningList() { //      获取中奖信息
        requestOpt.reqnoGet('latest_luckys', (res) => {
          this.articles = res.data.data.list;
        }, (err) => {
          alertip(err)
        });
      },
      getlotteryList() { //  获取彩种 lottery_types/all
        requestOpt.reqnoGet('betting_list_v1?page=1&frequency=-1&is_hot=1', res => {
          this.lotteryAll = res.data.data.list
          this.$store.commit('BET_LIST',this.lotteryAll)
        }, err => {
          alertip(err)
        })
      },
      toLatteryPlan(i,name,code,id,pic) {
        this.planshow = i;

        if (name==='山东11选5'||name==='广东11选5') {
          this.$router.push('/gameplay/'+code+'/'+id+'/1')
          this.$store.commit('OF_AVATE',pic)
          this.$store.commit('BET_OBJ',this.lotteryAll[i])
        } else {
          this.flagArr[i] = !this.flagArr[i]
        }
        this.planTextA = name
        if (this.flagArr[i]) {
          switch (i) {
            case 0:
              this.flagArr = [true,false,false,false,false,false,false]
              break
            case 1:
              this.flagArr = [false,true,false,false,false,false,false]
              break
            case 2:
              this.flagArr = [false,false,true,false,false,false,false]
              break
            case 3:
              this.flagArr = [false,false,false,true,false,false,false]
              break
            case 4:
              this.flagArr = [false,false,false,false,true,false,false]
              break
            case 5:
              this.flagArr = [false,false,false,false,false,true,false]
              break
            default:
              this.flagArr = [false,false,false,false,false,false,true]
              break
          }
        }

      },
      getNotice() { // 广告
        requestOpt.reqnoGet('notice', res => {
          this.notice = res.data.data.list
        }, err => {
          alertip(err)
        })
      }
    }

  }


</script>



<style scoped lang="less">
  .home{
    width: 7.5rem;
    height: 13.34rem;
    display: block;
    overflow-y: scroll;
  }
  .home-content{
    width: 7.5rem;
    /*height: 16.9rem;*/
    min-height: 15rem;
    display: block;
    position: relative;
    top:0.88rem;
    background: #eeeeee;
    border: none;
    overflow: auto;
    overflow-y: scroll;
  }
  /*轮播图*/
  .recommend{
    width: 7.5rem;
    height: 3rem;
    display: block;
  }
  .recommend .swiper-box img{
    width: 7.5rem;
    height: 3rem;
    display: block;
  }

  /*通知*/
  .announcement-content{
    width: 7.5rem;
    height: 0.44rem;
    display: block;
    background: #ffffff;
  }
  .announcement {
    width: 6.9rem;
    height: 0.44rem;
    display: block;
    margin: auto;
  }
  .announcement .im{
    width: 0.4rem;
    height: 0.44rem;
    float: left;
    display: block;
  }
  .announcement .im img{
    width: 0.24rem;
    height: 0.2rem;
    float: left;
    display: block;
    margin-top: 0.12rem;
  }
  .announcement .marquee{
    width: 6.5rem;
    height: 0.44rem;
    float: left;
    display: block;
  }
  .announcement .marquee marquee{
    width: 6.5rem;
    height: 0.44rem;
    float: left;
    display: block;
    font-size: 0.24rem;
    color: #222222;
    line-height: 0.44rem;
    font-weight: normal;
  }
  /*分类，快速进入*/
  .classification-content{
    width: 7.5rem;
    height: 1.5rem;
    display: block;
    background: #ffffff;
  }
  .classification{
    width: 6.9rem;
    height: 1.5rem;
    display: flex;
    margin: auto;
  }
  .classification dl{
    flex: 1;
  }
  .classification dl dt{
    width: 0.8rem;
    height: 0.8rem;
    text-align: center;
    margin-left: 0.285rem;
    margin-top: 0.2rem;

  }
  .classification dl dd{
    width: 1.37rem;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.18rem;
    color: #222222;
    font-weight: normal;
    text-align: center;
  }

  .classification dl dt img{
    width: 0.8rem;
    height: 0.8rem;
    text-align: center;
    display: inline-block;
    line-height: 0.8rem;
    float: left;
  }

  /*热门采种*/
  .hot-colors-content{
    width: 7.5rem;
    /*height: 7.96rem;*/
    display: block;
    margin-top: 0.2rem;
  }

  .hot-colors-title{
    width: 7.5rem;
    height: 0.6rem;
    display: block;
    background: #ffffff;
    overflow: hidden;
  }
  .hot-colors-title dl{
    width: 6.9rem;
    height: 0.6rem;
    display: block;
    line-height: 0.6rem;
    overflow: hidden;
    margin: auto;
  }
  .hot-colors-title dl dt{
    width: 0.32rem;
    height: 0.6rem;
    display: block;
    float: left;
    text-align: left;
  }
  .hot-colors-title dl dt span{
    width: 2px;
    height: 0.3rem;
    display: block;
    background: #ffdf36;
    margin-top: 0.15rem;
  }
  .hot-colors-title dd{
    width: 6rem;
    height: 0.4rem;
    display: block;
    float: left;
    font-size: 0.24rem;
    color: #323232;
    font-weight: bold;
  }

  .lottery-plans {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: transparent;
    color: #000;
    font-size: .28rem;
    div {
      width: 45%;
      margin: 1% 2.5%;
      padding: .1rem;
      background: #ff3a3b;
      text-align: center;
      color: #fff;
      border-radius: .08rem;
    }

  }

  /*热门彩分类*/
  .hot-colors-classification{
    width: 7.5rem;
    /*height: 9rem;*/
    display: block;
    overflow: auto;
  }
  .hot-colors-classification dl{
    position: relative;
    width: 49.6%;
    height: 1.8rem;
    float: left;
    margin: 0.2%;
    border: none;
    background: #ffffff;
  }
  dl.classification-right{
    float: right;
  }
  /*采种分类图片*/
  .hot-colors-classification dl dt{
    width: 1.06rem;
    height: 1.06rem;
    float: left;
    display: block;
    margin: 0.36rem 0.2rem 0 0.3rem;
  }
  .hot-colors-classification dl dt img{
    width: 1.06rem;
    height: 1.06rem;
    float: left;
    display: block;
    border-radius: 50%;

  }


  .hot-colors-classification dl dd{
    width: 2rem;
    height: 0.36rem;
    float: left;
    border: none;
    display: block;
    font-size: 0.24rem;
    color: #323232;
    text-align: left;
    line-height: 0.36rem;
    margin-top: 0.36rem;
  }

  .hot-colors-classification dl dd.classification-more{
    width: 2rem;
    height: 1.8rem;
    float: left;
    border: none;
    display: block;
    font-size: 0.24rem;
    color: #323232;
    text-align: left;
    line-height: 1.8rem;
    margin-top: 0;
  }
  /*最新中奖榜单*/
  .winners-list-content{
    width: 7.5rem;
    height: 2.4rem;
    display: block;
    margin-top: 0.2rem;
    margin-bottom: .98rem;
  }

  .winners-list-title{
    width: 7.5rem;
    height: 0.6rem;
    display: block;
    margin: auto;
    background: #ffffff;
  }
  .winners-list-title dl{
    width: 6.9rem;
    height: 0.6rem;
    display: block;
    line-height: 0.6rem;
    margin: auto;
  }
  .winners-list-title dl dt{
    width: 0.32rem;
    height: 0.6rem;
    display: block;
    float: left;
    text-align: left;
  }
  .winners-list-title dl dt span{
    width: 2px;
    height: 0.3rem;
    display: block;
    background: #ffdf36;
    margin-top: 0.15rem;
  }
  .winners-list-title dd{
    width: 6rem;
    height: 0.4rem;
    display: block;
    float: left;
    font-size: 0.24rem;
    color: #323232;
    font-weight: bold;
  }
  .winners-list-message{
    width: 7.5rem;
    height: 1.8rem;
    background: #ffffff;
    display: block;
    margin: auto;
    overflow: hidden;
  }
  .winners-list-message{
    width: 7.5rem;
    height: 1.8rem;
    background: #ffffff;
    display: block;
    margin: auto;
    overflow: hidden;
  }
  .winners-list-message dl{
    width: 6.9rem;
    height: 0.36rem;
    display: block;
    line-height: 0.36rem;
    margin-left: 0.3rem;
    transition: top 0.5s;
  }
  .user-id{
    width: 1.7rem;
    height: 0.36rem;
    display: block;
    text-align: left;
    float: left;
    font-size: 0.12rem;
    color: #222222;
    font-weight: normal;
  }
  .user-prize{
    width: 3.3rem;
    height: 0.36rem;
    display: block;
    text-align: left;
    float: left;
    font-size: 0.12rem;
    color: #d93f30;
    font-weight: normal;
  }

  .prize-classification{
    width: 1.9rem;
    height: 0.36rem;
    display: block;
    text-align: right;
    float: right;
    font-size: 0.12rem;
    color: #222222;
    font-weight: normal;
  }



</style>


