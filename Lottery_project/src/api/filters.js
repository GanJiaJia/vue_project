import Vue from 'vue'
// 过滤器
Vue.filter('uppercase', function(value) { // 首字母大写
  if (!value) { return ''}
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('transAccountType', function(value) { // 账户类型转换   代理 1  普通 2
  return value===1 ? '代理' : '普通下线';
})

Vue.filter('transInvatationStatus', function(value) { // 邀请状态转换 启用 1  禁用 0
  return value===1 ? '启用' : '禁用';
})

Vue.filter('transWinningStatus', (val) => { // 是否中奖
  switch(val) {
    case 0 :
      return '待开奖';
      break;
    case 1 :
      return '已中奖';
      break;
    case 2 :
      return '未中奖';
      break;
    case 3 :
      return '开奖中';
      break;
    case 4 :
      return '撤销';
      break;
    case 5 :
      return '作废';
      break;
    default:
      break;
  }
})

Vue.filter('transHasDelived', val => { // 是否已派奖
  switch (val) {
    case 0:
      return '未派奖';
      break;
    case 1:
      return '已派奖';
      break;
    case 2:
      return '部分已派奖';
      break;
  }
})
Vue.filter('transWinning', val => { // 是否中奖
  return val===1 ? '中奖' : '未中奖'
})

Vue.filter('transExecuted', val => { // 是否正在进行
  return val===1 ? '已完成' : '进行中'
})

Vue.filter('transExecut', val => { // 是否执行
  return val===1 ? '已执行' : '未执行'
})

Vue.filter('transIsdelivered', val => { // 是否已派奖
  switch (val) {
    case 1:
      return '已派奖';
      break;
    case 2:
      return '部分已派奖';
      break;
    default:
      return '未派奖';
      break;
  }
})

Vue.filter('transChargeStatus', val => { // 充值记录状态转换
  switch (val) {
    case 1:
      return '充值成功';
      break;
    case 2:
      return '充值失败';
      break;
    case 3:
      return '全部';
      break;
    default:
      return '待审核';
      break;
  }
})

Vue.filter('transWithdrawalsStatus', val => { // 提现记录状态转换
  switch (val) {
    case 1:
      return '提现成功';
      break;
    case 2:
      return '提现失败';
      break;
    case 3:
      return '全部';
      break;
    default:
      return '待审核';
      break;
  }
})

Vue.filter('transProxylevel', val => { // 等级状态转换
  switch (val) {
    case 1:
      return '等级一';
      break;
    case 2:
      return '等级二';
      break;
    case 3:
      return '等级三';
      break;
    default:
      return '等级四';
      break;
  }
})

Vue.filter('transCashOf', val => {
  switch (val) {
    case 0:
      return '全部';
      break;
    case 1:
      return '充值';
      break;
    case 2:
      return '提款';
      break;
    case 3:
      return '消费';
      break;
    case 4:
      return '购彩';
      break;
    case 5:
      return '中奖';
      break;
    case 6:
      return '未中奖';
      break;
    case 7:
      return '佣金提成';
      break;
    default:
      return '其他';
      break;
  }
})

Vue.filter('transArrFormate', val => {
  if(!val) return;
  // str -> arr  '7 10 1' -> '07 10 01'
  let arr = val.split(' ');
  let res = [];
  for (let i=0, len= arr.length; i<len; i++) {
    arr[i].length === 1 ? res.push('0'+arr[i]) : res.push(arr[i])
  };
  val = res.join(' ');
  return val
})

Vue.filter('transPhoneFormate', val => { // len 11 15
  if (!val) return;
  // 13988884241  1398****241
  let reg = /(\d{4})\d+(\d{3})/
  val = val.replace(/\s/g,'')
  if (val.length >14) {
    return val.replace(reg,'$1********$2')
  }
  return val.replace(reg,'$1****$2')
})

Vue.filter('transCountTime', val => { //s -> h:m:s
  if (!val)  return '00:00:00'
  let h = Math.floor(val/60/60)
  h = h<10 ? '0'+h : h;
  let m = Math.floor(val/60%60)
  m = m<10 ? '0'+m : m;
  let s = Math.floor(val%60)
  s = s<10 ? '0'+s : s;
  return h + ':' + m + ':' + s;
})

Vue.filter('transSum', arr => {
  if(!arr) return
  let res=0
  for (let i=0,len=arr.length;i<len;i++) {
    res += parseInt(arr[i])
  };
  return res
})

Vue.filter('transInsertSpace', val => {
  if (!(/\d\s{1,}\d/g.test(val))) return val
  let  res = [];
  res = val.split('  ')
  return /\,/.test(res[1]) ? res : [val]
})

Vue.filter('transTimeMinute', val => {
  if (!val)  return
  let res = ''
  let reg = /(\d{1,})分钟/
  res = val.match(reg)[1];
  var s=59;
  res--
  var mm='',ss = ''
  var result = ''
  setInterval(() => {
    t()
  },1000)
  var t = function () {
    mm = res < 10 ? '0'+res : res
    ss = s < 10 ? '0'+s : s
    s--;
    if(s<0){
      s=59;
      res--;
    }
    if (res<0) {
      res = val.match(reg)[1]--
    }

    return result = '00:'+mm+':'+ss
  }
  return t()

})

