import { createStore } from 'vuex'

// modules
import sidebar from './modules/global/sidebar/index'
import popup from './modules/global/popup/index'
import theheader from './modules/global/theheader/index'
import mainmenu from './modules/global/mainmenu/index'
import auth from './modules/auth/index'
import orders from './modules/orders/index'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const store = createStore({
  modules: {
    sidebar,
    mainmenu,
    theheader,
    popup,
    auth,
    orders
  },
  state () {
    return {
      mData: [],
      wishlist: []
    }
  },
  getters,
  mutations,
  actions
})

export default store
