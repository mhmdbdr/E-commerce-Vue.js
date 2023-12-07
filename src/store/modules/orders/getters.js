export default {
  orders (state, _, _2, rootGetters) {
    const userId = rootGetters['auth/userId']
    const orrders = state.orders.filter((order) => order.accid === userId)
    return orrders
  },
  hasorders (state, getters) {
    return getters.orders && getters.orders.length > 0
  }
}
