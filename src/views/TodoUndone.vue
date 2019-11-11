<template>
  <TodoList :renderList="renderList"/>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'undone',
  computed: {
    ...mapGetters({
      undoneTodoList: 'todo/undoneTodo'
    }),
    renderList () {
      return this.undoneTodoList
    }
  },
}
</script>