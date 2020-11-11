import axios from 'axios';

const state = {
    weatheritems:[ ]
};

const getters = {
    allData: state => state.weatheritems
};

const actions = {
    async fetchWeatherItems({commit}){
        const response = await axios.get(' http://localhost:8080/data');
        commit('setWeatherItems', response.data);
    }, 

    async filterCity({commit},city){
        //const city = e.target.options[e.target.options.selectedIntedex].innerText;
        const response = await axios.get(`http://localhost:8080/data/${city}`);
        commit('filterWeatherItems', response.data);
    }
};

const mutations = {
    setWeatherItems: (state,weatheritems) => ([...state.weatheritems] = weatheritems),
    filterWeatherItems: (state, weatheritems) => state.weatheritems = weatheritems
};

export default {
    state,
    getters,
    actions,
    mutations
};