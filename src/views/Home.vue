<template>
  <main>
  
<!-- <button class="btn" @click="setActiveStep('event')">Event</button>
<button class="btn" @click="setActiveStep('place')">Place</button> -->
   <!-- <Event v-if="activeStep === 'step1'"></Event>
   <Place v-if="activeStep === 'step2'"></Place> -->
   <!-- <keep-alive>
     <component :is="activeStep"></component>
   </keep-alive> -->

  </main>
</template>

<script>
// import FormBlock from '../components/FormBlock.vue'
// import Event from '../components/survey/Event.vue'
// import Place from '../components/survey/Place.vue'

export default {
 components: {

  //  Event, 
  //  Place
 },
 data() {
   return {
     activeStep: 'event',
   }
 },
 methods: {
   setActiveStep(step) {
     this.activeStep = step;
   }
 }
}
</script>

