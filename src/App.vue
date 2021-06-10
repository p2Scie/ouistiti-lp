<template>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Home></Home>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Home from "@/components/Home.vue";

export default {
  name: "App",
  components: {
    Home,
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
  background: #06d6a0;
  border-radius: 6px;
  border: none;
  color: #fff;
  font-weight: 700;
}

p {
  font-family: "Montserrat", sans-serif;
}

.is-success.input,
.is-success.textarea {
  border-color: #06d6a0;
}

.input {
  border: 2px solid #06d6a0;
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
</style>
