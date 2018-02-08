<template>
  <div class="col-md-5">
    <form v-on:submit.prevent="addParticipant">
      <div class="row" style="margin-bottom: 2em;">
        <div class="form-group col-md-6">
          <input type="text"
                 name="name"
                 class="form-control"
                 v-bind:class="{ inputError: form.errors.name }"
                 @input="editForm"
                 :value="form.name"
                 placeholder="Name"
          />
        </div>
        <div class="form-group col-md-4">
          <input type="number"
                 name="numberOfTickets"
                 class="form-control"
                 v-bind:class="{ inputError: form.errors.numberOfTickets }"
                 @input="editForm"
                 :value="form.numberOfTickets"
                 placeholder="# tickets"
          />
        </div>
        <div class="col-md-1">
          <input type="submit"
                 class="btn btn-primary"
                 value="+"
          />
        </div>
      </div>
    </form>
    <table class="table" v-if="participants.length > 0">
      <thead>
      <tr>
        <td>Name</td>
        <td># tickets</td>
        <td></td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="p in participants" v-bind:key="p.id">
        <td>{{p.name}}</td>
        <td>{{p.numberOfTickets}}</td>
        <td>
          <button class="btn btn-link" v-on:click="removeParticipant({id: p.id})">
            Remove
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  computed: {
    ...mapState({
      participants: state => state.participants.participants,
      form: state => state.participants.form
    })
  },
  methods: {
    ...mapActions([
      'addParticipant',
      'removeParticipant'
    ]),
    editForm (e) {
      this.$store.dispatch('editForm', {
        key: e.target.name,
        value: e.target.value
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .inputError {
    border: 1px solid red;
  }
</style>
