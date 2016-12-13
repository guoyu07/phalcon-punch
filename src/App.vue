<template>
  <div id="app">
    <img src="./assets/skipperLogo.png">
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
