<template>
  <div>AAAAAAA</div>
  <!-- <TodoList
    :todoList="allTodo"
    @delete-item="deleteTodo"
    @edit-item="editTodo">
  </TodoList> -->
</template>

<script>
export default {
  name: 'all',
  data: () => ({
    todoList: []
  }),
  watch: {
    todoList: {
      handler (todos) {
        localStorage.setItem('todo', JSON.stringify(todos))
      },
      deep: true
    }
  },
  computed: {
    allTodo () {
      return this.todoList
    }
  },
  mounted () {
    this.todoList = JSON.parse(localStorage.getItem('todo'))
  },
  methods: {
    editTodo (item) {
      this.todoList[this.todoList.indexOf(item.target)].text = item.content
    },
    deleteTodo (item) {
      this.todoList.splice(this.todoList.indexOf(item), 1)
    }
  }
}
</script>