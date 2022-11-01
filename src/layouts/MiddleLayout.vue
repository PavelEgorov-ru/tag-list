<template>
  <v-container class="container">
    <TagList />
  </v-container>
</template>

<script>
import TagList from "@/components/TagList.vue";
export default {
  name: "MiddleLayout",
  components: {
    TagList,
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 700px;
  background-color: brown;
}
</style>
