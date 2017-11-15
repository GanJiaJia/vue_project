<template>
  <div class="activities-content">
    <back title="优惠活动"></back>
    <div class="activities" >
      <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData" >
        <dl class="activities1" v-for="(activitie, k) in aresults">
          <router-link tag="div" to="/activity">
            <dt>{{activitie.title}}</dt>
            <dd>活动时间：{{activitie.start_time}}至{{activitie.end_time}}</dd>
            <dd class="activities-img"><img :src="activitie.icon" alt=""></dd>
            <dd>{{activitie.sub_title}}</dd>
            <dd class="blue-color">查看详情&gt;&gt;</dd>
          </router-link>
        </dl>
      </v-scroll>
      <no-data v-if="aresults.length === 0"></no-data>
    </div>
  </div>
</template>


<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import NoData from '@/components/tab/nop-data'
  import VScroll from "@/components/public/pull-refresh"
  import {getRecommend, getDiscList, requestOpt, alertip, mt_loading_open, mt_loading_close} from 'api/recommend'

  export default {
    components: {
      Back,
      NoData,
      VScroll
    },
    data() {
      return {
        page: 1,
        aresults:[],
        scrollData: {
          noFlag: false //暂无更多数据显示
        },
        nodata: false,
      }
    },
//    调取后台数据
    mounted(){
      this.getActivites('fresh');
    },
    methods: {
      getActivites(loadflag) {
        mt_loading_open();
        let url = 'bet_records?page='+ this.page+'&type='+this.order_id;
        requestOpt.reqnoGet('activities?page='+this.page, (res) => {
          if(res.data.status === 1) {
            this.scrollData.noFlag = res.data.data.paging_arr.total_pages <= this.page  ? true : false;
            this.nodata = res.data.data.paging_arr.total_pages <= this.page  ? true : false;

            if (loadflag === 'fresh') {
              this.aresults = res.data.data.list;
              if (this.aresults.length === 0) {
                this.scrollData.noFlag = false;
              }
            } else {
              this.aresults = this.aresults.concat(res.data.data.list);
            }
          } else {
            alertip(res.data.msg);
          }
          mt_loading_close()
        }, (err) => {
          alertip(err)
        });
        setTimeout(() => {
          mt_loading_close()
        },60000);
      },
      onRefresh(done) {
        this.page = 1;
        this.getActivites('fresh');
        if(done) {
          done();
        }
      },
      onInfinite(done) {
        this.page += 1;
        if (this.nodata) {
          this.scrollData.noFlag = true
          return ;
        }
        this.getActivites('load');
        done();
      },
    }
    //
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .activities-content{
    overflow hidden
    height 100%
  }

  .activities{
    margin-top 0.88rem
    height 100%
    overflow auto
  }
  .activities1{
    width 6.9rem
    height 3.9rem
    display block
    background #ffffff
    margin-top 0.3rem
    margin-left 0.3rem
    border-radius 4px
    border 1px solid #dddddd
  }
  .activities1 dt{
    display block
    width 6.9rem
    margin-left 0.1rem
    font-size 0.28rem
    color #000000
    line-height 0.32rem
    text-align left
    margin-top 0.1rem
  }
  .activities1 dd{
    display block
    width 6.9rem
    margin-left 0.1rem
    font-size 0.2rem
    color #676767
    line-height 0.32rem
    text-align left
  }
  .activities1 dd.activities-img{
    display block
    width 6.9rem
    height 2.24rem
    margin-left 0
  }
  .activities1 dd.activities-img img{
    display block
    width 2rem
    height 2rem
    margin auto
    margin-top 0.2rem
  }
  .activities1 dd.blue-color{
    margin-right 0.1rem
    font-size 0.24rem
    color: #35b5fe
    line-height 0.24rem
    text-align right
    float right
  }

  //  加载完毕
  .activities2{
    width 7.5rem
    height 2rem
    line-height 1rem
    font-size 0.26rem
    color #676767
    text-align center
  }
</style>










































































