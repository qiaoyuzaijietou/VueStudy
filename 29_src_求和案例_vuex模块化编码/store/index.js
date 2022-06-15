// 改文件用于创建Vuex中最为核心的store
// 引入Vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
import countOptions from './count'
import personOptions from './person'
// 应用Vuex插件
Vue.use(Vuex)





// 创建并暴露store
export default new Vuex.Store({
    modules: {
        countOptions,
        personOptions
    }
})
