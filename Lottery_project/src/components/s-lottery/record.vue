<template>
  <div class="record_content" v-show="isShowBG" :style="{'-webkit-overflow-scrolling': scrollMode}">
    <back :title="cp_title"></back>
    <!-- -----------------上部固定------------------- -->
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
      <!-- <div class="my_infinite" v-infinite-scroll="loadBottom" infinite-scroll-disabled="loading" infinite-scroll-distance="10" infinite-scroll-immediate-check="false"> -->
      <div>
        <div class="record" v-if=" ($route.params.id != 4 && $route.params.id != 8 && $route.params.id != 9 && $route.params.id != 10 && $route.params.id != 20 && $route.params.id != 21 && $route.params.id != 22)">
          <dl v-for="items in results">
            <dt>
              <span class="record-q">第{{items.issue_number}}期</span>
              <span class="record-d">{{items.issue_date}}</span>
            </dt>
            <dd class="record-number">
              <span v-for="(item,index) in items.res"> {{ item }} </span>
            </dd>
          </dl>
        </div>
  
        <div class="record" v-if=" ($route.params.id == 4) ">
          <dl v-for="items in results">
            <dt>
                                      <span class="record-q">第{{items.issue_number}}期</span>
                                      <span class="record-d">{{items.issue_date}}</span>
                                    </dt>
            <dd class="record-number">
              <span v-for="(item,index) in items.res" v-if=" (index <= 4 )"> {{ item }} </span>
              <span v-for="(item,index) in items.res" v-if="( index > 4 )" style="background:#35b5fe"> {{ item }} </span>
            </dd>
          </dl>
        </div>
  
        <div class="record" v-if=" ($route.params.id == 8 || $route.params.id == 9  || $route.params.id == 20 ) ">
          <dl v-for="items in results">
            <dt>
                                            <span class="record-q">第{{items.issue_number}}期</span>
                                            <span class="record-d">{{items.issue_date}}</span>
                                          </dt>
            <dd class="record-number">
              <img style="width:0.42rem; height:0.42rem;vertical-align:top;margin-right:5px;" v-for="(item,index) in items.res" :src="item | transImg" />
  
            </dd>
          </dl>
        </div>
  
        <div class="record" v-if=" ($route.params.id == 10) ">
          <dl v-for="items in results">
            <dt>
                                            <span class="record-q">第{{items.issue_number}}期</span>
                                            <span class="record-d">{{items.issue_date}}</span>
                                          </dt>
            <dd class="record-number">
              <span v-for="(item,index) in items.res" v-if=" (index <= 5 )"> {{ item }} </span>
              <span v-for="(item,index) in items.res" v-if="( index > 5 )" style="background:#35b5fe"> {{ item }} </span>
            </dd>
          </dl>
        </div>
  
        <div class="record" v-if=" ($route.params.id == 21 ||  $route.params.id == 22) ">
          <dl v-for="items in results">
            <dt>
                                <span class="record-q">第{{items.issue_number}}期</span>
                                <span class="record-d">{{items.issue_date}}</span>
                            </dt>
            <dd class="record-number">
              <span v-for="(item,index) in items.res" v-if=" (index == 0 )"> {{ item }}  </span>
              <span> + </span>
              <span v-for="(item,index) in items.res" v-if=" (index == 1 )"> {{ item }}  </span>
              <span> + </span>
              <span v-for="(item,index) in items.res" v-if=" (index == 2 )"> {{ item }}  </span>
              <span> = </span>
              <span v-for="(item,index) in items.res" v-if="( index == 3 )">  {{ item }} </span>
            </dd>
          </dl>
        </div>
      </div>
    </mt-loadmore>
  
    <!-- ----------------下部固定 ------------------ -->
    <div class="record-btn">
      <router-link tag="div" class="tab-item" to="/playing">
        <dl>
          <input type="button" value="立即投注">
        </dl>
      </router-link>
    </div>
  </div>
</template>


