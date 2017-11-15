<template>
    <div class="lower-account">

        <Back title="" go-back="true">  </Back>  
        <div class="top_tab">
            <div class="top_tab_box" ref="top_tab_box">
                <div class="top_tab_left active" @click="top_tab_btn(0)">下级开户</div>
                <div class="top_tab_right" @click="bottom_tab_btn(1)">查看邀请码</div>
            </div>
        </div>
        <div class="lower-account-cont" ref="lower_account_cont">
                <div class="lower-account-cont-left" >
                    <div class="cont-top" ref="cont_top">
                        <div class="cont-top-left" @click="account_btn_left(0)" >
                            <div class="cont-top-left-main">
                                <div class="cont-top-left-main-box">
                                    <i></i>
                                    <span></span>
                                </div>
                                <h4>代理账号</h4>
                            </div>
                        </div>
                        <div class="cont-top-right" @click="account_btn_right(1)">
                            <div class="cont-top-left-main">
                                <div class="cont-top-left-main-box">
                                    <i></i>
                                    <span></span>
                                </div>
                                <h4>玩家账号</h4>
                            </div>
                        </div>
                    </div>
                     <div class="select_kaihu_box">
                         <span>开户类型:</span>
                         <div class="select_kaihu" ref="select_kaihu">
                            <div class="select_kaihu_input_left active" @click="changeInput_left(0)">
                                <i></i>
                                <input type="radio" checked="checked" id="jz_kaihu" name="kaihu_type"></input>
                                <label for="jz_kaihu">精准开户</label>
                            </div> 

                            <div class="select_kaihu_input_right" @click="changeInput_right(1)">
                                <i></i>
                                <input type="radio" id="wj_zhanghu" name="kaihu_type"></input>
                                <label for="wj_zhanghu" >生成邀请码</label>
                            </div>
                         </div>
                     </div>
                     <div class="select_content_box" ref="select_content_box">
                         <div class="select_content_left">
                             <div class="content_user">
                                 <label>用户名:</label>
                                 <input type="text" max-length="20" placeholder="请输入用户名" v-model="input_name"></input>
                             </div>
                             
                              <div class="return_point" @click="showList" ref="return_point">
                                 <label>彩票返点:</label>
                                 <input type="text" max-length="20" readonly class="point_input" ref="point_input1"></input>
                                 <ul ref="ulTag1" v-if="isShowUl">
                                     <li v-for="(items, indexs) in point_list" v-if="indexs != 0" @click="getIndex(indexs)">{{items[0]}}-{{items[1] | checkNum}} (赔率)</li>
                                     <!-- <li>1970--赔率</li>
                                     <li>1960--赔率</li>
                                     <li>1950--赔率</li>
                                     <li>1940--赔率</li>
                                     <li>1930--赔率</li>
                                     <li>1920--赔率</li>
                                     <li>1910--赔率</li> -->
                                 </ul>
                             </div>
                             <h5>初始密码为123456</h5>
                             <router-link to="/user-manage" tag="div">
                             <h6 @click="sure_btn">立即开启</h6>
                             </router-link>
                         </div>
                         <div class="select_content_right">

                                 <div class="content_user">
                                 <label>邀请码:</label>
                                 <input type="text" max-length="20" v-model="invit_code" class="invit_code" ref="invit_code"></input>
                                 <span @click="codeSelect">随机选码</span>
                             </div>
                             
                              <div class="return_point" @click="showList">
                                 <label>彩票返点:</label>
                                 <input type="text" max-length="20" readonly class="point_input" ref="point_input2"></input>
                                 <ul ref="ulTag2" v-if="isShowUl">
                                     <li v-for="(items, indexs) in point_list" v-if="indexs != 0" @click="getIndex2(indexs)">{{items[0]}}-{{items[1] | checkNum}} (赔率)</li>
                                 </ul>
                             </div>
                             <h5>初始密码为123456</h5>
                             <h6 @click="code_sure_btn">生成邀请码</h6>
                         </div>
                     </div>
                </div>
                <div class="lower-account-cont-right" >
                    <mt-loadmore :top-method="loadTop" :auto-fill="false" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
                        <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>邀请码</td>
                                    <th>类型</th>
                                    <th>返点</th>
                                    <th>状态</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody> 
                                    <tr v-for="(items,indexs) in codeList">
                                        <td> {{ items.code }} </td>
                                        <td :class="items.proxy_type == 2 ? 'smallFont' : ''">{{items.proxy_type == 1 ? '代理' : '普通下线'}}</td>
                                        <td> {{items.return_ratio}}</td>
                                        <td> {{items.status == 1 ? '启用' : '禁用'}}</td>
                                        <td>
                                            <button class="modify" @click= "modify_data(items)">修改</button>
                                            <button class="delete"  @click= "delete_data(items)">删除</button>
                                        </td>
                                    </tr>
                                   

                            </tbody>
                        </table>
                        <p style="height:.8rem;color:#929292;font-size:13px;line-height:.8rem;text-align:center" v-if="isMore_data">暂无更多数据</p>
                        </div>
                    </mt-loadmore>
                </div>
        </div>
        
        <transition name="fade" v-show="isShowBottom_data">
                <div class="fixed_bottom" v-show="isShowBottom_data">
                    <div class="fixed_code">邀 请 码: <span ref="fixed_code">Ea51uyHH</span></div> 
                    <div class="fixed_type">
                        <div class="fixed_type_box">
                            <span>开户类型:</span>
                            <div class="fixed_type" ref="fixed_type">
                                <div class="fixed_type_input_left active">
                                    <i></i>
                                    <input type="radio" checked="checked" id="daili" name="account_type" @click="acount_type_left(0)"></input>
                                    <label for="daili">代理</label>
                                </div> 

                                <div class="fixed_type_input_right">
                                    <i></i>
                                    <input type="radio" id="sc_code" name="account_type" @click="acount_type_right(1)"></input>
                                    <label for="sc_code" >普通下线</label>
                                </div>
                            </div>
                        </div>
                    </div>

                      <div class="code_status">
                        <div class="code_status_box">
                            <span>开户类型:</span>
                            <div class="code_status" ref="code_status">
                                <div class="code_status_input_left active">
                                    <i></i>
                                    <input type="radio" checked="checked" id="qiyong" name="account_type" @click="can_use_left(0)"></input>
                                    <label for="qiyong">启用</label>
                                </div> 

                                <div class="code_status_input_right">
                                    <i></i>
                                    <input type="radio" id="jinyong" name="account_type" @click="can_use_right(1)"></input>
                                    <label for="jinyong" >禁用</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="return_point" @click="showList_bottom" ref="return_point3">
                            <label>彩票返点:</label>
                            <input type="text" max-length="20" readonly class="point_input" ref="point_input3"></input>
                            <ul ref="ulTag3" v-if="isShowUl_bottom">
                                <li v-for="(items, indexs) in point_list" v-if="indexs != 0" @click="getIndex_bottom(indexs)">{{items[0]}}-{{items[1] | checkNum}} (赔率)</li>
                                <!-- <li>1970--赔率</li>
                                <li>1960--赔率</li>
                                <li>1950--赔率</li>
                                <li>1940--赔率</li>
                                <li>1930--赔率</li>
                                <li>1920--赔率</li>
                                <li>1910--赔率</li> -->
                            </ul>
                    </div>
                    <h6 class="suer_modefy_btn" @click="suer_modefy_btn">确定修改</h6>
                </div>
        </transition>

        <div class="bg_zhezhao" v-show="isShowBottom_data" @click="isShowBottom_data = !isShowBottom_data">

        </div>
        <!-- <div class="bg_no_data"  v-if="when_no_data">

        </div> -->
    </div>

