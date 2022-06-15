// 引入Vue
import Vue from 'vue'

//  完整引入 
// 引入ElementUI组件库
// import ElementUI from 'element-ui';
// 引入ElementUI的全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入
// import { Button } from 'element-ui';
import { Button,Row,DatePicker } from 'element-ui';

// 引入App
import App from './App.vue'

// 关闭Vue在启动时生成生产提示
Vue.config.productionTip = false
// 应用ElementUI
// Vue.use(ElementUI)

Vue.component(Button.name, Button)
Vue.component(Row.name, Button)
Vue.component(DatePicker.name, Button)

/* 新建一个Vue实例 */
new Vue({
    el: '#app',
    render: h => h(App),
});