
  import {requestOpt, alertip} from 'api/recommend'
  export const colorList = [
    '#F9F900',
    '#6FB7B7',
    '#9999CC',
    '#B766AD',
    '#B87070',
    '#FF8F59',
    '#FFAF60',
    '#FFDC35',
    '#FFFF37',
    '#B7FF4A',
    '#28FF28',
    '#1AFD9C',
    '#00FFFF',
    '#2894FF',
    '#6A6AFF',
    '#BE77FF',
    '#FF77FF',
    '#FF79BC',
    '#FF2D2D',
    '#ADADAD'
  ]
  export const colorListLength = 20

  export function getRandColor () {
    var tem = Math.round(Math.random() * colorListLength)
    return colorList[tem]
  }
  export function getLotteryData (frequency,is_hot) {
    frequency=frequency||-1
    is_hot=is_hot||-1
    return requestOpt.reqnoGet('betting_list_v1?page=1&frequency=-1&is_hot=1', res => {
      return res.data.data.list
    }, err => {
//      alertip(err)
    })
  }
  /*export default
  {
    colorList,
    colorListLength,

  }*/


