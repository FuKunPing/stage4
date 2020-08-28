import Vue from 'vue'
import store from './store'
import router from './router'
import App from './App'
import {Carousel,CarouselItem, Button} from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Button)

new Vue({
  store,
  router,
  render: h=>h(App)
}).$mount('#app')