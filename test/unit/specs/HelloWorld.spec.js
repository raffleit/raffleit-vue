import Vue from 'vue'
import Participants from '@/components/Participants'

describe('Participants.vue', () => {
  xit('should render correct contents', () => {
    const Constructor = Vue.extend(Participants)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
