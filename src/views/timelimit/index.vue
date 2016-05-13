<style src="../../../src/assets/styles/module/timelimit/index.css"></style>
<style src="../../../src/assets/styles/module/timelimit/views.css"></style>
<template>

  <div class="ui-app">

    <!--头部组件-->
    <head-module></head-module>

    <!--列表组件-->
    <list-module></list-module>

    <!--列表组件-->
    <menu-module></menu-module>

  </div>


</template>

<script>

  //加载局部业务组件
  import HeadModule from './head.vue'//头部组件
  import ListModule from './list.vue'//列表组件
  import MenuModule from './menu.vue'//菜单组件

  export default {

    components: {
      HeadModule,ListModule,MenuModule
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

        _self.$http.get(configPath + 'home.json', [data]).then(successCallback, errorCallback)

      }
    }
  }

</script>
