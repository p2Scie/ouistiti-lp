<template>
  <div :data-theme="isDarkModeON">
    <Header :isDarkModeON="isDarkModeON" :switchMode="switchMode"></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      isDarkModeON: false,
    };
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
}
</style>
