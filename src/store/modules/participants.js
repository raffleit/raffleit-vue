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
  addParticipant ({commit}, participant) {
    commit(types.ADD_PARTICIPANT, {participant})
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
    const participant = {...state.form, id: guid()}
    state.form = defaultState().form
    state.participants.push(participant)
  },
  [types.EDIT_FORM] (state, {key, value}) {
    state.form[key] = value
  },
  [types.REMOVE_PARTICIPANT] (state, {id}) {
    state.participants = state.participants.filter(p => p.id !== id)
  }
}

export default {
  state: defaultState(),
  getters,
  actions,
  mutations
}
