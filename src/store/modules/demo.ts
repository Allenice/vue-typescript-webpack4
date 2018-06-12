/**
 * demo store
 * @author Allenice <994298628@qq.com>
 * @date 2018-06-10 11:03:06
 * @since 1.0.0
 */

import keymirror from 'store/utils/keymirror'
// import api from 'api'

import { namespace } from 'vuex-class'

import { getter, mutation, action, decorator } from 'store/utils/vuexUtil'

export const storeName = 'demo'

/*** state ***/
let state = {
    name: 'Vue-Typescript'
}

/*** getters ***/
let getters = getter(state, {})

/*** mutations ***/
let mutations = mutation(state, {})

/*** actions ***/
let actions = action(state, {})

/*** module store ***/
let store = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

let moduleDecorator = namespace(storeName)

/*** exports ***/
export let types = {
    state: keymirror(state),
    getter: keymirror(getters),
    mutation: keymirror(mutations),
    action: keymirror(actions)
}

export let State = decorator(moduleDecorator.State, types.state)
export let Getter = decorator(moduleDecorator.Getter, types.getter)
export let Mutation = decorator(moduleDecorator.Mutation, types.mutation)
export let Action = decorator(moduleDecorator.Action, types.action)

export default store
