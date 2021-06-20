<template>

  <section class="section is-medium" id="section4">
    <h2 class="has-text-centered">
      <span>• </span>Un peu de lecture ?<span> •</span>
    </h2>
    <div class="columns is-centered is-multiline is-variable is-5">
      <div class="column is-narrow">
        <div class="card">
          <figure>
            <img src="../../assets/img/card1.png" alt="" />
            <figcaption>
              <span>Le 01/02/2021</span>
              <h3>Le mythe du Bergain ...</h3>
              <p>LIEUX ATYPIQUES</p>
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="column is-narrow">
        <div class="card">
          <figure>
            <img src="../../assets/img/card2.png" alt="" />
            <figcaption>
              <span>Le 01/02/2021</span>
              <h3>Une oeuvre invisible ?</h3>
              <p>LIEUX ATYPIQUES</p>
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="column is-narrow">
        <div class="card">
          <figure>
            <img src="../../assets/img/card3.png" alt="" />
            <figcaption>
              <span>Le 01/02/2021</span>
              <h3>Nos lieux du mois</h3>
              <p>LIEUX ATYPIQUES</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#section4 {
  h2 {
    font-family: CeraPro-Black;
    font-size: 4rem;
    margin-bottom: 64px;
  }
}
.card {
  width: 273px;
  height: 287px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 14px 64px rgba(34, 34, 46, 0.08);
  border-radius: 17px;

  img {
    margin-bottom: 24px;
  }

  figcaption {
    span {
      font-family: CircularStd-Regular;
      font-size: 1rem;
      line-height: 15px;
      text-transform: uppercase;
    }

    p {
      font-family: CircularStd-Regular;
      font-size: 1rem;
      line-height: 15px;
      text-transform: uppercase;
      color: #bfbfc4;
    }
    h3 {
      font-family: CircularStd-Regular;
      font-size: 16px;
      margin: 24px 0;
    }
  }
}

</style>
