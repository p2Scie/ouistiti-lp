<template>
  <main>
    <h2>Espace Admin</h2>
  </main>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      revele: false,
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    toggleModal() {
      this.revele = !this.revele;
    },
  },
};
</script>

<style lang="scss">
#sideVec {
  float: left;
}
</style>
