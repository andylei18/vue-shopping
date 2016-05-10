<template>

  <div class="ui-app">

    <!--顶部页面组件-->
    <top-module></top-module>

    <!--内容页面组件-->
    <views-module></views-module>

  </div>

</template>

<script>
  //加载公用小组件
  import Mask from '../../components/mask.vue'//遮罩层组件
  import Menuleft from '../../components/menuleft.vue'//左侧菜单组件
  import HeadModule from '../../components/head.vue'//头部组件


  //加载局部业务组件
  import TopModule from '../../views/goods/top.vue'//顶部页面组件
  import ViewsModule from '../../views/goods/views.vue'//内容页面组件

  export default {
    components: {
      TopModule,ViewsModule
    },
  }
</script>
