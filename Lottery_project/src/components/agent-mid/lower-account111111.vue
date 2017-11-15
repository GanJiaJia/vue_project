<!--下级开户-->
<template>
  <div class="lower-account-content">
    <back title="" go-back="true"></back>
    <div class="lower-account" >
      <div class="lower-container">
        <div class="lower-btns">
          <span :class="{'active': showtab=='user'}" @click="handleTab('user')">下级用户</span><span :class="{'active': showtab=='query'}" @click="handleTab('query')">查看邀请码</span>
        </div>
      </div>
      <!--下级用户-->
      <div v-show="showtab=='user'" class="lower-user">
        <div class="lower-icon">
          <div>
            <dl @click="handleUserTab('agent')">
              <dt :class="{'userActive-bg': usershowtab=='agent'}">
                <img src="../../images/personal1.png" alt="用户头像" />
              </dt>
              <dd><span :class="{'userActive': usershowtab=='agent'}"  >代理账号</span></dd>
            </dl>
          </div>
          <div>
            <dl @click="handleUserTab('player')">
              <dt :class="{'userActive-bg': usershowtab=='player'}"><img src="../../images/personal1.png" alt="用户头像" /></dt>
              <dd><span :class="{'userActive': usershowtab=='player'}"  >玩家账号</span></dd>
            </dl>
          </div>
        </div>
      </div>
      <!--开户类型-->
      <div class="account-type" v-show="showtab=='user'">
        <span>开户类型:</span>
        <el-radio class="radio" v-model="radio" label="1">精准开户</el-radio>
        <el-radio class="radio" v-model="radio" label="2">生成邀请码</el-radio>
      </div>
      <!--精准开户-->
      <div class="account-inp-info" v-show="showtab=='user'&&radio==1">
        <dl>
          <dt>用户名：</dt>
          <dd>
            <input placeholder="请输入用户名"/>
          </dd>
        </dl>
        <dl>
          <dt>彩票返点：</dt>
          <dd>
            <input v-model="rebate" readonly @click="handlerebate" v-if="usershowtab=='agent'"/>
            <input v-model="rebate" readonly v-else="usershowtab!=='agent'"/>
            <i class="el-icon-arrow-down"></i>
          </dd>
          <!--弹层-->
          <div class="dialog-rebate" v-show="rebateflag">
            <div class="dialog-rebate-item" v-for="items in list" @click="tebateFn(items.name)">{{items.name}}</div>
          </div>
        </dl>
      </div>
      <div class="accout-init-pw" v-show="showtab=='user'&&radio==1">
        <p>初始密码为：123456</p>
        <button>立即开户</button>
      </div>
      <!--生成邀请码-->
      <div class="account-inp-info" v-show="showtab=='user'&&radio==2">
        <dl>
          <dt>邀请码：</dt>
          <dd>
            <input v-model="invitation" readonly />
            <button @click="createRetate">随机选码</button>
          </dd>
        </dl>
        <dl>
          <dt>彩票返点：</dt>
          <dd>
            <input v-model="rebate" readonly />
            <i class="el-icon-arrow-down"></i>
          </dd>
        </dl>
      </div>
      <div class="accout-init-pw" v-show="showtab=='user'&&radio==2">
        <button>生成邀请码</button>
      </div>
      <!--查看邀请码-->
      <div class="query-account"  v-show="showtab=='query'">
        <table>
          <thead>
          <tr>
            <th>邀请码</th>
            <th>类型</th>
            <th>返点</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(queryList,index) in queryList">
            <td>{{queryList.code}}</td>
            <td>{{queryList.proxy_type | transAccountType}}</td>
            <td>{{queryList.return_ratio}}</td>
            <td>{{queryList.status | transInvatationStatus}}</td>
            <td>
              <span @click="updFn(index)">修改</span>
              <span @click="confirmFn(index)">删除</span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!--修改-->
    <div class="account-update-bg" v-if="updflag" @click="updflag=false">

    </div>
    <div class="account-update" v-if="updflag">
      <div class="account-upd-item">
        <h4>邀请码:</h4>
        <span>{{code}}</span>
      </div>
      <div class="account-upd-item">
        <h4>用户类型:</h4>
        <span><el-radio v-model="radioupt" label="1">代理</el-radio> <el-radio v-model="radioupt" label="2">普通用户</el-radio>
        </span>
      </div>
      <div class="account-upd-item">
        <h4>用户状态:</h4>
        <span>
          <el-radio v-model="status" label="1">启用</el-radio> <el-radio v-model="status" label="0">禁用</el-radio>
        </span>
      </div>
      <div class="account-upd-item">
        <h4>彩票返点:</h4>
        <span @click="accoptres">
          <input type="text" readonly v-model="retateupt">
          <i class="el-icon-arrow-down"></i>
        </span>
        <!--弹层-->
        <div class="dialog-rebate" v-show="rebateflag">
          <div class="dialog-rebate-item" v-for="items in list" @click="acoptrate(items.name)">{{items.name}}</div>
        </div>
      </div>
      <div class="account-upd-btn" @click="immediateUpdBtn">
        立即修改
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import ElRadioButton from '../../../node_modules/element-ui/packages/radio/src/radio-button.vue'
  import {alertip, requestOpt} from 'api/recommend'
  import {transData} from 'api/config'

  export default {
    components: {
      ElRadioButton,
      Back
    },
    data() {
      return {
        showtab: 'user', // 头部tab 标识
        usershowtab: 'agent', // 账号选择标识
        radio: '1', // 开户类型 默认选 精准开户 1
        rebateflag: false, // 返点弹出开关
        rebate: '', // 彩票返点
        invitation: '', // 邀请码
        updflag: false, // 修改标识
        radioupt: '', // 用户类型
        status: '', // 用户状态
        retateupt: '', // 彩票返点
        code: '', // 修改邀请码
        loading: false,


        list: [
          {name: '1950.0-99.49%(赔率)'},
          {name: '1950.0-99.49%(赔率)'},
          {name: '1950.0-99.49%(赔率)'},
          {name: '1950.0-99.49%(赔率)'},
          {name: '1950.0-99.49%(赔率)'},
          {name: '1950.0-99.49%(赔率)'},
          {name: '1950.0-99.49%(赔率)'},
          {name: '1950.0-99.49%(赔率)'},
          {name: '1950.0-99.49%(赔率)'},
          {name: '1950.0-99.49%(赔率)'},
          {name: '1950.0-99.49%(赔率)'},
        ],
        queryList: [
          {code: '13245678', return_ratio: 0, status: 1, proxy_type: 1, invcode_id: '1'},
          {code: 'se56d236', return_ratio: 10, status: 1, proxy_type: 0, invcode_id: '2'},
          {code: 'erfg8974', return_ratio: 20, status: 0, proxy_type: 1, invcode_id: '3'},
          {code: 'ty8932dd', return_ratio: 10, status: 0, proxy_type: 0, invcode_id: '4'}
        ]
      }
    },
    methods: {
      handleTab(flag) { // head 切换
        this.showtab = flag;
        this.updflag = false;
        if (flag === 'query') {
          this.getRetateList();
        }
      },
      handleUserTab(flag) { // 账号切换
        this.usershowtab = flag;
        this.rebate = flag === 'agent' ? '':'0';
      },
      handlerebate() { // 彩票返点 开关
        this.rebateflag = !this.rebateflag;
      },
      tebateFn(val) { // 彩票返点 赋值
        this.rebateflag = false;
        this.rebate = val;
      },
      updFn(index) { // 修改弹层控制按钮
        this.updflag = true;
        this.code = this.queryList[index].code;
        this.radioupt = this.queryList[index].proxy_type.toString();
        this.status = this.queryList[index].status.toString();
        this.retateupt = this.queryList[index].return_ratio;
      },
      accoptres() { // 修改弹层中的彩票返点
        this.rebateflag = !this.rebateflag;
      },
      acoptrate(val) { // 修改弹层中 彩票返点赋值
        this.retateupt = val;
        this.rebateflag = false;
      },
      immediateUpdBtn() { // 立即修改按钮
        // 修改邀请码
        this.loading = true;
        requestOpt.reqPut('proxy_downline_invcode', {
          code: this.code,
          proxy_type: +this.radioupt,
          return_ratio: +this.retateupt
        }, (res) => {
          this.loading = false;
          alertip(res.data.msg);
        }, (err) => {
          this.loading = false;
          alertip(err);
        })
      },
      delRetate(i) {
        this.loading = true;
        requestOpt.reqDelete('proxy_downline_invcode', {
          invcode_id: this.queryList[i].invcode_id
        }, (res) => {
          this.loading = false;
          if (res.data.status === 1) {
            this.queryList.splice(i, 1);
          } ;
          alertip(res.data.msg);
        }, (err) => {
          this.loading = false;
          alertip(err);
        });
        setTimeout(() => {
          this.loading = false;
        }, 3000);
      },
      confirmFn(index) {
        this.$confirm('您确定删除'+this.queryList[index].code+'这个邀请码？','提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          customClass: 'restel-comfir'
        }).then(() => {
          /*this.$message({
            type: 'success',
            message: '删除成功',
            duration: 1000,
            customClass: 'restel-dialog'
          });*/
          this.delRetate(index);
//          alertip('删除成功');

        }).catch(() => {
          /*this.$message({
            type: 'info',
            message: '已取消删除',
            duration: 1000,
            customClass: 'restel-dialog'
          })*/
          alertip('已取消删除');
        })
      },
      createRetate() { // 生成邀请码
        this.loading = true;
        requestOpt.reqGet('proxy_downline_invcode', (res) => {
          this.loading = false;
          this.invitation = res.data.data;
        }, (err) => {
          this.loading = false;
          alertip(err.data.msg);
        })
      },
      getRetateList() { // 获取邀请码列表
        this.loading = true;
        requestOpt.reqGet('proxy_downline_invcodes', (res) => {
          this.loading = false;
          if (res.data.status === 1) {
            this.queryList = res.data.data.list;
          } else {
            alertip(res.data.msg);
          };
        }, (err) => {
          this.loading = false;
          alertip(err);
        })
      }
    },
    mounted() {
//      this.createRetate();
    }
  }