</template>

<script>
import { Radio } from "mint-ui";
import { Indicator } from "mint-ui";
import { MessageBox } from "mint-ui";
import { alertip, requestOpt } from "api/recommend";
import { mapState } from "vuex";
import Back from "@/components/back/back";
export default {
  components: {
    Back
  },

  // <td> {{ items.code }} </td>
  // <td :class="items.proxy_type == 2 ? 'smallFont' : ''">{{items.proxy_type == 1 ? '代理' : '普通下线'}}</td>
  // <td> {{items.return_ratio}}</td>
  // <td> {{items.status == 1 ? '启用' : '禁用'}}</td>
  // <td>

  data() {
    return {
      flag: true,
      isShowUl: false,
      isShowUl_bottom: false,
      //   user: "",
      point_list: [],
      return_point: "",
      proxy_type: 1,
      return_ratio: 0,
      input_name: "",
      invit_code: "",
      return_ratio2: 0,
      allLoaded: false,
      codeList: [],
      return_ratio3: 0,
      isShowBottom_data: false,
      curr_page: 1,
      total_pages: 1,
      isMore_data: false,
      invcode_id: 0,
      new_codeList: [],
      modify_proxy_type: 1,
      modify_status: 1,

      when_no_data : false,
      //   items_code : '',
    };
  },
  computed: mapState({
    user: state => state.user
  }),
  methods: {
    //   顶部导航栏切换
    top_tab_btn(index) {
      this.switchTab(index);
    },
    bottom_tab_btn(index) {
      this.switchTab(index);
      document.querySelectorAll(".mint-loadmore-text")[0].style.color = "#000";
      document.querySelectorAll(".mint-loadmore-text")[1].style.color = "#000";

      
      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
      requestOpt.reqGet(
        "proxy_downline_invcodes?page=" + this.curr_page,
        this.user.token,
        res => {
          console.log(res);
          this.total_pages = res.data.data.paging_arr.total_pages;
          this.curr_page = res.data.data.paging_arr.curr_page;
           Indicator.close();
          if (res.data.data.list.length <= 0) {
            console.log(111);
            document.querySelector(".lower-account").classList.add("noData");
             return;
            // this.isMore_data = false;
          } else {
            document.querySelector(".lower-account").classList.remove("noData");
          }
           this.codeList = res.data.data.list;
          // if(this.curr_page  >= this.total_pages ){ 
             
             
          //     };
         
          Indicator.close();
        },
        err => {
          alertip(err.data.msg);
        }
      );
    },

    switchTab(index) {
      var len = this.$refs.top_tab_box.children.length;
      for (var i = 0; i < len; i++) {
        this.$refs.top_tab_box.children[i].classList.remove("active");
        this.$refs.lower_account_cont.children[i].style.display = "none";
      }
      this.$refs.top_tab_box.children[index].classList.add("active");
      this.$refs.lower_account_cont.children[index].style.display = "block";
    },
    // 代理账号和玩家账号切换
    account_btn_left(index) {
      this.select_account(index);
      this.proxy_type = 1;
      //   console.log(this.proxy_type);
    },
    account_btn_right(index) {
      this.select_account(index);
      this.proxy_type = 2;
      //   console.log(this.proxy_type);
    },

    select_account(index) {
      var len = this.$refs.cont_top.children.length;
      for (var i = 0; i < len; i++) {
        this.$refs.cont_top.children[i].classList.remove("active");
      }
      this.$refs.cont_top.children[index].classList.add("active");
    },
    // 单选框选择切换
    changeInput(index) {
      var len = this.$refs.select_kaihu.children.length;
      for (var i = 0; i < len; i++) {
        this.$refs.select_kaihu.children[i].classList.remove("active");
        this.$refs.select_content_box.children[i].style.display = "none";
      }
      this.$refs.select_kaihu.children[index].classList.add("active");
      this.$refs.select_content_box.children[index].style.display = "block";
    },

    changeInput_left(index) {
      this.changeInput(index);
      this.$refs.point_input2.value = "";
      this.invit_code = "";
    },
    changeInput_right(index) {
      this.changeInput(index);
      this.$refs.point_input1.value = "";
      this.input_name = "";
    },
    // 获取sessionStorage里面的数据
    getUserInfo() {
      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
      requestOpt.reqnoGet(
        "config",
        res => {
          this.point_list = res.data.data.config.proxy_return_rates;
          sessionStorage.setItem(
            "config",
            JSON.stringify(res.data.data.config)
          );
          Indicator.close();
        },
        err => {
          alertip(err.data.msg);
        }
      );
      //   this.user = JSON.parse(sessionStorage.getItem("user"));
      //   console.log(this.user);
      this.user.userinfo.proxy_type == 1
        ? this.select_account(0)
        : this.select_account(1);
    },

    // 显示多选列表

    showList() {
      this.isShowUl = !this.isShowUl;
    },

    showList_bottom() {
      this.isShowUl_bottom = !this.isShowUl_bottom;
    },

    getIndex(index) {
      var ulLis = this.$refs.ulTag1.children;
      for (var i = 0; i < ulLis.length; i++) {
        if (index == i + 1) {
          // console.log();
          this.$refs.point_input1.value = ulLis[i].innerHTML.substr(0, 4);
          //   this.$refs.point_input2.value = ulLis[i].innerHTML.substr(0, 4);
          this.return_ratio = Number(this.$refs.point_input1.value);
          //   this.return_ratio2 = Number(this.$refs.point_input2.value);
        }
      }
    },

    getIndex2(index) {
      var ulLis = this.$refs.ulTag2.children;
      for (var i = 0; i < ulLis.length; i++) {
        if (index == i + 1) {
          this.$refs.point_input2.value = ulLis[i].innerHTML.substr(0, 4);
          this.return_ratio2 = Number(this.$refs.point_input2.value);
        }
      }
    },

    getIndex_bottom(index) {
      var ulLis = this.$refs.ulTag3.children;
      for (var i = 0; i < ulLis.length; i++) {
        if (index == i + 1) {
          this.$refs.point_input3.value = ulLis[i].innerHTML.substr(0, 4);
          this.return_ratio3 = Number(this.$refs.point_input3.value);
        }
      }
    },
    // 开户
    sure_btn() {
      if (this.input_name.length < 6) {
        alertip("用户名至少6个字符");
        return;
      }
      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
      requestOpt.reqPost(
        "proxy_downline",
        this.user.token,
        {
          username: this.input_name,
          proxy_type: this.proxy_type,
          return_ratio: this.return_ratio
        },
        res => {
          Indicator.close();
          if (res.status !== 1) {
            MessageBox.alert(res.data.msg).then(action => {
            //   console.log(action);
              var inputs = document.querySelectorAll("input");
              for (var i = 0; i < inputs.length; i++) {
                inputs[i].value = "";
              }
            //   this.$router.go('/user-manage');
            });
          }
        },
        err => {
          alertip(err.data.msg);
        }
      );
    },
    // 随机选码
    codeSelect() {
      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
      requestOpt.reqGet(
        "proxy_downline_invcode?status=1&&proxy_type=" + this.proxy_type,
        this.user.token,
        res => {
          //   console.log(res);
          this.invit_code = res.data.data.code;
          Indicator.close();
        },
        err => {
          alertip(err.data.msg);
        }
      );
    },
    // 生成邀请码
    code_sure_btn() {
      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
      requestOpt.reqPut(
        "proxy_downline_invcode",
        this.user.token,
        {
          proxy_type: this.proxy_type,
          code: this.invit_code,
          return_ratio: this.return_ratio2
        },
        res => {
          Indicator.close();
          MessageBox.alert(res.data.msg).then(action => {
            this.bottom_tab_btn(1);
          });
          this.invit_code = "";
          var inputs = document.querySelectorAll("input");
          for (var i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
          }
        },
        err => {
          Indicator.close();
          alertip(err.data.msg);
        }
      );
    },
    // 获取邀请码列表
    // 下拉刷新
    loadTop() {
     this.curr_page = 1;
     this.allLoaded = false;
    this.isMore_data = false;
      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
      requestOpt.reqGet(
        "proxy_downline_invcodes?page=" + this.curr_page,
        this.user.token,
        res => {
          if (res.data.data.list.length <= 0) {
            // this.isMore_data = true;
            document.querySelector(".lower-account").classList.add("noData");
          } else {
            // this.isMore_data = false;
            document.querySelector(".lower-account").classList.remove("noData");
          }
          this.codeList  = res.data.data.list;
          this.total_pages = res.data.data.paging_arr.total_pages;
        //   this.curr_page = res.data.data.paging_arr.curr_page;
          Indicator.close();
        },
        err => {
          alertip(err.data.msg);
        }
      );
      var that = this;
      setTimeout(function() {
        that.$refs.loadmore.onTopLoaded();
      }, 800);
    },
    //   上拉加载
    loadBottom() {
      var that = this;
      if (this.curr_page >= this.total_pages) {
        this.allLoaded = true;
        this.isMore_data = true;
        setTimeout(function() {
          that.$refs.loadmore.onBottomLoaded();
        }, 800);
        return;
      }

      this.curr_page++;
      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
      requestOpt.reqGet(
        "proxy_downline_invcodes?page=" + this.curr_page,
        this.user.token,
        res => {
          // console.log(res);
          this.codeList = this.codeList.concat(res.data.data.list);
          this.total_pages = res.data.data.paging_arr.total_pages;
          this.curr_page = res.data.data.paging_arr.curr_page;
          if (this.codeList.length <= 0) {
            this.isMore_data = true;
          } else {
            this.isMore_data = false;
          }
          Indicator.close();
        },
        err => {
          alertip(err.data.msg);
        }
      );
      setTimeout(function() {
        that.$refs.loadmore.onBottomLoaded();
      }, 800);
    },
    // 修改中的单选框切换
    mo_changeInput(index) {
      var len = this.$refs.fixed_type.children.length;
      for (var i = 0; i < len; i++) {
        this.$refs.fixed_type.children[i].classList.remove("active");
      }
      this.$refs.fixed_type.children[index].classList.add("active");
    },
    acount_type_left(index) {
      this.mo_changeInput(index);
      this.modify_proxy_type = 1;
      //    this.proxy_type = ;
    },
    acount_type_right(index) {
      this.mo_changeInput(index);
      this.modify_proxy_type = 2;
    },
    // 禁用和启用单选框切换
    use_changeInput(index) {
      var len = this.$refs.code_status.children.length;
      for (var i = 0; i < len; i++) {
        this.$refs.code_status.children[i].classList.remove("active");
      }
      this.$refs.code_status.children[index].classList.add("active");
    },

    can_use_left(index) {
      this.use_changeInput(index);
      this.modify_status = 1;
    },
    can_use_right(index) {
      this.use_changeInput(index);
      this.modify_status = 0;
    },
    // 修改邀请码
    modify_data(data) {
      //   console.log(data);
      this.isShowBottom_data = true;
      this.invcode_id = data.id;
      this.$refs.fixed_code.innerText = data.code;
      this.modify_status = data.status;
      data.status == 1 ? this.can_use_left(0) : this.use_changeInput(1);
      this.modify_proxy_type = data.proxy_type;
      data.proxy_type == 1
        ? this.acount_type_left(0)
        : this.acount_type_right(1);
      this.$refs.point_input3.value = data.return_ratio;
    },
    // 确定修改邀请码
    suer_modefy_btn() {
     
      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
      requestOpt.reqPut(
        "proxy_downline_invcode/" + this.invcode_id,
        this.user.token,
        {
          proxy_type: this.modify_proxy_type,
          code: this.$refs.fixed_code.innerText,
          return_ratio: this.$refs.point_input3.value,
          status: this.modify_status
        },
        res => {
          this.isShowBottom_data = false;
          this.loadTop();
          Indicator.close();
          //   console.log(res);
          MessageBox.alert(res.data.msg).then(action => {});
          //   this.invit_code = "";
          //   var inputs = document.querySelectorAll("input");
          //   for (var i = 0; i < inputs.length; i++) {
          //     inputs[i].value = "";
          //   }
        },
        err => {
          Indicator.close();
          MessageBox.alert(res.data.msg).then(action => {});
        }
      );
    },
    delete_data(data) {
      MessageBox.confirm("确定执行此操作?").then(action => {
        Indicator.open({
          text: "加载中...",
          spinnerType: "fading-circle"
        });
        this.invcode_id = data.id;
        requestOpt.reqDelete(
          "proxy_downline_invcode?invcode_id=" + this.invcode_id,
          this.user.token,
          res => {
            this.loadTop();
            Indicator.close();
            MessageBox.alert(res.data.msg).then(action => {});
          },
          err => {
            Indicator.close();
            MessageBox.alert(res.data.msg).then(action => {});
          }
        );
      });
    }

    // 删除邀请码

    // 运动函数
    // animatess(tag,obj){
    //     // console.log(obj.height);
    //     var that = this;
    //     clearInterval(tag.timer);
    //     tag.timer = setInterval(function(){
    //        var flag = true;
    //         for(var key in obj){
    //             var attr = key;
    //             var target = obj[key];
    //             var leader = parseInt(that.getStyle(tag,attr)) || 0;
    //             var step = (target - leader) / 10;
    //             step = step > 0 ? Math.ceil(step) : Math.floor(step);
    //             leader = leader + step;
    //             tag.style[attr] = leader  + 'px';

    //             if(leader != target){
    //                 flag = false;
    //             }
    //         }

    //         if(flag){
    //             clearInterval(tag.timer);
    //         }
    //     },20)

    // },

    // getStyle(tag,attr) {

    //     return tag.currentStyle ? tag.currentStyle[attr] : getComputedStyle(tag, null)[attr];
    // }
  },
  mounted() {
    this.getUserInfo();
    this.switchTab(0);
    this.select_account(0);
  },
  filters: {
    checkNum(value) {
      //   console.log(value = value.toString().split('.')[1].toString().length);
      //   value = value.toString().split(".").length < 1 ? value + '0' : value;
      if (
        value.toString().indexOf(".") !== -1 &&
        value.toString().length <= 4
      ) {
        value += "0";
      }
      return value;
    }
  }
};
</script>

