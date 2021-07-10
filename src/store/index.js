import { createStore } from "vuex";
// import placesModule from './modules/places/index.js'

const store = createStore({
  state() {
    return {
      places: [
        {
          id: "p1",
          name: "Villa Bella Kiss ",
          srcImg: "",
          type: "house",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum nisi aut impedit alias odio sit quis laborum provident enim, sunt cumque ipsum corrupti dolorum atque tempore similique qui quod necessitatibus.",
          location: "Val d'oise",
          area: 500, // m2
          availability: true,
          capacity: 300,
          floor: 3,
          isFavorite: false,
        },
        {
          id: "p2",
          name: "Le Pavillon Montsouris",
          srcImg: "",
          type: "park",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum nisi aut impedit alias odio sit quis laborum provident enim, sunt cumque ipsum corrupti dolorum atque tempore similique qui quod necessitatibus.",
          location: "Paris",
          area: 300, // m2
          availability: true,
          capacity: 100,
          floor: null,
          isFavorite: false,
        },
        {
          id: "p3",
          name: "Château d'Ancelle",
          srcImg: "",
          type: "castle",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum nisi aut impedit alias odio sit quis laborum provident enim, sunt cumque ipsum corrupti dolorum atque tempore similique qui quod necessitatibus.",
          location: "Ancelle",
          area: 800, // m2
          availability: true,
          capacity: 1000,
          floor: 2,
          isFavorite: false,
        },
      ]
    };
  },
  getters: {
    getPlace(state) {
      return state.places;
    },
  },
  mutations: {
    addPlace(state, payload) {
      state.places.push(payload)
    }
  },
  actions: {
    addPlace(context, data) {
      const placeData = {
        id: 'p4',
        name: data.name,
        type: data.type,
        description: data.description,
        availability: data.availability,
        location: data.location,
        floor: data.floor,
        area: data.area,
        capacity: data.capacity,
      }

      context.commit('addPlace', placeData);
    }
  }
});

export default store;
