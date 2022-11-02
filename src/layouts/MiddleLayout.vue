<template>
  <v-container class="container">
    <TagList :chips="chips" />
  </v-container>
</template>

<script>
import TagList from "@/components/TagList.vue";
import { chips } from "@/data/dataIcons";
export default {
  name: "MiddleLayout",
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
  max-width: 700px;
  background-color: brown;
  height: 80px;
}
</style>
