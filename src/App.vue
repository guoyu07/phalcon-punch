<template>
  <div id="app">
    <img class="center" src="./assets/skipperLogo.png">
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
  color: #2c3e50;
  margin-top: 60px;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto
}
</style>
