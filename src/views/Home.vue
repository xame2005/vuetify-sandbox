<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-card>
          <v-img
            src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
          >
            <v-container fill-height>
              <v-layout row wrap>
                <v-flex>
                  <span class="headline white--text">Lorem, ipsum dolor.</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title><h2>Lorem, ipsum dolor.</h2></v-card-title>
          <v-card-text
            ><p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              harum similique! Velit nostrum possimus commodi itaque
              necessitatibus, perspiciatis explicabo unde incidunt quo quae
              harum expedita quibusdam pariatur aperiam blanditiis quia.
            </p></v-card-text
          >
          <v-card-actions>
            <v-btn color="info flat">text</v-btn></v-card-actions
          >
        </v-card>
      </v-flex>
      <v-flex xs12 sm6>
        <v-card>
          <v-img
            src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
          >
          </v-img>
          <v-card-title><h2>Lorem, ipsum dolor.</h2></v-card-title>
          <v-card-text
            ><p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              harum similique! Velit nostrum possimus commodi itaque
              necessitatibus, perspiciatis explicabo unde incidunt quo quae
              harum expedita quibusdam pariatur aperiam blanditiis quia.
            </p></v-card-text
          >
          <v-card-actions>
            <v-btn color="info flat" @click="dialog = !dialog"
              >text</v-btn
            ></v-card-actions
          >
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" width="500" persistent>
      <v-card>
        <v-card-title> <h2>Título</h2></v-card-title>
        <v-card-text>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            sapiente alias inventore officiis minima delectus numquam esse
            consequatur adipisci quas tempora ab exercitationem consequuntur
            doloribus nobis natus labore, perspiciatis aut?
          </p></v-card-text
        >
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn @click="dialog = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
