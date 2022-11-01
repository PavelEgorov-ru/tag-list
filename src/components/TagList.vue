<template>
  <v-card class="card">
    <v-chip
      v-for="(chip, index) in chips"
      :key="index"
      class="ma-2"
      color="grey lighten-1"
      text-color="black"
    >
      <v-avatar v-if="chip.icon" left>
        <v-icon>{{ chip.icon }}</v-icon>
      </v-avatar>
      {{ chip.name }}
    </v-chip>
  </v-card>
</template>

<script>
export default {
  name: "TagList",
  props: {
    chips: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  overflow: hidden;
}
</style>
