import Vue from 'vue'
import Router from 'vue-router'
import Participants from '@/components/Participants'
import Drawing from '@/components/Drawing'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
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
    {
      path: '/Drawing',
      name: 'Drawing',
      component: Drawing
    }
  ]
})
