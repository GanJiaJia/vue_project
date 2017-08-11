<template>

    <div>
        <div class="tabbar">
            <router-link to="/findMusic">
                <div>
                    <div>
                        <span class="icon-wangyi"> </span>
                        <span>发现音乐</span>
                    </div>
                </div>
            </router-link>

            <router-link to="/myMusic">
                <div>
                    <div>
                        <span class="icon-music"> </span>
                        <span>我的音乐</span>
                    </div>

                </div>
            </router-link>

            <router-link to="/friend">
                <div>
                    <div>
                        <span class="icon-friend"> </span>
                        <span>朋友</span>
                    </div>
                </div>
            </router-link>


            <router-link to="/account">
                <div>
                    <div>
                        <span class="icon-collect"> </span>
                        <span> 账号</span>
                    </div>
                </div>
            </router-link>

        </div>
    </div>

</template>

<style scoped>
    html,
    body {
        height: 100%;
        width: 100%;
    }

    body {
        margin: 0;
        padding: 0;
    }

    .tabbar {
        height: 50px;
        width: 100%;
        background: #292929;
        position: fixed;
        bottom: 0;
        z-index: 5;
        display: flex;
        justify-content: space-around;
    }

    .tabbar a {
        flex: 1;
        text-decoration: none;
        text-align: center;
        padding: 5px;
    }

    .tabbar a span {
        display: block;
        color: #fff;
        font-family: "MicroSoft YaHei"
        /* font-family: "微软雅黑" */
    }

    .tabbar a span:nth-child(1) {
        font-size: 25px;
    }

    .tabbar a span:nth-child(2) {
        font-size: 8px;
    }

    .router-link-exact-active.router-link-active span {
        color: #cd3c37;
    }
</style>

<script>

    export default {

        data(){
            return {

            }
        }
    }

</script>