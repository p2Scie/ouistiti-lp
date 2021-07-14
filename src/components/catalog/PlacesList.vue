<template>
  <!-- <div v-if="showModal">
    <Modal @close="toggleModal">
      <AddPlace @save-data="saveData"></AddPlace>
    </Modal>
  </div> -->
  <PlaceFilter></PlaceFilter>
  <!-- 
  <section :show="!!error">
    <p>{{ error }}</p>
  </section> -->
  <!-- {{ places}} -->

  {{filteredPlaces}}
  <section>
    
    <div v-if="isLoading">
      <Spinner></Spinner>
    </div>
    
    <ul v-else-if="!isLoading && filteredPlaces.length > 0" v-for="place in places" :key="place.id">
      <li>{{ place.name }}</li>
    </ul>
     <h3 v-else>Aucun lieu trouvé.</h3>
  </section>
</template>

<script>
// import Modal from "../Modal.vue";
// import PlaceItem from "./PlaceItem.vue";
// import PlaceFilter from "./PlaceFilter.vue";
// import AddPlace from "./form/AddPlace.vue";
// import Spinner from "../Spinner.vue";

import PlaceFilter from "./PlaceFilter.vue";

export default {
  components: {
    // PlaceItem,
    // PlaceFilter,
    // AddPlace,
    // Modal,
    // Spinner,
    PlaceFilter,
  },

  //   for (const key in places) {
  //   const place = {
  //     id: places[key].id,
  //     name: places[key].name,
  //     category: places[key].category,
  //     description: places[key].description,
  //     location: places[key].location,
  //     floor: places[key].floor,
  //     area: places[key].area,
  //     capacity: places[key].capacity,
  //   };
  //   placesList.push(place);
  // }
  // if (error != null) {
  //   console.log(error);
  // }

  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        all: true,
        church: false,
        castle: false,
        hospital: false,
        house: false,
        park: false,
        lighthouse: false,
      },
      showModal: false,
    };
  },
  computed: {
    places() {
      return this.$store.getters.places;
    },
    filteredPlaces() {
      // const places = this.$store.getters.places;
      return false;
      // return places.filter(place => place.length)
      // return places.filter((place) => {
      //   if (this.activeFilters.all) {
      //     return true;
      //   }
      //   if (this.activeFilters.church && place.category.includes("church")) {
      //     return true;
      //   }
      //   if (this.activeFilters.castle && place.category.includes("castle")) {
      //     return true;
      //   }
      //   if (this.activeFilters.hospital && place.category.includes("hospital")) {
      //     return true;
      //   }
      //   if (this.activeFilters.house && place.category.includes("house")) {
      //     return true;
      //   }
      //   if (this.activeFilters.park && place.category.includes("park")) {
      //     return true;
      //   }
      //   if (
      //     this.activeFilters.lighthouse &&
      //     place.type.includes("lighthouse")
      //   ) {
      //     return true;
      //   }
      //   return false;
      // });
    },
  },
  created() {
    this.loadPlaces();
  },
  methods: {
    async loadPlaces() {
      // this.isLoading = true;
      try {
        await this.$store.dispatch("loadPlaces");
      } catch (error) {
        this.error = error.message || "Quelque chose a mal tourné !";
      }
      // this.isLoading = false;
    },
    removeAllFilter() {
      //passe le filtre all à "false" si un autre filtre est selectionner
      this.activeFilters.all = false;
    },
    removeFilters() {
      //passe les autres filtres à "false" si "all" est selectionner
      this.activeFilters.church = false;
      this.activeFilters.castle = false;
      this.activeFilters.hospital = false;
      this.activeFilters.house = false;
      this.activeFilters.park = false;
      this.activeFilters.lighthouse = false;
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
}
input[type="checkbox"] {
  display: none;
}
label {
  cursor: pointer;
}
</style>
