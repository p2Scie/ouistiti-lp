<template>
  <div class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
       <div :style="{maxWidth: '650px', margin: '0 auto 6rem'}">
    <section
    class="section container is-flex is-justify-content-center iframeContainer"
    :style="{ margin: '0 auto!important' }"
  >
    <iframe
      class="box mt-6"
      src="https://www.youtube.com/embed/J4Qp65N5d2I"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </section>
</div>
    </div>
    <button
    
      class="modal-close is-large"
      aria-label="close"
      @click="toggleModal"
    ></button>
  </div>
</template>

<script>
export default {
  props: ['revele', 'toggleModal'],
  data() {
    return {
      title: "",
      text: "",
    };
  },
  
};
</script>

<style scoped>
.modal {
  display: block;
}
</style>
