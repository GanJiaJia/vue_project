<!--四星玩法-->
<template>
  <div class="playing-content">
    <div class="playing-head">
      <ul>
        <li class="playing-head1">
          <a  @click="goback" >
            <img src="../../images/Return-@2x.png" alt="">
          </a>
        </li>
        <li class="playing-head2" @click="hideDailog">
          <span class="playing-span1">玩法</span>
          <span class="playing-span2">{{keyFirst}}-{{keyLast}}</span>
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

      <div v-show="isShow" class="header-is-active" @click.prevent="hideDailog">
        <div class="header-modal">
          <dl class="header-modal1">
            <dt>{{keyFirst}}</dt>
            <dd></dd>
          </dl>
          <ul>
            <!-- singlePlay-->
            <li
              v-for="(item1, k) in panPlay"
              :class="{red:keyFirst===item1.replace(/^\d+\|/,'')}"
              @click="tabPlay(item1,k)">{{item1.replace(/^\d+\|/,'')}}</li>
          </ul>
          <dl class="header-modal1">
            <dt>{{keyLast}}</dt>
            <dd class="w54"></dd>
          </dl>
          <ul>
            <li
              v-for="(item2, k) in cKey"
              :class="{red:keyLast===item2.type_name}"
              @click="tabPlay2(item2.type_name,item2.id, k)">{{item2.type_name}}</li>
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
            <dt>{{rstObj.issue_number}}期</dt>
            <dd>距离{{rstObj.curr_issue_number}}期截止</dd>
          </dl>
          <dl class="fixed-t">
            <dt>
              <!--v-if="rstObj.code=='SSQ'"-->
              <div >
                <div class="lot-res-num" v-if="rstObj.number1">
                  <span  v-if="rstObj.number1">{{rstObj.number1}}</span>
                  <span  v-if="rstObj.number2">{{rstObj.number2}}</span>
                  <span  v-if="rstObj.number3">{{rstObj.number3}}</span>
                  <span  v-if="rstObj.number4">{{rstObj.number4}}</span>
                  <span  v-if="rstObj.number5">{{rstObj.number5}}</span>
                  <span  v-if="rstObj.number6" :class="{'b-blue':rstObj.code=='DLT'}">{{rstObj.number6}}</span>
                  <span  v-if="rstObj.number7" :class="{'b-blue':rstObj.code=='SSQ'||rstObj.code=='DLT'}">{{rstObj.number7}}</span>
                  <span  v-if="rstObj.number8">{{rstObj.number8}}</span>
                  <span  v-if="rstObj.number9">{{rstObj.number9}}</span>
                  <span  v-if="rstObj.number10">{{rstObj.number10}}</span>
                  <span  v-if="rstObj.number11">{{rstObj.number11}}</span>

                </div>
                <div v-else style="color: #fc823c;">等待开奖</div>
              </div>
            </dt>
            <dd>{{rstObj.curr_count_down | transCountTime}}</dd>
          </dl>
        </div>
      </div>

      <!--history list-->
      <div class="lot-history-list" v-if='hitoryflag'>
        <!--双色球-->
        <div class="lot-his-item" v-if="rstObj.code=='SSQ'">
          <div class="lot-his-title">
            <span class="item1">期数</span>
            <span class="item2">开奖结果</span>
            <span class="item3">跨度</span>
            <span class="item4">重号</span>
          </div>
          <v-scroll :on-refresh="onRefresh" :dataList="scrollData" :enableInfinite="false" style="top: 0.68rem">
            <div class="lot-history" v-for="(historyList, k) in historyList" v-if="k<100">
              <span class="item1">{{historyList.issue_number}}</span>
              <span class="item2"><i v-for="tiem in historyList.res" :class="{'b-blue': index>5}">{{tiem}}</i></span>
              <span class="item3">{{historyList.span}}</span>
              <span class="item4">{{historyList.duplicate_num}}</span>
            </div>
          </v-scroll>
        </div>
        <!--大乐透-->
        <div class="lot-his-item" v-else-if="rstObj.code=='DLT'">
          <div class="lot-his-title">
            <span class="item1">期数</span>
            <span class="item2">开奖结果</span>
            <span class="item3">跨度</span>
            <span class="item4">重号</span>
          </div>
          <v-scroll :on-refresh="onRefresh" :dataList="scrollData" :enableInfinite="false" style="top: 0.68rem">
            <div class="lot-history" v-for="(historyList, k) in historyList" v-if="k<100">
              <span class="item1">{{historyList.issue_number}}</span>
              <span class="item2"><i v-for="(tiem,index) in historyList.res" :class="{'b-blue': index>4}">{{tiem}}</i></span>
              <span class="item3">{{historyList.span}}</span>
              <span class="item4">{{historyList.duplicate_num}}</span>
            </div>
          </v-scroll>
        </div>
        <!--11选5-->
        <div class="lot-his-item"
             v-else-if="rstObj.code=='SD11X5'
             ||rstObj.code=='GD11X5'
             ||rstObj.code=='JX11X5'
             ||rstObj.code=='SH11X5'">
          <div class="lot-his-title">
            <span class="item1">期数</span>
            <span class="item2">开奖结果</span>
            <span class="item3">跨度</span>
            <span class="item4">重号</span>
          </div>
          <v-scroll :on-refresh="onRefresh" :dataList="scrollData" :enableInfinite="false" style="top: 0.68rem">
            <div class="lot-history" v-for="(historyList, k) in historyList" v-if="k<100">
              <span class="item1">{{historyList.issue_number}}</span>
              <span class="item2"><i v-for="(tiem,index) in historyList.res">{{tiem}}</i></span>
              <span class="item3">{{historyList.span}}</span>
              <span class="item4">{{historyList.duplicate_num}}</span>
            </div>
          </v-scroll>
        </div>
        <!--PK10-->
        <div class="lot-his-item" v-else-if="rstObj.code=='BJPK10'||rstObj.code=='SFPK10'">
          <div class="lot-his-title">
            <span class="item1">期数</span>
            <span class="item2">开奖结果</span>
          </div>
          <v-scroll :on-refresh="onRefresh" :dataList="scrollData" :enableInfinite="false" style="top: 0.68rem">
            <div class="lot-history" v-for="(historyList, k) in historyList" v-if="k<100">
              <span class="item1">{{historyList.issue_number}}</span>
              <span class="item2"><i v-for="(tiem,index) in historyList.res">{{tiem}}</i></span>
            </div>
          </v-scroll>
        </div>
        <!--排列5 时时彩-->
        <div class="lot-his-item"
             v-else-if="rstObj.code=='PL5'
             ||rstObj.code=='SFSSC'
             ||rstObj.code=='TJSSC'
             ||rstObj.code=='XJSSC'
             ||rstObj.code=='CQSSC'">
          <table>
            <thead>
            <tr>
              <td width="15%">期数</td>
              <td width="16%">开奖结果</td>
              <td width="10%">万位</td>
              <td width="10%">千位</td>
              <td width="10%">百位</td>
              <td width="10%">十位</td>
              <td width="10">个位</td>
              <td width="10">前三</td>
              <td width="10%">后三</td>
            </tr>
            </thead>
          </table>
          <v-scroll :on-refresh="onRefresh" :dataList="scrollData" :enableInfinite="false" style="top: 0.68rem">
            <table>
              <tbody>
              <tr v-for="(historyList, k) in historyList" v-if="k<100">
                <td class="pad" width="15%">{{historyList.issue_number.length>6?historyList.issue_number.replace(/^\d{4}/,''):historyList.issue_number}}</td>
                <td class="pad" width="16%"><span v-for="tiem in historyList.res">{{tiem}}</span></td>
                <td class="pad" width="9%">{{historyList.bit_modes[0]}}</td>
                <td class="pad" width="10%">{{historyList.bit_modes[1]}}</td>
                <td class="pad" width="10%">{{historyList.bit_modes[2]}}</td>
                <td class="pad" width="10%">{{historyList.bit_modes[3]}}</td>
                <td class="pad" width="10%">{{historyList.bit_modes[4]}}</td>
                <td class="pad" width="10%">{{historyList.prev3_form}}</td>
                <td class="pad" width="10%">{{historyList.post3_form}}</td>
              </tr>
              </tbody>
            </table>
          </v-scroll>
        </div>
        <!--其他-->
        <div class="lot-his-item" v-else>
          <table>
            <thead>
              <tr>
                <td width="15%">期数</td>
                <td width="15%">开奖结果</td>
                <td width="10%">和值</td>
                <td width="10%">跨度</td>
                <td width="15%">形态</td>
                <td width="10%">百位</td>
                <td width="10%">十位</td>
                <td width="7.5%">个位</td>
                <td width="7.5%">重号</td>
              </tr>
            </thead>
          </table>
          <v-scroll :on-refresh="onRefresh" :dataList="scrollData" :enableInfinite="false" style="top: 0.68rem">
            <table>
              <tbody>
                <tr v-for="(historyList, k) in historyList" v-if="k<100">
                  <td width="15%">
                    {{rstObj.code=='SHSSL'?historyList.issue_number.replace(/^\d{4}/,''):historyList.issue_number}}
                  </td>
                  <td width="15%"><span v-for="tiem in historyList.res">{{tiem}}</span></td>
                  <td width="10%">{{historyList.res | transSum}}</td>
                  <td width="10%">{{historyList.span}}</td>
                  <td width="15%">{{historyList.kuai3_form}}</td>
                  <td width="10%">{{historyList.bit_modes[0]}}</td>
                  <td width="10%">{{historyList.bit_modes[1]}}</td>
                  <td width="7.5%">{{historyList.bit_modes[2]}}</td>
                  <td width="7.5%">{{historyList.duplicate_num}}</td>
                </tr>
              </tbody>
            </table>
          </v-scroll>
        </div>
      </div>

      <div class="playing-fixed2">
        <dl @click="selRandow">
          <dt><img src="../../images/phone@2x.png" alt=""></dt>
          <dd>摇一摇随机选</dd>
        </dl>
        <div @click="hitoryflag=!hitoryflag">
          <Icon type="chevron-up" color="#555" size="18" v-if="hitoryflag"></Icon>
          <Icon type="chevron-down" color="#555" size="18" v-else></Icon>
        </div>
        <div class="bets-return" v-if="$store.state.user.bets.length>0" @click="returnBets">
          <span>返回购物车</span>
          <img src="../../images/buy_Press@2x.png" alt="">
          <i class="badge">{{$store.state.user.bets.length}}</i>
        </div>
      </div>

      <!--位数-->
      <div class="playing-title">
        <dl v-if="rstObj.code=='XGLHC'" v-for="(lotteryRanges,i) in lotteryRanges" :class="lotteryRanges.className" style="padding-bottom: .6rem">
          <dt >{{lotteryRanges.type}}</dt>
          <dd style="line-height: 1.3">
            <ul>
              <li class="lhc" v-for="(item,k) in lotteryRanges.prams">
                <span>{{item.name}}</span>
                <span>{{rates[k]}}</span>
              </li>
            </ul>
          </dd>
        </dl>
        <dl v-if="rstObj.code!='XGLHC'"  v-for="(lotteryRanges,i) in lotteryRanges" :class="lotteryRanges.className">
          <dt >{{lotteryRanges.type}}</dt>
          <dd>
            <ul>
              <li :class="item.active?'activeStyle':item.className" v-for="(item,k) in lotteryRanges.prams" @click="selNumber(k,item.val,item.active,lotteryRanges)">{{item.name}}</li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>

    <!--投注结算-->
    <div class="playing-account">
      <dl>
        <dt>
          <div class="playing-account-left" @click="delNumber">
            <img src="../../images/del_buy.png" alt="">
            <span>清空</span>
          </div>
          <div class="playing-account-m-1" @click="getColdHotPanking(1,'冷热排行')">冷热</div>
          <div class="playing-account-m-1" @click="getColdHotPanking(2,'遗漏排行')">遗漏</div>
          <div class="playing-account-right">
            <span>{{lotteryNum}}</span>注<span>{{lotteryCash}}</span>元
          </div>
        </dt>
        <dd>
          <!--$store.state.user.bets.length===0-->
          <input type="button" value="立即投注" @click="orderLottery" v-if="!$store.state.user.shop">
          <input type="button" value="下一步" @click="orderLottery" v-else>
        </dd>
      </dl>
    </div>

    <!--冷热 遗漏-->
    <div class="playing-hotcold-bg" v-if="hotFlag" @click="hotFlag=false"></div>
    <div class="playing-hotcold-con" v-if="hotFlag">
      <div class="playing-hotcold-item">
        <h4>{{bTitle}}</h4>
        <div class="playing-hotcold-list">
          <div class="playing-hotcold-list-item" v-for="(item, i) in hotColdList">
            <div>{{item.type}}</div>
            <div>已连开{{item.count}}期</div>
          </div>
        </div>
      </div>
      <nop-data v-if="hotColdList.length==0"></nop-data>
    </div>

    <!--弹层 注单设定-->
    <div class="bets-con" v-if="singleLotter">
      <div class="bets-item">
        <div class="bets-title">
          <h4>注单设定</h4>
        </div>
        <div class="bets-setion">
          <div class="bets-rotats">
            <div>赔率：{{ratesVal.toFixed(2)}}</div>
            <div>返利：{{retrun_li}}%</div>
          </div>
          <div class="bets-slide">
            <Slider v-model="value1"
                    :min="0"
                    :max="(this.highest_rate-this.lowest_rate)/this.highest_rate*100"
                    :step="1"
                    show-stops
                    @on-input="chaSilde"></Slider>
          </div>
          <div class="bets-input">
            <span>单注金额：</span>
            <input type="text" v-model="unit_price"><span>元</span>
          </div>
          <div class="bets-fetrue">
            <div>追&nbsp;<input type="button" value="-" @click="mounse1"><input type="text" v-model="future_issues" readonly><input type="button" value="+" @click="plus1">&nbsp;期</div>
            <div>投&nbsp;<input type="button" value="-" @click="mounse2"><input type="text" v-model="bet_count" readonly><input type="button" value="+" @click="plus2">&nbsp;倍</div>
          </div>
          <div class="bets-count">
            注数：{{lotteryNum}}
          </div>
          <div class="bets-count">
            总额：{{(unit_price*bet_count*future_issues+bet_count*unit_price)*lotteryNum}}元
          </div>
          <div class="bets-winning">
            <span>若中奖，单注最高中</span>
            <span class="sum" >{{(ratesVal*unit_price).toFixed(2)}}</span>
            <span class="fr">元</span>
          </div>
        </div>
        <div class="bets-foot">
          <input type="button" value="取消" @click="singleLotter=false">
          <input type="button" value="提交" @click='submitOrder'>
        </div>
      </div>
    </div>
  </div>
