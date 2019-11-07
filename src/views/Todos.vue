<template>
  <v-container fluid class="todos">
    <v-layout column>
      <TodoTitle></TodoTitle>
      <v-text-field
      background-color="white"
      color="teal lighten-1"
      :label="label"
      v-model="content"
      solo
      @keypress.enter.native="addTodo(content)">
      </v-text-field>
      <TodoList :todoList="todoList"></TodoList>
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
    label: 'input your todo',
    content: '',
    todoList: []
  }),
  methods: {
    addTodo (val) {
      if (val.length) {
        this.todoList.push({
          isDone: false,
          text: val
        })
        this.content = ''
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.todos {
  background-color: #434647;
}
</style>