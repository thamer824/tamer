<template>
  <div class="sidebar">
      <v-navigation-drawer class="e" app>
        <v-img src="../assets/az.jpg" class="pa">
          <div class="text-center">
            <v-avatar class="mb-4" color="grey darken-1" size="64"
              ><v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img
            ></v-avatar>

            <div>thamer@medtech.tn</div>
          </div>
        </v-img>

        <v-divider></v-divider>

        <v-list>
          <v-list-item v-for="[icon, text,route] in links" :key="icon" link :to="route">
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
   </div>
</template>
<script>
export default {
  data: () => ({
    cards: ["Today", "Yesterday",],


    links: [
      ["mdi-account", "Profile","/profile"],
      ["mdi-send", "Inbox","/Inbox"],
      ["mdi-delete", "Trash","/trash"],
      ["mdi-alert-octagon", "System Settings","/profileD"],
      
    ],
  }),
 
};
</script>
<style>
.pa {
  width: 170px;
  margin-left: 40px;
}

</style>