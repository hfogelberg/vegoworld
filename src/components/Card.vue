<template lang="html">
  <div class="card">
    <h1>{{card.title}}</h1>
    <img :src="'../../assets/card-img/' + card.img" v-alt="card.title">
    <div class='comment'>{{card.comment}}</div>
    <ul class='statusbar'>
      <li>@{{card.user}}</li>
      <li class='likes'>
        <img src="../../assets/img/heart.svg">
        <span>{{card.likes}}</span>
      </li>

      <li class='type'>
        <img :src="'../../assets/img/' + card.typeImg" alt='Idea'>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      card: this.$store.getters.cardItem
    }
  }
}
</script>

<style lang="css" scoped>
  .card {
    margin-top: 5em;
    width: 100vw;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    margin-top: 2em;
    width: 30vw;
    height: auto;
  }

  .comment {
    margin-top: 2em;
    font-size: 1.5em;
  }

  .statusbar {
    height: 2em;
    line-height: 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #405B6D;
    font-size: 1.3em;
    justify-content: center;
  }

  .type img {
    height: 1.8em;
    width: auto;
    background-color: #EDCDC2;
  }

  .likes img {
    height: 1.2em;
    width: auto;
    background-color: #EDCDC2;
    margin-right: 0.2em;
  }


  ul.statusbar {
    margin-top: 2em;
      padding-left: 4em;
      padding-right: 4em;
      list-style: none;
      display: flex;
      line-height: 4em;
      width: 100vw;
    }

    li {
      flex: 0 0 auto;
      margin: 0.2em;
    }

    li:nth-child(1) {
      margin-right: auto;
    }
</style>
