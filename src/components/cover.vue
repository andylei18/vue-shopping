
<style>
     .vertical-center {
        display: -webkit-box;
        display: -moz-box;
        display: box;
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        box-orient: vertical;
        -webkit-box-direction: normal;
        box-direction: normal;
        -webkit-flex-direction: column;
        -moz-flex-direction: column;
        flex-direction: column;
        -ms-flex-direction: column;
        -webkit-box-pack: center;
        box-pack: center;
        -webkit-justify-content: center;
        -moz-justify-content: center;
        -ms-justify-content: center;
        -o-justify-content: center;
        justify-content: center;
        -ms-flex-pack: center;
    }
    .text-center {
        text-align: center;
    }
    #loading-cover{
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    #loading-cover{
        z-index: 10;
        background: rgba(0,0,0,.7);
        color: #666;
        padding: 1em 1em 5em;
        -webkit-transition: all,1.5s;
        transition: all,1.5s;
    }
    #loading-cover.done {
        opacity: 0;
        z-index: -1;
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
    }
    .logo-img{
        border-bottom: 1px solid #f5f5f5;
    }
    img.inline {
        height: 50px;
        width: 180px;
    }
    img.inline+span, span+img.inline {
        margin-left: .5em;
    }
    .inner {
        width: 100%;
        height: 32px;
        line-height: 32px;
    }
</style>
<template>
    <div id=loading-cover class="vertical-center text-center" :class="show?'':'done'">
        <a href="#" class="logo-img">
            <img src="../../src/assets/images/common/logo.png" class="inline">
        </a>
        <div class="inner">
            <i class="icon-load"></i>
            <span>加载中</span>
        </div>
    </div>
</template>
<script>
    export default {
        props:['show']
    }
</script>
