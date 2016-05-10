<template>

  <div class="ui-app">

    <!--头部组件-->
    <head-module></head-module>

    <!--左侧菜单组件-->
    <menuLeft :show="menu.show" :list="menu.list"></menuLeft>
    <!--遮罩层组件-->
    <mask :show="mask"></mask>
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


  //加载局部业务组件
  import HeadModule from '../../views/goods/head.vue'//头部组件
  import TopModule from '../../views/goods/top.vue'//顶部页面组件
  import ViewsModule from '../../views/goods/views.vue'//内容页面组件

  export default {
    data(){
      return{
        mask:false,
        menu:{
          show:false,
          list:[]
        }
      }
    },
    components: {
      HeadModule,Menuleft,Mask,TopModule,ViewsModule
    },
    route: {
      data(transition){
        const  _self = this

        console.log(transition)
        //请求列表全部数据
        _self.getAjax(transition)

        document.addEventListener("click",function(e){
          //关闭加入购物车
          _self.menu.show = false;
          _self.mask = false;
        })
      }
    },
    methods: {
      //请求列表全部数据
      getAjax(transition){
        const _self = this

        let successCallback =(json) => {

          _self.$route.router.app.loading = false

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
