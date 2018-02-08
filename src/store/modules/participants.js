import * as types from '../mutation-types'
import guid from '../../utils/guid'

const defaultState = () => ({
  participants: [],
  form: {
    name: '',
    numberOfTickets: null
  }
})

// getters
const getters = {
}

// actions
const actions = {
  addParticipant ({commit}) {
    commit(types.ADD_PARTICIPANT)
  },
  editForm ({commit}, {key, value}) {
    commit(types.EDIT_FORM, {key, value})
  },
  removeParticipant ({commit}, {id}) {
    commit(types.REMOVE_PARTICIPANT, {id})
  }
}

// mutations
const mutations = {
  [types.ADD_PARTICIPANT] (state) {
    const numberOfTickets = parseInt(state.form.numberOfTickets, 10)
    const participant = {name: state.form.name, numberOfTickets, id: guid()}
    state.form = defaultState().form
    state.participants.push(participant)
  },
  [types.EDIT_FORM] (state, {key, value}) {
    state.form[key] = value
  },
  [types.REMOVE_PARTICIPANT] (state, {id}) {
    state.participants = state.participants.filter(p => p.id !== id)
  },
  [types.DECREASE_TICKETS_FOR_PARTICIPANT] (state, {id}) {
    state.participants = state.participants.map((participant) => {
      if (participant.id !== id) {
        return participant
      }
      return {...participant, numberOfTickets: participant.numberOfTickets - 1}
    })
  }
}

export default {
  state: defaultState(),
  getters,
  actions,
  mutations
}
