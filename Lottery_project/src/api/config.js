export const commonParams = {
  g_tk: 1928093487,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp'
}

export const options = {
  param: 'jsonpCallback'
}

export const ERR_OK = 0

//  开发 development       生产 production
export const def_env =  'development'

export const api_ver = '1.0.0' // api 版本号

// 首页轮播图 图片地址配置
export const imgConfig = {
  imgUrls: [{
    id:1,name: '',href: '',pic: 'http:\\/\\/120.76.211.1:8092\\/uploads\\/2017\\/04\\/18\\/2017041814205880772.png'
  }, {
    id:2,name: '',href: '',pic: 'http:\\/\\/120.76.211.1:8092\\/uploads\\/2017\\/04\\/18\\/2017041814234362608.png'
  }]
}

// 彩票范围
export const lotteryRanges =  {
  ssq: [{ // 双色球
    type: '红球',
    className: 'b-red',
    prams: [{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    },{
      name: '11', val: 11, active: false
    },{
      name: '12', val: 12, active: false
    },{
      name: '13', val: 13, active: false
    },{
      name: '14', val: 14, active: false
    },{
      name: '15', val: 15, active: false
    },{
      name: '16', val: 16, active: false
    },{
      name: '17', val: 17, active: false
    },{
      name: '18', val: 18, active: false
    },{
      name: '19', val: 19, active: false
    },{
      name: '20', val: 20, active: false
    },{
      name: '21', val: 21, active: false
    },{
      name: '22', val: 22, active: false
    },{
      name: '23', val: 23, active: false
    },{
      name: '24', val: 24, active: false
    },{
      name: '25', val: 25, active: false
    },{
      name: '26', val: 26, active: false
    },{
      name: '27', val: 27, active: false
    },{
      name: '28', val: 28, active: false
    },{
      name: '29', val: 29, active: false
    },{
      name: '30', val: 30, active: false
    },{
      name: '31', val: 31, active: false
    },{
      name: '32', val: 32, active: false
    },{
      name: '33', val: 33, active: false
    }]
  }, {
    type: '蓝球',
    className: 'b-blue',
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    },{
      name: '11', val: 11, active: false
    },{
      name: '12', val: 12, active: false
    },{
      name: '13', val: 13, active: false
    },{
      name: '14', val: 14, active: false
    },{
      name: '15', val: 15, active: false
    },{
      name: '16', val: 16, active: false
    }]
  }],
  dlt: [{ // 大乐透
    type: '红球',
    className: 'b-red',
    prams: [{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    },{
      name: '11', val: 11, active: false
    },{
      name: '12', val: 12, active: false
    },{
      name: '13', val: 13, active: false
    },{
      name: '14', val: 14, active: false
    },{
      name: '15', val: 15, active: false
    },{
      name: '16', val: 16, active: false
    },{
      name: '17', val: 17, active: false
    },{
      name: '18', val: 18, active: false
    },{
      name: '19', val: 19, active: false
    },{
      name: '20', val: 20, active: false
    },{
      name: '21', val: 21, active: false
    },{
      name: '22', val: 22, active: false
    },{
      name: '23', val: 23, active: false
    },{
      name: '24', val: 24, active: false
    },{
      name: '25', val: 25, active: false
    },{
      name: '26', val: 26, active: false
    },{
      name: '27', val: 27, active: false
    },{
      name: '28', val: 28, active: false
    },{
      name: '29', val: 29, active: false
    },{
      name: '30', val: 30, active: false
    },{
      name: '31', val: 31, active: false
    },{
      name: '32', val: 32, active: false
    },{
      name: '33', val: 33, active: false
    },{
      name: '34', val: 34, active: false
    },{
      name: '35', val: 35, active: false
    }]
  }, {
    type: '蓝球',
    className: 'b-blue',
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    },{
      name: '11', val: 11, active: false
    },{
      name: '12', val: 12, active: false
    }]
  }],
  lhc: [{
    type: '特码',
    prams:[{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    },{
      name: '11', val: 11, active: false
    },{
      name: '12', val: 12, active: false
    },{
      name: '13', val: 13, active: false
    },{
      name: '14', val: 14, active: false
    },{
      name: '15', val: 15, active: false
    },{
      name: '16', val: 16, active: false
    },{
      name: '17', val: 17, active: false
    },{
      name: '18', val: 18, active: false
    },{
      name: '19', val: 19, active: false
    },{
      name: '20', val: 20, active: false
    },{
      name: '21', val: 21, active: false
    },{
      name: '22', val: 22, active: false
    },{
      name: '23', val: 23, active: false
    },{
      name: '24', val: 24, active: false
    },{
      name: '25', val: 25, active: false
    },{
      name: '26', val: 26, active: false
    },{
      name: '27', val: 27, active: false
    },{
      name: '28', val: 28, active: false
    },{
      name: '29', val: 29, active: false
    },{
      name: '30', val: 30, active: false
    },{
      name: '31', val: 31, active: false
    },{
      name: '32', val: 32, active: false
    },{
      name: '33', val: 33, active: false
    },{
      name: '34', val: 34, active: false
    },{
      name: '35', val: 35, active: false
    },{
      name: '36', val: 36, active: false
    },{
      name: '37', val: 37, active: false
    },{
      name: '38', val: 38, active: false
    },{
      name: '39', val: 39, active: false
    },{
      name: '40', val: 40, active: false
    },{
      name: '41', val: 41, active: false
    },{
      name: '42', val: 42, active: false
    },{
      name: '43', val: 43, active: false
    },{
      name: '44', val: 44, active: false
    },{
      name: '45', val: 45, active: false
    },{
      name: '46', val: 46, active: false
    },{
      name: '47', val: 47, active: false
    },{
      name: '48', val: 48, active: false
    },{
      name: '49', val: 49, active: false
    }]
  }],
  twoFirst:[{ // 前二直选和值
    type: '和值',
    prams:[{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    },{
      name: '11', val: 11, active: false
    },{
      name: '12', val: 12, active: false
    },{
      name: '13', val: 13, active: false
    },{
      name: '14', val: 14, active: false
    },{
      name: '15', val: 15, active: false
    },{
      name: '16', val: 16, active: false
    },{
      name: '17', val: 17, active: false
    },{
      name: '18', val: 18, active: false
    }]
  }],
  twogroup:[{ // 二组选和值
    type: '和值',
    prams:[{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    },{
      name: '11', val: 11, active: false
    },{
      name: '12', val: 12, active: false
    },{
      name: '13', val: 13, active: false
    },{
      name: '14', val: 14, active: false
    },{
      name: '15', val: 15, active: false
    },{
      name: '16', val: 16, active: false
    },{
      name: '17', val: 17, active: false
    }]
  }],
  threeGroupSum:[{ // 组三和值
    type: '和值',
    prams:[{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    },{
      name: '11', val: 11, active: false
    },{
      name: '12', val: 12, active: false
    },{
      name: '13', val: 13, active: false
    },{
      name: '14', val: 14, active: false
    },{
      name: '15', val: 15, active: false
    },{
      name: '16', val: 16, active: false
    },{
      name: '17', val: 17, active: false
    },{
      name: '18', val: 18, active: false
    },{
      name: '19', val: 19, active: false
    },{
      name: '20', val: 20, active: false
    },{
      name: '21', val: 21, active: false
    },{
      name: '22', val: 22, active: false
    },{
      name: '23', val: 23, active: false
    },{
      name: '24', val: 24, active: false
    },{
      name: '25', val: 25, active: false
    },{
      name: '26', val: 26, active: false
    }]
  }],
  sixGroupSum:[{ // 组六和值
    type: '和值',
    prams:[{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    },{
      name: '11', val: 11, active: false
    },{
      name: '12', val: 12, active: false
    },{
      name: '13', val: 13, active: false
    },{
      name: '14', val: 14, active: false
    },{
      name: '15', val: 15, active: false
    },{
      name: '16', val: 16, active: false
    },{
      name: '17', val: 17, active: false
    },{
      name: '18', val: 18, active: false
    },{
      name: '19', val: 19, active: false
    },{
      name: '20', val: 20, active: false
    },{
      name: '21', val: 21, active: false
    },{
      name: '22', val: 22, active: false
    },{
      name: '23', val: 23, active: false
    },{
      name: '24', val: 24, active: false
    }]
  }],
  threeStarGroup:[{ // 三组选和值
    type: '和值',
    prams:[{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    },{
      name: '11', val: 11, active: false
    },{
      name: '12', val: 12, active: false
    },{
      name: '13', val: 13, active: false
    },{
      name: '14', val: 14, active: false
    },{
      name: '15', val: 15, active: false
    },{
      name: '16', val: 16, active: false
    },{
      name: '17', val: 17, active: false
    },{
      name: '18', val: 18, active: false
    },{
      name: '19', val: 19, active: false
    },{
      name: '20', val: 20, active: false
    },{
      name: '21', val: 21, active: false
    },{
      name: '22', val: 22, active: false
    },{
      name: '23', val: 23, active: false
    },{
      name: '24', val: 24, active: false
    },{
      name: '25', val: 25, active: false
    },{
      name: '26', val: 26, active: false
    },{
      name: '27', val: 27, active: false
    }]
  }],
  directSelect:[{ // 直选和值
    type: '和值',
    prams:[{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    },{
      name: '11', val: 11, active: false
    },{
      name: '12', val: 12, active: false
    },{
      name: '13', val: 13, active: false
    },{
      name: '14', val: 14, active: false
    },{
      name: '15', val: 15, active: false
    },{
      name: '16', val: 16, active: false
    },{
      name: '17', val: 17, active: false
    },{
      name: '18', val: 18, active: false
    }]
  }],
  fiveSelect: [{ // 五星
    type: '万位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '千位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '百位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '十位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '个位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  fiveStar: [{ // 五星
    type: '第一位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '第二位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '第三位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '第四位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '第五位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  fiveStars: [{ // 五星
    type: '万位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '千位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '百位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '十位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '个位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  fourStar: [{ // 四星
    type: '第一位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '第二位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '第三位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '第四位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  fourStars: [{ // 四星
    type: '千位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '百位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '十位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '个位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  threeStarLast: [{ // 后三星
    type: '第三位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '第四位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '第五位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  threeStarLasts: [{ // 后三星
    type: '百位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '十位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '个位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  threeStarFirst: [{ // 前三星
    type: '第一位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '第二位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '第三位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  threeStarFirsts: [{ // 前三星
    type: '万位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '千位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '百位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  fourSelect:[{ // 四星
      type: '千位',
      prams:[{
        name: '0', val: 0, active: false
      },{
        name: '1', val: 1, active: false
      },{
        name: '2', val: 2, active: false
      },{
        name: '3', val: 3, active: false
      },{
        name: '4', val: 4, active: false
      },{
        name: '5', val: 5, active: false
      },{
        name: '6', val: 6, active: false
      },{
        name: '7', val: 7, active: false
      },{
        name: '8', val: 8, active: false
      },{
        name: '9', val: 9, active: false
      }]
    },{
      type: '百位',
      prams:[{
        name: '0', val: 0, active: false
      },{
        name: '1', val: 1, active: false
      },{
        name: '2', val: 2, active: false
      },{
        name: '3', val: 3, active: false
      },{
        name: '4', val: 4, active: false
      },{
        name: '5', val: 5, active: false
      },{
        name: '6', val: 6, active: false
      },{
        name: '7', val: 7, active: false
      },{
        name: '8', val: 8, active: false
      },{
        name: '9', val: 9, active: false
      }]
    },{
      type: '十位',
      prams:[{
        name: '0', val: 0, active: false
      },{
        name: '1', val: 1, active: false
      },{
        name: '2', val: 2, active: false
      },{
        name: '3', val: 3, active: false
      },{
        name: '4', val: 4, active: false
      },{
        name: '5', val: 5, active: false
      },{
        name: '6', val: 6, active: false
      },{
        name: '7', val: 7, active: false
      },{
        name: '8', val: 8, active: false
      },{
        name: '9', val: 9, active: false
    }]
    },{
      type: '个位',
      prams:[{
        name: '0', val: 0, active: false
      },{
        name: '1', val: 1, active: false
      },{
        name: '2', val: 2, active: false
      },{
        name: '3', val: 3, active: false
      },{
        name: '4', val: 4, active: false
      },{
        name: '5', val: 5, active: false
      },{
        name: '6', val: 6, active: false
      },{
        name: '7', val: 7, active: false
      },{
        name: '8', val: 8, active: false
      },{
        name: '9', val: 9, active: false
    }]
  }],
  threeSelectLast: [{ // 后三直选复式
    type: '百位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '十位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '个位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  threeSelectFirst: [{ // 前三直选复式
    type: '万位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '千位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '百位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  twoStarFirst: [{ // 二星直选
    type: '百位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '十位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  twoStarLast: [{ // 二星后选
    type: '十位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '个位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  threeGroup: [{ // 组三
    type: '组三',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  sixGroup: [{ // 组六
    type: '组六',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  group24: [{ // 组选24
    type: '组选24',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  group1: [{ // 组选
    type: '组选',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  two1: [{ // 一码
    type: '一码',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  two2: [{ // 二码
    type: '二码',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  groupfour6: [{ // 前4组选6
    type: '二重号',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  groupfour12: [{ // 4组选12
    type: '二重号',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }, {
      type: '单号',
      prams: [{
        name: '0', val: 0, active: false
      },{
        name: '1', val: 1, active: false
      },{
        name: '2', val: 2, active: false
      },{
        name: '3', val: 3, active: false
      },{
        name: '4', val: 4, active: false
      },{
        name: '5', val: 5, active: false
      },{
        name: '6', val: 6, active: false
      },{
        name: '7', val: 7, active: false
      },{
        name: '8', val: 8, active: false
      },{
        name: '9', val: 9, active: false
    }]
  }],
  groupfour4: [{ // 4组选4
    type: '三重号',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }, {
    type: '单号',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  bigsmallFirst: [{ // 前二大小单双
    type: '万位',
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  },{type: '千位',
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }],
  bigsmallLast: [{ // 后二大小单双
    type: '十位',
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  },{type: '个位',
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }],
  bigsmallFirst3s: [{ // 前三大小单双
    type: '百位',
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  },{type: '十位',
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  },{type: '个位',
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }],
  bigsmallLast3: [// 后三大小单双
    {type: '百位',
      prams: [{
        name: '大', val: 1, active: false
      }, {
        name: '小', val: 2, active: false
      }, {
        name: '单', val: 3, active: false
      }, {
        name: '双', val: 4, active: false
      }]
    },{
    type: '十位',
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  },{type: '个位',
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }],
  bigsmallFirst3s: [{ // 前三大小单双
    type: '万位',
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }, {
    type: '千位',
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  },{
      type: '百位',
      prams: [{
        name: '大', val: 1, active: false
      }, {
        name: '小', val: 2, active: false
      }, {
        name: '单', val: 3, active: false
      }, {
        name: '双', val: 4, active: false
      }]
    }],
  bigsmallFirst2: [// 前二大小单双
    {type: '百位',
      prams: [{
        name: '大', val: 1, active: false
      }, {
        name: '小', val: 2, active: false
      }, {
        name: '单', val: 3, active: false
      }, {
        name: '双', val: 4, active: false
      }]
    },{
      type: '十位',
      prams: [{
        name: '大', val: 1, active: false
      }, {
        name: '小', val: 2, active: false
      }, {
        name: '单', val: 3, active: false
      }, {
        name: '双', val: 4, active: false
      }]
    }],
  bigsmallFirst2s: [// 前二大小单双
    {type: '万位',
      prams: [{
        name: '大', val: 1, active: false
      }, {
        name: '小', val: 2, active: false
      }, {
        name: '单', val: 3, active: false
      }, {
        name: '双', val: 4, active: false
      }]
    },{
      type: '千位',
      prams: [{
        name: '大', val: 1, active: false
      }, {
        name: '小', val: 2, active: false
      }, {
        name: '单', val: 3, active: false
      }, {
        name: '双', val: 4, active: false
      }]
    }],
  bigsmallFirst3: [// 前二大小单双
    {type: '万位',
      prams: [{
        name: '大', val: 1, active: false
      }, {
        name: '小', val: 2, active: false
      }, {
        name: '单', val: 3, active: false
      }, {
        name: '双', val: 4, active: false
      }]
    },{
      type: '千位',
      prams: [{
        name: '大', val: 1, active: false
      }, {
        name: '小', val: 2, active: false
      }, {
        name: '单', val: 3, active: false
      }, {
        name: '双', val: 4, active: false
      }]
    },{
      type: '百位',
      prams: [{
        name: '大', val: 1, active: false
      }, {
        name: '小', val: 2, active: false
      }, {
        name: '单', val: 3, active: false
      }, {
        name: '双', val: 4, active: false
      }]
    }],
  bigsmallLast2: [// 后二大小单双
    {type: '十位',
      prams: [{
        name: '大', val: 1, active: false
      }, {
        name: '小', val: 2, active: false
      }, {
        name: '单', val: 3, active: false
      }, {
        name: '双', val: 4, active: false
      }]
    },{
      type: '个位',
      prams: [{
        name: '大', val: 1, active: false
      }, {
        name: '小', val: 2, active: false
      }, {
        name: '单', val: 3, active: false
      }, {
        name: '双', val: 4, active: false
      }]
    }],
  optional1: [{ // 任选一中一
    type: '一中一',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optional1: [{ // 任选一中一
    type: '一中一',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optional22: [{ // 任选2中2
    type: '二中二',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optional33: [{ // 任选3中3
    type: '三中三',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optional44: [{ // 任选4中4
    type: '四中四',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optional55: [{ // 任选5中5
    type: '五中五',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optional65: [{ // 任选6中5
    type: '六中五',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optiona75: [{ // 任选7中5
    type: '七中五',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optional85: [{ // 任选8中5
    type: '八中五',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optional3m: [{ // 11 5 3码
    type: '第一位',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }, {
    type: '第二位',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  },{
    type: '第三位',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optionalGroup: [{ // 11 5 组选
    type: '组选',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optionalGroupDT: [{ // 11 5 胆拖
    type: '胆码',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }, {
    type: '拖码',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optional3mid: [{ // 11 5 中三直选复式
    type: '第二位',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }, {
    type: '第三位',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  },{
    type: '第四位',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optional3Last: [{ // 11 5 后三直选复式
    type: '第三位',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }, {
    type: '第四位',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  },{
    type: '第五位',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optional2m: [{ // 11 5 二码
    type: '第一位',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }, {
    type: '第二位',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optional2Last: [{ // 11 5 二码
    type: '第四位',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }, {
    type: '第五位',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optionalNopos3f: [{ // 11 5 不定位 前3位
    type: '前三位',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optionalNopos3m: [{ // 11 5 不定位 中3位
    type: '中三位',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optionalNopos3l: [{ // 11 5 不定位 后3位
    type: '后三位',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optionalPos: [{// 11 5 定位胆
    type: '第一位',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
    }, {
    type: '第二位',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }, {
    type: '第三位',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  },{
    type: '第四位',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  },{
    type: '第五位',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  sscPos: [{// 时时彩 定位胆
    type: '万位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }, {
    type: '千位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }, {
    type: '百位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '十位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '个位',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  quick3Sum:[{ // 快三  和值
    type: '和值',
    prams:[{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    },{
      name: '11', val: 11, active: false
    },{
      name: '12', val: 12, active: false
    },{
      name: '13', val: 13, active: false
    },{
      name: '14', val: 14, active: false
    },{
      name: '15', val: 15, active: false
    },{
      name: '16', val: 16, active: false
    },{
      name: '17', val: 17, active: false
    },{
      name: '18', val: 18, active: false
    }]
  }],
  quick3Samet:[{ // 快三
    type: '号码',
    prams:[{
      name: '三同号通选', val: 1, className: 'sqrt', active: false
    }]
  }],
  quick3lh:[{ // 快三
    type: '号码',
    prams:[{
      name: '三连号通选', val: 1, className: 'sqrt', active: false
    }]
  }],
  quick3Samed:[{ // 快三
    type: '号码',
    prams:[{
      name: '111', val: 1, active: false
    },{
      name: '222', val: 2, active: false
    },{
      name: '333', val: 3, active: false
    },{
      name: '444', val: 4, active: false
    },{
      name: '555', val: 5, active: false
    },{
      name: '666', val: 6, active: false
    }]
  }],
  quick32th:[{ // 快三
    type: '号码',
    prams:[{
      name: '11', val: 1, active: false
    },{
      name: '22', val: 2, active: false
    },{
      name: '33', val: 3, active: false
    },{
      name: '44', val: 4, active: false
    },{
      name: '55', val: 5, active: false
    },{
      name: '66', val: 6, active: false
    }]
  }],
  quick32bth:[{ // 快三
    type: '同号',
    prams:[{
      name: '11', val: 1, active: false
    },{
      name: '22', val: 2, active: false
    },{
      name: '33', val: 3, active: false
    },{
      name: '44', val: 4, active: false
    },{
      name: '55', val: 5, active: false
    },{
      name: '66', val: 6, active: false
    }]
  },{
    type: '不同号',
    prams:[{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    }]
  }],
  quick3normal:[{ // 快三
    type: '标准',
    prams:[{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    }]
  }],
  quick3DT:[{ // 快三
    type: '胆码',
    prams:[{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    }]
  }, {
    type: '拖码',
    prams:[{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    }]
  }],
  PK10nopos: [{
    type: '冠军',
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  },{
    type: '亚军',
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  },{
    type: '季军',
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  },{
    type: '第四名',
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  },{
    type: '第五名',
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  },{
    type: '第六名',
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  },{
    type: '第七名',
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  },{
    type: '第八名',
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  },{
    type: '第九名',
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  },{
    type: '第十名',
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  }],
  PK10first: [{
    type: '冠军',
    prams: [{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  }],
  PK10second: [{
    type: '冠军',
    prams: [{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  },{
    type: '亚军',
    prams: [{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  }],
  PK10third: [{
    type: '冠军',
    prams: [{
      name: '01', val: 1, active: false
    }, {
      name: '02', val: 2, active: false
    }, {
      name: '03', val: 3, active: false
    }, {
      name: '04', val: 4, active: false
    }, {
      name: '05', val: 5, active: false
    }, {
      name: '06', val: 6, active: false
    }, {
      name: '07', val: 7, active: false
    }, {
      name: '08', val: 8, active: false
    }, {
      name: '09', val: 9, active: false
    }, {
      name: '10', val: 10, active: false
    }]
  },{
    type: '亚军',
    prams: [{
      name: '01', val: 1, active: false
    }, {
      name: '02', val: 2, active: false
    }, {
      name: '03', val: 3, active: false
    }, {
      name: '04', val: 4, active: false
    }, {
      name: '05', val: 5, active: false
    }, {
      name: '06', val: 6, active: false
    }, {
      name: '07', val: 7, active: false
    }, {
      name: '08', val: 8, active: false
    }, {
      name: '09', val: 9, active: false
    }, {
      name: '10', val: 10, active: false
    }]
  },{
    type: '季军',
    prams: [{
      name: '01', val: 1, active: false
    }, {
      name: '02', val: 2, active: false
    }, {
      name: '03', val: 3, active: false
    }, {
      name: '04', val: 4, active: false
    }, {
      name: '05', val: 5, active: false
    }, {
      name: '06', val: 6, active: false
    }, {
      name: '07', val: 7, active: false
    }, {
      name: '08', val: 8, active: false
    }, {
      name: '09', val: 9, active: false
    }, {
      name: '10', val: 10, active: false
    }]
  }]
}


