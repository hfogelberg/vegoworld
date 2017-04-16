<template lang="html">
  <div class="comment">
    <p class='text'>{{comment.text}}</p>
    <p class='user'>@{{comment.user}}</p>
  </div>
</template>

<script>
export default {
  props: ['comment']
}
</script>

<style lang="css" scoped>
  .comment {
    color: #5D7381;
    font-size: 1.2em;
    margin-bottom: 1em;
    width: 60vw;
    height: auto;
    padding: 1em;
    border: 2px solid #7E8D98;
    border-radius: 20px;
  }

  .user {
    margin-top: 0.8em;
    font-style: italic;
  }
</style>
