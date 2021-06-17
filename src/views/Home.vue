<template>
  <section class="hero container">
    <div class="hero-body has-text-centered-touch">
      <div class="columns is-vcentered">
        <div class="column is-half">
          <h1 class="title is-1 mb-6">L’expérience Cé’space</h1>
          <p class="subtitle mb-6">{{ subtitle }}</p>
          <button class="button is-medium" @click="toggleModal">
            Voir notre video
          </button>
        </div>
        <div class="column is-hidden-touch">
          <!-- <figure class="image">
            <img src="@/assets/img/hero-pict.png" alt="" />
          </figure> -->

          <svg
            width="705"
            height="460"
            viewBox="0 0 705 460"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M713.644 394.196L663.66 372.53L663.282 333.529L594.301 315.019L596.004 88.3716L712.783 1"
              stroke="#BD6F6D"
              stroke-miterlimit="10"
            />
            <path
              d="M125.679 1L131.954 422.673L79.2513 458.365H1V335.562V254.122V1M125.679 1H1M125.679 1L242.418 88.3089H595.192M1 1H712.783C712.783 1 712.783 389.855 712.783 397.877"
              stroke="#BD6F6D"
              stroke-miterlimit="10"
            />
            <path
              d="M714 389.855V459.373L449.748 458.925L405.442 347.239L548.21 347.239L548.847 347.555L600.172 372.338L614.79 373.714L631.716 372.338L645.97 370.779L662.896 365.643L714 389.855Z"
              fill="#BD6F6D"
            />
            <path
              d="M305.951 295.801H393.861L449.748 458.925H78.5027L305.951 295.801Z"
              fill="#BD6F6D"
            />
            <path
              d="M408.272 113.911L393.862 169.748V298.144L412.57 348.768L411.679 106.945L242.529 106.945L243.091 340.958"
              stroke="#BD6F6D"
              stroke-miterlimit="10"
            />
            <path
              d="M243.512 108.917L305.389 169.015V295.69L242.419 342.899L243.512 108.917Z"
              stroke="#BD6F6D"
              stroke-miterlimit="10"
            />
            <path
              d="M305.668 170.482H392.971L410.788 107.425L243.207 107.425L305.668 170.482Z"
              fill="#BD6F6D"
            />
            <path
              d="M458.072 212.418H534.185V347.531L458.072 347.69V212.418Z"
              stroke="#BD6F6D"
              stroke-miterlimit="10"
            />
            <path
              d="M661.408 366.492C651.19 369.484 639.801 373.308 629.044 374.447L627.42 376.648V375.181C627.42 375.181 623.699 374.259 628.888 372.98C629.002 372.018 628.788 371.636 628.888 370.045C629.044 364.909 628.469 359.567 627.42 357.836C626.371 356.105 623.699 355.371 621.917 354.638L622.347 346.228H625.738C635.4 346.299 661.622 346.516 661.622 346.516L662.006 366.377L661.408 366.492Z"
              stroke="#BD6F6D"
              stroke-miterlimit="10"
            />
            <path
              d="M621.918 355.371L570.825 335.079L570.825 326.758L622.32 346.223L621.918 355.371Z"
              stroke="#BD6F6D"
              stroke-miterlimit="10"
            />
            <path
              d="M628.738 374.079C628.738 374.079 628.653 373.609 628.738 372.811C616.967 373.915 604.184 373.651 593.781 369.743L548.179 346.856V335.09L570.852 335.09L621.917 355.371L627.413 358.306V372.931L632.607 378.849L630.106 374.097L628.738 374.079Z"
              stroke="#BD6F6D"
              stroke-miterlimit="10"
            />
            <path
              d="M572.921 326.024L593.938 325.014L653.097 345.1H622.809L572.921 326.024Z"
              stroke="#BD6F6D"
              stroke-miterlimit="10"
            />
            <path
              d="M593.937 325.014L594.13 316.346L650.424 331.16C650.424 331.16 656.66 333.177 662.896 334.094V346.064H654.467L593.937 325.014Z"
              stroke="#BD6F6D"
              stroke-miterlimit="10"
            />
            <path
              d="M650.192 323.92L608.532 313.788L608.532 183.35L650.192 173.508V323.92Z"
              stroke="#BD6F6D"
            />
            <path
              d="M322.582 222.4H378.395V297.04L322.582 297.269V222.4Z"
              stroke="#BD6F6D"
              stroke-miterlimit="10"
            />
            <path
              d="M8.83024 36.1786C8.83024 36.1786 5.26755 27.4816 2.10388 29.3889L2.4174 122.514L7.90394 129.316L8.83024 36.1786Z"
              fill="white"
            />
            <path
              d="M242.418 88.3088L242.418 108.852"
              stroke="#BD6F6D"
              stroke-miterlimit="10"
            />
            <path
              d="M286.961 265.861L300.62 262.927V220.585L286.961 214.328V265.861Z"
              fill="#BD6F6D"
            />
            <path
              d="M287.023 213.109L300.428 219.432L300.68 202.749C300.68 202.749 298.407 190.101 287.023 187.357V213.109Z"
              fill="#BD6F6D"
            />
            <path
              d="M293.426 219.981L299.287 222.34V261.459L294.158 262.288L293.426 219.981Z"
              fill="white"
            />
            <path
              d="M292.69 219.873L287.952 218.052L288.227 263.439L293.321 262.533L292.69 219.873Z"
              fill="white"
            />
            <path
              d="M293.357 192.049C293.357 192.049 299.373 197.039 299.638 202.964V218.312L293.357 215.191L293.357 192.049Z"
              fill="white"
            />
            <path
              d="M292.689 191.779C292.689 191.779 291.11 189.958 287.696 188.757L287.896 212.847L292.689 214.93V191.779Z"
              fill="white"
            />
            <path
              d="M254.89 275.399L274.72 270.886L273.71 212.594L254.89 203.974V275.399Z"
              fill="#BD6F6D"
            />
            <path
              d="M254.977 202.295L273.446 211.006L273.794 188.021C273.794 188.021 270.661 170.595 254.977 166.813V202.295Z"
              fill="#BD6F6D"
            />
            <path
              d="M263.798 211.763L271.873 215.014L272.701 268.314L264.807 270.055L263.798 211.763Z"
              fill="white"
            />
            <path
              d="M262.783 211.614L256.255 209.105L256.634 271.64L263.653 270.392L262.783 211.614Z"
              fill="white"
            />
            <path
              d="M263.703 173.278C263.703 173.278 271.991 180.153 272.356 188.318V209.464L263.702 205.163L263.703 173.278Z"
              fill="white"
            />
            <path
              d="M262.783 172.906C262.783 172.906 260.607 170.397 255.903 168.743L256.178 201.933L262.783 204.804V172.906Z"
              fill="white"
            />
            <path
              d="M165.806 300.345L202.746 291.293L200.866 180.478L165.806 164.09V300.345Z"
              fill="#BD6F6D"
            />
            <path
              d="M165.967 160.898L200.372 177.458L201.02 133.762C201.02 133.762 195.185 100.633 165.967 93.4448V160.898Z"
              fill="#BD6F6D"
            />
            <path
              d="M182.4 178.897L197.443 185.077L198.986 286.404L184.28 289.712L182.4 178.897Z"
              fill="white"
            />
            <path
              d="M180.508 178.613L168.348 173.844L169.053 292.726L182.129 290.355L180.508 178.613Z"
              fill="white"
            />
            <path
              d="M182.223 105.734C182.223 105.734 197.663 118.804 198.344 134.325V174.525L182.222 166.349L182.223 105.734Z"
              fill="white"
            />
            <path
              d="M180.51 105.028C180.51 105.028 176.456 100.259 167.694 97.1133L168.206 160.21L180.51 165.668V105.028Z"
              fill="white"
            />
            <path
              d="M42.1321 335.562L78.5033 322.273L76.7216 156.542L41.0879 135.528L42.1321 335.562Z"
              fill="#BD6F6D"
            />
            <path
              d="M41.2502 130.843L76.0977 155.154L76.7545 91.0045C76.7545 91.0045 70.8437 42.3679 41.2502 31.8149V130.843Z"
              fill="#BD6F6D"
            />
            <path
              d="M57.1232 152.14L73.2823 161.469L74.94 314.427L59.1431 319.421L57.1232 152.14Z"
              fill="white"
            />
            <path
              d="M55.4466 151.985L42.8696 144.803L43.599 323.823L57.1231 320.252L55.4466 151.985Z"
              fill="white"
            />
            <path
              d="M57.7157 49.8567C57.7157 49.8567 73.3542 69.0453 74.0438 91.8313V150.848L57.7151 138.845L57.7157 49.8567Z"
              fill="white"
            />
            <path
              d="M55.979 48.8196C55.979 48.8196 51.8735 41.8177 42.9985 37.2002L43.5174 129.832L55.979 137.844V48.8196Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>

  <svg
    width="205"
    height="350"
    viewBox="0 0 205 350"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M-78.0746 267.237L-45.2177 229.237C-22.3853 246.179 4.50608 251.444 34.8794 244.993C48.6938 242.048 61.6695 235.495 72.3384 226.11C86.3232 213.791 96.2198 199.808 101.817 184.505C106.581 171.479 108.275 157.246 106.884 142.307C105.856 131.352 102.932 120.719 98.204 110.738C94.5787 103.064 89.9811 95.9662 84.4725 89.5081L117.551 51.2505C128.401 62.5401 137.117 75.0378 143.455 88.4851C150.942 104.342 155.472 122.037 156.832 141.111C158.417 162.807 155.737 183.323 148.898 202.022C143.041 218.034 133.964 233.248 121.867 247.231C108.794 262.38 93.7539 274.229 77.2199 282.526C60.6486 290.81 42.0499 295.729 21.9161 297.209C1.78234 298.689 -17.3395 296.476 -34.8995 290.688C-50.1418 285.621 -64.6252 277.784 -78.0746 267.237ZM-89.4305 268.203C-57.417 295.909 -20.105 308.202 22.4547 305.108C65.0143 302.013 100.172 284.447 127.84 252.42C140.6 237.664 150.1 221.758 156.325 204.739C163.601 184.846 166.395 163.44 164.744 140.535C161.798 100.23 145.91 66.6169 117.056 39.6443L73.7938 89.6646C88.051 104.02 97.027 122.748 98.9547 143.046C100.277 156.901 98.7209 169.831 94.3524 181.775C89.2057 195.846 80.1228 208.646 67.0801 220.125C57.4689 228.585 45.7675 234.545 33.2439 237.201C2.49008 243.767 -23.9817 237.47 -46.2325 218.244L-89.4305 268.203Z"
      fill="#2B2B39"
    />
  </svg>

  <Modal v-if="revele" :revele="revele" :toggleModal="toggleModal"> </Modal>
  <!-- <section class="section is-medium container mb-0">
    <h1 class="title is-1 has-text-centered pb-6">{{ title2 }}</h1>
    <div class="columns is-multiline is-centered">
      <div class="column is-one-third is-narrow" :style="{ maxWidth: '398px' }">
        <figure class="image">
          <img src="@/assets/img/card1.png" alt="" />
        </figure>
        <p
          :style="{ fontSize: '16px', fontWeight: '400' }"
          class="has-text-centered p-6"
        >
          Je cherche mon lieu
        </p>
      </div>
      <div class="column is-one-third is-narrow" :style="{ maxWidth: '398px' }">
        <figure class="image">
          <img src="@/assets/img/card2.png" alt="" />
        </figure>
        <p
          :style="{ fontSize: '16px', fontWeight: '400' }"
          class="has-text-centered p-6"
        >
          Je regarde les artistes et animations du lieu
        </p>
      </div>
      <div class="column is-one-third is-narrow" :style="{ maxWidth: '398px' }">
        <figure class="image">
          <img src="@/assets/img/card3.png" alt="" />
        </figure>
        <p
          :style="{ fontSize: '16px', fontWeight: '400' }"
          class="has-text-centered p-6"
        >
          Je réserve mon lieu
        </p>
      </div>
    </div>
    

  </section> -->

  <!-- <Form></Form> -->
  <Newsletter></Newsletter>
</template>

<script>
// import Form from "@/components/Form.vue";
import Modal from "@/components/Modal.vue";
import Newsletter from "@/components/home/Newsletter.vue";

export default {
  components: {
    // Form,
    Modal,
    Newsletter,
  },
  data() {
    return {
      revele: false,
      isModalVisible: false,
      title: "Venez tout casser !",
      subtitle:
        "Découvrez des lieux, des histoires, des identités hors du commun. Puis proposez-les à vos clients afin de leur offrir une expérience insolite.",
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    toggleModal() {
      this.revele = !this.revele;
    },
  },
};
</script>

<style scoped>
svg {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>
