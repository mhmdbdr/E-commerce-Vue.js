import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index.js'

const homePage = () => import('./views/HomePage')
const notFound = () => import('./views/NotFound')
const aboutus = () => import('./views/informations/aboutUs')
const contactUs = () => import('./views/informations/contactUs')
const refundPolicy = () => import('./views/informations/refundPolicy')
const termsOfService = () => import('./views/informations/termsOfService')
const collections = () => import('./views/CollectionsPage')
const cardinfopage = () => import('./views/CardInfoPage')
const cartpage = () => import('./views/cartPage.vue')
const checkouts = () => import('./views/checkoutPage.vue')
const AccountRegister = () => import('./views/AccountRegister.vue')
const AccountPage = () => import('./views/AccountPage.vue')

const requireAuth = (to, from, next) => {
  if (store.getters['auth/userId']) {
    next()
  } else {
    next('/AccountRegister')
  }
}
const requireNoAuth = (to, from, next) => {
  if (store.getters['auth/userId']) {
    next('/Account')
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: homePage
  },
  {
    path: '/collections/:collectionsId',
    name: 'collections',
    component: collections,
    props: true
  },
  {
    path: '/products/:productid',
    name: 'products',
    component: cardinfopage,
    props: true
  },
  {
    path: '/cart',
    name: 'cart',
    component: cartpage
  },
  {
    path: '/AccountRegister',
    name: 'AccountRegister',
    meta: { accountaccess: false },
    component: AccountRegister,
    beforeEnter: requireNoAuth
  },
  {
    path: '/Account',
    name: 'AccountPage',
    meta: { accountaccess: true },
    component: AccountPage,
    beforeEnter: requireAuth
  },
  {
    path: '/checkouts',
    name: 'cacheckoutsrt',
    meta: { reqAuth: true },
    component: checkouts
  },
  {
    path: '/aboutUs',
    name: 'aboutus',
    component: aboutus
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: contactUs
  },
  {
    path: '/refundPolicy',
    name: 'refundPolicy',
    component: refundPolicy
  },
  {
    path: '/termsOfService',
    name: 'termsOfService',
    component: termsOfService
  },
  {
    path: '/:notFound(.*)',
    component: notFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(function (to, from, next) {
  if (!to.meta.reqAuth) {
    next()
  } else if (to.meta.reqAuth && store.getters['sidebar/cartBag'].length !== 0) {
    next()
  } else {
    next('/')
  }
})
router.afterEach(function (to, from, failure) {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  store.dispatch('mainmenu/closebtn')
  store.dispatch('mainmenu/closeall')
  store.dispatch('sidebar/closebtn', 'profile')
  store.dispatch('sidebar/closebtn', 'cart')
  document.body.classList.remove('stop-scrolling')
  store.dispatch('theheader/closesearch')
})
export default router
