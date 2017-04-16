<template lang="html">
  <div class="comments">
    <ul>
      <li v-for='comment in comments'><comment :comment='comment'></comment></li>
    </ul>
  </div>
</template>

<script>
import Comment from './Comment.vue'
export default {
  components: {
    comment: Comment
  },
  data() {
    return {
      comments: this.$store.getters.comments
    }
  }
}
</script>

<style lang="css" scoped>
  .comments {
    margin-top: 2em;
    display: flex;
  }

  ul {
    list-style: none;
  }
</style>
