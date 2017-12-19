<template>
  <div class="ui container">
    <h1>🦁 Animals</h1>
    <h2></h2>

    <ul>
      <li v-for="animal in animals" :key="animal.id">
        {{animal.login}} {{animal.avatar}}
      </li>
    </ul>

  </div>

</template>

<script>

import {mapState} from 'vuex'

export default {
  computed: mapState([
    "animals"
  ]),
  async fetch({store}) {
    await store.dispatch("LOAD_ITEMS", "animals")
  }
}

</script>