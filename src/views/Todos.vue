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
          label="Add your new todo"
          v-model="todoContent"
          solo
          hide-details
          @keypress.enter.native="addTodo"
        >
        </v-text-field>
      </v-col>
      <v-col cols="12" class="filter">
        <TodoFilter></TodoFilter>
      </v-col>
      <v-col cols="12" class="list">
        <router-view></router-view>
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
    todoContent: ''
  }),
  methods: {
    addTodo () {
      this.$store.commit('todo/addTodo', this.todoContent)
      this.todoContent = ''
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