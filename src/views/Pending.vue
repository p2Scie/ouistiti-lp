<template>
  <section class="pending">
    <div class="wrapper">
      <router-link to="/">
         <button class="btn-secondary">
              <span
                ><svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 5.5H3.915L6.71 2.705L6 2L2 6L6 10L6.705 9.295L3.915 6.5H10V5.5Z"
                    fill="#40404D"
                  />
                </svg>
              </span>
              Retour
            </button>
      </router-link>
      <h1 class="title">
        <span class="dot">• </span>EN CONSTRUCTION <span class="dot"> •</span>
      </h1>
      <p class="lead text">
        Cette page sera bientôt disponible...
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.pending {
  padding-top: 0;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
  }
  .title {
    margin-bottom: 2.5rem;
  }
  .lead {
    text-align: center;
    font-size: var(--title-size-4);
    color: $primary-color-2;
  }
  .btn-secondary {
    padding: 0.5em 1.5em;
    background: $secondary-color-2;
    border-radius: 8px;
    font-size: 1rem;
    color: $primary-color-2;
    font-family: Circular Std, sans-serif;
    font-weight: 700;
    margin-bottom: 127px;
    span {
      margin-right: 0.625em;
    }
  }
}
</style>
