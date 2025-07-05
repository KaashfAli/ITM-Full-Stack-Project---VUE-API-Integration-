<template>
  <div>
    <h1>Users</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="user in users" :key="user.id" class="card">
        <h2>{{ user.name }}</h2>
        <p>Email: {{ user.email }}</p>
        <p>Phone: {{ user.phone }}</p>
        <p>Website: {{ user.website }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      loading: true,
    };
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.users = response.data;
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