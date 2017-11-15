<template>
  <div class="activites-content">
    <div class="activites-head">
      <ul>
        <li class="activites-head1">
          <a  onclick="history.go(-1)" >
            <img src="../../images/Return-@2x.png" alt="">
          </a>
        </li>
        <li class="activites-head2 title" @click="hideDailog">
          <span>{{act_name}}</span>
          <i class="triangle-down"></i>
        </li>
        <li class="activites-head3">
        </li>
      </ul>
    </div>
    <!--下拉显示-->
    <transition name="fade">
      <div v-show="isShow" class="header-is-active" @click="hideDailog">
        <div class="header-modal-content">
          <ul>
            <li :class="{red: act_active == items.code}" v-for="(items, key) in act_tabs" @click="act_chk(items.code,items.name)">{{items.name}}</li>
          </ul>
        </div>
      </div>
    </transition>
      <!-- <mt-loadmore :top-method="loadTop" :auto-fill="false" ref="loadmore"> -->
        <div class="act_cont">
              <ul v-for="(items , indexs) in data_list">
                  <li> {{ items.title }}</li>
                  <li>{{items.create_time}}</li>
                  <li> <p style="line-height:.4rem;word-wrap:break-word; ">{{ items.content }}</p></li>
              </ul>
        </div>  
      <!-- </mt-loadmore> -->
      
         <!-- <h3 v-if="isShow_NoData">暂无更多数据</h3> -->
      <div  v-if="isShow_no_data_bg_img" class="no_data_bg_img"></div>
  </div>

</template>

<script type="text/ecmascript-6">
import Back from "@/components/back/back";
import { alertip, requestOpt } from "api/recommend";
import { mapState } from "vuex";
import { Indicator } from "mint-ui";
export default {
  components: {
    Back
  },
  data() {
    return {
      isShow: false,
      loading: false,
      lot_type_id: "8",
      page: 2,
      type: 0,
      act_active: "0",
      act_name: "所有消息",
      data_list: [],
      isShow_NoData: false,
      isShow_no_data_bg_img : false,
      act_tabs: [
        { name: "所有消息", code: "0" },
        { name: "活动消息", code: "1" },
        { name: "系统公告", code: "2" },
        { name: "彩票投注", code: "3" },
        { name: "用户相关", code: "4" },
        { name: "财务相关", code: "5" }
      ]
    };
  },
  props: {
    title: {
      type: String
    }
  },
  computed: mapState({ user: state => state.user }),
  methods: {
    act_chk(v, n) {
      this.type = v;
      this.act_active = v;
      this.act_name = n;
      this.activities();
    },
    hideDailog(i) {
      this.isShow = !this.isShow;
    },
    activities() {
       Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
      // document.querySelector(".mint-loadmore-text").style.color = "#000";
      // this.loading = true;
      let url = "msg_list?page=" + this.page + "&msg_type=" + this.type;
      requestOpt.reqGet(
        url,
        this.user.token,
        res => {
          this.isShow_NoData = res.data.data.list.length > 1 ? true : false;
          this.isShow_no_data_bg_img = res.data.data.list.length <= 0  ? true : false;
        
          if (res.data.status === 1) {
            this.data_list = res.data.data.list;
            Indicator.close();
            // console.log(res.data.data.list)
            // this.lotteryList = res.data.data.list;
          } else {
            alertip(res.data.msg);
          }
        },
        err => {
          alertip(err);
        }
      );
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    },
    loadTop() {
      this.activities();
      var that = this;
      setTimeout(function() {
        that.$refs.loadmore.onTopLoaded();
      }, 800);
    }
  },
  created() {
    //      this.bet_records();
  },
  mounted() {
   
    this.activities();
  }
};
</script>

<style scoped lang="stylus">

// 无数据时候的背景图

.no_data_bg_img{
  width : 100%;
  min-height :12.4rem;
  height: auto;
  background : rgb(250,250,250) url('../../images/no_data.png') no-repeat center / 25% 25%;
  position: absolute;
  top:.88rem; 
}

// .act_cont_box{
//   min-height: 10rem;
//   height: auto;
// }

.activites-content h3 {
  font-size: 0.26rem;
  color: #929292;
}

// 内容区
.act_cont {
  // background : #fff;
 
  margin: 1.2rem 0.3rem 0rem 0.3rem;
}

.act_cont ul {
  background: #fff;
  margin-bottom: 0.3rem;
  border-radius: 10px;
}

.act_cont ul li {
  padding: 0.2rem;
}

.act_cont ul li:nth-child(1) {
  color: #000;
  font-size: 0.28rem;
}

.act_cont ul li:nth-child(2) {
  border-bottom: 1px solid #ddd;
  font-size: 0.26rem;
  color: #929292;
}

.act_cont ul li:nth-child(3) {
  font-size: 0.26rem;
  color: #929292;
}

// ------------------------------------------------------------
// 顶部导航区
.activites-content {
  width: 7.5rem;
  // height: 13.34rem;
  min-height: 13rem;
  height: auto;
  display: block;
  overflow-X: hidden;
  background: #eeeeee;
  // background rgb(250,250,250);
}

.activites-head {
  width: 7.5rem;
  height: 0.88rem;
  display: block;
  margin: auto;
  background: #ff3a3b;
  position: fixed;
  top: 0;
  z-index: 99;
}

.activites-head ul {
  width: 6.9rem;
  height: 0.88rem;
  display: block;
  margin: auto;
  line-height: 0.88rem;
}

.activites-head ul li {
  height: 0.88rem;
  display: block;
}

.activites-head1 {
  width: 2rem;
  float: left;
}

.activites-head1 a {
  width: 2rem;
  height: 0.88rem;
  display: block;
}

.activites-head1 img {
  width: 0.22rem;
  height: 0.3rem;
  display: block;
  text-align: left;
  position: relative;
  top: 0.29rem;
}

.activites-head2 {
  width: 2.9rem;
  text-align: center;
  font-size: 0.32rem;
  font-weight: normal;
  color: #ffffff;
  float: left;
}

.activites-head3 {
  width: 2rem;
  float: right;
}

// 小三角
.triangle-down {
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 8px solid #ffffff;
  display: inline-block;
}

// 下拉内容
.header-is-active {
  width: 7.5rem;
  height: 13.34rem;
  position: fixed;
  z-index: 999;
  top: 0.88rem;
}

.header-modal-content {
  width: 7.5rem;
  /* height 2.4rem */
  background: #ffffff;
  display: block;
}

.header-modal-content ul:after {
  content: '';
  display: block;
  clear: both;
}

.header-modal-content ul li {
  width: 2.3rem;
  height: 0.6rem;
  float: left;
  display: block;
  margin-left: 0.12rem;
  margin-top: 0.12rem;
  background: #eeeeee;
  font-size: 0.24rem;
  color: #222222;
  text-align: center;
  line-height: 0.6rem;
  border: 1px solid #ffffff;
  border-radius: 0.04rem;

  &:last-child {
    margin-bottom: 0.12rem;
  }
}

.header-modal-content ul li.red {
  background: #ffffff;
  color: #ff3a3b;
  border: 1px solid #ff3a3b;
}
</style>
