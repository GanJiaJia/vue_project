<template>
  <div class="cathectic-content">
    <div class="cathectic-alert">
      <div class="cathectic-alert-content">
        
        <table class="zs_table" style="over-flow:hidden1" v-show="isShowTable" v-for="(items,indexs) in arr_list" v-if="receiveValue == 0 && indexs == 1"> 
          <!-- v-if="indexs == receiveValue || receiveValue == 0" -->
          <!-- <tr class="cathectic-top">重庆时时彩-{{ receiveValue == 0 ? "万位" : "" || receiveValue == 1 ? "万位" : "" || receiveValue == 2 ? "千位" : "" || receiveValue == 3 ? "百位" : "" || receiveValue == 4 ? "十位" : "" || receiveValue == 5 ? "个位" : "" }}


          </tr> -->

          <tr  v-for="(item,index) in NameList" v-if=" index < 11 && $route.params.id == index + 1">
              {{item.name}}-{{item.bit_units[receiveValue >= 1 ? receiveValue - 1 : receiveValue ]}}
          </tr>

          <tr v-for="(item,index) in NameList" v-if=" index >= 11 && $route.params.id == index + 2">
            {{item.name}}-{{item.bit_units[receiveValue >= 1 ? receiveValue - 1 : receiveValue ]}}
          </tr>
          <tr class="cathectic-top2">
            <td class="blue-1">号码</td>
            <td>总共出现</td>
            <td>最大连出</td>
            <td>最大遗漏</td>
            <td>平均遗漏</td>
            <td>当前遗漏</td>
          </tr>
          <tr v-for="(item , index) in items" v-if="item instanceof Array == false">
            <td class="blue"> {{ index }}</td>
            <td>{{ item.total_appear }}</td>
            <td> {{ item.continue_max }}</td>
            <td>{{ item.omit_max }}</td>
            <td > {{ Math.floor(item.omit_mean) }} </td>
            <td>{{ item.omit_current }}</td>
          </tr>
        </table>

        <table class="zs_table" style="over-flow:hidden1" v-show="isShowTable" v-for="(items,indexs) in arr_list" v-if=" indexs == receiveValue "> 
          <!-- v-if="indexs == receiveValue || receiveValue == 0" -->
          <!-- <tr class="cathectic-top">重庆时时彩-{{ receiveValue == 0 ? "万位" : "" || receiveValue == 1 ? "万位" : "" || receiveValue == 2 ? "千位" : "" || receiveValue == 3 ? "百位" : "" || receiveValue == 4 ? "十位" : "" || receiveValue == 5 ? "个位" : "" }}


          </tr> -->

          <tr  v-for="(item,index) in NameList" v-if=" index < 11 && $route.params.id == index + 1">
              {{item.name}}-{{item.bit_units[receiveValue >= 1 ? receiveValue - 1 : receiveValue ]}}
          </tr>

          <tr v-for="(item,index) in NameList" v-if=" index >= 11 && $route.params.id == index + 2">
            {{item.name}}-{{item.bit_units[receiveValue >= 1 ? receiveValue - 1 : receiveValue ]}}
          </tr>
          <tr class="cathectic-top2">
            <td class="blue-1">号码</td>
            <td>总共出现</td>
            <td>最大连出</td>
            <td>最大遗漏</td>
            <td>平均遗漏</td>
            <td>当前遗漏</td>
          </tr>
          <tr v-for="(item , index) in items" v-if="item instanceof Array == false">
            <td class="blue"> {{ index }}</td>
            <td>{{ item.total_appear }}</td>
            <td> {{ item.continue_max }}</td>
            <td>{{ item.omit_max }}</td>
            <td > {{ Math.floor(item.omit_mean) }} </td>
            <td>{{ item.omit_current }}</td>
          </tr>
        </table>
      </div>
      <div class="select_list" v-show="isShowList">
        <ul>

          <li>
            <img src="../../images/zoushi_icon.png" @click="zoushi_table">
            <h5>走势列表</h5>
          </li>
  
          <li>
            <img src="../../images/qishu_icon.png" @click="qishu_btn">
            <h5 @click="qishu_btn">期数设置</h5>
          </li>
  
          <li>
            <img src="../../images/sign_out@2x.png" @click="hideList">
          </li>
  
        </ul>
      </div>
  
      <div class="show_qishu" @click="hideList">
        <dl>
          <dd @click="prop_value(200)">200期</dd>
          <dd @click="prop_value(100)">100期</dd>
          <dd @click="prop_value(60)">60期</dd>
          <dd @click="prop_value(30)">30期</dd>
        </dl>
        <img src="../../images/sign_out@2x.png" @click="hideList" style="width:0.96rem; height:0.96rem;">
      </div>
  
      <div class="cathectic-btn" @click='showList' v-show="!isShowList">
        <img src="../../images/see@2x.png">
      </div>
  
    </div>
    <div class="cathectic">
      <dl>
        <dt >
            <span v-for="(item,index) in NameList" v-if=" index < 11 && $route.params.id == index + 1">
              {{item.name}}
            </span>
            <span v-for="(item,index) in NameList" v-if=" index >= 11 && $route.params.id == index + 2">
              {{item.name}}
            </span>
          </dt>
        <dd @click='open'>
          <input type="button" value="去投一注">
        </dd>
      </dl>
    </div>
    <div class="cathectic1" v-show="showha">
      <ul>
        <li class="cathectic1-top">
          <router-link tag="div" class="tab-item" to="/playing">
            A盘
          </router-link>
        </li>
        <li>
          <router-link tag="div" class="tab-item" to="/playing">
            B盘
          </router-link>
        </li>
      </ul>
    </div>
    <div class='cathectic_bg'> </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    Indicator
  } from 'mint-ui';
  import {
    requestOpt,
    dtFormate,
    alertip
  } from 'api/recommend'
  export default {
    components: {},
    data() {
      return {
        all_list: [],
        arr_list: [],
        showha: false,
        isShowList: false,
        data_box_height: 0,
        isShowTable: false,
        receiveValue : 0,
        NameList : []
  
      }
    },
    methods: {
      prop_value(value) {
        this.$emit('numberChange', value);
      },
        
      open() {
        this.showha = !this.showha
      },
      showList() {
        this.isShowList = !this.isShowList;
        document.querySelector('.cathectic_bg').style.display = 'block';
        document.querySelector('.cathectic-content').style.height = '100%';
        document.querySelector('.select_list').children[0].children[0].style.display = "block";
        document.querySelector('.select_list').children[0].children[1].style.display = "block";
      },
      hideList() {
        this.isShowList = false;
        document.querySelector('.cathectic-alert-content').style.display = "none"
        document.querySelector('.show_qishu').style.display = "none";
        document.querySelector('.cathectic_bg').style.display = 'none';
        document.querySelector('.cathectic-content').style.height = 0;
      },
  
      qishu_btn() {
        // this.show_qishu = !show_qishu;
        // this.isShowList = false;
        document.querySelector('.select_list').style.display = "none";
        document.querySelector('.show_qishu').style.display = "block"
  
      },
      zoushi_table() {
        document.querySelector('.cathectic-alert-content').style.display = "block";
        document.querySelector('.select_list').children[0].children[0].style.display = "none";
        document.querySelector('.select_list').children[0].children[1].style.display = "none";
  
        Indicator.open();
        var list_id = this.$route.params.id <= 11 ? this.$route.params.id  : Number(this.$route.params.id);
        requestOpt.reqnoGetpara('lottery_trends', {
            params: {
              'lot_type_id': list_id,
              'trend_type_id': 1,
              'list_length': 100
            }
          },
  
          (res) => {
  
            this.arr_list = res.data.data.stat;
            this.isShowTable = true;
  
            // console.log(this.arr_list)
            Indicator.close()
          },
  
          function(err) {
  
            Indicator.close()
  
          });
  
      },
      receiveNumber() {
        this.$root.bus.$on('sendValue', (num) => {
          // this.receiveValue = 0 ? 1 : num - 1;
          if(num == 0 || num == 1){
            this.receiveValue = 1;
          }else{
              this.receiveValue = num
          }
          // this.receiveValue = num;
        })
      },

     getName (){
        // console.log(this.$route.params.id);
        requestOpt.reqnoGetpara('lottery_types/all', {
            params: {
              
            }
          },
  
          (res) => {
              this.NameList = res.data.data.list;
          },
  
          function(err) {
  
            Indicator.close()
  
          });
  

      }
  
    },
    mounted() {
      this.hideList();
      this.getName();
  
    },
    updated(){
      this.receiveNumber();
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';



// 期数选择

.show_qishu{

  float : right;
}

.show_qishu dl dd {

  width : 0.96rem;
  height: 0.7rem;
  line-height 0.7rem;
  text-align: center;
  background : #fff;
  color: red;
  border-bottom : 1px solid red;
  font-size:12px;
}

.show_qishu dl {
  border-top : 1px solid red;
  border-left : 1px solid red;
  border-right : 1px solid red;
  margin-bottom:10px;
}



// 背景

.cathectic_bg {

  width : 100%;
  height : 100%;
  position: absolute;

  z-index : 99;
  background : rgba(0,0,0,0.5);
  display : none ;
  overflow : hidden;
  top: 0;
}
.cathectic-content {
  width: 7.5rem;
  height: 13.34rem;
  background: none;
  position: fixed;
  top: 0;
  z-index: 50;
}

// 选择列表

.select_list {
  display block;
  float : right;
  z-index : 110;
  transform : translateY(0.3rem);
}

.select_list  ul li {

  width : 0.96rem;
  height : 1.3rem;

}

.select_list  ul li h5 {

  font-size : 10px;
  text-align : center;
  color: #fff;
}
.select_list  li  img {

  width : 0.96rem;  
  height : 0.96rem;
}

// 弹出排列
.cathectic-alert {
  width: 6.9rem;
  height: auto;
  position: fixed;
  bottom: 2.5rem;
  left: 0.3rem;
  display: block;
  z-index: 110;
}

.cathectic-alert-content {
  width: 6.9rem;
  display: block;
  z-index: 110;
  background: #f3f1f2;
  max-height: 5rem;
  // overflow: hidden;
  overflow: auto;
  display: none;
}

.cathectic-alert-content tr {
  width: 6.86rem;
  height: 0.41rem;
  display: block;
  line-height: 0.42rem;
  text-align: center;
  font-size: 0.24rem;
  color: #e97647;
  border-left: 1px solid #e97647;
  border-right: 1px solid #e97647;
  border-bottom: 1px solid #e97647;
}

.cathectic-top {
  border-top: 1px solid #e97647;
}

.cathectic-alert-content tr td {
  color: #fa3c3c;
  width: 1.13rem;
  border-left: 1px solid #e97647;
  line-height: 0.42rem;
  height: 0.42rem;
}

.cathectic-alert-content tr.cathectic-top2 td {
  color: #e97647;
}

.cathectic-alert-content tr td.blue {
  color: #61b3e2;
  border-left: 0;
}

.cathectic-alert-content tr td.blue-1 {
  border-left: 0;
}

.cathectic-btn {
  width: 0.96rem;
  height: 0.96rem;
  display: block;
  float: right;
  margin-top: 0.16rem;
  z-index: 110;
}

.cathectic-btn img {
  width: 0.96rem;
  height: 0.96rem;
  display: block;
  float: right;
  z-index: 110;
}

// 去投注
.cathectic {
  display: flex;
  height: 0.88rem;
  font-size: 0.24rem;
  width: 7.5rem;
  background: #ffffff;
  position: fixed;
  bottom: 0;
  text-align: center;
  z-index: 40;
}

.cathectic dl {
  width: 7.5rem;
  height: 0.88rem;
  display: block;
  float: left;
  line-height: 0.88rem;
}

.cathectic dl dt {
  width: 6rem;
  height: 0.88rem;
  display: block;
  float: left;
  text-align: left;
  border-top: 1px solid #eeeeee;
}

.cathectic dl dt span {
  display: block;
  float: left;
  margin-left: 0.3rem;
  text-align: left;
  color: #323232;
  font-size: 0.24rem;
}

.cathectic dl dd {
  width: 1.5rem;
  height: 0.88rem;
  display: block;
  float: right;
  background: #fa3c3c;
  border-top: 1px solid #fa3c3c;
}

.cathectic dl dd input {
  width: 1.5rem;
  height: 0.88rem;
  display: block;
  float: right;
  font-size: 0.24rem;
  color: #ffffff;
  background: none;
  border: none;
  outline: none;
  line-height: 0.88rem;
}

// A.B盘
.cathectic1 {
  width: 1.5rem;
  height: 1.36rem;
  z-index: 99;
  display: block;
  right: 0;
  position: fixed;
  bottom: 0.88rem;
  background: #ffffff;
}

.cathectic1 ul li {
  border-right: 0;
  border-radius: 2px;
  width: 1.5rem;
  height: 0.68rem;
  font-size: 0.24rem;
  color: #000000;
  text-align: center;
  background: #ffffff;
  line-height: 0.69rem;
  border: 1px solid #eeeeee;
}

.cathectic1 ul li.cathectic1-top {
  border-bottom: 0;
}
.zs_table{
  overflow-Y : scroll;
}
</style>
