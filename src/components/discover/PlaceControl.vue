<template>
  <ul>
    <li :class="{selected: selectedOption === 'église'}">
      <button type="button" @click="selected('église')">1. Église</button>
    </li>
    <li :class="{selected: selectedOption === 'château'}">
      <button type="button" @click="selected('château')">2. Château</button>
    </li>
    <li :class="{selected: selectedOption === 'hôpital'}">
      <button type="button" @click="selected('hôpital')">3. Hôpital</button>
    </li>
    <li :class="{selected: selectedOption === 'maison'}">
      <button type="button" @click="selected('maison')">4. Maison</button>
    </li>
    <li :class="{selected: selectedOption === 'parc'}"><button type="button" @click="selected('parc')">5. Parc</button></li>
    <li :class="{selected: selectedOption === 'phare'}"><button type="button" @click="selected('phare')">6. Phare</button></li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: null,
    };
  },
  methods: {
    selected(option) {
      this.selectedOption = option;
    },
  },
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  li {
    margin: 0 1rem;
border: 1px solid grey;
    button {
      
      padding: 1rem;
    }
  }
}

.selected {
  border-color: lightseagreen;
}

.selected button {
  color: lightseagreen;
}
</style>
