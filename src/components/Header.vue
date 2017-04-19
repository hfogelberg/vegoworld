<template lang="html">
  <header>
    <ul>
      <li><h1><router-link to='/'>Vegoworld</router-link></h1><li>

      <li><input type='search' class='input-search'></li>
      <li>
        <button @click='search' class='btn-transparent btn-search'>
          <img src='../../assets/img/magnifier.svg' >
        </button>
      </li>
      <li><img src='../../assets/img/bookmark.svg' ></li>
      <li><router-link to='/user'><img src='../../assets/img/user.svg'></router-link></li>
    </ul>
  </header>
</template>


<style lang="css" scoped>
  header {
    position: fixed;
    top:0;
    width: 100%;
    height: 4em;
    line-height: 4em;
    background-color: rgba(99, 141, 121, 0.7);
    color: #405B6D;
  }

  header h1 {
    font-size: 1.6em;
    font-weight: 400;
  }

  header ul {
    margin-left: 1em;
    margin-right: 1em;
    list-style: none;
    display: flex;
    align-items: center;
    line-height: 4em;
  }


  input[type=search]{
    background-color: yellow;
    height: 3.2em;
    width: 30ch;
    margin-right: 0.5em;
    margin-bottom: 0.4em;
    background-color: #FFFBF9;
    border-radius: 20px;
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
    font-size: 1.2em;
    color: rgba(236, 240, 241,1.0);
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
