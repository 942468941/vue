<template>
  <div>
      son2 name:{{ this.$store.state.name }}
      <div>
            age:{{this.$store.state.age}}
        </div>
    <button @click="change">修改名字</button>
  </div>
</template>
<script>
export default {
    mounted(){
        console.log("son2",this)
    },
    methods:{
        change(){
            this.$store.commit('changeName',{name:123})
        }
    }
};
</script>
<style lang="less">
</style>