<template>
  <div>
    <v-app-bar class="warning">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <h1>Vuetify</h1>
      <v-spacer />
      <v-btn class="success">Ingreso</v-btn>
      <v-btn class="error">Salir</v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" temporary dark>
      <v-layout mt-4 column align-center>
        <v-flex>
          <v-avatar>
            <img
              src="https://randomuser.me/api/portraits/women/75.jpg"
              alt="avatar image"
            />
          </v-avatar>
        </v-flex>
        <v-flex xs1>
          <p class="white--text mt-3 headline">Juanito Perez</p>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: true,
    };
  },
};
</script>

<style lang="scss" scoped></style>
