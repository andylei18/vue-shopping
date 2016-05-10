<style>

</style>

<template>

  <div class="categories-wrap module-list-wrap module-wrap">

    <div class="module-title">全部商品</div>

    <div class="module-content">

      <ul class="clearfix">

        <li class="module-item" v-for="item in goods">
          <a href="http://m.mogujie.com/x6/markets/clothing/jacket?title=上衣&amp;mt=10.933.r59313">
            <div class="item-logo">
              <img :src="item.pic" alt="">
            </div>
            <div class="item-title"> {{item.title}} </div>
            <div class="item-desc"> {{item.desc}} </div>
          </a>
        </li>

      </ul>

    </div>


  </div>

</template>

<script>

  export default {
    props:['goods']
  }

</script>
