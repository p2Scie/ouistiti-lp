<template>
  <Hero></Hero>
  <InfoBlock></InfoBlock>
  <Trends></Trends>
  <Articles></Articles>
  <Newsletter></Newsletter>

  <!-- <Modal v-if="revele" :revele="revele" :toggleModal="toggleModal"> </Modal> -->
  <!-- <section class="section is-medium container mb-0">
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
    

  </section> -->

  <!-- <Form></Form> -->
</template>

<script>
// import Form from "@/components/Form.vue";
import Hero from "@/components/home/Hero.vue";
import Articles from "@/components/home/Articles.vue";
import InfoBlock from "@/components/home/InfoBlock.vue";
import Trends from "@/components/home/Trends.vue";
// import Review from "@/components/home/Review.vue";
// import Modal from "@/components/Modal.vue";
import Newsletter from "@/components/home/Newsletter.vue";

export default {
  components: {
    // Form,
    // Modal,
    Newsletter,
    Hero,
    Articles,
    InfoBlock,
    Trends,
    // Review,
  },
  data() {
    return {
      revele: false,
      isModalVisible: false,
      title: "Venez tout casser !",
      subtitle:
        "Découvrez des lieux, des histoires, des identités hors du commun. Puis proposez-les à vos clients afin de leur offrir une expérience insolite.",
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    toggleModal() {
      this.revele = !this.revele;
    },
  },
};
</script>

<style lang="scss"></style>
