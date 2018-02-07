import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  actions,
  modules
})

if (module.hot) {
  module.hot.accept([
    './actions',
    './modules'
  ], () => {
    store.hotUpdate({
      actions: require('./actions'),
      modules: require('./modules')
    })
  })
}

export default store
