<template>

	<div>

		<mt-header fixed title="电商项目"></mt-header>
		<div class="backStyle" @click="goBackBtn" v-show="backIsShoworHidden">&lt;返回</div>
		<router-view></router-view>


		<!--底部的TabBar-->
		<nav class="mui-bar mui-bar-tab" v-show="!backIsShoworHidden">
			<router-link to="/home" class="mui-tab-item">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to="/message" class="mui-tab-item">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<router-link to="/shopcart" class="mui-tab-item">
				<span class="mui-icon mui-icon-contact"><span id="goodsNumber" class="mui-badge">{{goodsNum}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to="/settings" class="mui-tab-item">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>

	</div>


</template>
<style lang="css" scoped>
	.backStyle {
		position: fixed;
		z-index: 3;
		color: #fff;
		width: 50px;
		height: 40px;
		top: 0px;
		line-height: 40px;
		text-align: center;
		font-size: 14px;
		font-weight: 900;
	}
</style>

<script>
	import bus from './component/common/commonVue.js';
	import { getGoodsCount } from './component/common/shopCartShow.js';

	export default {

		data() {

			return {

				backIsShoworHidden: false,
				goodsNum: 0


			}
		},

		created() {

			this.getTotalCount();
		},

		methods: {
			goBackBtn() {
				// console.log(11);
				this.$router.go(-1);
			},

			goBackBtnIsShow(path) {
				// console.log(path);
				this.backIsShoworHidden = path == '/home' ? false : true;
			},
			getTotalCount() {
				this.goodsNum = getGoodsCount();
				this.$root.newBus.$on('sendNumber', (count) => {
					console.log(count);
					const oldVal = Number(document.querySelector('#goodsNumber').innerHTML);
					const lastValue = oldVal + count;
					// console.log(count);
					document.querySelector('#goodsNumber').innerHTML = lastValue;
				});
			}
		},
		watch: {

			$route(newVal, oldVal) {
				// console.log(newVal);
				this.goBackBtnIsShow(newVal.path);
			}
		}


	}

</script>