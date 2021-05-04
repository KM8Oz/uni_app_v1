import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios_private = axios.create({
    baseURL:"https://dev.dupagadir.ru/private/",
    timeout:1000
})
Vue.prototype.$axios = axios.create({
    baseURL:"https://dev.dupagadir.ru/public/",
    timeout:1000
})
