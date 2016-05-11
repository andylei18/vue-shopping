<style src="../../../src/assets/styles/module/markets/views.css"></style>
<template>
	<div id="screen_wrap" class="ui-app with-header">
	<!--欢迎动画组件-->
    <cover :show="loadding.show"></cover>
    <!--遮罩层组件-->
    <mask :show="mask"></mask>
    <!--左侧菜单组件-->
    <menuLeft :show="menu.show" :list="menu.list"></menuLeft>
    <!--头部组件-->
    <head-module></head-module>
    
</div>

</template>
<script type="text/javascript">
  //加载公用小组件
  import Cover from '../../components/cover.vue'//欢迎动画组件
  import Mask from '../../components/mask.vue'//遮罩层组件
  import Menuleft from '../../components/menuleft.vue'//左侧菜单组件
  import HeadModule from '../../components/head.vue'//头部组件

  //页面局部view
  

  export default {
  	data (){
  		return {
             mask:false,
             loadding:{
               show:true
             },
             menu:{
               show:false,
               list:[]
             }
          }
  	},
  	components:{
  		Cover,Mask,Menuleft,HeadModule
  	},
  	route:{
  		data(transition){
			this.getData(transition)
  		}
  	}
  	methods:{
  		getData(){
  			const self=this
  			
  		}
  	}
  }
</script>