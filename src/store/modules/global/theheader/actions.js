export default {
  closesearch (context) {
    context.commit('closesearch')
  },
  opensearch (context) {
    context.commit('opensearch')
  },
  menslide (context, payload) {
    context.commit('menslide', payload)
  },
  womenslide (context, payload) {
    context.commit('womenslide', payload)
  }
}
