import { projectFirestore } from "../firebase/config";

export default {
  async loadPlaces(context) {
    try {
      const res = await projectFirestore.collection("places").get();

      const places = res.docs.map((doc) => {
        //on regroupe les données dans un objet
        return {
          ...doc.data(),
          id: doc.id,
        };
      });

      context.commit("setPlaces", places);
    } catch (error) {
      console.log(error);
    }
  },
};
