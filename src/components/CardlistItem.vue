<template lang="html">
  <div class="card" @click='select'>
    <h2>{{card.title}}</h2>
    <img :src="'../../card-img/' + card.img" v-alt="card.title">
    <p>{{card.comment}}</p>
    <div class='footer'>
      <div class='user'>@{{card.user}}</div>
      <div class="comments">
        <img src="../assets/img/comments.svg" alt="Comments">
        <span>{{card.comments}}</span>
      </div>
      <div class='likes'>
        <img src="../assets/img/heart.svg">
        <span>{{card.likes}}</span></div>
      <div class='type'>
        <img :src="'../../assets/img/' + card.typeImg" alt='Idea'>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['card'],
  methods: {
    select() {
      this.$parent.displayDetail(this.card.id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/vars';

  .card {
    padding: 0.5em;
    width: 26vw;
    height: 33vw;
    border: 1 px solid black;
    border-radius: 20px;
    background-color: $background-color;
    display: flex;
    flex-direction: column;
    margin: 1em;
    cursor: pointer;
  }

  img {
    margin-top: 0.5em;
    height: 12vw;
    justify-content: center;

  }

  p {
    padding: 0.5em;
    color: $light-text-color;
    flex-grow: 1;
    font-size: 1.2em;
  }

  .footer {
    height: 2em;
    line-height: 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $light-text-color;
    font-size: 1.3em;
  }

  .footer img {
    height: 1.8em;
    width: auto;
    background-color: $background-color;
  }

  .footer img {
    height: 1.2em;
    width: auto;
    background-color: $background-color;
    margin-right: 0.2em;
  }


    a {
    text-decoration: none;
    }

    a:link {
      text-decoration: none;
    }

    a:visited {
      text-decoration: none;
    }

    a:hover {
      text-decoration: none;
    }

    a:active {
      text-decoration: none;
    }
</style>
