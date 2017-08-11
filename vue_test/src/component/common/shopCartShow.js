
/**
 * 这是一个工具类，暴露出一些方法，供我们组件调用
 * 在这个工具类中，主要是操作localStorage,来对商品数据进行
 * 增删改查
 */
 
 /**
  * 把传过来的数据存储到localStorage中
  */
  const key = 'goods';
 export function addGoods(goodsObj){
     
    //  console.log(localStorage.getItem(key));
    const goodsArray = JSON.parse(localStorage.getItem(key) || '[]');

    goodsArray.push(goodsObj);

    localStorage.setItem(key,JSON.stringify(goodsArray));
 }
 

 export function loaclGoodsList(){

    return JSON.parse(localStorage.getItem(key) || '[]'); 
 }

//  获取商品数量

 export function getGoodsCount (){

    const arr = JSON.parse(localStorage.getItem(key) || '[]');
    let goodsCount = 0;
    arr.forEach((item,index)=>{
        goodsCount += parseInt(item.count);
    })

    return goodsCount;
 }

//  根据id删除localStorage商品
 export function delGoodsById(id){

    const goodsArray = JSON.parse(localStorage.getItem(key) || '[]');

    for(var i = goodsArray.length-1; i >=0; i--){

        if(goodsArray[i].goodsId == id){

            goodsArray.splice(i,1);
        }

    }

    localStorage.setItem(key,JSON.stringify(goodsArray));

 }


