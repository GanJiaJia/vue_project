<template>
  <div class="activity-content">
    <!--头部-->
    <div class="activity-head">
      <ul>
        <li class="activity-head1">
          <a  onclick="history.go(-1)" >
            <img src="../../images/Return-@2x.png" alt="">
          </a>
        </li>
        <li class="activity-head2">
          新用户注册送彩金100元
        </li>
        <li class="activity-head3">
          <img src="../../images/shuaxin.png" alt="" onclick="document.execCommand('Refresh') ">
        </li>
      </ul>
    </div>
    <!--渲染列表-->
    <div class="activity" v-html="data">
      {{data}}
    </div>
  </div>
</template>


<script type="text/ecmascript-6">
  import {getRecommend, getDiscList, requestOpt, alertip} from 'api/recommend'

  export default {
    components: {

    },
    //data
    data() {
      return {
        data : []
      }
    },
//    调取后台数据
    mounted(){
      requestOpt.reqnoGetpara('activity?act_id=1', {
        data : []
      }, (res) => {
        this.data = res.data;
      }, (err) => {
        alertip(err)
      });
    }
    //
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .activity-content{
    width :7.5rem;
    height: 13.34rem;
    display block
    overflow auto
    background #eeeeee
  }
//    头部样式

  .activity-head{
    width: 7.5rem;
    height: 0.88rem;
    display: block;
    margin: auto;
    background :#ff3a3b;
    position: fixed;
    top:0;
    z-index: 9;
  }
  .activity-head ul{
    width: 6.9rem;
    height: 0.88rem;
    display: block;
    margin: auto;
    line-height: 0.88rem;
  }
  .activity-head ul li{
    height: 0.88rem;
    display: block;
  }
  .activity-head1{
    width: 1.5rem
    float left
  }
  .activity-head1 a{
    width: 1.5rem
    height 0.88rem
    display block
  }
  .activity-head1 img{
    width 0.22rem
    height 0.3rem
    display block
    text-align left
    position relative
    top: 0.29rem
  }

  .activity-head2{
    width :3.9rem;
    font-weight :normal;
    color: #ffffff;
    float :left
    height 0.88rem
    text-align: center;
    font-size : 0.32rem;
    display block
  }

  .activity-head3{
    width: 1.5rem;
    float right
    color: #ffffff;
    height 0.88rem
    text-align: right;
    font-size : 0.32rem;
  }
  .activity-head3 img{
    width: 0.36rem;
    height 0.3rem
    display block
    float right
    margin-top 0.3rem
  }

//内容详情
  .activity{
    margin-top 0.88rem
    color #000000
    font-size 0.36rem
    line-height 0.8rem
    margin-left 0.1rem
  }


</style>










































































