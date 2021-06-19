<template>

<section class="section is-medium">
<div class="box is-shadowless">
    <div class="columns is-vcentered is-multiline is-variable is-5">
      <div class="column is-narrow">
        <h2>Lance-toi <span class="dot">•</span></h2>
        <p>
          Rejoins l’expérience et reçois chaque semaine des articles et des
          infos sur ce qu’il se passe autour de toi.
        </p>
      </div>
      <div class="column">
        <form
          action="https://gmail.us6.list-manage.com/subscribe/post?u=37449d26a6239c7da66c01081&amp;id=c11efb904a"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate is-flex"
          target="_blank"
          novalidate
        >
          <p class="control has-icons-left has-icons-right">
            <input
              class="input email"
              type="email"
              placeholder="Adresse mail"
              value=""
              name="EMAIL"
              id="mce-EMAIL"
              required
            />
            <span class="icon is-small is-left">
            <i class="far fa-envelope fa-lg"></i>
          </span>
          </p>

          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;" aria-hidden="true">
            <input
              type="text"
              name="b_37449d26a6239c7da66c01081_c11efb904a"
              tabindex="-1"
              value=""
            />
          </div>

          <div class="field">
            <input
              type="submit"
              class="button ml-2 has-weight-bold"
              value="Je m'abonne"
              name="subscribe"
              id="mc-embedded-subscribe"
            />
          </div>
        </form>
      </div>
    </div>
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
  max-width: 1254px;
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
</style>
