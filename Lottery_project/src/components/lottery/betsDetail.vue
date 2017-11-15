<!--彩票投注明细-->
<template>
  <div class="bets-container">
    <back :title="bet_info_obj.name+'投注'"></back>
    <div class="bets-content">
      <div class="bets-lottery-info">
        <div>
          <i v-if="bet_info_obj.curr_count_down">
            {{bet_info_obj.curr_issue_number}}期
          </i>
          <i v-else >
            距离开盘还有
          </i>

          <span>{{bet_info_obj.curr_count_down | transCountTime}}</span>
        </div>
        <div>余额：<span>{{$store.state.user.userinfo.balance}}</span>元</div>
      </div>
    </div>
    <!--按钮-->
    <div class="opt-btns">
      <div @click="manual">
        <Icon type="plus" color="#333"/>
        <span>手动添加</span>
      </div>
      <div @click="automatic">
        <Icon type="plus" color="#333"/>
        <span>机选一注</span>
      </div>
      <div @click="delALL">
        <Icon type="trash-a" color="#333"/>
        <span>全部清空</span>
      </div>

    </div>
    <!--选号列表-->
    <div class="bets-list">
      <div class="bets-items" v-for="(bets,i) in bets">
        <div class="bets-item">
          <!--<span class="b-red bets_number" v-for="(item,k) in bets.bets_number">{{item}}</span>-->
          <span class="b-red bets_number" v-for="(item,k) in bets_numberfn(bets.bet_numbers1)">{{item}}</span>
        </div>
        <div class="bets-item">
          <span class="b-gray">赔率：{{bets.bet_rate}} 返利：{{(~~bets.retrun_li/100).toFixed(2)}}</span>
        </div>
        <div class="bets-item">
          <span class="b-gray">追{{bets.future_issues}}期 {{bets.bet_count}}倍</span>
        </div>
        <div class="bets-item">
          <span >{{bets.bet_type1}}-{{bets.bet_type2}} {{bets.lotteryNum}}注 {{bets.bet_amount}}元</span>
        </div>
        <div class="bets-del" @click="del(i)">
          <Icon type="ios-close-outline" color="#ff3a3b"></Icon>
        </div>
      </div>
      <nop-data v-if="bets&&bets.length===0"></nop-data>
    </div>
    <!--footer-->
    <div class="bets-footer">
      <div>
        <span class="b-orange">{{lotteryNum1}}</span>注
        <span class="b-orange">{{lotteryCash1}}</span>元
      </div>
      <div>
        <input type="button" value="立即投注" @click="instantBets">
      </div>
    </div>
    <!--发起投注申请-->
    <div class="bets-apply" v-if="applyShow">
     <div class="bets-apply-con">
       <h4>您将发起 <span class="b-red">{{bet_info_obj.name}}</span>方案</h4>
       <p class="bets-applay-con">
         投注期号: <span class="b-blue">{{bet_info_obj.curr_issue_number}}</span>期
       </p>
       <p class="bets-applay-con">
         总金额: <span class="b-red">{{lotteryCash1}}</span>元
       </p>
       <p class="bets-applay-warning">
         <span class="b-red">彩票有风险，购买需谨慎</span>
       </p>
       <div class="bets-applay-btns">
         <input type="button" value="取消" @click="betsCancel">
         <input type="button" value="确定" @click="betsOK">
       </div>
     </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import NopData from '@/components/tab/nop-data'
  import { requestOpt, alertip,array_contain, chaLotteryNumber,mt_confirm} from 'api/recommend'

  export default {
    components: {
      Back,
      NopData
    },
    data() {
      return {
        lotteryNum: 0, //总投注数
        lotteryCash: 0, // 总金额
        bet_info_obj: {},
        timer: null,
        bets:[],
        applyShow: false,

      }
    },
    computed: {
      lotteryNum1: function () {
        let res = 0
        for (let i=0,len=this.bets.length; i<len;i++) {
          res += ~~this.bets[i].lotteryNum
        }
        return res
      },
      lotteryCash1: function () {
        let res = 0
        for (let i=0,len=this.bets.length; i<len;i++) {
          res += this.bets[i].bet_amount
        }
        return res
      },
    },
    beforeRouteLeave(to, from, next) {
      clearInterval(this.timer)
      next()
    },
    mounted() {
      console.log(this.$store.state.user)
      this.bets = this.$store.state.user.bets
      if (this.$store.state.user.bet.bet_type1) {
        let arr = []
        arr.unshift(this.$store.state.user.bet)
        this.bets = arr.concat(this.bets)
      }
      console.log(this.bets)
      this.$store.commit('BETS',this.bets)

//      this.getBets()
        this.timer = setInterval(() => {
//        this.getLottery();
          let list = this.$store.state.user.bet_list
          for (let i=0,len=list.length; i<len;i++) {
            if (this.$store.state.user.bet_obj.code===list[i].code) {
              this.bet_info_obj  = list[i];
//            console.log(this.bet_info_obj)
            }
          }
        },1000)


    },
    methods: {
      getBets() {
        let list = this.$store.state.user.bet_list
        for (let i=0,len=list.length; i<len;i++) {
          if (this.$store.state.user.bet_obj.code===list[i].code) {
            this.bet_info_obj  = list[i];
            console.log(this.bet_info_obj)
          }
        }
      },
      bets_numberfn: function (arr) {
        if(!arr) return []
        let res=[];
        for (let i=0; i<arr.length; i++) {
          if (typeof(arr[i]) === 'object') {
            res.push(arr[i].join(','))
          } else {
            res.push(arr[i])
          }
        }
        return res
      },
      del(i) { // 单个删除
        this.bets.splice(i,1)
//        this.$store.commit('BETS',this.bets)
        console.log(this.bets)
      },
      delALL() {
        this.bets = []
        this.$store.commit('BETS',this.bets)
      },
      automatic() { // 自动投注

      },
      manual() { // 手动投注
        this.$store.commit('BET', null)
//        this.$router.go(-1)
        this.$store.commit('SHOP', true)
        this.$router.replace('/gameplay/'+this.$route.params.code+'/'+this.$route.params.typeid)
        console.log(this.$store.state.user.bet)
      },
      instantBets() { // 立即投注
        if(this.bets.length===0) {
          alertip('请先投注')
        } else {
          this.applyShow=true
        }
      },
      betsOK() {
        let param = {
          issue_number: this.bet_info_obj.curr_issue_number,
          screen_shot: this.$store.state.user.of_avate,
          bet_amounts: this.lotteryCash1,
          bets: this.bets
        }
        console.log(param)
        requestOpt.reqPost('lottery_record', this.$store.state.user.token,param, res => {
          if (res.data.status===1) {
            alertip('恭喜您，投注成功')
            this.$store.commit('BETS',[])
            this.$store.commit('BET',null)
            this.$store.commit('SHOP',false)
            this.applyShow=false
            this.$router.replace('/gameplay/'+this.$route.params.code+'/'+this.$route.params.typeid)
          } else {
            alertip(res.data.msg)
          }
        }, (err) => {
          alertip(err)
        });
      },
      betsCancel() {
        this.applyShow=false
      }

    },
    watch: {
      bet_info_obj: {
        handler: function (val,old) {
          console.log(val.curr_count_down )
          if (val.curr_count_down===''||val.curr_count_down===0) {
            this.applyShow=false
            alertip('本期已封盘，请等待下期')
          }
        },
        deep: true
      }
  }
  }
