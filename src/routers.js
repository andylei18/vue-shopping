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
        //限时秒杀活动模块  入口页面
        '/timelimit':{
          name:'timelimit',
          //异步处理大量数据
          component: function(reslove){
            return require(['./views/timelimit/index.vue'],reslove)
          }
        },
        //特色市场模块  入口页面
        '/markets/goods':{
          name:'markets_goods',
          //异步处理大量数据
          component: function(reslove){
            return require(['./views/markets/index.vue'],reslove)
          }
        },

        //全部商品模块页面  入口页面
        '/goods/:mt/:type':{
          name:'goods',
          //异步处理大量数据
          component: function(reslove){
            return require(['./views/goods/index.vue'],reslove)
          }
        },
            //全部商品模块catelist页面
            '/catelist/:mt':{
              name:'catelist',
              //异步处理大量数据
              component: function(reslove){
                return require(['./views/goods/catelist.vue'],reslove)
              }
            },
            //全部商品模块catedetail页面
            '/catedetail/:mt':{
              name:'catedetail',
              //异步处理大量数据
              component: function(reslove){
                return require(['./views/goods/catedetail.vue'],reslove)
              }
            },





        //订单模块  入口页面
        '/order':{
          name:'order',
          //异步处理大量数据
          component: function(reslove){
            return require(['./views/order/index.vue'],reslove)
          }
        },
        //收货地址页面
        '/address':{
          name:'address',
          //异步处理大量数据
          component: function(reslove){
            return require(['./views/order/address.vue'],reslove)
          }
        },
        //个人中心模块  入口页面
        '/usercenter':{
          name:'usercenter',
            component: require('./views/usercenter/index.vue')
        },
        //购物车模块页面  入口页面
        '/cart':{
          name:'cart',
          //异步处理大量数据
          component: function(reslove){
            return require(['./views/cart/index.vue'],reslove)
          }
        },



        //私聊模块入口页面
        '/chat':{
          name:'chat',
          //异步处理大量数据
          component: function(reslove){
            return require(['./views/chat/index.vue'],reslove)
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
