<template>
  <div class="ui container">
    <clever-cloud-title></clever-cloud-title>
    <header>
      <nav class="ui horizontal list">
        <nuxt-link class="item" to="/">Home</nuxt-link>
        <nuxt-link class="item" to="/animals">Animals</nuxt-link>
        <nuxt-link class="item" to="/food">Food</nuxt-link>
      </nav>
    </header>
    <!-- pages -->
    <nuxt></nuxt>
  </div>
  
</template>

<script>
import cleverCloudTitle from '~/components/clever-cloud-title.vue'

export default {
  components:{
    cleverCloudTitle
  }
}
</script>
