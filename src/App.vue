<template>
  <div :data-theme="isDarkModeON">
    <Header :isDarkModeON="isDarkModeON" :switchMode="switchMode"></Header>
    <router-view></router-view>
    <button @click="messenger" :data-fb="messengerBot" id="messenger" class="btn">MESSENGER</button>
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
      messengerBot: false,
    };
  },
  methods: {
    switchMode() {
      this.isDarkModeON = !this.isDarkModeON;
    },
    messenger() {
      this.messengerBot = !this.messengerBot;
    }
  },
};
</script>

<style lang="scss">
#app {
  overflow: hidden;

  #fb-root {
    display: none!important;
  }
  [data-fb="true"] {
    #fb-root {
    display: block!important;
  }
  }
}
</style>
