<template>
  <div class="list-content">
    <back title="最新中奖榜"></back>
    <div class="list-layout">

      <div class="list-title">
        <dl>
          <dt>用户名</dt>
          <dd class="list-title1">中奖金额（元）</dd>
          <dd class="list-title2">采种</dd>
        </dl>
      </div>
      <div class="wrapper" :data="articles" :pulldown="pulldown" @pulldown="loadData">
        <div class="list">
          <!--<dl>-->
          <!--<dt class="list1" v-for="">18517442732</dt>-->
          <!--<dd class="list2">190000000000.60</dd>-->
          <!--<dt class="list3">北京PK拾</dt>-->
          <!--</dl>-->
          <dl v-for="articles in articles">
            <dt class="list1" >{{articles.phone}}</dt>
            <dd class="list2">{{articles.winning_money}}</dd>
            <dt class="list3">{{articles.lot_name}}</dt>
          </dl>
        </div>
      </div>
    </div>
  </div>

</template>


<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import {getRecommend, getDiscList, requestOpt, alertip, mt_loading_open, mt_loading_close} from 'api/recommend'

  export default {
    components: {
      Back
    },
    data () {
      return {
        phone : 'string',
        winning_money : "decimal",
        user_id : "int",
        create_time : "string",
        lot_name : "string",
        articles: [],
        pulldown: true,
      }
    },
    created: function() {
      this.loadData();
    },
    methods: {
      loadData() {
        mt_loading_open()
        requestOpt.reqnoGetpara('latest_luckys', {
          phone : 'string',
          winning_money : "decimal",
          user_id : "int",
          create_time : "string",
          lot_name : "string"
        }, (res) => {
          this.articles = res.data.data.list;
          mt_loading_close()
        }, (err) => {
          alertip(err)
        });
      }
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .list-content{
    width :7.5rem;
    height: 13.34rem;
    display block
    overflow auto
    background #eeeeee
    margin-top 0.88rem
  }
  .list-layout{
    width 7.5rem
    height auto
    display block
  }
  .list-title{
    width 7.5rem
    height 0.7rem
    background #eeeeee
    display block
    position fixed
    top: 0.88rem
    z-index 99
  }
  .list-title dl{
    width 7.5rem
    height 0.7rem
    background #eeeeee
    display block
    line-height 0.7rem
  }
  .list-title dl dt{
    width 2.5rem
    height 0.7rem
    display block
    float left
    text-align center
    font-size 0.18rem
    color #222222
  }
  .list-title dl dd.list-title1{
    width 2.5rem
    height 0.7rem
    display block
    float left
    text-align center
    font-size 0.18rem
    color #222222
  }
  .list-title dl dd.list-title2{
    width 2.5rem
    height 0.7rem
    display block
    float right
    text-align center
    font-size 0.18rem
    color #222222
  }
  .list{
    width 7.5rem
    height 100%
    display block
    position relative
    margin-top 0.7rem
  }
  .list dl{
    width 7.5rem
    height 0.7rem
    display block
    background #ffffff
    border-bottom 0.01rem solid #cccccc
    line-height 0.7rem
  }
  .list dl dt{
    width 2.5rem
    height 0.7rem
    display block
    float left
    text-align center
    font-size 0.18rem
    color #222222
  }
  .list dl dd.list2{
    width 2.5rem
    height 0.7rem
    display block
    float left
    text-align center
    font-size 0.18rem
    color #d93f30
  }
  .list dl.list3{
    width 2.5rem
    height 0.7rem
    display block
    float left
    text-align center
    font-size 0.18rem
    color #222222
  }
</style>










































































