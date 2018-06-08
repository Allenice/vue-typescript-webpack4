import 'vue-svgicon/dist/polyfill'
import Vue from 'vue'

// register plugins hooks fo vue component
import 'common/registerHooks'

import * as svgicon from 'vue-svgicon'
// import all icons
import 'components/icons'

import router from 'router'
import store from 'store'

import App from 'pages/App'

Vue.use(svgicon, {
    tagName: 'icon'
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
