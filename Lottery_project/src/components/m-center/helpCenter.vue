<template>
    
    <div class="helpCenter">
       <back title="帮助中心" go-back="true"></back>
        <div v-html="pageData">
        </div>
    </div>

</template>

<script type="text/ecmascript-6">
import Back from "@/components/back/back";
import ElSwitch from "../../../node_modules/element-ui/packages/switch/src/component.vue";
import {
  alertip,
  requestOpt,
  mt_loading_open,
  mt_loading_close
} from "api/recommend";

import { mapState, mapActions } from "vuex";
import { USER_SIGNOUT } from "../../store/user";
import { Switch } from "mint-ui";

export default {
  components: {
    ElSwitch,
    Back,
  },
  data() {
    return {
        pageData: '',
    };
  },

  methods: {
      startFn(){
          requestOpt.reqnoGet('help_page',
          (res)=>{
            //   console.log(res.data);
              this.pageData = res.data;
          }, (err)=>{
              alertip(err);
          })
      }
  },
  mounted(){
      this.startFn();
  }
};
</script>

<style scoped>

    .helpCenter>div:nth-child(2){

        margin-top:1rem;
        color : #000;
        text-align : center;
        
    }

     .helpCenter>div:nth-child(2) p  {
         height : 50px;
         line-height:50px;
     }

    .item h3{
        margin-top : 1rem;
    }
</style>

