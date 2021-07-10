<template>
  <section>
    <h3>Trouver votre lieu</h3>
    <!-- <span class="filter-option">
      <input type="checkbox" name="" id="all" checked @change="setFilter" />
      <label for="all">Voir tout</label>
    </span> -->

    <span class="filter-option">
      <input type="checkbox" name="" id="church" checked @change="setFilter" />
      <label for="church">Église</label>
    </span>

    <span class="filter-option">
      <input type="checkbox" name="" id="castle" checked @change="setFilter" />
      <label for="castle">Château</label>
    </span>

    <span class="filter-option">
      <input
        type="checkbox"
        name=""
        id="hospital"
        checked
        @change="setFilter"
      />
      <label for="hospital">Hôpital</label>
    </span>

    <span class="filter-option">
      <input type="checkbox" name="" id="house"  checked @change="setFilter" />
      <label for="house">Maison</label>
    </span>

    <span class="filter-option">
      <input type="checkbox" name="" id="park" checked @change="setFilter" />
      <label for="park">Parc</label>
    </span>

    <span class="filter-option">
      <input
        type="checkbox"
        name=""
        id="lighthouse"
        checked
        @change="setFilter"
      />
      <label for="lighthouse">Phare</label>
    </span>
  </section>
</template>

<script>
export default {
  emits: ["change-filter"],
  data() {
    return {
      filters: {
        church: true,
        castle: true,
        hospital: true,
        house: true,
        park: true,
        lighthouse: true,
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
