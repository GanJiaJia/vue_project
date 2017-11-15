<!--代理佣金-->
<template>
  <div class="agent-commission-content">
    <back title="代理佣金" go-back="true"></back>
    <div class="agent-commission" >
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
      <div class="agent-now-count">
        <h4>今日统计</h4>
        <div class="agent-now-items">
          <div class="agent-now-item">
            <div class="yongjin_img"></div>
            <div class="commission-count">
              <h4>佣金(元)</h4>
              <span>{{data_list.total_commissions == 0 ? '0.00' : data_list.total_commissions}}</span>
            </div>
          </div>
          <div class="agent-now-item">
             <div class="touzhu_img"></div>
            <div class="commission-count">
              <h4>投注金额(元)</h4>
              <span>{{data_list.total_bet_amount == 0 ? '0.00' : data_list.total_commissions }}</span>
            </div>
          </div>
        </div>
      </div>
      <!--list-->
      <mt-loadmore :top-method="loadTop" :auto-fill="false" ref="loadmore">
        <div class="out_table_box" :class="{active : this.is_show_no_data == true }">
          <table>
            <thead>
              <tr>
                <th>用户名</th>
                <th>代理类型</th>
                <th>等级名称</th>
                <th>投注总额</th>
                <th>佣金</th>
              </tr>
            </thead>
            <tbody>
            <tr v-for="(items,indexs) in data_list.downline_list">
              <td>{{items.username}}</td>
              <td>{{items.proxy_type == 1 ? '代理' : '普通用户'}}</td>
              <td>{{items.proxy_level_name }}</td>
              <td>{{items.bet_amount }}</td>
              <td>{{items.commissions }}</td>
            </tr>
            </tbody>
        </table>
        </div>
      </mt-loadmore>
    </div>

    <!-- <div class="no_data_bg" v-if="is_show_no_data">
        
    </div> -->

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
      // loading: false,
      proxy_type: 0, // 代理类型
      nextdt: dtFormate.date(),
      prevdt: dtFormate.yestaday(1),
      dtText: "今天",
      dtFlag: false,
      data_list: [],
      is_show_no_data: false,
      dtbtnList: [
        { name: "今天", val: dtFormate.date() },
        { name: "昨天", val: dtFormate.yestaday(1) },
        { name: "一周", val: dtFormate.yestaday(7) },
        { name: "半月", val: dtFormate.yestaday(15) }
      ]
    };
  },
  methods: {
    selDt() {
      this.dtFlag = !this.dtFlag;
    },
    selDtItem(val, name) {
      this.prevdt = val;
      this.dtText = name;
    },
    proxy_commissions() {
      // 获取下线佣金
      // this.loading = true;
      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
      requestOpt.reqGet(
        "proxy_commissions?proxy_type=" +
          this.proxy_type +
          "&date_from=" +
          this.prevdt +
          "&date_to=" +
          this.nextdt,
        this.user.token,
        res => {
          // this.loading = false;
          if (res.data.status === 1) {
            // this.proxy_commissions_list.concat(res.data.data.list)
            this.data_list = res.data.data.list;
            Indicator.close();
            if (res.data.data.list.downline_list.length <= 0) {
              this.is_show_no_data = true;
            } else {
              this.is_show_no_data = false;
            }
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
    first_change() {
      this.prevdt = dtFormate.date(this.prevdt);
      this.nextdt = dtFormate.date(this.nextdt);
      this.proxy_commissions();
    },
    // 下拉刷新
     loadTop(){
      this.proxy_commissions();
      var that = this;
       setTimeout(function() {
          that.$refs.loadmore.onTopLoaded();
        }, 800);
  }
  },
  mounted() {
    this.proxy_commissions();
  },
 
};
</script>

<style scoped lang="stylus">


.out_table_box.active{
  min-height:8rem;
  background: #fff url('../../images/no_data.png') no-repeat center / 20% 25%;
}

.commission-count {
}

.agent-commis-dt i {
  font-style: normal;
  line-height: 0.6rem;
}

.el-input {
  font-size: 12px;
  line-height: 0.6rem;
}

// 佣金和投注金额的背景图
.agent-now-item {
  display: flex;
  background: #fff;
  padding: 0.3rem 0.1rem;
}

.yongjin_img {
  width: 0.7rem;
  min-height: 0.9rem;
  height: auto;
  background: #fff url('../../images/yongjin_img.png') no-repeat center / cover;
  margin-right: 0.2rem;
}

.agent-now-item:nth-child(1) {
  margin-right: 0.3rem;
}

.agent-commis-dt .el-date-editor.el-input {
  width: 2.8rem;
  margin-left: -0.3rem;
}

.agent-commis-dt span {
  line-height: 0.6rem;
}

.commission-count {
}

.touzhu_img {
  width: 1.03rem;
  min-height: 0.8rem;
  height: auto;
  background: #fff url('../../images/touzhu_img.png') no-repeat center / cover;
  margin-right: 0.2rem;
}

// ----------------------------------
.agent-commission-content {
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

.agent-commission {
  @extend poscola;

  .agent-commis-dt {
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
        right: -0.3rem;
        top: 0.6rem;
        width: 1.5rem;
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

.mint-loadmore{
  min-height : 5rem;
}

  .agent-now-count {
    font-size: 0.28rem;
    padding: 0.3rem;

    // background rgb(250,250,250);
    h4 {
      margin-bottom: 0.3rem;
    }

    .agent-now-items {
      display: flex;
      justify-content: content;
      flex-direction: row;

      .agent-now-item {
        width: 50%;
        color: #666;

        &:after {
          content: '';
          display: block;
          clear: both;
        }
      }
    }
  }
}

table {
  width: 100%;
  margin-top: 0.3rem;
  background: #fff;
}

table tr {
  display: flex;
  height: 0.8rem;
  line-height: 0.8rem;
  border-bottom: 1px solid #ddd;
}

thead th, tbody td {
  text-align: center;
  flex: 1;
  font-size: 0.27rem;
}

.no_data_bg {
  width: 70%;
  left: 15%;
  min-height: 7.3rem;
  height: auto;
  background: url('../../images/no_data.png') no-repeat center / 25% 25%;
  position: absolute;
  bottom: 0;
  // z-index : 0
}
</style>
