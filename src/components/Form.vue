<template>
  <section class="section is-medium has-background-light">
    <!-- <div class="container">
      <div class="columns is-vcentered">
        <div class="column">
          <p :style="{ fontSize: '25px', lineHeight: '50px' }">
           Abonnez-vous à notre newsletter mensuel
          </p>
        </div>
        <div class="column is-offset-2">
          <form @submit.prevent="sendEmail">
            <div class="field">
              <div class="control">
                <input
                  class="input is-success"
                  type="text"
                  name="user_name"
                  v-model="nameInput"
                  placeholder="Prénom"
                />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input
                v-model="emailInput"
                  class="input is-success"
                  type="email"
                  name="user_email"
                  placeholder="Adresse mail"
                />
              </div>
            </div>

            <div class="field">
              <div class="control">
                <input
                  type="submit"
                  value="JE M'INSCRIS"
                  class="button is-medium px-6"
                  :style="{ fontWeight: '500' }"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div> -->

    <iframe
      class="mj-w-res-iframe"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      src="https://app.mailjet.com/widget/iframe/6S1w/Jwt"
      width="100%"
    ></iframe>
  </section>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  data() {
    return {
      nameInput: "",
      emailInput: "",
    };
  },
  methods: {
    sendEmail: (e) => {
      emailjs
        .sendForm(
          "service_rry823p",
          "template_diw08fm",
          e.target,
          "user_Lg4YyWjub1DUlDW6Ur4jS"
        )
        .then(
          (result) => {
            alert("SUCCESS!", result.status, result.text);
            // Reset form field
            this.name = "";
            this.email = "";
          },
          (error) => {
            alert("FAILED...", error);
          }
        );
    },
  },
};
</script>

<style scoped>
section {
  display: block;
  margin: 0 auto;
}
</style>
