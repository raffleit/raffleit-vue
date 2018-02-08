<template>
  <div class="container">
    <ul class="nav nav-pills">
      <router-link tag="li" to="Participants">
        <a>Participants</a>
      </router-link>
      <router-link tag="li" to="/Drawing">
        <a>Drawing</a>
      </router-link>
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
