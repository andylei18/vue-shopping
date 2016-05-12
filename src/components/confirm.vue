<template>

  <div class="ui-confirm" v-if="confirm.show" @click.stop>
    <div class="box">
      <div class="content">{{confirm.text}}</div>
      <div class="action">
        <span class="ui-btn ui-btn-white cancel" @click="cancelEvent">取消</span>
        <span class="ui-btn ui-btn-pink confirm" @click="confirmEvent">确定</span>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    replace:true,
    props:{
      confirm: {
        type: Object,
        default () {
          return {
            show:false,
            text:'',
            confirm () {},
            cancel () {}
          }
        }
      }
    },
    data () {
      return {
        show: false,
        text: ''
      }
    },
    ready () {
      document.addEventListener('click', this.maskClose)
    },
    destroy () {
      document.removeEventListener('click', this.maskClose)
    },
    methods:{
      maskClose () {
        //关闭弹出窗和遮罩层
        this.confirm.show = false
        this.$parent.mask = false
      },
      cancelEvent () {
        this.confirm.show = false
        if (this.confirm.cancel) this.confirm.cancel()
      },
      //关闭弹出窗
      confirmEvent(){
        this.confirm.show = false
        this.$parent.mask = false
        if (this.confirm.confirm) this.confirm.confirm()
      }
    }
  }

</script>
