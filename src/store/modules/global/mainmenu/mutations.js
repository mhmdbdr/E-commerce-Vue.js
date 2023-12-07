export default {
  closebtn (store) {
    store.closemmenu = false
  },
  openbtn (store) {
    store.closemmenu = true
  },
  closeall (store) {
    store.mencbtn = false
    store.mentopscbtn = false
    store.menbottomscbtn = false
    store.menjilbabcbtn = false
    store.menaccesscbtn = false
    store.menfeaturedcbtn = false
    store.womenscbtn = false
    store.womenstopscbtn = false
    store.womensbottomscbtn = false
    store.womensdressescbtn = false
    store.womensaccesscbtn = false
    store.womensfeaturedcbtn = false
    store.kidscbtn = false
  },
  supmenubtns (store, payload) {
    if (payload === 'mencbtn') {
      store.mencbtn = true
    } else if (payload === 'womenscbtn') {
      store.womenscbtn = true
    } else if (payload === 'kidscbtn') {
      store.kidscbtn = true
    } else if (payload === 'menbottomscbtn') {
      store.menbottomscbtn = true
    } else if (payload === 'mentopscbtn') {
      store.mentopscbtn = true
    } else if (payload === 'menjilbabcbtn') {
      store.menjilbabcbtn = true
    } else if (payload === 'menaccesscbtn') {
      store.menaccesscbtn = true
    } else if (payload === 'menfeaturedcbtn') {
      store.menfeaturedcbtn = true
    } else if (payload === 'womenstopscbtn') {
      store.womenstopscbtn = true
    } else if (payload === 'womensbottomscbtn') {
      store.womensbottomscbtn = true
    } else if (payload === 'womensdressescbtn') {
      store.womensdressescbtn = true
    } else if (payload === 'womensaccesscbtn') {
      store.womensaccesscbtn = true
    } else if (payload === 'womensfeaturedcbtn') {
      store.womensfeaturedcbtn = true
    }
  },
  backarrow (store, payload) {
    if (payload === 'mencbtnval') {
      store.mencbtn = false
    } else if (payload === 'womenscbtnval') {
      store.womenscbtn = false
    } else if (payload === 'kidscbtnval') {
      store.kidscbtn = false
    } else if (payload === 'menbottomscbtnval') {
      store.menbottomscbtn = false
    } else if (payload === 'mentopscbtnval') {
      store.mentopscbtn = false
    } else if (payload === 'menjilbabcbtnval') {
      store.menjilbabcbtn = false
    } else if (payload === 'menaccesscbtnval') {
      store.menaccesscbtn = false
    } else if (payload === 'menfeaturedcbtnval') {
      store.menfeaturedcbtn = false
    } else if (payload === 'womenstopscbtnval') {
      store.womenstopscbtn = false
    } else if (payload === 'womensbottomscbtnval') {
      store.womensbottomscbtn = false
    } else if (payload === 'womensdressescbtnval') {
      store.womensdressescbtn = false
    } else if (payload === 'womensfeaturedcbtnval') {
      store.womensfeaturedcbtn = false
    } else if (payload === 'womensaccesscbtnval') {
      store.womensaccesscbtn = false
    }
  }
}
