export default {
  closebtn (context) {
    context.commit('closebtn')
  },
  openbtn (context) {
    context.commit('openbtn')
  },
  supmenubtns (context, payload) {
    context.commit('supmenubtns', payload)
  },
  backarrow (context, payload) {
    context.commit('backarrow', payload)
  },
  closeall (context) {
    context.commit('closeall')
  }
}
