<style src="./assets/styles/base.css"></style>
<style>
  [v-cloak]{
    display: none;
  }
  .v-cloak--block,.v-cloak--inline,.v-cloak--inlineBlock{
    display: none;
  }
  .ui-view {
    min-width: 320px;
    max-width: 750px;
    margin-left: auto;
    margin-right: auto;

    -webkit-transition: all .3s ease;
    transition: all .3s ease;
  }

  .fade-enter{
    opacity: 1;
    transform: translate3d(100%, 0, 0);
  }
  .fade-leave {
    opacity: 0;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);

  }

  .back-enter {
    opacity: 1;
    -webkit-transform: translate3d(-110%, 0, 0);
    transform: translate3d(-110%, 0, 0);

  }
  .back-leave{
    opacity: 0;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
</style>
<template>

  <div class="web-app">

    <!-- 页面加载loading -->
    <loading :show="loading"></loading>

    <!-- 缓存一级路由切换的页面 -->
    <router-view class="ui-view" keep-alive :transition="effect" transition-mode="out-in"></router-view>

  </div>

</template>

<script>
  //加载公用小组件
  import Loading from './components/loading.vue'

  export default {
      data () {
        return {
          loading           : true,  //loading
          effect            : 'fade', //路由模板动画参数
          routeList         : [],     //访问周期中所访问了那些路径,在route.js中设置
        }
      },
      components:{
        Loading
      }
  }
</script>
