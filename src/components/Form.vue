<template>
          <section class="section is-medium has-background-light">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <p :style="{fontSize: '25px', lineHeight: '50px'}">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>
            <div class="column is-offset-2">
              <form action="">
                <div class="field">
                  <div class="control">
                    <input
                      class="input is-success"
                      type="text"
                      placeholder="Prénom"
                    />
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input
                      class="input is-success"
                      type="email"
                      placeholder="Adresse mail"
                    />
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <button
                      class="button is-medium px-6"
                      :style="{fontWeight: '500'}"
                    >
                      JE M'INSCRIS
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
export default {
    
}
</script>