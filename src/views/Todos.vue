<template>
  <v-container fluid class="todos">
    <v-row>
      <v-col cols="12">
        <TodoTitle></TodoTitle>
      </v-col>
      <v-col cols="12" class="input-todo">
        <v-text-field
          background-color="white"
          color="teal lighten-1"
          :label="label"
          v-model="todoContent"
          solo
          hide-details
          @keypress.enter.native="addTodo">
        </v-text-field>
      </v-col>
      <v-col cols="12" class="filter">
        <TodoFilter></TodoFilter>
      </v-col>
      <v-col cols="12" class="list">
        <TodoList
          :todoList="renderList"
          @delete-item="deleteTodo"
          @edit-item="editTodo">
        </TodoList>
      </v-col>
      <v-col cols="12">
        <v-footer dark>
          <v-spacer></v-spacer>
          <div>&copy; Edited by Davis</div>
        </v-footer>
      </v-col>
    </v-row>
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
      if (this.$route.path === '/undone') {
        return this.undoneTodo
      } else if (this.$route.path === '/done') {
        return this.doneTodo
      } else {
        return this.todoList
      }
    },
    undoneTodo () {
      return this.todoList.filter(todo => {
        return !todo.isDone
      })
    },
    doneTodo () {
      return this.todoList.filter(todo => {
        return todo.isDone
      })
    }
  },
  beforeDestroy () {
    localStorage.clear()
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
  background-color: #424242;
}
.filter {
  padding-top: 0px;
}
.input-todo {
  padding-bottom: 0px;
}
.v-text-field {
  &--solo {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
}
.list {
  height: calc(100vh - 291px);
  overflow: auto;
}
</style>