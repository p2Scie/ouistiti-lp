<template>
  <div v-if="showModal">
    <Modal @close="toggleModal">
      <AddPlace @save-data="saveData"></AddPlace>
    </Modal>
  </div>

  <section>
    <PlaceFilter @change-filter="setFilters"></PlaceFilter>
  </section>

  <section>
    <div class="controls">
      <button class="btn" @click="toggleModal">Ajouter un lieu</button>
    </div>

    <ul v-if="filteredPlaces.length > 0">
      <PlaceItem
        v-for="place in filteredPlaces"
        :key="place.id"
        :id="place.id"
        :name="place.name"
        :location="place.location"
      ></PlaceItem>
    </ul>

    <h3 v-else>Aucun lieu trouvé.</h3>
  </section>
</template>

<script>
import Modal from "../Modal.vue";
import PlaceItem from "./PlaceItem.vue";
import PlaceFilter from "./PlaceFilter.vue";
import AddPlace from "./form/AddPlace.vue";

export default {
  components: {
    PlaceItem,
    PlaceFilter,
    AddPlace,
    Modal,
  },
  data() {
    return {
      activeFilters: {
        all: true,
        church: true,
        castle: true,
        hospital: true,
        house: true,
        park: true,
        lighthouse: true,
      },
      showModal: false,
    };
  },
  computed: {
    filteredPlaces() {
      const places = this.$store.getters.getPlace;

      return places.filter((place) => {
        if (this.activeFilters.church && place.type.includes("church")) {
          return true;
        }
        if (this.activeFilters.castle && place.type.includes("castle")) {
          return true;
        }
        if (this.activeFilters.hospital && place.type.includes("hospital")) {
          return true;
        }
        if (this.activeFilters.house && place.type.includes("house")) {
          return true;
        }
        if (this.activeFilters.park && place.type.includes("park")) {
          return true;
        }
        if (
          this.activeFilters.lighthouse &&
          place.type.includes("lighthouse")
        ) {
          return true;
        }

        return false;
      });
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    saveData(data) {
      this.$store.dispatch('addPlace', data)
      //fermer la modal après soumission
      this.showModal = false;
    }
  },
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
}
</style>
