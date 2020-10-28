<template>
  <div>
    盒子组件{{this.$store.state.name}}
    <Son1></Son1>
    <hr>
    <Son2></Son2>
  </div>
</template>
<script>
import Son1 from "./Son1";
import Son2 from "./Son2";
export default {
  name:'Box',
  components:{Son1,Son2},
  mounted() {
    console.log(this)
  },
}
</script>
<style lang="less">
</style>