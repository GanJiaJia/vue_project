<template>
  <!--走势-->
  <div v-show="isShowSelect_wei">
    <!--位数-->
    <div class="digit" v-show="isShowSelect_wei">
      <ul class="wei_ul">
        <li class="zero-li red-bg" @click="open_btn(0)">开奖结果</li>
        <li class="one-li" @click="wan_btn(1)">万位</li>
        <!-- <router-link >万位</router-link> -->
        <li class="two-li" @click="qian_btn(2)">千位</li>
        <li class="three-li" @click="bai_btn(3)">百位</li>
        <li class="four-li" @click="shi_btn(4)">十位</li>
        <li class="five-li" @click="ge_btn(5)">个位</li>
      </ul>
    </div>
    <mt-loadmore :top-method="loadTop" :auto-fill="false" ref="loadmore">
      <div>
        <div class="start" v-show="isShowSelect_wei">
          <!--其数-->
          <div class="start-contents">
            <div class="start-title">
              <table>
                <tr class="start-contents1-title">
                  <td class="title-width">期数</td>
                  <td class="title-width">开奖结果</td>
                  <td>万位</td>
                  <td>千位</td>
                  <td>百位</td>
                  <td>十位</td>
                  <td>个位</td>
                  <td>前三</td>
                  <td>后三</td>
                </tr>
              </table>
            </div>
  
            <div class="start-body">
              <table>
                <tr v-for=" item in arr_list.list ">
                  <td class="title-width">{{item.IssueNumber | slic}}</td>
                  <td class="title-colors-red title-width">{{item.Number1}} {{item.Number2}} {{item.Number3}} {{item.Number4}} {{item.Number5}}</td>
                  <td>{{item.Number1 | calc }} </td>
                  <td>{{item.Number2 | calc }}</td>
                  <td>{{item.Number3 | calc }}</td>
                  <td>{{item.Number4 | calc }}</td>
                  <td>{{item.Number5 | calc }}</td>
                  <td>{{ item.Number1 == item.Number2 || item.Number2 == item.Number3 || item.Number1 == item.Number3 ? '组三' : '组六' }} </td>
                  <td>{{ item.Number3 == item.Number4 || item.Number4 == item.Number5 || item.Number3 == item.Number5 ? '组三' : '组六' }}</td>
                </tr>
              </table>
            </div>
          </div>
  
          <div id="wanwei" class="wanwei">
            <div class="periods">
              <!-- <table class="wan_table">
                <tr>
                  <td class="periods1">期数</td>
                  <td>0</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                </tr>
              </table>
  
              <div class="wan_list" ref="wan_list">
                <ul  @click="isShow_Wan_list_data_data_btn">
                  <li v-for=" item in arr_list.list">{{item.IssueNumber | slic}}</li>
                </ul>
                <ul v-for="(items,indexs) in wan_data_list">
                  <li v-for="(item,index) in items">
                    <span v-if="item == 0 " style="background:red;color : #fff;position:relative;"> 
                      {{item == 0 ? indexs : item}}
                      </span>
                    <span v-else v-show="isShow_Wan_list_data">  {{item}} </span>
                  </li>
                </ul>
               <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="my_canvas" style="width:100%;height:100%" preserveAspectRatio="xMaxYMax meet" viewBox="0 0 400 3700" >
                  <polyline id="polyline" points=""
                   style="fill:none;stroke:red;stroke-width:1"/>
                </svg>

        
              </div> -->
              <table id="zstable">
                <thead></thead>
                <tbody></tbody>
             </table>
              <div id="canvasdiv">
              </div>
                    
              <div class="bottom_list" style="margin-bottom: 0.89rem;">
                <ol>
                  <li>总共出现</li>
                  <li>最大连出</li>
                  <li>最大遗漏</li>
                  <li>平均遗漏</li>
                  <li>当前遗漏</li>
                </ol>
  
                <ol v-for="(items,indexs) in this.bottom_list" v-if="indexs < 10">
                  <li>{{items.total_appear}}</li>
                  <li>{{items.continue_max}}</li>
                  <li>{{items.omit_max}}</li>
                  <li>{{ Math.floor(items.omit_mean)}}</li>
                  <li>{{items.omit_current}}</li>
                </ol>
              </div>
            </div>
  
          </div>
  
          <div id="qianwei" class="qianwei">
            <div class="periods">
              <table class="wan_table">
                <tr>
                  <td class="periods1">期数</td>
                  <td>0</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                </tr>
              </table>
  
              <div class="wan_list">
  
                <ul  @click="isShow_Wan_list_data_data_btn">
                  <li v-for=" item in arr_list.list">{{item.IssueNumber | slic}}</li>
                </ul>
  
                <ul v-for="(items,indexs) in qian_data_list">
                  <li v-for="(item,index) in items">
                    <span v-if="item == 0 " style="background:red;color : #fff"> {{item == 0 ? indexs : item}} </span>
                    <span v-else v-show="isShow_Wan_list_data">  {{item}} </span>
                  </li>
                </ul>
  
              </div>
              <div class="bottom_list" style="margin-bottom: 0.89rem;">
                <ol>
                  <li>总共出现</li>
                  <li>最大连出</li>
                  <li>最大遗漏</li>
                  <li>平均遗漏</li>
                  <li>当前遗漏</li>
                </ol>
                <ol v-for="(items,indexs) in this.bottom_list_2" v-if="indexs < 10">
                  <li>{{items.total_appear}}</li>
                  <li>{{items.continue_max}}</li>
                  <li>{{items.omit_max}}</li>
                  <li>{{ Math.floor(items.omit_mean)}}</li>
                  <li>{{items.omit_current}}</li>
                </ol>
              </div>
  
            </div>
          </div>
  
          <div id="baiwei" class="baiwei">
            <div class="periods">
              <table class="wan_table">
                <tr>
                  <td class="periods1">期数</td>
                  <td>0</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                </tr>
              </table>
  
              <div class="wan_list">
  
                <ul   @click="isShow_Wan_list_data_data_btn">
                  <li v-for=" item in arr_list.list">{{item.IssueNumber | slic}}</li>
                </ul>
  
                <ul v-for="(items,indexs) in bai_data_list">
                  <li v-for="(item,index) in items">
                    <span v-if="item == 0 " style="background:red;color : #fff"> {{item == 0 ? indexs : item}} </span>
                    <span v-else v-show="isShow_Wan_list_data">  {{item}} </span>
                  </li>
                </ul>
              </div>
              <div class="bottom_list" style="margin-bottom: 0.89rem;">
                <ol>
                  <li>总共出现</li>
                  <li>最大连出</li>
                  <li>最大遗漏</li>
                  <li>平均遗漏</li>
                  <li>当前遗漏</li>
                </ol>
  
                <ol v-for="(items,indexs) in this.bottom_list_3" v-if="indexs < 10">
                  <li>{{items.total_appear}}</li>
                  <li>{{items.continue_max}}</li>
                  <li>{{items.omit_max}}</li>
                  <li>{{ Math.floor(items.omit_mean)}}</li>
                  <li>{{items.omit_current}}</li>
                </ol>
              </div>
  
            </div>
          </div>
  
          <div id="shiwei" class="shiwei">
            <div class="periods">
              <table class="wan_table">
                <tr>
                  <td class="periods1">期数</td>
                  <td>0</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                </tr>
              </table>
  
              <div class="wan_list">
  
                <ul  @click="isShow_Wan_list_data_data_btn">
                  <li v-for=" item in arr_list.list">{{item.IssueNumber | slic}}</li>
                </ul>
  
                <ul v-for="(items,indexs) in shi_data_list">
                  <li v-for="(item,index) in items">
                    <span v-if="item == 0 " style="background:red;color : #fff"> {{item == 0 ? indexs : item}} </span>
                    <span v-else v-show="isShow_Wan_list_data">  {{item}} </span>
                  </li>
                </ul>
              </div>
              <div class="bottom_list" style="margin-bottom: 0.89rem;">
                <ol>
                  <li>总共出现</li>
                  <li>最大连出</li>
                  <li>最大遗漏</li>
                  <li>平均遗漏</li>
                  <li>当前遗漏</li>
                </ol>
  
                <ol v-for="(items,indexs) in this.bottom_list_4" v-if="indexs < 10">
                  <li>{{items.total_appear}}</li>
                  <li>{{items.continue_max}}</li>
                  <li>{{items.omit_max}}</li>
                  <li>{{ Math.floor(items.omit_mean)}}</li>
                  <li>{{items.omit_current}}</li>
                </ol>
              </div>
  
            </div>
          </div>
  
          <div id="gewei" class="gewei">
            <div class="periods">
              <table class="wan_table">
                <tr>
                  <td class="periods1">期数</td>
                  <td>0</td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                </tr>
              </table>
  
              <div class="wan_list" >
  
                <ul  @click="isShow_Wan_list_data_data_btn">
                  <li v-for=" item in arr_list.list">{{item.IssueNumber | slic}}</li>
                </ul>
  
                <ul v-for="(items,indexs) in ge_data_list">
                  <li v-for="(item,index) in items">
                    <span v-if="item == 0"  style="background:red;color : #fff"> {{item == 0 ? indexs : item}} </span>
                    <span v-else v-show="isShow_Wan_list_data"> {{item}} </span>
                  </li>
                </ul>
              </div>
              <div class="bottom_list" style="margin-bottom: 0.89rem;">
                <ol>
                  <li>总共出现</li>
                  <li>最大连出</li>
                  <li>最大遗漏</li>
                  <li>平均遗漏</li>
                  <li>当前遗漏</li>
                </ol>
  
                <ol v-for="(items,indexs) in this.bottom_list_5" v-if="indexs < 10">
                  <li>{{items.total_appear}}</li>
                  <li>{{items.continue_max}}</li>
                  <li>{{items.omit_max}}</li>
                  <li>{{ Math.floor(items.omit_mean)}}</li>
                  <li>{{items.omit_current}}</li>
                </ol>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    </mt-loadmore>
    <!-- <canvas ref="my_canvas" style="width:100%;height:100%"> </canvas> -->
      
  </div>
