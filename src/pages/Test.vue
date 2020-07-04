<template>
  <q-page class="row items-center justify-evenly">
    Prefetch adds 1 to the following number:
    <br>
    {{ number }}
  </q-page>
</template>

<script lang="ts">
import { defineComponent} from '@vue/composition-api'
import { preFetch } from 'quasar/wrappers'
import { StoreInterface, useStore } from 'src/store'

export default defineComponent({
  preFetch: preFetch<StoreInterface>(({ store }) => {
    store.example.mutations.add()
  }),
  setup () {
    const store = useStore()
    const number = store.example.state.value.number

    return {
      number
    }
  }
})
</script>
