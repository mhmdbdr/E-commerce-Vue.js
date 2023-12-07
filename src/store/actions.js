export default {
  async fetchData (context) {
    const response = await fetch('https://stabraq-clown-default-rtdb.firebaseio.com/products.json')
    const responseData = await response.json()
    if (!response.ok) {
      const error = new Error(responseData.message || 'failed load products')
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
  }
}
