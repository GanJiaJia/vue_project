<template>
  <div class="withdrawals-content">
    <back title="提款记录" go-back="true"></back>

    <div class="chongzhi-tab">
      <ul class="chongzhi-tab-ul" ref="chongzhi_tab_ul">
        <li class="active" @click="all_btn(0, 3)">全部</li>
        <li @click="succ_btn(1, 1)">充值成功</li>
        <li @click="fail_btn(2, 2)">失败</li>
        <li @click="dai_btn(3, 0)">待审核</li>
      </ul>
    </div>

    <mt-loadmore :top-method="loadTop" :auto-fill="false" ref="loadmore">
      <div class="chongzhi-cont" ref="chongzhi_cont" id="chongzhi_cont" v-show="isShow">
        <div>
          <div class="cz_all" v-for="(items,index) in recharges">
            <div class="cz_top">
              <h5> 充值金额<i>{{items.order_id}}</i></h5>
              <h5>{{items.charge_type}}</h5>
            </div>
            <div class="cz_bottom">
              <h4>+{{ items.amount }}</h4>
              <i>{{items.status | shenHe}} &nbsp; {{items.create_time}}</i>
            </div>
          </div>
        </div>
  
        <div class="cz_success">
          <div>
            <div class="cz_all" v-for="(items,index) in recharges" v-if="items.status == 1">
              <div class="cz_top">
                <h5> 充值金额<i>{{items.order_id}}</i></h5>
                <h5>{{items.charge_type}}</h5>
              </div>
              <div class="cz_bottom">
                <h4>+{{ items.amount }}</h4>
                <i>{{items.status | shenHe}}  &nbsp; {{items.create_time}}</i>
              </div>
            </div>
          </div>
        </div>
  
        <div class="cz_faild">
          <div>
            <div class="cz_all" v-for="(items,index) in recharges" v-if="items.bank_charge_type == 2">
              <div class="cz_top">
                <h5> 提款金额<i>{{items.order_id}}</i></h5>
                <h5>{{items.withdraw_type}}</h5>
              </div>
              <div class="cz_bottom">
                <h4>+{{ items.amount }}</h4>
                <i>{{items.status | shenHe}}  &nbsp; {{items.create_time}}</i>
              </div>
            </div>
          </div>
        </div>
  
        <div class="cz_dading">
          <div>
            <div class="cz_all" v-for="(items,index) in recharges" v-if="items.bank_charge_type == 0">
              <div class="cz_top">
                <h5> 充值金额<i>{{items.order_id}}</i></h5>
                <h5>{{items.charge_type}}</h5>
              </div>
              <div class="cz_bottom">
                <h4>+{{ items.amount }}</h4>
                <i>{{items.status | shenHe}}  &nbsp; {{items.create_time}}</i>
              </div>
            </div>
          </div>
        </div>
        <div class="bt_loading_title" v-show="show_title" style="display:none">暂无更多数据</div>
      </div>
    </mt-loadmore>
    <!-- <div class="withdrawals">
      <router-link tag="div" class="tab-item" to="/w-detailed">
        <dl>
          <dt>
            <h5>提款金额 <span>20170405DZLLL223L</span></h5>
            <p>+500</p>
          </dt>
          <dd>
            <h5>提款到银行卡</h5>
            <span>12：00：00</span><span>2017-04-07</span><span>正在处理</span>
          </dd>
        </dl>
      </router-link>
    </div> -->

  </div>

</template>




