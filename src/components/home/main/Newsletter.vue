<template>
  <section class="newsletter">
    <div class="wrapper">
      <svg
        width="60"
        height="83"
        id="topVec"
        viewBox="0 0 60 83"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M58.219 -15.3049C49.528 -59.621 6.55724 -88.5007 -37.7588 -79.8096C-82.0748 -71.1186 -110.954 -28.1478 -102.263 16.1682C-93.5724 60.4842 -50.6016 89.3639 -6.28564 80.6729C38.0304 71.9818 66.9101 29.0111 58.219 -15.3049Z"
          fill="#BD6F6D"
        />
      </svg>

      <article>
        <h3>Lance-toi <span class="dot">•</span></h3>
        <p class="text">
          Rejoins l’expérience et reçois chaque semaine des articles et des
          infos sur ce qu’il se passe autour de toi.
        </p>
      </article>

      <form action="">
        <input
          type="email"
          name="email"
          placeholder="Adresse mail"
          class="input"
        />
        <button class="btn">Je m'abonne</button>
      </form>

      <svg
        width="113"
        id="bottomVec"
        height="48"
        viewBox="0 0 113 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M89.6376 11.6689C76.9501 2.52801 62.9571 -0.800412 47.6586 1.68365C32.3601 4.16771 20.1484 11.7529 11.0235 24.4392C2.38384 36.4473 -1.0431 49.6325 0.742641 63.9947L24.6453 60.1158C23.981 52.7189 25.9122 45.3238 30.1072 39.2015C36.3876 30.0588 45.4057 25.3387 57.1614 25.0413C61.8636 24.9217 66.5187 26.0129 70.6804 28.2102C80.8596 33.5942 86.817 41.5978 88.5527 52.2211L112.416 48.3497C109.916 33.0343 102.324 20.8073 89.6376 11.6689Z"
          fill="#2B2B39"
        />
      </svg>
    </div>
  </section>
</template>

<style lang="scss">
.newsletter {
  .wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1255px;
    min-height: 280px;
    background-color: $secondary-color-3;
    border-radius: 2.5rem;
    overflow: hidden;
    position: relative;
    padding: 76px;
    
    h3 {
      margin-bottom: 1rem;
    }

    .input {
      border: none;
      height: 48px;
      border-radius: 8px;
      width: 100%;
      padding: 1.125rem;
    }

    & > * {
      flex-grow: 1;
      flex-basis: 490px;
      max-width: 490px;
    }
    form {
      display: flex;
    }

    article, form {
      margin: 1rem 0;
    }
    #topVec {
      position: absolute;
      top: 0;
      left: 0;
    }
    #bottomVec {
      position: absolute;
      bottom: 0;
      right: 10%;
    }
  }

  @media (max-width: 768px) {
    .wrapper {
      padding: 96px 24px;
      form {
         flex-wrap: wrap;
      input {
        margin-bottom: 1rem;
      }
      
      }
     
    }
  }
}
</style>
