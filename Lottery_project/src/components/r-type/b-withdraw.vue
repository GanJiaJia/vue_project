<template>
  <div class="b-withdraw-content">
    <back title="银行卡提款" go-back="true"></back>
    <div class="b-withdraw">
      <dl>
        <dt>持卡人:</dt>
        <dd>
          <input type="text" placeholder="请输入持卡人姓名" v-model="user.userinfo.bankcard_user">
          <!--<input type="text" placeholder="请输入持卡人姓名" v-model="user.of_name">-->
        </dd>
      </dl>
      <dl>
        <dt>卡号:</dt>
        <dd>
          <input type="text" placeholder="请输入持卡人姓名" v-model="user.userinfo.bankcard" readonly>
          <!--<input type="text" placeholder="请输入持卡人姓名" v-model="user.of_card" readonly>-->
        </dd>
      </dl>
      <div class="b-withdraw-msg">
        <div><span>当前金额:</span><span>{{user.userinfo.balance}}</span></div>
        <div><span>可提款金额:</span><span>{{user.userinfo.balance_can_withdraw}}</span></div>
        <div><span>不可提金额:</span><span>{{user.userinfo.balance_can_not_withdraw}}</span></div>
      </div>
      <dl>
        <dt><h4>提款金额:</h4></dt>
        <dd><input type="text" placeholder="请输入要提款的金额" v-model="willcash"></dd>
      </dl>
      <dl>
        <dt><h4>真实姓名:</h4></dt>
        <dd><input type="text" placeholder="请输入真实姓名" v-model="realname"></dd>
      </dl>
      <dl>
        <dt><h4>支付密码:</h4></dt>
        <dd><input type="text" placeholder="请输入支付密码" v-model="paypw"></dd>
      </dl>

      <div class="b-withdraw-opt">
        <input type="button" value="确认" @click="withDrawFn">
      </div>

      <div class="b-withdraw-warning" v-if="user.withdraw_hint">
        <h4>提醒</h4>
        <div v-html="user.withdraw_hint.replace(/\n/g,'<br/>')"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import {alertip, requestOpt, mt_loading_open, mt_loading_close} from 'api/recommend'
  import {mapState} from 'vuex'

  export default {
    components: {
      Back
    },
    data() {
      return {
        /*username: this.user.userinfo.bankcard_user:'':'',
        bankcard: window.userMsg?window.userMsg.userinfo?window.userMsg.userinfo.bankcard:'':'',
        curr: window.userMsg?window.userMsg.userinfo?window.userMsg.userinfo.balance:'':'',
        nowithdraw: window.userMsg?window.userMsg.userinfo?window.userMsg.userinfo.balance_can_not_withdraw:'':'',
        withdraw: window.userMsg?window.userMsg.userinfo?window.userMsg.userinfo.balance_can_withdraw:'':'',
        withint: window.userMsg?window.userMsg.withdraw_hint.replace(/\n/g,'<br/>'):'',*/
        willcash: '',
        realname: '',
        paypw: ''
      }
    },
//    computed: mapState({user: state => state.user}),
    computed: {
      ...mapState(['user'])
    },
    mounted() {
      mt_loading_open()
      setTimeout(() => {
        mt_loading_close()
      },300)
    },
    methods: {
      withDrawFn() {
        if (!this.realname) {
          alertip('真实姓名不能为空');
          return false
        }
        if (!this.willcash) {
          alertip('请输入提款金额');
          return false
        }
        if (!this.paypw) {
          alertip('请输入支付密码');
          return false
        }
        requestOpt.reqPostuser('withdraw', this.user.token, {
          real_name: this.realname,
          withdraw_amount: this.willcash,
          password_pay: this.paypw,
          withdraw_type_id: 1
        }, res => {
          alertip(res.data.msg)
        }, err => {
          alertip(err)
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
  .b-withdraw-content {
    width: 7.5rem;
    height: 13.34rem;
    overflow: hidden;
    background-color: #eee;
    color: #000;
    font-size: .3rem;
  }
  poscola {
    margin-top .88rem
  }
  .b-withdraw {
    margin-top .88rem
    dl {
      display flex
      margin 0 .3rem
      padding 0.3rem 0
      color #999
      font-size .26rem
      dd {
        flex-grow 1
        input {
          width 100%
          background transparent
          outline none
          color #000
        }
        [readonly] {
          color #999
        }
      }
      dt {
        flex-basis 1.4rem
        h4 {
          color #000
        }
      }
    }
    .b-withdraw-msg {
      margin 0 .3rem
      color #999
      font-size .26rem
      line-height 1.3
      span {
        display inline-block
        &:first-child {
          width 1.8rem
        }
        &:last-child {
          color #ff3a3b
        }
      }
    }
    .b-withdraw-opt {
      margin 0 .3rem
      input {
        width 100%
        padding .12rem
        background #ff3a3b
        color #fff
        text-align center
        border-radius .08rem
        box-shadow 0 2px 1px rgba(0,0,0,.3)
      }
    }
    .b-withdraw-warning {
      margin 0.3rem
      color #666
      font-size .24rem
      line-height 1.3
      h4 {
        padding-bottom .12rem
        color #ff3a3b
        font-size .28rem
      }
    }
  }
</style>
