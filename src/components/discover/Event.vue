<template>
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
  watch: {
    event(value) {
      if (value === "autre") {
        this.isOtherEventSelected = true;
      } else {
        this.isOtherEventSelected = false;
      }
    },
  },
};
</script>
