<template>
  <div>
    盒子组件{{name}}{{age}}
    <button @click="changeName">改名称</button>
    <button @click="changeAge">改年龄</button>
    <!-- <Son1></Son1>
    <hr>
    <Son2></Son2> -->
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
import Son1 from "./Son1";
import Son2 from "./Son2";
export default {
  name:'Box',
  components:{Son1,Son2},
  computed:{
    ...mapState({
      name:state=>state.hehe.name,
      age:state=>state.xixi.age
    })
  },
  mounted() {
    console.log(this)
  },
  methods:{
    ...mapMutations(['changeName','changeAge'])
  }
}
</script>
<style lang="less">
</style>