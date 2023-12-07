import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
  namespaced: true,
  state () {
    return {
      userId: null
    }
  },
  getters,
  mutations,
  actions
}
