export default {
  fetchData (state, payload) {
    state.mData = payload
  },
  addtowishlist (state, payload) {
    if (payload.stt === 'add') {
      state.wishlist.push(payload.product)
      window.localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
    } else if (payload.stt === 'reloaddata') {
      state.wishlist = null
      state.wishlist = payload.product
    } else {
      for (let i = 0; i < state.wishlist.length; i++) {
        if (state.wishlist[i].id === payload.product.id) {
          state.wishlist.splice(i, 1)
        }
      }
      window.localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
    }
  },
  setLang (state, payload) {
    state.lang = payload
  },
  setCurrentLang (state, payload) {
    state.currentLang = payload
  },
  pageDir (state, payload) {
    state.pageDir = payload
  },
  lastRoute (state, payload) {
    state.lastRoute = payload
  }
}
