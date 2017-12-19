<template>
  <div class="ui container">
    <h1>🍔 Food</h1>
    <h2></h2>
    <ul>
      <li v-for="item in food" :key="item.id">
        {{item.id}} {{item.label}}
      </li>
    </ul>
  </div>

</template>

<script>

import {mapState} from 'vuex'

export default {
  computed: mapState([
    "food"
  ]),
  async fetch({store}) {
    await store.dispatch("LOAD_ITEMS", "food")
  }
}
</script>