</template>


<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import NopData from '@/components/tab/nop-data'
  import { requestOpt, alertip,array_contain, chaLotteryNumber,mt_confirm} from 'api/recommend'
  import {lotteryRanges} from 'api/config'
  import VScroll from "@/components/public/pull-refresh"
  export default {
    components: {
      Back,
      NopData,
      VScroll
    },
    data() {
      return {
        isShow: false,
        showha:false,
        bTitle: '',// 冷热 遗漏列表标题
        hotFlag: false,
        results: [],
        rstObj: {},
        historyList: [],
        page: 1,
        timer:null,
        scrollData: {
          noFlag: false //暂无更多数据显示
        },
        nodata: false,
        hitoryflag: false,
        lotteryRanges:{},
        paylist: {},
        singlePlay: [], // 包括 A、B盘
        panPlay: [], // A或者B
        pKey: [],
        cKey: [],
        keyFirst: '',
        keyLast: '',
        target: '',
        rates: [], // 赔率
        ratesVal:0, // 赔率值
        highest_rate: 0, // 最高赔率
        lowest_rate: 0, // 最低赔率
        retrun_li: 0, // 返利
        activeNumBool: false,
        activeNum: -1,
        activeArr: [], // 被选中的号码 存储数组
        arrLen: 0, // 记录个数
        unitPirace: 2, // 投注单价
        unit_price: 2, // 单个投注单价
        future_issues:0,// 追期数
        bet_count: 1,// 投注倍数
        lotteryNum: 0, //总投注数
        lotteryCash: 0, // 总金额
        lotteryPosText: [], // 位置数组
        hotCold: 1,
        hotColdList: [],
        id:'', // 彩票玩法ID
        value1: 0, // 赔率 slide
        min: 0,
        max: 0,
        singleLotter: false,
      }
    },
    computed: {

    },
    beforeRouteLeave(to, from, next) {
      clearInterval(this.timer)
      this.$store.commit('SHOP', false)
      next()
    },
    mounted() {
//      this.getColdHotPanking(1,'冷热排行')
//      this.getColdHotPanking(2,'遗漏排行')
      this.delNumber()
//      this.lotteryRanges = lotteryRanges
//      this.lotteryRanges=lotteryRanges['ssq']
      this.getLotterylist();

//      this.getLottery()
      this.getHistory();
      this.getBets()
     /* this.timer = setInterval(() => {
//        this.getLottery();
        let list = this.$store.state.user.bet_list
        for (let i=0,len=list.length; i<len;i++) {
          if (this.$route.params.code===list[i].code) {
            this.rstObj = list[i];
            this.$store.commit('BET_OBJ',this.rstObj)
//            console.log(this.rstObj)
          }
        }
      },1000)*/
    },
    methods: {
      goback() { // 返回
        if (this.$store.state.user.shop){
          this.$router.push('/betsDetail/'+this.$route.params.code+'/'+this.$route.params.typeid)
        } else {
          if(this.$store.state.user.bets.length>0) {
            mt_confirm('退出该页面会清空购物篮里的注单!', res => {
              if (res) {
                this.$store.commit('BETS',[])
                this.$router.replace('/home')
              }
            })
          } else {
            this.$router.replace('/home')
          }
        }
      },
      getBets() {
        let list = this.$store.state.user.bet_list
        for (let i=0,len=list.length; i<len;i++) {
          if (this.$route.params.code===list[i].code) {
            this.rstObj  = list[i];
          }
        }
      },
      mounse1() {// 追 减
        if(this.future_issues===0) {
          this.future_issues=0
          return
        }
        --this.future_issues

      },
      mounse2() {// 倍 减
        if(this.bet_count===1) {
          this.bet_count=1
          return
        }
        --this.bet_count

      },
      plus1() {// 追 加
        ++this.future_issues
      },
      plus2() {// 倍 加
        ++this.bet_count
      },
      returnBets() {
        this.$store.commit('BET',{})
//        this.$router.push('/betsDetail')
        this.$router.push('/betsDetail/'+this.$route.params.code+'/'+this.$route.params.typeid)
      },
      onRefresh(done) {
        this.page = 1;
        this.getHistory();
        if(done) {
          done();
        }
      },
      open(){
        this.showha=!this.showha
      },
      chaSilde() {
        this.retrun_li = ~~this.value1
        if (~~this.value1===0) {
          this.ratesVal = this.highest_rate
        } else if (~~this.value1===Math.ceil((this.highest_rate-this.lowest_rate)/this.highest_rate*100)) {
          this.ratesVal = this.lowest_rate
        } else {
          this.ratesVal = this.highest_rate-this.highest_rate*this.retrun_li/100
        }
//        console.log(this.ratesVal)
      },
      hideDailog(i) {
        this.delNumber()
        event.stopPropagation();
        event.preventDefault();
        this.isShow = !this.isShow;
        if (this.isShow) {
          this.$el.querySelector('.playing-down').style.transform = 'rotate(180deg)'
        } else {
          this.$el.querySelector('.playing-down').style.transform = 'rotate(0)'
        }

      },
      getLotterylist() { // 彩票玩法列表
        requestOpt.reqnoGet('play_types', (res) => {
          if (res.data.status===1) {
            let list = res.data.data.list
            let o = Object.keys(list)
            let reg = new RegExp(this.$route.params.code)
            for (let i=0,len=o.length; i<len;i++) {
              if (reg.test(o[i])) {
                let k = o[i]; // 1|重庆时时彩|CQSSC
                this.paylist = list[k]
                this.singlePlay = Object.keys(list[k]); // this.KeyFirst 集合
                this.valuePlay = Object.values(list[k]); // this.KeyFirst 集合

                this.pKey = Object.keys(list[k])[0].split('|').slice(1) // arr -> 分割arr -> 去除数字下标0  --  []
//                console.log(this.pKey)
                this.keyFirst = this.pKey[0] // 默认显示第一个
                this.cKey = list[k][Object.keys(list[k])[0]]; //获取第二级集合
//                console.log(this.cKey)
                this.keyLast = this.cKey[0].type_name // 下级默认显示第一个
                if (this.paylist[Object.keys(list[k])[0]][0].rates) {
                  this.rates = this.paylist[Object.keys(list[k])[0]][0].rates
                }
                this.target = chaLotteryNumber(this.keyFirst, this.keyLast, this.$route.params.code)
//                console.log(this.rates)
                this.lotteryRanges=lotteryRanges[this.target]
//                this.arrLen = this.lotteryRanges.length
                this.arrLen = this.paylist[Object.keys(list[k])[0]][0].number_count
                this.id = this.paylist[Object.keys(list[k])[0]][0].id
                this.lowest_rate = this.paylist[Object.keys(list[k])[0]][0].lowest_rate
                this.highest_rate = this.paylist[Object.keys(list[k])[0]][0].highest_rate
                this.ratesVal =  this.paylist[Object.keys(list[k])[0]][0].highest_rate
//                this.max = ~~(this.highest_rate-this.lowest_rate)/100
                console.log(this.valuePlay )
                let tt = []
                for (let m=0,len=this.valuePlay.length;m<len;m++) {
//                  for (let n=0,len=this.valuePlay[m].length; n<len;n++) {
//                    console.log(this.valuePlay[m][n].pan)
                    if (this.valuePlay[m][0].pan == this.$route.params.pan) {
                      this.panPlay.push(this.singlePlay[m])
                    }
//                  }
                }
                console.log(tt )
                this.delNumber()
              }
            }
          } else {
            alertip(res.data.msg)
          }
        }, (err) => {
          alertip(err)
        });
      },
      tabPlay(name,k) {
        this.delNumber()
        event.stopPropagation();
        event.preventDefault();
        this.keyFirst = name.replace(/^\d+\|/,'')
        this.cKey = this.paylist[name]
        this.keyLast = this.cKey[0].type_name

        if (this.cKey.length<=1) {
          this.isShow = false;
        }
        this.rates = this.cKey[0].rates
        this.target = chaLotteryNumber(this.keyFirst, this.keyLast, this.$route.params.code)
        this.arrLen = this.cKey[0].number_count
        this.id  = this.cKey[0].id
        this.lowest_rate = this.cKey[0].lowest_rate
        this.highest_rate = this.cKey[0].highest_rate
        this.ratesVal = this.cKey[0].highest_rate
//        this.max = ~~(this.highest_rate-this.lowest_rate)/100
//        console.log(k+'个')
        this.lotteryRanges=lotteryRanges[this.target]
      },
      tabPlay2(name,id,k) {
        this.delNumber()
        event.stopPropagation();
        event.preventDefault();
        this.isShow = false;
        this.keyLast = name
        this.target = chaLotteryNumber(this.keyFirst, this.keyLast, this.$route.params.code)
        this.arrLen = this.cKey[k].number_count
        this.id  = this.cKey[k].id
        this.lowest_rate = this.cKey[k].lowest_rate
        this.highest_rate = this.cKey[k].highest_rate
        this.ratesVal = this.cKey[k].highest_rate
//        this.max = ~~(this.highest_rate-this.lowest_rate)/100
        console.log(k+'个 ' + this.arrLen+'选' )
        console.log(this.cKey[k].remark )
        this.lotteryRanges=lotteryRanges[this.target]
      },
      getLottery() {
        requestOpt.reqnoGet('betting_list_v1?page=', (res) => {
          if (res.data.status===1) {
            let list = res.data.data.list
            for (let i=0,len=list.length; i<len;i++) {
              if (this.$route.params.code===list[i].code) {
                this.rstObj = list[i];
//                console.log(this.rstObj)
              }
            }
          } else {
            alertip(res.data.msg)
          }
        }, (err) => {
          alertip(err)
        });
      },
      getHistory() { // 单个彩票历史记录 lottery_results_and_forms 'lottery_results/'+this.$route.params.typeid+'?page='+this.page
        requestOpt.reqnoGet('lottery_results_and_forms/'+this.$route.params.typeid, (res) => {
          if (res.data.status===1) {
            this.historyList = res.data.data.list;
            console.log(this.historyList)
          } else {
            alertip(res.data.msg)
          }
        }, (err) => {
          alertip(err)
        });
      },
      getColdHotPanking(type,title) { // this.hotCold
        this.bTitle = title
        this.hotFlag = true
        requestOpt.reqnoGet('lottery_results_form_rank?type='+type+'&lot_type_id='+this.$route.params.typeid, (res) => {
          if (res.data.status===1) {
            this.hotColdList = res.data.data.list;
            console.log(this.hotColdList)
          } else {
            alertip(res.data.msg)
          }
        }, (err) => {
          alertip(err)
        });
      },
      submitOrder() { // 投注提交
//        this.$router.push('/betsDetail')
        this.$router.push('/betsDetail/'+this.$route.params.code+'/'+this.$route.params.typeid)
        this.$store.commit('SHOP',true)
        this.$store.commit('BET',{
          lot_type_id: this.$route.params.typeid, // 彩票类型ID
          play_type_id:this.id,// 子 彩票玩法ID
          bet_numbers1: this.activeArr,// 彩票投注号码数组  按位投注二维[[1,2],[3,4]]  一般投注一维[1,2,3]
          bet_numbers2: this.lotteryPosText, // 彩票投注号码数组[拖码数组或位置数组]
          bet_amount:(this.unit_price*this.bet_count*this.future_issues+this.bet_count*this.unit_price)*this.lotteryNum,//投注金额
          bet_count: this.bet_count,//投注倍数
          bet_rate: this.ratesVal,//投注赔率
          future_issues: this.future_issues,//追期数【范围0-50】
          unit_price: this.unit_price,//单注彩票金额

          bet_type1: this.keyFirst,
          bet_type2: this.keyLast,
          retrun_li: this.retrun_li,
          lotteryNum: this.lotteryNum,

        })
        /*
        ratesVal: this.ratesVal,
          retrun_li: this.retrun_li,
          future_issues: this.future_issues,
          bet_count: this.bet_count,
          lotteryNum: this.lotteryNum,
          lotteryCash: (this.unit_price*this.bet_count*this.future_issues+this.bet_count*this.unit_price)*this.lotteryNum,
          bet_type1: this.keyFirst,
          bet_type2: this.keyLast,
          bets_number: this.activeArr,

        * lot_type_id: this.$route.params.typeid,
            play_type_id:this.id,
            bet_numbers1: [],
            bet_numbers2: [],
            bet_amount:this.lotteryCash,
            bet_count: this.bet_count,
            bet_rate: this.ratesVal,
            future_issues: this.future_issues,
            unit_price: this.unit_price
        * */
        return
       /* {this.keyFirst = name.replace(/^\d+\|/,'')
        this.cKey = this.paylist[name]
        this.keyLast = this.cKey[0].type_name
          rebate: 0,
            ratesVal: 9800,
          future_issues: 0,
          bet_count: 1,
          lotteryNum: 2,
          lotteryCash: 4,
          bet_type1: '五星',
          bet_type2: '五星直选复式',
          bets_number: [[1,7],[2,8],4,9,6]
        }*/
/*
        requestOpt.reqPost('lottery_record', this.$store.state.user.token,{
          issue_number: this.rstObj.issue_number,
          screen_shot: this.$store.state.user.of_avate,
          bet_amounts: this.lotteryCash,
          bets: [{
            lot_type_id: this.$route.params.typeid,
            play_type_id:this.id,
            bet_numbers1: [],
            bet_numbers2: [],
            bet_amount:this.lotteryCash,
            bet_count: this.bet_count,
            bet_rate: this.ratesVal,
            future_issues: this.future_issues,
            unit_price: this.unit_price
          }]
        }, res => {
          if (res.data.status===1) {
            this.screen_shot = res.data.data.screen_shot;
            console.log(this.screen_shot)
          } else {
            alertip(res.data.msg)
          }
        }, (err) => {
          alertip(err)
        });*/
      },
      orderLottery() {
        if (this.lotteryNum === 0) {
          alertip('还未投注')
        } else {
          this.singleLotter = true
        }

      },
      selNumber(k,num,bool, obj) { // 单一选号
        this.activeNum = num;
        obj.prams[k].active = !bool
      },
      delNumber() {// 清空选号
        if (this.lotteryRanges&&this.lotteryRanges.length===0) return
        for(let i=0,len=this.lotteryRanges.length;i<len;i++) {
          for(let k=0,len= this.lotteryRanges[i].prams.length;k<len;k++) {
            this.lotteryRanges[i].prams[k].active = false
          }
        }
      },
      selRandow() { //随机选号
        this.delNumber()
        switch (this.arrLen) {
          case 1:
            // 时时彩
            if (this.keyLast ==='定位胆') {
              this.lotteryRanges[Math.floor(Math.random()*(this.lotteryRanges.length))].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active = true
            } else {
              this.lotteryRanges[0].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active = true
            }
            break
          case 2:
            // 时时彩
            if (this.keyFirst=='任选二'&&this.keyLast ==='直选复式') {
              this.lotteryRanges[Math.floor(Math.random()*(this.lotteryRanges.length))].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active = true
              this.lotteryRanges[Math.floor(Math.random()*(this.lotteryRanges.length-1))].prams[Math.floor(Math.random()*(this.lotteryRanges[1].prams.length))].active = true
            } else if(this.keyFirst=='任选二'&&(this.keyLast ==='前二组选复式'||this.keyLast ==='后二组选复式')){
              for (let i=0,len=2;i<len;i++) {
                this.lotteryRanges[0].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active = true
              }
            } else if(this.keyFirst=='任选二'&&this.keyLast ==='五选二直选和值') {
              this.lotteryRanges[0].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active = true
            } else {
              this.lotteryRanges[0].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active = true
              this.lotteryRanges[1].prams[Math.floor(Math.random()*(this.lotteryRanges[1].prams.length))].active = true
            }

            break
          case 3:
            this.lotteryRanges[0].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active = true
            this.lotteryRanges[1].prams[Math.floor(Math.random()*(this.lotteryRanges[1].prams.length))].active = true
            this.lotteryRanges[2].prams[Math.floor(Math.random()*(this.lotteryRanges[2].prams.length))].active = true
            break
          case 4:
            this.lotteryRanges[0].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active = true
            this.lotteryRanges[1].prams[Math.floor(Math.random()*(this.lotteryRanges[1].prams.length))].active = true
            this.lotteryRanges[2].prams[Math.floor(Math.random()*(this.lotteryRanges[2].prams.length))].active = true
            this.lotteryRanges[3].prams[Math.floor(Math.random()*(this.lotteryRanges[3].prams.length))].active = true
            break
          case 5:
            this.lotteryRanges[0].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active = true
            this.lotteryRanges[1].prams[Math.floor(Math.random()*(this.lotteryRanges[1].prams.length))].active = true
            this.lotteryRanges[2].prams[Math.floor(Math.random()*(this.lotteryRanges[2].prams.length))].active = true
            this.lotteryRanges[3].prams[Math.floor(Math.random()*(this.lotteryRanges[3].prams.length))].active = true
            this.lotteryRanges[4].prams[Math.floor(Math.random()*(this.lotteryRanges[4].prams.length))].active = true
            break
          case 6:
            this.lotteryRanges[0].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active = true
            this.lotteryRanges[1].prams[Math.floor(Math.random()*(this.lotteryRanges[1].prams.length))].active = true
            this.lotteryRanges[2].prams[Math.floor(Math.random()*(this.lotteryRanges[2].prams.length))].active = true
            this.lotteryRanges[3].prams[Math.floor(Math.random()*(this.lotteryRanges[3].prams.length))].active = true
            this.lotteryRanges[4].prams[Math.floor(Math.random()*(this.lotteryRanges[4].prams.length))].active = true
            this.lotteryRanges[5].prams[Math.floor(Math.random()*(this.lotteryRanges[5].prams.length))].active = true
            break
          case 7:
            this.lotteryRanges[0].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active = true
            this.lotteryRanges[1].prams[Math.floor(Math.random()*(this.lotteryRanges[1].prams.length))].active = true
            this.lotteryRanges[2].prams[Math.floor(Math.random()*(this.lotteryRanges[2].prams.length))].active = true
            this.lotteryRanges[3].prams[Math.floor(Math.random()*(this.lotteryRanges[3].prams.length))].active = true
            this.lotteryRanges[4].prams[Math.floor(Math.random()*(this.lotteryRanges[4].prams.length))].active = true
            this.lotteryRanges[5].prams[Math.floor(Math.random()*(this.lotteryRanges[5].prams.length))].active = true
            this.lotteryRanges[6].prams[Math.floor(Math.random()*(this.lotteryRanges[6].prams.length))].active = true
            break
          case 8:
            this.lotteryRanges[0].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active = true
            this.lotteryRanges[1].prams[Math.floor(Math.random()*(this.lotteryRanges[1].prams.length))].active = true
            this.lotteryRanges[2].prams[Math.floor(Math.random()*(this.lotteryRanges[2].prams.length))].active = true
            this.lotteryRanges[3].prams[Math.floor(Math.random()*(this.lotteryRanges[3].prams.length))].active = true
            this.lotteryRanges[4].prams[Math.floor(Math.random()*(this.lotteryRanges[4].prams.length))].active = true
            this.lotteryRanges[5].prams[Math.floor(Math.random()*(this.lotteryRanges[5].prams.length))].active = true
            this.lotteryRanges[6].prams[Math.floor(Math.random()*(this.lotteryRanges[6].prams.length))].active = true
            this.lotteryRanges[7].prams[Math.floor(Math.random()*(this.lotteryRanges[7].prams.length))].active = true
            break
          case 9:
            this.lotteryRanges[0].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active = true
            this.lotteryRanges[1].prams[Math.floor(Math.random()*(this.lotteryRanges[1].prams.length))].active = true
            this.lotteryRanges[2].prams[Math.floor(Math.random()*(this.lotteryRanges[2].prams.length))].active = true
            this.lotteryRanges[3].prams[Math.floor(Math.random()*(this.lotteryRanges[3].prams.length))].active = true
            this.lotteryRanges[4].prams[Math.floor(Math.random()*(this.lotteryRanges[4].prams.length))].active = true
            this.lotteryRanges[5].prams[Math.floor(Math.random()*(this.lotteryRanges[5].prams.length))].active = true
            this.lotteryRanges[6].prams[Math.floor(Math.random()*(this.lotteryRanges[6].prams.length))].active = true
            this.lotteryRanges[7].prams[Math.floor(Math.random()*(this.lotteryRanges[7].prams.length))].active = true
            this.lotteryRanges[8].prams[Math.floor(Math.random()*(this.lotteryRanges[8].prams.length))].active = true
            break
          default:
            this.lotteryRanges[0].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active = true
            this.lotteryRanges[1].prams[Math.floor(Math.random()*(this.lotteryRanges[1].prams.length))].active = true
            this.lotteryRanges[2].prams[Math.floor(Math.random()*(this.lotteryRanges[2].prams.length))].active = true
            this.lotteryRanges[3].prams[Math.floor(Math.random()*(this.lotteryRanges[3].prams.length))].active = true
            this.lotteryRanges[4].prams[Math.floor(Math.random()*(this.lotteryRanges[4].prams.length))].active = true
            this.lotteryRanges[5].prams[Math.floor(Math.random()*(this.lotteryRanges[5].prams.length))].active = true
            this.lotteryRanges[6].prams[Math.floor(Math.random()*(this.lotteryRanges[6].prams.length))].active = true
            this.lotteryRanges[7].prams[Math.floor(Math.random()*(this.lotteryRanges[7].prams.length))].active = true
            this.lotteryRanges[8].prams[Math.floor(Math.random()*(this.lotteryRanges[8].prams.length))].active = true
            this.lotteryRanges[9].prams[Math.floor(Math.random()*(this.lotteryRanges[9].prams.length))].active = true
            break
        }
      }
    },
    watch: {
        lotteryRanges:{
          handler:function(val,oldval){
            let arr=[]
            console.log(val)
            if (!val) return
            switch (this.arrLen) {
              case 1:
                if (this.keyLast ==='定位胆') { // 时时彩
                  arr[0]=[]
                  arr[1]=[]
                  arr[2]=[]
                  arr[3]=[]
                  arr[4]=[]
                } else {
                  arr[0]=[]
                }
                break
              case 2:
                // 时时彩
                if (this.keyFirst=='任选二'&&this.keyLast ==='直选复式') {
                  arr[0]=[]
                  arr[1]=[]
                  arr[2]=[]
                  arr[3]=[]
                  arr[4]=[]
                } else if(this.keyFirst=='任选二'
                  &&(this.keyLast ==='前二组选复式'||this.keyLast ==='后二组选复式'||this.keyLast ==='五选二直选和值')){
                  arr[0]=[]
                } else {
                  arr[0]=[]
                  arr[1]=[]
                }

                break
              case 3:
                arr[0]=[]
                arr[1]=[]
                arr[2]=[]
                break
              case 4:
                arr[0]=[]
                arr[1]=[]
                arr[2]=[]
                arr[3]=[]
                break
              case 5:
                arr[0]=[]
                arr[1]=[]
                arr[2]=[]
                arr[3]=[]
                arr[4]=[]
                break
              case 6:
                arr[0]=[]
                arr[1]=[]
                arr[2]=[]
                arr[3]=[]
                arr[4]=[]
                arr[5]=[]
                break
              case 7:
                arr[0]=[]
                arr[1]=[]
                arr[2]=[]
                arr[3]=[]
                arr[4]=[]
                arr[5]=[]
                arr[6]=[]
                break
              case 8:
                arr[0]=[]
                arr[1]=[]
                arr[2]=[]
                arr[3]=[]
                arr[4]=[]
                arr[5]=[]
                arr[6]=[]
                arr[7]=[]
                break
              case 9:
                arr[0]=[]
                arr[1]=[]
                arr[2]=[]
                arr[3]=[]
                arr[4]=[]
                arr[5]=[]
                arr[6]=[]
                arr[7]=[]
                arr[8]=[]
                break
              case 10:
                arr[0]=[]
                arr[1]=[]
                arr[2]=[]
                arr[3]=[]
                arr[4]=[]
                arr[5]=[]
                arr[6]=[]
                arr[7]=[]
                arr[8]=[]
                arr[9]=[]
                break
            }
            this.lotteryPosText=[]
            for (let m=0,len=val.length; m<len;m++) {
              if (val[m].prams) {
                for (let n=0,l=val[m].prams.length;n<l;n++) {
                  if (val[m].prams[n].active) {
                    if (!array_contain(this.lotteryPosText,val[m].type)) {
                      this.lotteryPosText.push(val[m].type)
                    }
                    switch (m) {
                      case 0:

                        arr[0].push(val[m].prams[n].val);
                        break
                      case 1:
                        arr[1].push(val[m].prams[n].val);
                        break
                      case 2:
                        arr[2].push(val[m].prams[n].val);
                        break
                      case 3:
                        arr[3].push(val[m].prams[n].val);
                        break
                      case 4:
                        arr[4].push(val[m].prams[n].val);
                        break
                      case 5:
                        arr[5].push(val[m].prams[n].val);
                        break
                      case 6:
                        arr[6].push(val[m].prams[n].val);
                        break
                      case 7:
                        arr[7].push(val[m].prams[n].val);
                        break
                      case 8:
                        arr[8].push(val[m].prams[n].val);
                        break
                      case 9:
                        arr[9].push(val[m].prams[n].val);
                        break
                      default:
                        arr[10].push(val[m].prams[n].val);
                        break
                    }
                  }
                }
              }

            }
            switch (this.arrLen) {
              case 1:
                // 时时彩
                if (this.keyLast ==='定位胆') {
                  this.lotteryNum = (arr[0].length)+(arr[1].length)+(arr[2].length)+(arr[3].length)+(arr[4].length)
                } else if (this.keyFirst=='任选二'&&
                  (this.keyLast ==='前二直选和值'||this.keyLast ==='后二直选和值')){
                  this.lotteryNum = 0
                  for (let i=0,len=arr[0].length;i<len;i++) {
                    if (arr[0][i]<10) {
                      this.lotteryNum += arr[0][i]+1
                    } else {
                      this.lotteryNum += 20-arr[0][i]-1
                    }
                  }
                } else if (this.keyFirst=='任选二'&&
                  (this.keyLast ==='前二组选和值'||this.keyLast ==='后二组选和值')){
                  this.lotteryNum = 0
                  for (let i=0,len=arr[0].length;i<len;i++) {
                    if (arr[0][i]<10) {
                      this.lotteryNum += Math.floor((arr[0][i]+1)/2)
                    } else {
                      this.lotteryNum += Math.floor((20-arr[0][i]-1)/2)
                    }
                  }
                } else {
                  this.lotteryNum = (arr[0].length)
                }
                this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                break
              case 2:
                //  时时彩
                if (this.keyFirst=='任选二'&&this.keyLast ==='直选复式') {
                  this.lotteryNum = (arr[0].length)*(arr[1].length+arr[2].length+arr[3].length+arr[4].length)
                                     + (arr[1].length)*(arr[2].length+arr[3].length+arr[4].length)
                                     + (arr[2].length)*(length+arr[3].length+arr[4].length)
                                     + (arr[3].length)*(arr[4].length)
                } else if(this.keyFirst=='任选二'&&(this.keyLast ==='前二组选复式'||this.keyLast ==='后二组选复式')){
                  this.lotteryNum = (arr[0].length)*(arr[0].length-1)/2
                } else if(this.keyFirst=='任选二'&&(this.keyLast ==='五选二直选和值')){
                  this.lotteryNum=0
                  for (let i=0,len=arr[0].length;i<len;i++) {
                    if (arr[0][i]<10) {
                      this.lotteryNum = (~~arr[0][i]+1)*10
                    } else {
                      this.lotteryNum += (20-arr[0][i]-1)*10
                    }
                  }
                  for (let i=0,len=arr[0].length;i<len;i++) {

                  }
                } else {
                  this.lotteryNum = (arr[0].length)*(arr[1].length)
                }
                this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                break
              case 3:
                this.lotteryNum = (arr[0].length)*(arr[1].length)*(arr[2].length)
                this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                break
              case 4:
                this.lotteryNum = (arr[0].length)*(arr[1].length)*(arr[2].length)*(arr[3].length)
                this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                break
              case 5:
                this.lotteryNum = (arr[0].length)*(arr[1].length)*(arr[2].length)*(arr[3].length)*(arr[4].length)
                this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                break
              case 6:
                this.lotteryNum = (arr[0].length)*(arr[1].length)*(arr[2].length)*(arr[3].length)*(arr[4].length)*(arr[5].length)
                this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                break
              case 7:
                this.lotteryNum = (arr[0].length)*(arr[1].length)*(arr[2].length)*(arr[3].length)*(arr[4].length)*(arr[5].length)*(arr[6].length)
                this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                break
              case 8:
                this.lotteryNum = (arr[0].length)*(arr[1].length)*(arr[2].length)*(arr[3].length)*(arr[4].length)*(arr[5].length)*(arr[6].length)*(arr[7].length)
                this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                break
              case 9:
                this.lotteryNum = (arr[0].length)*(arr[1].length)*(arr[2].length)*(arr[3].length)*(arr[4].length)*(arr[5].length)*(arr[6].length)*(arr[7].length)*(arr[8].length)
                this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                break
              default:
                this.lotteryNum = (arr[0].length)*(arr[1].length)*(arr[2].length)*(arr[3].length)*(arr[4].length)*(arr[5].length)*(arr[6].length)*(arr[7].length)*(arr[8].length)*(arr[9].length)
                this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                break
            }
            this.activeArr = arr
            console.log(this.activeArr)
            console.log(this.lotteryPosText)
          },
          deep:true
        },
      }


  }