</script>

<style scoped lang="stylus">
  .bets-container {
    overflow: hidden;
    color: #000;
    font-size: .28rem;
  }
  .bets-content {
    margin-top .88rem
    font-size .24rem
    .bets-lottery-info {
      display flex
      justify-content space-between
      padding .1rem .2rem
      span {
        color #ff3a3b
      }
      i {
        font-style normal
      }
    }
  }

  .opt-btns {
    display flex
    justify-content space-between
    padding .2rem
    font-size .24rem
    div {
      padding .1rem 0.2rem
      border 1px solid #ccc
      border-radius .08rem
    }
  }

  .bets-list {
    padding 0 .2rem
    height 10.5rem
    overflow scroll
    .bets-items {
      position relative
      height 2.72rem
      margin-bottom .3rem
      background url(../../images/caipiao-bg.png)
      color #000000
      font-size .24rem
      .bets-item {
        padding .3rem .6rem 0
        .bets_number {
          margin-right .1rem
        }
      }
      .bets-del {
        position absolute
        top 0
        bottom 0
        right 0.3rem
        margin auto
        width .2rem
        height .2rem
        padding .3rem
        font-size .36rem
        i {
          &:before {
            position absolute
            top 0.13rem
            left 0.15rem
          }
        }
      }

    }
  }

  .b-red {
    color #ff3a3b
  }
  .b-gray {
    color #999
  }
  .b-orange {
    color #fc823c
  }
  .b-blue {
    color #35b5fe;
  }

  /*footer*/
  .bets-footer {
    display flex
    justify-content space-between
    align-items center
    position absolute
    bottom 0
    height .76rem
    background #fff
    width 100%
    padding-left 0.2rem
    input {
      padding .23rem .3rem
      background #ff3a3b
      color #fff
    }
  }

  /*bets apply*/
  .bets-apply {
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    width 100%
    height 100%
    margin auto
    background rgba(0,0,0,.5)
    .bets-apply-con {
      position absolute
      top 0
      bottom 0
      left 0
      right 0
      width 80%
      height 3rem
      margin auto
      background #fff
      border-radius .08rem
      text-align center
      h4 {
        padding .2rem
      }
      .bets-applay-con {
        width 3rem
        padding .1rem
        margin auto
        font-size .24rem
        text-align left
      }
      .bets-applay-warning {
        padding .2rem
      }
      .bets-applay-btns {
        border-top 1px solid #ccc
        display flex
        height .76rem
        input[type=button] {
          width 50%
          height .76rem
          border 0
          &:last-child {
            background #ff3a3b
            color #fff
          }
          &:first-child {
            background #fff
          }
        }
      }
    }
  }
</style>
