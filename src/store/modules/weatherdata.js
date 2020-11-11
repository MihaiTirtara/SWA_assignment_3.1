import axios from 'axios';


const state = {
    historyitems: [],
    forecastitems: []
};

const getters = {
    allHistoryData: state => {
        return state.historyitems
    },
    allForecastData: state => {
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
        const responseHistorical = await axios.get(`http://localhost:8080/data/${city}`);
        commit('setHistoryItems', responseHistorical.data);
        const responseForecast = await axios.get(`http://localhost:8080/forecast/${city}`)
        commit('setForecastItems', responseForecast.data);
    },

    async filterTimeHistorical({ commit }, {city, time}) {
        const responseHistorical = await axios.get(`http://localhost:8080/data/${city}`);
        commit('setHistoryItems', responseHistorical.data);
        const date2 = new Date();
        date2.setDate(date2.getDate() - time);
        commit('filterHistoryTime', date2);
    }
};



const mutations = {
    setHistoryItems: (state, historyitems) => state.historyitems = historyitems,
    setForecastItems: (state, forecastitems) => state.forecastitems = forecastitems,
    filterHistoryTime: (state, date) => state.historyitems = state.historyitems.filter(item => { return new Date(item.time).getUTCDate() <= date.getUTCDate() })
};

export default {
    state,
    getters,
    actions,
    mutations
};