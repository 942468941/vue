<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in banners" :key="index">
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  props: {
    banners: {
      type: Array,
      default: [],
    },
  },
  methods: {
    initBanner() {
      new Swiper(".swiper-container", {});
    },
  },
  watch: {
    banners() {
      this.$nextTick(() => {
        this.initBanner();
      });
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../style/index.less";
@import "~swiper/css/swiper.min.css";
.swiper-container {
  .w(375);
  .h(150);
  background: rgb(27, 127, 194);
  font-size: @fs-xl;
  img {
    .w(375);
    .h(150);
  }
}
</style>