<template>



  <v-app :style="image">


   <v-content>

     <v-card width="500" class="mx-auto mt-9">
       <v-card-title> Hello student! </v-card-title>
       <v-card-text>
          <v-text-field label="username" prepend-icon="mdi-account-circle"></v-text-field>
          
          <v-text-field label="password" :type="sp ? 'text':'password'" prepend-icon="mdi-lock" :append-icon="sp ?  'mdi-eye': 'mdi-eye-off'" @click:append="sp=!sp"></v-text-field>
      </v-card-text>
      

      <v-divider></v-divider>
       <v-card-actions>
         <v-btn color="success"> register</v-btn>
          <v-btn color="info"> login</v-btn>
       </v-card-actions>
      
      
    </v-card>
   
   </v-content>
   
 
   
   
  </v-app>
</template>
<script>


export default ({
  data() {
    return { 
      sp: false ,
      image: { backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA6xOLhJmOjhQjqHsuCPSL1-_2RCbCve1keg&usqp=CAU)" }
    }
  },
  
})
</script>