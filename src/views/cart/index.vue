<style src="../../../src/assets/styles/module/cart/cart.css"></style>
<template>

  <div class="ui-app">

    <!--头部组件-->
    <head-module></head-module>

    <div id="views">

      <section class="cart ui-form">
        <div class="cart-panel">

          <!--购物车如果有数据则渲染回调数据列表-->
          <div class="ui-panel" v-if="cartlist.length > 0"></div>

          <!--购物车如果没有数据则显示-->
          <div class="ui-empty" v-else>
            <p class="ui-empty-icon"><i class="icon icon-uniE810"></i></p>
            <p class="ui-empty-text">购物车还是空的哦～</p>
            <p class="ui-empty-btn">
              <a href="/index" data-navigate="true" class="ui-btn ui-btn-pink">去逛逛</a>
            </p>
          </div>
        </div>
      </section>

    </div>


  </div>


</template>
<script>
  //加载公用小组件
  import Mask from '../../components/mask.vue'//遮罩层组件

  //加载局部业务组件
  import HeadModule from '../../views/cart/head.vue'//头部组件

  export default {
      data(){
      return{
        mask:false,
        cartlist:[]
      }
    },
    components: {
      HeadModule
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
              cartlist:jsondata.data.shopGroup
            })


          }
        }
        let errorCallback = (json) => {
          //console.log(json)
        }
        self.$http.get('../../src/mock/cart/none.json').then(successCallback, errorCallback)
      }
    }
  }
</script>
