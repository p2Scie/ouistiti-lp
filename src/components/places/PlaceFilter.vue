<template>
  <div class="tabs">
    <ul>
        <li>
        <a class="filter-option">
          <input
            type="checkbox"
            name=""
            id="all"
            
            @change="setFilter"
          />
          <label for="all">Voir tout</label>
        </a>
      </li>
      <li>
        <a class="filter-option">
          <input
            type="checkbox"
            name=""
            id="church"
            
            @change="setFilter"
          />
          <label for="church">Église</label>
        </a>
      </li>
      <li>
        <a class="filter-option">
          <input
            type="checkbox"
            name=""
            id="castle"
            
            @change="setFilter"
          />
          <label for="castle">Château</label>
        </a>
      </li>
      <li>
        <a class="filter-option">
          <input
            type="checkbox"
            name=""
            id="hospital"
            
            @change="setFilter"
          />
          <label for="hospital">Hôpital</label>
        </a>
      </li>
      <li>
        <a class="filter-option">
          <input
            type="checkbox"
            name=""
            id="house"
            
            @change="setFilter"
          />
          <label for="house">Maison</label>
        </a>
      </li>
      <li>
        <a class="filter-option">
          <input
            type="checkbox"
            name=""
            id="park"
            
            @change="setFilter"
          />
          <label for="park">Parc</label>
        </a>
      </li>
      <li>
        <a class="filter-option">
          <input
            type="checkbox"
            name=""
            id="lighthouse"
            
            @change="setFilter"
          />
          <label for="lighthouse">Phare</label>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  emits: ["change-filter"],
  data() {
    return {
      filters: {
        all: true,
        church: false,
        castle: false,
        hospital: false,
        house: false,
        park: false,
        lighthouse: false,
      },
    };
  },

  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;

      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };

      this.filters = updatedFilters;
      this.$emit("change-filter", updatedFilters);
    },
  },
};
</script>

<style lang="scss" scoped>
// input[type="checkbox"] {
//   display: none;
// }
</style>