<style scoped>

/* .bg_no_data{
  width:100%;
  min-height:11rem;
  height :100%;
  background : #fff url('../../images/no_data.png') no-repeat center / 25% 25%;
} */

.select_content_box {
  background: #fff;
}
/* 确定删除按钮样式 */
/* button.mint-msgbox-btn.mint-msgbox-confirm {
    background: #ff3a3b;
    color:#fff;
} */

/* 遮罩层 */
.bg_zhezhao {
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 100%;
  height: aut0;
  background: rgba(0, 0, 0, 0.25);
  z-index: 1001;
}

.smallFont {
  font-size: 11px;
}
.lower-account {
  min-height: 100%;
  height: auto;
  background: #fff;
  padding-top: 0.88rem;
}
.lower-account.noData {
  background: #fff url("../../images/no_data.png") no-repeat center / 25% 25%;
}
.top_tab {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 3rem;
  height: 0.88rem;
  line-height: 0.7rem;
  z-index: 1000;
  padding: 0.1rem 0;
  box-sizing: border-box;
  margin: 0 auto;
}

.top_tab_box {
  width: 100%;
  height: 100%;
  display: flex;
  /* border-radius: 5px; */
}
.top_tab_box > div {
  width: 100%;
  height: 100%;
  flex: 1;
  text-align: center;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
}

