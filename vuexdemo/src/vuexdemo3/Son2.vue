<template>
  <div>
    son2 
    <div>name:{{name}}</div>
    <div>age:{{age}}</div>
    <button @click="changeAge">son2修改年龄</button>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
export default {
  computed: {
    ...mapState(["name","age"])
  },
  methods: {
    ...mapMutations(['changeAge'])
  },
};
</script>
<style lang="less">
</style>