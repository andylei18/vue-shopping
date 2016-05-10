<style>
  .MCUBE_MOD_ID_4873 .iwf .shelf:before, .goods-wall-wrap .iwf .shelf:before {
    content: '';
    display: block;
    height: 2px;
    width: 100%;
    left: 0;
    position: absolute;
    background-image: url("http://s16.mogucdn.com/p1/160216/upload_ifrdgoddmu2dgmddgyzdambqmeyde_335x2.png");
  }
  .MCUBE_MOD_ID_4873 .iwf .shelf, .goods-wall-wrap .iwf .shelf {
    color: #aaa;
    font-size: .2109375rem;
    height: .421875rem;
    padding-left: .234375rem;
    line-height: .46875rem;
  }
  .MCUBE_MOD_ID_4873 .iwf .goods_info .img img, .goods-wall-wrap .iwf .goods_info .img img {
    height: 94%;
    margin: auto;
  }
  .MCUBE_MOD_ID_4873 .iwf .goods_info .img, .goods-wall-wrap .iwf .goods_info .img {
    float: right;
    line-height: .3984375rem;
    height: .3984375rem;
  }
  .MCUBE_MOD_ID_4873 .iwf .goods_info .count, .goods-wall-wrap .iwf .goods_info .count {
    margin: 0 .1640625rem 0 .0234375rem;
    height: .3984375rem;
    line-height: .4453125rem;
    font-size: .24609375rem;
    float: right;
  }
  .MCUBE_MOD_ID_4873 .iwf .goods_info .fav_num, .goods-wall-wrap .iwf .goods_info .fav_num {
    float: left;
    background-image: none;
    _background-image: none;
    color: #fa5a7b;
    display: inline-block;
    margin: 0 auto;
    padding-left: .234375rem;
    font-size: .26953125rem;
    line-height: .3984375rem;
    margin-bottom: 3%;
  }
  .MCUBE_MOD_ID_4873 .iwf .goods_info, .goods-wall-wrap .iwf .goods_info {
    margin-top: 0;
    padding-left: 0;
    line-height: .2859375rem;
    overflow: hidden;
    height: auto;
  }
  .MCUBE_MOD_ID_4873 .iwf .goods_info, .goods-wall-wrap .iwf .goods_info {
    font-size: .234375rem;
    line-height: .3984375rem;
    height: .3984375rem;
    color: #bbb;
    background-repeat: no-repeat;
  }
  .MCUBE_MOD_ID_4873 .iwf .title a, .goods-wall-wrap .iwf .title a {
    padding-left: .0703125rem;
    display: block;
    font-size: .2625rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #666;
  }
  .MCUBE_MOD_ID_4873 .iwf .title, .goods-wall-wrap .iwf .title {
    margin-bottom: 2%;
  }
  .MCUBE_MOD_ID_4873 .iwf .img-tag, .goods-wall-wrap .iwf .img-tag {
    border-radius: 2px;
    margin-left: .1rem;
  }
  .MCUBE_MOD_ID_4873 .iwf .img-wrap img, .goods-wall-wrap .iwf .img-wrap img {
    width: 100%;
    -webkit-animation: fadeIn .4s ease both 0;
    animation: fadeIn .4s ease both 0;
  }
  .MCUBE_MOD_ID_4873 .iwf .img-tags img, .goods-wall-wrap .iwf .img-tags img, .MCUBE_MOD_ID_4873 .iwf .bottom-img-tags img, .goods-wall-wrap .iwf .bottom-img-tags img {
    position: relative;
  }
  .MCUBE_MOD_ID_4873 .iwf .img-tags, .goods-wall-wrap .iwf .img-tags {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;
  }
  .loading_bg_110 {
    background-size: 1.1rem auto!important;
  }
  .MCUBE_MOD_ID_4873 .iwf .img-wrap, .goods-wall-wrap .iwf .img-wrap {
    display: block;
    height: 0;
    width: 100%;
    position: relative;
  }
  .MCUBE_MOD_ID_4873 .iwf, .goods-wall-wrap .iwf {
    position: relative;
    width: 96%;
    margin: 4% 0 4% 2%;
    border: 1px #dfdfdf solid;
    background: #fff;
  }
  .MCUBE_MOD_ID_4873 .wall-container, .goods-wall-wrap .wall-container {
    margin-top: 2%;
  }
  .MCUBE_MOD_ID_4873, .goods-wall-wrap {
    min-height: 600px;
  }
  .page_activity .mod_row {
    width: 960px;
    margin: 0 auto;
    position: relative;
  }
  .page_type_h5 .mod_row {
    width: 100%;
  }
  .page_type_h5 {
    max-width: 750px;
    margin: 0 auto;
  }
</style>
<template>
  <div class="ui-app">
    <div class="page_activity page_type_h5">
      <div class="module_row module_row_6115 MOD_ID_4873">
        <div class="bannerImg"></div>
        <div class="mod_row MCUBE_MOD_ID_4873">
          <div class="wall-container clearfix" style="height: auto;">
            <div class="wall-list J_scroll_wallbox clearfix" style="height:800px;">
              <div class="wall-col fl clearfix" style="width:50%;">
                <div class="clearfix scroll-remove layer-3d scroll-remove0">


                  <div class="iwf" v-for="item in list">
                    <a v-link="{name:'catedetail',params:{mt:item.id}}" class="img-wrap J_dynamic_imagebox loading_bg_110" style="padding-bottom: 150%;">
                      <div class="img-tags clearfix" v-if="item.imgtag">
                        <img class="img-tag fl" src="http://s16.mogucdn.com/p1/160309/upload_ifrgeoldgeywcmjtg4zdambqmeyde_76x76.png" style="width:0.73rem;">
                      </div>
                      <img :src="item.pic" :alt="item.title">
                    </a>
                    <div><p class="title"> <a v-link="{name:'catedetail',params:{mt:item.id}}">{{item.title}}</a> </p> </div>
                    <div class="goods_info">
                      <div class="fav_num"><em>￥</em>{{item.price}}</div>
                      <div class="count">{{item.count}}</div>
                      <div class="img"><img src="http://s16.mogucdn.com/p1/160223/upload_ie3timrrhazdqndfgyzdambqgayde_28x36.jpg"></div>
                    </div>
                    <div class="shelf">{{item.shelf}}</div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return{
        list:[]
      }
    },
    route: {
      data(transition){

        //请求列表全部数据
        this.getAjax(transition)

      }
    },
    methods: {
      //请求列表全部数据
      getAjax(transition){
        const _self = this
        const _mt = transition.to.params.mt

        let successCallback =(json) => {
          const jsondata = json.data

          _self.$route.router.app.loading = false

          if(jsondata&&jsondata.code==0){
            //实时异步队列更新数据
            transition.next({
              list:jsondata.data
            })
          }

        }

        let errorCallback = (json)=> {
          //console.log(json)
        }

        _self.$http.get('../../src/mock/goods/catelist.json?mt='+ _mt).then(successCallback, errorCallback)

      }
    }
  }
</script>
