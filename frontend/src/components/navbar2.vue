<template>
    <v-app>

        <v-app-bar  app style="padding: 0px 90px" elevation="10" elevate-on-scroll  color="white" light >
           <v-toolbar-title>dd</v-toolbar-title>
           <v-spacer></v-spacer>
           <v-list class="d-flex align-center">
               <v-list-item  v-for="(menu,index) in menus" :key="index" :to="menu.route">
                   <v-list-item-title>{{menu.title}}</v-list-item-title>
               </v-list-item>
           </v-list>
        </v-app-bar>
    </v-app>
</template>
<script>


export default ({
   data(){
       return{
           menus:[{title:"tamer",route:"about"},{title:"ahmed",route:"contactus"}],
           
       }
   }
})
</script>
