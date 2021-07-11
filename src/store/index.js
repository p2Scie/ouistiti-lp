import { createStore } from "vuex";
// import placesModule from './modules/places/index.js'
import { v4 as uuidv4 } from "uuid";

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
      ],
    };
  },
  getters: {
    getPlace(state) {
      return state.places;
    },
  },
  mutations: {
    addPlace(state, payload) {
      state.places.push(payload);
    },
    setPlaces(state, payload) {
      state.places = payload;
    },
  },
  actions: {
    async addPlace(context, data) {
      //génération d'un id random avec uuidv4
      const placeId = uuidv4();
      const placeData = {
        name: data.name,
        type: data.type,
        description: data.description,
        availability: data.availability,
        location: data.location,
        floor: data.floor,
        area: data.area,
        capacity: data.capacity,
      };
      const response = await fetch(
        `https://ce-space-default-rtdb.europe-west1.firebasedatabase.app/places/${placeId}.json`,
        {
          method: "PUT",
          body: JSON.stringify(placeData),
        }
      );

      // const responseData = await response.json();
      if (!response.ok) {
        //error ...
      }

      context.commit("addPlace", {
        ...placeData,
        id: placeId,
      });
    },
    async loadPlaces(context) {
      const response = await fetch(
        'https://ce-space-default-rtdb.europe-west1.firebasedatabase.app/places.json'
      );
      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(responseData.message || "L'extraction des données a échoué");
        throw error;
      }

      const places = [];
      // formatage des données récupéré depuis firebase au bon format
      for (const key in responseData) {
        const place = {
          id: key,
          name: responseData[key].name,
          type: responseData[key].type,
          description: responseData[key].description,
          availability: responseData[key].availability,
          location: responseData[key].location,
          floor: responseData[key].floor,
          area: responseData[key].area,
          capacity: responseData[key].capacity,
        };
        places.push(place);
      }

      context.commit('setPlaces', places)
    },
  },
});

export default store;
