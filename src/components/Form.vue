<template>
  <section class="section is-medium has-background-light">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column">
          <p :style="{ fontSize: '25px', lineHeight: '50px' }">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
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
                  placeholder="Prénom"
                />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input
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
    </div>
  </section>
</template>

<script>
import emailjs from "emailjs-com";

export default {
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
          },
          (error) => {
            alert("FAILED...", error);
          }
        );
    },
  },
};
</script>
