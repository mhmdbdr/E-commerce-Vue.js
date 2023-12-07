import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
  namespaced: true,
  state () {
    return {
      scrolly: 0,
      menslide: false,
      womenslide: false,
      mdheader: true,
      search: false
    }
  },
  getters,
  mutations,
  actions
}
