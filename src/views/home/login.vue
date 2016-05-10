<style>

</style>
<template>

  <div id="BP_topLogin" class="ui-top-login">

    <div class="form-shunt" v-show="shunt">
      <img src="http://s17.mogucdn.com/p1/151027/upload_ie4dqzlggzrgizrxgqzdambqgiyde_750x600.jpg" width="100%">
      <div class="ui-top-login-controller">
        <a href="javascript:void(0);" class="btn-login J_shuntLogin" @click="showProcess">登录</a>
        <a href="http://www.mogujie.com/mage/jump/go?link=http%3a%2f%2fa.app.qq.com%2fo%2fsimple.jsp%3fpkgname%3dcom.mogujie%26ckey%3dCK1296840483898&amp;mt=10.151.r7642" class="btn-download">下载</a>
        <div class="other-login">
          <a href="javascript:void(0);" class="login-qq js-third-login"></a>
          <a href="javascript:void(0);" class="login-wb js-third-login"></a>
        </div>
      </div>
    </div>

    <div class="form-login" v-show="login">
      <a href="javascript:void(0);" class="topLogin_btn topLogin_btn_back J_back" @click="returnProcess">返回</a>
      <a href="javascript:void(0);" class="topLogin_btn J_shuntReg" v-link="{name:'register'}">注册</a>
      <form action="" method="post" id="login_form">
        <div class="form_mod_wrap mb15 r3">
          <div class="form_mod"> <div>
            <input type="text" class="userselect text js-uname" name="username" placeholder="昵称/邮箱/手机号">
          </div>
          </div>
          <div class="form_mod"> <div>
            <input type="password" class="userselect text js-pwd" name="password" placeholder="密码">
          </div>
          </div>
        </div>
        <div class="form_check" style="-webkit-transform:none !important;"></div>
        <div class="login_show">
          <span class="login_btn">登录</span>
        </div>
        <div class="other-login">
          <a href="javascript:void(0);" class="login-qq js-third-login"></a>
          <a href="javascript:void(0);" class="login-wb js-third-login"></a>
        </div>
      </form>
    </div>


    <div class="form-regist" v-show="regist">
      <a href="javascript:;" class="topLogin_btn topLogin_btn_back J_back">返回</a>
      <a href="javascript:;" class="topLogin_btn J_shuntLogin">登录</a>
      <form action="" method="post" id="regist_form">
        <div class="form_mod_wrap w4">
          <div class="form_mod"> <div>
            <input type="tel" id="telNo" class="userselect text" name="phone" placeholder="手机号">
          </div>
          </div>
          <div class="form_mod clearfix tel_validate">
            <div class="val">
              <input type="text" class="userselect" name="validate" placeholder="验证码">
              <div class="count grey fr">点击获取</div>
            </div>
          </div>
          <div class="form_mod">
            <div>
              <input type="password" class="userselect text" name="password" placeholder="密码">
            </div>
          </div>
        </div>
        <div class="regist_show">
          <a href="javascript:;" class="regist_btn">立即注册</a>
        </div>
      </form>
    </div>

  </div>

</template>

<script>

  export default {
    data(){
      return{
        shunt:true,
        login:false,
        regist:false
      }
    },
    methods:{
      //显示登陆,注册流程
      showProcess(){
        this.shunt = false
        this.login = true
      },
      //隐藏登陆,注册流程
      returnProcess(){
        this.login = false
        this.shunt = true

      }
    }
  }

</script>
