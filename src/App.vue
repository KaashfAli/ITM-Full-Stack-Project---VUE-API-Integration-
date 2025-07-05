<template>
  <div>
    <nav>
      <router-link to="/posts">Posts</router-link>
      <router-link to="/users">Users</router-link>
      <router-link to="/comments">Comments</router-link>
      <router-link to="/albums">Albums</router-link>
      <router-link to="/photos">Photos</router-link>
      <router-link to="/todos">Todos</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  display: flex;
  gap: 15px;
  background-color: #f0f0f0;
  padding: 10px;
}
a {
  text-decoration: none;
}
</style>