<template lang="html">
  <div class="card-footer">
    <ul>
      <li><router-link to='/card/1'><img src='../assets/img/arrow-left.svg'><span>Veg restaurang på Teneriffa</span></router-link></li>
      <li><router-link to='/card/1'>Kan man ha skinskor?<span><img src='../assets/img/arrow-right.svg'></span></router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  @import '../assets/styles/vars';

  .card-footer {
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 3em;
      line-height: 3em;
      background-color: $footer-background-color;
      color: $text-color;
  }

    ul {
     margin-left: 1em;
     margin-right: 1em;
     list-style: none;
     display: flex;
     align-items: baseline;
     line-height: 3em;
   }

    li {
      flex: 0 0 auto;
      margin: 0.2em;
      display: flex;
      align-items: center;
    }

    li:nth-child(1) {
      margin-right: auto;
    }

    a {
      top: 0.9em;
      font-size: 1.2em;
      color: $nav-arrow-color;
      font-weight: 300;
    }

    a:hover {
      font-size: 1.4em;
      text-decoration: none;
    }

    a:link {
      text-decoration: none;
    }

    a:visited{
      text-decoration: none;
    }

    a:focus {
      text-decoration: none;
    }

    a:active {
      text-decoration: none;
    }
</style>
