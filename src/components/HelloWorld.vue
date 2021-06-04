<template>
  <div class="hello">
    <nav
      class="navbar container py-2"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img src="@/assets/logo.png" />
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start"></div>

        <div class="navbar-end">
          <a class="navbar-item">
            Lien 1
          </a>

          <a class="navbar-item">
            Lien 2
          </a>
          <a class="navbar-item">
            Lien 3
          </a>
        </div>
      </div>
    </nav>

    <section class="hero container p-5">
      <div class="hero-body ">
        <p class="title is-1">
          Blablablaaaa
        </p>
        <p class="subtitle">
          Blablabla niké vos mères
        </p>

        <a href="#" class="button is-medium is-link">C'est parti !</a>
      </div>

      <!-- <figure>
         <img src="@/assets/logo.png" />
      </figure> -->
    </section>

    <section class="section has-background-light ">
      <h1 class="has-text-centered title is-3">C'est quoi ?</h1>
      <p class="has-text-centered">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    </section>

    <section class="section is-medium">
      <h1  class="has-text-centered title is-3">Comment ça marche ?</h1>
    </section>

    <section class="section has-text-centered has-background-primary py-6">
      <h1 class="title has-text-white pb-4">Démarrer sans plus attendre</h1>
      <button class="button is-outlined">C'est parti !</button>
    </section>

    <footer class="footer has-background-dark has-text-white">
      <div class="content has-text-centered ">
        <p>
         Copyright © 2021 Ouistiti
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  border-bottom: 1px solid lightgray;
}
.has-background-primary {
  background-color: #42b983 !important;
}
/* .has-background-dark {
  background-color: #35495e!important;
} */
</style>
