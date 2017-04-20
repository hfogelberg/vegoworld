<template>
  <div id="app">
    <appHeader></appHeader>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    components: {
      'appHeader': Header
    }
  }
</script>

<style lang="scss">
@import 'assets/styles/vars';

/* Reset */
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  font-weight: 300;
  text-rendering: optimizeLegibility;
}

/* Base styling */
body, html {
  background-color: $background-color;
  font-family: $font-family;
  color: $text-color;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}

/* Headers */
h1 {
  font-size: 3em;
  text-align: center;
}

h2 {
  font-size: 2.25em;
  text-align: center;
  color: $green-text-color;
}

h3 {
  font-size: 1.75em;
}

h4 {
  font-size: 1.125em;
}

</style>
