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
              <input type="checkbox" class="ui-checkbox c-shop" v-model="panel.selected"  @click="selectShop(panel)">
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
                      <a class="btn-sub" @click="calcitemNum(-1, good)">
                        <i class="icon icon-uniE808"></i>
                      </a>
                      <input type="text" class="cart-goods-num" v-model="good.number" readyonly/>
                      <a href="javascript:;" class="btn-add " @click="calcitemNum(1, good)"><i class="icon icon-uniE807"></i></a>
                    </div>
                  </div>
                  <p class="cart-goods-price">
                    <span class="price-origin">{{good.sku.price/100|currency ''}}</span>
                    <br>
                    <span class="price">{{good.sku.nowprice/100|currency ''}}</span>
                  </p>
                  <a href="javascript:;" class="cart-goods-dustbin" @click="delGoodEvent(good)"> <i class="icon icon-uniE803"></i> </a>
                  <input type="checkbox" class="ui-checkbox c-goods" v-model="good.selected" @click="selecteItem(good, panel)">
                  <div>
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </div>

        <div class="cart-checkout" v-if="result.length !=''">
          <div class="cart-checkbox">
            <input type="checkbox" name="c-all" class="ui-checkbox c-all" v-model="selecteAllState" @click="selecteAll">
            <label for="c-all">全选</label>
          </div>
          <div class="cart-counter">
            <p class="total-price">
              总计 :
              <em class="sum">￥{{totalNowPrice/100|currency ''}}</em>
            </p>
            <p class="total-save">为您节省<span class="save">￥{{totalPrice/100|currency ''}}</span></p>
          </div>
          <a class="ui-btn ui-btn-pink" @click="setEvent">去结算</a>
        </div>

      </section>

    </div>
    <!--遮罩层组件-->
    <mask :show="mask"></mask>
    <!--确认取消组件-->
    <confirm :confirm="confirm"></confirm>

  </div>


</template>
<script>

  //加载公用小组件
  import Mask from '../../components/mask.vue'//遮罩层组件
  import Confirm from '../../components/confirm.vue'//确认取消组件

  //加载局部业务组件
  import HeadModule from '../../views/cart/head.vue'//头部组件

  export default {
      data () {
        return {
          mask:false,
          confirm:{
            show:false,
            text:'',
            confirm () {},
            cancel () {}
          },
          result:[],
          selecteAllState: false,
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
      computed: {
        totalPrice () {
          let price = 0
          this.result.shopGroup.forEach(shop => {
            shop.cartItemGroup.forEach(item => {
              if (item['selected']) {
                price += item.number * item.sku.nowprice
              }
            })
          })
          return price
        },
        totalNowPrice () {
          let price = 0
          this.result.shopGroup.forEach(shop => {
            shop.cartItemGroup.forEach(item => {
              if (item['selected']) {
                price += item.number * item.sku.price
              }
            })
          })
          return price
        }
      },
      route: {
        data(transition){
          //请求列表全部数据
          this.getAjax(transition)
        }
      },
      methods: {
        createConfirm (text, confirm, cancel) {
          this.confirm.show = true
          this.confirm.text = text
          this.confirm.confirm = confirm
          this.confirm.cancel = cancel
        },
        closeConfirm () {
          this.confirm.show = false
          this.confirm.text = ''
          this.confirm.confirm = () => {}
          this.confirm.cancel = () => {}
        },
        selecteItem (item, shop) {
          item.selected = !item.selected
          this.checkSelect()
        },
        checkSelect () {
          let allSelected = true
          this.result.shopGroup.forEach(shop => {
            let shopSelectAll = true
            shop.cartItemGroup.forEach(item => {
              if (!item['selected']) {
                shopSelectAll = false
                allSelected = false
              }
            })
            shop.selected = shopSelectAll
          })
          this.selecteAllState = allSelected
        },
        selectShop (shop) {
          shop.selected = !shop.selected
          shop.cartItemGroup.forEach(item => {
            item['selected'] = shop.selected
          })
          this.checkSelect()
        },
        selecteAll () {
          this.selecteAllState = !this.selecteAllState
          this.result.shopGroup.forEach(shop => {
            shop.selected = this.selecteAllState
            shop.cartItemGroup.forEach(item => {
              item['selected'] = this.selecteAllState
            })
          })
        },
        calcitemNum (step, item) {
          item.number += Math.floor(step)
        },
        //请求列表全部数据
        getAjax (transition) {
          this.$http.get('../../src/mock/cart/list.json')
          .then(response => {
            let json = response.data
            this.$route.router.app.loading = false

            if (json && json.status.code === 1001) {
              let result = json.result
              result.shopGroup.forEach(shop => {
                shop['selected'] = false
                shop.cartItemGroup.map(item => {
                  item['selected'] = false
                })
              })
              // 实时异步队列更新数据
              transition.next({
                result: result
               // cartlist:jsondata.data.shopGroup
              })
            }
          })
          .catch(err => {
            console.log(err)
          })
        },
        //删除商品
        delGoodEvent(obj){
          this.createConfirm('确定要删除这个商品吗', this.opencallback)
        },
        //结算按钮
        setEvent(){

        },
        //确定删除callback
        opencallback(){
           this.$http.get('../../src/mock/cart/list.json')
            .then(response => {
              const json = response.data
              if(json&&json.status.code==1001){
                this.closeConfirm()
              }
           })
            .catch(response => {
              console.log(response)
           })
        }
      }
  }
</script>
