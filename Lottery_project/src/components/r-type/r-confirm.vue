<template>
  <div class="r-confirm-content">
    <back title="充值" go-back="true"></back>
    <div class="r-confirm">
      <div class="qrcode" >
        <!--<h4>亚盘分析</h4>-->
        <img v-if="!/(.com)/g.test(params.addr)" :src='params.addr' alt="扫一扫获取解盘分析"/>
      </div>
    </div>
    <div class="r-confirm-info">
      <div class="r-info-item">
        <span>转账金额：</span>
        <span>￥{{params.cash}}</span>
      </div>
      <div class="r-info-item">
        <span>转账用户：</span>
        <span>{{params.userName}}</span>
      </div>
      <div class="r-info-item">
        <span>转账账号：</span>
        <span>{{params.phone}}</span>
      </div>
    </div>
    <!--btns-->
    <div class="r-c-btns">
      <button @click="okRecharge">确认充值</button>
      <button @click="dialogShow=true">我已充值</button>
    </div>
    <!--interpretative statement-->
    <div class="inter-state">
      {{params.remark}}
      <!--扫码步骤：1，点“立即充值”将自动为您截屏并保存到相册，同时打开微信。2，请在微信中打开“扫一扫”。3，在扫一扫中点击右上角，选择“从相册选取二维码”选取截屏的图片。4，输入您欲充值的金额并进行转账。如充值未及时到账，请联系在线客服。-->
      <br/><br/>
      PS:
      {{params.msg}}
      <!--PS:如果手机不支持相册二维码扫描，请使用另外一台手机进行扫描支付-->
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
  import axios from 'axios'
  import Back from '@/components/back/back'
  import {alertip, requestOpt, mt_loading_open, mt_loading_close} from 'api/recommend'
  import {mapState} from 'vuex'


  export default {
    components: {
      Back
    },
    data() {
      return {
        params: this.$route.params,
        dialogShow: false,
        fileData: ''
      }
    },
    computed: mapState({user: state => state.user}),
    created() {
      console.log(this.$route.params)
    },
    beforeRouteLeave(to, from, next ) {
      to.meta.keepAlive = true
//      this.$destroy()
      next()
    },
    created() {
      mt_loading_open()
      setTimeout(() => {
        mt_loading_close()
      },300)
//      Indicator.open()
//      this.Indicator.open({
//        text: '加载中...',
//        spinnerType: 'fading-circle'
//      })
    },
    mounted() {
//      this.Indicator.close()
//      mt_loading_close()
    },
    methods: {
      preview(e) { // 上传图片
        this.fileData = ''
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
              this.okRecharge()
            }else {
              alertip(res.data.msg)
            }
          }
        ).catch(
          err => {
            alertip(err)
          }
        )
      },
      okRecharge() { // 确认充值
        requestOpt.reqPostuser('balance',this.user.token,{
          type_id: this.params.pay_id,
          charge_sum: this.params.cash,
          card_number: this.params.phone,
          bank_address: this.params.addr,
          screen_shot: this.fileData,
          receipt_screen_shot: this.fileData,
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
  .r-confirm-content {
    width: 7.5rem;
    height: 13.34rem;
    overflow: hidden;
    background-color: #ffffff;
    color: #000;
    font-size: .3rem;
  }
  /*二维码*/
  .r-confirm {
    position: relative;
    top: .88rem;
    .qrcode {
      margin: .2rem 0 .25rem;
      text-align: center;
      h4 {
        font-size: .7rem;
        color: #fc823c;
        font-weight: bold;
        background-image: -webkit-linear-gradient(top, #fc823c, #ffdc00,yellow, #fc823c);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      img {
        width: 2.78rem;
        height: 2.78rem;
      }
    }
  }
  /*转账信息*/
  .r-confirm-info {
    position: relative;
    top: .88rem;
    margin: 0 .3rem;
    .r-info-item {
      padding-bottom .15rem
      span {
        &:last-child {
          color #ff3a3b
        }
      }
    }
  }
  /*btns*/
  .r-c-btns {
    position: relative;
    top: .88rem;
    margin: 0 .3rem;
    button {
      width 46%
      padding .18rem
      background-color #ff3a3b
      color #ffffff
      border 0
      border-radius .08rem
      &:first-child {
        margin-right 4.9%
      }
    }
  }
  /*interpretative statement*/
  .inter-state {
    position: relative;
    top: .88rem;
    margin-top .3rem
    color: #666;
    font-size: .24rem
    line-height .35rem
  }

  /* 弹层公共样式*/
  .dialog-bg {
    position absolute
    top 0
    z-index 999
    width 100%
    height 100%
    background transparent
  }
  .dialog-container {
    position absolute
    bottom 0rem
    overflow hidden
    z-index 1000
    width 92%
    padding .3rem
    background #fff
    text-align center
    .dialog-content {
      width 100%
      .dialog-file {
        box-sizing border-box
        position: relative;
        display: block;
        width 100%
        background: #fff;
        border: 1px solid #ff3a3b;
        border-radius: 4px;
        padding: 4px 12px;
        overflow: hidden;
        color: #000;
        text-decoration: none;
        text-indent: 0;
        line-height: .5rem;
        box-shadow 0 2px 1px rgba(0,0,0,.2)
        input {
          position: absolute;
          width 100%
          height 100%
          right: 0 ;
          top: 0;
          opacity: 0;
        }
      }
    }
  }
</style>
