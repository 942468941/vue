<template>
  <div>
    son2 name:{{ this.$store.state.name }}
    <div>age:</div>
    <button @click="change">son2修改名字</button>
  </div>
</template>
<script>
import { mapActions, mapMutations } from "vuex";
export default {
  mounted() {
    console.log("son2", this);
  },
  methods: {
    ...mapActions(["changeNameAction"]),
    ...mapMutations(["changeName"]),
    change() {
      //   setTimeout(() => {
      //     this.$store.commit("changeName", { name: "修改2" });
      //   }, 1000);
      // this.$store.dispatch('changeNameAction',{name: "修改2"});

      //辅助函数调用action
      // this.changeNameAction({name: "修改2"});

      //辅助函数调用mutation
      this.changeName({ name: "修改2" });
    },
  },
};
</script>
<style lang="less">
</style>