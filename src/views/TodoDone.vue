<template>
  <TodoList :renderList="renderList"/>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'done',
  computed: {
    ...mapGetters({
      doneTodoList: 'todo/doneTodo' 
    }),
    renderList () {
      return this.doneTodoList
    }
  },
}
</script>