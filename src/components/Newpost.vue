<template lang="html">
  <div class="new-post">
    <h2>New Post</h2>
    <form class="new-post-form">
      <div class='form-row'>
        <label for="title">Title</label>
        <input type="text" name="title" v-model="title">
      </div>
      <div class='form-row'>
        <label for="post">Post</label>
        <textarea name="post" rows="8" cols="80" v-model='post'></textarea>
      </div>
      <div class='form-row'>
        <label for="tags">Tags</label>
        <input type="text" name="tags" v-model="tags">
      </div>
      <div class="type form-row">
        <label for="type">Type</label>
        <input type="radio" name="type" value="tips"><label class='radio-label'>Tips</label>
        <input type="radio" name="type" value="recipy"><label class='radio-label'>Recept</label>
        <input type="radio" name="type" value="question"><label class='radio-label'>Fråga</label>
      </div>
      <div class="button-container">
        <button id='save'>Spara</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  @import '../assets/styles/vars';

  .new-post {
    margin-top: 6em;
    margin-left: 2em;
  }

  form div {
    margin-top: 2em;
    margin-bottom: 1em;
  }

  input[type='text'] {
    height: 2.5em;
    border-radius: 18px;
  }

  input[type="radio"] {
    margin-top: -0.8em;
    vertical-align: middle;
  }

  .radio-label {
    width: 5ch !important;
    text-align: left !important;
    margin-left: 0.2em;
  }

  textarea {
    border-radius: 1.8em;
    vertical-align: top;
  }

  .form-row > label {
    display: inline-block;
    width: 10ch;
    text-align: right;
    margin-right: 1ch;
    font-size: 1.4em;
  }

  .button-container {
    margin-left: 0.5em;
    box-sizing: border-box;
  }

  button#save {
    font-size: 1.3em;
    margin-left: 11ch;
    height: 2em;
    width: 10ch;
    color: $light-text-color;
    background-color: $save-button-color;
    border-radius: 10px;
  }
</style>
