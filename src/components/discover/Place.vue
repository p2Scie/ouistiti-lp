<template>
  <div class="form-control">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <label for="place"><h2>Quels types de lieux vous intéressent ?</h2></label>

    <PlaceControl></PlaceControl>
  </div>
</template>

<script>
import PlaceControl from "./PlaceControl.vue";
export default {
  components: {
    PlaceControl,
  },
};
</script>

