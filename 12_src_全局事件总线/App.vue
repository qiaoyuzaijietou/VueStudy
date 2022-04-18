<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <School/>
        <student/>
    </div>
</template>
<script>
    // 引入School组件
    import Student from './components/Student.vue'
    import School from './components/School.vue'
import Vue from 'vue'

    const demo = Vue.extend({})
    const d = new demo()

    Vue.prototype.x = d

    export default {
        name:'App',
        components:{Student,School},
        data() {
            return {
                msg:'你好啊！',
            }
        }
    }
</script>
<style>
   .app{
       background-color: gray;
       padding: 5px;
   }
</style>