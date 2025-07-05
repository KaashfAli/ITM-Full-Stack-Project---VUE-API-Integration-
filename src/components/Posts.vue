<template>
  <div>
    <h1>Posts</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="post in posts" :key="post.id" class="card">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      loading: true,
    };
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.posts = response.data;
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