<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-btn>Texto</v-btn>

        <v-btn color="primary">Texto</v-btn>

        <v-btn dark color="blue">Texto</v-btn>

        <v-btn color="secondary" text>Sin Fondo</v-btn>

        <v-btn color="warning" large>Largo</v-btn>

        <v-btn color="warning" small>Pequeño</v-btn>

        <v-btn color="warning" small disabled>Deshabilitado</v-btn>

        <v-btn>
          <v-icon>mdi-forum</v-icon>
        </v-btn>

        <v-btn color="primary">
          <v-icon>mdi-forum</v-icon>
        </v-btn>

        <v-btn color="primary" icon text>
          <v-icon>mdi-forum</v-icon>
        </v-btn>

        <v-btn color="primary" fab>
          <v-icon>mdi-forum</v-icon>
        </v-btn>

        <v-btn color="primary" fab small>
          <v-icon>mdi-forum</v-icon>
        </v-btn>

        <v-btn color="primary" fab large>
          <v-icon>mdi-forum</v-icon>
        </v-btn>

        <v-btn color="success">
          Texto
          <v-icon>mdi-forum</v-icon>
        </v-btn>

        <v-btn color="success">
          Texto
          <v-icon class="ml-2">mdi-forum</v-icon>
        </v-btn>

        <v-btn color="success" outlined>
          Texto
          <v-icon class="ml-2">mdi-forum</v-icon>
        </v-btn>

        <v-btn color="success" outlined block>
          Texto
          <v-icon class="ml-2">mdi-forum</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
