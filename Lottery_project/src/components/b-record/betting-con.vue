<template>
  <div class="betting-con-content">
    <back title="投注内容"></back>
    <!--列表-->
    <div class="betting-con" v-for="(sub_orders,i) in param.sub_orders">
      <div class="b-c-item">
        <div>期数：{{sub_orders.issue_number}}期</div>
        <div>单注金额：<span class="b-red">{{sub_orders.unit_price}}元</span></div>
      </div>
      <div class="b-c-item">
        <div>玩法：{{sub_orders.parent_play_type}}-{{sub_orders.play_type}}</div>
        <div><span class="b-red">{{sub_orders.bet_nums}}</span>注</div>
      </div>
      <div class="b-c-item">
        <div>赔率：{{sub_orders.play_rate}}</div>
        <div></div>
      </div>
      <div class="b-c-item">
        <div>返点：{{sub_orders.return_ratio}}</div>
        <div>状态：<span :class="{'b-blue':sub_orders.status==2,'b-red':sub_orders.status==1}">{{sub_orders.status | transWinningStatus}}</span></div>
      </div>
      <div class="b-c-item-bt">
        <div>投注号码：</div>
        <div></div>
      </div>
      <div class="b-c-item">
        <div
          v-if="param.sub_orders[0].lot_type=='山东11选5'
              ||param.sub_orders[0].lot_type=='三分PK拾'
              ||param.sub_orders[0].lot_type=='北京PK拾'">
          {{sub_orders.numbers_display | transArrFormate}}
        </div>
        <div v-else>{{sub_orders.numbers_display}}</div>

        <div></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import {mapState} from 'vuex'
  import {mt_loading_open, mt_loading_close} from 'api/recommend'

  export default {
    components: {
      Back
    },
    data() {
      return {
        param: '',
      }
    },
    computed: {
      ...mapState(['user'])
    },
    beforeRouteLeave(to, from, next) {
      from.meta.keepAlive = true
      next()
    },
    methods: {

    },
    created() {
      this.param = this.user.order_list;
      console.log(this.param)
      mt_loading_open()
      setTimeout(() => {
        mt_loading_close()
      },300)
    }
  }
</script>

<style scoped lang="stylus">
  .betting-con-content {
    height: 100%;
    font-size .28rem
    color #000
    margin-top .88rem
  }
  .b-red {
    color #ff3a3b
  }
  .b-blue{
    color #35b5fe
  }
  .b-red.b-blue {
    color #35b5fe
  }
  .betting-con {
    margin 0 .3rem
    border-top 1px solid #ccc
    font-size .24rem
    .b-c-item {
      display flex
      justify-content space-between
      padding .1rem 0
    }
  }
</style>
