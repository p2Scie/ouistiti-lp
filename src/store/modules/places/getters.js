export default {
    places(state) {
        return state.places;
    },
    //check si il y a des lieux en bdd
    hasPlaces(state) {
        return state.places && state.places.length > 0;
    }

}