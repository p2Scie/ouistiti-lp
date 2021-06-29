<template>
  <header>
    <!-- <p style="position: fixed; top:0;">{{scrollPosition}}</p> -->
    <svg
      id="headerVector"
      width="146"
      height="63"
      viewBox="0 0 146 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.0144 25.3178C35.6049 37.8293 50.6965 44.0581 68.289 44.0044C85.8815 43.9507 100.924 37.6279 113.418 25.0358C125.246 13.1173 131.441 -1.05104 132.003 -17.4693L104.516 -17.388C103.941 -8.97769 100.456 -1.03285 94.6606 5.08122C85.9884 14.2088 75.0369 17.8901 61.8061 16.125C56.5138 15.4197 51.4903 13.3656 47.2174 10.1596C36.768 2.30727 31.5186 -7.72795 31.4692 -19.946L4.02821 -19.8662C4.09631 -2.25183 10.425 12.8095 23.0144 25.3178Z"
        fill="#2B2B39"
      />
    </svg>

    <nav class="navbar-desktop" :class="{ position: scrollPosition > 50 }">
      <div class="wrapper">
        <ul class="nav-start">
          <li>
            <router-link to="/" class="navbar-item">
              <img src="@/assets/img/cespace_logo_couleur.png" alt="" />
            </router-link>
          </li>

          <li><router-link to="/" class="text">À propos</router-link></li>
          <li><router-link to="/" class="text">Blog</router-link></li>
          <li><router-link to="/" class="text">Contacts</router-link></li>
        </ul>
        <ul class="nav-end">
          <li class="text">Connexion</li>
          <li v-if="scrollPosition > 50">
            <button class="btn cta-active">CTA</button>
          </li>
        </ul>
      </div>
    </nav>

    <nav class="navbar-mobile">
      <ul class="bottom-nav">
        <li>
          <a href="#" class="bottom-nav-link">
            <span class="icon"><i class="fas fa-user-alt"></i></span>
            <span>Profil</span>
          </a>
        </li>
        <li>
          <a href="#" class="bottom-nav-link">
            <span class="icon"><i class="fas fa-user-alt"></i></span>
            <span>Catégorie</span>
          </a>
        </li>
        <li>
          <a href="#" class="bottom-nav-link">
            <span class="icon"><i class="fas fa-user-alt"></i></span>
            <span>Favoris</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>

  <!-- <header>
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
        
        <router-link to="" class="navbar-item mx-5">À propos</router-link>
        <router-link to="" class="navbar-item mx-5">Articles</router-link>
        <router-link class="navbar-item mx-5" to="">Contacts</router-link>
        <div class="navbar-item ">
          <a class="button">
            Se connecter
          </a>
        </div>
      </div>
    </div>
  </nav>
</header> -->
  <!-- 
<header>
   <router-link to="/" class="navbar-item">
        <img src="@/assets/img/cespace_logo_couleur.png" alt="" />
      </router-link>
  <nav>
    <ul>
      <li><a href="#">À propos</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header> -->
</template>

<script>
export default {
  data() {
    return {
      isMobile: false,
      scrollPosition: null,
    };
  },
  watch: {
    scrollPosition(value) {
      if (value > 50) {
        console.log("good");
      }
    },
  },
  methods: {
    toggleNav() {
      this.isMobile = !this.isMobile;
    },
    updateScroll() {
      this.scrollPosition = Math.round(window.scrollY);
    },
  },
  created() {
    window.addEventListener("scroll", this.updateScroll);
  },
  unmounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style lang="scss">
.navbar-item img {
  max-height: 32px;
}

header {
  .position {
    z-index: 999999999;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 5px 0px;
    position: fixed !important;
    top: 0;
    background: white;
    padding-top: 1.25rem !important;
    padding-bottom: 1.25rem !important;
    transition: all 0.4s;
  }
  padding: 0 2.5rem;
  svg {
    display: block;
    margin: 0 auto;
    margin-bottom: 4rem;
  }
  .navbar-desktop {
    width: 100%;
    padding: 0 2.5rem;
  }
  .navbar-desktop .wrapper {
    
    // border: 1px solid red;
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: space-between;
    .nav-start,
    .nav-end {
      display: flex;
      align-items: center;
      li {
        margin-right: 2rem;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .navbar-mobile {
    display: none;
    position: fixed;
    background-color: $bg-dark;
    color: $bg-light;
    bottom: 0;
    left: 0;
    width: 100%;
    .bottom-nav {
      z-index: 99999999;

      max-width: 560px;
      margin: 0 auto;
      display: grid;
      height: 4rem;
      grid-template-columns: repeat(3, 1fr);
      align-items: center;
      .bottom-nav-link {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 8px;
        .icon {
          margin-bottom: 0.3rem;
        }
      }
    }
  }
  @media (max-width: 992px) {
    .navbar-desktop {
      display: none;
    }
    .navbar-mobile {
      display: block;
    }
  }
}
</style>
