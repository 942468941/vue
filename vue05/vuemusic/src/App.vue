<template>
  <div id="app">
    <Header></Header>
    <Tab></Tab>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
import Tab from "./components/Tab";
export default {
  components: {
    Header,
    Tab,
  },
};
</script>
<style lang="less">
@import "./style/reset.css";
@import "./style/index.less";
#app {
  background: @black2;
  .w(375);
  height: 100vh;
}
</style>
