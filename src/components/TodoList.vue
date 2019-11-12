<template>
  <div class="todolist">
    <v-list
      v-show="renderList.length"
      dense
    >
      <v-list-item
        v-for="(item, index) in renderList"
        :key="index"
      >
        <v-list-item-icon>
          <v-checkbox
            v-model="item.isDone"
            color="success"
            hide-details
            dense
            :ripple="false"
            @change="$store.commit('todo/setItem', renderList)"
          >
          </v-checkbox>
        </v-list-item-icon>

        <v-list-item-content>
          <label
            :class="{ 'todo-done': item.isDone, 'todolist-editing': item === editedItem }"
            @dblclick="editedItem = item; editedTextCache = item.text;"
          >
            {{item.text}}
          </label>
          <input
            :class="{ 'todolist-edit': true, 'todolist-editing': item !== editedItem}"
            v-focus="item === editedItem"
            type="text"
            v-model="editedTextCache"
            @change="doneEdit(index)"
            @keyup.enter="doneEdit(index)"/>
        </v-list-item-content>

        <v-list-item-avatar>
          <v-btn
            text 
            color="red lighten-1" 
            @click="$store.commit('todo/removeTodo', index)"
          >
            Remove
          </v-btn>
        </v-list-item-avatar>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  },
  props: {
    renderList: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    editedItem: null,
    editedTextCache: null
  }),
  methods: {
    doneEdit (index) {
      if (this.editedItem.text !== this.editedTextCache) {
        if (!this.editedTextCache.length) {
          this.$store.commit('todo/removeTodo', index)
        } else {
          this.$store.commit('todo/editTodo', {
            target: index,
            content: this.editedTextCache
          })
        }
      }

      this.editedItem = null
      this.editedTextCache = null
    }
  }
};
</script>

<style lang="scss" scoped>
.todolist {
  height: calc(100vh - 315px);
  overflow: auto;
  &-edit {
    border: 2px solid gray;
    height: inherit;
  }
  &-editing {
    display: none;
  }
}
.v-list {
  &-item {
    &__title, &__content {
      display: flex;
      align-items: center;
      padding: 0px !important;
      max-width: 90%;
      font-size: 18px !important;
      height: 50px;
    }
  }
  .v-input {
    &--selection-controls {
      margin: 0px;
      padding-top: 10px;
    }
  }
}
.todo-done{
  text-decoration: line-through;
  color: gray;
}
</style>