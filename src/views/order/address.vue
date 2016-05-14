<style src="../../../src/assets/styles/module/order/address.css"></style>
<template>
	<div class="ui-app with-header">

		<header id="M_headBar" class="ui-head-bar">
			<a class="arr" href="javascript:void(history.back());">
				<i class="icon-back"></i>
			</a>
			<p class="title">编辑收货地址</p>
			<span class="badge">
				<div class="submit" style="text-align: center;" @click="saveAddress">
					<a id="edit_ok_btn" class="edit_ok_btn">
						<i class="icon" style="color: #fff; font-size: 20px;"></i>
					</a>
				</div>
			</span>
		</header>

		<div id="views">
			<div id="addressEdit_wrap" class="addressEdit_wrap1463231594552">
				<div id="home_address" class="wall_wrapper"> 
					<div class="wall_scroller"> 
						<div class="form_wrap"> 
							<form action="" method="post"> 
								<div class="form_mod_wrap mb15 r3 wd4"> 
									<div class="form_mod"> 
										<div> 
										<label for="">收货人</label> 
										<input type="text" class="text" name="username" id="edit_form_receiveName" :value="name" v-model="name"> 
									</div> 
								</div> 
								<div class="form_mod"> 
									<div> 
										<label for="">手机号码</label> 
										<input type="tel" class="text" name="number" id="edit_form_mobile" :value="phone" v-model="phone"> 
									</div> 
								</div> 
								<div class="form_mod form_select"> 
									<div> 
										<label for="">省份</label> 
										<select class="select" @change="selectPro($event,0)" v-model="province"> 
											<option value="0">请选择</option>  
							  				<option v-for="pro in location[0]" :value="pro.id" >{{pro.name}}</option>  
										</select> 
									</div> 
								</div> 
								<div class="form_mod form_select"> 
									<div> 
										<label for="">城市</label> 
										<select class="select" @change="selectPro($event,1)" v-model="city">
											<option value="0">请选择</option>
											<option v-for="scity in location[selectcityID]" :value="scity.id">{{scity.name}}</option>
										</select> 
									</div> 
								</div> 
								<div class="form_mod form_select"> 
									<div> 
										<label for="">地区</label> 
										<select class="select" id="home_address-sarea" v-model="area">
											<option value="0">请选择</option>
											<option v-for="sarea in location[selectareaID]" :value="sarea.id">{{sarea.name}}</option>
										</select> 
									</div> 
								</div> 
								<div class="form_mod"> 
									<div> 
										<label for="">详细地址</label> 
										<input type="text" class="text" name="address" id="edit_form_address" :value="detailed" v-model="detailed"> </div> 
									</div> 
									<div class="form_mod">
										 <div> 
										 	<label for="">邮编</label> 
										 	<input type="tel" class="text" name="zip" id="edit_form_zip" maxlength="6" :value="code" v-model="code"> 
										 </div> 
										</div> 
									</div> 
								</form> 
							</div> 

							<!-- <div class="weixin" style="display:none;"> 
								<div class="weixin_mod"> 
									<div> <label for="">从微信选择地址</label> 
								</div> 
							</div>  -->


						</div> 
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
  //加载公用小组件
  

   export default {
      data () {
        return{
          name:"",
          phone:"",
          province:"",
          city:"",
          area:"",
		  detailed:"",
		  code:"",

		  location:"",
		  selectcityID:"",
		  selectareaID:"" ,
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
              transition.next({
              	location:json.location            
              })
            }
          }

          let errorCallback = (response)=> {
            //console.log(response)
          }

          self.$http.get(configPath + 'order/address.json').then(successCallback, errorCallback)
        },
        //选择省份
        selectPro (e,type) {
        	let ID = e.target.value
        	//选择省份
        	if(type==0){
				this.selectcityID = ID
				console.log(this.location[this.selectcityID])
        	}
        	//选择城市
        	else{
				this.selectareaID = ID
        	}
        	
        },
        //保存收货地址
        saveAddress () {
        	const self = this
        	let params = {
	    		  name:self.name,
		          phone:self.phone,
		          province:self.province,
		          city:self.city,
		          area:self.area,
				  detailed:self.detailed,
				  code:self.code,
        	}

        	let successCallback = (response)=> {
	            const data = response.data
	            if(data&&data.status.code==1001){
	            	
	            }
	        }

	        let errorCallback = (response)=> {

	        }

        	self.$http.post(configPath + 'cart/list.json',params).then(successCallback,errorCallback)
        }
     	
      }
    }
</script>