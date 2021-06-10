<template>
  <Hero></Hero>

  <section class="section is-medium container">
    <h1 class="title is-1 has-text-centered pb-6">{{ title2 }}</h1>
    <div class="columns is-multiline is-centered">
      <div class="column is-one-third is-narrow" :style="{ maxWidth: '398px' }">
        <figure class="image">
          <img src="@/assets/img/card1.png" alt="" />
        </figure>
        <p
          :style="{ fontSize: '16px', fontWeight: '400' }"
          class="has-text-centered p-6"
        >
          Je cherche mon lieu
        </p>
      </div>
      <div class="column is-one-third is-narrow" :style="{ maxWidth: '398px' }">
        <figure class="image">
          <img src="@/assets/img/card2.png" alt="" />
        </figure>
        <p
          :style="{ fontSize: '16px', fontWeight: '400' }"
          class="has-text-centered p-6"
        >
          Je regarde les artistes et animations du lieu
        </p>
      </div>
      <div class="column is-one-third is-narrow" :style="{ maxWidth: '398px' }">
        <figure class="image">
          <img src="@/assets/img/card3.png" alt="" />
        </figure>
        <p
          :style="{ fontSize: '16px', fontWeight: '400' }"
          class="has-text-centered p-6"
        >
          Je réserve mon lieu
        </p>
      </div>
    </div>
  </section>
<div :style="{maxWidth: '650px', margin: '0 auto 6rem'}">
    <section
    class="section container is-flex is-justify-content-center iframeContainer"
    :style="{ margin: '0 auto!important' }"
  >
    <iframe
      class="box"
      src="https://www.youtube.com/embed/RD9yCKck-QY"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </section>
</div>


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
      title2: "Comment faire ?",
    };
  },
};
</script>

<style scoped>
iframe {
  /* max-width: 100%;
    height: auto;
    width: 640px;
    min-height: 360px; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.iframeContainer {
  position: relative;
  /* overflow: hidden; */
  width: 100%;
  padding-top: 56.25%; 
}
</style>
