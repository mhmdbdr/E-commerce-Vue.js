export default {
  closebtn (store) {
    store.mainpopup = false
  },
  openbtn (store) {
    store.mainpopup = true
  },
  editclosebtn (store) {
    store.editpopup = false
  },
  editopenbtn (store) {
    store.editpopup = true
  },
  thankuclosebtn (store) {
    store.thankyoupopup = false
  },
  thankuopenbtn (store) {
    store.thankyoupopup = true
  }
}
