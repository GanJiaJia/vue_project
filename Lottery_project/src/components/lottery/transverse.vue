<template>
<div class="transverse">
  <!--彩种详情-->
  <div class="lottery">
    <router-link tag="div" class="tab-item" to="/record">
      <dl class="lottery-list" v-for="lottyList in results">
        <dt class="lottery-images"><img :src="lottyList.pic" alt=""></dt>
        <dd class="lottery-show">
          <dl>
            <dt class="lottery-top">
              <span class="l"> {{lottyList.name}}</span>
              <span class="r">第{{lottyList.issue_number}}期</span>
            </dt>
            <dd class="lottery-middle">
              <p v-if="lottyList.curr_draw_res">{{lottyList.curr_draw_res}}</p>
              <div class="wait-open" v-else-if="lottyList.curr_draw_res==''&&lottyList.number1===''">等待开奖</div>
              <p v-else>
                <span v-if="lottyList.number1">{{lottyList.number1}}</span>
                <span v-if="lottyList.number2">{{lottyList.number2}}</span>
                <span v-if="lottyList.number3">{{lottyList.number3}}</span>
                <span v-if="lottyList.number4">{{lottyList.number4}}</span>
                <span v-if="lottyList.number5">{{lottyList.number5}}</span>
                <span v-if="lottyList.number6">{{lottyList.number6}}</span>
                <span v-if="lottyList.number7">{{lottyList.number7}}</span>
                <span v-if="lottyList.number8">{{lottyList.number8}}</span>
                <span v-if="lottyList.number9">{{lottyList.number9}}</span>
                <span v-if="lottyList.number10">{{lottyList.number10}}</span>
                <span v-if="lottyList.number11">{{lottyList.number11}}</span>
                <span v-if="lottyList.number12">{{lottyList.number12}}</span>
              </p>

            </dd>
            <dd class="lottery-bottom">
              <span class="l">距离第{{lottyList.curr_issue_number}}期截止还有</span>
              <span class="r">{{lottyList.curr_count_down | transCountTime}}</span>
            </dd>
          </dl>
        </dd>
        <dd class="lottery-images2"><img src="../../images/my_more.png" alt="右箭头"></dd>
      </dl>
    </router-link>
  </div>
</div>
</template>
<script type="text/ecmascript-6">
  import {getRecommend, getDiscList, requestOpt, alertip} from 'api/recommend'
  import {formatDate} from '../../api/mdata'
  export default {
    data() {
      return {
        results:[]
      }
    },
    beforeRouteLeave(to, from, next) {
      console.log(from)
      clearInterval(this.getLottery())
      next()
    },

    methods: {
      getLottery() {
        requestOpt.reqnoGet('betting_list_v1?page=', (res) => {
          this.results = res.data.data.list;
//          console.log(this.results)
        }, (err) => {
          alertip(err)
        });
      }
    },
    mounted(){
      this.getLottery();
      /*setInterval(() => {
        this.getLottery();
      },1000)*/
    },
    //    时间过滤
    filters: {
      formatDate(time) {
        let date = new Date(time);
        return formatDate(date, 'hh:mm:ss');
      }
    }
  }
</script>

<style scoped>
  .transverse{
    width: 7.5rem;
    height: 13.34rem;
    display: block;
    overflow: auto;
  }
  /*l彩票种类详情*/
  .lottery{
    width: 7.5rem;
    height: auto;
    background: #eeeeee;
    display: block;
    margin-top: 1.56rem;
    margin-bottom: 0.98rem;
  }
  .lottery dl.lottery-list{
    width: 7.5rem;
    height: 1.24rem;
    background: #ffffff;
    display: block;
    border-bottom: 1px solid #eeeeee;
  }

  /*彩票图片*/
  .lottery dl.lottery-list dt.lottery-images{
    width: 0.76rem;
    height: 0.76rem;
    background: #ffffff;
    display: block;
    margin-left: 0.3rem ;
    float: left;
    margin-top: 0.24rem;
  }
  .lottery-images img{
    width: 0.76rem;
    height: 0.76rem;
    display: block;
    float: left;
    border: none;
    border-radius: 45px;
  }

  /*中间数据*/
  .lottery dl.lottery-list dd.lottery-show{
    width: 5.68rem;
    height: 1.24rem;
    float:left;
    display: block;
    margin-left: 0.2rem;
    margin-right: 0.08rem;
  }
  .lottery-show dl{
    width: 5.68rem;
    height: 1.24rem;
    display: block;
  }
  .lottery-show dt.lottery-top{
    width: 5.68rem;
    height: 0.44rem;
    display: block;
    line-height: 0.44rem;
  }
  .lottery-show dd.lottery-middle{
    width: 5.68rem;
    height: 0.4rem;
    display: block;
    background: #ffffff;
    line-height: 0.4rem;
  }
  .lottery-show dd.lottery-bottom{
    width: 5.68rem;
    height: 0.4rem;
    display: block;
    line-height: 0.4rem;
  }
  /*种类其数*/
  .lottery-show dt.lottery-top span.l{
    font-size: 0.24rem;
    display: block;
    float: left;
    color: #323232;
    font-weight: bold;
  }
  .lottery-show dt.lottery-top span.r{
    font-size: 0.14rem;
    display: block;
    float: right;
    color: #ff3a3b;
    font-weight: normal;
  }
  .lottery-show dd.lottery-middle p.color-b{
    font-size: 0.14rem;
    display: block;
    text-align: left;
    color: #35b5fe;
    font-weight: normal;
  }
  .lottery-show dd.lottery-middle p.color-h{
    font-size: 0.14rem;
    display: block;
    text-align: left;
    color: #ff3a3b;
    font-weight: normal;
  }

  /*中奖中奖的彩票的号码*/

  .lottery-show dd.lottery-middle{
    font-size: 0.14rem;
    float: left;
    color: #fc823c;
  }
  .lottery-show dd.lottery-middle span{
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
  .lottery-show dd.lottery-middle img{
    width: 0.42rem;
    height: 0.42rem;
    display: block;
    line-height: 0.42rem;
    text-align: center;
    float: left;
    margin-right: 0.1rem;
    border: none;
  }



  /*距离开奖时间*/
  .lottery-show dd.lottery-bottom span.l{
    font-size: 0.14rem;
    display: block;
    float: left;
    color: #323232;
    font-weight: normal;
  }
  .lottery-show dd.lottery-bottom span.r{
    font-size: 0.14rem;
    display: block;
    float: right;
    color: #323232;
    font-weight: normal;
  }







  /*箭头*/
  .lottery dl.lottery-list dd.lottery-images2{
    width: 0.18rem;
    height: 0.3rem;
    float: right;
    display: inline-block;
    margin-right: 0.3rem;
  }
  .lottery dl.lottery-list dd.lottery-images2 img{
    width: 0.18rem;
    height: 0.3rem;
    float: right;
    display: inline-block;
    margin-top: 0.47rem;
  }

</style>


