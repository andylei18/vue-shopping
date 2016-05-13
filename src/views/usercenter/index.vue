<style src="../../../src/assets/styles/module/usercenter/views.css"></style>

<template>
	<div class="ui-app with-header">

		<header class="ui-head-bar">
		    <a class="arr" href="javascript:void(history.back());">
		      <i class="icon-back"></i>
		    </a>
		    <p class="title">个人中心</p>
		    <span class="badge icon-uniE810 badge-car" v-link="{name:'cart'}"></span>
		 </header>

		 <div id="views">
		 	<div class="wrap">

		 		<!--用户信息-->
		 		<header class="hd">
			 		<div class="avaterbox">
				 		<div class="r r1">
					 		<div class="r r2">
						 		<div class="r r3">
							 		<div class="r r4">
							 			<img src="http://s22.mogucdn.com/p1/160511/upload_ifrdsmjqgm2wcnjxhazdambqmeyde_40x40.jpg_100x100.jpg" alt="" class="avater">
							 		</div>
						 		</div>
					 		</div>
				 		</div>
			 		</div>
			 		<div class="namecard">
				 		<h2 class="tt">aNdy200509<span class="lv lv0"></span></h2>
				 		<p class="subtt"><span class="mbean">蘑豆 0</span> <span class="coupon">现金券 0</span></p>
			 		</div>
		 		</header>

		 		<!--全部订单-->
		 		<ul class="modlist mb15 nobdt hasarrow">
		 			<li><a href="../trade/order/list?orderStatus=all">全部订单</a></li>
		 			<li class="operate clearfix">
		 				<a href="../trade/order/list?orderStatus=created" class="ic"><span class="icon icon-pay"></span>待付款</a>
		 				<a href="../trade/order/list?orderStatus=unshipped_and_unreceived" class="ic"><span class="icon ic-truck icon-truck"></span>待收货</a>
		 				<a href="../trade/order/list?orderStatus=received_and_completed" class="ic"><span class="icon icon-edit"></span>待评价</a>
		 				<a href="../trade/order/list?orderStatus=refund_orders" class="ic"><span class="icon icon-refund"></span>售后</a>
		 			</li>
		 		</ul>


		 		<!--用户的信息拓展-->
		 		<ul class="modlist hasarrow">
		 			<li><a href="pay/bindlist" data-navigate="true">我的银行卡</a></li>
		 			<li><a href="/x5/u/coupon?sfrom=x6/u/14vwmi8">我的优惠</a></li>
		 			<li><a href="/x5/u/14vwmi8/fav?sfrom=x6/u/14vwmi8">我的喜欢</a></li>
		 			<li><a data-navigate="true" href="u/14vwmi8/shops">我关注的店铺</a></li><li><a href="/x5/u/14vwmi8/followList?sfrom=x6/u/14vwmi8">我关注的达人</a></li>
		 		</ul>

		 		<!--辅助信息-->
		 		<ul class="modlist hasarrow">
		 			<li><a href="/x5/infocenter/atme?sfrom=x6/u/14vwmi8">消息通知</a></li>
		 			<li><a data-navigate="true" href="trade/address">收货地址</a></li>
		 			<li><a href="/x/im/?imver=1.0&amp;show_header=x6#chat/b14ejg%23101">官方客服</a></li>
		 			<li><a href="/x5/feedback?sfrom=x6/u/14vwmi8">意见反馈</a></li>
		 		</ul>

				<!--退出按钮-->
		 		<input type="button" id="M_logout" class="logout" value="退出登录">
		 	</div>
		 </div>
	</div>
</template>

<script>

  export default {
      data() {
          return {
             
          }
      },
      components: {
      },
      route: {
        data (transition) {
          const self = this
          //请求列表全部数据
          self.getAjax(transition)
          //滚动加载
          //self.scrollList();
        },
        deactivate (transition) {
          //$(window).off('scroll');
          transition.next()
        }
      },
      methods: {
        //请求列表全部数据
        getAjax(transition){
          const self = this
          let successCallback =(response) => {
            const jsondata = response.data
            self.$route.router.app.loading = false
          
          }
          let errorCallback = (json)=> {
            //console.log(json)
          }
          let data = {
              id:'001'
          }
          let options ={
              name:'lei'
          }
          self.$http.get(configPath + 'home.json', [data]).then(successCallback, errorCallback)

        }
      }
  }
</script>