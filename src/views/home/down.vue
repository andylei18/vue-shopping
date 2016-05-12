<style>
  .ui-hada {
    position: fixed;
    z-index: 9;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 46px;
    background: rgba(0,0,0,.8)
  }

  .ui-hada-logo {
    position: absolute;
    top: -8px;
    left: 25px;
    width: 48px;
    height: 48px;
    background: url(http://s17.mogucdn.com/p1/160428/idid_ifrwezlcme3dimrthazdambqhayde_114x114.png) 0 0 no-repeat;
    background-size: 48px auto
  }

  .ui-hada-intro {
    margin-left: 82px;
    padding-top: 8px;
    line-height: 14px;
    color: #fff
  }

  .ui-hada-desc {
    font-size: 12px
  }

  .ui-hada-name,.ui-hada-stars {
    display: inline-block;
    vertical-align: middle
  }

  .ui-hada-stars {
    margin-top: -4px
  }

  .ui-hada-stars i {
    margin-left: 2px;
    color: #fdc009
  }

  .ui-hada-close {
    position: absolute;
    display: block;
    top: -20px;
    left: -20px;
    width: 0;
    height: 0;
    border-color: transparent transparent rgba(0,0,0,.9);
    border-width: 20px;
    border-style: solid;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg)
  }

  .ui-hada-close .icon-uniE800 {
    left: -7px;
    color: #999;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    position: absolute
  }

  .ui-hada-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 22%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    background: #ff5777;
    -webkit-border-radius: 3px;
    border-radius: 3px
  }
</style>

<template>

  <div class="ui-hada" v-if="show">
    <div class="ui-hada-logo"></div>
    <div class="ui-hada-intro">
      <p class="ui-hada-desc">更多变美妙招一学就会</p>
      <p>
        <em class="ui-hada-name">蘑菇街</em>
            <span class="ui-hada-stars">
              <i class="icon icon-uniE804"></i>
              <i class="icon icon-uniE804"></i>
              <i class="icon icon-uniE804"></i>
              <i class="icon icon-uniE804"></i>
              <i class="icon icon-uniE804"></i>
            </span>
      </p>
    </div>
    <span class="btn ui-hada-btn">立即下载</span>
    <a class="ui-hada-close" @click="hide">
      <i class="icon icon-uniE800"></i>
    </a>
  </div>

</template>

<script>

export default {
  data () {
    return {
      show: true
    }
  },
  methods: {
    hide () {
      this.show = false
    }
  }
}

</script>
