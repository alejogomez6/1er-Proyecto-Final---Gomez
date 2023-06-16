<template>
  <div>
    <HeaderBar/>
    <router-view/>
  </div>
</template>

<script>
import Home from './views/Home.vue';
import Cart from './views/Cart.vue';
import HeaderBar from './components/HeaderBar.vue'

export default {
  components: {
    HeaderBar,
    Home,
    Cart,
  }
}
</script>

<style scoped>
  div {
    background-color: rgb(255, 255, 255);
  }
</style>
