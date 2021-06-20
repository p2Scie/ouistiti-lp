<template>
  <svg
  id="headerVector"
    width="146"
    height="63"
    class="is-hidden-touch"
    viewBox="0 0 146 63"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.0144 25.3178C35.6049 37.8293 50.6965 44.0581 68.289 44.0044C85.8815 43.9507 100.924 37.6279 113.418 25.0358C125.246 13.1173 131.441 -1.05104 132.003 -17.4693L104.516 -17.388C103.941 -8.97769 100.456 -1.03285 94.6606 5.08122C85.9884 14.2088 75.0369 17.8901 61.8061 16.125C56.5138 15.4197 51.4903 13.3656 47.2174 10.1596C36.768 2.30727 31.5186 -7.72795 31.4692 -19.946L4.02821 -19.8662C4.09631 -2.25183 10.425 12.8095 23.0144 25.3178Z"
      fill="#2B2B39"
    />
  </svg>
<header>
  <nav class="navbar container" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <img src="@/assets/img/cespace_logo_couleur.png" alt="" />
      </router-link>

      <a
      @click="toggleNav"
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasic"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasic" class="navbar-menu" :class="isMobile ? 'is-active' : ''">
      <div class="navbar-start"></div>

      <div class="navbar-end">
        <router-link to="/about" class="navbar-item">À propos</router-link>
        <router-link to="/article" class="navbar-item">Articles</router-link>
        <router-link class="navbar-item" to="/contact">Contacts</router-link>
        <div class="navbar-item">
          <a class="button">
            Se connecter
          </a>
        </div>
      </div>
    </div>
  </nav>
</header>
  
</template>

<script>
export default {
  data() {
    return {
      isMobile: false,
    }
  },

  methods: {
    toggleNav() {
      this.isMobile = !this.isMobile;
    }
  },
};
</script>

<style lang="scss">

.navbar-item img {
    max-height: 32px;
}

.navbar {
  min-height: 44px;
}
.button {
  /* margin-left: 30px; */
  padding: 8px 40px;
  background: #bd6f6d;
  color: #fff;
  border: none;
  border-radius: 8px;
  height: 36px;
}

#subscribe {
  font-size: 1.3rem;
  font-family: CircularStd-Regular, sans-serif;
  font-weight: 500;
  color: #e5c5c5;
}

#headerVector {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  margin-bottom: 3.9rem;
}

.navbar-menu {
  text-align: center;
  .navbar-item {
  font-size: 1.3rem;
  font-family: CircularStd-Regular, sans-serif;
  font-weight: 500;
  color: #2b2b39;
}
}


</style>
