<style src="../../../src/assets/styles/module/goods/detail.css"></style>
<template>
  <div class="ui-app" id="views">
    <div id="DetailPrimary">
      <!-- 商品详情-首屏 -->
      <div class="detail-wrap detail-primary">
        <!-- 导航条 -->
        <div class="primary-navbar clearfix">
          <a href="javascript:void(history.back());" class="back icon-uniE809"></a>
          <a href="/x6/cart/list?sfrom=http%3A%2F%2Fm.mogujie.com%2Fx6%2Fdetail%2F1jugeag%3Facm%3D1.ms.1.0.1383.0GlpKRdOv6d.277%26ptp%3Dm1._mf1_h5goodswall._book_shopping_10054926_h5-newtype_noab-noab_wall_docs.1.YPGW2" class="cart icon-uniE810"></a>
        </div>

        <!-- 图片轮播 -->
        <div class="primary-swiper">
          <div class="swiper-container swiper-container-horizontal" id="SwiperContainer" style="height:450px">
            <!-- <div class="swiper-wrapper">
              <div class="swiper-slide swiper-slide-active" style="height: 450px; width: 414px;">
                <img class="swiper-img fadeIn" src="http://s18.mogucdn.com/p1/160506/74559855_ifrwcnzsgeywmyzvhazdambqhayde_640x960.jpg_468x468.jpg">
              </div>
              <div class="swiper-slide swiper-slide-next" style="height: 450px; width: 414px;">
                <img class="swiper-img fadeIn" src="http://s22.mogucdn.com/p1/160506/74559855_ie4dgnryg4ywmyzvhazdambqgiyde_640x960.jpg_468x468.jpg">
              </div>
              <div class="swiper-slide" style="height: 450px; width: 414px;">
                <img class="swiper-img" data-original="http://s16.mogucdn.com/p1/160506/74559855_ie4dmzldg4ywmyzvhazdambqgiyde_750x696.jpg_468x468.jpg" src="http://m.mogujie.com/img/imgwap/loading_alpha.gif">
              </div>
              <div class="swiper-slide" style="height: 450px; width: 414px;">
                <img class="swiper-img" data-original="http://s18.mogucdn.com/p1/160506/74559855_ie4dszruhaywmyzvhazdambqgiyde_750x689.jpg_468x468.jpg" src="http://m.mogujie.com/img/imgwap/loading_alpha.gif">
              </div>
              <div class="swiper-slide" style="height: 450px; width: 414px;">
                <img class="swiper-img" data-original="http://s16.mogucdn.com/p1/160506/74559855_ifrtqmbyheywmyzvhazdambqhayde_741x710.jpg_468x468.jpg" src="http://m.mogujie.com/img/imgwap/loading_alpha.gif">
              </div>
            </div> -->
            <swipe :speed="900" :auto="0" :show-indicators="false">
              <swipe-item v-for="swipe in topswipe">
                <img class="swiper-img fadeIn" :src="swipe">
              </swipe-item>
            </swipe>

          </div>
          <div class="swiper-page swiper-page-up"><em id="SwiperPageNum">1</em><i>/</i>5</div>
        </div>


        <!-- 大促倒计时 -->
        <div class="primary-countdown">
          <div class="inner">
            <i class="icon fl ml30"></i>
            <span class="desc fl ml15">距团购结束还剩<span class="time J_EventCountDown clock-on" data-timestamp="169917">1天22小时16分51秒</span>
            </span>
          </div>
        </div>
        <!-- 基本信息 -->
        <div class="primary-info">
          <div class="info-title break">
            <div class="inner">  </div>    ♥夏季新款♥韩版宽松百搭短袖打底衫 条纹拼接卡通T恤  </div>
          <div class="info-desc break">卡通</div>
          <!-- 价格 -->
          <div class="info-price center J_InfoPrice">
            <span class="now">¥27.24</span>
            <span class="market">¥41.28</span>
            <span class="discount" style="background-color: #f13e3a">6.6折</span>
            <!-- 价格后面的标志 -->
          </div>
          <!-- 其他（如存在商品banner 或 非大促时，不显示上边框） -->
          <div class="info-other center ">
            <span class="item">默认快递</span>
            <span class="item">销量 1363</span>
          </div>
          <!-- 商品特色 -->
          <div class="info-itemtags open-itemTags">
            <span class="inner">
              <span class="item">
                <img src="http://s22.mogucdn.com/p1/160331/upload_ie4dcyjqgyytcm3bg4zdambqgiyde_30x31.png">品质认证 </span>
              <span class="item">
                <img src="http://s22.mogucdn.com/p1/160331/upload_ie4dcyjqgyytcm3bg4zdambqgiyde_30x31.png">实拍认证 </span>
            </span>
            <span class="more">
              <i class="arrow"></i>
            </span>
          </div>
          <div class="info-itemtags-dialog">
            <h1 class="title">服务说明<span class="close close-itemTags"></span></h1>
            <ul class="list">
              <li>
                <dl>
                  <dt><img src="http://s22.mogucdn.com/p1/160331/upload_ie4dcyjqgyytcm3bg4zdambqgiyde_30x31.png">品质认证</dt>
                  <dd>品质认证商品来自品质商家，购买此商品后因质量问题、描述不符等原因发起维权，且维权成立，您将得到3倍赔偿。</dd>
                </dl>
              </li>
              <li>
                <dl>
                  <dt><img src="http://s22.mogucdn.com/p1/160331/upload_ie4dcyjqgyytcm3bg4zdambqgiyde_30x31.png">实拍认证</dt>
                  <dd>商家承诺所有商品图片均为实物拍摄，所见即所得，解除您网购货不对板的后顾之虑。</dd>
                </dl>
              </li>
            </ul>
          </div>
        </div>

        <!-- 下载广告 -->
        <div class="primary-mbanner">
          <div class="mbanner-top"></div>
          <div class="ui-middle-banner">
            <a href="http://act.mogujie.com/dianxinh5?ismobile=1&amp;ptp=_qd._jifen____2950122.152.1.0" class="open-mogu">
              <img src="http://s7.mogucdn.com/p1/160506/t0_ifrtmmlbgntdsyzvhazdambqhayde_750x109.jpg">
            </a>
          </div>
        </div>

        <!-- 促销信息 -->
        <div class="primary-promotions" id="PrimaryPromotions">
          <span data-href="mgj://shoppro?shopId=1ohwyq" class="inner pro-info">
            <span class="more">更多<i class="arrow"></i>
            </span>
            <span class="item"><i></i>全店铺满2件减3元</span>
          </span>
        </div>








        <!-- 商品详情-工具条 -->
        <div class="detail-wrap detail-footbar" id="DetailFootbar">
          <!-- 私聊 -->
          <div class="footbar-im" data-address="http://m.mogujie.com/x/im/?imver=1.0&amp;show_header=x6#chat/b1ohwyq%2323/g1jugeag">
            <i class="icon"></i>
            <span class="text">私聊</span>
          </div>
          <!-- 喜欢 -->
          <div class="footbar-fav" data-id="1jugeag" data-type="1">
            <i class="icon"></i>
            <span class="text">收藏</span>
          </div>
          <!-- 购买 -->
          <div class="footbar-buy">
            <span class="buy-cart">加入购物车</span>
            <span class="buy-now">立即购买</span>
          </div>
        </div>


        <!-- 商品规格选择框 -->
        <section id="J_GoodsSku" class="goods-sku" style="visibility: visible;"> 
        <div class="content">  
          <div class="sku-list"> 
            <dl class="style clearfix"> 
              <dt>颜色：</dt> 
              <dd>  
                <div class="viewport"> 
                  <div class="overview"> 
                    <ol class="J_StyleList style-list clearfix">
                      <li class="c" data-id="1" title="红色"> 红色</li>
                    </ol>
                  </div> 
                </div> 
              </dd> 
            </dl> 
            <dl class="size clearfix"> 
              <dt>尺码：</dt> 
              <dd>  
                <div class="viewport"> 
                  <div class="overview"> 
                    <ol class="J_SizeList size-list clearfix">
                      <li class="" data-id="100" title="S"> S</li>
                      <li class="c" data-id="101" title="M"> M</li>
                      <li class="" data-id="102" title="L"> L</li>
                    </ol> 
                   </div> 
                 </div> 
                </dd> 
              </dl> 
            </div>  
            <div class="sku-num"> 
              <p class="title">数量:</p> 
              <div class="clearfix"> 
                <div class="sku-counter fl"> 
                  <span class="num-reduce fl"> 
                    <b class="reduce-icon">－</b> 
                  </span> 
                  <em class="num-input fl">20</em> 
                  <span class="num-add fl"> 
                    <b class="add-icon">＋</b>                     
                  </span> 
                </div> 
                <div class="sku-stock fl"> 库存<span class="stock">998</span>件 </div> 
              </div> 
            </div> 
            <div class="sku-price"> 
              <p class="title">总价：<span class="price m-color">¥576.00</span><span class="m-color">元</span></p> 
            </div> 
            <div class="action"> 
              <span class="confirm ui-btn ui-btn-pink">确定</span> 
            </div> 
            <span class="close">╳</span> 
          </div>
        </section>


      </div>

    </div>
  </div>
</template>

<script>
  import '../../../node_modules/vue-swipe/lib/vue-swipe.css'
  import { Swipe, SwipeItem } from 'vue-swipe'

 export default {
    data () {
      return{
        topswipe:[],
        list:[]
      }
    },
    components: {
      Swipe,SwipeItem
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
        const mt = transition.to.params.mt
        let successCallback =(response) => {
          const data = response.data
          const json = data.result
          self.$route.router.app.loading = false
          if(data.status.code ==1001){
            //实时异步队列更新数据
            console.log(json.itemInfo.topImages)
            transition.next({
              topswipe:json.itemInfo.topImages
            })
          }
        }
        let errorCallback = (json)=> {
          //console.log(json)
        }
        self.$http.get(configPath + 'goods/catedetail.json?mt='+ mt).then(successCallback, errorCallback)
      }
    }
  }
</script>

