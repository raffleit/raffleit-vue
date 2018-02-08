<template>
  <div class="container">
    <div class="reset">
      <button class="btn btn-link" @click="reset">Reset</button>
    </div>
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
import {mapActions} from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions([
      'reset'
    ])
  }
}
</script>

<style scoped>

</style>
