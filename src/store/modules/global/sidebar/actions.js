export default {
  closebtn (context, payload) {
    context.commit('closebtn', payload)
  },
  openbtn (context, payload) {
    context.commit('openbtn', payload)
  },
  newItemCart (context, payload) {
    context.commit('newItemCart', payload)
  },
  setCartBag (context, payload) {
    context.commit('setCartBag', payload)
  },
  sameele (context, payload) {
    context.commit('sameele', payload)
  },
  clearCartBag (context) {
    context.commit('clearCartBag')
  }
}
