<template>
  <div class="filter-block">
    <v-btn
      text
      color="red lighten-2"
      @click="$router.replace('/all')"
      :ripple="false"
    >
      All ({{allTodoCount}})
    </v-btn>
    <v-btn
      text
      color="red lighten-2"
      @click="$router.replace('/undone')"
      :ripple="false"
    >
      Undone ({{undoneTodoCount}})
    </v-btn>
    <v-btn
      text
      color="red lighten-2"
      @click="$router.replace('/done')"
      :ripple="false"
    >
      Done ({{doneTodoCount}})
    </v-btn>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'TodoFilter',
  computed: {
    ...mapState({
      allTodoList: state => state.todo.todoStorage
    }),
    ...mapGetters({
      undoneTodoList: 'todo/undoneTodo',
      doneTodoList: 'todo/doneTodo'
    }),
    allTodoCount () {
      return this.allTodoList.length
    },
    undoneTodoCount () {
      return this.undoneTodoList.length
    },
    doneTodoCount () {
      return this.doneTodoList.length
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-block {
  background-color: white;
  display: flex;
  justify-content: center;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14);
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
</style>