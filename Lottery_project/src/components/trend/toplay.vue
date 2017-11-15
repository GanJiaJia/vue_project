<!--默认五星玩法-->
<!--五星玩法-->
<template>
  <div class="toplaying">
    <!--冷热，遗漏排行榜-->
    <div class="toplaying-content" v-show="showha">
      <!--遮罩-->
      <div class="toplaying-content1"></div>
      <!--排行榜-->
      <div class="toplaying-content2">
        <h3>冷热排行</h3>
        <div class="toplaying-content3">
          <ul>
            <li>
              <span>冠军</span>
              <span>:单</span>
              <span class="span-colors">已连开3期</span>
            </li>
            <li>
              <span>冠军</span>
              <span>:单</span>
              <span class="span-colors">已连开3期</span>
            </li>
            <li>
              <span>冠军</span>
              <span>:单</span>
              <span class="span-colors">已连开3期</span>
            </li>
            <li>
              <span>冠军</span>
              <span>:单</span>
              <span class="span-colors">已连开3期</span>
            </li>
            <li>
              <span>冠军</span>
              <span>:单</span>
              <span class="span-colors">已连开3期</span>
            </li>
            <li>
              <span>冠军</span>
              <span>:单</span>
              <span class="span-colors">已连开3期</span>
            </li>
            <li>
              <span>冠军</span>
              <span>:单</span>
              <span class="span-colors">已连开3期</span>
            </li>
            <li>
              <span>冠军</span>
              <span>:单</span>
              <span class="span-colors">已连开3期</span>
            </li>
            <li>
              <span>冠军</span>
              <span>:单</span>
              <span class="span-colors">已连开3期</span>
            </li>
            <li>
              <span>冠军</span>
              <span>:单</span>
              <span class="span-colors">已连开3期</span>
            </li>
            <li>
              <span>冠军</span>
              <span>:单</span>
              <span class="span-colors">已连开3期</span>
            </li>
            <li>
              <span>冠军</span>
              <span>:单</span>
              <span class="span-colors">已连开3期</span>
            </li>
            <li>
              <span>冠军</span>
              <span>:单</span>
              <span class="span-colors">已连开3期</span>
            </li>
            <li>
              <span>冠军</span>
              <span>:单</span>
              <span class="span-colors">已连开3期</span>
            </li>
            <li>
              <span>冠军</span>
              <span>:单</span>
              <span class="span-colors">已连开3期</span>
            </li>
            <li>
              <span>冠军</span>
              <span>:单</span>
              <span class="span-colors">已连开3期</span>
            </li>
            <li>
              <span>冠军</span>
              <span>:单</span>
              <span class="span-colors">已连开3期</span>
            </li>
            <li>
              <span>冠军</span>
              <span>:单</span>
              <span class="span-colors">已连开3期</span>
            </li>
            <li>
              <span>冠军</span>
              <span>:单</span>
              <span class="span-colors">已连开3期</span>
            </li>
            <li>
              <span>冠军</span>
              <span>:单</span>
              <span class="span-colors">已连开3期</span>
            </li>
            <li>
              <span>冠军</span>
              <span>:单</span>
              <span class="span-colors">已连开3期</span>
            </li>
            <li>
              <span>冠军</span>
              <span>:单</span>
              <span class="span-colors">已连开3期</span>
            </li>
            <li>
              <span>冠军</span>
              <span>:单</span>
              <span class="span-colors">已连开3期</span>
            </li>
            <li>
              <span>冠军</span>
              <span>:单</span>
              <span class="span-colors">已连开3期</span>
            </li>
            <li>
              <span>冠军</span>
              <span>:单</span>
              <span class="span-colors">已连开3期</span>
            </li>

          </ul>
        </div>
      </div>
    </div>

    <!--投注结算-->
    <div class="playing-account">
      <dl>
        <dt>
          <div class="playing-account-left">
            <img src="../../images/del@3x.png" alt="">
            <span>清空</span>
          </div>
          <div class="playing-account-middle">
            <span class="playing-account-middle1" v-if="" @click='open'>冷热</span>
            <span @click='open'>遗漏</span>
          </div>
          <div class="playing-account-right">
            <span>5</span>注<span>10</span>元
          </div>
        </dt>
        <dd>
          <input type="button" value="立即投注">
        </dd>
      </dl>
    </div>

  </div>

