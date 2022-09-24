<template>
  <v-app-bar  app light elevation="10" elevate-on-scroll color="white">
    <v-app-bar-title
      ><img class="er" src="../assets/az.jpg" />Mindfitness</v-app-bar-title
    >
    <v-spacer></v-spacer>

    <router-link to="/Home" custom v-slot="{ navigate, href }">
      <v-btn text rounded :href="href" @click="navigate">home</v-btn>
    </router-link>

    <router-link to="/about" v-slot="{ navigate, href }">
      <v-btn text rounded :href="href" @click="navigate">About us</v-btn>
    </router-link>
    <router-link to="/contactus" v-slot="{ navigate, href }">
      <v-btn text rounded :href="href" @click="navigate">report error</v-btn>
    </router-link>

    <v-btn text>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-autocomplete
      clearable
      hide-no-data
      hide-selected
      color="black"
      label="search"
      flat
    ></v-autocomplete>
    <v-spacer></v-spacer>

    <router-link to="/regiter" v-slot="{ navigate, href }">
      <v-btn
        outlined
        class="mr-3"
        color="success"
        :href="href"
        @click="navigate"
        >Register</v-btn
      >
    </router-link>

    <router-link to="/HelloWorld" v-slot="{ navigate, href }">
      <v-btn outlined color="black" :href="href" @click="navigate">Login</v-btn>
    </router-link>

    <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on, attrs }">
        <span
          v-bind="attrs"
          v-on="on"
          style="cursor: pointer"
          class="mx-5 mr-5"
        >
          <v-badge offset-x="10" offset-y="10" color="red" content="3">
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </span>
      </template>
      <v-list width="250">
        <template v-for="(item, index) in items">
          <v-subheader
            v-if="item.header"
            :key="item.header"
            v-text="item.header"
          ></v-subheader>

          <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
          ></v-divider>

          <v-list-item v-else :key="item.title">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-html="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-menu>

    <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on, attrs }">
        <span v-bind="attrs" v-on="on" style="cursor: pointer">
          <v-badge bordered bottom color="green" dot offset-x="10" offset-y="10"
            ><v-avatar size="40">
              <v-img
                src="https://cdn.vuetifyjs.com/images/lists/2.jpg"
              ></v-img> </v-avatar
          ></v-badge>
        </span>
      </template>

      <v-list dark width="250">
        
        <v-list-item link v-for="(profil,index) in profile" :key="index" :to="profil.route" >
       
          <v-list-item-title v-text="profil.title">
            
          </v-list-item-title>
        </v-list-item>
       
      </v-list>
    </v-menu>

  
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
  
   profile: [{title:"Profile",route:"/profile"},{title:"Logout",route:"/HelloWorld"}],

    items: [
      { header: "Today" },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle:
          '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      },
    ],
  }),
};
</script>


<style scoped>
v-bar-title {
  font-size: 20px;
  font-family: cursive;
  font-weight: 600;
  color: seagreen;
}
.er {
  width: 40px;
  margin-right: 8px;
}
</style>





  
   
  
   