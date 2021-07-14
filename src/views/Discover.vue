<template>
  <section class="discover">
    <div class="wrapper">
      <div class="progressContainer">
        <div class="progressBar" v-if="count > 0">
          <div class="progressBar__value" :style="progressBarStyles"></div>
        </div>
        <p v-if="count > 0">{{ setPercentage }}%</p>
      </div>

      <form @submit.prevent="submitForm" class="wrapper">
        <keep-alive>
          <component :is="activeStep"></component>
        </keep-alive>

        <button class="btn-primary" @click="count++" v-if="count === 0">
          Commencer
        </button>
        <div v-else>
          <!-- <button class="btn" @click="count--">Prev</button> -->
          <button class="btn" @click="count++">Next</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import Start from "../components/discover/Start.vue";
import Event from "../components/discover/Event.vue";
import Place from "../components/discover/Place.vue";
import People from "../components/discover/People.vue";
import Date from "../components/discover/Date.vue";

export default {
  components: {
    Start,
    Event,
    Place,
    People,
    Date,
  },
  data() {
    return {
      steps: ["start", "event", "place", "people", "date"],
      count: 0,
      progress: 0,
    };
  },
  computed: {
    activeStep() {
      return this.steps[this.count];
    },
    setPercentage() {
      return (this.count / (this.steps.length - 1)) * 100;
    },
    progressBarStyles() {
      if (this.setPercentage < 0) {
        return { width: "0%" };
      }
      return { width: this.setPercentage + "%" };
    },
  },
  watch: {
    count(value) {
      // -1 pour itérer dans tableau
      const totalSteps = this.steps.length - 1;
      if (value < 0) {
        this.count = 0;
      } else if (value > totalSteps) {
        this.count = totalSteps;
      }
    },
  },
  methods: {
    submitForm() {
      const formData = {
        event: this.event,
        place: this.place,
        people: this.people,
        date: this.date,
      };
      console.log(formData);
    },
  },
};
</script>

<style lang="scss" scoped>
.discover {
  button,
  .btn-primary {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 4.125rem;
  }
  .progressBar {
    width: 90%; 
    height: 1rem;
    background-color: #e5c5c5;
    margin-bottom: 44px;

    .progressBar__value {
      display: block;
      background-color: #bd6f6d;
      width: 90%;
      height: 100%;
       font-family: "Circular Std";
     font-weight: 700;
  
    }
  }

  .progressContainer {
    display: flex;
    justify-content: space-between;
    p {
      margin-left: .5rem;
    }
  }

  .form-control label {
    margin-top: 1.5rem;
  }
}
</style>
