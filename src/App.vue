<template>
  <div id="app">
    <div class="Filters">
      <FilterByCity />
      <FilterByTime/>
    </div>
    <WeatherData />
  </div>
</template>

<script>
import WeatherData from "./components/WeatherData.vue";
import FilterByCity from "./components/FilterByCity.vue";
import FilterByTime from "./components/FilterByTime.vue";

export default {
  name: "App",
  components: {
    WeatherData,
    FilterByCity,
    FilterByTime,
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
