<template>
  <div>
    <h3>WeatherHistory</h3>
    <button v-on:click="isHidden = true ">ShowData</button>
    <button v-on:click="isHidden = false">CloseData</button>
    <div v-if="isHidden == true" class="weatherdatalist">
      <div v-for="data in allData" :key="data.time" class="data">{{ data }}</div>
    </div>
    <h3>WeatherForecast</h3>
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
  data(){
    return {
    isHidden: false
   }
  },
  created(){
    this.fetchWeatherItems();
    console.log(this.isHidden);
  }
};
</script>

<style scoped>
.weatherdatalist {
  display:-moz-stack;
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