import * as types from '../mutation-types'
import guid from '../../utils/guid'

const defaultState = () => ({
  participants: [],
  form: {
    name: '',
    numberOfTickets: null,
    errors: {
      name: false,
      numberOfTickets: false
    }
  }
})

// getters
const getters = {
}

// actions
const actions = {
  addParticipant ({commit, state}, e) {
    if (state.form.name && state.form.numberOfTickets) {
      commit(types.ADD_PARTICIPANT)
      // eslint-disable-next-line
      e.target[0].focus()
    } else {
      if (!state.form.name) {
        commit(types.FORM_ERROR, {key: 'name'})
      }
      if (!state.form.numberOfTickets) {
        commit(types.FORM_ERROR, {key: 'numberOfTickets'})
      }
    }
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
  },
  [types.FORM_ERROR] (state, {key}) {
    state.form.errors[key] = true
  },
  [types.RESET] (state) {
    let initialState = defaultState()
    Object.keys(initialState).forEach(key => { state[key] = initialState[key] })
  }
}

export default {
  state: defaultState(),
  getters,
  actions,
  mutations
}