<script type="text/ecmascript-6">
  import {
    InfiniteScroll
  } from "mint-ui";
  import {
    Toast
  } from "mint-ui";
  import {
    Indicator
  } from "mint-ui";
  import Back from "@/components/back/back";
  import Scroll from "@/components/home/scroll";
  import BScroll from "@/components/home/Bscroll";
  import {
    getRecommend,
    getDiscList,
    requestOpt,
    alertip
  } from "api/recommend";
  export default {
    components: {
      Back
    },
    data() {
      return {
        pageVal: 1,
        results: [],
        cp_list: [],
        cp_title: "重庆时时彩",
        isShowBG: false,
        // pulldown: true,
        // pullup:true,
        allLoaded: false,
        scrollMode: "auto"
      };
    },
    mounted() {
      this.startFn();
    },
    methods: {
      startFn() {

         document.querySelector(".mint-loadmore-top").style.color = "#666";
         document.querySelector(".mint-loadmore-bottom").style.color = "#666";
         document.querySelector(".mint-loadmore-bottom").style.marginBottom = "0";

         Indicator.open({
          text: "加载中...",
          spinnerType: "fading-circle"
        });
        requestOpt.reqnoGetpara(
          "lottery_results/" + this.$route.params.id, {
            params: {
              page: this.pageVal
            }
          },
  
          res => {
            Indicator.close();
            this.results = res.data.data.list;
            this.isShowBG = true;
            this.$nextTick(function() {
              // 原意是DOM更新循环结束时调用延迟回调函数，大意就是DOM元素在因为某些原因要进行修改就在这里写，要在修改某些数据后才能写，
              // 这里之所以加是因为有个坑，iphone在使用-webkit-overflow-scrolling属性，就是移动端弹性滚动效果时会屏蔽loadmore的上拉加载效果，
              // 花了好久才解决这个问题，就是用这个函数，意思就是先设置属性为auto，正常滑动，加载完数据后改成弹性滑动，安卓没有这个问题，移动端弹性滑动体验会更好
              this.scrollMode = "touch";
             
            });
  
            var that = this;
            setTimeout(function() {
              that.$refs.loadmore.onTopLoaded();
            }, 800);
          },
  
          function(err) {
            Indicator.close();
          }
        );
      },
      getTitle() {
        requestOpt.reqnoGetpara(
          "lottery_types/all", {
            params: {}
          },
  
          res => {
            Indicator.close();
            this.cp_list = res.data.data.list;
            // console.log(this.cp_list);
            // console.log(res);
            for (var i = 0; i < this.cp_list.length; i++) {
              if (this.cp_list[i].id == this.$route.params.id) {
                this.cp_title = this.cp_list[i].name;
              }
            }
          },
  
          function(err) {
            Indicator.close();
          }
        );
      },
  
      // 下拉刷新
      loadTop() {
        // console.log(11111);
        this.scrollMode = "auto";
        this.startFn();
      },
      // 无限加载
      loadBottom() {
        // this.loading = true;

         var that  = this;
        if(this.page >= this.total_pages){
          
          this.allLoaded = true;
          setTimeout(function() {
             that.$refs.loadmore.onBottomLoaded();
             that.isNoData = true;
      }, 800);
          return;
        }
        this.pageVal++;
        console.log(this.pageVal);
        requestOpt.reqnoGetpara(
          "lottery_results/" + this.$route.params.id, {
            params: {
              page: this.pageVal
            }
          },
          res => {
            // this.loading = true;
            Indicator.close();
            if (res.data.data.list.length <= 1) {
              Toast({
                message: '没有更多数据了',
                duration: 2000
              });
              this.allLoaded = true;
              // return;
            }
            console.log(this.allLoaded);
            this.results = this.results.concat(res.data.data.list);
            // this.$nextTick(function() {
            // 原意是DOM更新循环结束时调用延迟回调函数，大意就是DOM元素在因为某些原因要进行修改就在这里写，要在修改某些数据后才能写，
            // 这里之所以加是因为有个坑，iphone在使用-webkit-overflow-scrolling属性，就是移动端弹性滚动效果时会屏蔽loadmore的上拉加载效果，
            // 花了好久才解决这个问题，就是用这个函数，意思就是先设置属性为auto，正常滑动，加载完数据后改成弹性滑动，安卓没有这个问题，移动端弹性滑动体验会更好
            // this.scrollMode = "touch";
            // });

            setTimeout(function() {
              that.$refs.loadmore.onBottomLoaded();
            }, 500);
            
          },
          function(err) {
            Indicator.close();
              setTimeout(function() {
              that.$refs.loadmore.onBottomLoaded();
            }, 500);
            
          }
        );
      }
    },
    created() {
      this.getTitle();
    },
    filters: {
      transImg: function(val) {
        var imgUrl1 = require("../../images/ks@1.png");
        var imgUrl2 = require("../../images/ks@2.png");
        var imgUrl3 = require("../../images/ks@3.png");
        var imgUrl4 = require("../../images/ks@4.png");
        var imgUrl5 = require("../../images/ks@5.png");
        var imgUrl6 = require("../../images/ks@6.png");
        if (val == 1) {
          val = imgUrl1;
        } else if (val == 2) {
          val = imgUrl2;
        } else if (val == 3) {
          val = imgUrl3;
        } else if (val == 4) {
          val = imgUrl4;
        } else if (val == 5) {
          val = imgUrl5;
        } else if (val == 6) {
          val = imgUrl6;
        }
        return val;
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

ul, li {
  font-size: 20px;
  color: #000;
  line-height: 30px;
  text-align: center;
}

.record_content {
  width: 7.5rem;
  height: 13.34rem;
  display: block;
  background: #eeeeee;
  // background rgba(7, 17, 27, 0.6);
  margin-top: 0.88rem;
}

.mint-loadmore-top .mint-loadmore-text {
  font-size: 14px;
}

// 中间投注记录
.record {
  width: 7.5rem;
  height: auto;
  display: block;
  background: #eeeeee;
  // background rgba(7,17,27,0.6)
}

.record dl {
  width: 7.5rem;
  height: 1.24rem;
  border-bottom: 1px solid #eeeeee;
  display: block;
  background: #ffffff;
}

.record dl dt {
  width: 6.9rem;
  height: 0.62rem;
  display: block;
  line-height: 0.62rem;
  margin: auto;
}

.record-q {
  font-size: 0.28rem;
  color: #000000;
  float: left;
}

.record-d {
  font-size: 0.18rem;
  color: #222222;
  float: right;
  margin-right: 0.1rem;
}

.record-h {
  font-size: 0.16rem;
  color: #222222;
  float: right;
}

.record dl dd {
  width: 6.9rem;
  height: 0.62rem;
  display: block;
  margin: auto;
}

.record dl dd.record-number span {
  width: 0.36rem;
  height: 0.36rem;
  display: block;
  line-height: 0.36rem;
  font-size: 0.22rem;
  color: #ffffff;
  text-align: center;
  background: #fc3d3d;
  float: left;
  margin-right: 0.1rem;
  border-radius: 45px;
  border: none;
}

// 立即投注按钮
.record-btn {
  position: fixed;
  bottom: 0;
  width: 7.5rem;
  height: 1rem;
  background: #ffffff;
}

.record-btn dl {
  width: 6.9rem;
  height: 0.6rem;
  color: #fefefe;
  font-size: 0.24rem;
  background: #fa3c3c;
  text-align: center;
  line-height: 0.6rem;
  margin: auto;
  display: block;
  border-radius: 4px;
  margin-top: 0.2rem;
}

.record-btn input[type=button] {
  width: 6.9rem;
  height: 0.6rem;
  color: #fefefe;
  font-size: 0.24rem;
  background: none;
  text-align: center;
  line-height: 0.6rem;
  margin: auto;
  display: block;
  border: none;
  outline: none;
}

.wrapper {
  height: 100%;
}
</style>










































































