<template>
  <button class="btn" @click="count++" v-if="count === 0">Commencer</button>

  <div v-else>
    <button class="btn" @click="count--">Prev</button>
    <button class="btn" @click="count++">Next</button>
  </div>
<progress max="100" :value="setPercentage" v-if="count > 0"> {{ setPercentage }}%</progress>

  <form @submit.prevent="submitForm" class="wrapper">
    <keep-alive>
      <component :is="activeStep"></component>
    </keep-alive>
  </form>
</template>

<script>
import Start from "../components/survey/Start.vue";
import Event from "../components/survey/Event.vue";
import Place from "../components/survey/Place.vue";
import People from "../components/survey/People.vue";
import Date from "../components/survey/Date.vue";

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
    };
  },
  computed: {
    activeStep() {
      return this.steps[this.count];
    },
    setPercentage() {
        return (this.count / (this.steps.length - 1)) * 100;
    }
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
};
</script>
