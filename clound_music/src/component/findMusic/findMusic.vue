<template>
    <div class="temp">
        <search> </search>

        <mt-navbar v-model="active" fixed style="top:45px;">
            <mt-tab-item id="gxtj" @click="navSwitch('gxtj')" icon>个性推荐</mt-tab-item>
            <mt-tab-item id="gd" @click="navSwitch('gd')">歌单</mt-tab-item>
            <mt-tab-item id="zb" @click="navSwitch('zb')">主播</mt-tab-item>
            <mt-tab-item id="phb" @click="navSwitch('phb')">排行榜</mt-tab-item>
        </mt-navbar>





        <mt-tab-container v-model="active">
            <mt-tab-container-item id="gxtj">
                <subSwiper :banner_url="'/banner'" :timer="timer"> </subSwiper>
                <div class="everyday_music">

                    <div>
                        <router-link to="/personalFM">
                            <div class="icon-fm"></div>
                        </router-link>
                        <p>私人FM</p>
                    </div>



                    <div>
                        <router-link to="everyDaySong">
                            <div class="icon-date"></div>
                            <p>每日歌曲推荐</p>
                        </router-link>
                    </div>


                    <div>
                        <div class="icon-rank-list"></div>
                        <p>云音乐热歌榜</p>
                    </div>

                </div>
                <recommendSongList :title="'推荐歌单   >'" :songList_url="'/personalized'"> </recommendSongList>
                <recommendSongList :title="'独家放送    >'" :songList_url="'/personalized/privatecontent'"> </recommendSongList>
                <recommendMV :title="'推荐MV     >'" :songList_url="'/personalized/mv'"></recommendMV>
            </mt-tab-container-item>


            <mt-tab-container-item id="gd">
                <mt-cell v-for="n in 4" :title="'歌单 ' + n" />
            </mt-tab-container-item>

            <mt-tab-container-item id="zb">
                <mt-cell v-for="n in 6" :title="'主播 ' + n" />
            </mt-tab-container-item>

            <mt-tab-container-item id="phb">
                <mt-cell v-for="n in 6" :title="'排行榜 ' + n" />
            </mt-tab-container-item>
        </mt-tab-container>


        <subTabbar></subTabbar>
    </div>
</template>

<script>
    import {
        api
    } from '../common/api.js'
    import search from '../subComponents/search.vue';
    import subSwiper from '../subComponents/subSwiper.vue'
    import recommendSongList from '../subComponents/recommendSongList.vue'
    import recommendMV from '../subComponents/recommendMV.vue';
    import {Indicator} from 'mint-ui';
    import subTabbar from '../subComponents/subTabbar.vue';

    export default {

        data() {
            return {
                active: 'gxtj',
                timer: 2000
            }
        },
        created() {

        },
        components: {
            search,
            subSwiper,
            recommendSongList,
            recommendMV,
            subTabbar
        },
        methods: {

            navSwitch(id) {
                this.active = id;
            },


        }
    }
</script>



<style scoped>
    body {
        height: 100%;
    }

    .temp {
        /* overflow: auto; */
        margin-bottom: 50px;
    }
    /* navbar部分 */

    .mint-navbar .mint-tab-item.is-selected {
        box-sizing: border-box;
        border-bottom: 2px solid red;
        margin-bottom: 0px;
    }

    .temp {
        margin-top: 90px;
    }
    /* 轮播图部分 */
    /* 私人fm 每日歌曲推荐 云音乐热歌榜 */

    .everyday_music {
        width: 100%;
        height: 120px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid #ddd;
    }

    .everyday_music>div {
        flex: 1;
    }

    .everyday_music>div div,
    .everyday_music>div p {
        margin: 0 auto;
        text-align: center;
    }

    .everyday_music>div div {

        width: 50px;
        height: 50px;
        line-height: 50px;
        border: 1px solid #cd3c37;
        border-radius: 50%;
        font-size: 35px;
        color: #cd3c37;
        margin-bottom: 5px;
    }

    .mint-tab-container {

        min-height: 500px;
        overflow: auto;
    }

    .mint-tab-container div.mint-tab-container-item {

        /* height: 800px; */
    }
</style>