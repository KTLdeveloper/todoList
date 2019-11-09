<template>
  <v-container fluid class="todos">
    <v-layout column>
      <TodoTitle></TodoTitle>
      <v-text-field
        background-color="white"
        color="teal lighten-1"
        :label="label"
        v-model="todoContent"
        solo
        @keypress.enter.native="addTodo">
      </v-text-field>
      <TodoList
        :todoList="renderList"
        @delete-item="deleteTodo"
        @edit-item="editTodo"
      ></TodoList>
      <v-footer dark>
        <v-spacer></v-spacer>
        <div>&copy; Edited by Davis</div>
      </v-footer>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Todos',
  data: () => ({
    label: 'Add your todo',
    todoContent: '',
    todoList: []
  }),
  computed: {
    renderList () {
      return this.todoList
    }
  },
  methods: {
    addTodo () {
      if (this.todoContent.length) {
        this.todoList.push({
          isDone: false,
          text: this.todoContent
        })
        this.todoContent = ''
      }
    },
    editTodo (item) {
      this.todoList[this.todoList.indexOf(item.target)].text = item.content
    },
    deleteTodo (item) {
      this.todoList.splice(this.todoList.indexOf(item), 1)
    }
  }
};
</script>

<style lang="scss" scoped>
.todos {
  background-color: #434647;
}
</style>