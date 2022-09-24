<template>



<v-container>
    <Sidebar/>

  <h2>Trash</h2>
  <br>
<v-tabs v-model="tab"  
      color="basil"
      >
    <v-tab v-for="item in items" :key="item">
        {{item.name}}

    </v-tab>
</v-tabs>
<v-tabs-items v-model="tab">
    <v-tab-item  v-for="item in items"
        :key="item">
      
      <img class="center" src="./../assets/trash.png"/>

      <h5 class="e">There's nothing here</h5>
      <p  class="e">Any {{item.trash}} you delete will end up here</p>
      <br><br>
      
    </v-tab-item>

</v-tabs-items>

</v-container>




</template>



<script>
import Sidebar from './sidebar.vue'
export default {
    components : {Sidebar}  , 
    data () {
      return {
        tab: null,
        items: [
          {name:'Videos',trash:' Videos'},{name:'Lectures',trash:' Lectures'},{name:'Folders',trash:' Folders'}, {name:'Quizes',trash:' Quizes'},
        ],
        image: ["./../assets/trash.png"],

        trashs :[' Videos' , 'Folders', 'lectures', 'quizes']
      }
    },
    
}
</script>

<style >
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  margin-top: 50px;
   margin-bottom: 50px;
}
.e{
     text-align: center;
     
}
/* Helper classes */
.basil {
  background-color: #FFFBE6 !important;
}
.basil--text {
  color: #356859 !important;
}

</style>