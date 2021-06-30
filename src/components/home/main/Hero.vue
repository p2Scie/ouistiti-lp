<template>
  <section id="hero">
    <div class="wrapper">
      <h1 class="title">
        Osez rêver, <br>osez nos espaces <span class="dot"> •</span>
      </h1>
      <p class="lead text">
        Une sélection de sites toujours plus somptueux <br>spécialement pour vous.
      </p>
      <button class="btn cta-active">Découvrez nos lieux</button>
    </div>
  </section>
 
</template>

<script>
export default {};
</script>

<style lang="scss">
#hero {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 542px;
  padding: 5rem 2.5rem;
  background-image: url('~@/assets/img/tg1.svg');
  background-repeat: no-repeat;
  background-position: right;


  .title {
    margin-bottom: 2rem;
  }
  .lead {
    margin-bottom: 2rem;
  }

  
  @media (max-width: 1024px) {
    min-height: auto;
    // .lead,
    background-image: none;
    .svg {
      display: none;
    }
  }
}
.svg {
  position: absolute;
  top: 0;
  right: 0;

}
</style>
