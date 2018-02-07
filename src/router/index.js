import Vue from 'vue'
import Router from 'vue-router'
import Participants from '@/components/Participants'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Participants'
    },
    {
      path: '/Participants',
      name: 'Participants',
      component: Participants
    },
  ]
})
