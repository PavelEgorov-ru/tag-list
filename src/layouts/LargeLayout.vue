<template>
  <v-container class="container">
    <TagList :chips="chips" />
  </v-container>
</template>

<script>
import TagList from "@/components/TagList.vue";
import { chips } from "@/data/dataIcons";
export default {
  name: "LargeLayout",
  components: {
    TagList,
  },
  data() {
    return {
      chips: chips,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: aqua;
  height: 100px;
}
</style>
