module.exports = function(router){
    //路由表
    router.map({
        //默认
        '/':{
            name:'index',
            component: require('./app.vue')

        },
        //首页
        '/home':{
            name:'home',
            //异步处理大量数据
            component: function(reslove){
                return require(['./views/home/index.vue'],reslove)
            }
        },
        //限时秒杀活动页
        '/timelimit':{
          name:'timelimit',
          //异步处理大量数据
          component: function(reslove){
            return require(['./views/timelimit/index.vue'],reslove)
          }
        },
        //限时秒杀活动页
        '/markets/goods':{
          name:'markets_goods',
          //异步处理大量数据
          component: function(reslove){
            return require(['./views/markets/index.vue'],reslove)
          }
        },

        //全部商品模块页面
        '/goods':{
          name:'goods',
          //异步处理大量数据
          component: function(reslove){
            return require(['./views/goods/index.vue'],reslove)
          }
        },




        // 登陆页
        '/login': {
          name:'login',
          component: require('./views/login.vue')
        },
        // 注册页
        '/register': {
          name:'register',
          component: require('./views/register.vue')
        },
        // 404 页
        '*': {
            name:'404error',
            component: require('./views/404.vue')
        },

    });


    //默认List主页
    router.redirect({
        '/':"/home"
    });


    //注册路由切换前
    router.beforeEach(function (transition) {
        transition.next();

    });


    //注册路由切换后
    router.afterEach(function (transition) {
        //console.log('成功浏览到: ' + transition.to.path)
    });

};
