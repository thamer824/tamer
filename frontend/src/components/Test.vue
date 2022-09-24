<template>
  <v-container class="my-10">
    <v-row justify="center">
      <v-col lg="3" class="text-center">
        <v-subheader class="text-h4 justify-center">Courses</v-subheader>
      </v-col>

      <v-col class="ml-15" lg="12">

        
      
        <v-tabs color="success">
          <v-tabs-slider color="#6F0DFF"></v-tabs-slider>

          <v-tab  @click="active = 'ee'"  :color="active == 'ee' ? 'warning' : ''" class="withoutupercase">Fultillment Status View</v-tab>
          <v-tab   @click="active = 'web'" :color="active == 'web' ? 'success' : ''" class="withoutupercase">Real-time Trackning</v-tab>
          <v-tab class="withoutupercase">Sales View</v-tab>
          <v-tab class="withoutupercase">Balances</v-tab>
          <v-tab class="withoutupercase">Transactions</v-tab>
          <v-tab class="withoutupercase">Engagement Rate</v-tab>
           <v-tab class="withoutupercase">Balances</v-tab>
          <v-tab class="withoutupercase">Transactions</v-tab>
          <v-tab class="withoutupercase">Engagement Rate</v-tab>
           <v-tab class="withoutupercase">Balances</v-tab>
          <v-tab class="withoutupercase">Transactions</v-tab>
          <v-tab class="withoutupercase">Engagement Rate</v-tab>
        </v-tabs>
        
       
  


        

        <v-sheet color="white" elevation="10">
          <slot v-if="active == 'web'">
            <h2 class="pl-15 pt-10">Expand your career with web devolepment</h2>
            <p class="pl-15 pt-5 pb-0">
              Expand your career opportunities with Python Whether you work in
              machine learning or finance,. .
            </p>
            <v-slide-group v-model="model" class="pa-4" active-class="success">
              <v-slide-item
                v-for="(category, index) in categories"
                :key="index"
              >
              <v-hover v-slot="{ hover }">
                <v-card  :elevation="hover ? 12 : 2" :class=" { 'on-hover': hover } " max-width="255" height="360">
                  <v-img :aspect-ratio="16/9" height="130" :src="category.image">
                    <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal text-h2 white--text"
            style="height: 100%;"
          >
            $14.99
          </div>
        </v-expand-transition>
                  </v-img>
                  

                  <v-card-title>{{ category.title }}</v-card-title>

                  <v-card-text>
                    <div>
                      Small plates, salads & sandwiches - an intimate setting
                      with 12 indoor seats plus patio seating.
                    </div>
                  </v-card-text>

                  <v-divider class="mx-4"></v-divider>

                  <v-card-actions>
                    <router-link to="/categories" v-slot="{ navigate, href }">
                      <v-btn
                        outlined
                        color="black"
                        :href="href"
                        @click="navigate"
                        >View details</v-btn
                      >
                    </router-link>
                    <v-spacer />
                    <v-rating
                      :value="4.5"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"
                    >
                    </v-rating>
                  </v-card-actions>

                  <v-row class="fill-height" align="center" justify="center">
                  </v-row>
                </v-card>
                </v-hover>
              </v-slide-item>
            </v-slide-group>
          </slot>
          <slot v-if="active == 'ee'">
            <h2 class="pl-15 pt-10">
              Expand your career with mobile devolepment
            </h2>
            <p class="px-5 pt-5">
              Expand your career opportunities with Python Whether you work in
              machine learning or finance, web development or data science,
              Python is one of the most important skills to learn. .
            </p>
            <v-slide-group v-model="model" class="pa-4" active-class="success">
              <v-slide-item
                v-for="(category2, index) in categories2"
                :key="index"
              >
                <v-card class="mx-auto my-12" max-width="255" height="360">
                  <v-img height="130" :src="category2.image"></v-img>

                  <v-card-title>{{ category2.title }}</v-card-title>

                  <v-card-text>
                    <div>
                      Small plates, salads & sandwiches - an intimate setting
                      with 12 indoor seats plus patio seating.
                    </div>
                  </v-card-text>

                  <v-divider class="mx-4"></v-divider>

                  <v-card-actions>
                    <router-link to="/categories" v-slot="{ navigate, href }">
                      <v-btn
                        outlined
                        color="black"
                        :href="href"
                        @click="navigate"
                        >View details</v-btn
                      >
                    </router-link>
                    <v-spacer />
                    <v-rating
                      :value="4.5"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"
                    >
                    </v-rating>
                  </v-card-actions>

                  <v-row class="fill-height" align="center" justify="center">
                  </v-row>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </slot>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Test",
  data() {
    return {
      active: "web",
      categories: [
        {
          title: "artificial intelegince",
          image: "http://appwebgurus.com/wp-content/uploads/2020/12/top11.png",
        },
        { title: "mobile devolepment", image: "" },
        { title: "ios devolepment", image: "" },
        { title: "calculus1", image: "" },
        { title: "ios ", image: "" },
      ],
      categories2: [
        {
          title: "fsfsdfs",
          image: "",
        },
      ],
    };
  },
};
</script>






