<template>
  <v-container>
    <v-card>
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
  </v-container>
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
  // data() {
  //   return {
  //     chips: [
  //       {
  //         icon: "mdi-account-circle",
  //         name: "Mike",
  //       },
  //       {
  //         // icon: "mdi-account-circle",
  //         name: "Mike",
  //       },
  //       {
  //         icon: "mdi-account-circle",
  //         name: "Mike",
  //       },
  //     ],
  //   };
  // },
};
</script>
