<template>

    <div class="temp">
       <div class="title">
            <h3>{{photoInfo.title}}</h3>
            <p>
                {{photoInfo.add_time | dateFm("YYYY-MM-DD")}}&nbsp;&nbsp;&nbsp;
                {{photoInfo.click}}次浏览
            </p>
        </div>

        <!-- 缩略图-->
        <!-- <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li v-for="(item,index) in thumbImages" :key="item.src" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <img @click="$preview.open(index, thumbImages)" class="preview-img" height="100" width="100" :src="item.src">
            </li>
        </ul> -->

        
        <!-- 图片部分 -->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li v-for="(item,index) in thumbImages" :key="index" class="mui-table-view-cell mui-media mui-col-xs-4">
                  <img @click="$preview.open(index, thumbImages)" :src="item.src" :alt="item.url" width="100px" height="100px;" class="preview-img">
                </li>

            </ul>
        </div>


        <!--内容-->
        <div class="content">
            <div v-html="photoInfo.content"></div>
        </div>

        <subcomment :commentId="this.$route.params.infoId"> </subcomment>
    </div>
</template>


<style scoped>
    .mui-content ul{
        background: #fff;
    }
    .title{
        padding: 5px;
    }

    h3{
        font-size: 18px;
        color: #0094ff;
    }

    .title p{
        font-size: 12px;
        color: gray;
    }

    .content{
        padding: 5px;
        color: gray;
        font-size: 14px;
    }
</style>


<script>
    import common from '../common/common.js'
    import subcomment from '../../component/subcomment/subcomment.vue'
   
    export default {

        data() {

            return {

                photoInfo : {},
                thumbImages : []
            }
        },
        created() {
            this.getPhotoDetail();
            this.getThumbImagesData();
           
        },

        methods: {
            getPhotoDetail() {
                const url = common.apihost + "/api/getimageInfo/" + this.$route.params.infoId
                // console.log(url);
                this.$http.get(url).then((res)=>{
                    this.photoInfo = res.body.message[0];
                    // console.log(this.photoInfo);
                })
            },

            getThumbImagesData(){

                 const url = common.apihost+"/api/getthumimages/"+this.$route.params.infoId
                 this.$http.get(url).then((res)=>{
                    //  console.log(res);
                    res.body.message.forEach((item)=>{

                        item.w = 600,
                        item.h = 400
                    })
                    this.thumbImages = res.body.message
                 })
                
            }

        },
        components :{

            subcomment : subcomment
        }
    }

</script>