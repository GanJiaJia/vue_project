<template>
  <div class="recharge-type-content">
    <back title="充值" go-back="true" ></back>
    <div class="recharge-type">
      <div class="recharge-balance">
        <span>充值余额:</span>
        <input placeholder="请输入充值金额至少10元" v-model="rNum" />
        <span class="fr">元</span>
      </div>
      <!--快捷按钮-->
      <div class="recharge-balance-btns">
        <span :class="{'balance-item': rNum==items}" @click="handleBalance(items)" v-for="items in charge_numbers.charge_numbers">{{items}}</span>
        <!--<span :class="{'balance-item': rNum=='10'}" @click="handleBalance('10')">10</span>-->
        <!--<span :class="{'balance-item': rNum=='100'}" @click="handleBalance('100')">100</span>-->
        <!--<span :class="{'balance-item': rNum=='300'}" @click="handleBalance('300')">300</span>-->
        <!--<span :class="{'balance-item': rNum=='800'}" @click="handleBalance('800')">800</span>-->
        <!--<span :class="{'balance-item': rNum=='1000'}" @click="handleBalance('1000')">1000</span>-->
        <!--<span :class="{'balance-item': rNum=='2000'}" @click="handleBalance('2000')">2000</span>-->
        <!--<span :class="{'balance-item': rNum=='3000'}" @click="handleBalance('3000')">3000</span>-->
        <!--<span :class="{'balance-item': rNum=='5000'}" @click="handleBalance('5000')">5000</span>-->
      </div>
      <!--请选择支付方式-->
      <div class="recharge-type-sel">
        <h4>请选择支付方式</h4>
        <ul>
          <li :class="currTab==names.name?'active': ''" @click="clType(names.name, names.id)" v-for="names in names ">{{names.name}}</li>
          <!--<li :class="currTab=='wx'?'active': ''" @click="clType('wx')">微信/QQ</li>
          <li :class="{active: currTab=='zfb'}" @click="clType('zfb')">支付宝</li>
          <li :class="{active: currTab=='bank'}" @click="clType('bank')">银行卡转账</li>-->
        </ul>
      </div>
      <div class="rechage-u-bg">
        <!-- 微信/qq-->
        <!--<div >-->
        <!--/r-confirm/pay_info.owner/pay_info.card_number/rNum/pay_info.hint-->
        <!--to="{name: 'r-confirm', params: {userName: pay_info.owner, phone: pay_info.card_number, cash: rNum, msg:pay_info.hint }"-->
        <!--to="/r-confirm/pay_info.owner/pay_info.card_number/rNum/pay_info.hint"-->
        <!--:to="{path: 'r-confirm', params: {userName: pay_info.owner, phone: pay_info.card_number, cash: rNum, msg:pay_info.hint }}"-->
        <router-link class="rechare-link-item" tag="div" v-if="currTab=='微信支付'" v-for="(pay_info, key) in pay_info" :key="key" :to="{path:'/r-confirm/'+encodeURIComponent(pay_info.owner)+'/'+pay_info.card_number+'/'+rNum+'/'+encodeURIComponent(pay_info.hint)+'/'+encodeURIComponent(pay_info.bank_address)+'/'+encodeURIComponent(list['1'].remark)+'/'+pay_info.id+'/'+pay_info.addr_type+'/'+list['3'].id+'/'+pay_info.id}">
          <div class="rechage-u" >
            <!-- ../../images/yibao.png -->
            <img :src="pay_info.logo" :alt="pay_info.title" />
            <div class="rechage-u-msg">
              <h4>{{pay_info.title}}</h4>
              <p>{{pay_info.mfrom}} <span v-if="pay_info.mto&&pay_info.mfrom">-</span> {{pay_info.mto}}</p>
            </div>

          </div>
        </router-link>
        <!--</div>-->
        <!--<router-link class="rechare-link-item" tag="div" to="/r-confirm">-->
        <!--<div class="rechage-u">-->
        <!--<img src="" alt="微信支付" />-->
        <!--<div class="rechage-u-msg">-->
        <!--<h4>微信支付</h4>-->
        <!--<p>1-5000</p>-->
        <!--</div>-->
        <!--<input type="checkbox" id="checkbox_3" class="chk_1" />
            <label for="checkbox_3"></label>-->
        <!--</div>-->
        <!--</router-link>-->
        <!--<router-link class="rechare-link-item" tag="div" to="/r-confirm">-->
        <!--<div class="rechage-u">-->
        <!--<img src="" alt="微信支付" />-->
        <!--<div class="rechage-u-msg">-->
        <!--<h4>微信支付</h4>-->
        <!--<p>1-10000</p>-->
        <!--</div>-->

        <!--</div>-->
        <!--</router-link>-->
        <!--<router-link class="rechare-link-item" tag="div" to="/r-confirm">-->
        <!--<div class="rechage-u">-->
        <!--<img src="" alt="QQ钱包" />-->
        <!--<div class="rechage-u-msg">-->
        <!--<h4>QQ钱包</h4>-->
        <!--<p>10-5000</p>-->
        <!--</div>-->
        <!--</div>-->
        <!--</router-link>-->
        <!--</div>-->
        <!-- 支付宝-->
        <!--<div >-->
        <router-link v-if="currTab=='支付宝支付'" class="rechare-link-item" tag="div"  :key="key" :to="{path:'/r-confirm/'+encodeURIComponent(pay_info.owner)+'/'+pay_info.card_number+'/'+rNum+'/'+encodeURIComponent(pay_info.hint)+'/'+encodeURIComponent(pay_info.bank_address)+'/'+encodeURIComponent(list['2'].remark)+'/'+pay_info.id+'/'+pay_info.addr_type+'/'+list['3'].id+'/'+pay_info.id}" v-for="(pay_info, key) in pay_info">
          <div class="rechage-u">
            <img :src="pay_info.logo" :alt="pay_info.title" />
            <div class="rechage-u-msg">
              <h4>{{pay_info.title}}</h4>
              <p>{{pay_info.mfrom}} <span v-if="pay_info.mto&&pay_info.mfrom">-</span> {{pay_info.mto}}</p>
            </div>
          </div>
        </router-link>
        <!--<router-link class="rechare-link-item" tag="div" to="/r-confirm">-->
        <!--<div class="rechage-u">-->
        <!--<img src="" alt="支付宝直通车" />-->
        <!--<div class="rechage-u-msg">-->
        <!--<h4>支付宝直通车</h4>-->
        <!--<p>1-5000</p>-->
        <!--</div>-->
        <!--</div>-->
        <!--</router-link>-->
        <!--</div>-->
        <!-- 银行卡转账-->
        <!--<div v-if="currTab=='银行转账'">-->
        <router-link v-if="currTab=='银行转账'" tab="div" to="/trans-bank" :key="key" :to="{path:'/trans-bank/'+encodeURIComponent(pay_info.name)+'/'+encodeURIComponent(pay_info.card_number)+'/'+encodeURIComponent(pay_info.owner)+'/'+encodeURIComponent(pay_info.bank_address)+'/'+rNum+'/'+list['3'].id+'/'+pay_info.id}" v-for="(pay_info,key) in pay_info">
          <div class="trans-bank">
            <dl>
              <dt>
                <img :src="pay_info.logo" :alt="pay_info.name" />
              </dt>
              <dd>
                <div class="payee">
                  <span>收款银行</span>
                  <span>{{pay_info.name}}</span>
                </div>
                <div class="payee">
                  <span>收款账号</span>
                  <span>{{pay_info.card_number}}</span>
                </div>
                <div class="payee">
                  <span>收款人</span>
                  <span>{{pay_info.owner}}</span>
                </div>
                <div class="payee">
                  <span>收款支行</span>
                  <span>{{pay_info.bank_address}}</span>
                </div>
              </dd>
            </dl>
          </div>
        </router-link>
        <!--</div>-->
        <div v-if="currTab=='在线支付'" class="onlinePay">
          暂不支持
        </div>
      </div>
      <!--充值须知-->
      <!--<div class="recharge-notice" v-if="false">-->
      <!--<h4>充值须知</h4>-->
      <!--<p>1、本次充值金额的30%只能用于购彩，不可体现，<strong>剩下的70%可以提取</strong>中奖金额不受限制。</p>-->
      <!--<p>2、账户不允许从事无真实交易背景和虚假交易，银行卡及信用卡转账套现或者洗钱等违法国家相关法律、法规的行为、否则充值款项将不能提现。</p>-->
      <!--<p>3、单笔充值金额未达30%的消费比例，也可以联系客服“原路退回”处理，但到账时间约为15个工作日，并由第三方支付收取1%的手续费。</p>-->
      <!--<p>4、如有疑问请联系客服。</p>-->
      <!--</div>-->
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import {requestOpt, dtFormate, alertip, mt_loading_open, mt_loading_close} from 'api/recommend'
  import {mapState, mapActions} from 'vuex'
  import {OF_CASH, TAB_STATUS, PAY_LIST,PAY_LIST_ID} from '../../store/user'

  export default {
    components: {
      Back
    },
    data() {
      return {
        currTab: '微信支付',
        rNum: '10',
        charge_numbers: [],
        names: [],
        pay_info: [],
        id: '1',
        firstIn: true,
	    }
	  },
    created() {
      mt_loading_open();
      setTimeout(() => {
        mt_loading_close()
      },300);
      this.OF_CASH(this.rNum)
      this.TAB_STATUS(this.currTab)
      this.PAY_LIST_ID(this.id)

    },
    computed: {
      ...mapState(['user']),
    },
    beforeRouteLeave(to, from, next) {
      from.meta.keepAlive = true;
      next()
    },
   activated() {
     if (!this.firstIn) {
       this.rNum = this.user.cash;
       this.currTab = this.user.tab_status;
       this.id = this.user.pay_list_id
       this.clType(this.currTab,this.id )

     } else {
       this.firstIn = false
     }
   },
    methods: {
      ...mapActions(['OF_CASH','TAB_STATUS','PAY_LIST','PAY_LIST_ID']),
      clType(flag, id) {
        this.currTab = flag;
        this.TAB_STATUS(this.currTab)
        var id = ''+ id;
        this.charge_numbers = this.list[id];
        this.pay_info = this.list[id].pay_info
        this.PAY_LIST(this.pay_info)
        this.PAY_LIST_ID(id)
      },
      handleBalance(numStr) {
        this.rNum = numStr;
        this.OF_CASH(this.rNum)
      },
      getChargeTypes() { // 获取充值类型
        requestOpt.reqnoGet('charge_types', res => {
          if (res.data.status === 1) {
            this.list = res.data.data.list;
            this.charge_numbers = this.list['1']; // 快捷数字按钮
            this.names = this.list;
            this.pay_info = this.list['1'].pay_info;
            mt_loading_close()
            this.$nextTick(() => {
              console.log(this.names)
            })
          } else {
            alertip(res.data.msg);
          }
        }, err => {
          alertip(err)
        })
      },
      toRComfir(name, phone, msg) {
//        this.$router.push({name: 'r-confirm', query: {userName: name, phone: phone, cash: this.rNum, msg:msg}})
      }
    },
    mounted() {
      this.getChargeTypes();
    }
  }
