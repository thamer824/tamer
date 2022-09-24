<template>
    <v-app>
     <v-content>
       <v-card width="500" class="mx-auto ">
        <v-card-title> Register </v-card-title>
         <v-card-text>
             <v-text-field label="name"></v-text-field>
             <v-text-field label="last name"></v-text-field>
             <v-text-field label="username"></v-text-field>
             <v-text-field label="password" prepend-icon="mdi-lock" append-icon="mdi-eye-off" ></v-text-field>
             <v-text-field label="reset password" prepend-icon="mdi-lock" append-icon="mdi-eye-off"></v-text-field>
          
      </v-card-text>
      

      <v-divider></v-divider>
       <v-card-actions>
         <v-btn color="success"> register</v-btn>
         
       </v-card-actions>

        </v-card>

     </v-content>


    </v-app>







</template>






<script>


export default ({
  
})
</script>
