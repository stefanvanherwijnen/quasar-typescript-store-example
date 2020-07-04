import Vue from 'vue'
import VueCompositionAPI, { reactive, computed } from '@vue/composition-api'
Vue.use(VueCompositionAPI)

const state = reactive({
  number: 0
})

const mutations = {
  add: () => { state.number++ }
}

const actions = {
  load: () => {}
}

const getters = {
  plusOne: () => state.number + 1
}

export type ExampleStateInterface = typeof state
export type ExampleMutationsInterface = typeof mutations
export type ExampleActionsInterface = typeof actions
export type ExampleGettersInterface = typeof getters
export default {
  state: computed(() => state),
  mutations: mutations,
  actions: actions,
  getters: getters
}
