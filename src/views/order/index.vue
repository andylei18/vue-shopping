<style src="../../../src/assets/styles/module/order/order.css"></style>
<template>
	<div class="ui-app with-header">
		
		<header id="M_headBar" class="ui-head-bar">  
			<a class="arr" href="javascript:void(history.back());"> <i class="icon-back"></i> </a>   
			<p class="title">确认订单</p>  
			<span class="badge icon-uniE810 badge-car" v-link="{name:'cart'}"></span>
		</header>

		<div id="orderPlace" class="orderPlace">
			<div class="contact" v-link="{name:'address'}"> <div style="padding:15px;"> <span>请填写收货地址</span> </div> </div>
			<div class="detail" v-for="detail in shopGroupList">
				<div class="detail_head">  
					<div class="detail_head_title"> 
						<span><img :src="detail.shopLogoUrl"> {{detail.shopName}}</span> 
						<span class="detail_shop_auth"><img src="http://s17.mogucdn.com/p1/150923/upload_ieztomzrmeydmmlegmzdambqgyyde_147x23.png"></span> 
					</div>  
					<a v-link="{name:'chat'}"><div class="icon icon-uniE80D contact_seller">私聊</div></a>   
				</div>

				<div class="detail_list">  
					<div class="detail_item" v-for="item in detail.skuGroupList"> 
						<div class="img"><img :src="item.imgUrl"></div> 
						<div class="msg">
							<div class="msg_title"> 
								<span>{{item.title}}</span> 
							</div> 
							<div class="msg_size">  
								<span>颜色：红色；尺码：L；</span>  
							</div> 
						</div> 
						<div class="price">   
							<div><span class="linethrough">{{item.skuPrice/100|currency ''}}</span></div>  
							<div><span class="price_now">{{item.skuNowPrice/100|currency ''}}</span></div>        
							<div class="detail_num detail_counter"> 
								<span class="detail_num_input detail_bold">{{item.quantity}}</span> 
								<span class="detail_num_add"></span> 
								<span class="detail_num_reduce disable"></span> 
							</div>    
						</div> 
					</div>  
				</div>

				<div class="detail_msg"> 
					<div class="total_price">  
						<span>价格合计:</span> 
						<span class="color_red item_sum fr">{{detail.totalPrice/100|currency ''}}</span>  
					</div>     
					<div class="message"> <textarea class="cp_comment" name="" cols="30" rows="1" placeholder="订单补充说明..."></textarea> </div>   
				</div>
			</div>

			<div class="summation clearfix"> 
				<span class="totalPay fl">总价：<span class="color_red goodsSum">{{totalPrice/100|currency ''}}</span></span> 
				<span id="createOrder" class="ui-btn ui-btn-pink fr" @click="payCall">立即下单</span> 
			</div>
		</div>



	</div>
</template>
<script>
  //加载公用小组件
  

   export default {
      data () {
        return{
          address:{
          	 isTrue:false
          },
          shopGroupList:[],		
          totalPrice:"",			//订单总价
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
      destroy () {
          var self = this
          
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
            if(data.status.code =="SUCCESS"){
              //实时异步队列更新数据
              transition.next({
              	shopGroupList:json.shopGroupList,
                totalPrice:json.totalPrice
              })
            }
          }

          let errorCallback = (json)=> {
            //console.log(json)
          }

          self.$http.get(configPath + 'order/order.json').then(successCallback, errorCallback)
        },
        //立即下单
	    payCall () {
	      if(!this.address.isTrue){
	      	Toast({
	            message: '请输入收货地址!',
	            position: 'middle',
	            duration: 3000
		    })
	      }
	    }
      }
      
    }
</script>
