<template>
  <section class="section is-medium has-background-light">
    <!-- Begin Mailchimp Signup Form -->

    <div id="mc_embed_signup">
      <form
        action="https://gmail.us6.list-manage.com/subscribe/post?u=37449d26a6239c7da66c01081&amp;id=c11efb904a"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll">
          <label for="mce-EMAIL">Abonnez-vous à notre newsletter mensuel</label>
          <input
            type="email"
            value=""
            name="EMAIL"
            class="email"
            id="mce-EMAIL"
            placeholder="email address"
            required
          />
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true">
            <input
              type="text"
              name="b_37449d26a6239c7da66c01081_c11efb904a"
              tabindex="-1"
              value=""
            />
          </div>
          <div class="clear">
            <input
              type="submit"
              value="Je m'inscrit"
              name="subscribe"
              id="mc-embedded-subscribe"
              class="button is-medium"
            />
          </div>
        </div>
      </form>
    </div>

    <!--End mc_embed_signup-->
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

#mc_embed_signup {
  background: #fff;
  clear: left;
  font: 14px Helvetica, Arial, sans-serif;
  width: 800px;
}

#mc_embed_signup {
  margin: 0 auto;
}

#mc_embed_signup_scroll {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
}

#mc-embedded-subscribe {
  background: #06d6a0;
    border-radius: 6px;
    border: none;
    color: #fff;
    font-weight: 700;
    
}

#mc_embed_signup input.button {
  
min-width: 150px;
    min-height: 40px;
}

#mc_embed_signup label {
  padding-bottom: 40px;
}
</style>
