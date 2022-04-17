// 引入Vue
import Vue from 'vue'

// 引入App
import App from './App.vue'
import {mixin,mixin2} from './mixin'
// 关闭Vue在启动时生成生产提示
Vue.config.productionTip=false
Vue.mixin(mixin)
Vue.mixin(mixin2)
/* 新建一个Vue实例 */
new Vue({
        el: '#app',
        render:h=>h(App)
    });