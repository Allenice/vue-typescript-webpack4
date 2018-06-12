/**
 * vuex store
 */

import Vue from 'vue'
import Vuex from 'vuex'
import { mutation } from './utils/vuexUtil'
import keymirror from './utils/keymirror'

// import modules
import demo from './modules/demo'

Vue.use(Vuex)

let state: Types.State.RootState = {}

let mutations = mutation(state, {})

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',

    state: state,

    mutations: mutations,

    getters: {},

    actions: {},

    modules: {
        demo
    }
})

export let types = {
    state: keymirror(state),
    mutations: keymirror(mutations)
}

export default store
