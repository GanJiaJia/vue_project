<template>

    <div class="tjgd">
        <h3><i></i> <span>{{title}}</span></h3>
        <div class="songList_content">
            <div class="top_cont" v-for="(item,index) in SongListData">
                <img :src="item.picUrl" alt="">
                <p>{{ item.name }} </p>
                <span v-if="item.playCount" class="icon-playdetail top_cont_erji"> {{ item.playCount | parseCount }}</span>
            </div>
        </div>

    </div>

</template>



<script>
    import {
        api
    } from '../common/api.js';
    export default {

        data() {

            return {
                SongListData: [],
                isShowOrHideen: true
            }
        },

        created() {

            this.getListData()
        },

        props: {

            title: String,
            songList_url: String,
        },
        methods: {

            getListData() {
                const url = api + this.songList_url;
                this.$axios.get(url).then((res) => {
                    this.SongListData = res.data.result;
                    // console.log(res);
                }).catch((err) => {
                    console.log(err);
                })
            }
        },
        filters: {
            parseCount(input) {
                if (input == undefined || input == null || input == "") {
                    return
                }
                return (parseInt(input / 10000)) + '万';
            }
        }
    }
</script>

<style scoped>
    .tjgd h3 {
        height: 40px;
        line-height: 40px;
    }

    .tjgd h3 i {
        display: inline-block;
        width: 3px;
        height: 15px;
        margin-right: 10px;
        background: #cd3c37;
        margin-top: -5px;
        vertical-align: middle;
        ;
    }

    .tjgd h3 span {

        font-size: 15px;
        font-weight: 700;
    }

    .songList_content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .top_cont {
        width: 49%;
        position: relative;
        margin-bottom: 10px;
    }

    .top_cont img {

        width: 100%;
        height: 100px;
        background: pink;
    }

    .top_cont_erji {
        position: absolute;
        color: #fff;
        right: 5px;
        top: 5px;
    }

    .top_cont p {
        box-sizing: border-box;
        padding: 6px;
        padding-bottom: 0px;
        font-size: 8px;
        color: #666;
        overflow: hidden;

        text-overflow: ellipsis;

        display: -webkit-box;

        -webkit-box-orient: vertical;

        -webkit-line-clamp: 2;
    }
</style>