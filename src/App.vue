<template>
  <div id="app">

    <trip></trip>
  </div>
</template>

<script>
import Trip from './components/Trip.vue'

export default {
  name: 'app',
  components: {
    Trip
  }
}
</script>
<style>
  @import "assets/global.css";
  @import "assets/style.css";
</style>
