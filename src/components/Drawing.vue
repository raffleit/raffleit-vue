<template>
  <div class="col-md-7">
    <button class="btn btn-success btn-lg"
            @click="drawWinner">Draw</button>
    <ul class="list-unstyled">
      <li v-for="winner in winners"
          v-bind:key="winner.id" class="winnerName">{{winner.name}}</li>
    </ul>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  computed: {
    ...mapState({
      winners: state => state.drawing.winners
    })
  },
  methods: {
    ...mapActions([
      'drawWinner'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .winnerName {
    font-size: 3em
  }
</style>