.top_tab_box > div:nth-child(1) {
  border-left: 1px solid #fff;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.top_tab_box > div:nth-child(2) {
  border-right: 1px solid #fff;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.top_tab_box > div.active {
  background: #fff;
  /* background : pink; */
  color: red;
  /* border-radius: 5px; */
}

/* 下级开户和代理账号和玩家账号选择 */
.cont-top {
  width: 100%;
  height: 3rem;
  /* background:red; */
  display: flex;
  justify-content: space-around;
}
.cont-top > div {
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: flex-end;
}
.cont-top > div:nth-child(2) {
  justify-content: flex-start;
}

.cont-top-left {
  /* background : pink; */
}

.cont-top-right {
  /* background: green; */
}

.cont-top-left.active .cont-top-left-main-box {
  background: #febe9a;
}

.cont-top-left.active .cont-top-left-main h4 {
  border: 1px solid orange;
  color: orange;
  border-radius: 5px;
}
.cont-top-right.active .cont-top-left-main-box {
  background: #febe9a;
}

.cont-top-right.active .cont-top-left-main h4 {
  border: 1px solid orange;
  color: orange;
  border-radius: 5px;
}

.cont-top-left-main {
  width: 3rem;
  height: 100%;
  /* border: 1px solid #fff; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cont-top-left-main h4 {
  /* border: 1px solid #ef8958; */
  color: #404040;
  padding: 0.1rem;
  font-size: 0.3rem;
  border: 1px solid #fff;
  border-radius: 5px;
}

