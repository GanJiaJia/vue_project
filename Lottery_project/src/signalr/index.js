import { Message } from 'element-ui';
const HUBNAME = 'DefaultHub';

/*客户端调用服务器端方法*/
//更新订单打印次数
const updateOrderPrint = {
  name:'updateOrderPrint',
  method:function(data){
    console.log(data)
  }
}

/*服务器调用客户端方法*/
// 打印新订单
const printNewOrder = {
  name:'printNewOrder',
  method:function(data){
    console.log(data)
  }
}
const get = {
  name:'Get',
  method:function(data){
    console.log(data)
  }
}

//服务器端的方法
const serverMethodSets = [updateOrderPrint];
//客户端的方法
const clientMethodSets = [printNewOrder,get]; //将需要注册的方法放进集合

// 建立连接
export function startConnection() {
  let hub = $.hubConnection(process.env.HUB_API)
  let proxy = createHubProxy(hub) //需要先注册方法再连接
  hub.start().done((connection) =>{
    console.log('Now connected, connection ID=' + connection.id)
  }).fail(()=>{
    Message('连接失败' + error);
    console.log('Could not connect');
  })
  hub.error(function (error) {
    Message('SignalR error: ' + error);
    console.log('SignalR error: ' + error)
  })
  hub.connectionSlow(function () {
    console.log('We are currently experiencing difficulties with the connection.')
  });
  hub.disconnected(function () {
    console.log('disconnected')
  });
  return proxy
}
// 手动创建proxy
export function createHubProxy(hub){
  let proxy = hub.createHubProxy(HUBNAME)
  // 注册客户端方法
  clientMethodSets.map((item)=>{
    proxy.on(item.name,item.method)
  })
  return proxy
}
