import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'

import 'common/stylus/index.styl'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})