<template>

  <div class="buy-markets lazyData">

    <div class="markets-wrap module-list-wrap module-wrap">

      <div class="module-title">特色市场</div>
      <div class="module-content">
        <ul class="clearfix">

          <li class="module-item" v-for="item in markets">
            <a href="http://www.mogujie.com/x6/markets/xihu/home/topicIndex?mt=10.932.r62904">
              <div class="item-logo">
                <img :src="item.pic" alt=""> </div>
              <div class="item-title"> {{item.title}} </div>
              <div class="item-desc"> {{item.desc}} </div>
            </a>
          </li>

        </ul>

      </div>

    </div>

  </div>

</template>

<script>

  export default {
    props:['markets']
  }

</script>
