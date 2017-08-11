<template>
    <div>
        <header>
            <span class="icon-left" @click="goBackBtn">  </span>
            <h3>手机号登陆</h3>
        </header>
        <div class="input_data">
            <div class="phonenum icon-community" >
                <input type="text" class="" placeholder="手机号" ref="phoneInput">
            </div>
            <div class="password icon-edit-paper" >
                <input type="password" placeholder="密码" ref="passwordInput">
            </div>

            <div class="login_btn" @click="phoneLogin">登陆</div>
            <div class="redPassword">重设密码</div>
        </div>
    </div>
</template>


<script>
    import { api } from '../common/api.js';
    export default {

        data(){
            return {

            }
        },

        methods:{

            goBackBtn(){

                this.$router.go(-1);
            },

            phoneLogin(){

                const url = api + '/login/cellphone';
                let phoneValue = this.$refs.phoneInput.value;
                let passwordValue = this.$refs.passwordInput.value;
                console.log(phoneValue);
                console.log(passwordValue);
                this.$axios(url,{

                    params:{
                        phone : phoneValue,
                        password : passwordValue
                    }

                }).then((res)=>{

                    console.log(res);

                }).catch((err)=>{

                    console.log(err);

                })

            }
        }


    }
</script>

<style scoped>
    header {
        height: 45px;
        width: 100%;
        background: #cd3c37;
        position: fixed;
        top: 0;
        z-index: 2;
        display: flex;
        position: relative;
    }

    header span {
        display: inline-block;
        width: 20px;
        font-size: 20px;
        color: #fff;
        height: 100%;
        line-height: 50px;
        padding: 0 15px;
    }

    header h3 {

        display: inline-block;
        font-size: 15px;
        color: #fff;
        height: 100%;
        vertical-align: top;
        line-height: 50px;
        text-align: center;
        position: absolute;
        left: 50%;
        margin-left: -37.5px;
    }

    .input_data {
        box-sizing: border-box;
        width: 100%;
        padding: 20px;
    }

    .phonenum,
    .password {

        width: 100%;
        font-size: 20px;
        /* vertical-align: middle; */
        position: relative;
    }

    .phonenum::before,.password::before {
        position: absolute;
        left: 0;
        top: 6px;
    }
   

    .phonenum input,
    .password input {
        box-sizing: border-box;
        width: 100%;
        border-bottom: 1px solid #ddd;
        height: 35px;
        padding-left: 35px;
        margin-bottom: 10px;
    }
    .login_btn{

        width: 100%;
        height: 35px;
        border-radius: 30px;
        background: #cd3c37;
        margin-top: 20px;
        color: #fff;
        text-align: center;
        line-height: 35px;
        letter-spacing: 0.5em;
    }

    .redPassword{
        margin-top: 20px;
        text-decoration: underline;
        font-size: 15px;
        text-align: center;
    }
</style>