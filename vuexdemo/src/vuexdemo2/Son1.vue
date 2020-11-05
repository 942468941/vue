<template>
  <div>
    son1 name:{{ this.$store.state.name }}
    <div>mapstate:{{ name }}</div>

    <div>age: {{age}}</div>
    <div>mapGetters: {{double}}</div>
    <button @click="change">son1修改名字</button>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["name","age"]),
    ...mapGetters(["double"])
  },
  methods: {
    change() {
      //   setTimeout(() => {
      //     this.$store.commit("changeName", { name: "修改1" });
      //   }, 1000);
      this.$store.dispatch("changeNameAction", { name: "修改1" });
    },
  },
};
</script>
<style lang="less">
</style>