<template>
  <div>
    <input type="text" v-model="inputValue" placeholder="请输入代办事项">
    <button @click="add">add</button>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  data(){
    return {
      inputValue:''
    }
  },
  methods:{
    ...mapMutations(['todolist/addList']),
    add(){
      this['todolist/addList']({msg:this.inputValue});
    }
  }
}
</script>
<style lang="less">
</style>