<template>
  <!--走势-->
  <div class="trend-top">
    <div class="trend-background" v-show="showha">
      <div class="trend-alert">
        <dl>
          <dt>
              <img src="../../images/zoushi-Choice@2x.png" alt="">
              选择彩种
            </dt>
          <dd>
            <span class="close" v-show="showha" @click="hideDailog">
              </span>
          </dd>
        </dl>
        <ul id="selList">
          <router-link tag="div" to="/trend/1">
          <!-- 重庆时时彩 -->
            <li class="red" v-for="(item,index) in dataList" v-if="item.id==1" :key="item.id" :data-id= "item.id">{{item.name}}</li>
          </router-link>

          <router-link tag="div" to="/three-d/2">
          <!-- 福彩3D -->
            <li  v-for="(item,index) in dataList" v-if="item.id==2" :key="item.id" :data-id= "item.id">{{item.name}}</li>
          </router-link>

          <router-link tag="div" to="/array5/3">
          <!-- 排列5 -->
            <li  v-for="(item,index) in dataList" v-if="item.id==3" :key="item.id" :data-id= "item.id">{{item.name}}</li>
          </router-link>

          <router-link tag="div" to="/lotto/4">
          <!-- 大乐透 -->
            <li  v-for="(item,index) in dataList" v-if="item.id==4" :key="item.id" :data-id= "item.id">{{item.name}}</li>
          </router-link>

          <router-link tag="div" to="/b-pick/5">
            <!-- 北京PK拾 -->
            <li  v-for="(item,index) in dataList" v-if="item.id==5" :key="item.id" :data-id= "item.id">{{item.name}}</li>
          </router-link>

          <router-link tag="div" to="/g-election/6">
          <!-- 广东11选5 -->
            <li  v-for="(item,index) in dataList" v-if="item.id==6" :key="item.id" :data-id= "item.id">{{item.name}}</li>
          </router-link>

          <router-link tag="div" to="/x-colors/7">
            <!-- <li>新疆时时彩</li> -->
            <li  v-for="(item,index) in dataList" v-if="item.id==7" :key="item.id" :data-id= "item.id">{{item.name}}</li>
          </router-link>

          <router-link tag="div" to="/a-fast/8">
            <!-- <li>安徽快三</li> -->
             <li  v-for="(item,index) in dataList" v-if="item.id==8" :key="item.id" :data-id= "item.id">{{item.name}}</li>
          </router-link>

          <router-link tag="div" to="/j-fast/9">
            <!-- <li>江苏快三</li> -->
             <li  v-for="(item,index) in dataList" v-if="item.id==9" :key="item.id" :data-id= "item.id">{{item.name}}</li>
          </router-link>

          <router-link tag="div" to="/chromosphere/10">
            <!-- <li>双色球</li> -->
            <li  v-for="(item,index) in dataList" v-if="item.id==10" :key="item.id" :data-id= "item.id">{{item.name}}</li>
          </router-link>

           <router-link tag="div" to="/array3/11">
            <!-- <li>排列3</li> -->
            <li  v-for="(item,index) in dataList" v-if="item.id==11" :key="item.id" :data-id= "item.id">{{item.name}}</li>
          </router-link>

          <router-link tag="div" to="/s-colors/13">
            <!-- <li>三分时时彩</li> -->
            <li  v-for="(item,index) in dataList" v-if="item.id==13" :key="item.id" :data-id= "item.id">{{item.name}}</li>
          </router-link>

           <router-link tag="div" to="/s-pick/14">
            <!-- <li>三分PK拾</li> -->
            <li  v-for="(item,index) in dataList" v-if="item.id==14" :key="item.id" :data-id= "item.id">{{item.name}}</li>
          </router-link>

          <router-link tag="div" to="/s-election/15">
            <!-- <li>山东11选5</li> -->
            <li  v-for="(item,index) in dataList" v-if="item.id==15" :key="item.id" :data-id= "item.id">{{item.name}}</li>
          </router-link>

          <router-link tag="div" to="/t-colors/16">
            <!-- <li>天津时时彩</li> -->
            <li  v-for="(item,index) in dataList" v-if="item.id==16" :key="item.id" :data-id= "item.id">{{item.name}}</li>
          </router-link>


          <router-link tag="div" to="/h-election/17">
            <!-- <li>上海11选5</li> -->
            <li  v-for="(item,index) in dataList" v-if="item.id==17" :key="item.id" :data-id= "item.id">{{item.name}}</li>
          </router-link>


          <router-link tag="div" to="/j-election/18">
            <!-- <li>江西11选5</li> -->
            <li  v-for="(item,index) in dataList" v-if="item.id==18" :key="item.id" :data-id= "item.id">{{item.name}}</li>
          </router-link>

          <router-link tag="div" to="/sizzler/19">
            <li  v-for="(item,index) in dataList" v-if="item.id==19" :key="item.id" :data-id= "item.id">{{item.name}}</li>
            <!-- <li>上海时时乐</li> -->
          </router-link>

          <router-link tag="div" to="/g-fast/20">
            <!-- <li>广西快三</li> -->
            <li  v-for="(item,index) in dataList" v-if="item.id==20" :key="item.id" :data-id= "item.id">{{item.name}}</li>
          </router-link>

          <router-link tag="div" to="/lucky28/21">
            <!-- <li>幸运28</li> -->
            <li  v-for="(item,index) in dataList" v-if="item.id==21" :key="item.id" :data-id= "item.id">{{item.name}}</li>
          </router-link>

          <router-link tag="div" to="/beijing28/22">
            <!-- <li>北京28</li> -->
            <li  v-for="(item,index) in dataList" v-if="item.id==22" :key="item.id" :data-id= "item.id">{{item.name}}</li>
          </router-link>

          <router-link tag="div" to="/kk-six/23">
              <!-- 香港六合彩 -->
            <li  v-for="(item,index) in dataList" v-if="item.id==23" :key="item.id" :data-id= "item.id">{{item.name}}</li>
          </router-link>
    
        </ul>
      </div>
    </div>
  
    <div class="trend-head">
      <ul>
        <li class="trend-head1">
          <a onclick="history.go(-1)">
            <img src="../../images/Return-@2x.png" alt="">
          </a>
        </li>
        <li class="trend-head2">
          基本走势
        </li>
        <li class="trend-head3" @click='open'>
          <img src="../../images/selection@3x.png" alt=""> 彩种
        </li>
      </ul>
    </div>
  </div>
