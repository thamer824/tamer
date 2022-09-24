<template>
  <div class="fixed">
    <v-menu open-on-hover top offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn rounded v-on="on" v-bind="attrs" dark class="changewith mb-3"
          >help ?</v-btn
        >
      </template>

      <v-list>
        <v-list-item link v-for="(item,index) in items" :key="index" :to="item.route">
            
          <v-list-title v-text="item.title"> </v-list-title>
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer1: null,
    items: [
      { title: "Profile ", route: "/profile", icon: "mdi-chevron-right" },
      { title: "Edit Profile", route: "/profileD", icon: "mdi-chevron-right" },
      {
        title: "Visit Our Help Center",
        route: "/profileD",
        icon: "mdi-chevron-right",
      },
    ],
  }),
};
</script>

<style >
.v-btn:not(.v-bnt--round).v-size--default.chnagewith {
  height: 100px !important;
  min-width: 30px !important;
  padding: 0 12px;
}
.fixed{
  
  position: fixed;
  bottom: 16px;
  right: 100px;
 width: 50px;
 height: 50px;

}
</style>