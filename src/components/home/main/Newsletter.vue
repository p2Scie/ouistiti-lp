<template>
  <section id="newsletter">
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
      <h2 class="title">Lance-toi <span class="dot">•</span></h2>
      <p class="text">
        Rejoins l’expérience et reçois chaque semaine des articles et des infos
        sur ce qu’il se passe autour de toi.
      </p>
    </article>
    
      <form action="">
        <input type="email" name="email" placeholder="Adresse mail" />
        <button class="cta">Je m'abonne</button>
      </form>
    

    <svg
      width="113"
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
  </section>
</template>

<style lang="scss">
#newsletter {
  max-width: 1254.32px;
  margin: 0 var(--space-s-m);
  // margin: 0 auto;
  position: relative;
  border-radius: 2.5rem;
  padding: 96px 24px;
  overflow: hidden;
  #topVec {
    position: absolute;
    top: 0;
    left: 0;
  }
  h2 {
    margin-bottom: var(--space-m-3xs);
  }
  p {
    // margin-bottom: var(--space-l);
    margin-bottom: 32px;
  }
  form + svg {
    position: absolute;
    bottom: 0;
    right: 4rem;
    max-width: 100%;
  }
  form {
    display: flex;
    flex-wrap: wrap;
  }
  input {
    
    width: 100%;
    min-height: 48px;
    padding: 0px 40px 0px 16px;
    border-radius: 6px;
    border: none;
    margin-bottom: 16px;
  }

  .cta {
    border: none;
    padding: 14px 40px;
    max-height: 48px;
    width: 175px;
    font-size: 16px;
    color: white;
    border-radius: 6px;
    background-color: $cta-active-color-light;
  }
}

@media (min-width: 1024px) {
  #newsletter {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 73px 117px;
    article {
      margin-right: 1rem;
    }
     input {
        width: 312px;
      }
    form {
      flex-wrap: nowrap;
      margin-left: 1rem;
     
    }
  }
}
</style>
