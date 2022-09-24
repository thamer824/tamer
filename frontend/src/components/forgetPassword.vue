<template>
  <div class="reset-password">
      <Modal v-if="modalActive" v-on:close-modal="closeModal"/>
      <Loading v-if="loading" />
    <div class="form-wrap">
      <form action="" class="reset">
        <h2>fsdfs</h2>
        <p>forgot ur password</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="fsfsfs" />
          </div>
        </div>

        <button>fsdfsf</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>



<script>
import Modal from './modal'
import Loading from './loading'

export default {
  name: "forgetPassword",
  components:{
      Modal,Loading
      },
  data(){
      return{
          modalActive: true,
          modalMessage:"",
          loading : null,
    

      }
  },
  methods:{
      closeModal(){
          this.modalActive = !this.modalActive 
      }

  }
};
</script>


<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    overflow: hidden;
    display: flex;
    height: 100vh;
    justify-content: center;
    align-self: center;
    margin: 0 auto;
    width: 90%;
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>