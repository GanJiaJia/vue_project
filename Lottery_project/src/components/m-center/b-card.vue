<template>
  <div class="b-card-content">
    <back title="绑定银行卡" go-back="true"></back>
    <div class="b-card">
      <!--<h4>用于提款,户名和身份证信息完全一致,否则影响大奖提取</h4>-->
      <h4>{{user.bankcard_hint}}</h4>
      <dl>
        <dt>姓名:</dt>
        <dd class="verification1">
          <input type="text" placeholder="请输真实姓名" maxlength="24" v-model="username">
        </dd>
      </dl>
      <dl>
        <dt>银行:</dt>
        <dd class="verification1">
          <select name="" id="" v-model="bank" >
            <option v-for="banks in banks" :value="banks.id">{{banks.bank_name}}</option>
          </select>
          <span v-if="!bank">点击选择银行卡</span>
          <!--<select name="" id="">-->
            <!--<option value="0">点击选择银行</option>-->
            <!--<option value="1">中国银行</option>-->
            <!--<option value="2">中国工商银行</option>-->
            <!--<option value="3">中国农业银行</option>-->
            <!--<option value="4">中国建设银行</option>-->
            <!--<option value="5">中国民生银行</option>-->
            <!--<option value="6">招商银行</option>-->
          <!--</select>-->
        </dd>
        <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
      </dl>
      <dl>
        <dt>银行账号:</dt>
        <dd class="verification1">
          <input type="text" placeholder="请输入银行账号" maxlength="24" v-model="banknum">
        </dd>
      </dl>
      <dl>
        <dt>开户支行:</dt>
        <dd class="verification1">
          <input type="text" placeholder="请输入开户支行" maxlength="24" v-model="bankaddr">
        </dd>
      </dl>
      <dl>
        <dt>交易密码:</dt>
        <dd class="verification1">
          <input type="text" placeholder="请设置交易密码" maxlength="6" v-model="trailpw">
        </dd>
        <dd  class="waring">
          <!--<img src="../../images/icon-fail.png" alt="警告">-->
        </dd>
      </dl>
      <dl  class="verification3">
        <input type="button" value="确认提交" @click="bankBindBtn">
      </dl>
    </div>

  </div>

</template>


