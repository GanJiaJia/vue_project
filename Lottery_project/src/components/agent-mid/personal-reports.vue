<!--个人报表-->
<template>
  <div class="personal-reports-content">
    <!--head-->
    <div id="back">
      <div class="back-content">
        <a class="back-btn" @click="$router.go(-1)" >
          <img  class="back-icon" src="../../images/Return-@2x.png" alt="">
        </a>
        <span class="back-title" >
          <button class="active" @click="tab_btn(0)">个人报表</button><button @click="tab_btn(1)" >团队报表</button>
        </span>
      </div>
    </div>
    <!--content-->
    <div class="personal-reports">
      <!-- <div class="agent-commis-dt">

        <input type="text" value="2017年09月12日">
          至
        <input type="text" value="2017年09月11日">

        <span class="agent-dt-btn">
          <span>今天</span>
          <i class="el-icon-arrow-down"></i>
        </span>


      </div> -->
       <div class="agent-commis-dt">
        <!-- <input type="text" v-model="prevdt"> -->
        <el-date-picker v-model="prevdt" type="date" @change="first_change" placeholder="选择日期" ></el-date-picker>
         <i>至</i>
        <!-- <input type="text" v-model="nextdt"> -->
        <el-date-picker v-model="nextdt" type="date" placeholder="选择日期" @change="first_change" ></el-date-picker>
        <span class="agent-dt-btn" @click="selDt">
          <span>{{dtText}}</span>
          <i class="el-icon-arrow-down"></i>
          <div class="agent-dt-sels" v-if="dtFlag">
            <span v-for="dts in dtbtnList" @click="selDtItem(dts.val,dts.name)">{{dts.name}}</span>
          </div>
        </span>
      </div>
      <mt-loadmore :top-method="loadTop" :auto-fill="false" ref="loadmore" v-show="start_show">
        <div class="personal-report-con">
          <div class="personal-report-item">
            <h4>盈亏总数</h4>
            <span class="special">{{data_list.difference}}元</span>
          </div>
          <div class="personal-report-item">
            <h4>投注总额</h4>
            <span >{{data_list.difference}}元</span>
          </div>
          <div class="personal-report-item">
            <h4>派彩总额</h4>
            <span >{{data_list.winning_amount}}元</span>
          </div>
          <div class="personal-report-item">
            <h4>佣金总额</h4>
            <span >{{data_list.commission}}元</span>
          </div>
          <div class="personal-report-item">
            <h4>充值总额</h4>
            <span >{{data_list.charge_amount}}元</span>
          </div>
          <div class="personal-report-item">
            <h4>提现总额</h4>
            <span >{{data_list.withdraw_amount}}元</span>
          </div>
        </div>
       </mt-loadmore>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Back from "@/components/back/back";
import { requestOpt, dtFormate, alertip } from "api/recommend";
import { Indicator } from "mint-ui";
import { MessageBox } from "mint-ui";
import { mapState } from "vuex";

export default {
  components: {
    Back
  },
  computed: mapState({
    user: state => state.user
  }),
  data() {
    return {
      data_list: [],
      dtFlag: false,
      nextdt: dtFormate.date(),
      prevdt: dtFormate.yestaday(1),
      start_show: false,
      // showtab: "person",
      type: 1,
      dtText: "今天",
      index: 1,
      dtbtnList: [
        { name: "今天", val: dtFormate.date() },
        { name: "昨天", val: dtFormate.yestaday(1) },
        { name: "一周", val: dtFormate.yestaday(7) },
        { name: "半月", val: dtFormate.yestaday(15) }
      ]
    };
  },
  methods: {
    switch_tab(val) {
      var len = document.querySelector(".back-title").children.length;
      for (var i = 0; i < len; i++) {
        document
          .querySelector(".back-title")
          .children[i].classList.remove("active");
      }
      document
        .querySelector(".back-title")
        .children[val].classList.add("active");
    },
    tab_btn(val) {
      this.switch_tab(val);
      this.type = val == 0 ? 1 : 2;
      this.index = val;

      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
      requestOpt.reqGet(
        "proxy_stat?type=" +
          this.type +
          "&date_from=" +
          this.prevdt +
          "&date_to=" +
          this.nextdt,
        this.user.token,
        res => {
          // this.loading = false;
          if (res.data.status === 1) {
            this.data_list = res.data.data.statistic;
            // console.log(res);
            this.start_show = true;
            Indicator.close();
            // console.log(res);
          } else {
            alertip(res.data.msg);
          }
        },
        err => {
          // this.loading = false;
          alertip(err);
        }
      );
    },
    selDt() {
      this.dtFlag = !this.dtFlag;
    },
    selDtItem(val, name) {
      this.prevdt = val;
      this.dtText = name;
    },
    first_change() {
      this.prevdt = dtFormate.date(this.prevdt);
      this.nextdt = dtFormate.date(this.nextdt);
      this.tab_btn(this.index);
    },
    loadTop(){
      this.tab_btn(this.index);
      var that = this;
       setTimeout(function() {
          that.$refs.loadmore.onTopLoaded();
        }, 800);
    }
  },
  mounted() {
    this.tab_btn(this.index);
  }
};
</script>

