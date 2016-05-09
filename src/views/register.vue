<style src="../../src/assets/styles/module/login.css"></style>
<style>
  .form-wrap {
    padding: 0 0.3rem;
  }
  .form-wrap .form-group {
    height: 1.36rem;
    line-height: 1.36rem;
    padding: 0 0.6rem;
    border-bottom: 1px solid #d8d8d9;
    background: #fff;
    position: relative;
    display: -webkit-box;
  }
  .input {
    -webkit-box-flex: 1;
    border: none;
    font-size: 0.4rem;
    color: #444;
    height: 1rem;
    line-height: 1rem;
    border-radius: 0;
  }
  .confirm-btn {
    margin-top: 0.6rem;
    display: block;
    width: 100%;
    background: #FF5777;
    color: #fff;
    height: 1.2rem;
    line-height: 1.2rem;
    border-radius: 3px;
    border: none;
    font-size: 0.44rem;
    text-align: center;
  }
  .tip {
    display: block;
    color: #666;
    font-size: 0.36rem;
    margin-top: 0.36rem;
  }
  .msg-validate {
    text-align: left;
    width: 5.7rem;
    border-right: .01rem solid  #d8d8d9;
  }
  .msg-btn, .left-time {
    position: absolute;
    right: 0;
    top: .06rem;
    height: 1.22rem;
    text-align: center;
    font-size: 0.4rem;
    line-height: 1.22rem;
    background: #fff;
    width: 2rem;
  }
  .user-content {
    min-width: 320px;
  }
  .area-text {
    height: 1.2rem;
    position: absolute;
    font-size: 0.4rem;
    color: #999;
  }
  .area-value {
    position: absolute;
    top: 0;
    right: .6rem;
    height: 100%;
    text-align: right;
    color: #333;
  }
  .area-arrow {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: .6rem;
    background-image: url('http://s16.mogucdn.com/p1/151222/upload_ie4gmmzxge2gkzrzguzdambqgiyde_17x29.png');
    background-repeat: no-repeat;
    background-position: 100% 50%;
    background-size: 50%;
  }
  .plus {
    font-size: 0.72rem;
    margin-right: 0.1rem;
    line-height: 1.4rem;
  }
  .areacode {
    width: 1rem;
    border-right: 1px solid  #d8d8d9;
  }
  .phone-number {
    width: 5.5rem;
    margin-left: 0.4rem;
  }
  .form_check .check_notice {
    margin: 0.4rem auto;
    font-size: 0.4rem;
    position: relative;
  }
  .form_check .check_notice a {
    position: absolute;
    right: 0;
    color: #ee4566;
  }
  .form_check .check_notice span {
    color: #333333;
  }
  .form_check .check_img {
    margin-left: -0.22rem;
    -webkit-user-select: none;
  }
  .form_check .check_img .img_div {
    float: left;
    width: 2.12rem;
    height: 2.12rem;
    margin-left: 0.22rem;
    background-color: #fff;
  }
  .form_check .check_img .img_div span {
    background-repeat: no-repeat;
    display: block;
    width: 2rem;
    height: 2rem;
    margin: 0.06rem;
    background-size: 12rem auto;
  }
  .form_check .check_img .transition {
    -webkit-transition: all 0.5s ease-in-out;
  }
  .form_check .check_img .f0 {
    background-position: 0 0;
  }
  .form_check .check_img .f1 {
    background-position: -3rem 0;
  }
  .form_check .check_img .f2 {
    background-position: -6rem 0;
  }
  .form_check .check_img .f3 {
    background-position: -9rem 0;
  }
</style>
<template>
  <div class="ui-app with-header">
    <header id="BP_headBar" class="ui-head-bar">
      <a class="arr" href="javascript:void(history.back());">
        <i class="icon-back"></i>
      </a>
      <p class="title">注册</p>
      <span class="badge" v-link="{name:'login'}">已有账号</span>
    </header>

    <div id="views">
      <div id="user-register" class="user-content">
        <div class="form-wrap">
          <div class="form-group">
            <div class="area-text">国家与地区</div>
            <input type="text" class="input area-value js-area-code" value="中国" readonly="true">
            <a class="js-select-area area-arrow" href="http://m.mogujie.com/x6/login/country"></a>
          </div>
          <div class="form-group">
            <div class="plus">+</div>
            <input type="text" class="input areacode" value="86">
            <input type="tel" class="input phone-number js-phone-number" placeholder="手机号" v-model="phone"> </div>
          <div class="js-captcha-container">

              <div class="form_check">
                <p class="check_notice">
                  <span>翻转至正确方向</span>
                  <a href="javascript:;" class="change_capture">换一组</a>
                </p>
                <div class="check_img clearfix" data-captkey="y7pqm1pdrav2">
                  <div class="img_div transition" data-num="0" data-times="0" style="-webkit-transform: rotate(0deg);" @click="degImage($event)">
                    <span class="f0" style="background-image: url(../../src/assets/images/login/validate.png)" ></span>
                  </div>
                  <div class="img_div transition" data-num="1" data-times="0" style="-webkit-transform: rotate(0deg);" @click="degImage($event)">
                    <span class="f1" style="background-image: url(../../src/assets/images/login/validate.png)"></span>
                  </div>
                  <div class="img_div transition" data-num="2" data-times="0" style="-webkit-transform: rotate(0deg);" @click="degImage($event)">
                    <span class="f2" style="background-image: url(../../src/assets/images/login/validate.png)"></span>
                  </div> <div class="img_div transition" data-num="3" data-times="0" style="-webkit-transform: rotate(0deg);" @click="degImage($event)">
                  <span class="f3" style="background-image: url(../../src/assets/images/login/validate.png)"></span>
                </div>
                </div>
              </div>

          </div>
          <div class="form-group">
            <input type="text" class="js-msg-validate input msg-validate" placeholder="请输入短信验证码" v-model="verification">
            <div class="js-msg-btn msg-btn" @click="getCode">获取验证码</div>
            <div class="js-left-container left-time hide">
              <span class="js-left-time"></span>秒后重发
            </div>
          </div>
          <div class="js-regist-btn confirm-btn">立即注册</div>
          <a class="tip" href="/service">* 注册代表同意《蘑菇街网络服务使用协议》</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  //加载公用小组件
  //import Mask from '../../components/mask.vue'//遮罩层组件

  let degindex = 0

  export default {
    data(){
      return {
        phone:'',
        verification:'',
      }
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
      //获取验证码
      getCode(){
        const text = this.phone

        if (text.trim()) {


        }else{

          Toast({
            message: '请输入正确得手机号码!',
            position: 'middle',
            duration: 3000
          })

          return false
        }

      },
      degImage(e){

        //const transformVal = e.target.style.transform

        degindex = degindex+90

        console.log(e)

        e.target.style.transform = 'rotate('+ degindex +'deg)'

      }
    }
  }
</script>
