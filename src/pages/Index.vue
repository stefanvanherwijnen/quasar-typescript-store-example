<template>
  <q-page class="row items-center justify-evenly">
    The following is zero before preFetch, and 1 after:
    <br>
    {{ number }}
    <br>
    Plus one: {{ plusOne }}
    <router-link to="/test">
     Next page
    </router-link>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { preFetch } from 'quasar/wrappers'
import { StoreInterface, useStore } from 'src/store'

export default defineComponent({
  preFetch: preFetch<StoreInterface>(({ store }) => {
    console.log('PreFetch')
    store.example.mutations.add()
  }),
  setup () {
    const store = useStore()
    const number = store.example.state.value.number
    const plusOne = store.example.getters.plusOne()
    return {
      number,
      plusOne
    }
  }
})
</script>
