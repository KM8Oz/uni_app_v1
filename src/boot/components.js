import Vue from 'vue'
import Header from "../components/header.vue";
import HeaderDesk from "../components/header_desktop.vue";
Vue.component('m-header', Header);
Vue.component('d-header', HeaderDesk);
import Sign from "../components/sign.vue";
Vue.component('m-sign', Sign);
import ToggleButton from 'vue-js-toggle-button';
Vue.use(ToggleButton)