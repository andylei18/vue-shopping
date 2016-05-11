<template>

  <div class="ui-confirm" v-if="show" @click.stop>
    <div class="box">
      <div class="content">{{text}}</div>
      <div class="action">
        <span class="ui-btn ui-btn-white cancel" @click="closeEvent">取消</span>
        <span class="ui-btn ui-btn-pink confirm" @click="opencallback">确定</span>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    replace:true,
    props:{
      //显示
      show: {
        type: Boolean,
        default: false
      },
      //文本设定
      text: {
        type: String,
        required: true,
        default:'确定要删除该商品吗?'
      },
      //确定事件callback
      opencallback:{
        type: Function,
        default () {
          return 
        }
      }
    },
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
      }
    }
  }

</script>
