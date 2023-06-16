<template>
  <div class="fluid-container mx-5">
    <ProductList/>
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue';

export default {
  name: 'Home',
  components: {
    ProductList
  },
  methods: {
    agregar(producto) {
      this.cart.push(producto)
    }
  }
}
</script>