.cont-top-left-main-box {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  margin-bottom: 0.3rem;
  /* border: 1px solid red; */
  /* background : #febe9a; */
  background: #c8c8c8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cont-top-left-main-box i {
  display: block;
  width: 0.4rem;
  height: 0.4rem;
  background: #fff;
  border-radius: 50%;
}

.cont-top-left-main-box span {
  display: block;
  width: 0.7rem;
  height: 0.4rem;
  background: #fff;
  border-radius: 10px;
}

/* 开户类型 */
.select_kaihu_box {
  height: 1rem;
  background: #eee;
  line-height: 1rem;
  padding: 0 0.2rem;
  display: flex;
}

.select_kaihu {
  height: 1rem;
  background: #eee;
  line-height: 1rem;
  padding: 0 0.2rem;
  display: flex;
}

.select_kaihu_box span {
  /* font-size:.3rem; */
  font-size: 14px;
  color: #404040;
  margin-right: 0.4rem;
}

/* 自定义单选框样式 */

.select_kaihu label {
  display: inline-block;
  height: 100%;
}

.select_kaihu input {
  position: relative;
  width: 0.4rem;
  height: 0.4rem;
  vertical-align: middle;
  z-index: 2;
  margin-left: -0.46rem;
  opacity: 0;
  margin-right: 0.1rem;
}

