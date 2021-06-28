<style>
  .module_rowdiv .mslide_content_box .mslide_banners {
    position: relative;
  }
  .mihoyo_hander_banner, .mihoyo_hander_banner .mslide_banner {
    height: 0;
    overflow: hidden;
    padding-bottom: 37.333333333333%;
  }
  .module_rowdiv .mslide_content_box {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .module_rowdiv .page_head_module {
    width: 100%;
    position: relative;
  }
  .mod_row {
    width: 960px;
    margin: 0 auto;
    position: relative;
  }
  .ui-app .mod_row {
    width: 100%;
  }
</style>

<template>

  <div class="module_row module_rowdiv">

    <div class="mod_row MCUBE_MOD_ID_10965">

      <div class="page_head_module">

        <div class="mslide_content_box mihoyo_hander_banner">

          <swipe class="mslide_banners">

            <swipe-item>
              <a href="http://act.mogujie.com/kj0188?ismobile=1&amp;mt=12.845.r89938.2249&amp;acm=1.mce.2.845.0.0.2249_89938">
                <img class="mslide_banner_img fill_img" src="http://s10.mogucdn.com/p1/160506/160_ifrgenzvmeytqyzvhazdambqmeyde_750x280.jpg_999x999.v1c0.webp" alt="">
              </a>
            </swipe-item>

            <swipe-item>
              <a href="http://act.mogujie.com/kj0188?ismobile=1&amp;mt=12.845.r89938.2249&amp;acm=1.mce.2.845.0.0.2249_89938">
                <img class="mslide_banner_img fill_img" src="http://s10.mogucdn.com/p1/160506/160_ifrgenzvmeytqyzvhazdambqmeyde_750x280.jpg_999x999.v1c0.webp" alt="">
              </a>
            </swipe-item>

            <swipe-item>
              <a href="http://act.mogujie.com/kj0188?ismobile=1&amp;mt=12.845.r89938.2249&amp;acm=1.mce.2.845.0.0.2249_89938">
                <img class="mslide_banner_img fill_img" src="http://s10.mogucdn.com/p1/160506/160_ifrgenzvmeytqyzvhazdambqmeyde_750x280.jpg_999x999.v1c0.webp" alt="">
              </a>
            </swipe-item>

          </swipe>

        </div>

      </div>

    </div>

  </div>

</template>

<script>

  import '../../../node_modules/vue-swipe/dist/vue-swipe.css'
  import { Swipe, SwipeItem } from 'vue-swipe';


  export default {
    props:[],
    components: {
      Swipe, SwipeItem
    }
  }

</script>
