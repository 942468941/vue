<template>
  <div id="app">
    <h1>根组件</h1>
   <Box></Box>
  </div>
</template>

<script>
import Box from './vuexdemo/Box'

export default {
  name: 'App',
  components: {
    Box
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
