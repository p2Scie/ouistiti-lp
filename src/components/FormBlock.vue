<template>
  <form @submit.prevent="submitForm" class="wrapper">
    <div class="form-control">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <label for="event"><h2>Vous souhaitez organiser :</h2></label>
<input
        type="text"
        name="event"
      v-if="isOtherEventSelected"
        v-model="otherEvent"
      />
      <select name="event" v-else v-model="event">
        <option value="" disabled selected>Selectionnez un évènement</option>
        <option value="anniversaire">Un anniversaire</option>
        <option value="mariage">Un mariage</option>
        <option value="conférence">Une conférence</option>
        <option value="autre">Autre</option>
      </select>

    </div>
    <div class="form-control">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <label for="place"><h2>Quels types de lieux vous intéressent ?</h2></label>
    </div>

    <button class="btn" id="formNext">Suivant</button>
  </form>

</template>

<script>
export default {
  data() {
    return {
      event: "",
      otherEvent: "",
      isOtherEventSelected: false,
    };
  },
  methods: {
    submitForm() {
      console.log(this.otherEvent);
    },
  }
};
</script>
<style lang="scss">
#formNext {
  float: right;
}
</style>
