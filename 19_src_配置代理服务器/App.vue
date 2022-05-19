<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: "App",
  methods:{
    getStudents(){
      axios.get('http://localhost:8080/atguigu/getStudent').then(value=>{
        console.log('请求成功了',value.data.name);
      },reason=>{
        console.log('请求失败了',reason.message);
      })
    }
  }
};
</script>
