export default {
  setorder (state, payload) {
    state.orders.push(payload)
  },
  setneworders (state, payload) {
    state.orders = payload
  }
}
