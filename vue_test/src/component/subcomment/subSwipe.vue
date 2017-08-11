<template>

    
        <mt-swipe :auto="lunbo_time">
            <mt-swipe-item v-for="(item,index) in lunboArray" :key="item.url" class="swipe_banner">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
    
</template>

<style scoped>
    .temp {
        height: 250px;
    }

    .temp div img {
        width: 100%;
        height: 250px;
    }

    .swipe_banner {

        z-index: -1;
    }
</style>

<script>
    import common from '../common/common.js';
    export default {

        data() {

            return {
                lunboArray: []
            }
        },

        // props :["lunbo_url"],

        props: {
            // 只检测类型
            lunbo_url: String,
            // 检测类型 + 其他验证
            lunbo_time: {
                type: Number,
                // default: 0,
                required: true,
                validator: function (value) {
                    return value >= 1000
                }
            }
        },
        created() {

            this.getlunboArray();
        },
        methods: {

            getlunboArray() {


                const url = common.apihost + this.lunbo_url;
                // console.log(url);
                this.$http.get(url).then((res) => {
                    this.lunboArray = res.body.message;
                    // console.log(this.lunbo_url);
                    // console.log(this.lunboArray);
                })
            }
        }


    }

</script>