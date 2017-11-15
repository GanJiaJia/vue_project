<!--投注记录详情-->
<template>
  <div class="betting-detail-content">
    <back :title="title_tran"></back>
    <div class="betting-detail">
      <!--header-->
      <div class="betting-d-tit">
        <div>
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

          <span> {{param.sub_orders[0].lot_type||param.lot_type}}</span>
        </div>
        <div>
          订单总价
          <span class="b-red">￥{{param.total_money}}.00</span>
        </div>
      </div>
      <!--section-->
      <!-- 显示中奖的 -->
      <div class="betting-d-con" v-if="param.all_winning_money > 0">
        <div class="betting-d-con-top">
          <div class="b-d-item"
               v-if="param.sub_orders[0].lot_type!='山东11选5'
               &&param.sub_orders[0].lot_type!='广东11选5'
               &&param.sub_orders[0].lot_type!='上海11选5'
               &&param.sub_orders[0].lot_type!='江西11选5'
               &&param.sub_orders[0].lot_type!='三分PK拾'
               &&param.sub_orders[0].lot_type!='排列3'
               &&param.sub_orders[0].lot_type!='排列5'
               &&param.sub_orders[0].lot_type!='上海时时乐'
               &&param.sub_orders[0].lot_type!='新疆时时彩'
               &&param.sub_orders[0].lot_type!='天津时时彩'
               &&param.sub_orders[0].lot_type!='福彩3D'
               &&param.sub_orders[0].lot_type!='广西快三'
               &&param.sub_orders[0].lot_type!='幸运28'
               &&param.sub_orders[0].lot_type!='六合彩'
               &&param.sub_orders[0].lot_type!='PC蛋蛋'">
            开奖号码：
            <!--北京28-->
               <!-- &&param.sub_orders[0].lot_type!='重庆时时彩' -->
            
            <span v-if="param.sub_orders[0].lot_type=='北京28'||param.lot_type=='北京28'" class="b-red" v-for="(items, key) in param.drawing_result">{{key===0?items:key===param.drawing_result.length-1?' = '+items:' + '+items}}</span>
            <!--双色球-->
            <span v-if="param.sub_orders[0].lot_type=='双色球'||param.lot_type=='双色球'" class="b-red" :class="{'b-blue': key===param.drawing_result.length-1}" v-for="(items, key) in param.drawing_result">{{key!==param.drawing_result.length-1?items+',':items}}</span>
            <!--大乐透-->
            <span v-if="param.sub_orders[0].lot_type=='大乐透'||param.lot_type=='大乐透'" class="b-red" :class="{'b-blue': key>=param.drawing_result.length-2}" v-for="(items, key) in param.drawing_result">{{key!==param.drawing_result.length-1?items+',':items}}</span>
            <span v-if="param.sub_orders[0].lot_type=='重庆时时彩'||param.lot_type=='大乐透'" class="b-red"  v-for="(items, key) in param.drawing_result">{{key!==param.drawing_result.length-1?items+',':items}}</span>
            <!--江苏快三 、安徽快三 、 北京PK拾-->
            <span
              v-if="param.sub_orders[0].lot_type=='江苏快三'||param.lot_type=='江苏快三'
              ||param.sub_orders[0].lot_type=='安徽快三'||param.lot_type=='安徽快三'
              ||param.sub_orders[0].lot_type=='北京PK拾'||param.lot_type=='北京PK拾'"
              class="b-red"
              v-for="(items, key) in param.drawing_result">
              {{key!==param.drawing_result.length-1?items+',':items}}
            </span>
          </div>

          <div class="b-d-item"
               v-if="param.sub_orders[0].lot_type!='山东11选5'
               &&param.sub_orders[0].lot_type!='广东11选5'
               &&param.sub_orders[0].lot_type!='上海11选5'
               &&param.sub_orders[0].lot_type!='江西11选5'
               &&param.sub_orders[0].lot_type!='三分PK拾'
               &&param.sub_orders[0].lot_type!='排列3'
               &&param.sub_orders[0].lot_type!='排列5'
               &&param.sub_orders[0].lot_type!='上海时时乐'
               &&param.sub_orders[0].lot_type!='新疆时时彩'
               &&param.sub_orders[0].lot_type!='天津时时彩'
               &&param.sub_orders[0].lot_type!='福彩3D'
               &&param.sub_orders[0].lot_type!='广西快三'
               &&param.sub_orders[0].lot_type!='幸运28'
               &&param.sub_orders[0].lot_type!='六合彩'
               &&param.sub_orders[0].lot_type!='PC蛋蛋'">
            中奖金额：
               <!-- &&param.sub_orders[0].lot_type!='重庆时时彩' -->
            
            <span class="b-red">{{param.all_winning_money_after_tax}}元</span>
          </div>
          <!-- -------------------------------------------------- -->
          <!-- <div class="b-d-item" v-if="param.drawing_result.length > 1" >开奖号码 :&nbsp;
            <span class="b-red" v-for="(items,indexs) in  param.drawing_result" v-if="indexs != param.drawing_result.length - 1"> {{items}} ,</span>
            <span class="b-red" v-if="indexs == param.drawing_result.length - 1" v-for="(items,indexs) in  param.drawing_result">{{items}}</span>
          </div>
          <div class="b-d-item" v-if="param.all_winning_money" style="margin:2px 0">中奖金额 :&nbsp;
            <span class="b-red"> {{param.all_winning_money}}元</span>
          </div> -->

          <div class="b-d-item">总投注数：
            <span class="b-red">{{param.total_bet_nums}}注</span>
          </div>
        </div>
        <!--子列表-->
        <div class="betting-d-con-bottom" v-for="(sub_orders,i) in param.sub_orders" v-if="i<11">
          <div v-if="i<11" class="b-d-item-bt">
            <div>期数：{{sub_orders.issue_number}}期</div>
            <div>单注金额：<span class="b-red">{{sub_orders.unit_price}}元</span></div>
          </div>
          <div v-if="i<11" class="b-d-item-bt">
            <div>玩法：{{sub_orders.parent_play_type}}-{{sub_orders.play_type}}</div>
            <div><span class="b-red">{{sub_orders.bet_nums}}</span>注</div>
          </div>
          <div v-if="i<11" class="b-d-item-bt">
            <div>赔率：{{sub_orders.play_rate}}</div>
            <div></div>
          </div>
          <div v-if="i<11" class="b-d-item-bt">
            <div>返点：{{sub_orders.return_ratio}}</div>
            <div>状态：<span :class="{'b-blue':sub_orders.status==2,'b-red':sub_orders.status==1}">{{sub_orders.status | transWinningStatus}}</span></div>
          </div>

          <div v-if="i<11 && sub_orders.winning_money > 0" class="b-d-item-bt">
            <div>中奖号码：<span style="color : red"> {{ sub_orders.drawing_result[0] }} </span></div>
          </div>
          <div v-if="i<11" class="b-d-item-bt">
            <div>投注号码：</div>
            <div></div>
          </div>
          <div v-if="i<11" class="b-d-item-bt">
            <div
              v-if="param.sub_orders[0].lot_type=='山东11选5'
              ||param.sub_orders[0].lot_type=='三分PK拾'
              ||param.sub_orders[0].lot_type=='北京PK拾'">
              {{sub_orders.numbers_display | transArrFormate}}
            </div>
            <div v-else>{{sub_orders.numbers_display}}</div>

            <div></div>
          </div>

        </div>

        <hr style="border: 0;height: 1px;border-top: 1px solid #ccc;margin: 0 .3rem .1rem" v-if="param.sub_orders.length>10"/>
        <!--查看更多-->
        <div class="b-d-more" v-show="param.sub_orders.length>10">
          <!--<router-link to="/betting-con" tag="div">-->
            <input type="button" value="查看更多" @click="$router.push('/betting-con')">
          <!--</router-link>-->
        </div>
      </div>

      <!-- 显示未中奖的 -->
      <div class="betting-d-con" v-if="param.all_winning_money <= 0">
        <div class="betting-d-con-top">
          <div class="b-d-item"
               v-if="param.sub_orders[0].lot_type!='山东11选5'
               &&param.sub_orders[0].lot_type!='广东11选5'
               &&param.sub_orders[0].lot_type!='上海11选5'
               &&param.sub_orders[0].lot_type!='江西11选5'
               &&param.sub_orders[0].lot_type!='三分PK拾'
               &&param.sub_orders[0].lot_type!='排列3'
               &&param.sub_orders[0].lot_type!='排列5'
               &&param.sub_orders[0].lot_type!='上海时时乐'
               &&param.sub_orders[0].lot_type!='新疆时时彩'
               &&param.sub_orders[0].lot_type!='天津时时彩'
               &&param.sub_orders[0].lot_type!='福彩3D'
               &&param.sub_orders[0].lot_type!='重庆时时彩'
               &&param.sub_orders[0].lot_type!='广西快三'
               &&param.sub_orders[0].lot_type!='幸运28'
               &&param.sub_orders[0].lot_type!='六合彩'
               &&param.sub_orders[0].lot_type!='PC蛋蛋'">
            开奖号码：
            <!--北京28-->
            
            <span v-if="param.sub_orders[0].lot_type=='北京28'||param.lot_type=='北京28'" class="b-red" v-for="(items, key) in param.drawing_result">{{key===0?items:key===param.drawing_result.length-1?' = '+items:' + '+items}}</span>
            <!--双色球-->
            <span v-if="param.sub_orders[0].lot_type=='双色球'||param.lot_type=='双色球'" class="b-red" :class="{'b-blue': key===param.drawing_result.length-1}" v-for="(items, key) in param.drawing_result">{{key!==param.drawing_result.length-1?items+',':items}}</span>
            <!--大乐透-->
            <span v-if="param.sub_orders[0].lot_type=='大乐透'||param.lot_type=='大乐透'" class="b-red" :class="{'b-blue': key>=param.drawing_result.length-2}" v-for="(items, key) in param.drawing_result">{{key!==param.drawing_result.length-1?items+',':items}}</span>
            <!-- <span v-if="param.sub_orders[0].lot_type=='重庆时时彩'||param.lot_type=='大乐透'" class="b-red"  v-for="(items, key) in param.drawing_result">{{key!==param.drawing_result.length-1?items+',':items}}</span> -->
            <!--江苏快三 、安徽快三 、 北京PK拾-->
            <span
              v-if="param.sub_orders[0].lot_type=='江苏快三'||param.lot_type=='江苏快三'
              ||param.sub_orders[0].lot_type=='安徽快三'||param.lot_type=='安徽快三'
              ||param.sub_orders[0].lot_type=='北京PK拾'||param.lot_type=='北京PK拾'"
              class="b-red"
              v-for="(items, key) in param.drawing_result">
              {{key!==param.drawing_result.length-1?items+',':items}}
            </span>
          </div>

          <div class="b-d-item"
               v-if="param.sub_orders[0].lot_type!='山东11选5'
               &&param.sub_orders[0].lot_type!='广东11选5'
               &&param.sub_orders[0].lot_type!='上海11选5'
               &&param.sub_orders[0].lot_type!='江西11选5'
               &&param.sub_orders[0].lot_type!='三分PK拾'
               &&param.sub_orders[0].lot_type!='排列3'
               &&param.sub_orders[0].lot_type!='排列5'
               &&param.sub_orders[0].lot_type!='上海时时乐'
               &&param.sub_orders[0].lot_type!='新疆时时彩'
               &&param.sub_orders[0].lot_type!='天津时时彩'
               &&param.sub_orders[0].lot_type!='福彩3D'
               &&param.sub_orders[0].lot_type!='广西快三'
               &&param.sub_orders[0].lot_type!='重庆时时彩'
               &&param.sub_orders[0].lot_type!='幸运28'
               &&param.sub_orders[0].lot_type!='六合彩'
               &&param.sub_orders[0].lot_type!='PC蛋蛋'">
            中奖金额：
            
            <span class="b-red">{{param.all_winning_money_after_tax}}元</span>
          </div>
          <!-- -------------------------------------------------- -->
          <!-- <div class="b-d-item" v-if="param.drawing_result.length > 1" >开奖号码 :&nbsp;
            <span class="b-red" v-for="(items,indexs) in  param.drawing_result" v-if="indexs != param.drawing_result.length - 1"> {{items}} ,</span>
            <span class="b-red" v-if="indexs == param.drawing_result.length - 1" v-for="(items,indexs) in  param.drawing_result">{{items}}</span>
          </div>
          <div class="b-d-item" v-if="param.all_winning_money" style="margin:2px 0">中奖金额 :&nbsp;
            <span class="b-red"> {{param.all_winning_money}}元</span>
          </div> -->

          <div class="b-d-item">总投注数：
            <span class="b-red">{{param.total_bet_nums}}注</span>
          </div>
        </div>
        <!--子列表-->
        <div class="betting-d-con-bottom" v-for="(sub_orders,i) in param.sub_orders" v-if="i<11">
          <div v-if="i<11" class="b-d-item-bt">
            <div>期数：{{sub_orders.issue_number}}期</div>
            <div>单注金额：<span class="b-red">{{sub_orders.unit_price}}元</span></div>
          </div>
          <div v-if="i<11" class="b-d-item-bt">
            <div>玩法：{{sub_orders.parent_play_type}}-{{sub_orders.play_type}}</div>
            <div><span class="b-red">{{sub_orders.bet_nums}}</span>注</div>
          </div>
          <div v-if="i<11" class="b-d-item-bt">
            <div>赔率：{{sub_orders.play_rate}}</div>
            <div></div>
          </div>
          <div v-if="i<11" class="b-d-item-bt">
            <div>返点：{{sub_orders.return_ratio}}</div>
            <div>状态：<span :class="{'b-blue':sub_orders.status==2,'b-red':sub_orders.status==1}">{{sub_orders.status | transWinningStatus}}</span></div>
          </div>
          <div v-if="i<11" class="b-d-item-bt">
            <div>投注号码：</div>
            <div></div>
          </div>
          <div v-if="i<11" class="b-d-item-bt">
            <div
              v-if="param.sub_orders[0].lot_type=='山东11选5'
              ||param.sub_orders[0].lot_type=='三分PK拾'
              ||param.sub_orders[0].lot_type=='北京PK拾'">
              {{sub_orders.numbers_display | transArrFormate}}
            </div>
            <div v-else>{{sub_orders.numbers_display}}</div>

            <div></div>
          </div>
        </div>

        <hr style="border: 0;height: 1px;border-top: 1px solid #ccc;margin: 0 .3rem .1rem" v-if="param.sub_orders.length>10"/>
        <!--查看更多-->
        <div class="b-d-more" v-show="param.sub_orders.length>10">
          <!--<router-link to="/betting-con" tag="div">-->
            <input type="button" value="查看更多" @click="$router.push('/betting-con')">
          <!--</router-link>-->
        </div>
      </div>
      <!--bottom-->
      <div class="betting-d-fo">
        <div>订单编号：{{qs}}</div>
        <!--src="../../images/del@2x.png"-->
        <div>投注时间：{{param.bet_time}}
          <span @click="del">
            <!--<img  src="../../images/del@2x.png"  alt="" />-->
            <Icon type="trash-a" color="#555"/>
            删除</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import {mt_confirm, alertip, requestOpt, mt_loading_open, mt_loading_close} from 'api/recommend'
  import {mapState,mapActions} from 'vuex'
  import {DEL_FLAG} from '../../store/user'
  import axios from 'axios'
  export default {
    components: {
      Back,
    },
    data() {
      return {
//        param: JSON.parse(this.$route.params.obj),
        param: {},
        len: '',
        qs: this.$route.params.qs,
        title: ''
      }
    },
    created() {
      this.param = this.user.order_list
      this.len = this.user.order_list.sub_orders.length
    },
    computed: {
      /*sub_order_list() { // 列表
        let sub = this.param.sub_orders;
        if (sub.length > 11) {
          sub.length = 11
        } ;
        return sub
      },*/
      title_tran() {
        this.title = this.param.is_winning_all==1?'已中奖':'未中奖'
        return this.title;
      },
      ...mapState(['user'])
    },
    mounted() {
      mt_loading_open()
      setTimeout(() => {
        mt_loading_close();
      },300)

      /*evBus.$on('haha', (obj,key) => {
       console.log(obj,key)
        evBus.$off('haha')
      })*/
    },
    methods: {
      ...mapActions(['DEL_FLAG']),
     /* sub_order_list(sub) { // 列表
        return sub.filter( () => {
          console.log(sub.length)
          if (sub.length > 11) {
            sub.length = 11
          }
          return sub
        })
      },*/
      del() {
        mt_confirm('确定删除此订单？', response => {
          if (response) {
            mt_loading_open()
            let config = {
              headers:{'Content-Type':'multipart/form-data', 'Authorization': 'Bearer '+ this.user.token}
            };
            axios.delete(requestOpt.urlAuth+'bet_order?bet_order_id='+this.qs, config).then(res => {
              alertip(res.data.msg)
              if (res.data.status === 1) {
                mt_loading_close();
                setTimeout(()=> {
//                  evBus.$emit('orderdel')
                  this.$router.go(-1)
                  this.DEL_FLAG(true)
                }, 300)
              } else {
                mt_loading_close();
                console.log(this.user.token)
              }
            }).catch(err => {
              alertip(err)
              mt_loading_close();
            })
          }
        })
      },

    },

  }
