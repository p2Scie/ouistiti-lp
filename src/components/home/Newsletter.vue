<template>
  <section class="section is-medium has-background-dark">
    <div class="columns is-vcentered is-centered">
      <div class="column is-10">
        <div class="box">
          <!-- <img
            src="../../assets/img/shape1-newsletter.svg"
            alt=""
            id="shape1"
          /> -->

          <svg
            width="192"
            height="192"
            viewBox="0 0 192 192"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M176.219 80.2412C167.528 35.9252 124.557 7.04545 80.2412 15.7365C35.9252 24.4276 7.04551 67.3983 15.7366 111.714C24.4276 156.03 67.3984 184.91 111.714 176.219C156.03 167.528 184.91 124.557 176.219 80.2412Z"
              fill="#BD6F6D"
              id="shape1"
            />
          </svg>
          <div class="columns inner">
            <div class="column">
              <p class="title">Abonnez-vous à notre newsletter</p>
              <p class="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                eaque reprehenderit quas excepturi libero dignissimos molestiae
                hic odit! Perferendis fugit quas cum illo ullam ducimus placeat
                mollitia nobis repellendus odit.
              </p>
            </div>
            <div class="column">
              <input class="input" type="email" placeholder="Adresse mail" />

              <div class="control">
                <button class="button is-primary">Je m'abonne</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  /* max-width: 1255px;
  width: 100%;
  height: 277px;
  border-radius: 50px; */
  position: relative;
  background-color: #f8f1f0;
  border-radius: 41px;
  /* overflow: hidden; */
}

svg#shape1 {
  /* position: absolute;
  left: 19.24%;
  top: -50px;
  transform: rotate(-101.1deg); */
  position: absolute;
  left: -6.9%;
  right: 93.86%;
  top: 34.64%;
  bottom: 6.32%;

  transform: rotate(-101.1deg);
}
</style>
