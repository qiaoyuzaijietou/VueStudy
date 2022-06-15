// 引入Vue
import Vue from 'vue'

// 引入App
import App from './App.vue'
// 引入vueRouter
import vueRouter from 'vue-router'
// 引入路由器
import router from './router/index'
// 关闭Vue在启动时生成生产提示
Vue.config.productionTip=false
// 应用插件
Vue.use(vueRouter)
/* 新建一个Vue实例 */
new Vue({
        el: '#app',
        render:h=>h(App),
        router:router
    });