
<template>
  <!--公共头部-->
  <div id="back">
    <div class="back-content">
      <a class="back-btn" onclick="history.go(-1)" >
        <i class="back-icon"></i>
      </a>
    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  #back{
    width :7.5rem;
    height :0.88rem;
    display :block;
    float left
    background none
  }
  .back-content{
    width 6.9rem
    margin auto
    height :0.88rem;
  }
  .back-btn{
    width 0.88rem
    height 0.88rem
    display block
  }

  @media only screen and (max-width: 480px) {
    .back-icon::before{
      content: url("../../images/Return-.png")
      width 0.16rem
      height 0.16rem
      display block
      position relative
      top: -0.28rem
    }
  }

  /* medium screens (excludes iPad & iPhone) */
  /*
   * -----------------------------------------
   * 481 ~ 767  宽大于480且小于767的iPad和iPhone
   * -----------------------------------------
   */
  @media only screen and (min-device-width: 480px) and (max-device-width: 1024px) {
    .back-icon::before{
      content: url("../../images/Return-@2x.png")
      width 0.16rem
      height 0.16rem
      display block
      position relative
      top: -0.28rem
    }
  }

  /* ipads (landscape) */
  /*
   * -----------------------------------------
   * 768 ~ 1024  宽大于480且小于1024的iPad和iPhone
   * -----------------------------------------
   */
  @media only screen and (min-device-width: 1024px)  and (orientation: landscape) {
    .back-icon::before{
      content: url("../../images/Return-@3x.png")
      width 0.16rem
      height 0.16rem
      display block
      position relative
      top: -0.28rem
    }
  }
</style>
