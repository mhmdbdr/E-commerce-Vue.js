let timer
export default {
  async signup (context, payload) {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAEiv-PrKG_3J18YdgMlBT7wiLBKgUbH6c', {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    })
    const responseData = await response.json()
    if (!response.ok) {
      const error = new Error(responseData.message || 'Something went wrong please try again later')
      throw error
    } const expiresIn = +responseData.expiresIn * 1000
    const expirationDate = new Date().getTime() + expiresIn
    window.localStorage.setItem('userId', responseData.localId)
    window.localStorage.setItem('token', responseData.idToken)
    window.localStorage.setItem('tokenExpiration', expirationDate)
    timer = setTimeout(function () {
      context.dispatch('logout')
    }, expiresIn)
    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId
    })
  },
  async signin (context, payload) {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAEiv-PrKG_3J18YdgMlBT7wiLBKgUbH6c', {
      method: 'POST',
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true
      })
    })
    const responseData = await response.json()
    if (!response.ok) {
      const error = new Error(responseData.message || 'Incorrect email address or password, please try again')
      throw error
    } const expiresIn = +responseData.expiresIn * 1000
    const expirationDate = new Date().getTime() + expiresIn
    window.localStorage.setItem('userId', responseData.localId)
    window.localStorage.setItem('token', responseData.idToken)
    window.localStorage.setItem('tokenExpiration', expirationDate)
    timer = setTimeout(function () {
      context.dispatch('logout')
    }, expiresIn)
    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId
    })
  },
  logout (context) {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('userId')
    window.localStorage.removeItem('tokenExpiration')

    clearTimeout(timer)

    context.commit('setUser', {
      token: null,
      userId: null
    })
  },
  tryLogin (context) {
    const userId = window.localStorage.getItem('userId')
    const token = window.localStorage.getItem('token')
    const tokenExpiration = window.localStorage.getItem('tokenExpiration')

    const expiresIn = +tokenExpiration - new Date().getTime()
    if (expiresIn < 10000) {
      return
    }

    timer = setTimeout(function () {
      context.dispatch('logout')
    }, expiresIn)

    if (token && userId) {
      context.commit('setUser', {
        token: token,
        userId: userId
      })
    }
  }
}
