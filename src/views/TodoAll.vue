<template>
    <TodoList :renderList="renderList" />
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'AllTodo',
    computed: {
        ...mapState({
            allTodoList: state => state.todo.todoStorage
        }),
        renderList() {
            return this.allTodoList
        }
    }
}
</script>
