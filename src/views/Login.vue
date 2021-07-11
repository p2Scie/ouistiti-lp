<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="email">E-Mail</label>
      <input type="email" name="" id="email" v-model.trim="email"/>
    </div>

    <div class="form-control">
      <label for="password">Mot de passe</label>
      <input type="password" name="" id="password" v-model.trim="password"/>
    </div>
  </form>

  <p v-if="!formIsValid">Please enter a valid email and password (must be at least 6 characters long)</p>
  <button class="btn">{{ submitButton }}</button>
  <button type="button" mode="flat" class="btn" @click="switchAuthMode">{{ switchModeButton }}</button>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login'
    }
  },
  computed: {
    submitButton(){
      if (this.mode === 'login') {
        return 'Login'
      } else {
        return 'Signup'
      }
    },
    switchModeButton(){
         if (this.mode === 'login') {
        return 'Signup instead'
      } else {
        return 'Login instead'
      }
    }
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if(this.email === '' || !this.email.includes('@') || this.password.length < 6) {
        this.formIsValid = false;
        //stoper l'exécution du script
        return;
      }
      //send http request...
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login'
      }
    }
  }
};
</script>
