<style src="../../../node_modules/vue-swipe/lib/vue-swipe.css"></style>
<style>
  .head-banner {
    width: 100%;
  }
</style>
<template>

  <div class="head-banner swipe">
    <!--轮播图-->
    <swipe>
      <swipe-item>
        <a href="http://m.mogujie.com/x6/wall/book/clothing?fcid=10056223&amp;title=时尚套装&amp;mt=10.481.r73792&amp;ptp=m1.2W1vwbCQ._mt-481-r73792.1.L14W9" class="swipe_wrap_a" data-ptp-idx="1" data-ptp-cache-id="m1.2W1vwbCQ._mt-481-r73792.1.L14W9">
          <img src="http://s18.mogucdn.com/p1/160401/upload_ifrdcolfgy4dkodbg4zdambqmeyde_750x250.jpg">
        </a>
      </swipe-item>
    </swipe>
  </div>

</template>

<script>

  import {Swipe,SwipeItem} from 'vue-swipe'

  export default {
    props:[],
    components: {
      Swipe,SwipeItem
    },

  }

</script>
