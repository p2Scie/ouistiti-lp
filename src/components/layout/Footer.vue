<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <figure class="image mb-6">
        <img src="@/assets/img/cespace_logo_blanc.png" alt="" />
      </figure>
      <div class="social">
        <a href="https://instagram.com/cspaceee?r=nametag" target="_blank">
          <span class="icon">
            <i class="fab fa-instagram"></i>
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/c%C3%A9-space-a29691214/"
          target="_blank"
        >
          <span class="icon">
            <i class="fab fa-linkedin"></i>
          </span>
        </a>
      </div>

      <p>
        © CÉ’SPACE, 2021. On fait des ravages !
      </p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  padding: 8.75rem 0 3rem;
  background-color: #2b2b39;
  display: flex;
  flex-direction: columns;
  justify-content: center;
  align-items: center;
  img {
    width: 276px;
  }
  p {
    font-size: 15px;
    line-height: 24px;
    text-align: center;
    font-family: CircularStd-Regular, sans-serif;
    color: #fff;
    font-size: 1.25rem;
  }

  .social {
    margin: 3.8rem 0;
    text-align: center;
    .icon {
      font-size: 2rem;
      color: #fff;
      &:first-child {
        margin-right: 2.25rem;
      }
    }
  }
}
</style>
