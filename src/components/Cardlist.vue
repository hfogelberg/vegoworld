<template lang="html">
  <div class="cards">
    <ul class="card-content">
      <li v-for='card in cards'><card :card='card'></card></li>
    </ul>
  </div>
</template>

<script>
import CardlistItem from './CardlistItem.vue'

export default {
  components: {
    'card': CardlistItem
  },
  data() {
    return {
      cards: this.$store.getters.cards
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
