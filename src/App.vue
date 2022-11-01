<template>
  <v-app>
    <LargeLayout />
    <MiddleLayout />
    <SmallLAyout />
  </v-app>
</template>

<script>
import LargeLayout from "./layouts/LargeLayout.vue";
import MiddleLayout from "./layouts/MiddleLayout.vue";
import SmallLAyout from "./layouts/SmallLAyout.vue";
export default {
  name: "App",

  components: {
    LargeLayout,
    MiddleLayout,
    SmallLAyout,
  },
};
</script>
