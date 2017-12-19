<template>
  <div class="ui center aligned huge header">
    ☁️  URIAGE ☁️
    <!--
    -->
    <h4>APP_ID: {{APP_ID}} INSTANCE_ID: {{INSTANCE_ID}} INSTANCE_NUMBER: {{INSTANCE_NUMBER}}</h4>

  </div>  
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: mapState([
    'APP_ID', 'INSTANCE_ID', 'INSTANCE_NUMBER'
  ])
}
</script>
