<template>
  <nav class="navbar navbar-dark bg-dark mb-5 d-flex justify-content-between p-2">
    <router-link class="navbar-brand" to="/">Clothes Shop Vue</router-link>
    
    <ul class="navbar-nav flex-row gap-4 mx-3">
      <li class="nav-item">
        <router-link class="nav-link" to="/login">
          <font-awesome-icon class="h4" icon="fa-solid fa-user" style="color: #588adf;" />
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/cart">
          <font-awesome-icon class="h4" icon="fa-solid fa-cart-shopping" style="color: #588adf;"/>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "HeaderBar"
}
</script>

<style scoped>
  
</style>