export default {
  async loadPlaces(context) {

      const { data: places, error } = await this.$supabase.from("places").select("*");

      const placesList = [];
      
      context.commit("setPlaces", placesList);
      console.log(places, error);
  
  },
};
