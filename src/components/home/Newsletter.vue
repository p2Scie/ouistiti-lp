<template>
  <section class="section container is-medium">
    <div class="box is-shadowless p-6 is-flex">
        <svg width="60" height="83" viewBox="0 0 60 83" fill="none" xmlns="http://www.w3.org/2000/svg" id="circle">
<path d="M58.219 -15.3049C49.528 -59.621 6.55724 -88.5007 -37.7588 -79.8096C-82.0748 -71.1186 -110.954 -28.1478 -102.263 16.1682C-93.5724 60.4842 -50.6016 89.3639 -6.28564 80.6729C38.0304 71.9818 66.9101 29.0111 58.219 -15.3049Z" fill="#BD6F6D"/>
</svg>

      <div class="columns is-vcentered is-centered is-multiline">
        <div class="column is-12-touch is-6-desktop">
          <h3 class="title has-text-centered-touch">
            Abonnez-vous à notre newsletter
          </h3>
          <p class="has-text-centered-touch">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum,
            sit commodo et id diam, consequat, tortor gravida ac.
          </p>
        </div>
        <div
          class="column is-flex-desktop is-narrow is-align-items-center has-text-centered-touch is-7-touch"
        >
          
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Adresse mail" />
              <span class="icon is-small is-left">
                <i class="far fa-envelope fa-lg"></i>
              </span>
            </p>
          
          <div class="field">
            <button class="button p-5 ml-2 has-weight-bold">
              Je m'abonne
            </button>
          </div>
        </div>
      </div>
      <svg width="113" height="48" viewBox="0 0 113 48" fill="none" xmlns="http://www.w3.org/2000/svg" id="ano">
<path d="M89.6376 11.688C76.9501 2.54705 62.9571 -0.781369 47.6586 1.7027C32.3601 4.18675 20.1484 11.7719 11.0235 24.4582C2.38384 36.4663 -1.0431 49.6515 0.742641 64.0137L24.6453 60.1348C23.981 52.7379 25.9122 45.3428 30.1072 39.2206C36.3876 30.0778 45.4057 25.3578 57.1614 25.0604C61.8636 24.9408 66.5187 26.0319 70.6804 28.2292C80.8596 33.6132 86.817 41.6169 88.5527 52.2401L112.416 48.3688C109.916 33.0533 102.324 20.8264 89.6376 11.688Z" fill="#2B2B39"/>
</svg>

    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  position: relative;
  background-color: #f8f1f0;
  border-radius: 41px;
  min-height: 277px;
  overflow: hidden;
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
