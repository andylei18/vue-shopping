<style>
  .ui-head-bar .badge {
    display: inline-block;
    width: 2rem;
    text-align: center;
    position: relative;
    color: #727272!important;
  }
  .badge.icon-uniE810:before, .ui-head-bar .icon-uniE810:before {
    background-image: url("../../assets/images/home/cart.jpeg");
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
  .ui-head-bar .arr .subfield-btn, .ui-head-bar .subfield .subfield-btn {
    background: url("../../assets/images/home/head_bar.png") no-repeat;
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
  .ui-head-bar .badge-car {
    width: 1.2rem;
  }
</style>

<template>

  <header id="BP_headBar" class="ui-head-bar" @click.stop>
    <span class="subfield J_subfield" @click="openMenuEvent">
      <i class="subfield-btn"></i>
    </span>
    <p class="title">上衣</p>
    <span class="badge icon-uniE810 badge-car" v-link="{name:'cart'}"></span>
  </header>

</template>

<script>

  export default {

    methods:{
      //打开菜单
      openMenuEvent(){
        console.log(this)
        this.$parent.menu.show = true
        this.$parent.mask = true

      }
    }

  }

</script>
