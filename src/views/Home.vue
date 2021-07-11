<template>
  <div v-if="showModal">
    <Modal @close="toggleModal"> </Modal>
  </div>
  <!-- <button class="btn" @click="toggleModal">Open Modal</button> -->

  <main class="main">
    <div class="wrapper">
      <article>
        <ul>
          <li><h1>Espace Admin <span class="dot"> •</span></h1></li>
          <li> <p class="lead">1 lieux et 2 artistes.</p></li>
        </ul>
        
       
        <div class="controls">
          <button class="btn-secondary">Ajouter un lieu</button>
          <button class="btn-secondary">Ajouter un artist</button>
        </div>
      </article>

      <!-- <div class="tabs">
        <ul>
          <li>
            <a
              @click.prevent="setSelectedComponent('PlacesList')"
              :class="selectedComponent === 'PlacesList' ? 'active' : ''"
            >
              Catalogue Lieux
            </a>
          </li>
          <li>
            <a
              @click.prevent="setSelectedComponent('ArtistsList')"
              :class="selectedComponent === 'ArtistsList' ? 'active' : ''"
              >Catalogue Artists</a
            >
          </li>
        </ul>
      </div> -->
      <keep-alive>
        <component :is="selectedComponent"> </component>
      </keep-alive>
    </div>
  </main>
</template>

<script>
import Modal from "../components/Modal.vue";
import PlacesList from "../components/places/PlacesList.vue";
import ArtistsList from "../components/artists/ArtistsList.vue";

export default {
  components: {
    Modal,
    PlacesList,
    ArtistsList,
  },
  data() {
    return {
      showModal: false,
      selectedComponent: "PlacesList",
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: var(--space-s-s) 2.5rem;
  
}
main  article {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  .controls button:first-child {
    margin-right: 1rem;
  }
}
h1 {
  margin-bottom: 2rem;
}

.lead {
  color: $primary-color-3;
}
</style>
