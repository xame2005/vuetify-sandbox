<template>
  <v-app>
    <vertical-navbar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Grid from "@/views/Grid";
import VerticalNavbar from "@/views/VerticalNavbar";

export default {
  name: "App",

  components: {
    Grid,
    VerticalNavbar,
  },

  data: () => ({
    VerticalNavbar,
    drawer: true,
  }),
};
</script>
