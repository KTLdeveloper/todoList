<template>
  <TodoList :renderList="renderList"/>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DoneTodo',
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