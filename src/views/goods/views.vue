<style src="../../../src/assets/styles/module/goods/views.css"></style>
<template>

  <!--轮播图组件-->
  <!--<swipe-module></swipe-module>-->
  <!--热门组件-->
  <hotsale-module></hotsale-module>
  <!--cate-->
  <ul class="cate-list ctg-list">
    <li v-for="cate in goodsdata.catelist">
      <a v-link="{name:'catelist',params:{mt:cate.mt}}">
        <div class="img-wrap">
          <img class="fadeIn" :src="cate.pic" alt="{{cate.title}}">
        </div>
        <p>{{cate.title}}</p>
      </a>
    </li>
  </ul>
  <!--suggest-->
  <ul class="suggest-list ctg-rcd">

    <li>
      <a href="http://act.mogujie.com/h5goodswall?fcid=10055545&amp;sort=newtype&amp;searchTag=802&amp;mt=10.483.r53837">
        <img class="fadeIn" src="http://s18.mogucdn.com/p1/160305/upload_ie3tqmtggazdoyrrg4zdambqgayde_330x460.png" alt="绑带衬衫">
        <!-- <span class="rcd-name"> <span class="t-up">绑带衬衫</span> <span class="line"></span> <span class="t-bot"></span> </span> -->
      </a>
    </li>
  </ul>



</template>

<script>


  //加载局部业务组件
  import SwipeModule from '../../views/goods/swipe.vue'     //轮播图组件
  import HotsaleModule from '../../views/goods/hotsale.vue' //热门组件

  export default {
    props:['goodsdata'],
    components: {
      SwipeModule,HotsaleModule
    }
  }

</script>
