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
      wishlist: [],
      pageDir: 'ltr',
      lang: 'en',
      currentLang: 'English',
      enFontHref: 'https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap',
      arFontHref: 'https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&display=swap',
      lastRoute: ''
    }
  },
  getters,
  mutations,
  actions
})

export default store
