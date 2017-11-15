<template>
  <div class="lottery-content">
    <div class="lottery-head">
      <ul>
        <li class="lottery-head1"></li>
        <li class="lottery-head2">购彩大厅</li>
        <router-link tag="div" class="tab-item" to="/lottery1">
          <li class="lottery-head3">
            <img class="" src="../../images/transverse.png">
          </li>
        </router-link>
      </ul>
    </div>
    <!--全部采种-->
    <div class="lottery-all">
      <ul>
        <li :class="{active:tabActive==item.code}" v-for="(item,i) in tabs" @click="tabsel(item.code)">{{item.name}}</li>
        <!--<li class="all">全部彩种</li>
        <li class="high">高频彩</li>
        <li class="low">低频彩</li>-->
      </ul>
    </div>
    <!--<transverse></transverse>-->
    <vertical></vertical>
    <tab></tab>
  </div>
</template>


<script type="text/ecmascript-6">
  import Transverse from '@/components/lottery/transverse'
  import Vertical from '@/components/lottery/vertical'
  import Tab from '@/components/tab/tab'
  export default {
    components: {
      Transverse,
      Vertical,
      Tab,
    },
    data() {
      return {
        tabs: [{
          name: '全部彩种',val: 3, code: 'all'
        }, {
          name: '高频彩',val: 3, code: 'high'
        }, {
          name: '低频彩',val: 3, code: 'low'
        }],
        tabTxt: '全部彩种',
        tabActive: 'all'
      }
    }
  }
</script>

<style scoped>
  .lottery-content{
    width: 7.5rem;
    height: 13.34rem;
    display: block;
    background: #eeeeee;
  }
  .lottery-head{
    width: 7.5rem;
    height: 0.88rem;
    display: block;
    margin: auto;
    background :#ff3a3b;
    position: fixed;
    top:0;
    z-index: 99;
  }
  .lottery-head ul{
    width: 6.9rem;
    height: 0.88rem;
    display: block;
    margin: auto;
    line-height: 0.88rem;
  }
  .lottery-head ul li{
    float: left;
    height: 0.88rem;
    display: block;
  }
  .lottery-head1{
    width: 2rem
  }
  .lottery-head2{
    width :2.9rem;
    text-align: center;
    font-size : 0.32rem;
    font-weight :normal;
    color: #ffffff;
  }
  .lottery-head3{
    width: 2rem;
    text-align: right;
  }
  .lottery-head3 img{
    display: inline-block;
    width: 0.46rem;
    height: 0.39rem;
    position: relative;
    float: right;
    top: 0.245rem;
  }
  .lottery-all ul li{
    float: left;
    width: 33.33%;
    font-size: 0.24rem;
    text-align: center;
  }
  .lottery-all ul li.active {
    color: #ff3a3b;
  }
  .lottery-head1{
    width: 2rem
  }
  .lottery-head2{
    width :2.9rem;
    text-align: center;
    font-size : 0.32rem;
    font-weight :normal;
    color: #ffffff;
  }
  .lottery-head3{
    width: 2rem;
    text-align: right;
  }
  .lottery-head3 img{
    display: inline-block;
    width: 0.46rem;
    height: 0.39rem;
    position: relative;
    float: right;
    top: 0.245rem;
  }
  /*采种分类*/
  .lottery-all{
    width: 7.5rem;
    height: 0.68rem;
    background: #222222;
    display: block;
    position: fixed;
    top:0.88rem;
    z-index: 99;
  }
  .lottery-all ul{
    width: 6.9rem;
    display: block;
    margin: auto;
    line-height: 0.68rem;
    height: 0.68rem;
  }
  .lottery-all ul li{
    float: left;
    font-size: 0.24rem;
    text-align: center;
  }
  li.all{
    width: 2rem;
    color: #ff3a3b;
  }
  li.high{
    width: 2.9rem;
    color: #ffffff;
  }
  li.low{
    width: 2rem;
    color: #ffffff;
  }


</style>


