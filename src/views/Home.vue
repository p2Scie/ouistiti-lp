<template>
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

  <Form></Form>
  <Footer></Footer>
</template>

<script>


import Footer from "@/components/layout/Footer.vue";
import Form from "@/components/Form.vue";
import Modal from "@/components/Modal.vue";

export default {
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
}
</script>

<style scoped>

</style>