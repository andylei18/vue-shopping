<style src="../../src/assets/styles/module/login.css"></style>

<style>




  body {
    background: #fff;
  }
  .form_mod {
    padding: 0.2rem 0.4rem;
    margin-bottom: 0.4rem;
    font-size: 0.44rem;
    line-height: 0.44rem;
    /* border: 1px solid #d1d1d1; */
    background: #f2f2f2;
    border-radius: 3px;
  }
  .form_mod .text {
    height: 0.88rem;
    line-height: 0.88rem;
    width: 100%;
    -webkit-box-flex: 1;
    display: block;
    font-size: 0.44rem;
    border: none;
    color: #444;
    background: #f2f2f2;
  }
  .form_mod .text::-webkit-input-placeholder {
    color: #aeaeae;
  }
  .form_mod .text:-moz-placeholder {
    color: #aeaeae;
  }
  .form_mod .text::-moz-placeholder {
    color: #aeaeae;
  }
  .form_mod .text:-ms-input-placeholder {
    color: #aeaeae;
  }
  #user_login .login_btn,
  #user_login .regist_btn {
    width: 100%;
    font-size: 0.72rem;
    height: 1.8rem;
    line-height: 1.8rem;
  }
  /* 登录、注册页面 css */
  .user_content {
    min-width: 320px;
  }
  .form_wrap {
    padding: 1rem 0.6rem 0.48rem;
  }
  /* 登录注册 */
  .login_show .login_btn {
    display: inline-block;
    background: #ff5777;
    color: #fff;
    /*margin-bottom: 30rem/@size;*/
    border: 0;
    border-radius: 3px;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    white-space: nowrap;
  }
  .login_show .sinaqq {
    margin-bottom: 0;
  }
  .login_show .regist_btn {
    background: #ecedef;
    color: #ff5777;
    line-height: 1.8rem;
    border: 2px solid #ff5777;
    padding: 0;
  }
  /* 第三方登录 */
  .login_third_tiny_btn {
    text-align: center;
  }
  .login_third_btn {
    text-align: center;
  }
  .login_third_icon {
    margin: 0.64rem 0 0.5rem;
    text-align: center;
  }
  .login_third {
    padding: 1.4rem 0.6rem 0;
  }
  .login_title {
    padding: 1.2rem 0.6rem 0;
  }
  .login_third span,
  .login_title span {
    display: inline-block;
    width: 100%;
    text-align: center;
    color: #666;
    font-size: 0.4rem;
    position: relative;
  }
  .login_third span:before,
  .login_third span:after,
  .login_title span:before,
  .login_title span:after {
    content: '';
    width: 4.2rem;
    border-bottom: 1px solid #d8d8d9;
    position: absolute;
    top: 0.4rem;
  }
  .mgj {
    margin-bottom: -0.54rem;
  }
  .mgj span:before,
  .mgj span:after,
  .other span:before,
  .other span:after {
    width: 2.6rem;
  }
  .login_title span:before {
    left: 0;
  }
  .login_title span:after {
    right: 0;
  }
  .login_third_icon .third_login {
    display: inline-block;
    width: 3.64rem;
    height: 3.64rem;
    border-radius: 50%;
    background: #fff url(http://www.mogujie.com/img/imgwap/loading_alpha.gif) no-repeat;
  }
  .login_third_btn .third_login {
    display: inline-block;
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    margin: 0 0.5rem;
    background: #fff url(http://www.mogujie.com/img/imgwap/loading_alpha.gif) no-repeat;
  }
  .login_third_btn .weixin {
    background: url(http://s17.mogucdn.com/p1/150803/upload_ieztiyrzgaygcoddgizdambqgyyde_210x210.png) center no-repeat;
    background-size: 100%;
  }
  .login_third_btn .qq {
    /*margin-right: 110rem/@size;*/
    background: url(http://s16.mogucdn.com/p1/150803/upload_ieztmnzwmztdsoddgizdambqgyyde_210x210.png) center no-repeat;
    background-size: 100%;
  }
  /*.login_third_icon .sina{
    background: url(http://s8.mogucdn.com/pic/150417/17ferq_ieztszjugm3dazjzgazdambqgyyde_182x182.png) center no-repeat;
    background-size: 100%;
  }*/
  .login_third_btn .sina {
    background: url(http://s18.mogucdn.com/p1/150803/upload_ie2gcmbqgaygcoddgizdambqgiyde_210x210.png) center no-repeat;
    background-size: 100%;
  }
  .login_third_tiny_btn a {
    display: inline-block;
    width: 2.28rem;
    height: 2.28rem;
  }
  .login_third_tiny_btn .qq_third_login {
    background: url(http://s16.mogucdn.com/p1/150803/upload_ieztinrsgeygcoddgizdambqgyyde_114x114.png) 0 center no-repeat;
    background-size: 100%;
    margin: 0.86rem 0.34rem;
  }
  .login_third_tiny_btn .sina_third_login {
    background: url(http://s18.mogucdn.com/p1/150803/upload_ie2geodcgeygcoddgizdambqgiyde_114x114.png) 0 center no-repeat;
    background-size: 100%;
    margin: 0.86rem 0.34rem;
    /*margin-left: 80rem/@size;*/
  }
  /* 注册 */
  .regist_show .regist_btn {
    display: block;
    width: 100%;
  }
  /*全球登录*/
  .login_idea {
    color: #494949;
    font-size: 0.36rem;
    width: 50%;
    text-align: center;
  }
  .login_idea.overseaslogin {
    border-right: solid 1px #9f9f9f;
  }
  .copyright {
    font-size: 0.3rem;
    color: #888;
    font-family: 'micorsoft yahei';
    text-align: center;
    padding: 0.36rem 0;
    border-top: 1px solid #dbdcde;
    margin-top: 1.9rem;
  }
  #views .login_btn,#views .regist_btn {
    width: 100%;
    font-size: 0.44rem;
    height: 1.2rem;
    line-height: 1.2rem;
  }
</style>

<template>

  <div class="ui-app with-header">

    <header id="BP_headBar" class="ui-head-bar">
      <a class="arr" href="javascript:void(history.back());">
        <i class="icon-back"></i>
      </a>
      <p class="title">登录</p>
      <span class="badge" v-link="{name:'register'}">立即注册</span>
    </header>
    <div id="views">

      <div class="user_content">

        <div class="login_third">
          <div class="login_third_btn">
            <a href="javascript:void(0);" class="js-third-login qq third_login"></a>
            <a href="javascript:void(0);" class="js-third-login sina third_login"></a>
          </div>
        </div>

        <div class="login_title mgj"> <span class="third_title">蘑菇街账号登录</span> </div>

        <div class="form_wrap">
          <div class="form_mod_wrap mb15">
            <div class="form_mod">
              <div> <input type="text" class="js-uname userselect text" placeholder="昵称/邮箱/手机号"> </div>
            </div>
            <div class="form_mod">
              <div> <input type="password" class="js-pwd userselect text" placeholder="密码"> </div>
            </div>
          </div>
          <div class="js-captcha-container"></div>
          <div class="login_show">
            <span class="login_btn" id="J_login_btn">登录</span>
          </div>
        </div>

        <p class="clearfix">
          <a href="javascript:void(0);" class="overseaslogin login_idea fl">全球手机登录</a>
          <a href="javascript:void(0);" class="findpwd login_idea fr">忘记密码?</a>
        </p>

        <p class="copyright">©2015 Mogujie.com 杭州卷瓜网络有限公司</p>

      </div>

    </div>

  </div>

</template>

<script>

  //加载公用小组件
  //import Mask from '../../components/mask.vue'//遮罩层组件

  export default {
    data(){
    return {}

    },
    components: {

    },
    route: {
      data(transition){
        const _self = this


        _self.$route.router.app.loading = false
      },
      deactivate(transition){
        //$(window).off('scroll');
        transition.next()
      }
    },
    methods: {

    }
  }
</script>
