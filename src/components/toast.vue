<div class="toast {{customClass}}" transition="pop-fade">
  <span class="toast-text">{{ message }}</span>
</div>
</template>

<style>
  .toast {
    position: fixed;
    max-width: 80%;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    box-sizing: border-box;
    padding: 10px;
    text-align: center;
    z-index: 1001;
  }
  .toast-text {
    display: block;
    color: #fff;
    text-align: center;
  }
  .toast.placemiddle {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .toast.placetop {
    top: 50px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .toast.placebottom {
    top: auto;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .pop-fade-transition {
    transition: opacity .3s linear;
  }
  .pop-fade-enter,
  .pop-fade-leave {
    opacity: 0;
  }
</style>

<script type="text/babel">
  export default {
    props: {
      message: String,
      className: {
        type: String,
        default: ''
      },
      position: {
        type: String,
        default: 'middle'
      }
    },
    computed: {
      customClass() {
        var classes = [];
        switch (this.position) {
          case 'top':
            classes.push('placetop');
            break;
          case 'bottom':
            classes.push('placebottom');
            break;
          default:
            classes.push('placemiddle');
        }
        classes.push(this.className);
        return classes.join(' ');
      }
    }
  };
</script>
