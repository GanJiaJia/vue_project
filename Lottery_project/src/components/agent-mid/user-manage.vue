<!--用户管理-->
<template>
  <div class="user-manage-content">
    <div id="back">
      <div class="back-content">
        <a class="back-btn" @click="goback" >
          <img  class="back-icon" src="../../images/Return-@2x.png" alt="">
        </a>
        <span class="back-title" >用户管理</span>
        <router-link to="/lower-account" tag="div">
        <div class="back-title-right">
            <i class="el-icon-plus"></i>
            <span>添加用户</span>
        </div>
        </router-link>
      </div>
    </div>
    <div class="user-manage">
      <!--搜索-->
      <div class="user-serch">
        <input type="text" v-model="username_value" placeholder="请输入用户名">
        <i class="el-icon-search" @click="search_btn"></i>
      </div>
      <!--user-->
      <div class="user-curr-list">
        <div class="user-curr-grade">
          <h4>当前用户层级</h4>
          <div class="user-curr-item">
            <span>{{ user_proxy_level }}</span>
          </div>
        </div>
      </div>

      <div class="big_box">
          <div class="table_head">
          <ul>
              <li>用户名</li>
              <li>类型</li>
              <li>返点</li>
              <li>下级人数</li>
              <li>下线投注</li>
              <li>下线佣金</li>
              <li>用户投注</li>
              <li>代理等级</li>
          </ul>
        </div>
        <div class="table_box" v-show="isShowFirst">
           <mt-loadmore :top-method="loadTop" :auto-fill="false" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
            <table>
              <tbody>
                <tr v-for="(items, indexs) in dataArr">
                  <td> {{ items.username }}</td>
                  <td> {{ items.proxy_type  == 1 ? '代理' : '普通下线'}} </td>
                  <td> {{ items.return_ratio }} </td>
                  <td> {{ items.downline_count }} </td>
                  <td> {{ items.downline_bet_amount }} </td>
                  <td> {{ items.downline_commission }} </td>
                  <td> {{ items.self_bet_amount }} </td>
                  <td> {{ items.proxy_level }} </td>
                </tr>
              </tbody>
            </table>
            <h6 v-if="isNoData">暂无更多数据</h6>
          </mt-loadmore>
        </div>
      </div>
        
      </div>
    <!-- <Ndata v-if="isShowNdata"></Ndata> -->
    <div class="no_data_bg" v-if="isShowNdata"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import Back from "@/components/back/back";
import Ndata from "@/components/tab/n-data";
import { Indicator } from "mint-ui";
import { MessageBox } from "mint-ui";
import { alertip, requestOpt } from "api/recommend";
import { mapState } from "vuex";

import { goback } from "api/recommend";

export default {
  components: {
    Back,
    Ndata
  },
  data() {
    return {
      dataArr: [],
      isShowNdata: false,
      proxy_type: 0,
      page: 1,
      total_pages : 1,
      username_value: "",
      user_proxy_level: "",
      allLoaded : false,
      isNoData : false,
      isShowData : false,
      isShowFirst : false,
    };
  },
  computed: mapState({
    user: state => state.user
  }),
  methods: {
    goback() {
      this.$router.go(-1);
    },
    getDataList() {
      document.querySelector('.mint-loadmore-top').style.textAlign = 'left'
      document.querySelector('.mint-loadmore-top').style.textIndent = '3.5rem'
      document.querySelector('.mint-loadmore-bottom').style.textAlign = 'left'
      document.querySelector('.mint-loadmore-bottom').style.textIndent = '3.5rem'
      // document.querySelector('.mint-loadmore-bottom').style.marginTop = '0';
      if (this.user.userinfo.proxy_level == 1) {
        this.user_proxy_level = "等级一";
      }
      if (this.user.userinfo.proxy_level == 2) {
        this.user_proxy_level = "等级二";
      }
      if (this.user.userinfo.proxy_level == 3) {
        this.user_proxy_level = "等级三";
      }
      if (this.user.userinfo.proxy_level == 4) {
        this.user_proxy_level = "等级四";
      }
      if (this.user.userinfo.proxy_level == 5) {
        this.user_proxy_level = "等级五";
      }
      if (this.user.userinfo.proxy_level == 6) {
        this.user_proxy_level = "等级六";
      }
      requestOpt.reqGet(
        "proxy_downlines?proxy_type=" +
          this.proxy_type +
          "&page=" +
          this.page +
          "&username=" +
          this.username_value,
        this.user.token,
        res => {
          // console.log(res);
          this.dataArr = res.data.data.list;
          this.total_pages = res.data.data.paging_arr.total_pages;
          Indicator.close();
          this.isShowFirst = true;
          if(res.data.data.list.length <= 0){
            this.isShowNdata = true;
            //  document.querySelector('.mint-loadmore-bottom').style.display = 'none'
          }else{
            this.isShowNdata = false;
            // document.querySelector('.mint-loadmore-bottom').style.display = 'block'
          }
        },
        err => {
         alertip(err.data.msg);
        }
      );
    },
    loadTop(){
       this.page = 1;
       this.getDataList();
       this.isNoData = false;
       this.allLoaded = false;
        var that = this;
        setTimeout(function() {
          that.$refs.loadmore.onTopLoaded();
        }, 800);
    },
    loadBottom(){
        var that  = this;
        if(this.page >= this.total_pages){
          
          this.allLoaded = true;
          setTimeout(function() {
             that.$refs.loadmore.onBottomLoaded();
             that.isNoData = true;
      }, 800);
          return;
        }
        this.page++;
        requestOpt.reqGet(
        "proxy_downlines?proxy_type=" +
          this.proxy_type +
          "&page=" +
          this.page +
          "&username=" +
          this.username_value,
        this.user.token,
        res => {
          // console.log(res);
          // if(res.data.data.list.length <= 0){
          //   this.isNoData = true;
          // }else {
          //   this.isNoData = false;
          // }
          this.dataArr = this.dataArr.concat(res.data.data.list);
        },
        err => {
         alertip(err.data.msg);
        }
      );

        setTimeout(function() {
        that.$refs.loadmore.onBottomLoaded();
      }, 800);


    },
    search_btn(){
      // console.log(this.username_value);
      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });

        requestOpt.reqGet(
        "proxy_downlines?proxy_type=" +
          this.proxy_type +
          "&page=" +
          this.page +
          "&username=" +
          this.username_value,
        this.user.token,
        res => {
          // console.log(res);
          this.dataArr = res.data.data.list;
          this.total_pages = res.data.data.paging_arr.total_pages;
          Indicator.close();
          this.isShowFirst = true;
          if(res.data.data.list.length <= 0){
            // document.querySelector('.mint-loadmore-bottom').style.display = 'none'
            this.isShowNdata = true;
            // this.isNoData = true;
          }else{
            this.isShowNdata = false;
            // this.isNoData = false;
            // document.querySelector('.mint-loadmore-bottom').style.display = 'block'
          }
        },
        err => {
         alertip(err.data.msg);
        }
      );
      
    }
  },
  mounted() {
    Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
    this.getDataList();
  }
};
</script>