</script>

<style scoped lang="stylus">
 .lower-account-content {
   width: 7.5rem;
   height: 13.34rem;
   position relative
   overflow: hidden;
   background-color: #eee;
   color: #000;
   font-size: .3rem;
 }
 .v-model {
   background transparent
 }
 #app .v-model {
   background transparent
 }

 poscola {
   position relative
   top .88rem
 }

 .lower-account {
   /*btns start*/
   .lower-container {
     display flex
     justify-content center
     align-items center
     position absolute
     top 0
     right 0
     left 0
     width 60%
     height .88rem
     margin auto
     z-index 999
     .lower-btns {
       span {
         color #ffffff
         background transparent
         border-top 1px solid #ffffff
         border-bottom 1px solid #ffffff
         padding .1rem .4rem
         box-sizing border-box
         &:first-child {
           border-left 1px solid #ffffff
           border-right 1px solid #ffffff
           border-top-left-radius .08rem
           border-bottom-left-radius .08rem
         }
         &:last-child {
           border-right 1px solid #ffffff
           border-top-right-radius .08rem
           border-bottom-right-radius .08rem
         }
       }
       .active {
         background #fc823c
       }
     }
   }
   /*btns end*/
   /*下级用户 start*/
   .lower-user {
     @extend poscola
     .lower-icon {
       display flex
       justify-content space-around
       align-items center
       padding .3rem 0
       background #fff
       text-align center
       font-size .28rem
       dl {
         dt {
           display flex
           justify-content center
           align-items center
           width 1.06rem
           height 1.06rem
           background #dfdfdf
           margin auto
           border-radius 50%
           img {
             position relative
             z-index 9999
             background #fff
             width 50%
             border-radius 50%
           }
         }
         .userActive-bg {
           background #fc823c
         }
         dd {
           margin-top .2rem
           span {
             padding .08rem .12rem
             border 1px solid transparent
             border-radius .08rem
           }
           .userActive {
             border 1px solid #fc823c
             color #fc823c
           }
         }
       }
     }
   }
   /*图标 end*/
   .account-type {
     @extend poscola
     padding 0 .3rem
     span {
       margin-right .4rem
     }
     .radio {
       padding .3rem 0
     }
   }
   /*input*/
   .account-inp-info {
     @extend poscola
     background #fff
     dl {
       display flex
       align-items center
       position relative
       padding 0 .3rem
       border-bottom 1px solid #ddd
       dd {
         flex-grow 1
         input {
           width 100%
           padding 0.3rem 0
           outline none
         }
         i {
           position absolute
           right 0.3rem
           top 35%
         }
         button {
           position absolute
           right 0.3rem
           top .2rem
           padding .1rem
           border 1px solid #24b0ff
           background none
           color #333
           border-radius .08rem
         }
       }

     }
   }
   .query-account {
     @extend poscola
     background #fff
     table {
       width 100%
       th{
         padding .15rem 0
         border-bottom 1px solid #ddd
       }
       td {
         width 18%
         padding .2rem 0
         text-align center
         &:last-child {
           width 23%
         }
         &:first-child {
           width 23%
         }
         span {
           padding .08rem
           color #fff
           font-size .24rem
           border-radius .08rem
           &:first-child {
             background #24b0ff
           }
           &:last-child {
             background #ff3a3b
           }
         }
       }
     }

   }

   /*返点弹层*/
   .dialog-rebate {
     position absolute
     left .3rem
     z-index 1
     width 93%
     height 4rem
     overflow scroll
     background #fff
     box-shadow 0 0 1px rgba(0,0,0,.5)
     .dialog-rebate-item {
       padding .15rem
       border-bottom 1px solid #ddd
       text-align center
     }
   }

   .accout-init-pw {
     @extend poscola
     p{
       font-size .24rem
       color #444
       text-align center
       padding .1rem
     }
     button {
       width 92%
       margin .2rem .3rem
       padding .2rem
       border 0
       background #51a9ff
       color: #fff
       font-size .3rem
       border-radius .08rem
       box-shadow 0 2px 0 rgba(0,0,0,0.3)
     }
   }

 }
 /*修改邀请码*/
 .account-update-bg {
   position absolute
   top 0
   z-index 999
   width 100%
   height 100%
   background transparent
 }
 .account-update {
   position absolute
   bottom 0rem
   z-index 1000
   width 100%
   background #fff
   .account-upd-item {
     display flex
     padding .2rem .3rem
     border-bottom 1px solid #ddd
     h4 {
       flex-basis 2rem
     }
     span {
       color #666
       flex-grow 1
       label {
         width 2rem
       }
       input[type=text] {
         width 90%
       }
     }
     .dialog-rebate {
       position absolute
       top 0
       overflow scroll
       height 3rem
       width 92%
       background #fff
       text-align center
       .dialog-rebate-item {
         padding .1rem 0
         border-bottom 1px solid #ddd
       }
     }
   }
   .account-upd-btn {
     padding .2rem 0
     margin .2rem
     background #24b0ff
     color #fff
     text-align center
     border-radius .08rem
     box-shadow 0 2px 1px rgba(0,0,0,.3)
   }
 }
</style>