</template>


<script type="text/ecmascript-6">
  import {
    requestOpt,
    dtFormate,
    alertip
  } from 'api/recommend'
  export default {
    components: {},
    data() {
      return {
        isShow: false,
        showha: false,
        dataList :[]
      }
    },
    methods: {
      open() {
        this.showha = !this.showha
        var list  = document.getElementById('selList');
        for(var i = 0; i < list.children.length; i++){
          list.children[i].children[0].classList.remove('red');
          if(list.children[i].children[0].getAttribute('data-id') == this.$route.params.id ){
              list.children[i].children[0].classList.add('red');
          }
        }
      
      },
      hideDailog() {
        this.showha = !this.showha
      },
      getList() {
        requestOpt.reqnoGetpara('lottery_types/all', {
            params: {
              
            }
          },
  
          (res) => {
           this.dataList = res.data.data.list;
            
          },
  
          function(err) {
            // Indicator.close();
          });
      },
     
    },
    created(){
      this.getList();
     
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .trend-top{
    width: 7.5rem;
    height: 100%;
    display: block;
    background: #ffffff;
  }
  .trend-head{
    width: 7.5rem;
    height: 0.88rem;
    display: block;
    margin: auto;
    background :#ff3a3b;
    position: fixed;
    top:0;
    z-index: 9;
  }
  .trend-head ul{
    width: 6.9rem;
    height: 0.88rem;
    display: block;
    margin: auto;
    line-height: 0.88rem;
  }
  .trend-head ul li{
    height: 0.88rem;
    display: block;
  }
  .trend-head1{
    width: 1.5rem
    float left
  }
  .trend-head1 a{
    width: 1.5rem
    height 0.88rem
    display block
  }
  .trend-head1 img{
    width 0.22rem
    height 0.3rem
    display block
    text-align left
    position relative
    top: 0.29rem
  }

  .trend-head2{
    width :3.9rem;
    font-weight :normal;
    color: #ffffff;
    float :left
    height 0.88rem
    text-align: center;
    font-size : 0.32rem;
    display block
  }

  .trend-head3{
    width: 1.5rem;
    float right
    color: #ffffff;
    height 0.88rem
    text-align: right;
    font-size : 0.32rem;
  }
  .trend-head3 img{
    width: 0.36rem;
    height 0.3rem
    display block
    float left
    margin-top 0.28rem
    margin-left 0.33rem
  }
//弹出框的背景透明色
  .trend-background{
    width 7.5rem
    height 100%
    overflow hidden
    float left
    z-index 299
    position fixed
    top: 0
    background-color: rgba(0,0,0,0.5)!important;
    background-color: #000;
    filter:Alpha(opacity=50);
    display block
  }

//  弹出框
  .trend-alert{
    z-index 999
    width 6.9rem
    height 5rem
    background #f3f3f3
    display block
    float left
    position relative
    top: 2rem
    left 0.3rem
    border-radius 12px
    border none
  }
//  关闭选择
  .trend-alert dl{
    width 6.9rem
    height 0.52rem
    border-bottom 1px solid #cccccc
    display block
  }
  .trend-alert dl dt{
    width 3rem
    height 0.52rem
    display block
    float left
    margin-left 0.26rem
    font-size 0.24rem
    color #323232
    line-height 0.52rem
    text-align left
  }
  .trend-alert dl dt img{
    width 0.2rem
    height 0.2rem
    display block
    float left
    margin-right 0.12rem
    position relative
    top:0.15rem
  }

  .trend-alert dl dd{
    width 1rem
    height 0.52rem
    display block
    float right
    margin-right 0.26rem
  }
  .close{
    display inline-block
    width 0.32rem
    height 0.32rem
    overflow hidden
    background darkgray
    position relative
    float right
    border 1px solid darkgray
    border-radius 45px
    top: 0.09rem
  }
  .close::before,  .close::after{
    position absolute
    content ''
    top 50%
    left 0.06rem
    margin-top -1px
    background #d93f30
    width 0.2rem
    height 2px
  }
  .close::before{
    transform:rotate(45deg)
  }
  .close::after{
    transform:rotate(-45deg)
  }
  .trend-alert ul li{
    float left
    overflow auto
    height  0.42rem
    border 1px solid #323232
    margin-top 0.1rem
    width 2rem
    margin-left 0.19rem
    text-align center
    line-height 0.43rem
    color #323232
    border-radius 4px
    font-size 0.24rem
  }
  .trend-alert ul li.red{
    background  #ffffff;
    color #ff3a3b;
    border 1px solid #ff3a3b;
  }

</style>


