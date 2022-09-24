<template>
  <v-container class="ml-5">
    <Sidebar />
    <br>
    <h4 class="mb-5">Your Profile</h4>

    <h6>Img Profile</h6>

    <div class="row">
      <div class="col">
        <v-avatar size="80">
          <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
        </v-avatar>
        <v-btn text class="az">Edit Img</v-btn>
        <v-btn rounded class="az1">Delete Img</v-btn>
      </div>
    </div>
    <v-divider class="divider"></v-divider>

    <div class="row">
      <div class="col">
        <h6 class="mb-5">Profile Name</h6>
        <p class="mb-0">{{ name }}</p>
      </div>
      <div class="col">
        <v-btn @click.prevent="show" rounded class="name">Edit</v-btn>
      </div>
    </div>

    <v-divider class="divider"></v-divider>

    <div class="row">
      <div class="col">
        <h6 class="mb-5">Email address</h6>
        <p class="mb-0">{{ email }}</p>
      </div>
      <div class="col">
        <v-btn @click.prevent="show1" rounded class="name">Edit</v-btn>
      </div>
    </div>
    <v-divider class="divider"></v-divider>

    <v-row>
      <v-col cols="6">
        <h6>Language</h6>
        <v-select
          v-model="select"
          :hint="`${select.state}, ${select.abbr}`"
          :items="items"
          item-text="state"
          item-value="abbr"
          label="Select"
          persistent-hint
          return-object
          single-line
          solo
          color="basil"
        ></v-select>
      </v-col>
    </v-row>

    <v-divider class="divider"> </v-divider>
    <v-row>
      <v-col cols="9">
        <h6>Security</h6>
        <p>
          By deleting your account, you'll no longer be able to access any of
          your designs or log in to Canva.
        </p>
        <v-btn> Delete account <v-icon>mdi-danger</v-icon></v-btn>
      </v-col>
    </v-row>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

    <modal name="hello">
       <div class="justify">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="change your name"
          required
        >
        </v-text-field>
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Validate
        </v-btn>
        <v-btn
      color="error"
      @click="reset"
    >
      Reset Validation
    </v-btn>
      </v-form>
       </div>
    </modal>



     <modal  name="hello1" >
       <div class="justify">
      <v-form ref="form" v-model="valid" lazy-validation>

        <v-text-field  
          v-model="email"
          :rules="emailRules"
          label="change your email"
          required
        >
        </v-text-field>
        <v-btn 
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Validate
        </v-btn>
        <v-btn
      color="error"
      @click="reset"
    >
      Reset Validation
    </v-btn>
      </v-form>
      </div>
    </modal>
  </v-container>
</template>





<script>
import Sidebar from "./sidebar.vue";
export default {
  components: { Sidebar },
  data() {
    return {
      select: { state: "Language", abbr: "FL" },
      items: [
        { state: "English", abbr: "FL" },
        { state: "ARABIC", abbr: "GA" },
        { state: "Spanich", abbr: "NE" },
        { state: "California", abbr: "CA" },
        { state: "New York", abbr: "NY" },
      ],
      name: "",
      valid: true,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "email is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    show() {
      this.$modal.show("hello");
    },
    show1(){
      this.$modal.show('hello1')
    },
    hide() {
      this.$modal.hide("hello");
    },
    hide1() {
      this.$modal.hide("hello1");
    },
    validate() {
      this.$refs.form.validate();
    },
    reset(){
       this.$refs.form.reset();
    }
  },
};
</script>


<style>
.az {
  margin-left: 450px;
  margin-right: 20px;
  margin-top: 50px;
  font-family: inherit;
}
.az1 {
  margin-top: 50px;
  font-family: inherit;
}
.divider {
  margin-right: 200px;
}
.name {
  margin-top: 30px;
  margin-left: 170px;
}
.justify {
  margin-top: 100px;
     margin-left: 45px;
  margin-right: 20px;
}
</style>