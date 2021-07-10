<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="name">Nom</label>
      <input type="text" id="name" v-model.trim="name" />
    </div>

    <div class="form-control">
      <label for="type">type</label>
      <select name="" id="type" v-model="type">
        <option value="church">Église</option>
        <option value="castle">Château</option>
        <option value="hospital">Hôpital</option>
        <option value="house">Maison</option>
        <option value="park">Parc</option>
        <option value="lighthouse">Phare</option>
      </select>
    </div>

    <div class="form-control">
      <label for="description">Description</label>
      <textarea id="description" cols="30" rows="10" v-model.trim="description"></textarea>
    </div>

    <!-- <div class="form-control">
      <input
        type="checkbox"
        id="availability"
        value="availability"
        v-model="availability"
      />
      <label for="availability">Disponibilité</label>
    </div> -->

    <div class="form-control">
      <label for="location">Localisation</label>
      <input type="text" id="location" v-model.trim="location" />
    </div>

    <div class="form-control">
      <label for="area">Surface</label>
      <input type="number" id="area" v-model.number="area" />
    </div>

    <div class="form-control">
      <label for="capacity">Capacité d'acceuil</label>
      <input type="number" id="capacity" v-model.number="capacity" />
    </div>

    <div class="form-control">
      <label for="floor">Etage(s)</label>
      <input type="number" id="floor" v-model.number="floor" />
    </div>

    <button class="btn">Ajouter</button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      name: "",
      type: "",
      description: "",
      availability: true,
      location: "",
      floor: null,
      area: null,
      capacity: null,
    };
  },
  methods: {
    submitForm() {
      // on groupe tt dans un objet
      const formData = {
        name: this.name,
        type: this.type,
        description: this.description,
        availability: this.availability,
        location: this.location,
        floor: this.floor,
        area: this.area,
        capacity: this.capacity,
      }

      this.$emit('save-data', formData)
    },
  },
};
</script>
