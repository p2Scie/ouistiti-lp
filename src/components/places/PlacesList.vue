<template>
  <div v-if="showModal">
    <Modal @close="toggleModal">
      <AddPlace @save-data="saveData"></AddPlace>
    </Modal>
  </div>
  <div class="tabs">
    <ul>
      <li>
        <a class="filter-option" :class="activeFilters.all ? 'active' : ''">
          <input type="checkbox" name="" id="all" v-model="activeFilters.all" @click="removeFilters"/>
          <label for="all">Voir tout</label>
        </a>
      </li>
      <li>
        <a class="filter-option" :class="activeFilters.church ? 'active' : ''">
          <input
            type="checkbox"
            name=""
            id="church"
            v-model="activeFilters.church"
            @click="removeAllFilter"
          />
          <label for="church">Église</label>
        </a>
      </li>
      <li>
        <a class="filter-option" :class="activeFilters.castle ? 'active' : ''">
          <input
            type="checkbox"
            name=""
            id="castle"
            v-model="activeFilters.castle"
            @click="removeAllFilter"
          />
          <label for="castle">Château</label>
        </a>
      </li>
      <li>
        <a
          class="filter-option"
          :class="activeFilters.hospital ? 'active' : ''"
        >
          <input
            type="checkbox"
            name=""
            id="hospital"
            v-model="activeFilters.hospital"
            @click="removeAllFilter"
          />
          <label for="hospital">Hôpital</label>
        </a>
      </li>
      <li>
        <a class="filter-option" :class="activeFilters.house ? 'active' : ''">
          <input
            type="checkbox"
            name=""
            id="house"
            v-model="activeFilters.house"
            @click="removeAllFilter"
          />
          <label for="house">Maison</label>
        </a>
      </li>
      <li>
        <a class="filter-option" :class="activeFilters.park ? 'active' : ''">
          <input
            type="checkbox"
            name=""
            id="park"
            v-model="activeFilters.park"
            @click="removeAllFilter"
          />
          <label for="park">Parc</label>
        </a>
      </li>
      <li>
        <a
          class="filter-option"
          :class="activeFilters.lighthouse ? 'active' : ''"
        >
          <input
            type="checkbox"
            name=""
            id="lighthouse"
            v-model="activeFilters.lighthouse"
            @click="removeAllFilter"
          />
          <label for="lighthouse">Phare</label>
        </a>
      </li>
    </ul>
  </div>
  <!-- 
  <section :show="!!error">
    <p>{{ error }}</p>
  </section> -->

  <section>
    <!-- <div class="controls">
      <button class="btn" @click="toggleModal">Ajouter un lieu</button>
    </div> -->
    <div v-if="isLoading">
      <Spinner></Spinner>
    </div>

    <ul v-else-if="!isLoading && filteredPlaces.length > 0">
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
// import PlaceFilter from "./PlaceFilter.vue";
import AddPlace from "./form/AddPlace.vue";
import Spinner from "../Spinner.vue";

export default {
  components: {
    PlaceItem,
    // PlaceFilter,
    AddPlace,
    Modal,
    Spinner,
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
  created() {
    this.loadPlaces();
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
    async loadPlaces() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("loadPlaces");
      } catch (error) {
        this.error = error.message || "Quelque chose a mal tourné !";
      }

      this.isLoading = false;
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
