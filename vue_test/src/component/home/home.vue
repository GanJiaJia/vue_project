<template>
    <div class="temp">
            <subSwipe :lunbo_url="'/api/getthumimages/87'" :lunbo_time="timer"> </subSwipe>
         <div class="mui-content">

            <ul class="mui-table-view mui-grid-view mui-grid-9">  
                <router-link to="/news/newsList">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">新闻咨询</div></a>
                </li>
                </router-link>
                
                <router-link to="/photo/photoList">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">图片分享</div></a>
                </li>
                </router-link>

                <router-link to="/goods/goodsList">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">商品购买</div></a>
                </li>
                </router-link>
            
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-gear"></span>
                        <div class="mui-media-body">留言反馈</div></a>
                        
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-info"></span>
                        <div class="mui-media-body">视频专区</div></a>
                        
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-more"></span>
                        <div class="mui-media-body">联系我们</div></a>
                </li>
            </ul> 
            
		</div>
    </div>

</template>

<style scoped>

/**
    css3动画(轮播图)运动时会造成页面上和它同层级z-index的元素的重绘
 */
    .temp{
        height:250px;
    }
    .temp div img{
        width:100%;
        height:250px;
    }

    .swipe_banner{

        z-index : 1;
    }
    
    
/*九宫格的样式*/

.mui-grid-view.mui-grid-9 {
    background-color: #fff;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border-right: 0px;
    border-bottom: none;
}

.mui-icon {
    width: 50px;
    height: 50px;
}

.mui-icon.mui-icon-home {
    background-image: url('../../../statics/images/menu3.png');
    background-repeat: round;
}

.mui-icon.mui-icon-email {
    background-image: url('../../../statics/images/menu4.png');
    background-repeat: round;
}

.mui-icon.mui-icon-chatbubble {
    background-image: url('../../../statics/images/menu5.png');
    background-repeat: round;
}

.mui-icon.mui-icon-location {
    background-image: url('../../../statics/images/menu6.png');
    background-repeat: round;
}

.mui-icon.mui-icon-search {
    background-image: url('../../../statics/images/menu9.png');
    background-repeat: round;
}

.mui-icon.mui-icon-phone {
    background-image: url('../../../statics/images/menu10.png');
    background-repeat: round;
}

.mui-icon-home:before,
.mui-icon-email:before,
.mui-icon-chatbubble:before,
.mui-icon-location:before,
.mui-icon-search:before,
.mui-icon-phone:before {
    content: '';
}
</style>

<script>
//导入需要的公共的js
import common from '../common/common.js'
import subSwipe from '../subcomment/subSwipe.vue'

//相当于es5中的 module.exports = {}
export default {
    data() {
        return {
            // lunboArray:[]
            timer : 3000
        }
    },
    //created是我们home.vue这个组件的生命周期函数之一
    //他在我们home组件创建出来之后，还没有显示在页面之前就会被自动调用
    created() {
        // this.getLunBoData()
    },
    methods: {
        //定义一个获取轮播数据的方法
        // getLunBoData: function () {
        //     const url = common.apihost + "/api/getlunbo" 
        //     // console.log(url);
        //     // const url = 'http://182.254.146.100:8899/api/getlunbo';
        //     //使用vue-resource发送请求
        //     this.$http.get(url).then(function (response) {
        //         //把网络上获取的数据复制给模型
        //         this.lunboArray = response.body.message
        //         // console.log(this.lunboArray);
        //     }, function (error) {

        //     })
        // }
    },
    components:{
        subSwipe:subSwipe
    }
}
</script>