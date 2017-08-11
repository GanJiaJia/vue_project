<template>

    <div>
       
        <mt-swipe :auto="timer">
            <mt-swipe-item v-for="(item,index) in bannerImages">
                <img :src="item.pic" :alt="item.typeTitle">
            </mt-swipe-item>
        </mt-swipe>
        
    </div>

</template>
<style scoped>
  .mint-tab-container-item  .mint-swipe {
        width: 100%;
        height: 145.83px;
    }

    .mint-swipe-items-wrap,
    .mint-swipe-item,
    .mint-swipe-item img {
        width: 100%;
        height: auto;
    }

    .mint-swipe-item .mint-swipe-items img {
        width: 100%;
        height: auto;
    }

    .mint-swipe div.mint-swipe-indicator.is-active {
        background: #cd3c37;
    }
</style>
<script>
    import { api } from '../common/api.js';
    import { Indicator } from 'mint-ui';
    export default {

        data() {
            return {
                bannerImages : []
            }
        },
        created() {
            this.getBannerImage()
        },
        props: {

            banner_url: String,
            timer:Number,
            banner_title: [String, Number],
            
        },
        methods: {

             getBannerImage() {
                Indicator.open({
                    text: '加载中...',
                    spinnerType: 'double-bounce'
                });
                const url = api + this.banner_url
                this.$axios.get(url).then((res) => {
                    this.bannerImages = res.data.banners
                    Indicator.close();
                }).catch((err) => {
                    console.log(err)
                })
            }
        }

    }
</script>