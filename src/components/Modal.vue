<template>
  <div class="backdrop">
    <aside class="modal">
      <header class="modal-card-head">
        <h3 class="modal-card-title">{{ title }}</h3>
        <button class="btn" @click.self="closeModal">close</button>
      </header>
      <section class="modal-card-body">
        <slot></slot>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success">{{ action }}</button>
      </footer>
    </aside>
  </div>
</template>

<script>
export default {
  props: ["title", "action"],
  emits: ["close"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  width: 640px;
  max-width: 100%;
  max-height: calc(100vh - 40px);
  margin: 100px auto;
  background: white;
  border-radius: 10px;
  overflow: hidden;
}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 999999999999999999999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-card-head {
  border-bottom: 1px solid #dbdbdb;
  // border-top-left-radius: 6px;
  // border-top-right-radius: 6px;
}

.modal-card-foot,
.modal-card-head {
  align-items: center;
  background-color: #f5f5f5;
  display: flex;
  flex-shrink: 0;
  justify-content: flex-start;
  padding: 20px;
  position: relative;
}

.modal-card-foot {
  // border-bottom-left-radius: 6px;
  // border-bottom-right-radius: 6px;
  border-top: 1px solid #dbdbdb;
}

.modal-card-body {
  -webkit-overflow-scrolling: touch;
  background-color: #fff;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: auto;
  padding: 20px;
}
</style>
