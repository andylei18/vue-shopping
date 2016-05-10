<style>

  .ui-subfield-con .sf-login p .icon-usr {
    background: url("../assets/images/home/user_login.jpeg") no-repeat;
    background-size: 100% 100%;
    width: .35rem;
    height: .35rem;
    margin-top: -.1rem;
    margin-right: .3rem;
    vertical-align: middle;
    display: inline-block;
  }
  .ui-subfield-con .sf-login p {
    border-top: 1px solid #e5e5e5;
    color: #ff6b9b;
    padding-top: .4rem;
    font-size: .35rem;
    position: absolute;
    bottom: .3rem;
    left: .3rem;
    width: 100%;
  }
  .ui-subfield-con .sf-login {
    bottom: 0;
    left: 0;
    height: .44rem;
    line-height: .44rem;
    width: 4rem;
    margin-top: .1rem;
    margin-left: .2rem;
  }
  .ui-subfield-con .sf-list li a {
    color: #666;
    font-size: .38rem;
    text-indent: .24rem;
    display: block;
    width: 100%;
    height: 100%;
  }
  .ui-subfield-con .sf-list li {
    line-height: 1;
    float: left;
    width: 50%;
    margin: .25rem 0;
  }
  .ui-subfield-con .sf-list {
    margin: .65rem 0 0 .2rem;
  }
  .ui-subfield-con .sf-close span {
    vertical-align: top;
    background: url("../assets/images/home/close.jpeg") no-repeat;
    background-size: 100% 100%;
    width: 0.36rem;
    height: .35rem;
    display: inline-block;
  }
  .ui-subfield-con .sf-close {
    position: absolute;
    right: .1rem;
    top: .1rem;
    width: .42rem;
    height: .42rem;
    line-height: .42rem;
    text-align: center;
  }
  .ui-subfield-con {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 5.5rem;
    background-color: #fff;
    z-index: 2000;
    color: #424242;
    /*-webkit-transform: translate3d(-5.5rem,0,0);
    transform: translate3d(-5.5rem,0,0);*/
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    overflow: hidden;
  }
  .ui-subfield-con.show {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
  }
  #BP_subfieldCon {
    font-size: 55.2px;
  }

  /* 必需 */
  .menuleft-transition {
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
  }

  /* .menuleft-enter 定义进入的开始状态 */
  /* .menuleft-leave 定义离开的结束状态 */
  .menuleft-enter, .menuleft-leave {
    -webkit-transform: translate3d(-5.5rem,0,0);
    transform: translate3d(-5.5rem,0,0);
  }

</style>

<template>

  <div id="BP_subfieldCon" class="ui-subfield-con" v-if="show" transition="menuleft">

    <div class="sf-close" @click="closeMenuEvent">
      <span></span>
    </div>

    <ul class="sf-list clearfix">

      <li><a v-link="{name:'home'}">首页</a></li>
      <li v-for="item in list"><a v-link="{name:'goods',params:{mt:item.mt,type:item.type} }">{{item.title}}</a>
      </li>
    </ul>
    <div class="sf-login">
      <p id="BP_Login" v-link="{name:'login'}"><i class="icon-usr"></i>请登录</p>
    </div>

  </div>

</template>

<script>

  export default {
    props: ["show","list"],
    methods:{
      //关闭菜单
      closeMenuEvent(){

        this.$parent.menu.show = false

        this.$parent.mask = false
      }
    }
  }

</script>
