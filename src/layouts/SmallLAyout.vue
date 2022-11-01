<template>
  <v-container class="container">
    <TagList />
  </v-container>
</template>

<script>
import TagList from "@/components/TagList.vue";
export default {
  name: "SmallLAyout",
  components: {
    TagList,
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 300px;
  background-color: burlywood;
}
</style>
