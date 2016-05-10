<style src="../../../src/assets/styles/components/head.css"></style>
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
    props:['title'],
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
