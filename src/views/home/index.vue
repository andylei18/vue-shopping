<style src="../../../src/assets/styles/module/home/views.css"></style>

<template>
  <div class="ui-app">

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
  import Cover from '../../components/cover.vue'
  import Mask from '../../components/mask.vue'

  //加载局部业务组件
  import HeadModule from '../../views/home/head.vue'//头部组件
  import LoginModule from '../../views/home/login.vue'//首页登陆
  import ViewsModule from '../../views/home/views.vue'//中心数据组件

  export default {
      data() {
          return {
             loadding:{
               show:true
             }
          }
      },
      components: {
         Cover,Mask,HeadModule,LoginModule,ViewsModule
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

