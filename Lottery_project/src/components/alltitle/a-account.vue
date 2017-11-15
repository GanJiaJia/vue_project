<template>
  <div class="recharge-content">
    <goback title="账户明细"></goback>
    <all></all>
    <div class="recharge" v-show="isShow">
      <mt-loadmore :top-method="loadTop" :auto-fill="false" ref="loadmore">
        <div class="for_bg_box">
          <dl v-for="financials in financials">
            <dt>
                  <h5>{{financials.type}}</h5>
                  <p :class="{'blue-c': financials.amount.indexOf('-')!= -1}" >{{financials.amount | slic }}</p>
                  <!-- <p v-if="financials.amount.indexof('-') == -1"> +{{financials.amount}}</p> -->
              </dt>
            <dd>
              <h5> ￥{{financials.balance}}</h5>
              <span>{{financials.create_time}}</span>
            </dd>
          </dl>
        </div>
        <div class="bt_loading_title" v-show="show_title">暂无更多数据</div>
      </mt-loadmore>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Indicator } from 'mint-ui';
  import Goback from '@/components/back/goback'
  import NData from '@/components/tab/n-data'
  import All from "@/components/tab/all"
  import {
    alertip,
    requestOpt
  } from 'api/recommend'
  import {
    mapState
  } from 'vuex'
  
  export default {
    components: {
      Goback,
      NData,
      All,
    },
    data() {
      return {
        financials: [],
        page: '',
        type: this.$route.params.num,
        pulldown: true,
        isShow: false,
        show_title: true
      }
    },
    computed: mapState({
      user: state => state.user
    }),
    methods: {
      financial_record() { // 全部明细
        document.querySelector('.mint-loadmore-text').style.color = '#000'
        let url = 'financial_record?page=' + this.page + '&type=' + this.type;
        requestOpt.reqGetuser(url, this.user.token, res => {
          if (res.data.status === 1) {
            this.financials = res.data.data.list;
            this.isShow = true;
             Indicator.close();
            if (this.financials.length <= 0) {
              // this.$refs.loadmore.classList.add('bg_img');
              document.querySelector('.mint-loadmore').classList.add('bg_img');
              this.show_title = false;
            }else{
              document.querySelector('.mint-loadmore').classList.remove('bg_img');
              this.show_title = true;
            }
          } else {
            alertip(res.data.msg);
          };
        }, err => {
          alertip(err);
        })
      },
      loadTop() {
        this.financial_record();
        Indicator.close();
        var that = this;
        setTimeout(function() {
          that.$refs.loadmore.onTopLoaded();
        }, 1000)
  
      }
  
    },
    created() {
    },
    mounted() {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      this.financial_record();
    },
    filters: {
      slic: function(value) {
  
        if (!value) {
          return
        };
        value = value.indexOf('-') != -1 ? value : '+' + value;
        return value;
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">


.mint-loadmore.bg_img{
  background : url('../../images/no_data.png') no-repeat center / 25%  25%;
}
  .mint-loadmore{
    background : #eee;
     min-height:11rem;
  }

  // .mint-loadmore-text{
  //   color : #000;
  // }

 .for_bg_box{
   background : #fff;
 }

  .recharge-content{
    width :100%;
    height 100%;
    // height: 13.34rem;
    display block
    background #ffffff
    // overflow auto
  }
  .recharge{

    width 100%;
    // height 13.34rem
    height 100%;
    display block
    margin-top 1.58rem
    background #ffffff
  }
  .recharge dl{
    width 100%;
    height  1rem
   
    border-bottom 1px solid #dddddd
    display : flex;
  }2
  .recharge dl dt{
    flex  : 1
    height  100%;
    margin-left 0.3rem
  }
  .recharge dl dt h5{
    width : 100%;
    height  0.5rem
    display block
    text-align left
    font-size 0.25rem
    color #000000
    line-height 0.5rem
  }
  .recharge dl dt p{
    height : 0.5rem;
    text-align left
    font-size 0.25rem
    color #ff3a3a
    line-height 0.5rem
    margin-right 0.2rem
  }
  .recharge dl dt p.blue-c{
    color #4bbafe
    
  }

  .recharge dl dd{
    flex : 1
    height  1rem;
    margin-right 0.3rem
  }
  .recharge dl dd h5{
    width : 100%;
    height  0.5rem
    text-align right
    font-size 0.25rem
    // font-weight: 600;
    color #000000
    line-height 0.5rem
  }
  .recharge dl dd span{
    display : block;
    text-align right
    height : 0.5rem;
    font-size 0.2rem
    color #676767
    line-height 0.5rem
    margin-left 0.1rem
  }

    .bt_loading_title{
    height: 0.8rem;
    color: #666;
    line-height: 0.8rem;
    text-align: center;
    font-size:12px;
  }
</style>









































































