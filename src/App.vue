<template>
  <div id="app">
    <WeatherData/>
  </div>
</template>

<script>
import WeatherData from './components/WeatherData.vue'

export default {
  name: 'App',
  components: {
    WeatherData
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
