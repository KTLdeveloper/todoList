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
          <label
            :class="{ todoDone: item.isDone, editing: item == editedItem }"
            @dblclick="editedItem = item; editedTextCache = item.text;">
          {{item.text}}</label>
          <input
            :class="{ edit: true, editing: !editedItem}"
            v-focus="item === editedItem"
            type="text"
            v-model="editedTextCache"
            @keyup.enter.native="doneEdit(item)"/>
        </v-list-item-content>

        <v-list-item-avatar>
          <v-btn text color="red lighten-1" @click="deleteItem(item)">Delete</v-btn>
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
    editedItem: null,
    editedTextCache: null
  }),
  methods: {
    deleteItem (item) {
      this.$emit('delete-item', item)
    },
    doneEdit (item){
      this.$emit('edit-item', {
        target: item,
        content: this.editedTextCache
      })
      this.editedItem = null
      if (!this.editedTextCache.length) {
        this.$emit('delete-item', item)
      }
      this.editedTextCache = null
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
.edit {
  border: 2px solid gray;
  height: inherit;
}
.editing {
  display: none;
}
.todoDone{
  text-decoration: line-through;
  color: gray;
}
</style>