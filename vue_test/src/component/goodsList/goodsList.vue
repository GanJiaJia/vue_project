<template>
    <div class="temp">
        <div class="mui-content" style="background-color:#fff">
		    <ul class="mui-table-view mui-grid-view">
		        <li v-for="item in goodsList" :key="item.id" class="mui-table-view-cell mui-media mui-col-xs-6">
		            <router-link :to="'/goods/goodsinfo/'+item.id">
                        <div class="goodsContent">
                            <img class="mui-media-object" :src="item.img_url">
                            <div class="mui-media-body">
                                <!-- 标题 -->
                                <p>{{item.title}}</p>
                                <!-- 价格 -->
                                <div class="price">
                                    <span>{{item.sell_price}}</span>
                                    <s>{{item.market_price}}</s>
                                </div>
                                <!-- 提示信息 -->
                                <div class="tips">
                                    <p>热卖中</p>
                                    <span>剩余{{item.stock_quantity}}件</span>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </li>
		    </ul>    
		</div>
    </div>
</template>

<style scoped>
    /**
        商品内容的容器
    */
    .goodsContent{
        padding: 10px;
        border: 1px solid rgba(92,92,92,0.2);
        border-radius: 5px;
        box-shadow: 0px 0px 5px #666;
    }

    ul{
        padding-right: 0px;
    }

    .mui-table-view-cell>a:not(.mui-btn){
        white-space : inherit;
    }


    .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        height: 100px;
    }

    .mui-media-body p{
        color: #000;
        text-align: left;
        font-size: 12px;
        /*以下4句是实现文字显示两行，超出的在第二行用...替代关键代码*/
        /* http://www.css88.com/webkit/-webkit-line-clamp/ */
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .price{
        padding: 10px 0 10px 0px;
        text-align: left;
        margin-top: 5px;
        background: #f0f0f0;
    }

    .price span{
        font-size: 16px;
        color: red;
    }

    .price s{
        font-size: 12px;
        color: #5c5c5c;
        margin-left: 10px;
    }

    .tips{
        background: #f0f0f0;
        font-size: 12px;
        height: 50px;
        display: flex;
    }

    .tips p{
        flex: 0 0 45px;
        text-align: left
    }

    .tips span{
        flex: 1;
        text-align: right;
    }
</style>


<script>
    import common from '../common/common.js'
    import { Indicator } from 'mint-ui'
    export default {

        data(){
            return {
                goodsList:[]
            }
        },

        created(){
            this.getGoodsList();
        },

        methods :{
            getGoodsList(){
                 Indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'
                });
                const url  = common.apihost + "/api/getgoods";
                this.$http.get(url).then((res)=>{
                    // console.log(res);
                    this.goodsList = res.body.message;
                    Indicator.close();
                },(error)=>{

                })
            }
        }

    }

</script>