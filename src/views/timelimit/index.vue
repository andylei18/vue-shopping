<template>

  <div class="ui-app">

    <!--头部组件-->
    <head-module></head-module>

    <!--列表组件-->
    <list-module></list-module>

  </div>


</template>

<script>

  //加载局部业务组件
  import HeadModule from './head.vue'//头部组件
  import ListModule from './list.vue'//列表组件

  export default {

    components: {
      HeadModule,ListModule
    },
  }

</script>
