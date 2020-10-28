<template>
    <div>son1
        name:{{this.$store.state.name}}
        <div>
            age:{{this.$store.state.age}}
             getters:{{this.$store.getters.double}}
        </div>
        <button @click="change">修改年龄</button>
    </div>
</template>
<script>

export default {
    methods:{
        change(){
            this.$store.dispatch('changeAgeAction',{age:19})
        }
    }
}
</script>
<style lang="less">

</style>