</template>


<script type="text/ecmascript-6">
// import { requestOpt, dtFormate, alertip } from 'api/recommend'
import { Indicator } from "mint-ui";
import { requestOpt, dtFormate, alertip } from "api/recommend";
import GHead from "@/components/trend/g-head";
import Cathectic from "@/components/trend/cathectic";

export default {
  components: {
    Cathectic,
    GHead
  },
  data() {
    return {
      arr_list: [],
      list_length: 100,
      wan_data_list: [],
      qian_data_list: [],
      bai_data_list: [],
      shi_data_list: [],
      ge_data_list: [],
      bottom_list: [],
      bottom_list_2: [],
      bottom_list_3: [],
      bottom_list_4: [],
      bottom_list_5: [],

      isShow_Wan_list_data: true,
      isShowTable: false,
      isShowSelect_wei: false,
      topStatus: ""
    };
  },

  methods: {
    hideWei() {
      var weiLen = document.querySelector(".start").children;
      for (var i = 0; i < weiLen.length; i++) {
        weiLen[i].style.display = "none";
      }
      weiLen[0].style.display = "block";
    },
    open_btn(val) {
      this.swicthActive(val);
      this.$root.bus.$emit("sendValue", val);
    },

    wan_btn(val) {
      this.swicthActive(val);
      this.$root.bus.$emit("sendValue", val);
    },

    qian_btn(val) {
      this.swicthActive(val);
      this.$root.bus.$emit("sendValue", val);
    },

    bai_btn(val) {
      this.swicthActive(val);
      this.$root.bus.$emit("sendValue", val);
    },

    shi_btn(val) {
      this.swicthActive(val);
      this.$root.bus.$emit("sendValue", val);
    },

    ge_btn(val) {
      this.$root.bus.$emit("sendValue", val);
      this.swicthActive(val);
    },

    swicthActive(val) {
      var lis = document.querySelector(".wei_ul").children;
      const wei_len = document.querySelector(".start").children;
      for (var i = 0; i < lis.length; i++) {
        lis[i].classList.remove("red-bg");
        wei_len[i].style.display = "none";
      }
      lis[val].classList.add("red-bg");
      wei_len[val].style.display = "block";
    },

    startFn(value) {
      value = value || 100;
      document.querySelector(".mint-loadmore-top").style.marginTop = "0.4rem";
      document.querySelector(".mint-loadmore-top").style.color = "#666";
      requestOpt.reqnoGetpara(
        "lottery_trends",
        {
          params: {
            lot_type_id: 1,
            trend_type_id: 1,
            list_length: value
          }
        },

        res => {
          this.arr_list = res.data.data;
          this.isShowSelect_wei = true;
          this.wan_data_list = this.arr_list.stat[1].omits;
          this.qian_data_list = this.arr_list.stat[2].omits;
          this.bai_data_list = this.arr_list.stat[3].omits;
          this.shi_data_list = this.arr_list.stat[4].omits;
          this.ge_data_list = this.arr_list.stat[5].omits;

          this.bottom_list = this.arr_list.stat[1];
          this.bottom_list_2 = this.arr_list.stat[2];
          this.bottom_list_3 = this.arr_list.stat[3];
          this.bottom_list_4 = this.arr_list.stat[4];
          this.bottom_list_5 = this.arr_list.stat[5];
          var that = this;
          setTimeout(function() {
            that.$refs.loadmore.onTopLoaded();
          }, 800);
          that.draw_cvs();

          Indicator.close();

          // console.log(res);
        },

        function(err) {
          this.$refs.loadmore.onTopLoaded();
          Indicator.close();
          alertip(err.data.msg);
        }
      );
    },

    get_wan_wei() {},

    receiveNumber() {
      this.$root.bus.$on("numberChange", num => {
        this.startFn(num);
      });
    },

    isShow_Wan_list_data_data_btn() {
      this.isShow_Wan_list_data = !this.isShow_Wan_list_data;
    },

    loadTop() {
      this.startFn();
    },
    draw_cvs() {
      // this.CreateTable();
      // var ids = "";
      // for (var i = 1; i < 31; i++) {
      //   ids += "T" + i + "_" + Math.floor(1 + Math.random() * (31 - 1)) + ",";
      // }
      // ids = ids.substring(0, ids.length - 1);
      // this.CreateLine(ids, 20, "#ff6600", "canvasdiv", "#d5d5d5");
    },
    // CreateTable() {
    //   var tbody = "";
    //   var head = "<tr>";
    //   for (var i = 1; i < 31; i++) {
    //     head += "<th>H" + i + "</th>";
    //     tbody += "<tr>";
    //     for (var j = 1; j < 31; j++) {
    //       tbody += "<td id='T" + i + "_" + j + "'>" + j + "</td>";
    //     }
    //     tbody += "</tr>";
    //   }
    //   head += "</tr>";
    //   $("#zstable thead").html(head);
    //   $("#zstable tbody").html(tbody);
    // },

    // CreateLine(ids, w, c, div, bg) {
    //   var list = ids.split(",");
    //   for (var j = list.length - 1; j > 0; j--) {
    //     var tid = $("#" + list[j]);
    //     var fid = $("#" + list[j - 1]);
    //     var f_width = fid.outerWidth();
    //     var f_height = fid.outerHeight();
    //     var f_offset = fid.offset();
    //     var f_top = f_offset.top;
    //     var f_left = f_offset.left;
    //     var t_offset = tid.offset();
    //     var t_top = t_offset.top;
    //     var t_left = t_offset.left;
    //     var cvs_left = Math.min(f_left, t_left);
    //     var cvs_top = Math.min(f_top, t_top);
    //     tid.css("background", bg).css("color", "red");
    //     fid.css("background", bg).css("color", "red");
    //     var cvs = document.createElement("canvas");
    //     cvs.width =
    //       Math.abs(f_left - t_left) < w ? w : Math.abs(f_left - t_left);
    //     cvs.height = Math.abs(f_top - t_top);
    //     cvs.style.top = cvs_top + parseInt(f_height / 2) + "px";
    //     cvs.style.left = cvs_left + parseInt(f_width / 2) + "px";
    //     cvs.style.position = "absolute";
    //     var cxt = cvs.getContext("2d");
    //     cxt.save();
    //     cxt.strokeStyle = c;
    //     cxt.lineWidth = 1;
    //     cxt.lineJoin = "round";
    //     cxt.beginPath();
    //     cxt.moveTo(f_left - cvs_left, f_top - cvs_top);
    //     cxt.lineTo(t_left - cvs_left, t_top - cvs_top);
    //     cxt.closePath();
    //     cxt.stroke();
    //     cxt.restore();
    //     $("#" + div).append(cvs);
    //   }
    // }
  },
  created() {},

  mounted() {
    Indicator.open();

    this.startFn();
    this.hideWei();
  },

  updated() {
    this.receiveNumber();
  },

  // 判读大单 小单之类的过滤器
  filters: {
    calc: function(value) {
      if (!value) return "";
      if (value > 3 && value % 2 != 0) {
        value = "大单";
      }
      if (value < 5 && value % 2 != 0) {
        value = "小单";
      }

      if (value > 4 && value % 2 == 0) {
        value = "大双";
      }
      if (value <= 4 && value % 2 == 0) {
        value = "小双";
      }
      return value;
    },
    slic: function(value) {
      if (!value) {
        return "";
      }
      return value.substr(4);
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.start {
  width: 7.5rem;
  height: auto;
  display: block;
  background: #ffffff;
  overflow: auto;
}

// 走势内容
.start-contents {
  width: 7.5rem;
  height: auto;
  overflow: auto;
  background: #eeeeee;
  display: block;
  // padding-top: 1.56rem;
  position: relative;
  margin-bottom: 0.89rem;
}

.start-contents .start-title {
  width: 7.5rem;
  height: 0.42rem;
  // border-top: 1px solid #e1e1e1;
  // border-bottom: 1px solid #eee;
  background: #f8f8f8;
  position: fixed;
  top: 1.07rem;
  z-index: 66;
  display: block;
}

.start-contents .start-body {
  width: 7.5rem;
  height: auto;
  overflow: auto;
  display: block;
  margin-top: 0.58rem;
}

.start-contents table tr {
  width: 7.5rem;
  height: 0.5rem;
  display: block;
  line-height: 0.5rem;
}

.start-contents table tr td {
  font-size: 0.2rem;
  color: #000000;
  width: 0.66rem;
  text-align: center;
  margin: 0;
  padding: 0;
  border: none;
  display: block;
  float: left;
}

.start-contents table tr td.title-width {
  width: 1.38rem;
}

.start-contents table tr td.title-colors-red {
  color: #fa3c3c;
  letter-spacing: 1px;
}

.start-contents table tr:nth-child(odd) {
  background: #f3fbfe;
}

.start-contents table tr:nth-child(even) {
  background: #f3f2f2;
}

// 位数

// 位数
.digit {
  width: 7.5rem;
  height: 1.46rem;
  display: block;
  position: fixed;
  z-index: 40;
  background: #fff;
  overflow: hidden;
}

.digit ul {
  margin: auto;
  width: 6.9rem;
  height: auto;
  display: block;
}

.digit ul li {
  float: left;
  width: 1.18rem;
  height: 0.42rem;
  display: block;
  border: 1px solid #fa3c3c;
  line-height: 0.42rem;
  font-size: 0.24rem;
  color: #fa3c3c;
  margin-top: 0.175rem;
  border-radius: 4px;
  margin-right: 0.185rem;
  text-align: center;
}

.digit ul li:nth-child(1) {
  width: 2.63rem;
}

.digit ul li:nth-child(4) {
  margin-right: 0;
}

.digit ul li.red-bg {
  border: 1px solid #fa3c3c;
  color: #ffffff;
  background: #fa3c3c;
}

.digit .wei_ul {
  height: 100%;
  position: relative;
  z-index: 40;
}

// 其数
.periods {
  width: 7.5rem;
  height: auto;
  display: block;
  position: relative;
  // top:0.75rem
}

.periods table {
  width: 7.5rem;
  height: auto;
  display: block;
  margin-bottom: 0.88rem;
}

.periods table tr {
  width: 7.5rem;
  height: 0.68rem;
  background: #f3f2f2;
  line-height: 0.68rem;
}

.periods table tr:nth-child(odd) {
  background: #f3f2f2;
}

.periods table tr:nth-child(even) {
  background: #f3fbfe;
}

.periods tr td {
  width: 0.61rem;
  height: 0.68rem;
  font-size: 0.26rem;
  color: #323232;
  text-align: center;
  border-left: 1px solid #d9d9d9;
  font-size: 11px;
}

.periods tr td.periods1 {
  width: 1.24rem;
  border-left: 0;
  // padding: 0.2rem;
  font-size: 11px;
  box-sizing: border-box;
}

.periods table tr.aqrue-bg {
  background: #76fafe;
}

.wanwei, .qianwei {
  // margin-top: 1.46rem;
}

// ---------------------
.periods .wan_table {
  margin: 0;
}

.wan_table tr {
  display: flex;
}

.wan_table tr td {
  flex: 1;
}

.wan_table tr td:nth-child(1) {
  flex: 2;
}

.wan_list {
  display: flex;
  flex-wrap: wrap;
  position: relative;
}

.my_canvas {
  position: absolute;
  top: 0;
  // width : 100%;
  // min-height : 100%;
  // height : auto;
}

.wan_list ul {
  flex: 1;
  border-left: 1px solid #ddd;
}

.wan_list ul:nth-child(1) {
  flex: 2;
  border-left: none;
}

.periods table:nth-child(3) tr {
  display: flex;
}

.periods table:nth-child(3) tr td {
  flex: 1;
}

.periods table:nth-child(3) tr td:nth-child(1) {
  flex: 2;
}

.wan_list ul li {
  display: block;
  width: 100%;
  height: 0.68rem;
  text-align: center;
  // line-height: 0.68;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  color: #323232;
}

.wan_list ul li span {
  display: inline-block;
  width: 0.36rem;
  height: 0.36rem;
  line-height: 0.36rem;
  border-radius: 50%;
  text-align: center;
  font-size: 11px;
  color: #323232;
}

.wan_list ul li:nth-child(odd) {
  background: #f3fbfe;
}

.wan_list ul li:nth-child(even) {
  background: #f3f2f2;
}

// 最下方列表 最大遗漏等
.bottom_list {
  display: flex;
}

.bottom_list ol li {
  width: 100%;
  height: 0.68rem;
  text-align: center;
  color: #323232;
  line-height: 0.68rem;
  font-size: 11px;
  border-left: 1px solid #ddd;
}

.bottom_list ol {
  flex: 1;
}

.bottom_list ol:nth-child(1) {
  flex: 1.95;
}

.bottom_list ol:nth-child(1) li {
  border-left: none;
}

.bottom_list ol li:nth-child(odd) {
  background: #76fafe;
}

.bottom_list ol li:nth-child(even) {
  background: #f3fbfe;
}

.baiwei, .shiwei, .gewei {
  // margin-top:1.46rem;
}

.mint-loadmore {
  background: #eee;
}
</style>


