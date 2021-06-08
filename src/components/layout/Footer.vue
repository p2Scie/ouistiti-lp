<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <figure class="image mb-6">
        <img src="@/assets/img/logo_blanc.png" alt="" />
      </figure>
      <div class="social mb-5 has-text-white has-text-centered">
        <span class="icon mx-4">
          <i class="fab fa-facebook"></i>
        </span>
        <span class="icon mx-4">
          <i class="fab fa-instagram"></i>
        </span>
        <span class="icon mx-4">
          <i class="fab fa-twitter"></i>
        </span>
      </div>

      <p class="has-text-centered has-text-white">
        {{ copyright }}
      </p>
    </div>
  </footer>
</template>

<script>
    export default {
        data() {
            return {
                copyright: "© CÉ’SPACE, 2021. On fait des ravages !"
            }
        }
    }
</script>

<style scoped>
.footer {
  background-color: #06d6a0;
}
p {
    font-size: 15px;
    line-height: 24px;
}

img {
    width: 360px;
}
</style>
