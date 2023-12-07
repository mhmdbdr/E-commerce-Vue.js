import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
  namespaced: true,
  state () {
    return {
      closebarprofile: false,
      closebarcart: false,
      closebarstoreinfo: false,
      cartBag: []
    }
  },
  getters,
  mutations,
  actions
}
