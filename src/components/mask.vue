<style>
  .ui-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background: rgba(0,0,0,.6);
  }
</style>
<template>
  <div id="BP_Mask" class="ui-mask" v-show="show"></div>
</template>
<script>
  export default {
    props:['show']
  }
</script>
