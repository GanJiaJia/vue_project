<template>

    <div class="temp">
        <subSwipe :lunbo_url="'/api/getthumimages/' + this.$route.params.infoId" :lunbo_time="timer"> </subSwipe>
        <!-- 价格信息-->
        <div class="priceStyle">
            <h4>{{goodsInfo.title}}</h4>
            <p class="price">市场价:￥
                <del>{{goodsInfo.market_price}}</del>&nbsp;&nbsp; 销售价:￥
                <span>{{goodsInfo.sell_price}}</span>
            </p>
            <subnumber v-on:numChange="receiveSubNumberCount">{{goodsCount}}</subnumber>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addShopCart">加入购物车</mt-button>
        </div>

        <!-- 商品信息-->
        <div class="paramsStyle">
            <h5>商品参数</h5>
            <ul>
                <li>商品货号:{{goodsInfo.goods_no}}</li>
                <li>库存情况:剩余{{goodsInfo.stock_quantity}}件</li>
                <li>上架时间:{{goodsInfo.add_time | dateFm}}</li>
            </ul>
        </div>

        <!-- 图文介绍&商品评论-->
        <div class="pictureInfoAndCommentStyle">
            <mt-button type="primary" plain size="large" @click="getPictureAndText">图文介绍</mt-button>
            <mt-button class="commentStyle" type="danger" @click="dumpCommont" plain size="large">商品评论</mt-button>
        </div>
    </div>


</template>
<style scoped>
    body header.mint-header.is-fixed {
        z-index: 5;
    }

    .mint-swipe {
        margin: 10px;
        height: 250px;
        padding: 10px;
        border: 1px solid rgba(92, 92, 92, 0.3);
        border-radius: 5px;
    }

    .mint-swipe-items-wrap {}

    .sliderStyle,
    .priceStyle,
    .paramsStyle,
    .pictureInfoAndCommentStyle {
        margin: 10px;
        padding: 10px;
        border: 1px solid rgba(92, 92, 92, 0.3);
        border-radius: 5px;
    }

    .priceStyle h4 {
        font-size: 16px;
        color: #0094ff;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(92, 92, 92, 0.3);
    }

    .price span {
        color: red;
        font-size: 16px;
    }

    .paramsStyle h5 {
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(92, 92, 92, 0.3);
    }

    .paramsStyle ul {
        padding: 0
    }

    .paramsStyle li {
        list-style: none;
    }

    .commentStyle {
        margin-top: 20px;
    }
</style>

<script>
    import common from '../common/common.js'
    import subSwipe from '../subcomment/subSwipe.vue'
    import subnumber from '../subcomment/subnumber.vue';
    import bus from '../common/commonVue.js';
    import { addGoods } from '../common/shopCartShow.js'
    import { Toast } from 'mint-ui';
    export default {

        data() {

            return {
                timer: 1000,
                lunboArray: [],
                goodsInfo: [],
                goodsCount: 1
            }
        },

        created() {
            // this.getthumimages();
            this.getGoodsList();
            this.receiveSubNumberCount();
        },

        methods: {
            // 抽取轮播组件作为公共部分，每个模块需要获取的轮播数据，让轮播子组件自己去处理
            // getthumimages (){
            //     const url =  common.apihost + '/api/getthumimages/' + this.$route.params.infoId;
            //       this.$http.get(url).then((res)=>{
            //         // console.log(res);
            //         this.lunboArray = res.body.message
            //     },(error)=>{

            //     })

            // },
            getGoodsList() {

                const url = common.apihost + "/api/goods/getinfo/" + this.$route.params.infoId;
                // console.log(url);
                this.$http.get(url).then((res) => {
                    // console.log(res);
                    this.goodsInfo = res.body.message;
                }, (error) => {

                })
            },
            getPictureAndText() {

                // 编程式导航
                this.$router.push({ name: 'pictureAndText', params: { infoId: this.$route.params.infoId } })
            },
            // nowBuy(){
            //     this.$router.push({path})
            // },
            dumpCommont() {

                this.$router.push({ path: '/goods/goodscommont', query: { infoId: this.$route.params.infoId } })
            },
            // 接收子组件传过来的数据
            receiveSubNumberCount(num) {
                num = num || 1;
                this.goodsCount = num;


            },
            addShopCart() {
                //    向App組件传递数据
                this.$root.newBus.$emit('sendNumber', this.goodsCount);
                const obj = { "goodsId": this.$route.params.infoId, "count": this.goodsCount }
                addGoods(obj)
                Toast({
                    message: '加入购物车成功',
                    duration: 2000
                });
                return;
            }
        },
        components: {

            subSwipe: subSwipe,
            subnumber
        }
    }

</script>