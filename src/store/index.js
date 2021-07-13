import { createStore } from "vuex"
import Actions from "./actions.js"
import Getters from "./getters.js"




const store = createStore({
    state() {
      return {
        // places: [
        //     {
        //       id: "p1",
        //       name: "Villa Bella Kiss ",
        //       srcImg: "",
        //       type: "house",
        //       description:
        //         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum nisi aut impedit alias odio sit quis laborum provident enim, sunt cumque ipsum corrupti dolorum atque tempore similique qui quod necessitatibus.",
        //       location: "Val d'oise",
        //       area: 500, // m2
        //       availability: true,
        //       capacity: 300,
        //       floor: 3,
        //     },
        //     {
        //       id: "p2",
        //       name: "Le Pavillon Montsouris",
        //       srcImg: "",
        //       type: "park",
        //       description:
        //         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum nisi aut impedit alias odio sit quis laborum provident enim, sunt cumque ipsum corrupti dolorum atque tempore similique qui quod necessitatibus.",
        //       location: "Paris",
        //       area: 300, // m2
        //       availability: true,
        //       capacity: 100,
        //       floor: null,
        //       isFavorite: false,
        //     },
        //     {
        //       id: "p3",
        //       name: "Château d'Ancelle",
        //       srcImg: "",
        //       type: "castle",
        //       description:
        //         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum nisi aut impedit alias odio sit quis laborum provident enim, sunt cumque ipsum corrupti dolorum atque tempore similique qui quod necessitatibus.",
        //       location: "Ancelle",
        //       area: 800, // m2
        //       availability: true,
        //       capacity: 1000,
        //       floor: 2,
        //     },
        //   ],
      };
    }, 
    getters: Getters,
    mutations: {
        setPlaces(state, payload) {
          state.places = payload;
        },
      },
   actions: Actions,
  });
  
  export default store;