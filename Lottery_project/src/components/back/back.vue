
<template>
  <!--公共头部-->
  <div id="back">
    <div class="back-content">
      <a class="back-btn"  @click="$router.go(-1)" >
        <img  class="back-icon" src="../../images/Return-@2x.png" alt="">
      </a>
      <span class="back-title" v-text="title"></span>
      <div class="back-title-right">

      </div>
    </div>
  </div>
</template>

<script>

  import { mapGetters }  from 'vuex'
  export default {
    props: [
      'title', //接收一个标题
      'goBack'
    ],
    methods: {
      goback() {
        this.$store.dispatch('goBack') // 发送后退的状态
        // 后退
        this.$router.go(-1)
      },
     
    },
    
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  #back{
    width :7.5rem;
    height :0.88rem;
    background #ff3a3b;
    display :block;
    position fixed
    top: 0
    z-index 999
  }
  .back-content{
    width 6.9rem
    margin auto
    height :0.88rem;
    display: block;
    line-height: 0.88rem;
  }
  .back-title{
    height :0.88rem;
    float left
    display block
    text-align center
    font-size 0.32rem
    font-weight normal
    line-height 0.88rem
    z-index 8
    width :2.9rem;
    color: #ffffff;
  }
  .back-btn{
    width: 2rem
    height 0.88rem
    display block
    float left
  }
  .back-btn img{
    width 0.22rem
    height 0.3rem
    display block
    text-align left
    float left
    position relative
    top: 0.29rem
  }
  .back-title-right{
    width 2rem
    height 0.88rem
    display block
    float right
    z-index 3
  }
  //
</style>
