/*
    该文件是整个项目的入口文件
 */
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
//阻止Vue在启动时生成生产提示
Vue.config.productionTip=false
/* 
    关于不同版本的Vue:
        vue.js与vue.runtime.xxx.js的区别：
            （1）vue.js是完整版的vue，包含核心功能加模板解析器。
            （2）vue.runtime.xxx.js是运行版的Vue，只包含核心功能，没有模板解析器
        
        因为vue.runtime.xxx.js没有模板解析器，所有不能使用template配置项，需要使用
        render函数接收到的createElement函数去指定具体内容
 */
/* 新建一个Vue实例 */
new Vue({
        el: '#app',
        render:h=>h(App)
    })
