<template>
  <div>
    <h1>Comments</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="comment in comments" :key="comment.id" class="card">
        <h3>{{ comment.name }}</h3>
        <p><strong>Email:</strong> {{ comment.email }}</p>
        <p>{{ comment.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      comments: [],
      loading: true,
    };
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        this.comments = response.data;
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