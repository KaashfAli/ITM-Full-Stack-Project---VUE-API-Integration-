<template>
  <div>
    <h1>Photos</h1>
    <div v-if="loading">Loading...</div>
    <div v-else class="photo-grid">
      <div v-for="photo in photos" :key="photo.id" class="card">
        <img :src="photo.thumbnailUrl" :alt="photo.title" />
        <p>{{ photo.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      photos: [],
      loading: true,
    };
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        this.photos = response.data.slice(0, 20); // Limit for performance
        this.loading = false;
      });
  },
};
</script>

<style scoped>
.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
}
.card {
  text-align: center;
}
img {
  width: 100%;
  border-radius: 5px;
}
</style>
