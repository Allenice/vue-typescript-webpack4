import * as svgicon from 'vue-svgicon'
import store from 'store'

// import all icons
import 'components/icons'

import HelloWorld from 'components/HelloWorld'

export default ({ Vue, options, router, siteData }) => {
    Vue.use(svgicon, {
        tagName: 'icon'
    })

    options.store = store

    // 注册项目的全局组件
    Vue.component('hello-world', HelloWorld)
}
