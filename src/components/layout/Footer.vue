<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <figure class="image mb-6">
        <img src="@/assets/img/logo_blanc.png" alt="" />
      </figure>
      <div class="social mb-5 has-text-white has-text-centered">
        <a href="https://www.linkedin.com/in/c%C3%A9-space-a29691214/" target="_blank">
          <span class="icon mx-4">
            <i class="fab fa-linkedin"></i>
          </span>
        </a>
        <a href="https://instagram.com/cspaceee?r=nametag" target="_blank">
          <span class="icon mx-4">
            <i class="fab fa-instagram"></i>
          </span>
        </a>
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
      copyright: "© CÉ’SPACE, 2021. On fait des ravages !",
    };
  },
};
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

a {
  color: inherit;
}
</style>