<style scoped lang="stylus">


.big_box{
  overflow:scroll
}

.mint-loadmore{
  width : 100%;
}

.no_data_bg {
  width:80%;
  background:url('../../images/no_data.png') no-repeat  center / 30% 30%;
  position: absolute;
  bottom:0;
  z-index:0
  min-height:8.5rem;
  left:10%;
}

.mint-loadmore {
  // min-height : 9.5rem;
}
.table_box  h6{
  height : .6rem;
  line-height :.6rem;
  color : #929292;
  font-size : .25rem;
  text-align : center;
}

.user-manage-content {
  width: 7.5rem;
  height: 13.34rem;
  overflow: hidden;
  background-color: #eee;
  color: #000;
  font-size: 0.3rem;
}

poscola {
  position: relative;
  top: 0.88rem;
}

#back {
  width: 7.5rem;
  height: 0.88rem;
  background: #ff3a3b;
  display: block;
  position: fixed;
  top: 0;
  z-index: 999;
}

.back-content {
  width: 6.9rem;
  margin: auto;
  height: 0.88rem;
  display: block;
  line-height: 0.88rem;
}

.back-title {
  height: 0.88rem;
  float: left;
  display: block;
  text-align: center;
  font-size: 0.32rem;
  font-weight: normal;
  line-height: 0.88rem;
  z-index: 8;
  width: 2.9rem;
  color: #ffffff;
}

.back-btn {
  width: 2rem;
  height: 0.88rem;
  display: block;
  float: left;
}

.back-btn img {
  width: 0.22rem;
  height: 0.3rem;
  display: block;
  text-align: left;
  float: left;
  position: relative;
  top: 0.29rem;
}

.back-title-right {
  width: 2rem;
  height: 0.88rem;
  display: block;
  float: right;
  z-index: 3;
  text-align: right;
  color: #fff;
}

.user-manage {
  @extend poscola;

  .user-serch {
    position: relative;
    padding: 0.3rem;
    background: #fff;

    input {
      width: 100%;
      border: 1px solid #ddd;
      height: 0.8rem;
      line-height: 0.8rem;
      border-radius: 0.5rem;
      padding-left: 0.3rem;
    }

    i {
      position: absolute;
      top: 0.15rem;
      right: 0.2rem;
      padding: 0.3rem;
      color: #24b0ff;
      font-size: 0.5rem;
    }
  }

  .user-curr-list {
    padding: 0.3rem 0.2rem;
    padding-bottom: 0.5rem;
    background: rgb(250, 250, 250);
    width: auto;
    font-size: 0.25rem;

    h4 {
      padding-bottom: 0.2rem;
    }

    span {
      display: inline-block;
      min-width: 1rem;
      padding: 0.1rem 0.1rem;
      text-align: center;
      border: 1px solid #000;
      // font-size .3rem
      border-radius: 0.08rem;
    }
  }
}

// table表格部分样式
.table_box {
  width: 15rem;
  overflow: scroll
  height: 8.5rem;
}

table {
  min-height:8.6rem;
  width: 15rem;
  overflow: scroll;
}

table tr {
  width: 100%;
  display: flex;
}

table tr th, table tr td {
  flex: 1;
  text-align: center;
  font-size:0.25rem;
}

table tbody {
  background: #fff;
}

table, table thead tr th:nth-child(1) {
  flex: 1.5;
  font-sise: 0.25rem;
}

table tbody tr td:nth-child(1) {
  flex: 1.5;
  font-size: 0.25rem;
}

table thead {
  height: 0.8rem;
  line-height: 0.8rem;
  color: #000;
  border-bottom: 1px solid #ddd;
  background: rgb(250, 250, 250);
}

table tbody tr {
  height: 0.8rem;
  line-height: 0.8rem;
  border-bottom: 1px solid #ddd;
}

.table_head ul {
  width: 15rem;
  display: flex;
  background: rgb(250, 250, 250);
  text-align: center;
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;
}

.table_head ul li {
  flex: 1;
  height: 0.8rem;
  line-height: 0.8rem;
}

.table_head ul li:nth-child(1) {
  flex: 1.5;
}
</style>
