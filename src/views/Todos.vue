<template>
    <v-container fluid class="todos">
        <v-row class="mx-auto">
            <v-col cols="12">
                <h1 class="todos-title">TODOS</h1>
            </v-col>
            <v-col cols="12" class="todos-input">
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
            <v-col cols="12" class="todos-filter">
                <TodoFilter></TodoFilter>
            </v-col>
            <v-col cols="12" class="todos-list">
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
        todoContent: '',
        todoIndex: 0
    }),
    methods: {
        addTodo() {
            this.$store.commit('todo/addTodo', {
                index: this.todoIndex++,
                content: this.todoContent
            })
            this.todoContent = ''
        }
    }
}
</script>

<style lang="scss" scoped>
.todos {
    height: 10000px;
    background-color: #424242;
    &-title {
        color: #af2f2f;
        display: flex;
        justify-content: center;
        font-size: 50px;
    }
    &-filter {
        padding-top: 0px;
    }
    &-input {
        padding-bottom: 0px;
    }
    &-list {
        height: calc(100vh - 291px);
        overflow: auto;
    }
}
.v-text-field {
    &--solo {
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
    }
}
</style>
