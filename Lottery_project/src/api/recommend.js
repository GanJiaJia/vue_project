import jsonp from 'common/js/jsonp'
import {commonParams, options, def_env, lotteryRanges} from './config'
import axios from 'axios'
import Vue from 'vue'

import {mapState} from 'vuex'
import { Indicator, MessageBox  } from 'mint-ui';

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export function getDiscList() {
  const url = '/api/getDiscList'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSongList(disstid) {
  const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'

  const data = Object.assign({}, commonParams, {
    disstid,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0
  })

  return jsonp(url, data, options)
}

/**
 *  跟后台交互公共方法 post get put delete
 *  @params [String]  api  接口名
 *  @params [Object]  params 参数
 *  @params [Function] sucfn 成功回调函数
 *  @params [Function] errfn 失败回调函数
 * */

//  新接口  52.78.190.190:8093
export const requestOpt = {
  // url: (process.env.NODE_ENV==='development') ? 'http://120.76.211.1:8093/api/v1/' : '',
  // urlAuth: (process.env.NODE_ENV==='development') ? 'http://120.76.211.1:8093/api/auth/v1/' : '',
  // urlAuthUser: (process.env.NODE_ENV==='development') ? 'http://120.76.211.1:8093/api/auth/v1/user/' : '',
  url: (process.env.NODE_ENV==='development') ? 'http://52.78.190.190:8093/api/v1/' : '',
  urlAuth: (process.env.NODE_ENV==='development') ? 'http://52.78.190.190:8093/api/auth/v1/' : '',
  urlAuthUser: (process.env.NODE_ENV==='development') ? 'http://52.78.190.190:8093/api/auth/v1/user/' : '',
  reqGet(api, token, sucfn, errfn) { // get 方式请求 有 auth 较验
    let url = this.urlAuth+api;
    return axios.get(url, {
      headers: {
        Authorization: 'Bearer '+ token
      }
    })
      .then(sucfn)
      .catch(errfn)
  },
  reqGetuser(api, token, sucfn, errfn) { // get 方式请求 有 auth 较验 user
    let url = this.urlAuthUser+api;
    return axios.get(url, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      .then(sucfn)
      .catch(errfn)
  },
  reqGetparam(api,params, sucfn, errfn) { // get 方式请求 有 auth 较验
    let url = this.urlAuth+api;
    const data = Object.assign(params);
    return axios.get(url, data)
      .then(sucfn)
      .catch(errfn)
  },
  reqGetparam_token(api,token,params, sucfn, errfn) { // ------------gan------------------get 方式请求 有 auth 较验
    let url = this.urlAuth+api;
    const data = Object.assign(params);
    return axios.get(url, data,{
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(sucfn)
      .catch(errfn)
  },

  reqPost(api,token, params, sucfn, errfn) { // post 方式请求 有 auth 较验
    let url = this.urlAuth+api;
    const data = Object.assign(params);

    return axios.post(url,data, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(sucfn)
      .catch(errfn)
  },
  reqPostuser(api, token, params, sucfn, errfn) { // post 方式请求 有 auth 较验 user
    let url = this.urlAuthUser+api;
    const data = Object.assign(params);

    return axios.post(url,data, {
      headers: {
        Authorization: 'Bearer '+ token
      }
    })
      .then(sucfn)
      .catch(errfn)
  },
  reqPostNouser(api, params, sucfn, errfn) { // post 方式请求
    let url = this.url+api;
    const data = Object.assign(params);

    return axios.post(url,data)
      .then(sucfn)
      .catch(errfn)
  },
  reqPutAuthUser(api, token, params, sucfn, errfn) { // put 方式请求 有 auth user较验
    let url = this.urlAuthUser+api;
    const data = Object.assign(params);

    return axios.put(url,data, {
      headers: {
        Authorization: 'Bearer '+ token
      }
    })
      .then(sucfn)
      .catch(errfn)
  },
  reqPut(api,token, params, sucfn, errfn) { // put 方式请求 有 auth 较验
    let url = this.urlAuth+api;
    const data = Object.assign(params);

    return axios.put(url,data, {
      headers: {
        Authorization: 'Bearer '+ token
      }
    })
      .then(sucfn)
      .catch(errfn)
  },
  reqPutNouser(api,token, sucfn, errfn) { // put 方式请求
    let url = this.url+api;

    return axios.put(url,{}, {
      headers: {
        Authorization: 'Bearer '+ token
      }
    })
      .then(sucfn)
      .catch(errfn)
  },
  reqDelete(api,token, sucfn, errfn) { // delete 方式请求 有 auth 较验
    let url = this.urlAuth+api;
    return axios.delete(url, {
      headers: {Authorization: 'Bearer '+ token}
    }).then(sucfn).catch(errfn)
  },
  /*没有auth 校验*/
  reqnoGet(api, sucfn, errfn) { // get 方式请求 没有 auth 较验
    let url = this.url+api;
    return axios.get(url)
      .then(sucfn)
      .catch(errfn)
  },
  reqnoGetpara(api, params, sucfn, errfn) { // get 方式请求 没有 auth 较验 带参数
    let url = this.url+api;
    const data = Object.assign(params);
    return axios.get(url, data)
      .then(sucfn)
      .catch(errfn)
  },
}

/**
 *  时间格式化
 * */
export const dtFormate = {
  // 日期格式 默认当前日期
  date(dt) {
    let now = dt?(new Date(dt)):dt || new Date();
    let yy = now.getFullYear();
    let MM = now.getMonth()+1>9?now.getMonth() + 1:'0'+(now.getMonth()+1);
    let dd = now.getDate()>9?now.getDate():'0'+now.getDate();

    return yy +'-'+  MM +'-'+dd;
  },
  /*
  *  日期时间格式 默认当前日期时间
  *  @params [String] dt 可选
  *  @params [String] type 注意 type 不能含有数字的任意字符
  * */
  datetime(dt,type) {
    let now = dt?(new Date(dt)):'' || new Date();
    type = type || 'hm';
    if (dt&&!/\d/g.test(dt)) {
      now = new Date();
      type = dt;
    };

    let yy = now.getFullYear();
    let MM = now.getMonth()+1>9?now.getMonth() + 1:'0'+(now.getMonth()+1);
    let dd = now.getDate()>9?now.getDate():'0'+now.getDate();
    let HH = now.getHours()>9?now.getHours():'0'+now.getHours();
    let mm = now.getMinutes()>9?now.getMinutes():'0'+now.getMinutes();
    let ss = now.getSeconds()>9?now.getSeconds():'0'+now.getSeconds();

    let rst = type==='hm'? (yy +'-'+  MM +'-'+dd+ ' '+HH+ ':'+mm) : (yy +'-'+  MM +'-'+dd+ ' '+HH+ ':'+mm+':'+ss)

    return rst;
  },
  // 昨天 1  一周 7  半月 15
  yestaday(n) {
    n = n || 1;
    let now =  new Date();
    let yes = new Date(now.setTime(now.getTime() - 1000*60*60*24*n));

    let yy = yes.getFullYear();
    let MM = yes.getMonth()+1>9?yes.getMonth() + 1:'0'+(yes.getMonth()+1);
    let dd = yes.getDate()>9?yes.getDate():'0'+yes.getDate();

    return yy +'-'+  MM +'-'+dd;
  },
  future(n) {
    n = n || 1;
    let now =  new Date();
    let yes = new Date(now.setTime(now.getTime() + 1000*60*60*24*n));

    let yy = yes.getFullYear();
    let MM = yes.getMonth()+1>9?yes.getMonth() + 1:'0'+(yes.getMonth()+1);
    let dd = yes.getDate()>9?yes.getDate():'0'+yes.getDate();

    return yy +'-'+  MM +'-'+dd;
  }
}

/*
*  自定义提示框
* */
export function alertip(msg) {
  let tipElCon = document.createElement('div');
  tipElCon.className = 'def-dialog-container';
  let tipEl = document.createElement('div');
  tipEl.className = 'def-dialog';
  let spanEl = document.createElement('span')
  spanEl.innerHTML = msg;
  tipEl.appendChild(spanEl)
  document.body.appendChild(tipElCon);
  document.body.appendChild(tipEl);
  setTimeout(() => {
    document.body.removeChild(tipElCon);
    document.body.removeChild(tipEl);
  },2500)
}
export function mt_loading_open () {
  Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  })
}
export function mt_loading_close () {
  Indicator.close()
}
export function mt_confirm (msg, cb, okText) {
  msg = msg || '确定执行此操作？'
  okText = okText || '确定'
  MessageBox.confirm('', {
    title: '',
    message: msg,
    confirmButtonClass: 'mt-del',
    confirmButtonText: okText
  }).then(res => {
    cb&&cb(res)
  }).catch(err => {
    if (err !== 'cancel'){
      alertip(err)
    }
  })
}
export function mt_alert (msg, cb) {
  msg = msg || ''
  MessageBox.alert('', {
    title: '',
    message: msg,
    confirmButtonClass: 'mt-del'
  }).then(res => {
    cb&&cb(res)
  })
}

/*
*  复制功能
* */
export function CopyVal(str) {
  window.getSelection().removeAllRanges();
  let save = function(e) {
    e.clipboardData.setData('text/plain', str);
    e.preventDefault();
  };

  document.addEventListener('copy', save);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  document.removeEventListener('copy', save);

  alertip('复制成功');
}

/*
*  校验手机号是否合法
* */
export function isPhone(str) {
  if (!str) {
    alertip('手机号码不能为空');
    return false;
  };
  if (!/^1\d{10}$/.test(str)) {
    alertip('您输入的手机号码不合法')
    return false;
  };
  return true;
}

/**
 *  投注号码中间含空格换行
 * */
export function insertSpace(val) {
  console.log(val)
  console.log(val.replace(/\s(\d+\,+)/g, '<br />$1'))
  return val.replace(/\s(\d+\,+)/g, '<br />$1')
}

/**
 *  获取设备信息
 * */
export function  sysPlatform() {
  let mobile = navigator.userAgent.toLowerCase();
  return (/iphone/g.test(mobile)) ? 'ios' : 'android'
}

export function randomColor(){
  return "#"+(~~(Math.random()*(1<<24))).toString(16)
}
export function genUid(){
  return new Date().getTime()+""+Math.floor(Math.random()*899+100);
}

export function array_contain (arr, name) {
  for (let i=0;i<arr.length;i++) {
    if(arr[i] === name) {
      return true
    }
  }
  return false
}

export function chaLotteryNumber (firstName, lastName, code) {
  code = code || '';
  // 福彩3d
  if ((firstName==='三星'&&lastName==='直选复式')
    || (firstName==='定位胆'&&lastName==='定位胆')) { // 百位 十位 个位 0-9
   if (code==='SD11X5'){ // 11 5  定位胆 第几位
      return 'optionalPos'
   } else if (code==='XJSSC'||code==='CQSSC'||code==='TJSSC'||code==='SFSSC') {
     return 'sscPos'
   } else if (code==='BJPK10') {
     return 'PK10nopos'
   }
   return 'threeSelectLast'
  } else if (firstName==='三星'&&lastName==='直选和值'
    || (firstName==='三星'&&lastName==='后三直选和值')
    || (firstName==='三星'&&lastName==='前三直选和值')
    || (firstName==='任选三'&&lastName==='前三直选和值')
    || (firstName==='任选三'&&lastName==='后三直选和值')
    || (firstName==='任选三'&&lastName==='五选三直选和值')
    || (firstName==='任选三'&&lastName==='前四直选和值')
    || (firstName==='任选三'&&lastName==='后四直选和值')){ // 0 - 27
    return 'threeStarGroup'
  } else if ((firstName==='三星'&&lastName==='组三复式')
    || (firstName==='三星'&&lastName==='后三组选三')
    || (firstName==='三星'&&lastName==='前三组选三')
    || (firstName==='三星'&&lastName==='后三组选三复式')
    || (firstName==='三星'&&lastName==='前三组选三复式')
    || (firstName==='任选三'&&lastName==='前三组三复式')
    || (firstName==='任选三'&&lastName==='后三组三复式')){ // 组三 0-9
    return 'threeGroup'
  } else if (firstName==='三星'&&lastName==='组六复式'
    || (firstName==='三星'&&lastName==='后三组选六')
    || (firstName==='三星'&&lastName==='前三组选六')
    || (firstName==='任选三'&&lastName==='前三组六复式')
    || (firstName==='任选三'&&lastName==='后三组六复式')){ // 组六 0-9
    return 'sixGroup'
  } else if (firstName==='三星'&&lastName==='组三和值'
    || (firstName==='任选三'&&lastName==='前三组选和值')
    || (firstName==='任选三'&&lastName==='后三组选和值')){ // 1 - 26
    return 'threeGroupSum'
  } else if (firstName==='三星'&&lastName==='组六和值'){ // 3 - 24
    return 'sixGroupSum'
  } else if (firstName==='二星'&&lastName==='前二直选'){
    return 'twoStarFirst'
  } else if ((firstName==='二星'&&lastName==='前二组选')
    || (firstName==='二星'&&lastName==='后二组选')
    || (firstName==='任选二'&&lastName==='前二组选复式')
    || (firstName==='任选二'&&lastName==='后二组选复式')){ // 组选 0-9
    return 'group1'
  } else if (firstName==='二星'&&lastName==='后二直选'){
    return 'twoStarLast'
  } else if (firstName==='大小单双'&&lastName==='前二大小单双'){
    if (code==='XJSSC'||code==='CQSSC'||code==='TJSSC'||code==='SFSSC') {
      return 'bigsmallFirst2s'
    }
    return 'bigsmallFirst2'
  } else if (firstName==='大小单双'&&lastName==='后二大小单双'){
    return 'bigsmallLast2'
  }  else if (firstName==='大小单双'&&lastName==='前三大小单双'){
    return 'bigsmallFirst3s'
  }  else if (firstName==='大小单双'&&lastName==='后三大小单双'){
    return 'bigsmallLast3'
  } else if (firstName==='不定位'&&lastName==='一码不定位'){
    return 'two1'
  } else if (firstName==='不定位'&&lastName==='二码不定位'){
    return 'two2'
  } else if (firstName==='任选二'&&lastName==='直选复式'
    || (firstName==='任选三'&&lastName==='直选复式')
    || (firstName==='任选四'&&lastName==='直选复式')){ // 5位
    return 'fiveStars'
  } else if (firstName==='任选二'&&lastName==='前二直选和值'
    || (firstName==='任选二'&&lastName==='后二直选和值')
    || (firstName==='任选二'&&lastName==='五选二直选和值')){ // 0 - 18
    return 'twoFirst'
  } else if (firstName==='任选二'&&lastName==='前二组选和值'
    || (firstName==='任选二'&&lastName==='后二组选和值')){ // 1 - 17
    return 'twogroup'
  } else if (firstName==='任选四'&&lastName==='前四组选24'
    || (firstName==='任选四'&&lastName==='后四组选24')){
    return 'group24'
  } else if (firstName==='任选四'&&lastName==='前四组选12'
    || (firstName==='任选四'&&lastName==='后四组选12')){
    return 'groupfour12'
  } else if (firstName==='任选四'&&lastName==='前四组选6'
    || (firstName==='任选四'&&lastName==='后四组选6')){
    return 'groupfour6'
  } else if (firstName==='任选四'&&lastName==='前四组选4'
    || (firstName==='任选四'&&lastName==='后四组选4')){
    return 'groupfour4'
  }
  // 排列5
  else if (firstName==='五星'&&lastName==='五星直选复式'){ // 排列5 / 3  第几位
    if (code==='XJSSC'||code==='CQSSC'||code==='TJSSC'||code==='SFSSC'){ // 几位
      return 'fiveStars'
    }
    return 'fiveStar'
  } else if (firstName==='四星'&&lastName==='四星直选复式'){
    if (code==='XJSSC'||code==='CQSSC'||code==='TJSSC'||code==='SFSSC'){ // 几位
      return 'fourStars'
    }
    return 'fourStar'
  } else if (firstName==='三星'&&lastName==='后三直选复式'){
    if (code==='XJSSC'||code==='CQSSC'||code==='TJSSC'||code==='SFSSC'){ // 几位
      return 'threeStarLasts'
    }
    return 'threeStarLast'
  } else if (firstName==='三星'&&lastName==='前三直选复式'){
    if (code==='XJSSC'||code==='CQSSC'||code==='TJSSC'||code==='SFSSC'){ // 几位
      return 'threeStarFirsts'
    }
    return 'threeStarFirst'
  } else if (firstName==='二星'&&lastName==='前二直选'){
/*    if (code==='XJSSC'||code==='CQSSC'||code==='TJSSC'){ // 几位
      return 'twoStarFirsts'
    }*/
    return 'twoStarFirst'
  }
  // 11选5
  else if (firstName==='任选复式'&&lastName==='任选一中一'){
    return 'optional1'
  } else if (firstName==='任选复式'&&lastName==='任选二中二'){
    return 'optional22'
  } else if (firstName==='任选复式'&&lastName==='任选三中三'){
    return 'optional33'
  } else if (firstName==='任选复式'&&lastName==='任选四中四'){
    return 'optional44'
  } else if (firstName==='任选复式'&&lastName==='任选五中五'){
    return 'optional55'
  } else if (firstName==='任选复式'&&lastName==='任选六中五'){
    return 'optional65'
  } else if (firstName==='任选复式'&&lastName==='任选七中五'){
    return 'optiona75'
  } else if (firstName==='任选复式'&&lastName==='任选八中五'){
    return 'optional85'
  }
  else if (firstName==='三码'&&lastName==='前三直选复式'){
    return 'optional3m'
  } else if (firstName==='三码'&&lastName==='前三组选复式'){
    return 'optionalGroup'
  } else if (firstName==='三码'&&lastName==='中三直选复式'){
    return 'optional3mid'
  } else if ((firstName==='三码'&&lastName==='前三组选复式')
    || (firstName==='三码'&&lastName==='中三组选复式')
    || (firstName==='三码'&&lastName==='后三组选复式')
    || (firstName==='二码'&&lastName==='前二组选复式')
    || (firstName==='二码'&&lastName==='后二组选复式')){ // 11选5 组选
    return 'optionalGroup'
  } else if (firstName==='三码'&&lastName==='前三组选胆拖'
    || (firstName==='三码'&&lastName==='中三组选胆拖')
    || (firstName==='三码'&&lastName==='后三组选胆拖')
    || (firstName==='二码'&&lastName==='前二组选胆拖')
    || (firstName==='二码'&&lastName==='后二组选胆拖')
    || (firstName==='任选胆拖')){ // 11选5 组选胆拖
    return 'optionalGroupDT'
  } else if (firstName==='三码'&&lastName==='后三直选复式'){
    return 'optional3Last'
  }
  else if (firstName==='二码'&&lastName==='前二直选复式'){
    return 'optional2m'
  } else if (firstName==='二码'&&lastName==='后二直选复式'){
    return 'optional2Last'
  }
  else if (firstName==='不定位'&&lastName==='前三位'){
    return 'optionalNopos3f'
  } else if (firstName==='不定位'&&lastName==='中三位'){
    return 'optionalNopos3m'
  } else if (firstName==='不定位'&&lastName==='后三位'){
    return 'optionalNopos3l'
  }
  // 快三
  else if (firstName==='和值'&&lastName==='和值'){
    return 'quick3Sum'
  } else if (firstName==='三同号'&&lastName==='通选'){
    return 'quick3Samet'
  } else if (firstName==='三同号'&&lastName==='单选'){
    return 'quick3Samed'
  } else if ((firstName==='三不同号'&&lastName==='标准')
    || (firstName==='二不同号'&&lastName==='标准')){ // 1 - 6
    return 'quick3normal'
  } else if ((firstName==='三不同号'&&lastName==='胆拖')
    || (firstName==='二不同号'&&lastName==='胆拖')){ // 1 - 6
    return 'quick3DT'
  } else if (firstName==='三连号'&&lastName==='通选'){
    return 'quick3lh'
  } else if (firstName==='二同号'&&lastName==='复选'){
    return 'quick32th'
  } else if (firstName==='二同号'&&lastName==='单选'){
    return 'quick32bth'
  }
  // PK10
  else if (firstName==='前一'){
    return 'PK10first'
  } else if (firstName==='前二'){
    return 'PK10second'
  } else if (firstName==='前三'){
    return 'PK10third'
  }
  // 大乐透
  else if (firstName==='普通投注'&&lastName==='普通投注'&&code==='DLT'){
    return 'dlt'
  }
  // 双色球
  else if (firstName==='普通投注'&&lastName==='普通投注'&&code==='SSQ'){
    return 'ssq'
  }
  // 六合彩
  else if ((firstName==='特码B'|| firstName==='特码A'|| firstName==='正码'|| firstName==='特码A') && lastName==='选码'){
    return 'lhc'
  }
  else { // 双色球
    return []
  }

}


