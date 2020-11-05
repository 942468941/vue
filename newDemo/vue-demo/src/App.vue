<template>
  <div id="app">
    <todo-list>
      <todo-item
        @delete="handleDelete"
        v-for="item in list"
        :key="item.title"
        :title="item.title"
        :del="item.del"
      >
        <template v-slot:pre-icon="{ value }">
          <span>图标{{ value }}</span>
        </template>
        <template v-slot:suf-icon>
          <span>图标2</span>
        </template>
      </todo-item>
    </todo-list>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import TodoItem from "./components/TodoItem.vue";
export default {
  name: "App",
  components: {
    TodoList,
    TodoItem,
  },
  data() {
    return {
      message: "3333",
      list: [
        {
          title: "课程1",
          del: false,
        },
        {
          title: "课程2",
          del: true,
        },
        {
          title: "课程3",
          del: true,
        }
      ],
    };
  },
  methods: {
    handleDelete(val) {
      console.log(val);
    },
  },
};
</script>

<style>

</style>
