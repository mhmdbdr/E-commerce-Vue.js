import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
  namespaced: true,
  state () {
    return {
      closemmenu: false,
      mencbtn: false,
      mentopscbtn: false,
      menbottomscbtn: false,
      menjilbabcbtn: false,
      menaccesscbtn: false,
      menfeaturedcbtn: false,
      womenscbtn: false,
      womenstopscbtn: false,
      womensbottomscbtn: false,
      womensdressescbtn: false,
      womensaccesscbtn: false,
      womensfeaturedcbtn: false,
      kidscbtn: false
    }
  },
  getters,
  mutations,
  actions
}