<style scoped lang="stylus">

.mint-loadmore{
  min-height : 10rem;
}

.person {
}

.personal-reports-content {
  width: 7.5rem;
  // height: 13.34rem;
  min-height:13.34rem;
  height:100%;
  overflow: hidden;
  background-color: rgb(250,250,250);
  color: #000;
  font-size: 0.3rem;
}

poscola {
  position: relative;
  top: 0.88rem;
}

.personal-reports {
  @extend poscola;

  .agent-commis-dt {
    padding: 0.2rem 0.3rem;
    margin-bottom: 0.3rem;
    background: #fff;
    font-size: 0.24rem;

    input {
      width: 1.5rem;
      text-align: center;
    }

    .agent-dt-btn {
      float: right;
    }
  }

  .personal-report-con {
    background: #fff;

    .personal-report-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.2rem 0.3rem;
      border-bottom: 1px solid #ddd;

      h4 {
        color: #777;
        font-size: 0.26rem;
      }

      .special {
        color: #ff3a3b;
      }
    }
  }
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
  height: 0.6rem;
  float: left;
  display: block;
  text-align: center;
  font-size: 0.32rem;
  font-weight: normal;
  line-height: 0.6rem;
  z-index: 8;
  margin-top: 0.13rem;
  color: #ffffff;

  button {
    padding: 0 0.3rem;
    background: transparent;
    color: #fff;
    border-top: 1px solid #ffffff;
    border-bottom: 1px solid #ffffff;
    box-sizing: border-box;

    &:first-child {
      border-left: 1px solid #ffffff;
      border-right: 1px solid #ffffff;
      border-top-left-radius: 0.08rem;
      border-bottom-left-radius: 0.08rem;
    }

    &:last-child {
      border-left: 0;
      border-right: 1px solid #ffffff;
      border-top-right-radius: 0.08rem;
      border-bottom-right-radius: 0.08rem;
    }
  }

  .active {
    background: #fff;
    color: red;
  }
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
}

// .el-date-editor.el-input
.el-date-editor.el-input {
  width: auto;
}

.personal-reports .agent-commis-dt {
  display: flex;
  justify-content: space-around;
  padding: 0.2rem 0rem;
  margin-bottom: 0.3rem;
  background: #fff;
  font-size: 0.24rem;

  input {
    width: 2rem;
    text-align: center;
  }

  .agent-dt-btn {
    position: relative;
    float: right;

    .agent-dt-sels {
      position: absolute;
      z-index:5;
      right: -0.3rem;
      top: 0.6rem;
      width: 2rem;
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);

      span {
        display: inline-block;
        width: 100%;
        padding: 0.1rem 0;
        border-bottom: 1px solid #ddd;
        background: #fff;
        line-height: 0.5rem;
        text-align: center;

        &:last-child {
          border-bottom: 0;
        }
      }
    }
  }
}

.agent-commis-dt>i {
  font-style: normal;
  line-height: 0.6rem;
  margin-left: 0.2rem;
}

span i {
  font-style: normal;
  line-height: 0.6rem;
}

.el-input {
  font-size: 12px;
  line-height: 0.6rem;
}
</style>
