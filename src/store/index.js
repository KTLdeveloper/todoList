import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules
})

if (module.hot) {
    module.hot.accept(['./modules'], () => {
        const modules = require('./modules').default
        store.hotUpdate({
            modules
        })
    })
}

export default store
