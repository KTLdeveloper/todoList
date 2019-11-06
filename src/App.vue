<template>
  <v-app>
    <TodoTitle></TodoTitle>
    <v-text-field
      :label="label"
      v-model="content"
      solo
    ></v-text-field>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    label: 'input your todo',
    content: ''
  }),
};
</script>

<style lang="scss" scoped>

</style>