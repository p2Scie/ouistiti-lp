<template>
<h2>C'est l'APP</h2>
  <main>
    <Hero></Hero>
    <InfoBlock></InfoBlock>
    <svg width="112" height="245" viewBox="0 0 112 245" id="sideVec" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-152.276 186.299L-112.664 155.405C-93.5567 176.458 -68.2002 186.847 -37.1523 186.418C-23.0289 186.212 -9.02765 182.305 3.26088 175.171C19.3722 165.802 31.7963 154.007 40.2591 140.083C47.4628 128.231 51.889 114.598 53.4259 99.6732C54.5448 88.7268 53.7421 77.7285 51.0428 67.0192C48.9769 58.7877 45.8456 50.9318 41.6962 43.5267L81.5752 12.4225C90.0264 25.6045 96.1491 39.5572 99.754 53.9793C104.019 70.9884 105.026 89.2262 102.655 108.201C99.9961 129.792 93.3821 149.397 83.041 166.411C74.1861 180.98 62.3266 194.142 47.7442 205.509C31.9774 217.831 14.9225 226.532 -2.90822 231.461C-20.7729 236.368 -39.9729 237.581 -60.0106 235.122C-80.0484 232.663 -98.3763 226.779 -114.478 217.69C-128.446 209.759 -141.131 199.258 -152.276 186.299ZM-163.603 185.042C-137.58 218.437 -103.367 237.744 -61.0165 242.975C-18.6663 248.205 19.2339 237.803 52.5954 211.76C67.9788 199.763 80.3869 186.005 89.7992 170.519C100.801 152.418 107.699 131.962 110.528 109.173C115.467 69.0636 106.41 33.0045 83.3447 0.941282L31.1905 41.606C42.388 58.457 47.5554 78.5724 45.5039 98.8578C44.1095 112.706 40.0721 125.088 33.467 135.955C25.6853 148.758 14.2892 159.551 -0.734669 168.278C-11.806 174.71 -24.4423 178.284 -37.2432 178.456C-68.6867 178.925 -93.4312 167.606 -111.524 144.424L-163.603 185.042Z" fill="#2B2B39"/>
</svg>

<Category></Category>

    <Newsletter></Newsletter>
  </main>
</template>

<script>
import Hero from "@/components/home/main/Hero.vue";
import InfoBlock from "@/components/home/main/InfoBlock.vue";
import Newsletter from "@/components/home/main/Newsletter.vue";
import Category from "@/components/home/section/Category.vue";

export default {
  components: {
    Newsletter,
    Hero,
    InfoBlock,
    Category
  },
  data() {
    return {
      revele: false,
      isModalVisible: false,
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

<style lang="scss">
#sideVec {
  float: left;
}
</style>