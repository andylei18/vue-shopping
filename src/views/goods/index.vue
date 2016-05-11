<template>

  <div class="ui-app">
    <!--左侧菜单组件-->
    <menuLeft :show="menu.show" :list="menu.list"></menuLeft>
    <!--遮罩层组件-->
    <mask :show="mask"></mask>

    <!--顶部页面组件-->
    <div id="BP_top" style="padding-top: 1.1rem">
      <a href="http://www.mogujie.com/mage/jump/go?link=http%3a%2f%2fa.app.qq.com%2fo%2fsimple.jsp%3fpkgname%3dcom.mogujie%26ckey%3dCK1297357065611&amp;mt=10.182.r9828" class="swipe_wrap_a">
        <img src="http://moguimg.u.qiniudn.com/p1/160427/idid_ifrweytegu4tmzbshazdambqhayde_750x162.gif" width="100%" height="auto">
      </a>
    </div>
    <!--头部组件-->
    <head-module></head-module>
    <!--内容页面组件-->
    <views-module :goodsdata="goodsdata"></views-module>

  </div>

</template>

<script>
  //加载公用小组件
  import Mask from '../../components/mask.vue'//遮罩层组件
  import Menuleft from '../../components/menuleft.vue'//左侧菜单组件


  //加载局部业务组件
  import HeadModule from '../../views/goods/head.vue'//头部组件
  import ViewsModule from '../../views/goods/views.vue'//内容页面组件

  export default {
    data(){
      return{
        mask:false,
        menu:{
          show:false,
          list:[]
        },
        goodsdata:""
      }
    },
    components: {
      HeadModule,Menuleft,Mask,ViewsModule
    },
    route: {
      data(transition){
        const self = this
        //请求列表全部数据
        self.getAjax(transition)
      }
    },
    methods: {
      //请求列表全部数据
      getAjax(transition){
        const self = this
        const mt = transition.to.params.mt
        let successCallback =(json) => {
          const jsondata = json.data
          self.$route.router.app.loading = false
          if(jsondata&&jsondata.code==0){
            //实时异步队列更新数据
            transition.next({
                goodsdata:jsondata.data
            })
          }

        }
        let errorCallback = (json)=> {
          //console.log(json)
        }
        self.$http.get('../../src/mock/goods/goodslist.json?mt='+ mt).then(successCallback, errorCallback)
      }
    }
  }
</script>
