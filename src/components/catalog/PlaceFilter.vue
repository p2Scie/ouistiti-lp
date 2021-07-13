<template>
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
</template>

<script>
export default {
    data() {
    return {
      activeFilters: {
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
}
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
  margin: 1.5rem 0;
  padding-bottom: 1rem;
  ul {
    align-items: center;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: flex-start;
    li {
      cursor: pointer;
    }
    a {
      align-items: center;

      color: $primary-color-4;
      display: flex;
      justify-content: center;
      margin-bottom: -1px;
      padding: 0.5em 0;
      margin-right: 1em;
      vertical-align: top;
      font-size: $text-size-2;
      font-family: "Cera Pro", sans-serif;
      font-weight: 700;
      border-bottom-color: $primary-color-5;
      border-bottom-style: solid;
      border-bottom-width: 1px;
      &.active {
        color: $secondary-color-1;
        border-bottom-color: $secondary-color-1;
        border-bottom-style: solid;
        border-bottom-width: 1px;
      }
    }
  }
}
</style>