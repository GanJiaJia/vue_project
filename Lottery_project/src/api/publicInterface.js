import {requestOpt, alertip} from './recommend'

// 获取省份
export function getProvince(cb) {
  requestOpt.reqnoGet('provinces', res => {
    cb&&cb(res)
  }, err => {
    alertip(err)
  })
}

//  获取城市
export function getCity(province_id,cb) {
  requestOpt.reqnoGet('cities?province_id='+ province_id, res => {
    cb&&cb(res)
}, err => {
    alertip(err)
  })
}

// 获取地区
export function getArea(city_id,cb) {
  requestOpt.reqnoGet('areas?city_id='+ city_id, res => {
    cb&&cb(res)
}, err => {
    alertip(err)
  })
}

// 获取App配置信息
export function getAppInfo (cb) {
  requestOpt.reqnoGet('config', res => {

  }, err => {
    alertip(err)
  })
}

//  获取彩种 lottery_types/all
export const GetData =  {
  getlotteryList: function (cb) {
     requestOpt.reqnoGet('betting_list_v1?page=1&frequency=-1&is_hot=-1', res => {
       cb&&cb(res)
    }, err => {
      alertip(err)
    })
  }
}


