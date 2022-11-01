<template>
  <v-container class="container">
    <TagList :chips="chips" />
  </v-container>
</template>

<script>
import TagList from "@/components/TagList.vue";
import { chips } from "@/data/dataIcons";
export default {
  name: "SmallLAyout",
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
  max-width: 300px;
  background-color: burlywood;
  height: 80px;
}
</style>
