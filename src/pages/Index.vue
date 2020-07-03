<template>
  <q-page class="row items-center justify-evenly">
    The following is zero before preFetch, and 1 after:
    <br>
    {{ number }}
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import { preFetch } from 'quasar/wrappers'
import { StoreInterface, useStore } from 'src/store'

export default defineComponent({
  preFetch: preFetch<StoreInterface>(({ store }) => {
    console.log('PreFetch')
    store.example.mutations.add()
  }),
  setup () {
    const store = useStore()
    const number = ref(store.example.state.value.number)

    return {
      number
    }
  }
})
</script>
