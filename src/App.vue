<template>

    <Header></Header>
      <!-- <div class="container"> -->
  <router-view></router-view>
  <!-- </div> -->
  <Footer></Footer>
  
  
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
};
</script>

<style lang="scss">

html {
  font-size: 12px;
}
// .container {
//   max-width: 1120px;
//   margin: 0 auto;
// }



// header, main, footer {
//   grid-column: 1 / -1;
// }

// #app > * {
//   border: 1px solid red;
// }
// .title {
//   font-family: "Inter", sans-serif;
// }
// .subtitle {
//   font-family: "Montserrat", sans-serif;
//   font-size: 24px;
// }

// .button {
//   background: #bd6f6d;
//   border-radius: 6px;
//   border: none;
//   color: #fff;
// }

// p {
//   font-family: "Montserrat", sans-serif;
// }

// .is-success.input,
// .is-success.textarea {
//   border-color: #bd6f6d;
// }

// .input {
//   border: 2px solid #bd6f6d;
//   box-sizing: border-box;
//   border-radius: 6px;
// }

// .footer {
//   padding: 6rem 1.5rem 3rem;
// }

// i {
//   font-size: 26px;
// }
// .column {
//   margin: 0 auto;
// }

/* .mj-embedded-content, .paint-area {
  box-shadow: none!important;
} */

// iframe {
//   max-width: 100%;
//     height: auto;
//     width: 640px;
//     min-height: 360px;
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   margin-top: 80px;
// }

// .iframeContainer {
//   position: relative;
//   width: 100%;
//   padding-top: 56.25%;
// }

/* #wrapper {
    max-width: 1140px;
    margin: 0 auto;
    width: 100%;
} */

@import "./scss/helpers/_fonts.scss";

// #app {
//   position: relative;
//   .hero-img {
//     position: absolute;
//     top: 222px;
//     right: 0;
//   }
// }
img {
    display: block;
  max-width: 100%;
  height: auto;
}
</style>
