<template>
  <div class="todoItem">
    <li>
      <slot name="pre-icon" :value="value"></slot>
      <span v-if="del">{{ title }}</span>
      <span v-else style="text-decoration: line-through">{{ title }}</span>
      <button v-show="del" @click.stop="handleClick">删除</button>
      <slot name="suf-icon"></slot>
    </li>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    title: String,
    del: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {
      value: Math.random(),
    };
  },
  methods: {
    handleClick() {
      console.log(this);
      this.$emit("delete", this.title);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
