<template>
  <div class="forget_content">
    <back title="注册协议"></back>
    <div class="forget" v-html="data">
      {{data}}
    </div>
  </div>

</template>


<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import {getRecommend, getDiscList, requestOpt, alertip} from 'api/recommend'
  export default {
    data (){
      return  {
        data : []
      }
    },
    components: {
      Back
    },
    mounted(){
      requestOpt.reqnoGetpara('registration_contract', {
        data : []
      }, (res) => {
        this.data = res.data;
      }, (err) => {
        alertip(err)
      });
    },
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .forget_content{
    width :7.5rem;
    height: 13.34rem;
    display block
    overflow auto
    background #ffffff
  }
  .forget{
    width 7.5rem
    height auto
    display block
    margin auto
    background #ffffff
    margin-top 1rem
    font-size 0.26rem
    color #000000
    margin-bottom 0.1rem
  }


</style>










































































