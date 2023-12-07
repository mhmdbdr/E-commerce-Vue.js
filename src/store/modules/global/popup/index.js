import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
  namespaced: true,
  state () {
    return {
      mainpopup: false,
      editpopup: false,
      thankyoupopup: false
    }
  },
  getters,
  mutations,
  actions
}
