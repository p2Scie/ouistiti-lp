<template>
  <section class="process">
    <div class="wrapper">
      <article>
        <span>
          <svg
            width="36"
            height="35"
            viewBox="0 0 36 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.3246 21.574H23.7836L23.2375 21.0473C25.1491 18.8236 26.3 15.9366 26.3 12.7961C26.3 5.7933 20.6236 0.116943 13.6208 0.116943C6.61801 0.116943 0.94165 5.7933 0.94165 12.7961C0.94165 19.7989 6.61801 25.4753 13.6208 25.4753C16.7613 25.4753 19.6483 24.3244 21.872 22.4128L22.3987 22.9589V24.4999L32.1519 34.2336L35.0583 31.3272L25.3246 21.574ZM13.6208 21.574C8.76371 21.574 4.84293 17.6532 4.84293 12.7961C4.84293 7.93901 8.76371 4.01822 13.6208 4.01822C18.4779 4.01822 22.3987 7.93901 22.3987 12.7961C22.3987 17.6532 18.4779 21.574 13.6208 21.574Z"
              fill="#BD6F6D"
            /></svg
        ></span>
        <h4>Cherchez</h4>
        <p>Une propriété via une sélection<br />faite spécialement pour vous</p>
      </article>
      <article>
        <span
          ><svg
            width="26"
            height="33"
            viewBox="0 0 26 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 16.1753C11.2409 16.1753 9.8016 14.736 9.8016 12.9768C9.8016 11.2177 11.2409 9.7784 13 9.7784C14.7592 9.7784 16.1985 11.2177 16.1985 12.9768C16.1985 14.736 14.7592 16.1753 13 16.1753ZM22.5953 13.2967C22.5953 7.49152 18.3574 3.38154 13 3.38154C7.64265 3.38154 3.40473 7.49152 3.40473 13.2967C3.40473 17.0388 6.5232 21.9964 13 27.9135C19.4769 21.9964 22.5953 17.0388 22.5953 13.2967ZM13 0.183105C19.7167 0.183105 25.7938 5.33258 25.7938 13.2967C25.7938 18.6061 21.5238 24.891 13 32.1674C4.47621 24.891 0.206299 18.6061 0.206299 13.2967C0.206299 5.33258 6.28332 0.183105 13 0.183105Z"
              fill="#BD6F6D"
            /></svg
        ></span>
        <h4>Trouvez</h4>
        <p>La perle rare grâce à notre<br />catalogue</p>
      </article>
      <article>
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 0.333252C7.71937 0.333252 0.187256 7.79992 0.187256 16.9999C0.187256 26.1999 7.71937 33.6666 17 33.6666C26.2806 33.6666 33.8127 26.1999 33.8127 16.9999C33.8127 7.79992 26.2806 0.333252 17 0.333252ZM17 30.3333C9.58558 30.3333 3.5498 24.3499 3.5498 16.9999C3.5498 9.64992 9.58558 3.66659 17 3.66659C24.4144 3.66659 30.4502 9.64992 30.4502 16.9999C30.4502 24.3499 24.4144 30.3333 17 30.3333ZM24.7171 9.63325L13.6375 20.6166L9.28295 16.3166L6.91235 18.6666L13.6375 25.3333L27.0876 11.9999L24.7171 9.63325Z"
            fill="#BD6F6D"
          />
        </svg>

        <h4>Réservez</h4>
        <p>Avec notre agenda <br />afin de réaliser votre projet</p>
      </article>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.process {
  .wrapper {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    h4 {
      font-weight: 700;
      margin-top: 10px;
      margin-bottom: 4px;
    }
  }

  @media (max-width: 992px) {
    .wrapper {
      grid-auto-flow: row;
      & > * {
        margin: 2rem;
      }
    }
  }
}

*[data-theme="true"] {
  article svg {
    path {
      fill: $secondary-color-0;
    }
  }
}

</style>
