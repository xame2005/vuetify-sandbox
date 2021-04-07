<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex md7 class="mb-3">
        <v-card class="mt-4" v-for="(item, index) in todoList" :key="index">
          <v-card-text>
            <v-chip label color="pink" text-color="white">
              <v-icon left>mdi-label</v-icon>{{ item.title }}
            </v-chip>
            <p>
              {{ item.description }}
            </p>
          </v-card-text>
          <v-btn color="warning" class="ml-4 mb-2" @click="edit(index)"
            >Editar</v-btn
          >
          <v-btn color="error" class="ml-4 mb-2" @click="deleteTask(item.id)"
            >Eliminar</v-btn
          >
        </v-card>
      </v-flex>
      <v-flex md5 v-if="formAdd">
        <v-card class="mb-3 pa-3">
          <v-form @submit.prevent="addTask">
            <v-text-field label="Título de la tarea" v-model="title">
            </v-text-field>
            <v-textarea label="Descripción de la tarea" v-model="description">
            </v-textarea>
            <v-btn color="success" block type="submit">Agregar tarea</v-btn>
          </v-form>
        </v-card>
      </v-flex>

      <v-flex md5 v-if="!formAdd">
        <v-card class="mb-3 pa-3">
          <v-form @submit.prevent="editTask">
            <v-text-field label="Título de la tarea" v-model="title">
            </v-text-field>
            <v-textarea label="Descripción de la tarea" v-model="description">
            </v-textarea>
            <v-btn color="warning" block type="submit">Editar tarea</v-btn>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
    <v-snackbar v-model="snackbar">
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      todoList: [
        {
          id: 1,
          title: "Tarea #1",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit porro deserunt architecto maxime rem enim laborum repudiandae ullam, sed corrupti eligendi, in ipsum quod ex modi velit ipsam itaque autem!",
        },
        {
          id: 2,
          title: "Tarea #2",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit porro deserunt architecto maxime rem enim laborum repudiandae ullam, sed corrupti eligendi, in ipsum quod ex modi velit ipsam itaque autem!",
        },
      ],
      title: "",
      description: "",
      snackbar: false,
      message: "",
      formAdd: true,
      taskIndex: "",
    };
  },
  methods: {
    addTask() {
      if (this.title === "" || this.description === "") {
        this.snackbar = true;
        this.message = "Llena todos los campos";
      } else {
        this.todoList.push({
          id: Date.now(),
          title: this.title,
          description: this.description,
        });
        (this.title = ""),
          (this.description = ""),
          (this.snackbar = true),
          (this.message = "Tarea Agregada");
      }
    },

    deleteTask(id) {
      console.log(id);
      this.todoList = this.todoList.filter((e) => e.id != id);
    },

    edit(index) {
      this.formAdd = false;
      this.title = this.todoList[index].title;
      this.description = this.todoList[index].description;
      this.taskIndex = index;
    },

    editTask() {
      this.todoList[this.taskIndex].title = this.title;
      this.todoList[this.taskIndex].description = this.description;
      this.formAdd = true;
      this.title = "";
      (this.description = ""),
        (this.snackbar = true),
        (this.message = "Tarea editada!");
    },
  },
};
</script>

<style lang="scss" scoped></style>
