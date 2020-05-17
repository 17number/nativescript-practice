import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}


// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

import FontAwesome from './mixins/FontAwesome';
Vue.mixin(FontAwesome);

new Vue({
  render: h => h('frame', [h(App)])
}).$start()