</script>

<style scroped lang="stylus" rel="stylesheet/stylus">
  .recharge-type-content {
    width: 7.5rem;
    min-height: 13.34rem;
    overflow: auto;
    background: #eee;
  }

  .recharge-type {
    position: relative;
    top: .88rem;
    margin-top: .3rem
  }
  .recharge-type .recharge-balance {
    padding: 0 .2rem 0 .1rem;
    margin: 0 .3rem;
    background: #fff;
    font-size: .3rem;
    color: #333;
  }
  .recharge-type .recharge-balance span:first-child {
    position: relative;
    /*top: -0.05rem;*/
  }
  .recharge-type .recharge-balance span:last-child {
    position: relative;
    top: 0.05rem;
  }
  .recharge-type input {
    outline: none;
    width: 4.5rem;
    padding: .3rem 0;
    font-size: .32rem;
    color: #fc823c
  }
  .recharge-type input::placeholder {
    color: #bfbfbf
  }
  .recharge-type .fr {
    float: right;
    margin-top: .3rem;
    margin-right: 0.01rem;
    color: #ff3a3b;
  }

  .recharge-balance-btns {
    width: auto;
    /*height: 1.6rem*/
    margin: 0.3rem 0.3rem 0.1rem;
    color: #333;
    font-size: .4rem;
    &:after {
      content ''
      display block
      clear both
    }
  }
  .recharge-balance-btns span {
    display: block;
    float: left;
    width: 1.66rem;
    height: .8rem
    margin-right: 0.06rem;
    margin-bottom: 0.06rem;
    padding: 0.15rem 0;
    background: #fff;
    border: 1px solid #fc823c;
    color: #fc823c;
    text-align: center;
    box-sizing: border-box;
    border-radius: 0.1rem;
    &:last-child {
      margin-bottom .3rem
    }
  }
  .recharge-balance-btns span.balance-item {
    background: #fc823c;
    color: #fff;
  }

  .recharge-type-sel h4 {
    color #333
    font-size: 0.3rem
    margin: 0 0 .3rem .3rem
  }
  .recharge-type-sel ul {

  }
  .recharge-type-sel ul li {
    float left
    width 25%
    padding .25rem 0
    background #fff
    border-bottom 1px solid #ddd
    color #333
    font-size  .3rem
    text-align center
  }
  .recharge-type-sel ul::after {
    content: '';
    display: table;
    clear: both
  }
  .recharge-type-sel ul li.active {
    color #fc823c;
    border-bottom 2px solid #fc823c
  }

  .rechage-u-bg {
    margin-top: 0.22rem;
    background: #fff;
    color: #000;
  }
  .rechare-link-item .rechage-u {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.32rem 0.32rem 0 0.32rem;
    /*border-bottom: 1px solid #ddd;*/
    font-size: .2rem
  }
  .rechare-link-item:last-child {
    padding-bottom: .32rem;
  }
  .rechage-u img {
    width: .8rem;
    height: .8rem;
  }
  /*
  .rechage-u .yibao {
    width: 1.2rem;
    height: .7rem;
  }
  .rechage-u .yibao img {
    width: 0.7rem;
    height: .7rem;
    margin-left: .12rem
  }
  .rechage-u img[alt=yibao] {
    width: .7rem;
    height: .7rem;
  }
  */
  .rechage-u .rechage-u-msg {
    flex: 1;
    margin-left: .22rem;
  }
  .rechage-u .rechage-u-msg h4 {
    color: #000;
    font-size: .25rem;
    margin-bottom: .22rem;
  }
  .rechage-u .rechage-u-msg p {
    font-size: .28rem;
    color: #999;
  }
  .rechage-u input[type=checkbox] {
    width: .3rem
    height .3rem
  }

  .recharge-notice {
    padding 0 .3rem
    color: #000;
  }
  .recharge-notice h4 {
    margin: .44rem 0 .1rem 0;
    font-size: .28rem;
    color: #444;
  }
  .recharge-notice p {
    margin: .1rem 0;
    font-size: 0.16rem;
    color: #676767;
    line-height: .32rem
  }
  .recharge-notice p strong {
    color: #fb9561;
  }

  .trans-bank {
    padding: .3rem 0.3rem;
    font-size: .25rem;
  }
  .trans-bank dl {
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 0 1px 2px rgba(0,0,0,.3);
  }
  .trans-bank dl dt {
    flex-basis: 1.8rem;
    padding-left .2rem
    img {
      width 100%
    }
  }
  .trans-bank dl dd {
    margin-left .2rem
    flex-grow: 1;
  }
  .trans-bank dl dd .payee {
    margin-bottom: .2rem;
  }
  .trans-bank dl dd .payee:first-child {
    margin-top: .2rem;
  }
  .trans-bank dl dd .payee span {
    display: inline-block;
  }
  .trans-bank dl dd .payee span:first-child {
    width: 1.2rem;
  }
  .trans-bank dl dd .payee span:last-child {
    color: #999;
  }



  /* 复选框*/
  .chk_3  {
    display: none
  }
  .chk_3 + label {
    border: 1px solid #ddd;
    width 0.45rem
    height 0.45rem
    display: inline-block;
    position: relative;
    outline:none
    float left
    text-align center
    /*margin 0.28rem 0.24rem*/
    /*-webkit-appearance: none;*/
    vertical-align: middle;
    box-sizing: border-box;
    (-prefix-)user-select none;
    -webkit-appearance:none;
    appearance:none;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    text-indent: 0;
    background: transparent;
    resize:none;
    line-height: normal;
  }

  .chk_3:checked + label {
    border: 1px solid #ddd;
  }

  .chk_3:checked + label:after {
    content: '\2714'; //勾选符号
    position: relative;
    top: -0.02rem;
    color: #29DE29;
    width: 100%;
    height 100%
    text-align: center;
    font-size: 0.34rem;
    vertical-align: text-top;
  }

  .onlinePay {
    font-size .3rem
    color #ff3a3b
    text-align center
    height 5rem
    line-height 5rem
  }
</style>
