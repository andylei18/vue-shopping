<style src="../../../src/assets/styles/module/order/list.css"></style>
<template>
	<div class="ui-app with-header">
		
		<header id="M_headBar" class="ui-head-bar">  
			<a class="arr" href="javascript:void(history.back());"> <i class="icon-back"></i> </a>   
			<p class="title">订单列表</p>  
			<span class="badge icon-uniE810 badge-car" v-link="{name:'cart'}"></span>
		</header>

		<div id="views">
			<div class="order-list">  
				<nav class="order-tab" id="J_Tabs"> 
					<ul class="ui-nav nav-5"> 
						<li class="active">
							<a href="/x6/trade/order/list?orderStatus=all" data-status="all" data-navigate="true">全部</a>
						</li> 
						<li class="">
							<a href="/x6/trade/order/list?orderStatus=created" data-status="created" data-navigate="true">待付款<span class="count created"></span></a>
						</li> 
						<li class="">
							<a href="/x6/trade/order/list?orderStatus=unshipped_and_unreceived" data-status="unshipped_and_unreceived" data-navigate="true">待收货<span class="count unshipped_and_unreceived"></span></a>
						</li> 
						<li class="">
							<a href="/x6/trade/order/list?orderStatus=received_and_completed" data-status="received_and_completed" data-navigate="true">待评价<span class="count received_and_completed"></span></a>
						</li> 
						<li class="">
							<a href="/x6/trade/order/list?orderStatus=refund_orders" data-status="refund_orders" data-navigate="true">售后<span class="count refund_orders"></span></a>
						</li> 
					</ul> 
				</nav>  
				<section class="orderlist-wall" id="J_OrderList"> 
					<ul class="wall-bd clearfix">
						<div class="ui-empty">
							<p class="ui-empty-icon"><i class="icon icon-uniE813"></i></p><p class="ui-empty-text">还没有相关订单哦~</p>
						</div>
					</ul> 
					<div class="wall-load" style="display: none;"> 
						<span class="ui-loading"></span>加载中... 
					</div> 
					<div class="wall-page" style="display: none;"> 
						<span class="ui-btn ui-btn-pink prev-page">上一页</span>
					    <span class="ui-btn ui-btn-pink next-page">下一页</span> 
					</div> 
				</section>
			</div>


		</div>
	</div>
</template>
<script>
   //加载公用小组件
  

   export default {
      data () {
        return{
          
		}
      },
      components: {

      },
      route: {
        data(transition){
          var self = this
          //请求列表全部数据
          self.getAjax(transition)
        }
      },
      computed: {
	    selection: {
	      get () {
	        var self = this;
	        
	      }
	    }
	  },
      methods: {
        //请求列表全部数据
        getAjax (transition) {
          const self = this
          const mt = transition.to.params.mt
          let successCallback =(response) => {
            const data = response.data
            const json = data.result
            self.$route.router.app.loading = false
            if(data.status.code ==1001){
              //实时异步队列更新数据
              
            }
          }

          let errorCallback = (response)=> {
            //console.log(response)
          }

          self.$http.get(configPath + 'order/list.json').then(successCallback, errorCallback)
        }
     	
      }
    }
</script>