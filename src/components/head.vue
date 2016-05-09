<style>
  .ui-head-bar .badge {
    display: inline-block;
    width: 2rem;
    text-align: center;
    position: relative;
    color: #727272!important;
  }
  .badge.icon-uniE810:before, .ui-head-bar .icon-uniE810:before {
    background-image: url("../assets/images/home/cart.jpeg");
  }
  .ui-head-bar .search-enter-btn {
    background: url("../assets/images/home/icon.png") center no-repeat;
    background-size: 100% 100%;
    width: 25px;
    height: 25px;
    display: inline-block;
    margin: 0 5px;
  }
  .ui-head-bar .search-keywords input[type=text] {
    vertical-align: top;
    line-height: 24px;
    border: 0;
    padding: 0;
    background: 0 0;
    width: 100%;
    position: relative;
    top: 2px;
    font-size: 16px;
  }
  .ui-head-bar .search-keywords {
    -webkit-flex: 1;
    -webkit-box-flex: 1;
    overflow: hidden;
    padding: 0 5px 0 20px;
  }
  .ui-head-bar .search {
    display: block;
    position: relative;
    border-radius: 1px;
    height: 30px;
    line-height: 30px;
    top: 7px;
    border: 1px #f3f3f3 solid;
    background: #ececec url("../assets/images/home/search.png") 2px center no-repeat;
    background-size: 17px 15px;
    text-align: left;
    display: -webkit-flex;
    display: -webkit-box;
  }
  .ui-head-bar .arr .subfield-btn, .ui-head-bar .subfield .subfield-btn {
    background: url("../assets/images/home/head_bar.png") no-repeat;
    background-size: 100% auto;
    width: 20px;
    height: 15px;
    display: inline-block;
  }
  .ui-head-bar .arr, .ui-head-bar .subfield {
    display: inline-block;
    padding: 0 15px;
    height: 100%;
    color: #5e5e5e;
    font-size: 20px;
  }


</style>
<template>

  <header id="BP_headBar" class="ui-head-bar" @click.stop>
    <span class="subfield J_subfield" @click="openMenuEvent()">
      <i class="subfield-btn"></i>
    </span>
    <form id="search_from" action="/x6/search" class="title">
      <div class="search">
        <p class="search-keywords">
          <input type="text" name="keywords" id="J_search_keywords">
        </p>
        <a href="javascript:;" class="search-enter-btn J_search_btn"></a>
      </div>
    </form>
    <span class="badge icon-uniE810"></span>
  </header>

</template>
<script>

  export default {

    methods:{
      //打开菜单
      openMenuEvent(){

        this.$parent.menu.show = true
        this.$parent.mask = true
      }
    }

  }

</script>