<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import {alertip, requestOpt} from  'api/recommend'
  import {getProvince, getCity, getArea} from 'api/publicInterface'
  import {mapState, mapActions} from 'vuex'
  import {OF_CARD_NAME, OF_CARD_NUMMBER} from '../../store/user'

  export default {
    components: {
      Back
    },
    data() {
      return {
        banks: [],
        bank: '',
        username: '',
        banknum: '',
        bankaddr: '',
        trailpw: '',
        /*bankcard_hint: this.user.bankcard_hint*/
      }
    },
    computed: mapState({user: state => state.user}),
    methods: {
      ...mapActions([OF_CARD_NAME, OF_CARD_NUMMBER]),
      getBanks() { // 获取银行卡列表
        requestOpt.reqnoGet('banks', (res) => {
          if (res.data.status) {
            this.banks = res.data.data.list;
          } else {
            alertip(res.data.msg)
          }
        }, (err) => {
          alertip(err);
        })
      },
      chaBank(id) {
        this.bank = id;
//        console.log(this.bank)
      },
      bankBindBtn() { // 完成银行卡绑定确定按钮
        if (!this.username) {
          alertip('请输入持卡人姓名');
          return false;
        }
        if (!this.bank) {
          alertip('请选择银行');
          return false;
        }
        if (!this.banknum) {
          alertip('请输入银行卡账号');
          return false;
        }
        if (!this.bankaddr) {
          alertip('请输入开户支行');
          return false;
        }
        if (!this.trailpw) {
          alertip('请输入交易密码');
          return false;
        }
        if (this.username.length < 2) {
          alertip('错误的姓名');
          return false;
        }
        if (!/^[0-9]{14,}$/.test(this.banknum)) {
          alertip('错误的银行卡号');
          return false;
        }
        if (this.bankaddr < 4) {
          alertip('银行地址至少4个字符');
          return false;
        }
        if (this.trailpw.length < 6) {
          alertip('交易密码不能少于6位');
          return false;
        }
        requestOpt.reqPutAuthUser('bank_card', this.user.token, {
          bank_id: this.bank,
          province_id: '440000',
          city_id: '440300',
          area_id: '440306',
          real_name: this.username,
          card_number: this.banknum,
          bank_address: this.bankaddr,
          pay_password: this.trailpw
        }, res => {
          alertip(res.data.msg)
          if (res.data.status === 1) {
            this.OF_CARD_NAME(this.username)
            this.OF_CARD_NAME(this.banknum)
//            this.$router.push('/personals')
            this.$router.go(-1)
          };
        }, err => {
          alertip(err)
        })
      },
    },
    created() {
      if (!this.user.token) {
        this.$router.push('/login')
      }
      this.getBanks();
      getProvince((res) => { // 获取省份
        if (res.data.status === 1) {
          this.provinces = res.data.data.list;
//          console.log(this.provinces)
        } else {
          alertip(res.data.msg)
        }
      });

      getCity('440000',(res) => { // 获取城市
        if (res.data.status === 1) {
          this.cities = res.data.data.list;
//          console.log(this.cities)
        } else {
          alertip(res.data.msg)
        }
      });

      getArea('440300',(res) => { // 获取地区
        if (res.data.status === 1) {
          this.areas = res.data.data.list;
//          console.log(this.areas)
        } else {
          alertip(res.data.msg)
        }
      });
    },
    mounted() {
//      this.getBanks();

    },
    watch: {
      /*bank: function(id) {
        console.log(id)
      }*/
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .b-card-content{
    width :7.5rem;
    // height: 13.34rem;
    height: 100%;
    display block
    overflow hidden
    background #eeeeee
  }
  .b-card{
    width 7.1rem
    height 8rem
    display block
    margin auto
    margin-top 0.88rem
  }
  .b-card h4{
    font-size 0.2rem
    color: #fc823c;
    display block
    width 7.1rem
    overflow hidden
    line-height 0.4rem
    margin-top 0.2rem
  }
  .b-card dl{
    width 7.1rem
    height 0.68rem
    display block
    background #ffffff
    line-height 0.68rem
    margin-top 0.1rem
  }
  .b-card dl  dt{
    width 1.023rem
    height 0.68rem
    display inline-block
    color #000000
    font-size 0.2rem
    margin-left 0.1rem
    float left
    margin-right 0.2rem;
  }
  .b-card dl  dd.verification1{
    position relative
    width 4rem
    height 0.68rem
    display inline-block
    color #000000
    font-size 0.2rem
    float left
    background #ffffff
  }
  .verification1 select{
       position relative
       top -1px
       z-index 2
       width 5.9rem
       height 0.68rem
       background transparent
       line-height 0.68rem
       color #000000
       font-size 0.2rem
       border none
       outline none
       appearance:none;
       -moz-appearance:none;
       -webkit-appearance:none;
     }
  .verification1 select option{
    width 4rem
    color #000000
    font-size 0.2rem
    border none
    outline none
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
    text-align center
    display inline-block
  }

  .verification1 input[type=text]{
    position relative
    top -1px
    width 5rem
    height 0.68rem
    line-height 0.68rem
    color #000000
    font-size 0.2rem
    border none
    outline none
  }
  .verification1 span {
    display inline-block
    position absolute
    top 0
    height 100%
    left 0
    color #777
  }


  .b-card dl.verification3{
    line-height 0.68rem
    margin-top 0.4rem
  }
  .b-card dl.verification3 input{
    width 7.1rem
    height 0.68rem
    color #ffffff
    display block
    border:none
    outline:none
    border-radius 0.04rem
    font-size 0.32rem
    background #ff3a3a
  }



  .center-list2{
    width: 0.8rem;
    float: right;
    display: inline-block;
    text-align: right;
    line-height: 0.68rem;
  }
  .center-list2 img{
    width: 0.18rem;
    height: 0.3rem;
    float: right;
    display: inline-block;
    margin-top: 0.19rem;
    margin-right: 0.1rem;
  }
  .waring{
    width: 0.8rem;
    float: right;
    display: inline-block;
    text-align: right;
    line-height: 0.68rem;
  }
  .waring img{
    width: 0.5rem;
    height: 0.5rem;
    float: right;
    display: inline-block;
    margin-top: 0.09rem;
    margin-right: 0.1rem;
  }
</style>










































































