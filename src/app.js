import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './app.vue'

//消息提醒
import Toast from 'vue-toast-mobile'
window.Toast = Toast

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.headers = {
	'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
}
Vue.http.options.emulateJSON = true
Vue.config.debug = true


const router = new VueRouter({
	//abstract:true,
	//地址栏不会有变化
	//以下设置需要服务端设置
	hashbang: true,
	history: false,//当使用 HTML5 history 模式时，服务器需要被正确配置 以防用户在直接访问链接时会遇到404页面。
	saveScrollPosition: true,
	transitionOnLoad: true,
	linkActiveClass:'nav-active' //全局设置连接匹配时的类名 参考http://vuejs.github.io/vue-router/en/link.html
})

require('./routers')(router);

router.start(App,'app');


