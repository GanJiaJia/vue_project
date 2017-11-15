<template>
  <div class="trans-bank-con">
    <back title="充值" go-back="true"></back>

    <div class="trans-bank">
      <div class="trans-bank-info">
        <div class="t-name">收款银行</div>
        <div class="t-val">{{params.bankNm}}</div>
        <div class="copy-btn" @click="copyFn(params.bankNm)">复制</div>
      </div>
      <div class="trans-bank-info">
        <div class="t-name">收款账号</div>
        <div class="t-val">{{params.bankAc}}</div>
        <div class="copy-btn" @click="copyFn(params.bankAc)">复制</div>
      </div>
      <div class="trans-bank-info">
        <div class="t-name">收款人</div>
        <div class="t-val">{{params.person}}</div>
        <div class="copy-btn" @click="copyFn(params.person)">复制</div>
      </div>
      <div class="trans-bank-info">
        <div class="t-name">收款支行</div>
        <div class="t-val">{{params.addr}}</div>
        <div class="copy-btn" @click="copyFn(params.addr)">复制</div>
      </div>
    </div>
    <!--输入存款信息-->
    <div class="depositial">
      <div class="deposit-item">
        <span>存入时间：</span>
        <input v-model="incomeDt"  placeholder="请选择时间"  @click="pickerOpen" readonly/>
        <!--<el-date-picker-->
          <!--v-model="incomeDt"-->
          <!--type="datetime"-->
          <!--placeholder="请选择时间"-->
          <!--format = 'yyyy-MM-dd HH:mm'-->
          <!--class="dfnel-date-pick"-->
          <!--readonly-->
        <!--&gt;-->
        <!--</el-date-picker>-->
        <!--year-format="{value}年"-->
        <!--month-format="{value}月"-->
        <!--date-format="{value}日"-->
        <!--hour-format="{value}时"-->
        <!--minute-format="{value}分"-->
        <mt-datetime-picker
          ref="picker"
          type="datetime"
          v-model="pickerValue"
          @confirm="handleConfirm"
          >
        </mt-datetime-picker>
      </div>
      <div class="deposit-item">
        <span>存入金额：</span>
        <input placeholder="请输入存入金额" v-model="cash"/>
      </div>
      <div class="deposit-item">
        <span>存款人姓名：</span>
        <input placeholder="请输入存款人姓名"/>
      </div>
    </div>
    <!--单选转账类型-->
    <div class="trans-type-radio">
      <!--<ul>-->
        <!--<li>-->
          <!--<input type="radio" name="transtype" id="radio_1" class="chk_2" checked/>-->
          <!--<label for="radio_1">网银转账</label>-->
        <!--</li>-->
        <!--<li>-->
          <!--<input type="radio" name="transtype" id="radio_2" class="chk_2" />-->
          <!--<label for="radio_2">ATM自动柜员机</label>-->
        <!--</li>-->
        <!--<li>-->
          <!--<input type="radio" name="transtype" id="radio_3" class="chk_2" />-->
          <!--<label for="radio_3">ATM现金入款</label>-->
        <!--</li>-->
        <!--<li>-->
          <!--<input type="radio" name="transtype" id="radio_4" class="chk_2" />-->
          <!--<label for="radio_4">银行柜台转账</label>-->
        <!--</li>-->
        <!--<li>-->
          <!--<input type="radio" name="transtype" id="radio_5" class="chk_2" />-->
          <!--<label for="radio_5">手机银行转账</label>-->
        <!--</li>-->
        <!--<li>-->
          <!--<input type="radio" name="transtype" id="radio_6" class="chk_2" />-->
          <!--<label for="radio_6">其他</label>-->
        <!--</li>-->
      <!--</ul>-->
      <mt-radio
        v-model="radiovalue"
        :options="options"
        class="mt-dt-picker"></mt-radio>
    </div>
    <div class="recharged-btn" @click="dialogShow=true">我已充值</div>
    <!--信息说明-->
    <div class="input-msg">
      需要客户填写存入时间，存入金额，存款人姓名，还有选择转账的渠道，包括网银转账，ATM自动柜员机，ATM现金入款，银行柜台转账，手机银行转账，其他的方式。
    </div>
    <!--弹层-->
    <div class="dialog-bg" v-if="dialogShow" @click="dialogShow=false"></div>
    <div class="dialog-container" v-if="dialogShow">
      <div class="dialog-content">
        <a href="javascript:;" class="dialog-file">选择图片
          <input type="file"  name="imageToUpload" accept="image/*" @change="preview">
        </a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import {alertip, CopyVal, requestOpt, dtFormate, mt_loading_open, mt_loading_close} from 'api/recommend'
  import {mapState} from 'vuex'
  import axios from 'axios'

  export default {
    components: {
      Back
    },
    data() {
      return {
        params: this.$route.params,
        incomeDt: '',
        cash: this.$route.params.cash,
        dialogShow: false,
        pickerValue: new Date(),
        radiovalue: '1',
        options: [
          {
            label: '网银转账',
            value: '1'
          },
          {
            label: 'ATM自动柜员机',
            value: '2'
          },
          {
            label: 'ATM现金入款',
            value: '3'
          },
          {
            label: '银行柜台转账',
            value: '4'
          },
          {
            label: '手机银行转账',
            value: '5'
          },
          {
            label: '其他',
            value: '6'
          }
        ]
      }
    },
    computed: {
      ...mapState(['user'])
    },
    created() {
      mt_loading_open()
      setTimeout(() => {
        mt_loading_close()
      },300)
    },
    methods: {
      pickerOpen() {
        this.$refs.picker.open()
      },
      handleConfirm() {
        this.incomeDt = dtFormate.datetime(this.pickerValue)
      },
      copyFn(val) {
        CopyVal(val);
      },
      preview(e) { // 上传图片
        let filename = e.target.files[0];

        let param = new FormData();
        param.append('file', filename, filename.name)

        let config = {
          headers: {'Content-Type':'multipart/form-data', 'Authorization': 'Bearer '+ this.user.token}
        }

        axios.post(requestOpt.urlAuth+'screen_shot', param, config).then(
          res => {
            if (res.data.status === 1) {
              alertip('上传成功');
              this.dialogShow = false;
              this.fileData = res.data.data.screen_shot;
              console.log(this.fileData)
              this.okRecharge(this.fileData)
              document.onload = () => {
                this.fileData = res.data.data.screen_shot;
                console.log(this.fileData)
                okRecharge(this.fileData)
              }

            }else {
              console.log(res.data.msg)
//              alertip(res.data.msg)
            }
          }
        ).catch(
          err => {
            console.log(err)
//            alertip(err)
          }
        )
      },
      okRecharge(fileData) { // 确认充值
        requestOpt.reqPostuser('balance',this.user.token,{
          type_id: this.params.pay_id,
          charge_sum: this.params.cash,
          card_number: this.params.bankAc,
          bank_address: this.params.addr,
          screen_shot: fileData,
          receipt_screen_shot: fileData,
          bank_id: this.params.bank_id // id
        }, data => {
//          console.log(data.data);
          if(data.data.status===1) {

          } else {
            /* this.$message({
               message: data.data.msg,
               type: 'warning',
               duration: 1000,
               customClass: 'restel-dialog'
             })*/
            setTimeout(() => {
              alertip(data.data.msg)
            },1000)

          }
        }, err => {
          this.$message(err)
        });
      }
    }
  }
