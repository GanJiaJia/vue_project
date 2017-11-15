<template>
  <div class="all-tab">
    <router-link tag="div" class="tab-item" to="/a-account/0">
      <span class="tab-link">全部</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/a-charge/1">
      <span class="tab-link">充值</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/a-withdrawals/2">
      <span class="tab-link">提款</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/a-betting/3">
      <span class="tab-link">购彩</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/a-winning/5">
      <span class="tab-link">中奖</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/commission/7">
      <span class="tab-link">佣金提成</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/a-others/8">
      <span class="tab-link">其他</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .all-tab{
    display: flex
    height: 0.68rem
    line-height: 1.4rem
    width 7.5rem
    background #ffffff
    position fixed
    top 0.88rem
    text-align center
    z-index 99
  }
  .all-tab span{
    color #000000;
    text-align center
    float left
    position relative
    line-height 0.68rem
    width 1.071rem
    font-size 0.25rem
    height 0.68rem
  }
  &.router-link-active
    .tab-link
      color: #fc823c
      border-bottom 2px solid #fc823c
</style>
