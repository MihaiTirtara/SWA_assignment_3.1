<template>
  <div>
    <h3>WeatherData</h3>
    <div class="weatherdatalist">
      <div v-for="data in allData" :key="data.time" class="data">{{ data }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters,mapActions } from "vuex";

export default {
  name: "WeatherData",
  computed: mapGetters(['allData']),
  methods:{
    ...mapActions(['fetchWeatherItems'])
  },
  created(){
      this.fetchWeatherItems();
  }
};
</script>

<style scoped>
.weatherdatalist {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.data {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
</style>