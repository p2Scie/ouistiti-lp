<template>
    <!-- Google Tag Manager (noscript) -->
    <noscript
      ><iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-MNG3HVH"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
      ></iframe
    ></noscript>
    <!-- End Google Tag Manager (noscript) -->
    
        <section class="hero container">
    <div class="hero-body">
      <div class="columns is-vcentered">
        <div class="column is-three-fifths">
          <figure class="image mb-6 pb-6">
            <img
              src="@/assets/img/cespace_logo_couleur.png"
              alt=""
              :style="{ width: '276px' }"
            />
          </figure>
          <h1 class="title is-1 mb-6"> {{ title }}</h1>
          <p class="subtitle mb-6">{{ subtitle }}</p>
          <button class="button is-medium" @click="toggleModal">Voir notre video</button>
        </div>
        <div class="column is-hidden-touch">
          <figure class="image">
            <img src="@/assets/img/hero-pict.png" alt="" />
          </figure>
        </div>
      </div>
    </div>
  </section>
  
  <Modal v-if="revele" :revele="revele" :toggleModal="toggleModal">
    
  </Modal>
  <button class="modal-close is-large" aria-label="close" @click="close"></button>
  <section class="section is-medium container mb-0">
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
  <!-- <div :style="{maxWidth: '650px', margin: '0 auto 6rem'}">
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
</div> -->

  <Form></Form>
  <Footer></Footer>
</template>

<script>
import Footer from "./components/layout/Footer.vue";
import Form from "./components/Form.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    Footer,
    Form,
    Modal,
  },

  data() {
    return {
      revele: false,
      isModalVisible: false,
      title: "Venez tout casser !",
      subtitle:
        "Découvrez des lieux, des histoires, des identités hors du commun. Puis proposez-les à vos clients afin de leur offrir une expérience insolite.",
    }
  },
  methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
      toggleModal(){
        this.revele = !this.revele;
      }
    }
  
};
</script>

<style>
.title {
  font-family: "Inter", sans-serif;
  /* font-size: 56px; */
}
.subtitle {
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
}

.button {
  background: #BD6F6D;
  border-radius: 6px;
  border: none;
  color: #fff;
  /* font-weight: 700; */
}

p {
  font-family: "Montserrat", sans-serif;
}

.is-success.input,
.is-success.textarea {
  border-color: #BD6F6D;
}

.input {
  border: 2px solid #BD6F6D;
  box-sizing: border-box;
  border-radius: 6px;
}

.footer {
  padding: 6rem 1.5rem 3rem;
}

i {
  font-size: 26px;
}
.column {
  margin: 0 auto;
}

/* .mj-embedded-content, .paint-area {
  box-shadow: none!important;
} */

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
  margin-top: 80px;
}

.iframeContainer {
  position: relative;
  /* overflow: hidden; */
  width: 100%;
  padding-top: 56.25%; 
}
</style>
