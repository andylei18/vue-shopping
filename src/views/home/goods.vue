<style>

</style>

<template>

  <div class="categories-wrap module-list-wrap module-wrap">

    <div class="module-title">全部商品</div>

    <div class="module-content">

      <ul class="clearfix">

        <li class="module-item" v-for="item in goods">
          <a v-link="{name:'goods',params:{mt:item.mt,type:item.type} }">
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
