<template>
  <div>
    <form>
      <h3>Add historical data</h3>
      <hr />
      <div class="form-group">
        <label for="type">Type</label>
        <input
          type="text"
          placeholder="Required"
          id="type"
          class="form-control"
          v-model="historical_data.type"
        />
      </div>
      <div class="form-group">
        <label for="time">Time</label>
        <input
          type="text"
          placeholder="UTC format"
          id="time"
          class="form-control"
          v-model="historical_data.time"
        />
      </div>
      <div class="form-group">
        <label for="place">Place</label>
        <input
          type="text"
          placeholder="Required"
          id="place"
          class="form-control"
          v-model="historical_data.place"
        />
      </div>
      <div class="form-group">
        <label for="value">Value</label>
        <input
          type="text"
          placeholder="Required"
          id="value"
          class="form-control"
          v-model="historical_data.value"
        />
      </div>
      <div class="form-group">
        <label for="unit">Unit</label>
        <input
          type="text"
          placeholder="Required"
          id="unit"
          class="form-control"
          v-model="historical_data.unit"
        />
      </div>

      <div class="form-group">
        <label for="precipitationType">Precitation Type</label>
        <input
          type="text"
          placeholder="only for precipitation"
          id="precipitationType"
          class="form-control"
          v-model="historical_data.precitation_type"
        />
      </div>

      <div class="form-group">
        <label for="direction">Direction</label>
        <input
          type="text"
          placeholder="Only for wind"
          id="direction"
          class="form-control"
          v-model="historical_data.direction"
        />
      </div>
    </form>
    <button class="btn btn-primary" @click.prevent="addWeather">Submit!</button>
  </div>
</template>

<script>
import {  mapActions } from "vuex";
export default {
  data() {
    return {
      historical_data: {
        type: "",
        time: "",
        place: "",
        value: "",
        unit: "",
        precipitation_type: "",
        direction: "",
      },
    };
  },
  methods: {
    ...mapActions(["addDataObject"]),
    addWeather() {
      console.log(this.historical_data);
      this.addDataObject(this.historical_data);
    }
  },
};
</script>

<style  scoped>
</style>