</script>

<style scoped lang="stylus">
  .betting-detail-content {
    height: 100%;
    font-size .28rem
    color #000
  }
  .b-red {
    color #ff3a3b
  }
  .b-blue{
    color #35b5fe
  }
  .b-red.b-blue {
    color #35b5fe
  }

    .betting-detail {
    margin-top 1.21rem
    margin-bottom .24rem
    /*padding 0 .3rem*/
    border-top 1px solid #ccc
    border-bottom 1px solid #ccc
    .betting-d-tit {
      display flex
      justify-content space-between
      align-items center
      height .96rem
      padding 0 .3rem
      background #fff
      div {
        &:first-child {
          display flex
          align-items center
        }
      }
      img {
        width .7rem
        height .8rem
        padding .1rem
        padding-left 0
      }
    }
    /*section*/
    .betting-d-con {
      .betting-d-con-top {
        margin 0 .3rem
        /*border-bottom 1px solid #ccc*/
        .b-d-item {
          padding-top .2rem
          &:last-child {
            padding-bottom .2rem
          }
        }
      }
    }
    .b-d-more {
      margin 0 .3rem
      input {
        width 100%
        padding .2rem 0
        border 1px solid #35b5fe
        background transparent
        color #35b5fe
        border-radius .08rem
      }
    }
    /*bottom*/
    .betting-d-con-bottom {
      margin 0 .3rem
      /*padding .1rem 0*/
      border-top 1px solid #ccc
      font-size .24rem
      .b-d-item-bt {
        display flex
        justify-content space-between
        padding .1rem 0
      }
    }
    /*foot*/
    .betting-d-fo {
      margin-top .15rem
      padding 0 .3rem
      background #fff
      div {
        padding .2rem 0
        span {
          position relative
          float right
          margin-top -.15rem
          padding .1rem .5rem
          border 1px solid #35b5fe
          color #35b5fe
          border-radius .08rem
          text-indent 0rem
          img {
            margin-right  .05rem
            padding-top .05rem
            width .25rem
            height .28rem
          }
        }
      }
    }
  }
</style>
