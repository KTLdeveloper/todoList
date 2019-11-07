<template>
  <v-container fluid>
    <v-layout column>
      <TodoTitle></TodoTitle>
      <v-text-field :label="label" v-model="content" outlined @keypress.enter.native="addTodo(content)">
        <!-- <template v-slot:prepend>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on">mdi-help-circle-outline</v-icon>
            </template>
            I'm a tooltip
          </v-tooltip>
        </template>-->
      </v-text-field>
      <TodoList :todoList="todoList"></TodoList>
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
</style>