<template>
  <div>
    Filter city:
    <select @change="onCityChange" v-model="city">
      <option value="Horsens">Horsens</option>
      <option value="Aarhus">Aarhus</option>
      <option value="Copenhagen">Copenhagen</option>
    </select>
    <div>
      Filter time:
      <select @change="onTimeChange" v-model="time">
        <option value="0">Today</option>
        <option value="1">1 Day</option>
        <option value="2">2 Days</option>
        <option value="3">3 Days</option>
        <option value="4">4 Days</option>
        <option value="5">5 Days</option>
      </select>
    </div>
  </div>
</template>

<script>
import {  mapActions } from "vuex";

export default {
  name: "FilterByCity",
  data: function() {
    return {
      time: 0,
      city: 'Horsens',
    };
  },
  methods: {
    ...mapActions(["filterCity", "filterTimeHistorical","filterTimeForecast"]),
    onCityChange() {
      this.filterCity(this.city);
    },
    onTimeChange() {
      console.log("This is inside the component" + this.time);
      console.log("This is inside the component" + this.city);
      let result = {city:this.city, time:this.time};
      this.filterTimeHistorical(result);
      this.filterTimeForecast(result);
    },
  },
};
</script>

<style  scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>