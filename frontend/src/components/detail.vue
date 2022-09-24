<template>
  <v-container>
    <v-tooltip bottom color="success">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="success"
          dark
          v-bind="attrs"
          v-on="on"
        >
          success
        </v-btn>
      </template>
      <span>Success tooltip</span>
    </v-tooltip>

    <modal class="dd" name="hello"> 

    </modal>


<template>
  <div class="text-center ma-2">
    <v-btn
      dark
      @click="snackbar = true"
    >
      Open Snackbar
    </v-btn>
    <v-snackbar
      v-model="snackbar"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

  </v-container>
  
</template>




<script>
export default {
  methods: {
    show() {
      this.$modal.show("hello");
    },
    hide() {
      this.$modal.hide("hello");
    },
  },
  data() {
    return {
      dialog: false,
      showModal: false,
      snackbar: false,
      text: `Hello, I'm a snackbar`,
    };
  },
};
</script>




