<template>
  <div>
    <h1>Albums</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="album in albums" :key="album.id" class="card">
        <p>{{ album.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      albums: [],
      loading: true,
    };
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        this.albums = response.data;
        this.loading = false;
      });
  },
};
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
}
</style>