.select_kaihu i {
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  border: 1px solid silver;
  background: #fff;
  /* background:#26a2ff; */
  vertical-align: middle;
  position: relative;
}

.select_kaihu i {
  background: #26a2ff;
}

.select_kaihu_input_left.active i::before,
.select_kaihu_input_right.active i::before {
  display: inline-block;
  content: "";
  width: 0.2rem;
  height: 0.2rem;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -0.1rem;
  margin-top: -0.1rem;
  transform: scale();
}

.select_kaihu_input_left.active i,
.select_kaihu_input_right.active i {
  border: 1px solid #26a2ff;
}

.select_kaihu_input_left {
  /* width:3rem; */
  margin-right: 1.3rem;
  color: #929292;
}

.select_kaihu_input_right {
  /* width:3rem; */
  color: #929292;
}

/* 用户名 */

.content_user {
  color: #404040;
  /* padding: 0rem .2rem; */
  /* border-bottom: 1px solid #ddd; */
  font-size: 14px;
}
.content_user input {
  padding: 0.2rem 0.3rem;
  height: 1rem;
  box-sizing: border-box;
  text-indent: 0.27rem;
}

input.invit_code {
  text-indent: 0;
  padding-left: 0.1rem;
}

.return_point {
  color: #404040;
  padding: 0rem 0.2rem;
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;
  font-size: 14px;
  background: url("../../images/my_down.png") no-repeat 6.8rem center / 5%, 5%;
  position: relative;
  background: rgba(250, 250, 250);
}
.return_point input {
  padding: 0.2rem 0.3rem;
  height: 1rem;
  box-sizing: border-box;
  /* text-align : center; */
}

