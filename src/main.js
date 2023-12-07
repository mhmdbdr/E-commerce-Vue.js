import { createApp } from 'vue'
import router from './router'
import store from './store/index'
import App from './App.vue'
import BaseSidebar from './components/Ui/BaseSidebar'
import BaseSupmenu from './components/Ui/BaseSupmenu'
import BaseCard from './components/Ui/BaseCard'
import BaseSpinner from './components/Ui/BaseSpinner'
import BaseButton from './components/Ui/BaseButton'
import MainPopup from './components/Ui/PopUp'
import editEx from './components/Ui/editEx'
import thankupopup from './components/Ui/ThankYouPopup'
import loadingPopup from './components/Ui/loadingPopup'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartShopping, faBars, faMagnifyingGlass, faAngleLeft, faAngleRight, faArrowLeftLong, faArrowRightLong, faCheck, faPenToSquare, faCaretUp, faCaretDown, faShop, faTruckFast, faGhost, faHeartCircleCheck, faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faUser, faHeart, faCircleQuestion, faWindowRestore } from '@fortawesome/free-regular-svg-icons'
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faCartShopping, faUser, faBars, faTwitter, faFacebookF, faInstagram, faMagnifyingGlass, faAngleLeft, faAngleRight, faArrowLeftLong, faArrowRightLong, faHeart, faCheck, faPenToSquare, faCircleQuestion, faCaretUp, faCaretDown, faShop, faTruckFast, faWindowRestore, faGhost, faHeartCircleCheck, faHeartCirclePlus)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(store)

app.component('base-sidebar', BaseSidebar)
app.component('base-supmenu', BaseSupmenu)
app.component('base-card', BaseCard)
app.component('base-spinner', BaseSpinner)
app.component('base-button', BaseButton)
app.component('main-popup', MainPopup)
app.component('edit-popup', editEx)
app.component('thanku-popup', thankupopup)
app.component('loading-popup', loadingPopup)

app.mount('#app')
