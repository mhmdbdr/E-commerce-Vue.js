export default {
  closesearch (state) {
    state.search = false
  },
  opensearch (state) {
    state.search = true
  },
  menslide (state, payload) {
    state.menslide = payload
  },
  womenslide (state, payload) {
    state.womenslide = payload
  }
}
