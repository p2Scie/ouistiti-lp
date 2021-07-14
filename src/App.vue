<template>
  <div :data-theme="isDarkModeON">
    <Header :isDarkModeON="isDarkModeON" :switchMode="switchMode"></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
// import Footer from "@/components/layout/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    // Footer,
  },
  data() {
    return {
      isDarkModeON: false,
    };
  },
  created() {
    this.$store.dispatch('tryLogin');
  },
  methods: {
    switchMode() {
      this.isDarkModeON = !this.isDarkModeON;
    }
  },
};
</script>

<style lang="scss">
#app {
  overflow: hidden;
  margin: 0 auto;
   
}

 
</style>
