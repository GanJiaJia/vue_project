<template>
    <div class="temp">
        <!-- 购物车列表-->
        <div class="goodsListDiv">
            <div class="everyGoodsItemStyle" v-for="(item,index) in shopCartList" :key="item.id">
                <!--开关-->
                <mt-switch @change="getTotalInfo" v-model="switchValues[index]"></mt-switch>
                <!--图像-->
                <img :src="item.thumb_path" />
                <!--价格信息-->
                <div class="priceAndNumberInfo">
                    <h5>{{item.title}}</h5>
                    <p>
                        <span>{{item.sell_price}}</span>&nbsp;&nbsp; 商品数量:{{item.count}}
                    </p>
                </div>
                <!--删除按钮-->
                <mt-button @click="deleteItem(index)" :disabled="!switchValues[index]" type="danger" size="small">删除</mt-button>
            </div>
        </div>

        <!--总计-->
        <div class="totalStyle">
            <h6>总计(不含运费)</h6>
            <p>已经勾选商品&nbsp;<span>{{totalCount}}</span>&nbsp;件 ,总价&nbsp;
                <span>{{totalPrice}}</span>&nbsp;元</p>
            <mt-button class="jiesuanStyle" size="small" type="danger">去结算</mt-button>
        </div>
    </div>
</template>

<style scoped>
    /**
        1.0 购物车商品列表样式
    */

    .goodsListDiv {
        padding: 5px;
    }

    .everyGoodsItemStyle {
        display: flex;
        height: 100px;
        border-bottom: 1px solid rgba(92, 92, 92, 0.3);
        align-items: center;
    }

    .everyGoodsItemStyle img {
        height: 75px;
        width: 75px;
        padding: 5px;
        border: 1px solid rgba(92, 92, 92, 0.3);
        border-radius: 5px;
        margin-left: 8px;
    }

    .priceAndNumberInfo {
        margin-left: 8px;
        flex: 1;
    }

    h5 {
        color: #0094ff;
    }

    .priceAndNumberInfo p {
        margin-top: 10px;
    }

    .priceAndNumberInfo span {
        color: red;
        font-size: 14px;
    }
    /**
        合计
    */

    .totalStyle {
        position: relative;
        margin-top: 10px;
        height: 100px;
        padding-top: 20px;
        padding-left: 15px;
        background-color: rgba(92, 92, 92, 0.3)
    }

    h6 {
        color: black;
        font-weight: bold;
        font-size: 16px;
    }

    .totalStyle p {
        margin-top: 10px;
    }

    .totalStyle span {
        font-size: 16px;
        color: red;
    }

    .jiesuanStyle {
        position: absolute;
        top: 35px;
        right: 15px;
    }
</style>

<script>
    import { loaclGoodsList } from '../common/shopCartShow.js';
    import common from '../common/common.js'
    import { MessageBox } from 'mint-ui';
    import { delGoodsById } from '../common/shopCartShow.js'
    import { Indicator } from 'mint-ui';
    export default {

        data() {
            return {
                shopCartList: [],
                switchValues: [],
                totalCount: 0,
                totalPrice: 0
            }
        },

        created() {
            this.getGoodsList();

        },
        methods: {

            getGoodsList() {

                Indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'
                });
                //1.把localStorage中的数组,转成对象{87:3,88:2}
                const GoodsListArray = loaclGoodsList();
                const goodsObj = {};
                GoodsListArray.forEach((item, index) => {
                    //判断tempObjkey是否存在
                    if (goodsObj[item.goodsId]) {
                        goodsObj[item.goodsId] += item.count;
                    } else {
                        goodsObj[item.goodsId] = item.count;
                    }
                })
                const goodsId = [];
                //遍历上面的对象，获取key值，加入到新的数组
                for (var key in goodsObj) {
                    goodsId.push(key);
                }
                const ids = goodsId.join(',');

                const url = common.apihost + "/api/goods/getshopcarlist/" + ids;
                this.$http.get(url).then((res) => {

                    for (var i = 0; i < res.body.message.length; i++) {
                        this.switchValues.push(true);
                    }
                    res.body.message.forEach((item, index) => {
                        item.count = goodsObj[item.id];
                    })
                    this.shopCartList = res.body.message;
                    this.getTotalInfo();
                    Indicator.close();
                }, (err) => {
                    console.log(err);
                })
            },
            getTotalInfo() {
                let totalCount = 0;
                let totalPrice = 0;
                this.switchValues.forEach((item, index) => {

                    if (item) {

                        totalCount += this.shopCartList[index].count;
                        totalPrice += this.shopCartList[index].count * this.shopCartList[index].sell_price
                    }

                    this.totalCount = totalCount;
                    this.totalPrice = totalPrice;
                    console.log(this.totalCount);
                    console.log(this.totalPrice);
                })


            },

            deleteItem(index) {

                MessageBox({
                    title: '提示',
                    message: '确定执行此操作?',
                    showCancelButton: true
                }).then((confirm) => {
                    let count = this.shopCartList[index].count;
                    // 传给app组件
                    this.$root.newBus.$emit('sendNumber', -count);
                    // 删除localstorage中的数据
                    delGoodsById(this.shopCartList[index].id);
                    // 删除本组件中的数据
                    this.shopCartList.splice(index, 1);
                    this.switchValues.splice(index, 1);
                    this.getTotalInfo();
                }, (cancle) => {


                })

            }


        },



    }

</script>