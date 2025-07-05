<template>
  <div>
    <h1>Todos</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="todo in todos" :key="todo.id" class="card">
        <p>
          <input type="checkbox" :checked="todo.completed" disabled />
          {{ todo.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      todos: [],
      loading: true,
    };
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        this.todos = response.data;
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