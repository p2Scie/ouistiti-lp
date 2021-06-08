<template>
  <Hero></Hero>

  <section class="section is-medium container">
    <h1 class="title is-1 has-text-centered mb-6">{{ title2 }}</h1>
    <div class="columns is-multiline is-centered">
      <div class="column is-one-third is-narrow" :style="{ maxWidth: '398px' }">
        <figure class="image">
          <img src="@/assets/img/card1.png" alt="" />
        </figure>
        <p
          v-html="lorem"
          :style="{ fontSize: '16px', fontWeight: '400' }"
          class="has-text-centered p-6"
        ></p>
      </div>
      <div class="column is-one-third is-narrow" :style="{ maxWidth: '398px' }">
        <figure class="image">
          <img src="@/assets/img/card2.png" alt="" />
        </figure>
        <p
          v-html="lorem"
          :style="{ fontSize: '16px', fontWeight: '400' }"
          class="has-text-centered p-6"
        ></p>
      </div>
      <div class="column is-one-third is-narrow" :style="{ maxWidth: '398px' }">
        <figure class="image">
          <img src="@/assets/img/card3.png" alt="" />
        </figure>
        <p
          v-html="lorem"
          :style="{ fontSize: '16px', fontWeight: '400' }"
          class="has-text-centered p-6"
        ></p>
      </div>
    </div>
  </section>

  <section class="section is-medium container is-flex is-justify-content-center" :style="{margin: '0 auto!important'}"> 
    <iframe
      src="https://www.youtube.com/embed/RD9yCKck-QY"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </section>

  <Form></Form>
  <Footer></Footer>
</template>

<script>
import Footer from "./layout/Footer.vue";
import Form from "./Form.vue";
import Hero from "./Hero.vue";

export default {
  name: "Home",
  components: {
    Footer,
    Form,
    Hero,
  },
  data() {
    return {
      title2: "Processus en 3 étapes",
      lorem:
        "Lorem Ipsum <br> Enim velit, dui justo, quis enim ut egestas aenean.",
    };
  },
};
</script>

<style scoped>
iframe {
    max-width: 100%;
    height: auto;
    width: 560px;
    min-height: 315px;
}
</style>
