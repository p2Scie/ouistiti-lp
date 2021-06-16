<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img src="@/assets/img/logo-couleur-navbar.png" alt=""
      /></router-link>
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
      <div class="navbar-start">
        <router-link to="/about" class="navbar-item">À propos</router-link>
        <router-link to="/article" class="navbar-item">Articles</router-link>
        <router-link to="/contact" class="navbar-item">Contacts</router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <a class="button">
            <strong>M'inscrire</strong>
          </a>
        </div>
      </div>
    </div>
  </nav>

</template>

<script>
export default {};
</script>

<style scoped>


.button {
  width: 189px;
  height: 46px;
  padding: 8px 40px;
  background: #bd6f6d;
}
#brand-logo {
  margin-right: 151px;
}
</style>
