<style src="../../../src/assets/styles/module/cart/cart.css"></style>
<template>

  <div class="ui-app with-header">

    <!--头部组件-->
    <head-module></head-module>

    <div id="views">

      <section class="cart ui-form">
        <div class="cart-panel">

          <!--购物车如果没有数据则显示-->
          <div class="ui-empty" v-if="result.length ==''">
            <p class="ui-empty-icon"><i class="icon icon-uniE810"></i></p>
            <p class="ui-empty-text">购物车还是空的哦～</p>
            <p class="ui-empty-btn">
              <a href="/index" data-navigate="true" class="ui-btn ui-btn-pink">去逛逛</a>
            </p>
          </div>

          <!--购物车如果有数据则渲染回调数据列表-->
          <div class="ui-panel" v-else>

            <h3 class="ui-panel-hd">
              <input type="checkbox" class="ui-checkbox c-shop" id="c-s-1obo4o">
              <label for="c-s-1obo4o">卡优尔</label>
              <img src="http://s17.mogucdn.com/p1/150923/upload_ieztomzrmeydmmlegmzdambqgyyde_147x23.png" class="shopRalatedTag">
            </h3>
            <div class="ui-panel-bd">
              <ul class="ui-list cart-goods">

                <li class="ui-list-item " data-unit="3430" data-save="1470" data-stockid="15s7rxg" data-min="1" data-max="5124">
                  <a href="http://m.mogujie.com/x6/detail/18ga7x6?ptp_from=m1.PgEo7els._book_shopping_50216_h5-wall-v1_noab-noab_wall_docs.22.TRUVK" class="cart-goods-pic">
                    <img class="fadeIn" src="http://s18.mogucdn.com/p1/160303/1lqbzf_ie3tkztcmi3wemjrg4zdambqgayde_640x960.jpg_100x100.jpg">
                  </a>
                  <div class="cart-goods-des">
                    <h5 class="cart-goods-name">【夏季薄款】韩版休闲高腰显瘦铅笔小脚裤女黑色</h5>
                    <p class="cart-goods-sku">  颜色：黑色；  尺码：L；  </p>
                    <div class="cart-goods-counter">
                      <a href="javascript:;" class="btn-sub ">
                        <i class="icon icon-uniE808"></i>
                      </a>
                      <em class="cart-goods-num">3</em>
                      <a href="javascript:;" class="btn-add "><i class="icon icon-uniE807"></i></a>
                    </div>
                  </div>
                  <p class="cart-goods-price">
                    <span class="price-origin">49.00</span>
                    <br>
                    <span class="price">34.30</span>
                  </p>
                  <a href="javascript:;" class="cart-goods-dustbin"> <i class="icon icon-uniE803"></i> </a>
                  <input type="checkbox" class="ui-checkbox c-goods">
                  <div>
                  </div>
                </li>

              </ul>
            </div>


          </div>



        </div>

        <div class="cart-checkout" v-if="result.length !=''">
          <div class="cart-checkbox">
            <input type="checkbox" name="c-all" class="ui-checkbox c-all" id="c-all">
            <label for="c-all">全选</label>
          </div>
          <div class="cart-counter">
            <p class="total-price">
              总计 :
              <em class="sum">￥0.00</em>
            </p>
            <p class="total-save">为您节省<span class="save">￥0.00</span></p>
          </div>
          <a href="javascript:;" class="ui-btn ui-btn-pink" @click="setEvent">去结算</a>
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
        result:"",
        cartlist:[]
      }
    },
    components: {
      HeadModule
    },
    route: {
      data(transition){
        //请求列表全部数据
        this.getAjax(transition)
      }
    },
    methods: {
      //请求列表全部数据
      getAjax(transition){
        const self = this
        let successCallback =(json) => {
          const jsondata = json.data
          self.$route.router.app.loading = false
          if(jsondata&&jsondata.status.code==1001){

            //实时异步队列更新数据
            transition.next({
              result:jsondata.result
             // cartlist:jsondata.data.shopGroup
            })

          }
        }
        let errorCallback = (json) => {
          //console.log(json)
        }
        self.$http.get('../../src/mock/cart/list.json').then(successCallback, errorCallback)
      },
      //结算按钮
      setEvent(){

      }
    }
  }
</script>
