<template lang="html">
  <div class="cards">
    <div class="button-row">
      <router-link to='newpost' class='btn-new-post'><img src='../assets/img/plus.svg' alt='New post'> </router-link>
    </div>
    <ul class="card-content">
      <li v-for='card in cards' v-bind:id='card.id'><card :card='card'></card></li>
    </ul>
  </div>
</template>

<script>
import CardlistItem from './CardlistItem.vue'
import Card from './Card.vue'

export default {
  components: {
    'card': CardlistItem
  },
  data() {
    return {
      cards: this.$store.getters.cards
    }
  },
   methods: {
     displayDetail(id) {
       this.$router.push("/card/1")
     }
   }

}
</script>

<style lang="scss" scoped>
  @import '../assets/styles/vars';

  .cards {
    margin-top: 4em;
    padding: 1em;
  }

  ul.card-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
  }

  .button-row {
    width: 100vw;
    height: 4em;
  }

  .btn-new-post {
    position: absolute;
    right: 2em;
  }
</style>
