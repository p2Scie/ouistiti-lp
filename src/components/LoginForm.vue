<template>
  <form @submit.prevent="submitForm" class="loginForm">
    <input type="email" placeholder="Adresse mail" v-model="email" />
    <input type="password" placeholder="Mot de passe" v-model="password" />
    <button class="btn-primary">Connexion</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
    };
  },
  methods: {
    submitForm() {
      const formData = {
        email: this.email,
        password: this.password,
      };
      try {
        this.$store.dispatch("login", formData);

        //redirection
        this.$router.replace("/home");
      } catch (error) {
        console.log(error);
      }

      console.log(formData);
    },
  },
};
</script>

<style lang="scss" scoped>
.loginForm {
  input {
    width: 100%;
    min-height: 56px;
    margin-bottom: 1rem;
    border-radius: 6px;
    padding: 1rem 2.5rem;
    display: block; 
    min-width: 295px;
    border: 2px solid #f8f1f0;
    box-sizing: border-box;
    background: #ffffff;
    font-size: 1rem;
    font-family: "Circular Std", sans-serif;
    font-weight: 450;
    color: $primary-color-1;
    line-height: 1.25rem;
    color: #BFBFC4;
  }

  button {
    margin-top: 1.625rem;
  }

   @media (min-width: 992px) {
     input {
       max-width: 311px;
     }

     .btn-primary {
       background-color: #fff;
       color: $secondary-color-1;
     }
   }

   
}
*[data-theme="true"] {
      .btn-primary {
       background-color: #22222E;
       color: #D7A9A7;
     }
   }
</style>
