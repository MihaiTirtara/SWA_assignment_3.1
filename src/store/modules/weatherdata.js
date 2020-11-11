import axios from 'axios';


const state = {
    historyitems: [],
    forecastitems: []
};

const getters = {
    allHistoryData: state =>{
        return state.historyitems
    },
    allForecastData : state => {
        return state.forecastitems
    }
};

const actions = {
    async fetchHistoryItems({ commit }) {
        const response = await axios.get(' http://localhost:8080/data');
        commit('setHistoryItems', response.data);
    },

    async fetchForecastItems({ commit }) {
        const response = await axios.get(' http://localhost:8080/forecast');
        commit('setForecastItems', response.data);
    },

    async filterCity({ commit }, city) {
        //const city = e.target.options[e.target.options.selectedIntedex].innerText;
        const responseHistorical = await axios.get(`http://localhost:8080/data/${city}`);
        commit('filterHistoryItems', responseHistorical.data);
        const responseForecast = await axios.get(`http://localhost:8080/forecast/${city}`)
        commit('filterForecastItems', responseForecast.data);
    }
};

const mutations = {
    setHistoryItems: (state, historyitems) => ([...state.historyitems] = historyitems),
    setForecastItems: (state, forecastitems) => ([...state.forecastitems] = forecastitems),
    filterHistoryItems: (state, historyitems) => state.historyitems = historyitems,
    filterForecastItems: (state, forecastitems) => state.forecastitems = forecastitems

};

export default {
    state,
    getters,
    actions,
    mutations
};