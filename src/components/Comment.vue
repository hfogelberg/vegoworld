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

<style lang="scss" scoped>
  @import '../assets/styles/vars';

  .comment {
    color: $comment-text-color;
    font-size: 1.2em;
    margin-bottom: 1em;
    width: 60vw;
    height: auto;
    padding: 1em;
    border: 2px solid $comment-border-color;
    border-radius: 20px;
  }

  .user {
    margin-top: 0.8em;
    font-style: italic;
  }
</style>
