<template>
  <div class="container">
    <ul class="nav nav-pills">
      <li class="active">
        <a href="#/Participants">Participants</a>
      </li>
      <li>
        <a href="#/Drawing">Drawing</a>
      </li>
    </ul>
    <div class="row" style="margin-top: 2em">
      <router-view/>
    </div>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
