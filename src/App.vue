<template>
  <div :data-theme="isDarkModeON">
    <!-- <button @click="switchMode" id="color-mode">
      <span v-if="isDarkModeON">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.5833 10.0347V4.41652H17.9651L14 0.451416L10.0349 4.41652H4.41664V10.0347L0.451538 13.9999L4.41664 17.965V23.5832H10.0349L14 27.5483L17.9651 23.5832H23.5833V17.965L27.5484 13.9999L23.5833 10.0347ZM21.1875 16.9707V21.1874H16.9708L14 24.1582L11.0291 21.1874H6.81248V16.9707L3.84164 13.9999L6.81248 11.029V6.81235H11.0291L14 3.84152L16.9708 6.81235H21.1875V11.029L24.1583 13.9999L21.1875 16.9707ZM14 7.41131C10.3703 7.41131 7.41143 10.3702 7.41143 13.9999C7.41143 17.6295 10.3703 20.5884 14 20.5884C17.6297 20.5884 20.5885 17.6295 20.5885 13.9999C20.5885 10.3702 17.6297 7.41131 14 7.41131ZM14 18.1926C11.688 18.1926 9.80727 16.3118 9.80727 13.9999C9.80727 11.6879 11.688 9.80714 14 9.80714C16.312 9.80714 18.1927 11.6879 18.1927 13.9999C18.1927 16.3118 16.312 18.1926 14 18.1926Z"
            fill="#22222E"
          />
        </svg>
      </span>
      <span v-else>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.5834 10.0347V4.41652H17.9652L14.0001 0.451416L10.035 4.41652H4.41676V10.0347L0.45166 13.9999L4.41676 17.965V23.5832H10.035L14.0001 27.5483L17.9652 23.5832H23.5834V17.965L27.5485 13.9999L23.5834 10.0347ZM21.1876 16.9707V21.1874H16.9709L14.0001 24.1582L11.0293 21.1874H6.8126V16.9707L3.84176 13.9999L6.8126 11.029V6.81235H11.0293L14.0001 3.84152L16.9709 6.81235H21.1876V11.029L24.1584 13.9999L21.1876 16.9707ZM14.3475 8.01027C13.461 8.01027 12.6105 8.21392 11.8558 8.56131C13.9162 9.50767 15.3537 11.592 15.3537 13.9999C15.3537 16.4077 13.9162 18.492 11.8558 19.4384C12.6105 19.7858 13.461 19.9894 14.3475 19.9894C17.6537 19.9894 20.3371 17.3061 20.3371 13.9999C20.3371 10.6936 17.6537 8.01027 14.3475 8.01027Z"
            fill="white"
          />
        </svg>
      </span>
    </button> -->
    <Header></Header>

    <!-- <div class="container"> -->
    <router-view></router-view>
    <!-- </div> -->
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
      theme: "",
      isDarkModeON: false,
    };
  },
  watch: {
    isDarkModeON(value) {
      if (value === true) {
        this.theme = "dark";
      } else {
        this.theme = "light";
      }
    },
  },
  methods: {
    switchMode() {
      this.isDarkModeON = !this.isDarkModeON;
    },
  },
};
</script>

<style lang="scss">
#app {
  // margin: 0 2.5rem;
  // overflow: hidden;
  
  #color-mode {
    position: fixed;
    z-index: 99999999;
    right: 2rem;
    top: 2rem;
    border: none;
    width: 46px;
    height: 46px;
    padding: 0.5rem;
    border-radius: 8px;
    cursor: pointer;
  }
}
</style>
