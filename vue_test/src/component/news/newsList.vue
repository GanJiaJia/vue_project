<template>

    <div class="temp">
           <div class="mui-content">
                <!--mui的图文列表-->
                <ul class="mui-table-view">
                    <li v-for="item in newsListArray" :key="item.id" class="mui-table-view-cell mui-media">
                        <router-link :to="'newsListDetail/'+item.id">
                            <img class="mui-media-object mui-pull-left" :src="item.img_url">
                            <div class="mui-media-body">
                                <p class="newsTitle">
                                    {{item.title}}
                                </p>
                                
                                <p class="mui-ellipsis">
                                    <span class="left">
                                        {{item.add_time | dateFm('YYYY-MM-DD HH:mm')}}
                                    </span>

                                    <span class="right">
                                        点击数:{{item.click}}次
                                    </span>
                                </p>
                            </div>
                       </router-link>
                    </li>
                </ul>	
		</div>
    </div>

</template>

<style scoped>
    .mui-table-view-cell{
        min-height: 80px;
    }

    .mui-pull-left{
        min-width: 64px;
        height: 64px;
    }

    .newsTitle{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .mui-ellipsis{
        margin-top: 20px;
        color: #0094ff;
        font-size: 12px;
    }

    .right{
        float: right;
    }
</style>

<script>
    import  common from '../common/common.js'
    export default {

        data(){

            return {

                newsListArray : []
            }
        },
        created (){

            this.getNewsListData();
        },

        methods :{

            getNewsListData : function(){

                const url  =  common.apihost + '/api/getnewslist';
                // console.log(url);
                this.$http.get(url).then((res)=>{

                  this.newsListArray =  res.body.message

                },(error)=>{
                    console.log(error);
                })
            }
        }

    }

</script>