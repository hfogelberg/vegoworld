<template lang="html">
  <div class="user-card">
    <img src="../../assets/card-img/bugs_bunny.jpg" alt="Avatar">
    <div class= 'description'>
      <h1>@Gramse</h1>
      <div class='user-bio'>Jag är en 14 år gammal Västgötaspets som älskar morötter och sojakorv. Jag hade gärna velat bo på en gård där jag kan jaga höns. Mina hobbies är att vattna palmer och rota runt vid soptunnor.

        <button type="button" name="button" @click='follow'>Följ @Gramse</button>
        </div>
      <div class="posts">
        <img src='../../assets/img/pen.svg'><span><h3>@Gramse har skrivit 467 inlägg</h3></span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .user-card {
    margin-top: 6em;
    width: 100vw;
    height: 100%;
    padding: 0.5em;
    display: flex;
  }

  img {
    margin: 1em;
    height: 20em;
    border-radius: 20px;
  }

  .description {
    display: flex;
    flex-direction: column;
  }

  .description h1 {
    padding-top: 1em;
    margin-bottom: 1em;
  }

  .user-bio {
    display: flex;
    flex-direction: column;
    border: 3px solid #638D79;
    border-radius: 20px;
    padding: 1em;
    max-width: 75ch;
    font-size: 1.2em;
    line-height: 1.6em;
    padding: 1em;
  }

  button {
    margin-right: 2em;
    margin-top: 2em;
    background-color: #22ce7c;
    height: 2.5em;
    font-size: 1.3em;
    font-weight: 400;
    padding: 0.5em;
    border-radius: 20px;
    width: 25ch;
  }

  .posts {
    margin-top: 2em;
    display: flex;
    height: 3em;
    line-height: 3em;
    width: 60vw;
    align-items: center;
  }

  .posts img {
    height: 3em;
  }
</style>
