<template>
    <div class="tmpl">
        <!--  标题 -->
        <div class="title">
            <h4>{{pictureAndTextArray.title}}</h4>
        </div>
        <!--  内容 -->
        <div class="content">
            <span v-html="pictureAndTextArray.content"></span>
        </div>
    </div>
</template>

<style scoped>
    .title h4{
        color:#0094ff;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(92,92,92,0.3);
    }

    .title,.content{
        padding: 10px;
    }
</style>

<script>
    import common from '../common/common.js';
    export default {

        data(){

            return {
                pictureAndTextArray:[]
            }
        },
        created(){
            this.getPictureAndText();
        },
        methods : {

            getPictureAndText (){
                const url = common.apihost  + "/api/goods/getdesc/" +this.$route.params.infoId;
                // console.log(url)
                this.$http.get(url).then((res)=>{
                    this.pictureAndTextArray = res.body.message[0];
                    // console.log(res);
                },(err)=>{
                    console.log(err);
                })
            }
        }

    }

</script>