<template>
  <div class="filter-block">
    <v-btn
      text
      color="red lighten-2"
      @click="$router.replace('/all')"
      :ripple="false"
    >
      All
    </v-btn>
    <v-btn
      text
      color="red lighten-2"
      @click="$router.replace('/undone')"
      :ripple="false"
    >
      Undone
    </v-btn>
    <v-btn
      text
      color="red lighten-2"
      @click="$router.replace('/done')"
      :ripple="false"
    >
      Done
    </v-btn>
  </div>
</template>

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