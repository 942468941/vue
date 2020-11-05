<template>
  <div>
    <ul>
      <li
      :class='item.finish?"green":"red"'
       v-for="(item, index) in showlist" :key="index">{{ item.msg }}
       <button @click="del(index)">删除</button>
       <span v-if="item.finish">已完成</span>
       <button v-else @click="update(index)">完成</button>
       </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  mounted() {
    console.log(this);
  },
  computed: {
    ...mapState({ list: (state) => state.todolist.list }),
    ...mapGetters({showlist:'todolist/showList'})
  },
  methods:{
    ...mapMutations(['todolist/delList','todolist/updateList']),
    del(index){
      console.log(index)
      this['todolist/delList'](index);
    },
    update(index){
       this['todolist/updateList']({index});
    }
  }
};
</script>
<style>
  .red{
    background:#ccc;
  }
  .green{
    background:rgb(14, 152, 207);
  }
</style>