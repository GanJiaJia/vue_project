<template>
  <!--走势-->
  <div v-show="isShowSelect_wei">
    <!--位数-->
    <GHead></GHead>
    <div class="digit" v-show="isShowSelect_wei">
  
      <ul class="wei_ul">
        <li class="zero-li red-bg" @click="open_btn(0)">开奖结果</li>
        <li class="one-li" @click="wan_btn(1)">万位</li>
        <!-- <router-link >万位</router-link> -->
        <li class="two-li" @click="qian_btn(2)">千位</li>
        <li class="three-li" @click="bai_btn(3)">百位</li>
        <li class="four-li" @click="shi_btn(4)">十位</li>
        <li class="five-li" @click="ge_btn(5)">个位</li>
      </ul>>
    </div>
    <mt-loadmore :top-method="loadTop" :auto-fill="false" ref="loadmore">
      <div>
        <div class="start" v-show="isShowSelect_wei">
          <!--其数-->
          <div class="start-contents">
            <div class="start-title">
              <table>
                <tr class="start-contents1-title" v-for="(items,indexs) in start_list_box" v-if="indexs==0">
                  <td class="title-width" v-for="(item,index) in items.titles" v-if="index == 0">{{item}}</td>
                  <td class="title-width" v-for="(item,index) in items.titles" v-if="index == 1">{{item}}</td>
                  <td v-for="(item,index) in items.titles" v-if="index == 2">
                    <span v-for="(ite,inde) in item" v-if="inde == 0"> {{ ite }}</span>
                  </td>
    
                  <td v-for="(item,index) in items.titles" v-if="index == 2">
                    <span v-for="(ite,inde) in item" v-if="inde == 1"> {{ ite }}</span>
                  </td>
    
                  <td v-for="(item,index) in items.titles" v-if="index == 2">
                    <span v-for="(ite,inde) in item" v-if="inde == 2"> {{ ite }}</span>
                  </td>
    
                  <td v-for="(item,index) in items.titles" v-if="index == 2">
                    <span v-for="(ite,inde) in item" v-if="inde == 3"> {{ ite }}</span>
                  </td>
    
                  <td v-for="(item,index) in items.titles" v-if="index == 2">
                    <span v-for="(ite,inde) in item" v-if="inde == 4"> {{ ite }}</span>
                  </td>
    
                  <td v-for="(item,index) in items.titles" v-if="index == 3">
                    {{item}}
                  </td>
                  <td v-for="(item,index) in items.titles" v-if="index == 4" style="flex:1.5">
                    {{item}}
                  </td>
    
                  <!-- <td>跨度</td>
                  <td class="title-width">形态</td>
                  <td>百位</td>
                  <td>十位</td>
                  <td>个位</td>
                  <td>重号</td> -->
                </tr>
              </table>
            </div>
    
            <div class="start-body">
              <table>
                <tr v-for="(items,indexs) in start_list_box" v-if="(indexs!= 30 && indexs != 60 && indexs != 100 && indexs != 200)">
                  <td class="title-width">{{items.issue_number}}</td>
                  <td class="title-colors-red title-width">
                    <span v-for="(item,index) in items.res">{{item}}</span>
                  </td>
    
                  <td>
                    <span v-for="(item,index) in items.bit_modes" v-if="index==0">{{item}}</span>
                  </td>
    
                  <td>
                    <span v-for="(item,index) in items.bit_modes" v-if="index==1">{{item}}</span>
                  </td>
    
    
                  <td>
                    <span v-for="(item,index) in items.bit_modes" v-if="index==2">{{item}}</span>
                  </td>
    
                  <td>
                    <span v-for="(item,index) in items.bit_modes" v-if="index==3">{{item}}</span>
                  </td>
                  <td>
                    <span v-for="(item,index) in items.bit_modes" v-if="index==4">{{item}}</span>
                  </td>
                  <td>
                    {{items.prev3_form}}
                  </td>
                  <td style="flex:1.5">
                    {{items.post3_form}}
                  </td>
    
    
                  <!-- <td>{{indexs}}</td> -->
                  <!-- <td>{{items.span}}</td>
                  <td>{{items.kuai3_form}}</td> -->
                  <!-- <td>{{items.dxds}}</td> -->
                  <!-- <td v-for="(item,index) in items.bit_modes" v-if="index == 0">{{item}}</td>
                  <td v-for="(item,index) in items.bit_modes" v-if="index == 1">{{item}}</td>
                  <td v-for="(item,index) in items.bit_modes" v-if="index == 2">{{item}}</td>
                  <td>{{items.duplicate_num}}</td> -->
                </tr>
              </table>
            </div>
          </div>
    
          <div id="wanwei" class="wanwei">
            <!-- </br> -->
            <div class="periods">
              <table class="wan_table">
                <tr>
                  <td class="periods1" style="flex:2.05">期数</td>
                  <td v-for=" n in  10 ">{{ n - 1 }}</td>
                </tr>
              </table>
  
              <div class="wan_list" ref="wan_list" >
                <div class="wan_table_2">
                  <table  @click="isShow_Wan_list_data_data_btn"  >
                    <tr v-for=" item in arr_list.list"> <td> {{item.IssueNumber }} </td></tr>
                  </table>
                </div>
                <div class="wan_table_3" style="position:relative;">
                    <table>
                      <tbody>
                          <tr v-for="(items, indexs) in wan_data_list">
                              <td v-for="(item,index) in items">
                                <span v-if=" item == 0" style="background:red;color:#fff;z-index:4" >
                                  {{item == 0 ? index : item }}
                                </span>
                                <span v-else v-show="isShow_Wan_list_data">  {{item}} </span>
                              </td>
                          </tr>
                      </tbody>
                    </table> 
                    <div style="position:absolute;width:100%;height:100%;left:0;top:0;" id="canvas_wan">
                    </div> 
                </div>
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
                  <td class="periods1" style="flex:2.05">期数</td>
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
  
              <div class="wan_list" ref="wan_list" >
                <div class="wan_table_2">
                  <table  @click="isShow_Wan_list_data_data_btn"  >
                    <tr v-for=" item in arr_list.list"> <td> {{item.IssueNumber }} </td></tr>
                  </table>
                </div>

                <div class="qian_table_3 wan_table_3 " style="position:relative;">
                    <table>
                      <tbody>
                          <tr v-for="(items, indexs) in qian_data_list">
                              <td v-for="(item,index) in items">
                                <span v-if=" item == 0" style="background:red;color:#fff;z-index:4">
                                  {{item == 0 ? index : item }}
                                </span>
                                <span v-else v-show="isShow_Wan_list_data">  {{item}} </span>
                              </td>
                          </tr>
                      </tbody>
                    </table> 
                    <div style="position:absolute;width:100%;height:100%;left:0;top:0;" id="canvas_qian">
                    </div> 
                </div>
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
  
          <div id="baiwei" class="baiwei">
             <div class="periods">
              <table class="wan_table">
                <tr>
                  <td class="periods1" style="flex:2.05">期数</td>
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
  
              <div class="wan_list" ref="wan_list" >
                <div class="wan_table_2">
                  <table  @click="isShow_Wan_list_data_data_btn"  >
                    <tr v-for=" item in arr_list.list"> <td> {{item.IssueNumber }} </td></tr>
                  </table>
                </div>

                <div class="wan_table_3 bai_table_3" style="position:relative;">
                    <table>
                      <tbody>
                          <tr v-for="(items, indexs) in bai_data_list">
                              <td v-for="(item,index) in items">
                                <span v-if=" item == 0" style="background:red;color:#fff;z-index:4">
                                  {{item == 0 ? index : item }}
                                </span>
                                <span v-else v-show="isShow_Wan_list_data">  {{item}} </span>
                              </td>
                          </tr>
                      </tbody>
                    </table> 
                    <div style="position:absolute;width:100%;height:100%;left:0;top:0;" id="canvas_bai">
                    </div> 
                </div>
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
  
          <div id="shiwei" class="shiwei">
            <div class="periods">
              <table class="wan_table">
                <tr>
                  <td class="periods1" style="flex:2.05">期数</td>
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
  
              <div class="wan_list" ref="wan_list" >
                <div class="wan_table_2">
                  <table  @click="isShow_Wan_list_data_data_btn"  >
                    <tr v-for=" item in arr_list.list"> <td> {{item.IssueNumber }} </td></tr>
                  </table>
                </div>

                <div class="wan_table_3 shi_table_3" style="position:relative;">
                    <table>
                      <tbody>
                          <tr v-for="(items, indexs) in shi_data_list">
                              <td v-for="(item,index) in items">
                                <span v-if=" item == 0" style="background:red;color:#fff;z-index:4">
                                  {{item == 0 ? index : item }}
                                </span>
                                <span v-else v-show="isShow_Wan_list_data">  {{item}} </span>
                              </td>
                          </tr>
                      </tbody>
                    </table> 
                    <div style="position:absolute;width:100%;height:100%;left:0;top:0;" id="canvas_shi">
                    </div> 
                </div>
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
  
          <div id="gewei" class="gewei">
            <div class="periods">
              <table class="wan_table">
                <tr>
                  <td class="periods1" style="flex:2.05">期数</td>
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
  
              <div class="wan_list" ref="wan_list" >
                <div class="wan_table_2">
                  <table  @click="isShow_Wan_list_data_data_btn"  >
                    <tr v-for=" item in arr_list.list"> <td> {{item.IssueNumber}} </td></tr>
                  </table>
                </div>

                <div class="wan_table_3  ge_table_3" style="position:relative;">
                    <table>
                      <tbody>
                          <tr v-for="(items, indexs) in ge_data_list">
                              <td v-for="(item,index) in items">
                                <span v-if=" item == 0" style="background:red;color:#fff;z-index:4">
                                  {{item == 0 ? index : item }}
                                </span>
                                <span v-else v-show="isShow_Wan_list_data">  {{item}} </span>
                              </td>
                          </tr>
                      </tbody>
                    </table> 
                    <div style="position:absolute;width:100%;height:100%;left:0;top:0;" id="canvas_ge">
                    </div> 
                </div>
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

        </div>
      </div>
    </mt-loadmore>
   <cathectic v-on:numberChange="receiveNumber"></cathectic>
  </div>