</script>

<style scoped lang="stylus">
  .dfnel-date-pick {
    flex-grow: 1;
    box-shadow: 0 0 1px rgba(0,0,0,0.5);
    /*padding: 0.08rem;*/
    text-align: center;
  }
  .mt-dt-picker {
    /*width 50%
    font-size .3rem
    float left*/
  }

 .trans-bank-con {
   /*width: 7.5rem;
   height:13.34rem;*/
   /*overflow: hidden;*/
   background: #eee;
   /*margin-top .88rem*/

 }
 .trans-bank {
   position: relative;
   top: .88rem;
   padding .3rem 0
   color: #000;
   font-size: .28rem;
 }
 /*收款信息*/
 .trans-bank-info {
   display: flex;
   align-items: center;
   padding: .15rem 0rem .15rem .2rem;
   background: #fff;
   .t-name {
     flex-basis: 1.3rem;
   }
   .copy-btn {
     flex-basis: .56rem;
     padding: .07rem 0;
     margin-right: .3rem;
     border: 1px solid #06a6f5;
     color: #06a6f5
     font-size: .12rem;
     text-align: center;
     line-height 1.1
     border-radius: .1rem;
     /*transform: scale(0.8);*/
   }
   .t-val {
    flex-grow: 1;
    color: #999;
   }
 }
 /*输入存款信息*/
 .depositial {
   position: relative;
   top: .88rem;
   /*margin-top: .2rem;*/
   padding: .2rem;
   background: #fff;
   color: #000;
   font-size: .28rem;
   .deposit-item {
     display: flex;
     align-items: center;
     margin-bottom: 0.2rem;
     &:last-child {
       margin: 0;
     }
     span {
       flex-basis: 1.8rem;
       margin-right: .2rem;
     }
     input {
       flex-grow: 1
       box-shadow: 0 0 1px rgba(0,0,0,.5)
       padding: .08rem
       text-align center
     }
   }
 }
 /*转账类型*/
 .trans-type-radio {
   position relative
   top .88rem
   /*margin-top .2rem
   padding 0.05rem .2rem*/
   background #fff
   font-size .28rem
   color #000
   ul {
     &:after{
       content ''
       display table
       clear both
     }
   }
   ul li {
     position relative
     float left
     width 50%
     padding .15rem 0
     lebel {
       width 100%
     }
   }
 }
 /*我已充值*/
 .recharged-btn {
   position: relative;
   top:.88rem;
   margin .3rem .2rem;
   padding .15rem 0
   background-color #ff3a3b
   color #ffffff
   text-align center
   font-size: .3rem;
   border-radius .07rem
 }
 /*信息说明*/
 .input-msg {
   position: relative;
   top: .88rem;
   margin: .3rem .2rem;
   font-size: .24rem;
   color: #666;
   line-height .35rem
 }

/*单选自定义*/
.chk_2 {
  display: none
}
.chk_2 + label {
  display block
  width: 3.4rem;
  text-indent .5rem
}
.chk_2 + label:before {
  content: '\2714';
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0.1rem;
  vertical-align: .2em;
  width: .35rem;
  height: .35rem;
  margin-right: .4em;
  background: rgba(0,0,0,.5);
  color #fff
  text-indent: .25em;
  line-height: 1.25;
  border-radius : 50%
}

.chk_2:checked + label:before {
  color: #fff;
  background: green
}

</style>
