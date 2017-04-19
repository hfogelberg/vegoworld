<template lang="html">
  <div class="cards">
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

<style lang="css" scoped>
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

</style>
