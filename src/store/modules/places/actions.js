export default {
  addPlace(context, data) {
    const placeData = {
      id: context.rootGetters.userId,
      name: data.name,
      type: data.type,
      description: data.description,
      location: data.location,
      area: data.area,
      availability: data.availability,
      capacity: data.capacity,
      floor: data.floor,
    };

    fetch('https://ce-space-default-rtdb.europe-west1.firebasedatabase.app/places.json', {
      method: 'POST',
      body: JSON.stringify(placeData)
    });

    context.commit('addPlace', placeData);
  },
};
