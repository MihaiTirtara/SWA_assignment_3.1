<template>
  <div id="app">
    <div class="Filters">
      <Filters />
      <AddData/>
    </div>
    <WeatherData />
  </div>
</template>

<script>
import WeatherData from "./components/WeatherData.vue";
import Filters from "./components/Filters.vue";
import AddData from "./components/AddData.vue"

export default {
  name: "App",
  components: {
    WeatherData,
    Filters,
    AddData
    
  },
};
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

.Filters
{
  display:-webkit-inline-flex;
}
</style>
