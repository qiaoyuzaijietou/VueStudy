// 引入Vue
import Vue from 'vue'

// 引入App
import App from './App.vue'

// 关闭Vue在启动时生成生产提示
Vue.config.productionTip=false

/* 新建一个Vue实例 */
new Vue({
        el: '#app',
        render:h=>h(App),
        beforeCreate() {
            Vue.prototype.$bus = this
        },
    });