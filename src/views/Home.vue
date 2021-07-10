<template>
  <div v-if="showModal">
    <Modal @close="toggleModal"> </Modal>
  </div>
  <button class="btn" @click="toggleModal">Open Modal</button>

  <main>
    <div class="tabs">
      <ul>
        <li>
          <a @click.prevent="setSelectedComponent('PlacesList')">
            Lieux
          </a>
        </li>
        <li>
          <a @click.prevent="setSelectedComponent('ArtistsList')">Artists</a>
        </li>
      </ul>
    </div>

    <component :is="selectedComponent"> </component>
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
.tabs {
  -webkit-overflow-scrolling: touch;
  align-items: stretch;
  display: flex;
  font-size: 1rem;
  justify-content: space-between;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
  ul {
    align-items: center;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: flex-start;
    li {
      cursor: pointer;
    }
  }
}
</style>
