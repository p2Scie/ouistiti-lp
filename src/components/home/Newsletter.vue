<template>

<section class="section is-medium">
<div class="box is-shadowless" id="newsletterBlock">
  <svg width="60" height="83" id="topVec" viewBox="0 0 60 83" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M58.219 -15.3049C49.528 -59.621 6.55724 -88.5007 -37.7588 -79.8096C-82.0748 -71.1186 -110.954 -28.1478 -102.263 16.1682C-93.5724 60.4842 -50.6016 89.3639 -6.28564 80.6729C38.0304 71.9818 66.9101 29.0111 58.219 -15.3049Z" fill="#BD6F6D"/>
</svg>

    <div class="columns is-centered is-vcentered is-multiline is-variable is-5">
      <div class="column is-narrow">
        <h2>Lance-toi <span class="dot">•</span></h2>
        <p>
          Rejoins l’expérience et reçois chaque semaine des articles et des
          infos sur ce qu’il se passe autour de toi.
        </p>
        <!-- <button class="button">Je m'abonne</button> -->
      </div>
      <div class="column is-narrow is-offset-1">
        <button class="button">Je m'abonne</button>
      </div>
    </div>

    <svg width="113" height="48" id="bottomVect" viewBox="0 0 113 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M89.6376 11.6689C76.9501 2.52801 62.9571 -0.800412 47.6586 1.68365C32.3601 4.16771 20.1484 11.7529 11.0235 24.4392C2.38384 36.4473 -1.0431 49.6325 0.742641 63.9947L24.6453 60.1158C23.981 52.7189 25.9122 45.3238 30.1072 39.2015C36.3876 30.0588 45.4057 25.3387 57.1614 25.0413C61.8636 24.9217 66.5187 26.0129 70.6804 28.2102C80.8596 33.5942 86.817 41.5978 88.5527 52.2211L112.416 48.3497C109.916 33.0343 102.324 20.8073 89.6376 11.6689Z" fill="#2B2B39"/>
</svg>

  </div>
</section>
  

</template>

<style lang="scss">
.box {
  position: relative;
  background-color: #f8f1f0;
  border-radius: 41px;
  min-height: 277px;
  overflow: hidden;
    border-radius: 3.4rem;
  padding: 6rem;
  max-width: 1200px;
  margin: 0 auto;
  .column:first-child {
    max-width: 501px;
    h2 {
      font-family: "CeraPro-Black";
      font-size: 3rem;
      margin-bottom: 16px;
    }
    p {
      font-size: 16px;
      font-family: CircularStd-Regular;
    }
    
  }
}

svg#ano {
  /* align-self: flex-end; */
  position: absolute;
  bottom: 0;
  right: 6rem;
}

svg#circle {
  position: absolute;
  top: 0;
  left: 0;
}

#bottomVect {
  position: absolute;
  bottom: 0;
  right: 10%;
}
#topVec {
  position: absolute;
  top: 0;
  left: 0;
}

#newsletterBlock {
  position: relative;
}
.button {
  width: 175px;
height: 56px;
font-family: CeraPro-Regular;
font-size: 16px;
}
</style>
