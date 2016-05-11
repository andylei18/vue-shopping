<template>

  <div class="ui-confirm" v-if="show" @click.stop>
    <div class="box">
      <div class="content">确定要删除该商品吗?</div>
      <div class="action">
        <span class="ui-btn ui-btn-white cancel" @click="closeEvent">取消</span>
        <span class="ui-btn ui-btn-pink confirm" @click="openEvent">确定</span>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    props:['show'],
    ready () {
      const self = this
      document.addEventListener("click",function(e){
        //关闭弹出窗和遮罩层
        self.show = false;
        self.$parent.mask = false;
      })
    },
    methods:{
      //关闭弹出窗
      closeEvent(){
        this.show = false
        this.$parent.mask = false
      },
      //确定
      openEvent(){

      }
    }
  }

</script>
