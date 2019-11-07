<template>
  <div>
    <v-banner single-line v-for="item in todoList" :key="item.text">
      {{item.text}}
      <template v-slot:actions>
        <v-btn text color="blue lighten-1">Edit</v-btn>
        <v-btn text color="red lighten-1">Delete</v-btn>
      </template>
      <template v-slot:icon>
        <v-checkbox v-model="item.isDone" color="success" hide-details dense :ripple="false"></v-checkbox>
      </template>
    </v-banner>
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
  })
};
</script>

<style lang="scss" scoped>
.v-banner {
  &__icon {
    .v-input--selection-controls {
      margin: 0px;
      padding: 0px;
    }
  }
}
</style>