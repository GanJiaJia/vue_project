<template >

    <div class="login">
        <div class="logo icon-wangyi"></div>
        <router-link to="/phoneLogin">
            <div class="phone">手机号登陆</div>
        </router-link>
        
        <div class="regist">注册</div>

        <router-link to="/findMusic">
             <div class="customer">游客试用</div>
        </router-link>
    </div>

</template>


<script>
    export default {

        data() {

            return {

            }
        },
        created() {

        }
    }
</script>


<style scoped>
    body,
    html {
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

     body>div{
        height: 100%;
        width: 100%;
    } 

    .login {
        overflow-y:visible ;
        width: 100%;
        height: 35.5rem; 
         overflow: hidden; 
         background: #eee;
        /* background: url('../../assets/image/bg.png') no-repeat center/cover; */
        position: relative;
        z-index: 999;
    }
    .logo {

        width: 100px;
        height: 100px;
        background: #cd3c37;
        border-radius: 20px;
        font-size: 100px;
        color: #fff;
        margin: 0 auto;
        margin-top: 30%;
        margin-bottom: 20%;
    }
    .phone, .regist{

        width: 60%;
        margin: 0 auto;
        border-radius: 20px;
        border: 1px solid  #cd3c37;
        color: #cd3c37;
        text-align: center;
        height: 30px;
        line-height: 30px;
        margin-bottom: 30px;
    }
    .customer{

        text-decoration: underline;
        font-size: 15px;
        text-align: center;
        padding-top: 20px;
    }
</style>
