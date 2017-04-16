<template lang="html">
  <div class="card">
    <h2>{{card.title}}</h2>
    <img :src="'../../assets/card-img/' + card.img" v-alt="card.title">
    <p>{{card.comment}}</p>
    <div class='footer'>
      <div class='user'>@{{card.user}}</div>
      <div class='type'>
        <img :src="'../../assets/img/' + card.typeImg" alt='Idea'>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['card']
}
</script>

<style lang="css" scoped>
  .card {
    padding: 0.5em;
    width: 26vw;
    height: 30vw;
    border: 1 px solid black;
    border-radius: 20px;
    background-color: #CA9D8E;
    display: flex;
    flex-direction: column;
    margin: 1em;
  }

  img {
    margin-top: 0.5em;
    height: 12vw;
    justify-content: center;

  }

  p {
    padding: 0.5em;
    color: #DCDFE1;
    flex-grow: 1;
  }

  .footer {
    height: 2em;
    line-height: 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFFBF9;
    font-size: 1.3em;
  }

  .type img {
    height: 1.8em;
    width: auto;
    background-color: #CA9D8E;
  }
</style>
