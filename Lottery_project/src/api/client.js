import io from 'socket.io-client'
const CHAT={
	msgObj:document.querySelector('#app'),
	username:null,
	userid:null,
	socket:null,
	msgArr:[],

	init:function(){
		//连接websocket后端服务器
		// this.socket = io.connect('wss://node.redream.cn');
    this.socket = io.connect('http://120.76.211.1:8093/api/v1/betting_list_v1?page=2&frequency=0&is_hot=1');

		console.log(this.socket)

	}
}
export default CHAT