</template>


<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        showha:false
      }
    },
    methods: {
      open(){
        this.showha=!this.showha
      }
    }

  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .toplaying{
    width :7.5rem;
    height: 13.34rem;
    display block
    overflow auto
    z-index 999
    background #eeeeee
  }

//冷热遗漏

  .toplaying-content{
    width :7.5rem;
    height: 13.34rem;
    display block
    overflow hidden
    position fixed
    top: 0
    z-index 99
  }

  .toplaying-content1{
    width :7.5rem;
    height: 13.34rem;
    display block
    overflow hidden
    position fixed
    top: 0
    z-index 99
    opacity 0.5
    background: #000000
  }
    .toplaying-content2{
      width 5.78rem
      height 13.34rem
      display block
      position fixed
      z-index 999
      top: 0
      background #f8f8f8
    }
  .toplaying-content2 h3{
    font-size 0.48rem
    color #ff3a3a
    margin-left 0.6rem
    line-height 1.56rem
    margin-top 0.2rem
  }
//  排行榜内容
.toplaying-content3{
  width 4.78rem
  height auto
  background #f8f8f8
  border-radius 3px
  border 1px solid #e1e1e1
  margin-left 0.5rem
  z-index 999
  max-height 8.84rem
  overflow auto
}
  .toplaying-content3 ul li{
    width 4.78rem
    height 0.68rem
    line-height 0.68rem
    display block
    border none
    border-radius 3px
  }
  .toplaying-content3 ul li span{
    line-height 0.68rem
    border none
    float left
    font-size 0.28rem
    color #333333
  }
  .toplaying-content3 ul li span:nth-child(1){
    margin-left 0.2rem
  }
  .toplaying-content3 ul li span.span-colors{
    float right
    color #ff3a3a
    margin-right 0.2rem
  }

  .toplaying-content3 ul li:nth-child(odd){
    background #ffffff
  }
  .toplaying-content3 ul li:nth-child(even){
    background #f2f2f2
  }
  //投注结算
  .playing-account{
    width 7.5rem
    display block
    height 0.88rem
    position fixed
    bottom 0
    z-index 999
  }
  .playing-account dl{
    width 7.5rem
    display block
    height 0.88rem
    background #ffffff
  }
  .playing-account dt{
    border-top 1px solid #e9e9e9
    width 5.9rem
    display block
    height 0.89rem
    float left
    background #ffffff
  }
//    左
  .playing-account dt .playing-account-left{
    width 1.3rem
    display block
    height 0.88rem
    float left
    line-height 0.88rem

  }
  .playing-account dt .playing-account-left img{
    width 0.3rem
    display block
    height 0.33rem
    margin-left 0.1rem
    float left
    position relative
    top:0.25rem
  }
  .playing-account dt .playing-account-left span{
    text-align left
    font-size 0.32rem
    color #323232
    float left
    margin-left 0.1rem

  }


//    中
  .playing-account dt .playing-account-middle{
    width 2.3rem
    display block
    height 0.88rem
    float left
    line-height 0.88rem
  }
  .playing-account dt .playing-account-middle span{
    width 1.12rem
    display block
    height 0.88rem
    float left
    line-height 0.88rem
    font-size 0.32rem
    color #000000
    text-align center
    border-right  1px solid #e9e9e9
  }
  .playing-account dt .playing-account-middle span.playing-account-middle1{
    border-left 1px solid #e9e9e9
  }

/*右*/
  .playing-account dt .playing-account-right{
    width 2.3rem
    display block
    height 0.88rem
    float right
    color #323232
    font-size 0.32rem
    text-align center
    line-height 0.88rem
  }
  .playing-account dt .playing-account-right span{
    color #fcb23c
  }
  .playing-account dd{
    width 1.6rem
    display block
    height 0.88rem
    float right
    background #ff3a3b;
  }
  .playing-account dd input{
    width 1.6rem
    height 0.88rem
    float right
    font-size 0.32rem
    color #ffffff
    background none
    outline none
    border:none
  }

</style>










































































