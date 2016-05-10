<style src="../assets/styles/components/head.css"></style>
<template>

  <header id="BP_headBar" class="ui-head-bar" @click.stop>
    <span class="subfield J_subfield" @click="openMenuEvent">
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
