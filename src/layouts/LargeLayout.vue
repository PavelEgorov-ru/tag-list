<template>
  <v-container class="container">
    <TagList />
  </v-container>
</template>

<script>
import TagList from "@/components/TagList.vue";
export default {
  name: "LargeLayout",
  components: {
    TagList,
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: aqua;
}
</style>
