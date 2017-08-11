<template>
    
    <div class="temp">
        
         <!-- 新闻详情的标题-->
        <div class="title">
            <h3>{{newsDetail.title}}</h3>
            <p>{{newsDetail.add_time | dateFm('YYYY-MM-DD')}}&nbsp;&nbsp;&nbsp;{{newsDetail.click}}次浏览&nbsp;&nbsp;&nbsp;
                分类:民生经济
            </p>
        </div>
        <!-- 新闻详情的内容-->
        <div class="content">
            <p v-html="newsDetail.content"></p>
        </div>
        <!-- 此条新闻的评论 像子组件动态传递commentId-->
       <subcomment :commentId=" this.$route.params.newsId "> </subcomment>
        
    </div>
</template>
<script>
    
    import common from '../common/common.js';
    // 导入评论子组件
    import subcomment from '../subcomment/subcomment.vue'
    export default {

        data(){
            return {

                newsDetail : []
            }
        },

        created(){
            this.getNewsDetailInfo();
        },

        methods:{

            getNewsDetailInfo : function(){
                const url = common.apihost  + "/api/getnew/" + this.$route.params.newsId
                this.$http.get(url).then((res)=>{
                   
                    this.newsDetail  =  res.body.message[0];
                })
                
            }
        },

        components:{  //注册子组件
            subcomment : subcomment
        }

    }

</script>