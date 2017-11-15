<template>
    
    <div class="about">
       <back title="关于我们" go-back="true"></back>
        <div class="about_cont">
            <div class="about_cont_img"></div>
            <h3>彩 票 125</h3>
            <h4>v.1.0.0</h4>
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
     
  },
  mounted(){
      this.startFn();
  }
};
</script>

<style scoped>
.about{
    height : 100%;
    background: #fff;
    padding-top : 2rem;
    
}
.about_cont{
    margin-top : 0.88rem;
    
}

.about_cont_img{

    width : 2.2rem;
    height: 2.2rem;
    background: url('../../images/logo.png') no-repeat center / cover;
    margin : 0 auto;
}

.about_cont  h3{

    color : red;
    /* font-weight: 600; */
    font-size : .5rem;
    text-align : center;
    padding-top:.5rem;
}

.about_cont  h4{

 color : silver;
 font-size :.4rem;
 text-align: center;
 padding-top : .5rem;

}
</style>

