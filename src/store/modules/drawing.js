import * as types from '../mutation-types'
import guid from '../../utils/guid'
import drawWinner from '../../utils/drawWinner'

const defaultState = () => ({
  winners: []
})

// getters
const getters = {}

// actions
const actions = {
  drawWinner ({commit, rootState}) {
    const participants = rootState.participants.participants
    const winningParticipant = drawWinner(participants)
    if (winningParticipant) {
      const winner = {...winningParticipant, id: guid()}
      commit(types.ADD_WINNER, {winner})
      commit(types.DECREASE_TICKETS_FOR_PARTICIPANT, {id: winningParticipant.id}, {root: true})
    }
  }
}

// mutations
const mutations = {
  [types.ADD_WINNER] (state, {winner}) {
    state.winners.unshift(winner)
  }
}

export default {
  state: defaultState(),
  getters,
  actions,
  mutations
}
