import * as types from '../mutation-types'
import guid from '../../utils/guid'

const defaultState = () => ({
  winners: []
})

// getters
const getters = {
}

// actions
const actions = {
  drawWinner ({commit, rootState}) {
    const participant = rootState.participants.participants[0]
    const winner = {...participant, id: guid()}
    commit(types.DRAW_WINNER, {winner})
    commit(types.DECREASE_TICKETS_FOR_PARTICIPANT, {id: participant.id}, {root: true})
  }
}

// mutations
const mutations = {
  [types.DRAW_WINNER] (state, {winner}) {
    state.winners.push(winner)
  }
}

export default {
  state: defaultState(),
  getters,
  actions,
  mutations
}
