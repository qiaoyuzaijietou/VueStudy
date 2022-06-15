<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大十倍后为：{{ bigSum }}</h3>
    <h3>我在{{ school }},学习{{ subject }}</h3>
    <h3 style="color: red">
      Person组件的总人数是:{{personList.length}}
    </h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="JIA(n)">+</button>
    <button @click="JIAN(n)">-</button>
    <button @click="jiaOdd(n)">当前求和为奇数再加</button>
    <button @click="jiaWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  methods: {
    // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
    ...mapMutations('countOptions',["JIA", "JIAN"]),
    /* ************************************************** */
    // 调用mapActions生成对应的方法，方法中会调用dispatch去联系actions(数组写法)
    ...mapActions('countOptions',["jiaOdd", "jiaWait"]),
  },
  computed: {
    // 借助mapState生成计算属性，从state中读取数据（数组写法）
    ...mapState('countOptions',['sum','school','subject']),
    ...mapState('personOptions',['personList']),
    // 借助mapGetters生成计算属性，从getters中读取数据（数组写法）
    ...mapGetters('countOptions',['bigSum'])
    /* ******************************************************* */
  },
  mounted() {
    // const x = mapState(["countOptions"]);
    // console.log(x);
    console.log(this.$store);
  },
};
</script>
<style>
button {
  margin-left: 5px;
}
</style>
