import {RESET} from './mutation-types'
import router from '../router'

export const reset = ({commit}) => {
  router.push('Participants')
  commit(RESET)
}
