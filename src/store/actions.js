import i18n from '../i18n'

export default {
  async fetchData (context) {
    const response = await fetch('https://stabraq-clone-default-rtdb.firebaseio.com/products.json')
    const responseData = await response.json()
    if (!response.ok) {
      const error = new Error(responseData.message || i18n.t('errorAndNote.store.mainStore.responsefiled'))
      throw error
    }
    const Data = []

    for (const key in responseData) {
      const product = {
        id: key,
        product_name: responseData[key].product_name,
        category: responseData[key].category,
        price: responseData[key].price,
        discount: responseData[key].discount,
        description: responseData[key].description,
        main_image: responseData[key].main_image,
        state: responseData[key].state
      }
      Data.push(product)
    }
    context.commit('fetchData', Data)
  },
  addtowishlist (context, payload) {
    context.commit('addtowishlist', payload)
  },
  setLang (context, payload) {
    context.commit('setLang', payload)
  },
  setCurrentLang (context, payload) {
    context.commit('setCurrentLang', payload)
  },
  pageDir (context, payload) {
    context.commit('pageDir', payload)
  },
  lastRoute (context, payload) {
    context.commit('lastRoute', payload)
  }
}