<script type="text/ecmascript-6">
  import {
    Indicator
  } from 'mint-ui';
  import Back from '@/components/back/back'
  import NData from '@/components/tab/n-data'
  import {
    alertip,
    requestOpt
  } from 'api/recommend'
  import {
    mapState
  } from 'vuex'
  
  export default {
    components: {
      Back,
      NData
    },
    data() {
      return {
        page: 0,
        type: 3,
        show_title: false,
        recharges: [],
        isShow: false,
        public_value:3
      }
    },
    computed: mapState({
      user: state => state.user
    }),
    created() {
  
    },
    mounted() {
      
      this.getWithdraws(3);
      this.switchActive(0, 3);
    },
    methods: {
      getWithdraws(type) { 
        Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
        });

        document.querySelector('.mint-loadmore-text').style.color = '#000'
        document.querySelector('.bt_loading_title').style.display = 'none'
        requestOpt.reqGetuser('withdraw_record?page=' + this.page + '&&type=' + type, this.user.token, res => {
          if (res.data.status === 1) {
            this.recharges = res.data.data.list;
            console.log(this.recharges)
            Indicator.close();
            this.isShow = true;
            if (this.recharges.length <= 0) {
              // this.$refs.loadmore.classList.add('bg_img');
              // this.show_title = false;
              document.querySelector('.bt_loading_title').style.display = 'none'
              document.querySelector('.mint-loadmore').classList.add('bg_img');
            } else {
              // this.show_title = true;
              document.querySelector('.bt_loading_title').style.display = 'block'
              document.querySelector('.mint-loadmore').classList.remove('bg_img');
            }
          } else {
            alertip(res.data.msg)
          }
        }, err => {
          alertip(err)
        })
      },
  
      switchActive(index, value) {
        let len = this.$refs.chongzhi_tab_ul.children.length;
        for (var i = 0; i < len; i++) {
          this.$refs.chongzhi_tab_ul.children[i].classList.remove('active');
          document.querySelector('.chongzhi-cont').children[i].style.display = 'none';
        }
        this.$refs.chongzhi_tab_ul.children[index].classList.add('active');
        document.querySelector('.chongzhi-cont').children[index].style.display = 'block';
      },
      loadTop() {
        this.getWithdraws(this.public_value);
        Indicator.close();
        var that = this;
        setTimeout(function() {
          that.$refs.loadmore.onTopLoaded();
        }, 1000)
  
      },
      all_btn(index, value) {
        this.public_value = value;
        this.getWithdraws(value);
        this.switchActive(index, value)
      },
      succ_btn(index, value) {
        this.public_value = value;
        this.getWithdraws(value);
        this.switchActive(index, value);
        
      },
      fail_btn(index, value) {
        this.public_value = value;
        this.getWithdraws(value);
        this.switchActive(index, value);
        
      },
      dai_btn(index, value) {
        this.public_value = value;
        this.getWithdraws(value);
        this.switchActive(index, value);
        
      }
  
    },
    filters: {
      shenHe(value) {
        value = value == 1 ? '提款成功' : value == 2 ? '提款失败' : '正在处理'
        return value;
      }
    }
  
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

.mint-loadmore{
  min-height : 11rem;
}

.bt_loading_title{
  height: 1rem;
  width : 100%;
  text-align : center;
  line-height : 1rem;
  color : #666;
  cont-size : 12px;
}

// 充值导航样式

.chongzhi-tab {
  background : #fff;
}
.chongzhi-tab{
  margin-top : 0.88rem;
}

.chongzhi-tab-ul{
   display : flex;
   border-bottom : 1px solid #ddd;
}

.chongzhi-tab-ul li{
  flex : 1;
  text-align : center;
  height: 0.68rem;
  line-height : 0.68rem;
  font-size:0.25rem;
  color : #000;
}

.chongzhi-tab-ul li.active{
      color: #fc823c
      border-bottom 2px solid #fc823c
}


// 充值内容样式

.cz_all{
  height : 1rem;
  width : 100%;
  padding : 0.1rem 0.2rem
  border-bottom: 1px solid #ddd;
  box-sizing : border-box;
  background: #fff;
}

.cz_all>div{
  width : 100%;
  height : 50%;
  display : flex;
  justify-content : space-between;
}
.cz_all>div h5{
  font-size : .3rem;
  color : #000;
}

.cz_all>div  i{
  font-style: normal;
  font-size : .2rem;
  color : #676767;
  margin-left : .2rem;
}

.cz_bottom {
  line-height :.5rem;
}
.cz_bottom  h4{

  color : red;
}

.mint-loadmore.bg_img{
  background : url('../../images/no_data.png') no-repeat center / 25%  25%;
}

</style>














































































