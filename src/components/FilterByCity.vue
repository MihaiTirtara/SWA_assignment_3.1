<template>
  <div>
    Filter city:
    <select @change="onChange" v-model="city">
      <option value="Horsens">Horsens</option>
      <option value="Aarhus">Aarhus</option>
      <option value="Copenhagen">Copenhagen</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
name:"FilterByCity",
data(){
    return{
        city:"Horsens"
    }
},
methods:{
 ...mapActions(['filterCity']),
 onChange(){
     this.filterCity(this.city)
 }
}
};
</script>

<style  scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>