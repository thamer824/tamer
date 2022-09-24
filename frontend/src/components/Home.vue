<template>
  <v-container class="pt-15">
    <v-row>
      <v-col lg="6">
        <br /><br />
        <h2 class="intro-text">Mindtfitness E-learening</h2>

        <p class="description">
          Learn How to Attack Each Type of PM Question to Ace your Next PM
          Interview. Offered by Advancing Women in Tech (AWIT). Sponsored by
          Amazon Web Services (AWS)
        </p>
        <v-btn class="white--text mr-10" rounded color="success"
          >Get Started</v-btn
        >

        <v-btn @click.prevent="show" class="white--text" rounded color="indigo" elevation="10"
          ><v-icon>mdi-play-circle</v-icon> Watch Videos
        </v-btn>
        
         

      </v-col>

      <v-col lg="6">
        <img width="120%" src="./../assets/aa.png" alt="" />
      </v-col>
    </v-row>
    <v-row>
      <About />
    </v-row>
    <v-row>
      <Test />
    </v-row>
    <v-row>
      <div id="example">
        <h2 class="mx-3 greey-text">courses</h2>
       <carousel-3d 
       :controls-visible="true"
       :clickable="true"
       :key="upcom.length"
       :listData="upcom">
         <slide :index="i" :key="i" v-for="(a,i) in this.upcom">
           
           <figure>
               <img :src="a.images">
               <figcaption >
                 <v-btn text color="white">
                   {title}
                 </v-btn>
               </figcaption>
             </figure>

         </slide>
           
       </carousel-3d>
      </div>
    </v-row>

    <!-- <Footer /> -->
     <modal   :width="580"
         :height="320"  name="hello"> 
        <video  controls class="aa">
          <source type="video/mp4" src="@/assets/er.mp4"/>
        </video>
    </modal>
    



  </v-container>
</template>



<script>
import Test from "./Test";
import { Carousel3d, Slide } from "vue-carousel-3d";
import About from "./about.vue";
// import Footer from './footer.vue'

export default {
  name: "Home",
  components: {
    Test,
    About,
    Carousel3d,
    Slide,
    //  Footer
  },
   methods: {
    show() {
      this.$modal.show("hello");
    },
    hide() {
      this.$modal.hide("hello");
    },
    opened(){
this.$refs.video.focus()
    },
  },
  data() {
    return {
      showModal:false,
      upcom: [
        { images: "https://cdn.vuetifyjs.com/images/lists/2.jpg" },
        { images: "https://cdn.vuetifyjs.com/images/lists/3.jpg" },
        { images: "https://cdn.vuetifyjs.com/images/lists/4.jpg" },
        { images: "https://cdn.vuetifyjs.com/images/lists/5.jpg" },
        { images: "https://cdn.vuetifyjs.com/images/lists/6.jpg" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

.aa{
  position: absolute;
  width:100%;
  height:auto ;
}


.carousel-3d-container figure {
  margin: 0;
}
.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}
.next span,
.prev span {
  color: red;
}

h2.intro-text {
  font-size: 40px;

  font-weight: bold;
  font-family: cursive;
  color: black;
}
p.description {
  margin-bottom: 40px;
  margin-top: 20px;
  font-size: 18px;
  font-family: cursive;
  column-rule-color: currentcolor;
}
</style>