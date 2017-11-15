<!--默认五星玩法-->
<!--五星玩法-->
<template>


  <div class="bit-content">
      <div class="bit-click">
        <!--摇一摇-->
        <dl>
        <dt><img src="../../images/phone@2x.png" alt=""></dt>
        <dd>摇一摇随机选</dd>
        </dl>
      </div>
      <!--位数-->
      <div class="bit-title">
      <dl>
      <dt>万位</dt>
      <dd>
      <ul>
      <li>0</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      </ul>
      </dd>
      </dl>
      <dl>
      <dt>千位</dt>
      <dd>
      <ul>
      <li>0</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      </ul>
      </dd>
      </dl>
      <dl>
      <dt>百位</dt>
      <dd>
      <ul>
      <li>0</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      </ul>
      </dd>
      </dl>
      <dl>
      <dt>十位</dt>
      <dd>
      <ul>
      <li>0</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      </ul>
      </dd>
      </dl>
      <dl>
      <dt>个位</dt>
      <dd>
      <ul>
      <li>0</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      </ul>
      </dd>
      </dl>
      </div>
  </div>
</template>


<script type="text/ecmascript-6">

  export default {}

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .bit-content{
    width :7.5rem;
    height: 13.34rem;
    display block
    overflow auto
    z-index 88
    background red
    position fixed
    top:1.98rem
  }
    .bit-click{
      width 7.5rem
      display block
      background #fff
      height 0.6rem
      z-index 88
//      #f2f2f2
    }
  .bit-click dl{
    width 7.5rem
    display block
    height 0.6rem
  }
  .bit-click dt{
    float left
    width 0.46rem
    height 0.6rem
    display block
    margin-left 0.3rem
  }
  .bit-click dt img{
    float left
    width 0.46rem
    height 0.48rem
    display block
    margin-top 0.06rem
    z-index 99
  }
  .bit-click dl dd{
    line-height 0.6rem
    font-size 0.28rem
    color #000000
    margin-left 0.3rem
  }
  //玩法位数
  .bit-title{
    overflow auto
    width 7.5rem
    display block
    height auto
    background #ffffff
    z-index 888
  }
  .bit-title dl{
    width 7.5rem
    display block
    height 2.5rem
    border-bottom 1px solid #eeeeee
  }
  .bit-title dl dt{
    width 0.52rem
    display block
    height 1.02rem
    font-size 0.24rem
    color #ffffff
    background #ff3a3b;
    position relative
    float left
    top:0.74rem
    text-align center
    margin: 0 auto;
    writing-mode: vertical-lr;/*从左向右 从右向左是 writing-mode: vertical-rl;*/
    writing-mode: tb-lr;/*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/
    line-height 0.52rem
  }
  .bit-title dl dd{
    width 6.5rem
    float right
    margin-right 0.3rem
    line-height 1.25rem
  }
  .bit-title dl dd li{
    width 0.64rem
    height 0.64rem
    float left
    border-radius 45px
    border 1px solid #cccccc
    font-size 0.28rem
    color #ff3a3a
    line-height 0.64rem
    text-align center
    margin-top 0.36rem
    margin-left 0.6rem
    background #eeeeee
  }






</style>










































































