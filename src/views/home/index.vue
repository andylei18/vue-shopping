<style src="../../../src/assets/styles/module/home/views.css"></style>

<template>
  <div class="ui-app with-header">

    <!--欢迎动画组件-->
    <cover :show="loadding.show"></cover>
    <!--遮罩层组件-->
    <mask :show="mask"></mask>
    <!--左侧菜单组件-->
    <menuLeft :show="menu.show" :list="menu.list"></menuLeft>

    <!--头部组件-->
    <head-module></head-module>
    <!--首页登陆组件-->
    <login-module></login-module>
    <!--中心数据组件-->
    <views-module></views-module>

  </div>
</template>

<script>

  //加载公用小组件
  import Cover from '../../components/cover.vue'//欢迎动画组件
  import Mask from '../../components/mask.vue'//遮罩层组件
  import Menuleft from '../../components/menuleft.vue'//左侧菜单组件

  //加载局部业务组件
  import HeadModule from '../../components/head.vue'//头部组件
  import LoginModule from '../../views/home/login.vue'//首页登陆
  import ViewsModule from '../../views/home/views.vue'//中心数据组件

  export default {
      data() {
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
      components: {
         Cover,Mask,Menuleft,HeadModule,LoginModule,ViewsModule
      },
      route: {
        data (transition) {
          const _self = this
          //请求列表全部数据
          _self.getAjax()
          //滚动加载
          //_self.scrollList();
        },
        deactivate (transition) {
          //$(window).off('scroll');
          transition.next()
        }
      },
      methods: {
        //请求列表全部数据
        getAjax(){
          const _self = this

          let successCallback =(json) => {
            _self.$route.router.app.loading = false
            _self.loadding.show = false
            //console.log(json)
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

          _self.$http.get('../../src/mock/home.json', [data]).then(successCallback, errorCallback)

        }
      }
  }
</script>

