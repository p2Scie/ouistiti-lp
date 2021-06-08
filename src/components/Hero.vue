<template>
      <section class="hero container">
    <div class="hero-body">
      <div class="columns is-vcentered">
        <div class="column is-three-fifths">
          <figure class="image mb-6">
            <img
              src="@/assets/img/logo.png"
              alt=""
              :style="{ width: '360px' }"
            />
          </figure>
          <h1 class="title is-1 mb-6" v-html="title"></h1>
          <p class="subtitle mb-6">{{ subtitle }}</p>
          <a href="#" class="button is-medium">Lorem Ipsum</a>
        </div>
        <div class="column is-hidden-touch">
          <figure class="image">
            <img src="@/assets/img/hero-pict.png" alt="" />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    data() {
    return {
      title: "The largest community of <br>photo enthusiasts",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim velit, dui justo, quis enim ut egestas aenean. Scelerisque sit purus & vestibulum ut. ",
    };
  },
}
</script>