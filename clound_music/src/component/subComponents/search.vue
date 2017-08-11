<template>
    <div>
        <header> 
            <span class="input_voice"></span>
            <input type="search" class="search" placeholder="搜索音乐、歌词、电台">
            <span class="cancle">取消</span>
        </header>
    </div>
</template>

<style scoped>
    header{
        height: 45px;
        width: 100%;
        background: #cd3c37;
        position: fixed;
        top: 0;
        z-index: 2;
    }

    header .input_voice {
        display: inline-block;
        width: 30px;
        height: 30px;
        background: url('../../assets/image/left_input_icon.png') no-repeat center/cover;
         /* margin-top: 9px;  */
         margin-left: 10px;
        vertical-align: middle;
    } 

    .search{
        height: 28px;
        width: 80%;
        border-radius: 30px;
        padding-left: 30px;
        margin-top: 10px;
    }

    .cancle {
    display: inline-block;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
         margin-left: 7px;
         color: #fff;
         display: none;
    }
    
</style>
<script>
    export default{



    }
</script>