import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VModal from 'vue-js-modal'
Vue.config.productionTip = false


Vue.use(VModal)
new Vue({
  router,
  store,
  vuetify,
  methods: {
    handleScroll: function (evt, el) {
      if (window.scrollY > 50) {
        el.setAttribute(
          'style',
          'opacity: 1; transform: translate3d(0, -10px, 0)'
        )
      }
      return window.scrollY > 100
    }
  },
  render: h => h(App)
}).$mount('#app')
 

new Vue({
  el: '#contact_form', // id of the 'app'
  data: {
      name: '',   // data for the name on the form
      email:'',   // data for the email on the form
      message:'', // data for the message on the form
      maxLength: 140, // maximum length of the form message
      errorMessage: ''// message to show the user if there is an error
  },
  methods: { // all the actions our app can do
      isValidName: function () { // TODO what if name is just spaces?
          var valid = this.name.length > 0;
          console.log('checking for a valid name: ' + valid);
          return valid;
      },
      isValidEmail: function () { // TODO is a@b a valid email?
          var valid = this.email.indexOf('@') > 0;
          console.log('checking for a valid email: ' + valid);
          return valid;
      },
      isValidMessage: function () { // what if message is just spaces?
          var valid = (this.message.length > 0) &&
              (this.message.length < this.maxLength);
          console.log('checking for a valid message: ' + valid);
          return valid;
      },
      checkMessage: function () {
          // TODO keep the message below maxMessageLength?
          //      or maybe change the text, background, or counter color?
      },
      submitForm: function () {
          // TODO prevent form from submitting if email or message is
          //  invalid and display message like name error below
          // TODO what if more than one field is invalid?
          if (! this.isValidName()) {
              // TODO what should the errorMessage look like for multiple
              //  messages?
              this.errorMessage = 'Please include your name.';
              return false;
          } else {
              this.errorMessage = '';
          }
          console.log('submitting message...');
          // TODO submit to form processor
          this.$http({url: '/someUrl', method: 'POST', data: {
              name: this.name,
              email: this.email,
              message: this.message
          }}).then(function () {
              // TODO how could you use errorMessage to create a message
              //  for success?
              alert('Your form was submitted!');
          }, function () {
              this.errorMessage = 'Form submission failed.';
          });
      }
  }
});
