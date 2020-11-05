<template>
  <div>
    son1 
    <div>name:{{name}}</div>
    <div>age：{{age}}</div>
    <button @click="changeName">son1修改名字</button>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
export default {

  computed: {
    ...mapState(["name","age"])
  },
  methods:{
    ...mapMutations(["changeName"])
  }
};
</script>
<style lang="less">
</style>