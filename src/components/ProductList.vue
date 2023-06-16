<template>
  <div class="row justify-content-center">
    <div class="col-sm-6 col-md-5 col-lg-3 my-3" v-for="card in cards" :key="card.id">
      <div class="card">
        <img class="card-img-top" :src="card.image" :alt="card.titulo">
        <div class="card-body">
          <h5 class="card-title">{{card.titulo}}</h5>
          <p class="card-text">{{card.marca}}</p>
          <div class="d-flex justify-content-between align-items-center">
            <p class="card-text h5"><strong>$ {{card.costo}}</strong></p>
            <font-awesome-icon class="h4" icon="fa-solid fa-cart-plus" style="color: #588adf;" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {cards} from '../assets/db.js'

export default {
  name: 'ProductList',
  data() {
    return {
      cards: []
    }
  },
  created() {
    this.getElements();
  },
  methods: {
    getElements() {
      this.cards = cards;
    },
  }
}
</script>

<style scoped>
.icon{
  font-size: 30px
}
</style>
