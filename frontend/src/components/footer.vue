<template>
  <v-footer
    dark
    padless
  >
    <v-card
    width="100%"
      flat
      tile
      class=" lighten-1 white--text text-center"
    >

      <v-card-text>
          
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text">
            all rights are reserved
      </v-card-text>

     
      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Mindfitness</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>


<style scoped>
 strong{
    font-size: x-large;
    font-family: monospace;
}
.ee{
 font-size: x-large;
    font-family: monospace;
}
</style>
