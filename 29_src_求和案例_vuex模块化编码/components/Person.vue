<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color:skyblue">Count组件的求和为：{{sum}}</h3>
    <h3>列表中第一个人的名字是：{{firstPersonName}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <br>
    <button @click="add">添加</button>
    <br>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPersonServer">添加一个人，名字随机</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapState } from "vuex";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    personList() {
      return this.$store.state.personOptions.personList;
    },
    sum() {
      return this.$store.state.countOptions.sum;
    },
    //    ... mapState({personList:'personList'}),
    firstPersonName(){
      return this.$store.getters['personOptions/firstPersonName']
    }
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      //   console.log(personObj);
      this.$store.commit("personOptions/ADD_PERSON", personObj);
      this.name = "";
    },
    addWang(){
      const personObj = { id: nanoid(), name: this.name };
      this.$store.dispatch('personOptions/addPersonWang',personObj)
      this.name=''
    },
    addPersonServer(){
      this.$store.dispatch('personOptions/addPersonServer')
    }
  },
};
</script>

<style>
</style>