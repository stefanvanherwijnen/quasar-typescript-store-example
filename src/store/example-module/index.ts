import Vue from 'vue'
import VueCompositionAPI, { ref, computed } from '@vue/composition-api'
Vue.use(VueCompositionAPI)

interface ExampleStateInterface {
  number: number
}

interface ExampleMutationsInterface {
  add: () => void
}

const state = ref<ExampleStateInterface>({
  number: 0
})

const mutations: ExampleMutationsInterface = {
  add: () => { state.value.number = 1 }
}

export default {
  state: computed(() => state.value),
  mutations: mutations
}
