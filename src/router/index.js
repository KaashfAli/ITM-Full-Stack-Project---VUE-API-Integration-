import { createRouter, createWebHistory } from 'vue-router';
import Posts from '../components/Posts.vue';
import Users from '../components/Users.vue';
import Comments from '../components/Comments.vue';
import Albums from '../components/Albums.vue';
import Photos from '../components/Photos.vue';
import Todos from '../components/Todos.vue';

const routes = [
  { path: '/posts', component: Posts },
  { path: '/users', component: Users },
  { path: '/comments', component: Comments },
  { path: '/albums', component: Albums },
  { path: '/photos', component: Photos },
  { path: '/todos', component: Todos },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;