<template>
  <v-container >
    <Sidebar />
    
    <v-row>
      <v-col>
    
        <h2>Your Courses</h2>
        <h5 class="mt-5">Recent</h5>

        <v-slide-group
          v-model="model"
          class="pa-4"
          active-class="success"
          show-arrows
        >
          <v-slide-item v-for="n in 10" :key="n" v-slot="{ active, toggle }">
            <v-card
              :color="active ? undefined : 'grey lighten-1'"
              class="ma-4"
              height="200"
              width="100"
              @click="toggle"
            >
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="9">
        <h5>doanloaded content</h5>
       <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card
          color="basil"
          flat
        >
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
      </v-col>
    </v-row>
    <br><br><br><br><br><br><br><br>  
  </v-container>
</template>

<script>
import Sidebar from "../components/sidebar.vue";
export default {
  components: { Sidebar },
  methods: {
    close() {
      this.drawer = !this.drawer;
    },
  },
  data: () => ({
    model:null,
    cards: ["Today", "Yesterday"],
    drawer: true,
    tab: null,
    items: ["All", "Photos", "Folders", "Videos"],
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  }),
};
</script>
<style>
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>