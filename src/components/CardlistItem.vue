<template lang="html">
  <a href="/card/1" class="card">
    <h2>{{card.title}}</h2>
    <img :src="'../../assets/card-img/' + card.img" v-alt="card.title">
    <p>{{card.comment}}</p>
    <div class='footer'>
      <div class='user'>@{{card.user}}</div>
      <div class='likes'><img src="../../assets/img/heart.svg"><span>{{card.likes}}</span></div>
      <div class='type'>
        <img :src="'../../assets/img/' + card.typeImg" alt='Idea'>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: ['card']
}
</script>

<style lang="css" scoped>
  h2 {
      color: #43775E;
  }

  .card {
    padding: 0.5em;
    width: 26vw;
    height: 33vw;
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
    color: #FFF5E8;
    flex-grow: 1;
    font-size: 1.2em;
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

  .likes img {
    height: 1.2em;
    width: auto;
    background-color: #CA9D8E;
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