</template>


<script type="text/ecmascript-6">
  // import { requestOpt, dtFormate, alertip } from 'api/recommend'
  import {
    Indicator
  } from 'mint-ui';
  import {
    requestOpt,
    dtFormate,
    alertip
  } from 'api/recommend'
  import GHead from '@/components/trend/g-head'
  import Cathectic from '@/components/trend/cathectic'
  
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
      start_list_box: [],
      isShow_Wan_list_data: true,
      isShowTable: false,
      isShowSelect_wei: false,
      my_num:100,
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
      this.startFn();
    },

    wan_btn(val) {
      this.swicthActive(val);
      this.$root.bus.$emit("sendValue", val);
      this.startFn();
    },

    qian_btn(val) {
      this.swicthActive(val);
      this.$root.bus.$emit("sendValue", val);
      this.startFn();
    },

    bai_btn(val) {
      this.swicthActive(val);
      this.$root.bus.$emit("sendValue", val);
      this.startFn();
    },

    shi_btn(val) {
      this.swicthActive(val);
      this.$root.bus.$emit("sendValue", val);
      this.startFn();
    },

    ge_btn(val) {
      this.$root.bus.$emit("sendValue", val);
      this.swicthActive(val);
      this.startFn();
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

    startFn() {

      var list_id = this.$route.params.id;
          
      requestOpt.reqnoGetpara(
        "lottery_trends",
        {
          params: {
            lot_type_id: list_id,
            list_length: this.my_num,
            trend_type_id: 1
          }
        },

        res => {
          this.arr_list = res.data.data;
          this.isShowSelect_wei = true;
          var len  = res.data.data.list.length;
          this.wan_data_list  = this.translate_arr(this.arr_list.stat[1].omits,len);
          this.qian_data_list  = this.translate_arr(this.arr_list.stat[2].omits,len);
          this.bai_data_list  = this.translate_arr(this.arr_list.stat[3].omits,len);
          this.shi_data_list  = this.translate_arr(this.arr_list.stat[4].omits,len);
          this.ge_data_list  = this.translate_arr(this.arr_list.stat[5].omits,len);
         
          this.bottom_list = this.arr_list.stat[1];
          this.bottom_list_2 = this.arr_list.stat[2];
          this.bottom_list_3 = this.arr_list.stat[3];
          this.bottom_list_4 = this.arr_list.stat[4];
          this.bottom_list_5 = this.arr_list.stat[5];
      
          var that = this;
          document.querySelector(".mint-loadmore-top").style.marginTop = "1.3rem";
          document.querySelector(".mint-loadmore-top").style.color = "#666";
          
            // var value = this.my_num;
            setTimeout(function() {
              that.draw_cvs(len,'.wan_table_3','#my_draw_wan','#canvas_wan',that.wan_data_list);
            }, 50);
            setTimeout(function() {
              that.draw_cvs(len,'.qian_table_3','#my_draw_qian','#canvas_qian',that.qian_data_list);
            }, 50);
            setTimeout(function() {
              that.draw_cvs(len,'.bai_table_3','#my_draw_bai','#canvas_bai',that.bai_data_list);
            }, 50);
         
            setTimeout(function() {
              that.draw_cvs(len,'.shi_table_3','#my_draw_shi','#canvas_shi',that.shi_data_list);
            }, 100);

            setTimeout(function() {
              that.draw_cvs(len,'.ge_table_3','#my_draw_ge','#canvas_ge',that.ge_data_list);
            }, 100);

           setTimeout(function(){
              that.$refs.loadmore.onTopLoaded();
            },500)

            Indicator.close();
        },

        function(err) {
          //  this.$refs.loadmore.onTopLoaded();
           Indicator.close();
           alertip(err.data.msg);
        }
      );

      requestOpt.reqnoGetpara(
        "lottery_results_and_forms/" + list_id,
        {
          params: {
            list_length: this.my_num
          }
        },

        res => {
          Indicator.close();
          this.start_list_box = res.data.data.list;
          // console.log(this.start_list_box);
        },

        function(err) {
          Indicator.close();
          alertip(err.data.msg);
        }
      );
    },

       // 期数
      receiveNumber(num) {
        this.my_num = num;
        this.startFn();
      },
  
      isShow_Wan_list_data_data_btn() {
        this.isShow_Wan_list_data = !this.isShow_Wan_list_data;
      },
      
      loadTop() {
        this.startFn();
      },

      draw_cvs(num,className,id,id_box,data){
        // num = num || 100;
        var myCanvas = document.createElement("canvas");
        myCanvas.setAttribute("width", $(className).width());
        myCanvas.setAttribute("height", $(className).height());
        myCanvas.setAttribute("id", id);
        myCanvas.style.position = 'absolute';
        myCanvas.style.top = 0;
        myCanvas.style.left = 0;
        $(id_box).html(myCanvas);
              var width  = $(id_box).width();
              var height  = $(id_box).height();
              var x_f = width / 10;
              var y_f  = height / num;
              var cxt_wan = document.getElementById(id).getContext("2d");
              cxt_wan.strokeStyle = 'red';
              cxt_wan.lineWidth = 1;
                 for(var i = 0; i < data.length; i++){
                  for(var j = 0; j < data[i].length; j++){
                    if(data[i][j] == 0){
                      if(i == 0){
                         cxt_wan.moveTo(x_f*(j+1) - x_f/2,  y_f*0 + y_f/2);
                      }
                      cxt_wan.lineTo( x_f * (j+1) - x_f/2 ,(y_f*i) + y_f/2);
                    }
                  }
                }
               cxt_wan.stroke();
      },
      // 把纵向数组变成横向数组
      translate_arr(wei_arr,num){
          var arr_all_1 = [];
            for(var j = 0;  j < num; j++){
              var arr = [];
              for(var i = 0; i < wei_arr.length; i++){
                arr.push(wei_arr[i][j]) 
              }
              arr_all_1.push(arr);
          }
            wei_arr = arr_all_1
            return wei_arr;
        }
    },

    mounted() {
      Indicator.open();
      this.hideWei();
      // this.startFn();
      this.startFn();
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
  }
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
  padding-top: 0.56rem;
  position: relative;
  margin-bottom: 0.89rem;
  // border-top: 1px solid #e1e1e1;
}

