export default {
  closebtn (store, payload) {
    if (payload === 'profile') {
      store.closebarprofile = false
    } else if (payload === 'cart') {
      store.closebarcart = false
    } else {
      store.closebarstoreinfo = false
    }
  },
  openbtn (store, payload) {
    if (payload === 'profile') {
      store.closebarprofile = true
    } else if (payload === 'cart') {
      store.closebarcart = true
    } else {
      store.closebarstoreinfo = true
    }
  },
  newItemCart (store, payload) {
    store.cartBag.push(payload)
  },
  setCartBag (store, payload) {
    store.cartBag = payload
  },
  sameele (store, payload) {
    for (let i = 0; i < store.cartBag.length; i++) {
      if (store.cartBag[i].cartId === payload[1]) {
        store.cartBag[i].count += payload[0]
      }
    }
  },
  clearCartBag (store) {
    store.cartBag = []
  }
}
