<template>
  <div class="todoList">
    <v-list
    v-show="todoList.length"
    dense
    >
      <v-list-item
        v-for="item in todoList"
        :key="item.text"
      >
        <v-list-item-icon>
          <v-checkbox v-model="item.isDone" color="success" hide-details dense :ripple="false"></v-checkbox>
        </v-list-item-icon>

        <v-list-item-content>
          <label v-show="!item.isEdit" @dblclick="editTodo(item)">{{item.text}}</label>
          <input
          v-show="item.isEdit"
          v-focus="item.isEdit"
          type="text"
          v-model="item.text" 
					@keyup.enter="doneEdit(item)"/>
          <!-- <v-list-item-title v-text="item.text" :class="{todoDone: item.isDone}"></v-list-item-title> -->
        </v-list-item-content>

        <v-list-item-avatar>
          <v-btn text color="red lighten-1" @click="deleteTodo(item)">Delete</v-btn>
        </v-list-item-avatar>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    todoList: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    editedTodo: null
  }),
  methods: {
    deleteTodo (item) {
      this.todoList.splice(this.todoList.indexOf(item), 1)
    },
    doneEdit (item){
			if (!this.editedTodo) {
				return
			}
      this.editedTodo = null
			if (!item.text.length) {
        this.deleteTodo(item)
      }
		},
    editTodo (item){
      item.isEdit = true
			this.beforeEditCache = item.text
		}
  },
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
}
};
</script>

<style lang="scss" scoped>
.todoList {
  height: calc(100vh - 213px);
  overflow: auto;
}
.v-list {
  &-item {
    &__title, &__content {
      display: flex;
      align-items: center;
      padding: 0px !important;
      max-width: 1100px;
      font-size: 18px !important;
      height: 25px;
    }
  }
  .v-input {
    &--selection-controls {
      margin: 0px;
      padding-top: 10px;
    }
  }
}
.todoDone{
  text-decoration: line-through;
  color: gray;
}
</style>