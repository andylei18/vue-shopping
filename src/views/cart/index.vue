<style src="../../../src/assets/styles/module/cart/cart.css"></style>
<template>

  <div class="ui-app with-header">

    <!--头部组件-->
    <head-module></head-module>

    <div id="views">

      <section class="cart ui-form" @click.stop>
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
          <div class="ui-panel" v-else v-for="panel in result.shopGroup">

            <!--标题-->
            <h3 class="ui-panel-hd">
              <input type="checkbox" class="ui-checkbox c-shop" id="c-s-{{panel.shopInfo.shopIdEsc}}">
              <label for="c-s-{{panel.shopInfo.shopIdEsc}}">{{panel.shopInfo.shopName}}</label>
              <img data-type="{{panel.shopRelatedTagBlock.globleCouponTag.type}}" :src="panel.shopRelatedTagBlock.globleCouponTag.image" class="shopRalatedTag">
            </h3>

            <div class="ui-panel-bd">
              <ul class="ui-list cart-goods">

                <li class="ui-list-item " v-for="good in panel.cartItemGroup" data-unit="{{good.sku.nowprice}}" data-save="{{good.disCountFee}}" data-stockid="{{good.sku.stockIdEsc}}" data-min="{{good.number}}" data-max="{{good.sku.stock}}">
                  <a href="http://m.mogujie.com/x6/detail/18ga7x6?ptp_from=m1.PgEo7els._book_shopping_50216_h5-wall-v1_noab-noab_wall_docs.22.TRUVK" class="cart-goods-pic">
                    <img class="fadeIn" :src="good.sku.imgUrl">
                  </a>
                  <div class="cart-goods-des">
                    <h5 class="cart-goods-name">{{good.sku.title}}</h5>
                    <p class="cart-goods-sku">  颜色：黑色；  尺码：L；  </p>
                    <div class="cart-goods-counter">
                      <a href="javascript:;" class="btn-sub" @click="calculation(0,good)">
                        <i class="icon icon-uniE808"></i>
                      </a>
                      <input type="text" class="cart-goods-num" v-model="good.number"readyonly :value="good.number"/>
                      <a href="javascript:;" class="btn-add " @click="calculation(1,good,panel)"><i class="icon icon-uniE807"></i></a>
                    </div>
                  </div>
                  <p class="cart-goods-price">
                    <span class="price-origin">{{good.sku.price/100|currency ''}}</span>
                    <br>
                    <span class="price">{{good.sku.nowprice/100|currency ''}}</span>
                  </p>
                  <a href="javascript:;" class="cart-goods-dustbin" @click="delGoodEvent(good)"> <i class="icon icon-uniE803"></i> </a>
                  <input type="checkbox" class="ui-checkbox c-goods" @click="selected($event,good,panel)">
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
              <em class="sum">￥{{total.nowprice/100|currency ''}}</em>
            </p>
            <p class="total-save">为您节省<span class="save">￥{{total.price/100|currency ''}}</span></p>
          </div>
          <a href="javascript:;" class="ui-btn ui-btn-pink" @click="setEvent">去结算</a>
        </div>

      </section>

    </div>
    <!--遮罩层组件-->
    <mask :show="mask"></mask>
    <!--确认取消组件-->
    <confirm :show.sync="confirm.show" :opencallback="confirm.opencallback" :text=""></confirm>

  </div>


</template>
<script>

  //加载公用小组件
  import Mask from '../../components/mask.vue'//遮罩层组件
  import Confirm from '../../components/confirm.vue'//确认取消组件

  //加载局部业务组件
  import HeadModule from '../../views/cart/head.vue'//头部组件

  export default {
      data(){
        return{
          mask:false,
          confirm:{
            show:false,
            text:'',
            opencallback:this.opencallback
          },
          result:"",
          cartlist:[],
          total:{
            price:0,
            nowprice:0
          }
        }
      },
      components: {
        HeadModule,Mask,Confirm
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
          let successCallback =(response) => {
            const json = response.data
            self.$route.router.app.loading = false
            if(json&&json.status.code==1001){

              //实时异步队列更新数据
              transition.next({
                result:json.result
               // cartlist:jsondata.data.shopGroup
              })

            }
          }
          let errorCallback = (response) => {
            //console.log(response)
          }
          self.$http.get('../../src/mock/cart/list.json').then(successCallback, errorCallback)
        },
        //计算商品数量
        calculation(type,obj){
           const self = this
           const stock = obj.sku.stock //当前商品的库存

           // 0表示是递减商品
           if(type == 0){
             if(obj.number <= stock && obj.number > 1){
               obj.number = parseInt(obj.number) - 1
             }
           }
           // 1表示是递增商品
           else{
             if(obj.number < stock){
               obj.number = parseInt(obj.number) + 1
             }
           }
        },
        //选中当前商品
        selected(e,obj,parent){
          const self = this
          let isEheck = e.target.checked

          //多件商品的总价 = 多件商品的总价 + (单件商品的单价 * 选择的商品数量)
          if(isEheck){
            obj.ck = true
            self.total.price = parseInt(self.total.price) + parseInt(obj.sku.price * obj.number)
            self.total.nowprice = parseInt(self.total.nowprice) + parseInt(obj.sku.nowprice * obj.number)
          }
          //多件商品的总价 = 多件商品的总价 - (单件商品的单价 * 选择的商品数量)
          else{
            obj.ck = false
            self.total.price = parseInt(self.total.price)  - parseInt(obj.sku.price * obj.number)
            self.total.nowprice = parseInt(self.total.nowprice) - parseInt(obj.sku.nowprice * obj.number)
          }

          //判断是否多选
          //const parentNum = parent.cartItemGroup.length
          for(let i in parent.cartItemGroup){
            console.log(parent.cartItemGroup[i].ck)
          }
        },
        //删除商品
        delGoodEvent(obj){
          this.mask = true
          this.confirm.show = true
        },
        //结算按钮
        setEvent(){

        },
        //确定删除callback
        opencallback(){
           const self = this

           let successCallback = (response) =>{
              const json = response.data
              if(json&&json.status.code==1001){
                this.confirm.show = false
                this.mask = false
              }
           }

           const errorCallback = (response) =>{
              console.log(response)
           }

           self.$http.get('../../src/mock/cart/list.json').then(successCallback, errorCallback)
        }
      }
  }
</script>
