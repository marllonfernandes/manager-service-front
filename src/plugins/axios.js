import Vue from 'vue';
import axios from 'axios';

// axios.defaults.baseURL = 'https://manager-service-de372-default-rtdb.firebaseio.com/'
axios.defaults.baseURL = 'http://localhost:4000/'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios
    }
});