.return_point ul {
  padding-bottom: 1.6rem;
  background: #fff;
  position: absolute;
  border-right: 1px solid #ddd;
  border-left: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;
  width: 90%;
  left: 5%;
  border-radius: 5px;
  overflow: auto;
  height: 4rem;
  z-index: 2;
  /* height:200px; */
  /* height:0; */
  /* display : none; */
  /* top : 0.999rem; */
}

.return_point ul li {
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

.return_point ul li:last-child {
  /* border-top: 1px solid #ddd; */
  border-bottom: none;
}

/* .return_point ul.noShow{

    animation: toSmall 1.5 .3s ease;
} 


@keyframes  toSmall{

    from{
        height : 100%;
    }

    to{
        height : 0%;
    }
} */

/* 初始密码 */

.select_content_left h5 {
  color: #929292;
  font-size: 0.3rem;
  padding: 0.15rem 0;
  text-align: center;
}

.select_content_left h6 {
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  width: 90%;
  background: #3db6fb;
  margin: 0 auto;
  margin-top: 0.4rem;
  border-radius: 5px;
  font-size: 0.3rem;
}

.select_content_right {
  display: none;
}
.select_content_right h5 {
  color: #929292;
  font-size: 0.3rem;
  padding: 0.15rem 0;
  text-align: center;
  opacity: 0;
}

.select_content_right h6 {
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  width: 90%;
  background: #3db6fb;
  margin: 0 auto;
  margin-top: 0.4rem;
  border-radius: 5px;
  font-size: 0.3rem;
}

.select_content_right .content_user {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.select_content_left .content_user {
  padding: 0rem 0.23rem;
}

.select_content_right .content_user span {
  display: inline-block;
  text-align: center;
  line-height: 0.6rem;
  width: 1.5rem;
  height: 0.6rem;
  border: 1px solid #3db6fb;
  color: #3db6fb;
  border-radius: 5px;
}

/* 查看邀请码表格样式 */
.lower-account-cont-right table {
  width: 100%;
  background: rgb(250, 250, 250);
}

.lower-account-cont-right table tr {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  display: flex;
  border-bottom: 1px solid #ddd;
}

.lower-account-cont-right table thead th {
  font-size: 0.3rem;
  color: #000;
  text-align: center;
}

.lower-account-cont-right table thead th:nth-child(1) {
  flex: 3;
}
.lower-account-cont-right table thead th:nth-child(2) {
  flex: 2;
}
.lower-account-cont-right table thead th:nth-child(3) {
  flex: 1;
}
.lower-account-cont-right table thead th:nth-child(4) {
  flex: 2;
}
.lower-account-cont-right table thead th:nth-child(5) {
  flex: 3;
}

.lower-account-cont-right table tbody td {
  font-size: 0.28rem;
  color: #929292;
  text-align: center;
}

.lower-account-cont-right table tbody td.smallFont {
  font-size: 11px;
}

.lower-account-cont-right table tbody td:nth-child(1) {
  flex: 3;
}
.lower-account-cont-right table tbody td:nth-child(2) {
  flex: 2;
}
.lower-account-cont-right table tbody td:nth-child(3) {
  flex: 1;
}
.lower-account-cont-right table tbody td:nth-child(4) {
  flex: 2;
}
.lower-account-cont-right table tbody td:nth-child(5) {
  flex: 3;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

tbody td button {
  width: 0.8rem;
  height: 0.5rem;
  line-height: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.28rem;
  color: #fff;
  outline: none;
}

tbody td button.modify {
  background: #3db6fb;
}
tbody td button.delete {
  background: #ff3a3b;
}

/* 修改里面的单选框开户类型 */

/* 开户类型 */
.fixed_type_box {
  width: 100%;
  height: 1rem;
  /* background: #eee; */
  line-height: 1rem;
  padding: 0 0.2rem;
  box-sizing: border-box;
  display: flex;
}

.fixed_type {
  height: 1rem;
  /* background: #eee; */
  line-height: 1rem;
  padding: 0 0.2rem;
  display: flex;
  background: #fff;
}

.fixed_type_box span {
  /* font-size:.3rem; */
  font-size: 14px;
  color: #404040;
  margin-right: 0.4rem;
}

/* 自定义单选框样式 */

.fixed_type label {
  display: inline-block;
  height: 100%;
}

.fixed_type input {
  position: relative;
  width: 0.4rem;
  height: 0.4rem;
  vertical-align: middle;
  z-index: 2;
  margin-left: -0.46rem;
  opacity: 0;
  margin-right: 0.1rem;
}

.fixed_type i {
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  border: 1px solid silver;
  background: #fff;
  /* background:#26a2ff; */
  vertical-align: middle;
  position: relative;
}

.fixed_type i {
  background: #26a2ff;
}

.fixed_type_input_left.active i::before,
.fixed_type_input_right.active i::before {
  display: inline-block;
  content: "";
  width: 0.2rem;
  height: 0.2rem;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -0.1rem;
  margin-top: -0.1rem;
  transform: scale();
}

.fixed_type_input_left.active i,
.fixed_type_input_right.active i {
  border: 1px solid #26a2ff;
}

.fixed_type_input_left {
  /* width:3rem; */
  margin-right: 1.3rem;
  color: #929292;
}

.fixed_type_input_right {
  /* width:3rem; */
  color: #929292;
}

/* 修改里面的邀请码 */

.fixed_bottom {
  /* height: 1rem; */
  /* line-height:1rem; */

  border-bottom: 1px solid #ddd;
  width: 100%;
  position: fixed;
  z-index: 1002;
  bottom: 0;
  background: #fff;
}
.fixed_code {
  line-height: 1rem;
  line-height: 1rem;
  padding-left: 0.4rem;
  color: #000;
  font-size: 0.3rem;
  background: rgb(250, 250, 250);
  border-bottom: 1px solid #ddd;
}

.fixed_code span {
  color: #929292;
  padding-left: 0.8rem;
}

/* 邀请码的状态 */

/* 开户类型 */
.code_status_box {
  width: 100%;
  height: 1rem;
  /* background: #eee; */
  line-height: 1rem;
  padding: 0 0.2rem;
  box-sizing: border-box;
  display: flex;
}

.code_status {
  height: 1rem;
  /* background: #eee; */
  line-height: 1rem;
  padding: 0 0.2rem;
  display: flex;
  background: #fff;
}

.code_status_box span {
  /* font-size:.3rem; */
  font-size: 14px;
  color: #404040;
  margin-right: 0.4rem;
}

/* 自定义单选框样式 */

.code_status label {
  display: inline-block;
  height: 100%;
}

.code_status input {
  position: relative;
  width: 0.4rem;
  height: 0.4rem;
  vertical-align: middle;
  z-index: 2;
  margin-left: -0.46rem;
  opacity: 0;
  margin-right: 0.1rem;
}

.code_status i {
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  border: 1px solid silver;
  background: #fff;
  /* background:#26a2ff; */
  vertical-align: middle;
  position: relative;
}

.code_status i {
  background: #26a2ff;
}

.code_status_input_left.active i::before,
.code_status_input_right.active i::before {
  display: inline-block;
  content: "";
  width: 0.2rem;
  height: 0.2rem;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -0.1rem;
  margin-top: -0.1rem;
  transform: scale();
}

.code_status_input_left.active i,
.code_status_input_right.active i {
  border: 1px solid #26a2ff;
}

.code_status_input_left {
  /* width:3rem; */
  margin-right: 1.3rem;
  color: #929292;
}

.code_status_input_right {
  /* width:3rem; */
  color: #929292;
}

/* 确定修改 */

.suer_modefy_btn {
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  width: 90%;
  background: #3db6fb;
  margin: 0 auto;
  margin-top: 1.2rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  font-size: 0.3rem;
}

/* 过渡动画 */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  /* transition: height .9s */
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

