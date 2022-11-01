<template>
  <v-card class="card">
    <div v-for="(chip, index) in chips" :key="index" class="chip">
      <div v-if="index !== 0" class="divider"></div>
      <v-chip class="ma-2" color="grey lighten-1" text-color="black">
        <v-avatar v-if="chip.icon" left>
          <v-icon>{{ chip.icon }}</v-icon>
        </v-avatar>
        {{ chip.name }}
      </v-chip>
    </div>
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
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 20px;
  overflow: hidden;
}

.chip {
  display: flex;
  align-items: center;
}

.divider {
  width: 5px;
  height: 5px;
  background-color: black;
}
</style>
