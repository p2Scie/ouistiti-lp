<template>
  <section class="welcome">
    <div class="wrapper">
      <h1>Rejoignez l’aventure ! <span class="dot">•</span></h1>

      <p class="lead">
        Connectez-vous et réservez des lieux pour vos événements les plus fous.
      </p>
      <div class="tabs">
        <ul>
          <li>
            <button
              :class="selectedComponent === 'LoginForm' ? 'active' : ''"
              @click="setSelectedComponent('LoginForm')"
            >
              Connexion
            </button>
          </li>
          <li>
            <button
              :class="selectedComponent === 'SignupForm' ? 'active' : ''"
              @click="setSelectedComponent('SignupForm')"
            >
              Inscription
            </button>
          </li>
        </ul>
      </div>

      <components :is="selectedComponent"></components>
    </div>
  </section>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
export default {
  components: {
    SignupForm,
    LoginForm,
  },
  data() {
    return {
      selectedComponent: "LoginForm",
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style lang="scss" scoped>
.welcome {
  h1 {
    margin-bottom: 14px;
    line-height: 40.22px;
    color: $secondary-color-1;
  }
  p.lead {
    margin-bottom: 2.625rem;
  }

  .tabs {
    margin-bottom: 3.5rem;
  }

  @media (min-width: 992px) {
    z-index: 0;
   
    background-image: url("~@/assets/img/illu_welcome.svg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    h1 {
      display: block;
      margin-top: 180px;
      line-height: 40.22px;
      color: $primary-color-5;
      margin-bottom: 1rem;
      line-height: 73.4px;
      max-width: 400px;

      .dot {
        color: #e5c5c5;
      }
    }

    .lead {
      color: #fff;
      max-width: 400px;
    }
    .tabs button.active {

          color: $primary-color-5;
          border-bottom-color: $primary-color-5;

      
    }
  }
 
} 

*[data-theme="true"]  {
    .welcome {
        @media (min-width: 992px){
           background-image: url("~@/assets/img/illu-welcome-dark.svg");
      
        }
     background-color:  $primary-color-1;

      .dot {
        color: #D7A9A7;;
      }
      h1, .tabs button.active {
        color: #D7A9A7;
      }
      .tabs button.active {
        border-bottom-color: #D7A9A7;
      }
    }
  }
</style>
