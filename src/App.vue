<template>
  <Home></Home>
    <!-- <Header></Header> -->
    <!-- <router-view></router-view> -->
    <Footer></Footer>
    
</template>

<script>
// import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import Home from "@/views/Home.vue"
export default {
  name: "App",
  components: {
    // Header,
    Footer,
    Home
  },
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
  background: #bd6f6d;
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
  border-color: #bd6f6d;
}

.input {
  border: 2px solid #bd6f6d;
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

/* #wrapper {
    max-width: 1140px;
    margin: 0 auto;
    width: 100%;
} */
</style>
