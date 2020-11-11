<template>
  <div>
    <h3>WeatherHistory</h3>
    <button v-on:click="isHistoryHidden = true ">ShowData</button>
    <button v-on:click="isHistoryHidden = false">CloseData</button>
    <div v-if="isHistoryHidden == true" class="weatherdatalist">
      <div v-for="data in allHistoryData" :key="data.time" class="data">{{ data }}</div>
    </div>
    <h3>WeatherForecast</h3>
     <button v-on:click="isForecastHidden = true ">ShowData</button>
    <button v-on:click="isForecastHidden = false">CloseData</button>
    <div v-if="isForecastHidden == true" class="weatherdatalist">
      <div v-for="data in allForecastData" :key="data.time" class="data">{{ data }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters,mapActions } from "vuex";

export default {
  name: "WeatherData",
  computed: mapGetters(['allHistoryData','allForecastData']),
  methods:{
    ...mapActions(['fetchHistoryItems'])
  },
  data(){
    return {
    isHistoryHidden: false,
    isForecastHidden:false
   }
  },
  created(){
    this.fetchHistoryItems();
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