.start-contents .start-title {
  width: 7.5rem;
  height: 0.42rem;
  border-top: 1px solid #e1e1e1;
  // border-bottom: 1px solid #eee;
  background: #f8f8f8;
  position: fixed;
  top: 1.03rem;
  z-index: 44;
  display: block;
}

.start-contents .start-body {
  width: 7.5rem;
  height: auto;
  overflow: auto;
  display: block;
  // margin-top: 0.41rem;
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
  top:0.88rem;
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

// 期数
table tr{
  height : 35px;
  line-height:35px;
}
table tr td  {
  color : #000;
}
.wan_table {
  width : 100%;
}
.wan_table tr {
  display : flex;
}

.wan_table tr td{
  flex : 1;
  text-align : center;
  border-left: 1px solid #ddd;
}
.wan_table tr td:nth-child(1){
  flex: 2
  border-left: none;
}

.wan_table tr:nth-child(odd) {
  background: #f3f2f2;
}

.wan_table table tr:nth-child(even) {
  background: #f3fbfe;
}

.wan_list table tr:nth-child(odd) {
  background: #f3fbfe;
}

.wan_list table tr:nth-child(even) {
  background: #f3f2f2;
}

// 中间数据

.wan_list{
  display:flex;
}
.wan_list .wan_table_2{
  flex: 2;
}
.wan_list .wan_table_3{
  flex : 10;
  position:relative;
}

.wan_table_2>table, .wan_table_3>table{
  width: 100%;
}

.wan_table_2 table tr , .wan_table_3 table tr{
  width : 100%;
}
.wan_table_2 table tr td , .wan_table_3 table tr td{
  text-align: center;
}

.wan_table_3 table tr td{
  border-left: 1px solid #ddd;
  position:relative;
}
.wan_table_3 table tr td span{
  display : inline-block;
  width:.4rem;
  height:.4rem;
  border-radius:50%;
  position : absolute;
  top: 50%;
  left:50%;
  margin-top: -.2rem;
  margin-left: -.2rem;
  // transform: translate(-50%,-50%);
  line-height : .4rem;
}

.wan_table_3 table tr td span canvas{
  position: absolute;
  left: 0;
  top:0;
  z-index:3;
}


// 最下方列表 最大遗漏等

.bottom_list {
  display : flex;
}

.bottom_list ol li{
  width : 100%;
  height 0.68rem;
  text-align: center;
  color :#323232;
  line-height :0.68rem;
  font-size : 11px;
  border-left : 1px solid #ddd;
}
.bottom_list ol {
  flex  : 1;
}

.bottom_list ol:nth-child(1) {
  flex  : 1.95;
}

.bottom_list ol:nth-child(1) li{
 border-left : none;
}



.bottom_list ol li:nth-child(odd) {
  background: #76fafe;
}

.bottom_list ol li:nth-child(even) {
  background: #f3fbfe;
}
.baiwei, .shiwei,.gewei{
  // margin-top:1.46rem;
}

.mint-loadmore{
  background:#eee;
}


.trend-content{
  margin-top:.88rem;
}

</style>


