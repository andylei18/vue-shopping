<template>
  <p>22222</p>
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

