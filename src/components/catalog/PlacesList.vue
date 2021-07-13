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

  <section>
    <!-- <div class="controls">
      <button class="btn" @click="toggleModal">Ajouter un lieu</button>
    </div> -->
    <!-- <div v-if="isLoading">
      <Spinner></Spinner>
    </div> -->
    <!-- 
    <ul v-else-if="!isLoading && filteredPlaces.length > 0">
      <PlaceItem
        v-for="place in filteredPlaces"
        :key="place.id"
        :id="place.id"
        :name="place.name"
        :location="place.location"
      ></PlaceItem>
    </ul> -->

    <!-- <h3 v-else>Aucun lieu trouvé.</h3> -->
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
      const places = this.$store.getters.getPlace;
      return places.filter((place) => {
        if (this.activeFilters.all) {
          return true;
        }
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
  //   created() {
  //     this.loadPlaces();
  //   },
  async mounted() {
    try {
      let { data: places, error } = await this.$supabase
        .from("places")
        .select("*");
        
      const placesList = [];

      for (const key in places) {
        const place = {
          id: places[key].id,
          name: places[key].name,
          category: places[key].category,
          description: places[key].description,
          location: places[key].location,
          floor: places[key].floor,
          area: places[key].area,
          capacity: places[key].capacity,
        }
        placesList.push(place);
      }  
    
      console.log(places, error);
      console.log(placesList)

    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    saveData(data) {
      this.$store.dispatch("addPlace", data);
      //fermer la modal après soumission
      this.showModal = false;
    },
    loadPlaces() {
      //   this.isLoading = true;
      this.$store.dispatch("loadPlaces");

      //   this.isLoading = false;
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
