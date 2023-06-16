import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Cart from "./views/Cart.vue";
import Login from "./views/Login.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/cart", component: Cart },
  { path: "/login", component: Login },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;