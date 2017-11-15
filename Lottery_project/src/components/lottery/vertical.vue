<template>
  <div class="vertical">
    <!--彩种详情-->
    <router-link tag="div" class="tab-item" to="/playing">
      <dl class="vertical-list" v-for="lottyList in results">
        <dt class="vertical-images">
          <img :src="lottyList.pic">
        </dt>
        <dd class="vertical-title">
          {{lottyList.name}}
        </dd>
        <dd class="vertical-hours">
          {{lottyList.curr_count_down | transCountTime}}
        </dd>
      </dl>
    </router-link>
  </div>
</template>
<script type="text/ecmascript-6">
  import {getRecommend, getDiscList, requestOpt, alertip} from 'api/recommend'
  import {formatDate} from '../../api/mdata'
  export default {
    data() {
      return {
        results:[],
        timer: null,
      }
    },
    beforeRouteLeave(to, from, next) {
      clearInterval(this.timer)
      next()
    },
//    调取后台数据
    mounted(){
      this.getLottery();
      this.timer = setInterval(() => {
        this.getLottery();
      },1000)
        /*requestOpt.reqnoGetpara('betting_list?page=2', {
          pic : "string",
          name : "string",
          curr_count_down : "int"
        }, (res) => {
          this.results = res.data.data.list;
        }, (err) => {
          alertip(err)
        });*/
      },
    methods: {
      getLottery() {
        requestOpt.reqnoGet('betting_list_v1?page=', (res) => {
          if (res.data.status===1) {
            this.results = res.data.data.list;
          } else {
            alertip(res.data.msg)
          }
        }, (err) => {
          alertip(err)
        });
      },
      tabsel(name) {
        this.tabActive = name
      }
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
  .vertical{
    width: 7.5rem;
    height: 13.34rem;
    display: block;
    overflow: auto;
    background: #eeeeee;
    margin-top: 1.56rem;
    margin-bottom: 0.98rem;
  }
  .vertical dl.vertical-list{
    width: 2.48rem;
    height: 2.76rem;
    display: block;
    overflow: auto;
    background: #ffffff;
    float: left;
    /*margin-bottom: 0.03rem;
    margin-left: 0.01rem;*/
    margin: .01rem;
  }
  .vertical dl.vertical-list dt.vertical-images{
    width: 2.48rem;
    height: 1.6rem;
    display: block;
  }
  .vertical-images img{
    width: 1.25rem;
    height: 1.25rem;
    display: block;
    margin: auto;
    position: relative;
    top:0.175rem;
    border: none;
    border-radius: 45px;
  }



  .vertical dl.vertical-list dd.vertical-title{
    width: 2.48rem;
    height: 0.48rem;
    display: block;
    line-height: 0.48rem;
    text-align: center;
    font-size: 0.24rem;
    color: #222222;
    font-weight: bold;
  }
  .vertical dl.vertical-list dd.vertical-hours{
    width: 2.48rem;
    height: 0.48rem;
    display: block;
    line-height: 0.48rem;
    text-align: center;
    font-size: 0.24rem;
    color: #ff3a3b;
    font-weight: bold;
  }
</style>