/*console.log(this.$watch('lotteryRanges',function (v, old) {
  console.log(v, old)
}))*/
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .playing-content{
    height 100%
    overflow hidden
  }
  .playing-head{
    width: 7.5rem;
    height: 0.88rem;
    display: block;
    margin: auto;
    background :#ff3a3b;
    position: fixed;
    top:0;
    z-index: 0;
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
    font-size : 0.3rem;
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
    background rgba(0,0,0,.5)

  }
  .header-modal{
    width 7.5rem
    padding-bottom .3rem
    /*min-height 3.7rem*/
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
    display flex
    margin-bottom 0.2rem
    height 0.66rem
  }
  .header-modal  dl dt{
/*    float left*/
    padding 0 0.3rem
    display block
    font-size 0.24rem
    line-height 0.6rem
    color #000000
  }
  .header-modal  dl dd{
   /* width 6.38rem*/
    flex-grow 1
    height 1px
    display block
    background #cccccc
    float right
    margin-top 0.29rem
  }
  .header-modal  dl dd.w54{
    width 5.4rem
  }

  .header-modal ul{
    width 7.5rem
    height auto
    display block
    &:after {
      content ''
      clear both
      display block
    }
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
    /*margin-top 0.88rem*/
    overflow hidden
  }
  //头部其数
  .playing-fixed1{
    margin-top .99rem
  }
  .playing-fixed1 dl{
    display flex
    justify-content space-between
    align-items center
    margin .15rem
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
  .playing-fixed1 dl.fixed-t  .lot-res-num {
    display flex
    align-items center
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
  .playing-fixed1 dl.fixed-t dt span.b-blue{
    color #35b5fe
  }

  .lot-history-list {
    position relative
    top 0
    box-sizing border-box
    height 6.5rem
    overflow hidden
    font-size .12rem
    color #000
    transition height 1s
    animation histopbottom 1s
    .lot-his-item {
      .lot-his-title {
        display flex
        justify-content space-around
        align-items center
        border-top 1px solid #ccc
        border-bottom 1px solid #ccc
        span {
          display inline-block
          padding .2rem 0
          text-align center
          word-break keep-all
          transform scale(0.8)

          &.item1 {
            width 20%
          }
          &.item2 {
            width 50%
          }
          &.item3 {
            width 15%
          }
          &.item4 {
            width 15%
          }
        }
      }
      .lot-history {
        display flex
        justify-content space-around
        align-items center
        font-size .12rem
        span {
          display inline-block
          width 20%
          padding .1rem 0
          text-align center
          transform scale(0.8)
          i {
            padding-right .1rem
            color #ff3a3b
            font-style normal
           /* &:last-child {
              color #35b5fe
            }*/
            &.b-blue {
              color #35b5fe
            }
          }
          span {
            padding-right .1rem
            color #ff3a3b
          }
          &.item1 {
            width 20%
          }
          &.item2 {
            width 50%
          }
          &.item3 {
            width 15%
          }
          &.item4 {
            width 15%
          }
        }
      }
    }
    table {
      width 100%
      font-size .12rem

      thead {
        tr {
          border-top 1px solid #ccc
          border-bottom 1px solid #ccc
        }
        td {
          padding .15rem 0
        }
      }
      tbody {
        tr {
          td {
            padding .05rem 0
            white-space nowrap
            /*&.pad {
              padding-left 0rem
            }*/
            span {
              padding-right .1rem
              color #ff3a3b
            }
          }
        }
        width 100%
      }
      td {
        transform scale(.8)
        text-align center
      }
    }
  }
    @keyframes histopbottom {
      from {
        height  0
      }
      to {
        height 6.5rem
      }
    }

  .playing-fixed2{
    position relative
    background #ffffff
  }
  .playing-fixed2 i{
    position absolute
    top 0
    left 0
    right 0
    margin auto
    width .59rem
    padding-bottom .051rem
    text-align center
    background #eee
  }
  .bets-return {
    position absolute
    top .1rem
    right .2rem
    width 2rem
    border 1px solid #ccc
    font-size .24rem
    color #ff3a3b
    border-radius .08rem
    img {
      width .5rem
      height .4rem
      padding 0.02rem
    }
    .badge{
      position absolute
      left auto
      top 0
      right 0
      width .3rem
      height .3rem
      line-height .3rem
      font-style normal
      background #ff3a3b
      color #fff
      writing-mode transform
      transform scale(.8,.8)
      border-radius 50%
    }
    span {
      position relative
      top -.1rem
      padding-left: .1rem
    }
  }


  .playing-fixed2 dl{
    height 0.6rem
    line-height 0.6rem
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
    max-height 10.8rem
    overflow scroll
    padding-bottom .76rem
    background #ffffff
  }
  .playing-title dl{
    display flex
    align-items center
    padding-bottom .3rem
    border-bottom 1px solid #eeeeee
  }
  .playing-title dl dt{
    height 1.02rem
    font-size 0.24rem
    color #ffffff
    background #ff3a3b;
    text-align center
    writing-mode: vertical-lr;/*从左向右 从右向左是 writing-mode: vertical-rl;*/
    writing-mode: tb-lr;/*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/
    line-height 0.52rem
    margin-top .3rem
    letter-spacing 3px
  }
  .playing-title dl.b-red dt {
    background #ff3a3b;
  }
  .playing-title dl.b-blue dt {
    background #35b5fe;
  }
  .playing-title dl.b-blue dd li{
    color #35b5fe;
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
    text-align center
    margin-top 0.36rem
    margin-left 0.6rem
    background #eeeeee
    line-height .64rem
    /* 六合彩 */
    &.lhc {
      height 0.74rem
      line-height 1.5
      border 0
      background transparent
      span {
        &:first-child {
          display inline-block
          width 0.64rem
          height 0.64rem
          line-height .64rem
          border-radius 45px
          border 1px solid #cccccc
          background #eeeeee
        }
      }
    }
    /*li 方块*/
    &.sqrt {
      width 1.64rem
      border-radius .08rem
      font-size .12rem
    }
    &.activeStyle {
      background #ff3a3b
      color #fff
    }
  }

  //投注结算
  .playing-account{
    width 100%
    /*width 7.5rem
    display block*/

    height 0.76rem
    position fixed
    bottom 0

  }
  .playing-account dl{
    /*width 7.5rem
    display block*/
    display flex
    justify-content space-between
    height 0.76rem
    background #ffffff
  }
  .playing-account dt{
    border-top 1px solid #eeeeee
    /*width 5.76rem*/
    display flex
    height 0.76rem
    /*float left*/
    background #ffffff
  }
  .playing-account dt .playing-account-left{
    width 1.5rem
    display block
    height 0.76rem
    /*float left*/
    border-right 1px solid #ccc
    padding-left 0.3rem
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
    /*text-align left*/
    font-size 0.2rem
    color #323232
    float left
    margin-left 0.1rem
  }
  .playing-account dt .playing-account-right{
    width 2.5rem
    display block
    height 0.76rem
    /*float right*/
    /*margin-right 0.2rem*/
    color #323232
    font-size 0.2rem
    text-align center
    /*text-align right*/
    line-height 0.76rem
  }
    .playing-account-m-1 {
      border-right 1px solid #ccc
      color #000000
      font-size .28rem
      padding 0 .15rem
      line-height 0.76rem
    }
  .playing-account dt .playing-account-right span{
    color #fcb23c
  }
  .playing-account dd{
    position relative
    width 1.74rem
   /* display block*/
    height 0.76rem
    /*float right*/
    background #ff3a3b;
  }
  .playing-account dd input{
    position absolute
    top 0
    width 100%
    /*width 1.74rem*/
    height 0.76rem
    /*float right*/
    font-size 0.24rem
    color #ffffff
    background none
    outline none
    border:none
    text-align center
  }

  /*冷热 遗漏*/
  .playing-hotcold-bg {
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    background rgba(0,0,0,.5)
    transition left 1s
    animation leftRight 1s
  }
  .playing-hotcold-con {
    position absolute
    top 0
    left 0
    width 85%
    height 100%
    overflow hidden
    background #eee
    font-size .26rem
    color #000
    transition left 1s
    animation leftRight 1s
    .playing-hotcold-item {
      margin .98rem .3rem 0
      h4 {
        padding-bottom .4rem
        color #ff3a3b
        font-size .36rem
      }
      .playing-hotcold-list {
        height 70%
        max-height 10.8rem
        border 1px solid #ccc
        border-radius 0.08rem
        overflow auto
        .playing-hotcold-list-item {
          display flex
          justify-content space-between
          &:nth-child(odd) {
            background #fff
          }
          &:nth-child(even) {
            background #e6e6e6
          }
          div {
            padding 0.2rem .15rem
            &:last-child {
              color #ff3a3b
            }
          }
        }
      }
    }
  }

  @keyframes leftRight {
    from {
      left -100%
    }
    to {
      0
    }
  }

  .bets-con {
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    background rgba(0,0,0,.5)
    font-size .26rem
    color #000
    .bets-item {
      position absolute
      top 0
      bottom 0
      left 0
      right 0
      margin auto
      width 90%
      height 5.37rem
      background #fff
      border-radius 0.08rem
      h4 {
        width 100%
        padding .2rem
        border-bottom 1px solid #ccc
        text-align center
      }
      input {
        border none
        background transparent
      }
      .bets-setion {
        padding .15rem 0.2rem
        .bets-rotats {
          display flex
          justify-content space-between
        }
        .bets-input {
          input {
            width 68%
            padding .1rem 0
            border 1px solid #ccc
            border-right 0
            border-radius 0.08rem
            text-align center
          }
          span {
            &:last-child {
              padding .1rem .2rem
              background #e8601d
              color #fff
            }
          }
        }
        .bets-fetrue {
          width 100%
          display flex
          margin-top 0.2rem
          div {
            display flex
            justify-content space-between
            align-items center
            width 46%
            margin-right 0.3rem
            input[type=button] {
              border 1px solid #ccc
              padding .15rem .2rem
            }
            input[type=text] {
               width 1.01rem
               border-top 1px solid #ccc
               border-bottom 1px solid #ccc
               padding .11rem
               text-align center
             }
          }
        }
        .bets-count {
          padding-top .2rem
        }
        .bets-winning {
          padding-top .2rem
          .sum {
            display: inline-block;
            width: 3rem;
            text-align: center
            color #35b5fe
          }
          .fr {
            float right
          }
        }
      }
      .bets-foot {
        position absolute
        bottom 0
        display flex
        width 100%
        border-top 1px solid #ccc
        input {
          width 50%
          padding .2rem
          &:last-child {
            color #fff
            background #ff3a3b
          }
        }
      }
    }
  }

</style>










































































