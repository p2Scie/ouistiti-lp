<template>
  <form @submit.prevent="submitForm" class="SignupForm">
    <input type="text" placeholder="Prénom" v-model.trim="firstname" />
    <input type="text" placeholder="Nom" v-model.trim="lastname" />
    <input type="email" placeholder="Adresse mail" v-model.trim="email" />
    <input type="password" placeholder="Mot de passe" v-model.trim="password" />
    <div>
      <input type="checkbox" id="policy" />
      <label for="policy">J’accepte les conditions d’utilisation.</label>
    </div>

    <div>
        <input type="checkbox" id="newsletter" />
        <label for="newsletter">Je reste informé des actualités, nouveautés par mail.</label>
    </div>

    
    <button class="btn-primary">Valider</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      formIsValid: true,
    };
  },
  methods: {
    submitForm() {
      const formData = {
        displayName: this.firstname + " " + this.lastname,
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("signup", formData);
    },
  },
};
</script>

<style lang="scss" scoped>
.SignupForm {
  input[type="text"], input[type="email"], input[type="password"] {
    width: 100%;
    min-height: 56px;
    margin-bottom: 1rem;
    border-radius: 6px;
    padding: 1rem 2.5rem;
    min-width: 295px;
    display: block;
    // max-width: 311px;
    border: 2px solid #f8f1f0;
    box-sizing: border-box;
    background: #ffffff;
    font-size: 1rem;
    font-family: "Circular Std", sans-serif;
    font-weight: 450;
    color: $primary-color-1;
    line-height: 1.25rem;
    color: #bfbfc4;
  }

  #policy {
      margin-bottom: 1.5rem;
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
    background-color: #22222e;
    color: #d7a9a7;
  }
}
</style>
