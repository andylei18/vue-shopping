<style>
  @-webkit-keyframes loadingPlus {
    0% {
      background-position: 0 0
    }

    10% {
      background-position: 0 -50px
    }

    20% {
      background-position: 0 -100px
    }

    30% {
      background-position: 0 -150px
    }

    40% {
      background-position: 0 -200px
    }

    50% {
      background-position: 0 -250px
    }

    60% {
      background-position: 0 -300px
    }

    70% {
      background-position: 0 -350px
    }

    80% {
      background-position: 0 -400px
    }

    90% {
      background-position: 0 -450px
    }

    100% {
      background-position: 0 0
    }
  }

  @keyframes loadingPlus {
    0% {
      background-position: 0 0
    }

    10% {
      background-position: 0 -50px
    }

    20% {
      background-position: 0 -100px
    }

    30% {
      background-position: 0 -150px
    }

    40% {
      background-position: 0 -200px
    }

    50% {
      background-position: 0 -250px
    }

    60% {
      background-position: 0 -300px
    }

    70% {
      background-position: 0 -350px
    }

    80% {
      background-position: 0 -400px
    }

    90% {
      background-position: 0 -450px
    }

    100% {
      background-position: 0 0
    }
  }
  .ui-loading-wrap .mask {
    position: absolute;
    width: 100px;
    height: 50px;
    left: 50%;
    top: 50%;
    margin-left: -50px;
    margin-top: -25px;
    background: url("../../src/assets/images/common/loading.png") no-repeat;
    background-size: 100px 500px;
    -webkit-animation: loadingPlus 400ms steps(1) infinite;
    animation: loadingPlus 400ms steps(1) infinite;
  }
  .ui-loading-wrap {
    position: fixed;
    top: 0;
    z-index: 10000;
    width: 100%;
    height: 100%;
  }
</style>

<template>
  <div id="BP_Loading" class="ui-loading-wrap" v-show="show"><p class="mask"><span></span></p></div>
</template>

<script>
  export default {
    props:['show']
  }
</script>
