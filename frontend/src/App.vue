<template>
  <v-app>
     <Navbar  v-if="!navigation"/>
  
      <v-main>
        <router-view/>
       
      
    </v-main>
    <Footer  v-if="!navigation"/>
   <RightSideBar/>
  </v-app>
</template>


<script>
import Navbar from './components/Navbar';
import Footer from './components/footer';
import RightSideBar from './components/rightSideBar';
//import about from './components/about'
//import navbar2 from './components/navbar2';

export default {
components:{
  Navbar,Footer , RightSideBar
 
  },
 data(){
   return {
     navigation : null ,
     drawer : false,
     aze: null,
   }
 },
 created(){
   this.checkRoutes();
 

 },
 mounted(){},
 methods:{
   checkRoutes(){
      if(this.$route.name === "helloworld" || this.$route.name === "register" ){
        this.navigation= true;
        return;
      }this.navigation=false;

   },
   
   

 },
 watch:{
   $route(){
     this.checkRoutes();
   }
 },


}

</script>

<style >

</style>